// Teaching case: fictional, in $ millions. No tax, interest, dividends or opening debt.
export const caseEvents = [
  { id: 'sale', title: 'Deliver a national customer order', detail: 'Recognize $120 of revenue, collect $80, and leave $40 receivable. Use $50 of inventory and pay $30 of operating costs.' },
  { id: 'collect', title: 'Collect the remaining invoice', detail: 'Collect $40 already recognized as revenue. This is not a second sale.' },
  { id: 'equipment', title: 'Expand factory capacity', detail: 'Pay $60 for equipment. Capitalize it; do not expense the full purchase immediately.' },
  { id: 'depreciation', title: 'Record equipment use', detail: 'Recognize $10 of depreciation. This reduces profit and net equipment, but does not require another cash payment.' },
  { id: 'borrow', title: 'Finance the next expansion', detail: 'Borrow $50 in cash. Debt is financing, not revenue.' },
]
export function northstarStatements(eventCount = 0) {
  const count = Math.max(0, Math.min(caseEvents.length, Math.trunc(Number(eventCount) || 0)))
  const sale = count >= 1, collected = count >= 2, equipment = count >= 3, depreciation = count >= 4, borrowed = count >= 5
  const revenue = sale ? 120 : 0, cogs = sale ? 50 : 0, costs = sale ? 30 : 0, da = depreciation ? 10 : 0
  const netIncome = revenue - cogs - costs - da
  const receivables = sale && !collected ? 40 : 0, inventory = sale ? 0 : 50
  const cfo = netIncome + da - receivables + (sale ? 50 : 0)
  const cfi = equipment ? -60 : 0, cff = borrowed ? 50 : 0
  const cash = 100 + cfo + cfi + cff, ppe = 150 + (equipment ? 60 : 0) - da
  const assets = cash + receivables + inventory + ppe, debt = borrowed ? 50 : 0, equity = 300 + netIncome
  return { revenue, cogs, costs, da, netIncome, receivables, inventory, cfo, cfi, cff, cash, ppe, assets, debt, equity, balanceCheck: assets - debt - equity }
}
export const statementGuides = {
  'income-statement': {
    focus: 'Profit over a period', prompt: 'Why does Northstar recognize the full sale before collecting all of the cash?',
    points: ['Revenue records machinery delivered under this case’s assumptions, rather than only cash collected.', 'Inventory becomes cost of goods sold when the machinery is delivered. Equipment bought for future use stays on the balance sheet.', 'An income statement covers a period. Compare full-year results with full-year results, not a single quarter.'],
    formula: 'Revenue − cost of goods sold − operating costs − depreciation = net income (simplified case)',
    trap: 'Borrowing cash is not revenue. Buying equipment is not automatically an immediate expense.',
    realTitle: 'Apple: full-year profit', realRows: [['Net sales', 416161], ['Cost of sales', 220960], ['Gross margin', 195201], ['Net income', 112010]],
    question: 'Using the full-year figures, calculate gross margin as a percentage of sales. Round to one decimal place.', answer: 46.9, tolerance: 0.05, unit: '%',
    explanation: '195,201 ÷ 416,161 × 100 = 46.9%. Gross margin dollars are not net income: operating expenses, other items and taxes still matter.', page: 1,
  },
  'balance-sheet': {
    focus: 'Resources and claims on one date', prompt: 'How can collecting an invoice change cash without changing total assets or profit?',
    points: ['Northstar starts with $100 cash, $50 inventory and $150 net equipment, funded by $300 equity.', 'A receivable is a claim on a customer; cash is money already collected. Collection exchanges one asset for another.', 'Equity is a residual accounting claim, not a pile of available cash and not the company’s market valuation.'],
    formula: 'Assets = liabilities + equity', trap: 'A balanced model can still be wrong. Check classification and economics as well as the accounting equation.',
    realTitle: 'Apple: balance sheet at September 27, 2025', realRows: [['Cash and cash equivalents', 35934], ['Total assets', 359241], ['Total liabilities', 285508], ['Total shareholders’ equity', 73733]],
    question: 'Calculate liabilities as a percentage of assets. Round to one decimal place.', answer: 79.5, tolerance: 0.05, unit: '%',
    explanation: '285,508 ÷ 359,241 × 100 = 79.5%. Liabilities include more than borrowing; this is not a debt-to-assets ratio.', page: 2,
  },
  'cash-flow-statement': {
    focus: 'Explain the movement in cash', prompt: 'Why is depreciation added back, and why is equipment spending still a cash outflow?',
    points: ['The indirect method starts with net income, reverses non-cash expenses and adjusts for operating assets and liabilities.', 'After Northstar’s sale, profit is $40 but operating cash flow is $50: add the $50 inventory reduction and subtract the $40 receivable increase.', 'Equipment purchases are investing outflows. Borrowing is a financing inflow. Neither belongs in operating cash flow in this simplified case.'],
    formula: 'Beginning cash + operating + investing + financing cash flows = ending cash', trap: 'Adding back depreciation does not create cash. It reverses an expense already deducted from profit.',
    realTitle: 'Apple: full-year cash flows', realRows: [['Net income', 112010], ['Cash generated by operating activities', 111482], ['Equipment purchases (cash outflow)', -12715]],
    question: 'Using operating cash flow less equipment purchases, calculate a simple free cash flow measure. Enter $ millions.', answer: 98767, tolerance: 0.5, unit: '$ millions',
    explanation: '111,482 − 12,715 = 98,767. This is our simple CFO-minus-capital-expenditure measure, not an Apple-reported subtotal or unlevered DCF cash flow.', page: 3,
  },
  'three-statements-connect': {
    focus: 'Follow one event across the statements', prompt: 'Trace the $10 depreciation expense through profit, operating cash flow, equipment and equity.',
    points: ['Net income flows into equity through retained earnings when there are no dividends or other equity changes.', 'The cash flow statement reconciles beginning to ending cash. Ending cash appears on the balance sheet.', 'Depreciation lowers net income and net equipment. Its cash flow add-back offsets its profit effect; it does not reverse the equipment purchase.'],
    formula: 'Net income → equity; cash flow → cash; depreciation → net equipment', trap: 'A change in a real balance-sheet line need not equal its cash-flow adjustment: acquisitions, currency and other non-cash movements can differ.',
    realTitle: 'Apple: reconcile annual cash movement', realRows: [['Beginning cash balance', 29943], ['Operating cash flow', 111482], ['Investing cash flow', 15195], ['Financing cash flow', -120686], ['Ending cash balance', 35934]],
    question: 'Calculate the change in cash from the three cash-flow categories. Enter $ millions.', answer: 5991, tolerance: 0.5, unit: '$ millions',
    explanation: '111,482 + 15,195 − 120,686 = 5,991; 29,943 + 5,991 = 35,934. The cash-flow statement’s cash definition includes restricted cash; check definitions before reconciling other companies.', page: 3,
  },
}
export const appleSource = 'https://www.apple.com/newsroom/pdfs/fy2025-q4/FY25_Q4_Consolidated_Financial_Statements.pdf'
export function checkStatementAnswer(raw, guide) {
  const text = String(raw).trim()
  if (!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(text)) return null
  const normalized = text.replaceAll(',', '')
  return Math.abs(Number(normalized) - guide.answer) <= guide.tolerance
}
