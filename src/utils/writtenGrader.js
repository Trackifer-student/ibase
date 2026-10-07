const normalize = (text = '') =>
  text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const synonymGroups = {
  provide: ['provide', 'provides', 'providing', 'give', 'gives', 'offer', 'offers', 'sell', 'sells'],
  sell: ['sell', 'sells', 'selling', 'offer', 'offers', 'provide', 'provides'],
  customer: [
    'customer',
    'customers',
    'buyer',
    'buyers',
    'client',
    'clients',
    'consumer',
    'consumers',
    'subscriber',
    'subscribers',
    'user',
    'users',
    'people',
    'person',
    'company',
    'companies',
    'business',
    'businesses',
  ],
  pay: [
    'pay',
    'pays',
    'paid',
    'payment',
    'buy',
    'buys',
    'purchase',
    'purchases',
    'subscribe',
    'subscribes',
    'subscription',
    'fee',
    'fees',
  ],
  revenue: ['revenue', 'sales', 'money coming in', 'income from customers'],
  profit: ['profit', 'earnings', 'money left over', 'left after expenses'],
  cash: ['cash', 'money available', 'money on hand'],
  debt: ['debt', 'loan', 'loans', 'borrow', 'borrowing', 'borrowed'],
  interest: ['interest', 'cost of borrowing'],
  investor: ['investor', 'investors', 'shareholder', 'shareholders', 'owner', 'owners'],
  risk: ['risk', 'uncertainty', 'chance of losing', 'possibility of losing'],
  return: ['return', 'gain', 'profit', 'money made', 'investment gain'],
}

function keywordMatches(answer, keyword) {
  const normalizedAnswer = normalize(answer)
  const normalizedKeyword = normalize(keyword)

  if (normalizedAnswer.includes(normalizedKeyword)) {
    return true
  }

  const alternatives = synonymGroups[normalizedKeyword]

  if (!alternatives) {
    return false
  }

  return alternatives.some((alternative) =>
    normalizedAnswer.includes(normalize(alternative))
  )
}

function criterionPassed(answer, criterion) {
  const keywords = criterion.keywords || []

  if (keywords.length === 0) {
    return true
  }

  return keywords.some((keyword) => keywordMatches(answer, keyword))
}

export async function gradeWrittenAnswer({ answer, rubric, attempt = 1 }) {
  const cleanAnswer = normalize(answer)

  if (!cleanAnswer) {
    return {
      pass: false,
      score: 0,
      understood: [],
      missing: ['You need to enter an answer first.'],
      feedback: 'Write your answer before submitting.',
      grader: 'local',
    }
  }

  const criteria = rubric?.criteria || []

  const results = criteria.map((criterion) => ({
    ...criterion,
    passed: criterionPassed(answer, criterion),
  }))

  const passedCriteria = results.filter((result) => result.passed)
  const failedCriteria = results.filter((result) => !result.passed)

  const score =
    criteria.length === 0
      ? 100
      : Math.round((passedCriteria.length / criteria.length) * 100)

  const pass = failedCriteria.length === 0

  let feedback

  if (pass) {
    feedback =
      'Good answer. You showed the main idea clearly enough to move on.'
  } else if (attempt === 1) {
    feedback =
      'You are part of the way there. Add the missing idea and try again.'
  } else if (attempt === 2) {
    feedback =
      'Look closely at the missing concept below. Explain it in your own words, then try again.'
  } else {
    feedback =
      'Use the refresher for the missing concept, then rewrite your answer with that idea included.'
  }

  return {
    pass,
    score,
    understood: passedCriteria.map((criterion) => criterion.label),
    missing: failedCriteria.map((criterion) => criterion.label),
    feedback,
    grader: 'local',
  }
}