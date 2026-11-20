import { northstarStatements } from '../data/statementCase.js'
import { parseNumberAnswer } from './quizBuilder.js'
export const practiceFields = [
  ['netIncome', 'Net income', 'Income statement', 'Revenue less inventory cost, operating costs and depreciation.'],
  ['cfo', 'Operating cash flow', 'Cash flow statement', 'Start with profit, add depreciation, subtract receivable growth and add inventory released.'],
  ['cfi', 'Investing cash flow', 'Cash flow statement', 'Purchasing equipment uses cash. Enter an outflow as a negative number.'],
  ['cff', 'Financing cash flow', 'Cash flow statement', 'Borrowing is a cash inflow and creates debt; it is not revenue.'],
  ['cash', 'Ending cash', 'Balance sheet', 'Opening cash of 100 plus operating, investing and financing cash flow.'],
  ['receivables', 'Receivables', 'Balance sheet', 'Revenue recognized but not yet collected.'],
  ['ppe', 'Equipment, net', 'Balance sheet', 'Opening equipment of 150 plus purchases less depreciation.'],
  ['assets', 'Total assets', 'Balance sheet', 'Cash plus receivables plus inventory plus net equipment.'],
  ['debt', 'Debt', 'Balance sheet', 'Opening debt is zero. Add any borrowing recorded so far.'],
  ['equity', 'Equity', 'Balance sheet', 'Opening equity of 300 plus cumulative net income. No dividends in this case.'],
]
export function gradeStatementCells(eventCount, answers) {
  const expected = northstarStatements(eventCount)
  const cells = practiceFields.map(([key, label, statement, hint]) => ({ key, label, statement, hint, expected: expected[key], correct: Number.isFinite(parseNumberAnswer(answers[key])) && Math.abs(parseNumberAnswer(answers[key]) - expected[key]) < .005 }))
  const value = key => parseNumberAnswer(answers[key])
  const balance = value('assets') - value('debt') - value('equity')
  const cashBridge = 100 + value('cfo') + value('cfi') + value('cff') - value('cash')
  return { cells, correct: cells.every(c => c.correct), balance: Number.isFinite(balance) ? balance : null, cashBridge: Number.isFinite(cashBridge) ? cashBridge : null }
}
export const repairCase = {
  prompt: 'Northstar’s year-end model has $40 operating profit before a $10 depreciation expense, no taxes, $50 inventory released, and no remaining receivables. Capex is $60. Opening cash is $100; new debt is $50. Repair the four output cells below.',
  broken: { netIncome: '40', cfo: '30', cash: '120', equity: '340' },
  correct: { netIncome: 30, cfo: 90, cash: 180, equity: 330 },
  explanations: { netIncome: 'Deduct 10 depreciation from 40 pre-depreciation operating profit: 30.', cfo: '30 profit + 10 noncash depreciation + 50 inventory released = 90.', cash: '100 beginning cash + 90 CFO − 60 capex + 50 borrowing = 180.', equity: '300 opening equity + 30 profit = 330. Borrowing belongs in debt.' },
}
