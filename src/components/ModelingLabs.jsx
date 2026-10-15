import { useMemo, useState } from 'react'
import {
  buildLabCsv,
  calculateDcf,
  calculateLbo,
  calculateMerger,
  dcfDefaults,
  formatMoney,
  formatNumber,
  lboDefaults,
  mergerDefaults,
} from '../utils/modelingLabCalculations'
import { modelingLabs as LABS } from '../data/modelingLabs'


const readCompleted = () => {
  try {
    const stored = JSON.parse(localStorage.getItem('ibase-completed-labs') || '[]')
    return Array.isArray(stored) ? stored.filter((id) => LABS.some((lab) => lab.id === id)) : []
  } catch {
    return []
  }
}

function LabInput({ label, value, onChange, suffix = '', step = 'any', min }) {
  return (
    <label className="lab-input">
      <span>{label}</span>
      <div>
        <input
          type="number"
          value={value}
          step={step}
          min={min}
          onChange={(event) => onChange(event.target.value)}
        />
        {suffix && <small>{suffix}</small>}
      </div>
    </label>
  )
}

function Metric({ label, value, emphasis = false }) {
  return (
    <div className={emphasis ? 'lab-metric emphasis' : 'lab-metric'}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function downloadCsv(labId, inputs, solution) {
  const csv = buildLabCsv(labId, inputs, solution)
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'ibase-' + labId + '-' + (solution ? 'solution' : 'starter') + '.csv'
  document.body.appendChild(link)
  link.click()
  link.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function DcfLab({ inputs, setInputs, revealed }) {
  const result = useMemo(() => calculateDcf(inputs), [inputs])
  const set = (key) => (value) => setInputs((current) => ({ ...current, [key]: value }))
  return (
    <>
      <div className="lab-case">
        <p><strong>Case:</strong> You are valuing Northstar Services at the end of 2026. Revenue is $560 million. Build a five-year DCF using the assumptions below.</p>
        <ol>
          <li>Forecast revenue, EBIT, NOPAT, D&amp;A, CapEx, operating NWC, and UFCF for 2027-2031.</li>
          <li>Discount each UFCF at WACC and calculate terminal value using perpetuity growth.</li>
          <li>Bridge enterprise value to equity value, then divide by diluted shares.</li>
        </ol>
      </div>
      <div className="lab-workspace">
        <div className="lab-inputs">
          <h3>Assumptions</h3>
          <LabInput label="Starting revenue" value={inputs.startingRevenue} onChange={set('startingRevenue')} suffix="$mm" min="1" />
          <LabInput label="Revenue growth" value={inputs.revenueGrowthPct} onChange={set('revenueGrowthPct')} suffix="%" />
          <LabInput label="EBIT margin" value={inputs.ebitMarginPct} onChange={set('ebitMarginPct')} suffix="%" />
          <LabInput label="D&A / revenue" value={inputs.daPctRevenue} onChange={set('daPctRevenue')} suffix="%" />
          <LabInput label="CapEx / revenue" value={inputs.capexPctRevenue} onChange={set('capexPctRevenue')} suffix="%" />
          <LabInput label="Operating NWC / revenue" value={inputs.nwcPctRevenue} onChange={set('nwcPctRevenue')} suffix="%" />
          <LabInput label="Tax rate" value={inputs.taxRatePct} onChange={set('taxRatePct')} suffix="%" />
          <LabInput label="WACC" value={inputs.waccPct} onChange={set('waccPct')} suffix="%" />
          <LabInput label="Terminal growth" value={inputs.terminalGrowthPct} onChange={set('terminalGrowthPct')} suffix="%" />
          <LabInput label="Net debt" value={inputs.netDebt} onChange={set('netDebt')} suffix="$mm" />
          <LabInput label="Diluted shares" value={inputs.dilutedShares} onChange={set('dilutedShares')} suffix="mm" min="1" />
        </div>
        <div className="lab-output">
          <h3>{revealed ? 'Model check' : 'Build it in Excel first'}</h3>
          {!revealed && <p className="lab-hidden-answer">Download the starter file, build the formulas yourself, then reveal the check figures here.</p>}
          {revealed && !result.valid && <p className="lab-error" role="alert">{result.error}</p>}
          {revealed && result.valid && <>
            <div className="lab-metrics">
              <Metric label="Enterprise value" value={formatMoney(result.enterpriseValue) + 'mm'} />
              <Metric label="Equity value" value={formatMoney(result.equityValue) + 'mm'} />
              <Metric label="Implied share price" value={formatMoney(result.impliedSharePrice)} emphasis />
            </div>
            <div className="lab-table-wrap">
              <table className="lab-table">
                <thead><tr><th>Year</th><th>Revenue</th><th>UFCF</th><th>PV UFCF</th></tr></thead>
                <tbody>{result.rows.map((row, index) => <tr key={row.year}><td>{2027 + index}</td><td>{formatMoney(row.revenue)}</td><td>{formatMoney(row.ufcf)}</td><td>{formatMoney(row.pvUfcf)}</td></tr>)}</tbody>
              </table>
            </div>
            <p className="lab-check-note">Terminal value: {formatMoney(result.terminalValue)}mm. Present value of terminal value: {formatMoney(result.pvTerminalValue)}mm.</p>
          </>}
        </div>
      </div>
      <div className="editorial-note wide-note"><strong>What to notice</strong><p>Terminal value is doing a lot of the work. Change WACC or terminal growth slightly and watch the implied share price move. That sensitivity is why a DCF should be presented as a range, not false precision.</p></div>
    </>
  )
}

function MergerLab({ inputs, setInputs, revealed }) {
  const result = useMemo(() => calculateMerger(inputs), [inputs])
  const set = (key) => (value) => setInputs((current) => ({ ...current, [key]: value }))
  return (
    <>
      <div className="lab-case">
        <p><strong>Case:</strong> BuyerCo is considering acquiring TargetCo for $1.5 billion of equity value. For this simplified exercise, all non-stock consideration is funded with new debt.</p>
        <ol>
          <li>Calculate buyer standalone EPS and the mix of stock and debt financing.</li>
          <li>Calculate new shares, after-tax synergies, and after-tax financing cost.</li>
          <li>Build pro forma net income and shares, then calculate EPS accretion or dilution.</li>
        </ol>
      </div>
      <div className="lab-workspace">
        <div className="lab-inputs">
          <h3>Assumptions</h3>
          <LabInput label="Buyer share price" value={inputs.buyerSharePrice} onChange={set('buyerSharePrice')} suffix="$" min="1" />
          <LabInput label="Buyer diluted shares" value={inputs.buyerShares} onChange={set('buyerShares')} suffix="mm" min="1" />
          <LabInput label="Buyer net income" value={inputs.buyerNetIncome} onChange={set('buyerNetIncome')} suffix="$mm" min="1" />
          <LabInput label="Target purchase equity value" value={inputs.targetPurchaseEquity} onChange={set('targetPurchaseEquity')} suffix="$mm" min="1" />
          <LabInput label="Target net income" value={inputs.targetNetIncome} onChange={set('targetNetIncome')} suffix="$mm" />
          <LabInput label="Stock consideration" value={inputs.stockConsiderationPct} onChange={set('stockConsiderationPct')} suffix="%" min="0" />
          <LabInput label="Debt interest rate" value={inputs.debtInterestRatePct} onChange={set('debtInterestRatePct')} suffix="%" min="0" />
          <LabInput label="Pretax synergies" value={inputs.pretaxSynergies} onChange={set('pretaxSynergies')} suffix="$mm" />
          <LabInput label="Tax rate" value={inputs.taxRatePct} onChange={set('taxRatePct')} suffix="%" min="0" />
        </div>
        <div className="lab-output">
          <h3>{revealed ? 'Model check' : 'Build it in Excel first'}</h3>
          {!revealed && <p className="lab-hidden-answer">Do not start with accretion. Build the earnings bridge and share-count bridge first.</p>}
          {revealed && !result.valid && <p className="lab-error" role="alert">{result.error}</p>}
          {revealed && result.valid && <>
            <div className="lab-metrics">
              <Metric label="Buyer standalone EPS" value={'$' + formatNumber(result.buyerEps, 2)} />
              <Metric label="Pro forma EPS" value={'$' + formatNumber(result.proFormaEps, 2)} />
              <Metric label="EPS accretion / (dilution)" value={formatNumber(result.accretionPct, 1) + '%'} emphasis />
            </div>
            <div className="lab-bridge">
              <p><span>Stock consideration</span><strong>{formatMoney(result.stockConsideration)}mm</strong></p>
              <p><span>Debt issued</span><strong>{formatMoney(result.debtIssued)}mm</strong></p>
              <p><span>New shares</span><strong>{formatNumber(result.newShares, 1)}mm</strong></p>
              <p><span>After-tax synergies</span><strong>{formatMoney(result.afterTaxSynergies)}mm</strong></p>
              <p><span>After-tax interest</span><strong>{formatMoney(result.afterTaxInterest)}mm</strong></p>
              <p><span>Pro forma net income</span><strong>{formatMoney(result.proFormaNetIncome)}mm</strong></p>
            </div>
          </>}
        </div>
      </div>
      <div className="editorial-note wide-note"><strong>Model limitation</strong><p>This is intentionally simplified. A live merger model may also include target debt refinancing, cash on hand, foregone interest income, purchase-accounting amortization, fees, share-price assumptions, and other adjustments. Accretion does not prove that a deal creates value.</p></div>
    </>
  )
}

function LboLab({ inputs, setInputs, revealed }) {
  const result = useMemo(() => calculateLbo(inputs), [inputs])
  const set = (key) => (value) => setInputs((current) => ({ ...current, [key]: value }))
  return (
    <>
      <div className="lab-case">
        <p><strong>Case:</strong> A sponsor buys a business with $100 million of entry EBITDA at 10.0x. The deal uses $600 million of debt and the sponsor funds the rest with equity.</p>
        <ol>
          <li>Calculate entry enterprise value and sponsor equity.</li>
          <li>Grow EBITDA, convert a percentage of EBITDA to cash available for debt paydown, and reduce debt each year.</li>
          <li>Calculate exit EV, exit equity, MOIC, and IRR with no interim sponsor distributions.</li>
        </ol>
      </div>
      <div className="lab-workspace">
        <div className="lab-inputs">
          <h3>Assumptions</h3>
          <LabInput label="Entry EBITDA" value={inputs.entryEbitda} onChange={set('entryEbitda')} suffix="$mm" min="1" />
          <LabInput label="Entry multiple" value={inputs.entryMultiple} onChange={set('entryMultiple')} suffix="x" min="0.1" />
          <LabInput label="Debt at entry" value={inputs.debtAtEntry} onChange={set('debtAtEntry')} suffix="$mm" min="0" />
          <LabInput label="EBITDA growth" value={inputs.ebitdaGrowthPct} onChange={set('ebitdaGrowthPct')} suffix="%" />
          <LabInput label="FCF conversion of EBITDA" value={inputs.fcfConversionPct} onChange={set('fcfConversionPct')} suffix="%" min="0" />
          <LabInput label="Exit multiple" value={inputs.exitMultiple} onChange={set('exitMultiple')} suffix="x" min="0.1" />
          <LabInput label="Hold period" value={inputs.holdYears} onChange={set('holdYears')} suffix="years" min="1" step="1" />
        </div>
        <div className="lab-output">
          <h3>{revealed ? 'Model check' : 'Build it in Excel first'}</h3>
          {!revealed && <p className="lab-hidden-answer">Build the entry bridge, debt schedule, and exit bridge in that order. Returns come last.</p>}
          {revealed && !result.valid && <p className="lab-error" role="alert">{result.error}</p>}
          {revealed && result.valid && <>
            <div className="lab-metrics">
              <Metric label="Entry sponsor equity" value={formatMoney(result.sponsorEquity) + 'mm'} />
              <Metric label="MOIC" value={formatNumber(result.moic, 2) + 'x'} />
              <Metric label="IRR" value={formatNumber(result.irrPct, 1) + '%'} emphasis />
            </div>
            <div className="lab-table-wrap">
              <table className="lab-table">
                <thead><tr><th>Year</th><th>EBITDA</th><th>Debt paydown</th><th>Ending debt</th></tr></thead>
                <tbody>{result.rows.map((row) => <tr key={row.year}><td>{row.year}</td><td>{formatMoney(row.ebitda)}</td><td>{formatMoney(row.debtPaydown)}</td><td>{formatMoney(row.endingDebt)}</td></tr>)}</tbody>
              </table>
            </div>
            <p className="lab-check-note">Exit EV: {formatMoney(result.exitEnterpriseValue)}mm. Exit equity value: {formatMoney(result.exitEquityValue)}mm.</p>
          </>}
        </div>
      </div>
      <div className="editorial-note wide-note"><strong>What to stress-test</strong><p>Lower the exit multiple, reduce EBITDA growth, or cut cash conversion. A good base case should not require optimistic multiple expansion to produce acceptable returns.</p></div>
    </>
  )
}

function ModelingLabs({ onBack, onLearn, initialLabId = null }) {
  const [activeId, setActiveId] = useState(
    LABS.some((lab) => lab.id === initialLabId) ? initialLabId : 'dcf',
  )
  const [dcfInputs, setDcfInputs] = useState(dcfDefaults)
  const [mergerInputs, setMergerInputs] = useState(mergerDefaults)
  const [lboInputs, setLboInputs] = useState(lboDefaults)
  const [revealed, setRevealed] = useState({})
  const [completed, setCompleted] = useState(readCompleted)
  const [message, setMessage] = useState('')

  const active = LABS.find((lab) => lab.id === activeId)
  const inputs = activeId === 'dcf' ? dcfInputs : activeId === 'merger' ? mergerInputs : lboInputs

  const toggleComplete = () => {
    const next = completed.includes(activeId)
      ? completed.filter((id) => id !== activeId)
      : [...completed, activeId]
    try {
      localStorage.setItem('ibase-completed-labs', JSON.stringify(next))
      setCompleted(next)
      setMessage(next.includes(activeId) ? active.title + ' marked complete.' : active.title + ' marked incomplete.')
    } catch {
      setMessage('Your browser could not save this lab status.')
    }
  }

  return (
    <section className="modeling-labs-page">
      <button className="back-button" onClick={onBack}>← Back Home</button>
      <header className="modeling-labs-intro">
        <p className="eyebrow">PRACTICAL MODELING</p>
        <h1>Build the model, not just the interview answer.</h1>
        <p className="page-intro">Three guided case studies turn the technical curriculum into spreadsheet work. Download the starter CSV, open it in Excel or Google Sheets, build the formulas yourself, then use IBase to check the result.</p>
        <div className="lab-progress"><strong>{completed.length} / {LABS.length}</strong><span>labs complete on this device</span></div>
      </header>

      <div className="lab-selector" aria-label="Modeling labs">
        {LABS.map((lab) => (
          <button key={lab.id} className={activeId === lab.id ? 'active' : ''} onClick={() => { setActiveId(lab.id); setMessage('') }}>
            <span>{lab.number} / {lab.level}</span>
            <strong>{lab.title}</strong>
            <small>{lab.summary}</small>
          </button>
        ))}
      </div>

      <article className="active-lab">
        <div className="active-lab-heading">
          <div><p className="eyebrow">{active.level}</p><h2>{active.title}</h2></div>
          <span className={completed.includes(activeId) ? 'lab-status complete' : 'lab-status'}>{completed.includes(activeId) ? 'Complete' : 'Not complete'}</span>
        </div>

        <div className="lab-download-bar">
          <button className="secondary-button" onClick={() => downloadCsv(activeId, inputs, false)}>Download starter CSV →</button>
          <button className="secondary-button" onClick={() => setRevealed((current) => ({ ...current, [activeId]: !current[activeId] }))}>{revealed[activeId] ? 'Hide model check' : 'Reveal model check'}</button>
          {revealed[activeId] && <button className="secondary-button" onClick={() => downloadCsv(activeId, inputs, true)}>Download formula solution CSV →</button>}
        </div>

        {activeId === 'dcf' && <DcfLab inputs={dcfInputs} setInputs={setDcfInputs} revealed={revealed.dcf} />}
        {activeId === 'merger' && <MergerLab inputs={mergerInputs} setInputs={setMergerInputs} revealed={revealed.merger} />}
        {activeId === 'lbo' && <LboLab inputs={lboInputs} setInputs={setLboInputs} revealed={revealed.lbo} />}

        <div className="lab-completion">
          <button className="primary-button" onClick={toggleComplete}>{completed.includes(activeId) ? 'Mark incomplete' : 'Mark lab complete →'}</button>
          <button className="secondary-button" onClick={onLearn}>Review the curriculum</button>
          {message && <p role="status">{message}</p>}
        </div>
      </article>
    </section>
  )
}

export default ModelingLabs
