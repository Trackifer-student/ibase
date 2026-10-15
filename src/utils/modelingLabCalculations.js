const number = (value) => {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : 0
}

const pct = (value) => number(value) / 100
const round = (value, digits = 2) => {
  const factor = 10 ** digits
  return Math.round((value + Number.EPSILON) * factor) / factor
}

export const dcfDefaults = {
  startingRevenue: 560,
  revenueGrowthPct: 8,
  ebitMarginPct: 18,
  daPctRevenue: 4,
  capexPctRevenue: 5,
  nwcPctRevenue: 12,
  taxRatePct: 25,
  waccPct: 10,
  terminalGrowthPct: 2.5,
  netDebt: 250,
  dilutedShares: 50,
}

export const mergerDefaults = {
  buyerSharePrice: 50,
  buyerShares: 100,
  buyerNetIncome: 300,
  targetPurchaseEquity: 1500,
  targetNetIncome: 90,
  stockConsiderationPct: 40,
  debtInterestRatePct: 6,
  pretaxSynergies: 40,
  taxRatePct: 25,
}

export const lboDefaults = {
  entryEbitda: 100,
  entryMultiple: 10,
  debtAtEntry: 600,
  ebitdaGrowthPct: 7,
  fcfConversionPct: 55,
  exitMultiple: 10,
  holdYears: 5,
}

export function calculateDcf(inputs = dcfDefaults) {
  const wacc = pct(inputs.waccPct)
  const terminalGrowth = pct(inputs.terminalGrowthPct)
  const shares = number(inputs.dilutedShares)
  if (wacc <= terminalGrowth) {
    return { valid: false, error: 'WACC must be greater than terminal growth for the perpetuity-growth formula.' }
  }
  if (wacc <= 0 || shares <= 0 || number(inputs.startingRevenue) <= 0) {
    return { valid: false, error: 'Revenue, WACC, and diluted shares must be greater than zero.' }
  }

  const growth = pct(inputs.revenueGrowthPct)
  const margin = pct(inputs.ebitMarginPct)
  const daPct = pct(inputs.daPctRevenue)
  const capexPct = pct(inputs.capexPctRevenue)
  const nwcPct = pct(inputs.nwcPctRevenue)
  const taxRate = pct(inputs.taxRatePct)
  if (taxRate < 0 || taxRate > 1 || growth <= -1 || daPct < 0 || capexPct < 0 || nwcPct < 0) {
    return { valid: false, error: 'Use a tax rate from 0%-100%, growth above -100%, and nonnegative D&A, CapEx, and NWC assumptions.' }
  }
  let revenue = number(inputs.startingRevenue)
  let priorNwc = revenue * nwcPct
  const rows = []

  for (let year = 1; year <= 5; year += 1) {
    revenue *= 1 + growth
    const ebit = revenue * margin
    const nopat = ebit * (1 - taxRate)
    const da = revenue * daPct
    const capex = revenue * capexPct
    const nwc = revenue * nwcPct
    const changeNwc = nwc - priorNwc
    const ufcf = nopat + da - capex - changeNwc
    const discountFactor = 1 / ((1 + wacc) ** year)
    rows.push({
      year,
      revenue,
      ebit,
      nopat,
      da,
      capex,
      nwc,
      changeNwc,
      ufcf,
      discountFactor,
      pvUfcf: ufcf * discountFactor,
    })
    priorNwc = nwc
  }

  const terminalUfcf = rows.at(-1).ufcf * (1 + terminalGrowth)
  const terminalValue = terminalUfcf / (wacc - terminalGrowth)
  const pvTerminalValue = terminalValue * rows.at(-1).discountFactor
  const enterpriseValue = rows.reduce((sum, row) => sum + row.pvUfcf, 0) + pvTerminalValue
  const equityValue = enterpriseValue - number(inputs.netDebt)
  const impliedSharePrice = equityValue / shares

  return {
    valid: true,
    rows,
    terminalValue,
    pvTerminalValue,
    enterpriseValue,
    equityValue,
    impliedSharePrice,
  }
}

