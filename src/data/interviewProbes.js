const probes = {
  Accounting: ['What changes if the cash is collected a month later?', 'Trace the change through all three statements and explain why the balance sheet balances.'],
  DCF: ['What would make your valuation conclusion reverse?', 'Why is the discount rate consistent with your cash-flow definition?'],
  Valuation: ['When would this method give a misleading result?', 'What adjustment would you investigate before trusting the comparison?'],
  'M&A': ['Which assumption has the greatest effect on the deal conclusion?', 'Could EPS accretion still destroy value? Explain.'],
  LBO: ['What happens if the exit multiple falls?', 'Where does the cash to repay debt actually come from?'],
  Behavioral: ['What did you personally do, rather than the team?', 'What would you change if the same situation happened again?'],
  Markets: ['Which part is a sourced fact and which part is your inference?', 'What evidence would change your view?'],
  Deals: ['What is the buyer paying for and what could go wrong?', 'What would you verify in the primary announcement or filing?'],
}
export function interviewProbes(question) {
  return probes[question.category] || ['Which assumption does your answer depend on?', 'Give a counterexample where your conclusion would not hold.']
}
export function rubricRating(total, covered, criticalError) {
  const percent = total ? Math.round(covered / total * 100) : 0
  return { percent, rating: !criticalError && percent >= 75 ? 'strong' : 'weak' }
}
