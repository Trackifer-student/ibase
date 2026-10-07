import { makeLesson } from './lessonFactory'

export const valuationLessons = [
  makeLesson({
    id: 'valuation-overview',
    title: 'Valuation: What Are We Actually Estimating?',
    summary: 'Understand why bankers use multiple methods and usually present a range rather than one perfect answer.',
    concepts: ['valuation', 'presentValue', 'marketCap'],
    intro:
      'Valuation is the process of estimating what a business, security, or asset is worth under a set of assumptions.',
    teachTitle: 'There is rarely one objectively correct value.',
    paragraphs: [
      'A company’s value depends on expectations about future growth, margins, cash flow, risk, and market conditions.',
      'Different valuation methods answer the question from different angles.',
      'Trading comparables use current public-market evidence. Precedent transactions use prices paid in acquisitions. DCF uses projected future cash flows.',
      'Because each method has assumptions and limitations, bankers usually triangulate a valuation range rather than claim one exact number.',
    ],
    callout:
      'Valuation is structured judgment supported by financial analysis and market evidence.',
    scenarioTitle: 'Three methods, three answers.',
    scenario:
      'Comps imply $20–$24 per share, precedents imply $23–$28, and DCF implies $21–$27.',
    workedSteps: [
      { label: 'Observe overlap', text: 'All three methods suggest value in roughly the low-to-high $20s.' },
      { label: 'Understand differences', text: 'Each method reflects different assumptions and market evidence.' },
      { label: 'Present a range', text: 'A banker would usually show the ranges and explain the drivers rather than average them blindly.' },
    ],
    takeaway:
      'Valuation is stronger when several methods tell a coherent story.',
    mcq: {
      title: 'Why do bankers often present valuation ranges instead of one exact value?',
      options: [
        'Because valuation depends on assumptions and different methods can produce different reasonable outputs',
        'Because companies cannot be analyzed',
        'Because share prices are irrelevant',
        'Because formulas are prohibited',
      ],
      correctIndex: 0,
      correctText: 'Valuation is assumption-sensitive, so a range communicates uncertainty more honestly.',
      wrongText: 'Think about forecast uncertainty and method differences.',
      reviewConcepts: ['valuation'],
    },
  }),

  makeLesson({
    id: 'intrinsic-vs-relative',
    title: 'Intrinsic vs. Relative Valuation',
    summary: 'Separate cash-flow-based valuation from market-comparison valuation.',
    concepts: ['valuation', 'presentValue'],
    intro:
      'Most core banking valuation methods fall into two broad families: intrinsic and relative.',
    teachTitle: 'Intrinsic value comes from the asset’s own future cash flows; relative value comes from how similar assets are priced.',
    paragraphs: [
      'DCF is an intrinsic method because it values the company based on projected cash flows discounted to present value.',
      'Trading comps are relative because they infer value from how similar public companies trade.',
      'Precedent transactions are also relative because they use prices paid for comparable businesses in prior deals.',
      'Neither family is automatically superior. They answer the question with different evidence.',
    ],
    callout:
      'Intrinsic asks “what are the future cash flows worth?” Relative asks “how does the market value similar assets?”',
    scenarioTitle: 'Value a private software company.',
    scenario:
      'You can forecast its cash flows and also observe public software peers.',
    workedSteps: [
      { label: 'Intrinsic lens', text: 'Build a DCF from the company’s own projected cash generation.' },
      { label: 'Relative lens', text: 'Apply valuation multiples from comparable public software companies.' },
      { label: 'Triangulate', text: 'Compare the results and understand why they differ.' },
    ],
    takeaway:
      'Different methods are useful because they rely on different sources of evidence.',
    mcq: {
      title: 'Which method is primarily intrinsic?',
      options: [
        'DCF',
        'Trading comparables',
        'Precedent transactions',
        'Market capitalization comparison only',
      ],
      correctIndex: 0,
      correctText: 'DCF values expected future cash flows directly.',
      wrongText: 'Intrinsic valuation is based on the asset’s own projected cash flows.',
      reviewConcepts: ['presentValue', 'valuation'],
    },
  }),

  makeLesson({
    id: 'trading-comps-purpose',
    title: 'Trading Comparables: The Core Idea',
    summary: 'Use current public-market pricing to estimate value for a target company.',
    concepts: ['valuation', 'marketCap', 'ebitda'],
    intro:
      'Trading comparables ask how the market values similar public companies right now.',
    teachTitle: 'Find relevant peers, calculate their valuation multiples, and apply those multiples to the target.',
    paragraphs: [
      'A comparable company should resemble the target in business model, industry, growth, margins, size, risk, and geography where relevant.',
      'For each peer, bankers calculate Enterprise Value and Equity Value, then divide by financial metrics such as revenue, EBITDA, EBIT, or net income.',
      'The peer set creates a range of observed market multiples.',
      'Those multiples can then be applied to the target company’s corresponding financial metrics to estimate implied value.',
    ],
    callout:
      'Comps are only as good as the comparability of the peer set and the consistency of the financial metrics.',
    scenarioTitle: 'Peers trade at 8x–10x EBITDA.',
    scenario:
      'The target has $100 million of EBITDA.',
    workedSteps: [
      { label: 'Low end', text: '8.0x × $100 = $800 million implied EV.' },
      { label: 'High end', text: '10.0x × $100 = $1.0 billion implied EV.' },
      { label: 'Next step', text: 'Convert EV to Equity Value using the EV bridge if needed.' },
    ],
    takeaway:
      'Trading comps translate market pricing of peers into an implied value range for the target.',
    numberCheck: {
      title: 'A target has $80 million of EBITDA and peers trade at 9x. What is implied Enterprise Value?',
      answer: 720,
      suffix: 'million',
      explanation: '$80 × 9.0x = $720 million.',
      reviewConcepts: ['ebitda', 'valuation'],
    },
    mcq: {
      title: 'What is the biggest conceptual risk in trading comps?',
      options: [
        'Choosing companies that are not truly comparable',
        'Using any market data',
        'Calculating Enterprise Value',
        'Using EBITDA',
      ],
      correctIndex: 0,
      correctText: 'A misleading peer set can produce a misleading valuation even if the math is perfect.',
      wrongText: 'The method depends on the assumption that the peer group is economically comparable.',
    },
  }),

  makeLesson({
    id: 'selecting-comps',
    title: 'Selecting Comparable Companies',
    summary: 'Choose peers using business and financial characteristics rather than matching only the industry label.',
    concepts: ['valuation', 'risk'],
    intro:
      'Peer selection is one of the most judgment-heavy parts of a comps analysis.',
    teachTitle: 'Comparable means economically similar, not merely “same sector.”',
    paragraphs: [
      'Business model matters because recurring subscription revenue can be valued differently from one-time project revenue.',
      'Growth matters because faster-growing companies may deserve higher multiples.',
      'Margins matter because more profitable revenue can create more cash flow.',
      'Size, geography, customer concentration, cyclicality, and risk can also influence the appropriate peer set.',
    ],
    callout:
      'There is no perfect comparable company. The goal is a defensible set with understood differences.',
    scenarioTitle: 'Choose peers for a fast-growing vertical SaaS company.',
    scenario:
      'One candidate is a slow-growth hardware manufacturer; another is a similar recurring-revenue software company.',
    workedSteps: [
      { label: 'Industry label', text: 'Both may be called “technology,” but that is too broad.' },
      { label: 'Business model', text: 'Recurring software revenue is more similar to the target.' },
      { label: 'Growth and margin profile', text: 'If the software peer also has similar growth and margins, comparability improves.' },
      { label: 'Decision', text: 'Use the economically closer peer even if a broad sector label would include both.' },
    ],
    takeaway:
      'Good peer selection requires understanding the business, not just sorting by sector code.',
    mcq: {
      title: 'Which factor is most useful when judging whether two companies are comparable?',
      options: [
        'Similarity in business model, growth, margins, and risk',
        'Whether their logos use the same color',
        'Whether their share prices are numerically close',
        'Whether they were founded in the same year',
      ],
      correctIndex: 0,
      correctText: 'Economic similarity drives valuation comparability.',
      wrongText: 'Focus on the drivers investors actually use to price the businesses.',
      reviewConcepts: ['risk', 'valuation'],
    },
  }),

  makeLesson({
    id: 'ltm-ntm',
    title: 'LTM vs. NTM Metrics',
    summary: 'Understand why valuation can use historical or forward financial periods.',
    concepts: ['revenue', 'ebitda', 'valuation'],
    intro:
      'A multiple is only meaningful if you know which period of financial performance sits in the denominator.',
    teachTitle: 'LTM looks backward; NTM looks forward.',
    paragraphs: [
      'LTM means Last Twelve Months and captures the most recent completed twelve-month period.',
      'NTM means Next Twelve Months and uses forecasted results for the coming twelve months.',
      'High-growth companies often look expensive on LTM multiples because current earnings are lower than expected future earnings.',
      'Forward multiples can be more relevant for rapidly changing businesses, but they introduce forecast risk.',
    ],
    callout:
      'Always label the period: 10x LTM EBITDA and 10x NTM EBITDA are not the same thing.',
    scenarioTitle: 'EV is $1 billion; LTM EBITDA $80 million; NTM EBITDA $100 million.',
    scenario:
      'Calculate both multiples.',
    workedSteps: [
      { label: 'LTM EV / EBITDA', text: '$1,000 ÷ $80 = 12.5x.' },
      { label: 'NTM EV / EBITDA', text: '$1,000 ÷ $100 = 10.0x.' },
      { label: 'Interpretation', text: 'The lower forward multiple reflects expected EBITDA growth.' },
    ],
    takeaway:
      'The period in the denominator materially changes the valuation multiple.',
    numberCheck: {
      title: 'EV is $900 and NTM EBITDA is $90. What is NTM EV / EBITDA?',
      answer: 10,
      suffix: 'x',
      explanation: '$900 ÷ $90 = 10.0x.',
      reviewConcepts: ['ebitda'],
    },
    mcq: {
      title: 'Why can NTM multiples be lower than LTM multiples for a growing company?',
      options: [
        'Because the forward denominator is larger if earnings are expected to grow',
        'Because Enterprise Value becomes zero',
        'Because future earnings cannot be estimated',
        'Because debt is excluded from EV',
      ],
      correctIndex: 0,
      correctText: 'A larger expected future denominator lowers the multiple at the same value.',
      wrongText: 'Think about what happens to Value ÷ Metric when the metric grows.',
    },
  }),

  makeLesson({
    id: 'ev-revenue',
    title: 'EV / Revenue',
    summary: 'Know when a revenue multiple is useful and why it ignores profitability.',
    concepts: ['valuation', 'revenue'],
    intro:
      'EV / Revenue is often used when companies have meaningful sales but low or negative earnings.',
    teachTitle: 'Revenue multiples compare value before accounting for cost structure.',
    paragraphs: [
      'Revenue is a pre-interest operating metric, so Enterprise Value is the consistent numerator.',
      'A revenue multiple can be useful for early-stage or low-margin companies whose EBITDA is not yet stable.',
      'The weakness is that two companies with identical revenue can have radically different profitability and cash generation.',
      'Investors therefore often compare revenue multiples alongside growth and gross or operating margins.',
    ],
    callout:
      'EV / Revenue values sales, not the profit quality of those sales.',
    scenarioTitle: 'Two companies each have $100 of revenue.',
    scenario:
      'Company A has 70% gross margin; Company B has 20% gross margin.',
    workedSteps: [
      { label: 'Same revenue', text: 'Both companies have the same sales base.' },
      { label: 'Different economics', text: 'Company A keeps much more gross profit from each revenue dollar.' },
      { label: 'Valuation implication', text: 'A simple equal revenue multiple may ignore an important economic difference.' },
    ],
    takeaway:
      'Revenue multiples need profitability context.',
    mcq: {
      title: 'Why can EV / Revenue be misleading when used alone?',
      options: [
        'It does not capture how profitable the revenue is',
        'Revenue is always negative',
        'EV excludes operations',
        'It includes net income twice',
      ],
      correctIndex: 0,
      correctText: 'Companies with the same revenue can have very different margins and cash flow.',
      wrongText: 'The denominator measures sales before costs.',
      reviewConcepts: ['revenue', 'valuation'],
    },
  }),

  makeLesson({
    id: 'ev-ebitda',
    title: 'EV / EBITDA',
    summary: 'Understand why this is one of the most common banking valuation multiples.',
    concepts: ['valuation', 'ebitda'],
    intro:
      'EV / EBITDA is widely used because it pairs an all-capital-provider value with a pre-interest operating earnings metric.',
    teachTitle: 'The numerator and denominator are aligned before financing costs.',
    paragraphs: [
      'Enterprise Value represents value attributable to debt and equity capital providers.',
      'EBITDA is measured before interest expense, so it is not directly reduced by capital structure.',
      'That makes EV / EBITDA useful for comparing companies with different debt levels.',
      'However, EBITDA ignores CapEx, working capital, taxes, and other cash needs, so the multiple should not be treated as a complete economic picture.',
    ],
    callout:
      'EV / EBITDA is popular because it is capital-structure neutral, not because EBITDA is cash flow.',
    scenarioTitle: 'Company A and B have identical EBITDA but different debt.',
    scenario:
      'Their Equity Values differ, but Enterprise Values can still be comparable.',
    workedSteps: [
      { label: 'Operating metric', text: 'EBITDA is before interest.' },
      { label: 'Value metric', text: 'EV includes both debt and equity claims.' },
      { label: 'Comparison', text: 'EV / EBITDA avoids mixing an equity-only numerator with a pre-interest denominator.' },
    ],
    takeaway:
      'The logic of a multiple matters as much as the arithmetic.',
    numberCheck: {
      title: 'EV is $1.2 billion and EBITDA is $150 million. What is EV / EBITDA?',
      answer: 8,
      suffix: 'x',
      explanation: '$1,200 ÷ $150 = 8.0x.',
      reviewConcepts: ['ebitda', 'valuation'],
    },
    mcq: {
      title: 'Why is Equity Value / EBITDA generally inconsistent?',
      options: [
        'Equity Value belongs only to common shareholders while EBITDA is before interest and belongs to all capital providers',
        'EBITDA includes only cash',
        'Equity Value is always zero',
        'Interest expense is part of EBITDA',
      ],
      correctIndex: 0,
      correctText: 'The numerator and denominator represent different capital-provider scopes.',
      wrongText: 'Match pre-interest metrics with Enterprise Value.',
      reviewConcepts: ['ebitda', 'equity'],
    },
  }),

  makeLesson({
    id: 'pe-multiple',
    title: 'P / E',
    summary: 'Use an equity-value multiple that matches bottom-line earnings.',
    concepts: ['equity', 'netIncome', 'stockPrice'],
    intro:
      'Price / Earnings is one of the best-known valuation multiples, but its logic still depends on numerator-denominator matching.',
    teachTitle: 'P / E compares common equity value with earnings after interest.',
    paragraphs: [
      'Net income is calculated after interest expense and therefore reflects earnings available after lender costs.',
      'That makes an equity-value numerator appropriate.',
      'P / E can be expressed as share price divided by earnings per share or Equity Value divided by net income.',
      'P / E can be distorted when capital structures, tax rates, or non-recurring items differ significantly.',
    ],
    callout:
      'P / E is an equity multiple; EV / EBITDA is an enterprise multiple.',
    scenarioTitle: '$20 share price and $2 earnings per share.',
    scenario:
      'Calculate P / E.',
    workedSteps: [
      { label: 'Price', text: '$20 per share.' },
      { label: 'Earnings', text: '$2 per share.' },
      { label: 'P / E', text: '$20 ÷ $2 = 10.0x.' },
    ],
    takeaway:
      'P / E tells you how much equity investors are paying for each dollar of earnings.',
    numberCheck: {
      title: 'A stock trades at $45 with $3 of EPS. What is P / E?',
      answer: 15,
      suffix: 'x',
      explanation: '$45 ÷ $3 = 15.0x.',
    },
    mcq: {
      title: 'Why is P / E more directly affected by capital structure than EV / EBITDA?',
      options: [
        'Net income includes interest expense, which depends on debt financing',
        'P / E ignores earnings',
        'EV includes no capital providers',
        'EBITDA includes dividends',
      ],
      correctIndex: 0,
      correctText: 'Debt levels affect interest expense, which affects net income and therefore P / E.',
      wrongText: 'Think about where interest expense appears in the income statement.',
      reviewConcepts: ['netIncome', 'interest'],
    },
  }),

  makeLesson({
    id: 'comps-statistics',
    title: 'Comps Statistics: Median, Quartiles & Range',
    summary: 'Summarize a peer set without letting one outlier control the analysis.',
    concepts: ['valuation'],
    intro:
      'Once you calculate peer multiples, you need a sensible way to summarize the group.',
    teachTitle: 'Median is common because it reduces the influence of extreme outliers.',
    paragraphs: [
      'The mean can be pulled sharply by one unusually high or low multiple.',
      'The median is the middle observation and is often a useful central reference for comps.',
      'Bankers also look at low, high, first quartile, and third quartile values to understand dispersion.',
      'Statistics do not replace judgment: sometimes an outlier reflects a genuinely different business rather than bad data.',
    ],
    callout:
      'Do not blindly apply the median. Understand why the target might deserve a premium or discount to the peer set.',
    scenarioTitle: 'Peer multiples are 7x, 8x, 9x, 10x, and 20x.',
    scenario:
      'Compare mean and median.',
    workedSteps: [
      { label: 'Median', text: '9x.' },
      { label: 'Mean', text: '(7 + 8 + 9 + 10 + 20) ÷ 5 = 10.8x.' },
      { label: 'Outlier effect', text: 'The 20x observation pulls the mean upward much more than the median.' },
    ],
    takeaway:
      'Summary statistics help organize the peer set, but analysts still need to explain outliers and target positioning.',
    mcq: {
      title: 'Why is median commonly used in comps?',
      options: [
        'It is less sensitive than the mean to extreme outliers',
        'It always equals the highest multiple',
        'It removes the need for judgment',
        'It guarantees the correct valuation',
      ],
      correctIndex: 0,
      correctText: 'Median provides a central point that is more robust to extremes.',
      wrongText: 'Think about what a single huge multiple does to the average.',
    },
  }),

  makeLesson({
    id: 'applying-comps',
    title: 'Applying Trading Multiples',
    summary: 'Turn peer-market multiples into an implied EV, Equity Value, and per-share value.',
    concepts: ['valuation', 'ebitda', 'debt', 'cash', 'share'],
    intro:
      'The output of a comps analysis is not the peer multiple itself; it is the target’s implied value.',
    teachTitle: 'Apply a selected multiple to the matching target metric, then bridge to the value you need.',
    paragraphs: [
      'If you select an EV / EBITDA multiple, multiply it by target EBITDA to get implied Enterprise Value.',
      'Then convert EV to Equity Value by subtracting debt and other claims and adding cash and other non-operating assets.',
      'Finally divide Equity Value by diluted shares to estimate implied share price.',
      'Every step depends on period and ownership consistency.',
    ],
    callout:
      'Multiple → Implied EV → Implied Equity Value → Implied Share Price.',
    scenarioTitle: '8x EBITDA applied to $100 EBITDA.',
    scenario:
      'Debt is $250, cash is $50, and diluted shares are 30 million.',
    workedSteps: [
      { label: 'Implied EV', text: '8x × $100 = $800.' },
      { label: 'Implied Equity Value', text: '$800 − $250 + $50 = $600.' },
      { label: 'Implied share price', text: '$600 ÷ 30 million = $20 per share.' },
    ],
    takeaway:
      'A comps analysis becomes actionable only after the multiple is translated into target-specific value.',
    numberCheck: {
      title: 'Target EBITDA is $60 and selected EV / EBITDA is 10x. Debt is $150 and cash is $30. What is implied Equity Value?',
      answer: 480,
      suffix: 'million',
      explanation: 'EV = $600. Equity Value = $600 − $150 + $30 = $480.',
    },
    mcq: {
      title: 'After applying EV / EBITDA to target EBITDA, what value do you get first?',
      options: [
        'Enterprise Value',
        'Net income',
        'Share count',
        'Revenue',
      ],
      correctIndex: 0,
      correctText: 'An EV-based multiple directly produces implied Enterprise Value.',
      wrongText: 'The numerator of the multiple tells you which value is implied first.',
      reviewConcepts: ['valuation', 'ebitda'],
    },
  }),

  makeLesson({
    id: 'precedent-transactions',
    title: 'Precedent Transactions: The Core Idea',
    summary: 'Use prices paid in prior acquisitions to estimate what a buyer might pay for a target.',
    concepts: ['valuation'],
    intro:
      'Precedent transactions look at completed or announced acquisitions of similar companies rather than current public trading prices.',
    teachTitle: 'Deal multiples reflect actual control transactions.',
    paragraphs: [
      'For each relevant transaction, bankers calculate the purchase price and implied valuation multiples.',
      'Those multiples may include a premium because the buyer acquired control of the target.',
      'Deals can also reflect expected synergies, competitive auction dynamics, financing conditions, and market sentiment at the time.',
      'Precedent analysis is therefore often higher than trading comps, but not always.',
    ],
    callout:
      'Precedents tell you what buyers actually paid, not what minority public shares trade for today.',
    scenarioTitle: 'Three similar deals closed at 9x, 10x, and 11x EBITDA.',
    scenario:
      'The target has $80 of EBITDA.',
    workedSteps: [
      { label: 'Low implied EV', text: '9x × $80 = $720.' },
      { label: 'Mid implied EV', text: '10x × $80 = $800.' },
      { label: 'High implied EV', text: '11x × $80 = $880.' },
    ],
    takeaway:
      'Precedent transactions use acquisition-market evidence to frame what strategic or financial buyers have paid.',
    mcq: {
      title: 'Why might precedent multiples be higher than trading-comps multiples?',
      options: [
        'Acquisitions can include control premiums and expected synergies',
        'Precedents always exclude debt',
        'Trading comps use no market data',
        'Acquisitions never involve negotiation',
      ],
      correctIndex: 0,
      correctText: 'Buyers may pay above unaffected trading value to obtain control and strategic benefits.',
      wrongText: 'Think about why an acquirer might pay more than the public market price.',
    },
  }),

  makeLesson({
    id: 'control-premium',
    title: 'Control Premiums',
    summary: 'Understand why acquiring control can justify paying above the unaffected share price.',
    concepts: ['valuation', 'equity'],
    intro:
      'Buying 100% control of a company is economically different from buying a small public-market position.',
    teachTitle: 'Control gives the acquirer the ability to change the business.',
    paragraphs: [
      'A controlling owner can often influence strategy, capital allocation, management, financing, and operations.',
      'An acquirer may also expect synergies that a passive minority shareholder cannot capture.',
      'Those benefits can justify paying a premium to the unaffected share price.',
      'The control premium is often measured as offer price divided by unaffected share price minus one.',
    ],
    callout:
      'Premium paid = Offer Price ÷ Unaffected Price − 1.',
    scenarioTitle: 'Unaffected share price $40; offer price $50.',
    scenario:
      'Calculate the premium.',
    workedSteps: [
      { label: 'Price difference', text: '$50 − $40 = $10.' },
      { label: 'Divide by unaffected price', text: '$10 ÷ $40 = 25%.' },
      { label: 'Premium', text: '25%.' },
    ],
    takeaway:
      'A control premium reflects the extra value a buyer is willing to pay to own and direct the target.',
    numberCheck: {
      title: 'A target trades at $30 before a deal and receives a $36 offer. What is the premium?',
      answer: 20,
      suffix: '%',
      explanation: '$36 ÷ $30 − 1 = 20%.',
    },
    mcq: {
      title: 'What is the best economic reason a buyer may pay a control premium?',
      options: [
        'Control and potential synergies can be worth more than a minority public stake',
        'The buyer is required to overpay',
        'Debt disappears in an acquisition',
        'Revenue doubles automatically',
      ],
      correctIndex: 0,
      correctText: 'Control can create strategic and operational benefits unavailable to passive shareholders.',
      wrongText: 'Think about what rights and opportunities come with controlling the whole company.',
    },
  }),

  makeLesson({
    id: 'selecting-precedents',
    title: 'Selecting Precedent Transactions',
    summary: 'Choose transactions that are comparable in business, timing, size, and deal context.',
    concepts: ['valuation', 'risk'],
    intro:
      'A precedent transaction can be mathematically clean and still be useless if the deal is not comparable.',
    teachTitle: 'Deal context matters as much as target-company similarity.',
    paragraphs: [
      'The acquired company should be similar in business model, growth, margins, size, and geography where relevant.',
      'Transaction timing matters because interest rates and market valuation levels change.',
      'Buyer type matters because strategic buyers may capture synergies that financial sponsors cannot.',
      'Deal structure, auction intensity, distressed conditions, and unusual strategic motives can also distort comparability.',
    ],
    callout:
      'Precedent analysis is not “find any old deal in the sector.”',
    scenarioTitle: 'Choose between two old deals.',
    scenario:
      'Deal A is a similar business acquired six months ago. Deal B is a different business acquired seven years ago in a completely different rate environment.',
    workedSteps: [
      { label: 'Business comparability', text: 'Deal A is stronger.' },
      { label: 'Timing', text: 'Deal A better reflects current capital markets.' },
      { label: 'Conclusion', text: 'Deal A is likely more relevant, even if Deal B has a familiar brand name.' },
    ],
    takeaway:
      'Strong precedents match both the company and the transaction environment.',
    mcq: {
      title: 'Why can very old precedent transactions be less useful?',
      options: [
        'Market multiples, interest rates, and deal conditions may have changed materially',
        'Old transactions have no purchase price',
        'Accounting did not exist',
        'Enterprise Value cannot be calculated historically',
      ],
      correctIndex: 0,
      correctText: 'Transaction pricing reflects the capital-market environment at the time of the deal.',
      wrongText: 'Think about how market conditions change across cycles.',
    },
  }),

  makeLesson({
    id: 'private-company-valuation',
    title: 'Valuing a Private Company',
    summary: 'Adapt public-market methods when there is no observable share price.',
    concepts: ['valuation', 'equity', 'marketCap'],
    intro:
      'Private companies do not have continuously quoted share prices, so analysts cannot simply read market capitalization from a screen.',
    teachTitle: 'Use operating performance, comparable companies, transactions, and cash flows to infer value.',
    paragraphs: [
      'Trading comps can still be used by applying public-company multiples to the private company’s financial metrics.',
      'Precedent transactions can provide acquisition-market evidence.',
      'DCF can estimate intrinsic value based on projected cash flows.',
      'Private companies may deserve adjustments for size, liquidity, customer concentration, governance, or financial disclosure differences.',
    ],
    callout:
      'The absence of a share price changes the observable input, not the fundamental valuation question.',
    scenarioTitle: 'Private target with $50 EBITDA.',
    scenario:
      'Relevant public peers trade around 8x–10x EBITDA.',
    workedSteps: [
      { label: 'Apply low multiple', text: '8x × $50 = $400 implied EV.' },
      { label: 'Apply high multiple', text: '10x × $50 = $500 implied EV.' },
      { label: 'Adjust thoughtfully', text: 'Consider differences in size, growth, liquidity, and risk before selecting a point in the range.' },
    ],
    takeaway:
      'Private-company valuation uses the same core methods but requires more judgment because market prices are not directly observable.',
    mcq: {
      title: 'Which method can still be used to value a private company?',
      options: [
        'Trading comps, precedents, and DCF',
        'Only current share price',
        'Only book value',
        'No valuation method can be used',
      ],
      correctIndex: 0,
      correctText: 'Public-market and transaction evidence can be applied to private-company financial metrics, and DCF can value projected cash flows.',
      wrongText: 'Private companies lack a quoted share price, not financial economics.',
      reviewConcepts: ['valuation'],
    },
  }),

  makeLesson({
    id: 'football-field',
    title: 'Football Field Valuation',
    summary: 'Present several valuation methods in one range-based visual.',
    concepts: ['valuation'],
    intro:
      'A football field is a chart that places valuation ranges from multiple methods next to one another.',
    teachTitle: 'The chart is useful because it shows overlap, dispersion, and method differences at a glance.',
    paragraphs: [
      'Each method contributes a low-to-high valuation range.',
      'Trading comps, precedents, DCF, historical share-price analysis, and other methods may all appear.',
      'The analyst should not simply choose the widest overlap and call it correct.',
      'The purpose is to frame the evidence and support a discussion about which methods deserve more weight.',
    ],
    callout:
      'A football field summarizes analysis; it does not replace the judgment behind each range.',
    scenarioTitle: 'Three valuation ranges.',
    scenario:
      'Comps: $40–$50. Precedents: $48–$60. DCF: $45–$58.',
    workedSteps: [
      { label: 'Overlap', text: 'All methods overlap in the high $40s.' },
      { label: 'Upper range', text: 'Precedents and DCF extend higher than trading comps.' },
      { label: 'Discussion', text: 'Explain whether control premium, synergies, or DCF assumptions justify the difference.' },
    ],
    takeaway:
      'A football field makes differences visible so the banker can explain them.',
    mcq: {
      title: 'What is the main purpose of a football field?',
      options: [
        'To compare valuation ranges from multiple methods visually',
        'To calculate revenue',
        'To replace all valuation analysis',
        'To show employee headcount',
      ],
      correctIndex: 0,
      correctText: 'The chart summarizes several valuation methods in one view.',
      wrongText: 'It is a presentation tool for ranges, not a valuation method itself.',
      reviewConcepts: ['valuation'],
    },
  }),

  makeLesson({
    id: 'valuation-triangulation',
    title: 'Triangulating Valuation',
    summary: 'Use several methods together and explain why the ranges differ.',
    concepts: ['valuation', 'risk', 'presentValue'],
    intro:
      'The strongest valuation work is not the method that produces your favorite answer. It is the analysis that explains the evidence consistently.',
    teachTitle: 'Triangulation means comparing methods and understanding the drivers of disagreement.',
    paragraphs: [
      'Trading comps reflect current public-market sentiment.',
      'Precedents include control and transaction-specific dynamics.',
      'DCF depends heavily on forecasts, discount rates, and terminal value assumptions.',
      'If one method is far away from the others, investigate the reason rather than averaging everything together.',
    ],
    callout:
      'A good banker can explain why methods differ, which assumptions matter, and which evidence is most relevant for the specific decision.',
    scenarioTitle: 'DCF is far above comps.',
    scenario:
      'DCF implies $80 per share while comps imply $45–$55.',
    workedSteps: [
      { label: 'Do not average blindly', text: 'The gap may contain useful information.' },
      { label: 'Check DCF assumptions', text: 'Growth, margins, WACC, and terminal value may be aggressive.' },
      { label: 'Check comps', text: 'Peers may be slower-growing or structurally different.' },
      { label: 'Form a view', text: 'Decide which explanation is economically defensible.' },
    ],
    takeaway:
      'Valuation judgment comes from understanding why methods disagree.',
    written: {
      title: 'Why is it a mistake to average every valuation method mechanically?',
      body: 'Explain why some methods may deserve different weight.',
      placeholder: 'Different methods can be more or less relevant because...',
      modelAnswer:
        'Different methods use different assumptions and market evidence, and some may be more relevant to the specific company or transaction. Mechanical averaging can hide a bad assumption or give equal weight to a weak method.',
      criteria: [
        { id: 'differences', label: 'recognize that methods use different assumptions or evidence', keywords: ['different', 'assumptions', 'evidence', 'market', 'cash flow', 'inputs'] },
        { id: 'weight', label: 'recognize that methods can deserve different weight or relevance', keywords: ['weight', 'relevant', 'relevance', 'stronger', 'weaker', 'appropriate', 'bad assumption'] },
      ],
    },
    completeTitle: 'Valuation complete.',
    completeBody:
      'You now understand trading comps, precedents, multiples, and valuation ranges. Next comes DCF, where you build intrinsic value directly from projected free cash flow.',
  }),
]