export function calculateMerger(inputs = mergerDefaults) {
  const buyerShares = number(inputs.buyerShares)
  const buyerSharePrice = number(inputs.buyerSharePrice)
  const buyerNetIncome = number(inputs.buyerNetIncome)
  if (buyerShares <= 0 || buyerSharePrice <= 0 || buyerNetIncome <= 0) {
    return { valid: false, error: 'Buyer share price, shares, and net income must be greater than zero.' }
  }

  const stockPct = pct(inputs.stockConsiderationPct)
  if (stockPct < 0 || stockPct > 1) {
    return { valid: false, error: 'Stock consideration must be between 0% and 100%.' }
  }

  const purchaseEquity = number(inputs.targetPurchaseEquity)
  const taxRate = pct(inputs.taxRatePct)
  if (purchaseEquity <= 0 || taxRate < 0 || taxRate > 1 || pct(inputs.debtInterestRatePct) < 0) {
    return { valid: false, error: 'Purchase price must be positive; tax rate must be 0%-100% and interest rate cannot be negative.' }
  }
  const buyerEps = buyerNetIncome / buyerShares
  const stockConsideration = purchaseEquity * stockPct
  const debtIssued = purchaseEquity - stockConsideration
  const newShares = stockConsideration / buyerSharePrice
  const afterTaxSynergies = number(inputs.pretaxSynergies) * (1 - taxRate)
  const afterTaxInterest = debtIssued * pct(inputs.debtInterestRatePct) * (1 - taxRate)
  const proFormaNetIncome =
    buyerNetIncome + number(inputs.targetNetIncome) + afterTaxSynergies - afterTaxInterest
  const proFormaShares = buyerShares + newShares
  const proFormaEps = proFormaNetIncome / proFormaShares
  const accretionPct = ((proFormaEps / buyerEps) - 1) * 100

  return {
    valid: true,
    buyerEps,
    stockConsideration,
    debtIssued,
    newShares,
    afterTaxSynergies,
    afterTaxInterest,
    proFormaNetIncome,
    proFormaShares,
    proFormaEps,
    accretionPct,
  }
}

export function calculateLbo(inputs = lboDefaults) {
  const entryEbitda = number(inputs.entryEbitda)
  const entryMultiple = number(inputs.entryMultiple)
  const debtAtEntry = number(inputs.debtAtEntry)
  const holdYears = Math.max(1, Math.min(10, Math.round(number(inputs.holdYears))))
  const entryEnterpriseValue = entryEbitda * entryMultiple
  const sponsorEquity = entryEnterpriseValue - debtAtEntry
  if (entryEbitda <= 0 || entryMultiple <= 0 || debtAtEntry < 0 || sponsorEquity <= 0 ||
    number(inputs.exitMultiple) <= 0 || pct(inputs.fcfConversionPct) < 0 ||
    pct(inputs.ebitdaGrowthPct) <= -1) {
    return { valid: false, error: 'Use positive EBITDA and multiples, nonnegative debt and cash conversion, growth above -100%, and debt below entry enterprise value.' }
  }

  let ebitda = entryEbitda
  let debt = Math.max(0, debtAtEntry)
  const rows = []
  for (let year = 1; year <= holdYears; year += 1) {
    ebitda *= 1 + pct(inputs.ebitdaGrowthPct)
    const cashAvailable = Math.max(0, ebitda * pct(inputs.fcfConversionPct))
    const debtPaydown = Math.min(cashAvailable, debt)
    debt -= debtPaydown
    rows.push({ year, ebitda, cashAvailable, debtPaydown, endingDebt: debt })
  }

  const exitEnterpriseValue = ebitda * number(inputs.exitMultiple)
  const exitEquityValue = exitEnterpriseValue - debt
  const moic = exitEquityValue / sponsorEquity
  const irrPct = moic > 0 ? ((moic ** (1 / holdYears)) - 1) * 100 : -100

  return {
    valid: true,
    rows,
    entryEnterpriseValue,
    sponsorEquity,
    exitEbitda: ebitda,
    exitDebt: debt,
    exitEnterpriseValue,
    exitEquityValue,
    moic,
    irrPct,
  }
}

