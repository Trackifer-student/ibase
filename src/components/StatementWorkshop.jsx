import { useEffect, useState } from 'react'
import { appleSource, caseEvents, checkStatementAnswer, northstarStatements, statementGuides } from '../data/statementCase.js'
import { gradeStatementCells, practiceFields } from '../utils/statementPractice.js'
import { readDraft, writeDraft } from '../utils/activityDrafts.js'
const fmt = value => value === 0 ? '0' : value < 0 ? `(${Math.abs(value).toLocaleString('en-US')})` : value.toLocaleString('en-US')
function StatementTable({ title, rows, caption }) {
  return <div className="statement-table-wrap"><table className="statement-table"><caption>{title}{caption && <small>{caption}</small>}</caption><thead><tr><th scope="col">Line item</th><th scope="col">$ millions</th></tr></thead><tbody>{rows.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{fmt(value)}</td></tr>)}</tbody></table></div>
}
export default function StatementWorkshop({ lessonId, onContinue, onBack, onSaveSnapshot }) {
  const guide = statementGuides[lessonId]
  const [saved] = useState(() => readDraft(`workshop:${lessonId}`) || {})
  const [eventCount, setEventCount] = useState(() => Number.isInteger(saved.eventCount) ? Math.max(1, Math.min(5, saved.eventCount)) : 1)
  const [cells, setCells] = useState(saved.cells || {})
  const [checked, setChecked] = useState(false)
  const [solutionSeen, setSolutionSeen] = useState(false)
  const [saveError, setSaveError] = useState('')
  const [answer, setAnswer] = useState(saved.answer || '')
  const [result, setResult] = useState(undefined)
  const [prediction, setPrediction] = useState(saved.prediction || '')
  // Persist to external browser storage and report a failed write without losing the draft.
  // eslint-disable-next-line react/set-state-in-effect
  useEffect(() => { try { writeDraft(`workshop:${lessonId}`, { eventCount, cells, answer, prediction }); setSaveError('') } catch { setSaveError('Could not save this worksheet. Copy your work to your notebook or download notes.') } }, [lessonId, eventCount, cells, answer, prediction])
  const grade = gradeStatementCells(eventCount, cells)
  const move = count => { setEventCount(count); setCells({}); setChecked(false); setSolutionSeen(false) }
  const s = northstarStatements(eventCount)
  return <article className="lesson-card statement-workshop">
    <p className="eyebrow">NORTHSTAR EQUIPMENT · CONTINUING CASE</p>
    <h1>{guide.focus}</h1>
    <p className="lesson-lead">Follow a fictional national manufacturer of industrial machinery, with customers and service teams across the country. Start with its first reporting period; the same business carries through these four lessons.</p>
    <p>All Northstar figures are fictional, in $ millions. To isolate the mechanics, this case excludes tax, interest, dividends and other transactions. Events are cumulative within one period.</p>
    <section aria-label="Reference notes"><h2>Keep these ideas</h2><ul>{guide.points.map(point => <li key={point}>{point}</li>)}</ul><p className="takeaway-box">{guide.formula}</p><p><strong>Watch for:</strong> {guide.trap}</p></section>
    <section><h2>Build the statements yourself</h2><p>Read the recorded events and enter the resulting statement figures. Explain the links in your notebook before revealing the walkthrough.</p>
      <p><strong>Opening position:</strong> cash 100, inventory 50, net equipment 150, debt 0 and equity 300. All numbers are $ millions.</p>
      <ol>{caseEvents.slice(0, eventCount).map(event => <li key={event.id}><strong>{event.title}:</strong> {event.detail}</li>)}</ol>
      <p>Enter cumulative balances after these events, rather than just the latest change. Use negative numbers for cash outflows. Inventory is {s.inventory} after the recorded events.</p>
      <div className="statement-table-wrap"><table className="statement-table practice-table"><caption>Northstar worksheet · event {eventCount} of 5</caption><thead><tr><th scope="col">Statement / line item</th><th scope="col">Your figure ($mm)</th></tr></thead><tbody>{practiceFields.map(([key, label, statement, hint]) => <tr key={key}><th scope="row"><small>{statement}</small>{label}{checked && !grade.cells.find(c => c.key === key).correct && <p id={`hint-${key}`}>{hint}</p>}</th><td><input aria-label={`Northstar ${label}`} aria-describedby={checked && !grade.cells.find(c => c.key === key).correct ? `hint-${key}` : undefined} inputMode="decimal" value={cells[key] || ''} onChange={e => { setCells(current => ({ ...current, [key]: e.target.value })); setChecked(false) }} />{checked && <span>{grade.cells.find(c => c.key === key).correct ? 'Correct' : 'Revisit'}</span>}</td></tr>)}</tbody></table></div>
      <label>Explain one link between profit and cash<textarea value={prediction} onChange={e => setPrediction(e.target.value)} /></label>
      <div className="workshop-actions"><button onClick={() => setChecked(true)}>Check my statements</button><button disabled={eventCount === 1} onClick={() => move(eventCount - 1)}>Previous event</button><button disabled={eventCount === 5} onClick={() => move(eventCount + 1)}>Next event</button></div>
      {checked && <div role="status"><strong>{grade.correct ? 'All worksheet figures are correct.' : `${grade.cells.filter(c => c.correct).length} of ${grade.cells.length} figures are correct. Use the hints to repair the rest.`}</strong><p>Balance-sheet difference: {grade.balance === null ? 'enter assets, debt and equity' : fmt(grade.balance)}. Cash-bridge difference: {grade.cashBridge === null ? 'enter the cash-flow categories and ending cash' : fmt(grade.cashBridge)}.</p><p>A zero reconciliation alone does not prove the numbers are right. {solutionSeen ? 'You viewed the walkthrough; try a later attempt independently.' : 'Figures are checked automatically; your written reasoning still needs your own or a mentor’s review.'}</p></div>}
      {saveError && <p role="alert">{saveError}</p>}
      <details onToggle={e => { if (e.currentTarget.open) setSolutionSeen(true) }}><summary>Need help? Reveal the worked statements</summary>
      <div className="statement-grid">
        <StatementTable title="Income statement" caption="Period to date" rows={[["Revenue", s.revenue], ['Cost of goods sold', -s.cogs], ['Cash operating costs', -s.costs], ['Depreciation', -s.da], ['Net income', s.netIncome]]} />
        <StatementTable title="Cash flow statement" caption="Period to date; indirect method" rows={[["Net income", s.netIncome], ['Add back depreciation', s.da], ['Increase in receivables', -s.receivables], ['Decrease in inventory', 50 - s.inventory], ['Operating cash flow', s.cfo], ['Investing cash flow', s.cfi], ['Financing cash flow', s.cff], ['Beginning cash', 100], ['Ending cash', s.cash]]} />
        <StatementTable title="Balance sheet" caption="After recorded events" rows={[["Cash", s.cash], ['Receivables', s.receivables], ['Inventory', s.inventory], ['Equipment, net', s.ppe], ['Total assets', s.assets], ['Debt', s.debt], ['Equity', s.equity], ['Assets − liabilities − equity', s.balanceCheck]]} />
      </div>
      </details>
      <button className="secondary-button" onClick={() => onSaveSnapshot(`Northstar · event ${eventCount} of ${caseEvents.length}\nMy prediction: ${prediction || '(not entered)'}\nMy worksheet: ${JSON.stringify(cells)}\nChecked correct: ${checked && grade.correct}; walkthrough viewed: ${solutionSeen}\nMy explanation: `)}>Add this case snapshot to my notes</button>
      <details><summary>Explain the complete bridge</summary><p>After all five events, revenue of $120 less $50 inventory cost, $30 operating costs and $10 depreciation leaves $30 net income. All invoices have been collected. Operating cash flow is $90: $30 profit + $10 depreciation + $50 inventory reduction. Investing uses $60 and borrowing brings in $50. Cash rises from $100 to $180. Assets of $380 equal $50 debt plus $330 equity.</p><p>Inventory was already on the opening balance sheet. Its $50 reduction is added in the indirect reconciliation because its expense reduced profit without a cash purchase this period. In a later period, replenishing inventory would use cash.</p></details>
    </section>
    {guide.realRows && <section><h2>Now read a real company statement</h2><p>Apple is a real comparison, separate from Northstar. This selected historical excerpt is from Apple’s unaudited FY2025 earnings statements, not a complete annual filing. Operations and cash flow cover the twelve months ended September 27, 2025; the balance sheet is at that date. Parentheses indicate negative amounts.</p>
      <StatementTable title={guide.realTitle} rows={guide.realRows} />
      <p><a href={`${appleSource}#page=${guide.page}`} target="_blank" rel="noreferrer">Open Apple’s original statements · page {guide.page}</a>. Check the original headings and neighboring lines before calculating. Historical teaching example; not a claim about current results.</p>
      <label htmlFor="statement-answer">{guide.question}</label><div className="workshop-actions"><input id="statement-answer" inputMode="decimal" value={answer} onChange={e => { setAnswer(e.target.value); setResult(undefined) }} /><span>{guide.unit}</span><button onClick={() => setResult(checkStatementAnswer(answer, guide))}>Check calculation</button></div>
      {result !== undefined && <div role="status"><strong>{result === null ? 'Enter a number in the stated units.' : result ? 'Calculation correct.' : 'Recheck the line items, units and arithmetic.'}</strong>{result !== null && <p>{guide.explanation}</p>}</div>}
      <p>Calculation feedback checks this exercise only; it does not certify financial-statement or modeling proficiency.</p>
    </section>}
    <p><strong>Write it in your own words:</strong> {guide.prompt}</p>
    <p className="workshop-source">IBase teaching case and explanations prepared with AI assistance. Source figures checked against the linked Apple release on November 4, 2026. No independent banker review is claimed.</p>
    <div className="workshop-actions"><button onClick={onBack}>← Back</button><button className="primary-button" onClick={onContinue}>Continue lesson →</button></div>
  </article>
}