const csvCell = (value) => {
  const string = String(value ?? '')
  return /[",\n]/.test(string) ? '"' + string.replaceAll('"', '""') + '"' : string
}
const csv = (rows) => rows.map((row) => row.map(csvCell).join(',')).join('\n') + '\n'

export function buildLabCsv(labId, inputs, includeSolution = false) {
  if (labId === 'dcf') {
    const i = { ...dcfDefaults, ...inputs }
    const rows = [
      ['IBase DCF Modeling Lab'],
      ['Build the forecast and valuation with formulas. Percent inputs are stored as Excel percentages.'],
      [],
      ['Inputs', 'Value'],
      ['Starting Revenue', i.startingRevenue],
      ['Revenue Growth', number(i.revenueGrowthPct) + '%'],
      ['EBIT Margin', number(i.ebitMarginPct) + '%'],
      ['D&A % Revenue', number(i.daPctRevenue) + '%'],
      ['CapEx % Revenue', number(i.capexPctRevenue) + '%'],
      ['Operating NWC % Revenue', number(i.nwcPctRevenue) + '%'],
      ['Tax Rate', number(i.taxRatePct) + '%'],
      ['WACC', number(i.waccPct) + '%'],
      ['Terminal Growth', number(i.terminalGrowthPct) + '%'],
      ['Net Debt', i.netDebt],
      ['Diluted Shares', i.dilutedShares],
      [],
      ['Forecast', '2027', '2028', '2029', '2030', '2031'],
      ['Revenue'],
      ['EBIT'],
      ['NOPAT'],
      ['D&A'],
      ['CapEx'],
      ['Operating NWC'],
      ['Change in NWC'],
      ['UFCF'],
      ['Discount Factor'],
      ['PV of UFCF'],
      [],
      ['Terminal Value'],
      ['PV of Terminal Value'],
      ['Enterprise Value'],
      ['Equity Value'],
      ['Implied Share Price'],
    ]
    if (includeSolution) {
      rows[17].push('=$B$5*(1+$B$6)', '=B18*(1+$B$6)', '=C18*(1+$B$6)', '=D18*(1+$B$6)', '=E18*(1+$B$6)')
      for (let col = 1; col <= 5; col += 1) {
        const letter = String.fromCharCode(65 + col)
        rows[18].push('=' + letter + '18*$B$7')
        rows[19].push('=' + letter + '19*(1-$B$11)')
        rows[20].push('=' + letter + '18*$B$8')
        rows[21].push('=' + letter + '18*$B$9')
        rows[22].push('=' + letter + '18*$B$10')
        rows[23].push(col === 1 ? '=' + letter + '23-($B$5*$B$10)' : '=' + letter + '23-' + String.fromCharCode(64 + col) + '23')
        rows[24].push('=' + letter + '20+' + letter + '21-' + letter + '22-' + letter + '24')
        rows[25].push('=1/(1+$B$12)^' + col)
        rows[26].push('=' + letter + '25*' + letter + '26')
      }
      rows[28].push('', '', '', '', '=F25*(1+$B$13)/($B$12-$B$13)')
      rows[29].push('', '', '', '', '=F29*F26')
      rows[30].push('', '', '', '', '=SUM(B27:F27)+F30')
      rows[31].push('', '', '', '', '=F31-$B$14')
      rows[32].push('', '', '', '', '=F32/$B$15')
    }
    return csv(rows)
  }

  if (labId === 'merger') {
    const i = { ...mergerDefaults, ...inputs }
    const rows = [
      ['IBase Merger Accretion / Dilution Lab'],
      ['Simplified case: non-stock consideration is debt-funded; ignores fees, purchase accounting, and target debt refinancing.'],
      [],
      ['Inputs', 'Value'],
      ['Buyer Share Price', i.buyerSharePrice],
      ['Buyer Diluted Shares', i.buyerShares],
      ['Buyer Net Income', i.buyerNetIncome],
      ['Target Purchase Equity Value', i.targetPurchaseEquity],
      ['Target Net Income', i.targetNetIncome],
      ['Stock Consideration %', number(i.stockConsiderationPct) + '%'],
      ['Debt Interest Rate', number(i.debtInterestRatePct) + '%'],
      ['Pretax Synergies', i.pretaxSynergies],
      ['Tax Rate', number(i.taxRatePct) + '%'],
      [],
      ['Outputs', 'Formula / Result'],
      ['Buyer EPS'],
      ['Stock Consideration'],
      ['Debt Issued'],
      ['New Shares Issued'],
      ['After-tax Synergies'],
      ['After-tax Interest Expense'],
      ['Pro Forma Net Income'],
      ['Pro Forma Shares'],
      ['Pro Forma EPS'],
      ['EPS Accretion / (Dilution)'],
    ]
    if (includeSolution) {
      const formulas = [
        '=B7/B6',
        '=B8*B10',
        '=B8-B17',
        '=B17/B5',
        '=B12*(1-B13)',
        '=B18*B11*(1-B13)',
        '=B7+B9+B20-B21',
        '=B6+B19',
        '=B22/B23',
        '=B24/B16-1',
      ]
      formulas.forEach((formula, index) => rows[15 + index].push(formula))
    }
    return csv(rows)
  }

  if (labId === 'lbo') {
    const i = { ...lboDefaults, ...inputs }
    const years = Math.max(1, Math.min(10, Math.round(number(i.holdYears))))
    const rows = [
      ['IBase LBO Returns Lab'],
      ['Simplified case: FCF conversion is cash available for debt paydown; no interim sponsor distributions.'],
      [],
      ['Inputs', 'Value'],
      ['Entry EBITDA', i.entryEbitda],
      ['Entry Multiple', i.entryMultiple],
      ['Debt at Entry', i.debtAtEntry],
      ['EBITDA Growth', number(i.ebitdaGrowthPct) + '%'],
      ['FCF Conversion of EBITDA', number(i.fcfConversionPct) + '%'],
      ['Exit Multiple', i.exitMultiple],
      ['Hold Years', years],
      [],
      ['Entry Enterprise Value'],
      ['Sponsor Equity'],
      [],
      ['Year', ...Array.from({ length: years }, (_, index) => String(index + 1))],
      ['EBITDA'],
      ['Cash Available for Debt Paydown'],
      ['Debt Paydown'],
      ['Ending Debt'],
      [],
      ['Exit Enterprise Value'],
      ['Exit Equity Value'],
      ['MOIC'],
      ['IRR'],
    ]
    if (includeSolution) {
      rows[12].push('=B5*B6')
      rows[13].push('=B13-B7')
      for (let col = 1; col <= years; col += 1) {
        const letter = String.fromCharCode(65 + col)
        const priorLetter = String.fromCharCode(64 + col)
        const priorDebt = col === 1 ? '$B$7' : priorLetter + '20'
        rows[16].push(col === 1 ? '=$B$5*(1+$B$8)' : '=' + priorLetter + '17*(1+$B$8)')
        rows[17].push('=' + letter + '17*$B$9')
        rows[18].push('=MIN(' + letter + '18,' + priorDebt + ')')
        rows[19].push('=' + priorDebt + '-' + letter + '19')
      }
      const exitLetter = String.fromCharCode(65 + years)
      const padding = Array(Math.max(0, years - 1)).fill('')
      rows[21].push(...padding, '=' + exitLetter + '17*$B$10')
      rows[22].push(...padding, '=' + exitLetter + '22-' + exitLetter + '20')
      rows[23].push(...padding, '=' + exitLetter + '23/$B$14')
      rows[24].push(...padding, '=' + exitLetter + '24^(1/$B$11)-1')
    }
    return csv(rows)
  }

  throw new Error('Unknown modeling lab.')
}

export const formatMoney = (value) => '$' + round(value, 1).toLocaleString()
export const formatNumber = (value, digits = 1) => round(value, digits).toLocaleString()
