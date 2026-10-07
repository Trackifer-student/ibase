import { makeLesson } from './lessonFactory'

export const enterpriseEquityLessons = [
  makeLesson({
    id: 'equity-value',
    title: 'Equity Value',
    summary: 'Understand what the market value of common shareholders’ claim represents.',
    concepts: ['equity', 'share', 'stockPrice', 'marketCap'],
    intro:
      'Equity Value answers a specific question: what is the market value of the common shareholders’ ownership claim?',
    teachTitle: 'Start with share price and fully diluted shares.',
    paragraphs: [
      'For a public company, basic market capitalization is share price multiplied by basic shares outstanding.',
      'Bankers often use fully diluted shares rather than only basic shares because options, restricted stock, convertible securities, and other instruments can increase the effective common share count.',
      'Equity Value belongs to common shareholders after considering the claims of other capital providers.',
      'That makes Equity Value different from the value of the entire operating business.',
    ],
    callout:
      'Equity Value ≈ Share Price × Fully Diluted Shares Outstanding.',
    scenarioTitle: '$25 share price and 80 million diluted shares.',
    scenario:
      'Estimate the company’s Equity Value.',
    workedSteps: [
      { label: 'Share price', text: '$25.' },
      { label: 'Diluted shares', text: '80 million.' },
      { label: 'Equity Value', text: '$25 × 80 million = $2.0 billion.' },
    ],
    takeaway:
      'Equity Value is the market value attributable to common equity holders.',
    numberCheck: {
      title: 'A company trades at $40 per share with 50 million diluted shares. What is Equity Value in millions?',
      answer: 2000,
      suffix: 'million dollars',
      explanation: '$40 × 50 million = $2,000 million.',
      reviewConcepts: ['stockPrice', 'marketCap'],
    },
    mcq: {
      title: 'Why do bankers often use diluted shares rather than only basic shares?',
      options: [
        'Because certain securities can increase the effective common share count',
        'Because debt is counted as shares',
        'Because revenue determines share count',
        'Because cash is always diluted',
      ],
      correctIndex: 0,
      correctText: 'Potentially dilutive instruments can increase the common ownership base and affect Equity Value.',
      wrongText: 'Think about options, RSUs, and other instruments that may create additional common shares.',
      reviewConcepts: ['share', 'equity'],
    },
  }),

  makeLesson({
    id: 'enterprise-value-intuition',
    title: 'Enterprise Value',
    summary: 'Understand why bankers need a value for the entire operating business, not just common equity.',
    concepts: ['debt', 'cash', 'equity', 'valuation'],
    intro:
      'Enterprise Value is designed to represent the value of the company’s core operations to all major capital providers, not only common shareholders.',
    teachTitle: 'Think of buying the operating business and inheriting its financing structure.',
    paragraphs: [
      'If you acquire a company, you effectively gain control of its operations and cash-generating assets.',
      'You also must account for debt and certain other claims that sit ahead of common equity.',
      'Excess cash is usually treated as reducing the effective purchase cost because the buyer receives that cash with the company.',
      'Enterprise Value therefore bridges from common equity value to a broader value of the operating business.',
    ],
    callout:
      'A common simplified formula: EV = Equity Value + Debt − Cash.',
    scenarioTitle: '$500 equity value, $200 debt, $50 cash.',
    scenario:
      'Use the simplified bridge.',
    workedSteps: [
      { label: 'Common equity', text: '$500.' },
      { label: 'Add debt', text: '+$200 because the buyer must account for lender claims.' },
      { label: 'Subtract cash', text: '−$50 because the buyer receives the cash.' },
      { label: 'Enterprise Value', text: '$650.' },
    ],
    takeaway:
      'Enterprise Value measures the value of the operating business independent of how it is split between debt and common equity.',
    numberCheck: {
      title: 'Equity Value is $800, debt is $250, and cash is $100. What is simplified Enterprise Value?',
      answer: 950,
      suffix: 'million',
      explanation: '$800 + $250 − $100 = $950.',
      reviewConcepts: ['debt', 'cash', 'equity'],
    },
    mcq: {
      title: 'Why is cash typically subtracted when moving from Equity Value to Enterprise Value?',
      options: [
        'Because the buyer receives the company’s cash and can use it to offset purchase cost',
        'Because cash is debt',
        'Because cash creates revenue',
        'Because Equity Value already excludes shareholders',
      ],
      correctIndex: 0,
      correctText: 'Non-operating cash reduces the net cost of acquiring the operating business.',
      wrongText: 'Think about what cash the buyer receives after purchasing the company.',
      reviewConcepts: ['cash', 'valuation'],
    },
  }),

  makeLesson({
    id: 'ev-bridge-full',
    title: 'The Full EV Bridge',
    summary: 'Expand beyond debt and cash to preferred stock, non-controlling interest, and other claims.',
    concepts: ['equity', 'debt', 'cash'],
    intro:
      'The simplified EV formula is useful, but real banking work often requires additional adjustments.',
    teachTitle: 'Add claims senior to common equity and subtract non-operating assets.',
    paragraphs: [
      'Debt is added because lenders have a claim on the business that is not captured in common Equity Value.',
      'Preferred stock is often added because preferred holders are a separate capital provider with a claim senior to common shareholders.',
      'Non-controlling interest is often added when consolidated financial statements include 100% of a subsidiary’s earnings but the parent does not own 100% of that subsidiary.',
      'Cash and certain non-operating investments may be subtracted because they are not part of the core operating asset base being valued.',
    ],
    callout:
      'Always ask whether the item is an operating asset, a non-operating asset, or a claim on enterprise value.',
    scenarioTitle: 'Build the bridge.',
    scenario:
      'Equity Value $1,000; debt $300; preferred $40; NCI $60; cash $150.',
    workedSteps: [
      { label: 'Start Equity Value', text: '$1,000.' },
      { label: 'Add debt', text: '+$300.' },
      { label: 'Add preferred', text: '+$40.' },
      { label: 'Add NCI', text: '+$60.' },
      { label: 'Subtract cash', text: '−$150.' },
      { label: 'Enterprise Value', text: '$1,250.' },
    ],
    takeaway:
      'The EV bridge reconciles common equity value with all claims and non-operating assets relevant to the operating business.',
    numberCheck: {
      title: 'Equity Value $600, debt $200, preferred $25, NCI $15, cash $90. What is EV?',
      answer: 750,
      suffix: 'million',
      explanation: '$600 + $200 + $25 + $15 − $90 = $750.',
    },
    mcq: {
      title: 'Why is preferred stock often added in the EV bridge?',
      options: [
        'It is a separate financing claim senior to common equity',
        'It is operating revenue',
        'It is always cash',
        'It reduces total capital',
      ],
      correctIndex: 0,
      correctText: 'Preferred holders have a capital claim not captured in common Equity Value.',
      wrongText: 'Think about which capital providers are represented in common Equity Value and which are not.',
    },
  }),

  makeLesson({
    id: 'cash-in-ev',
    title: 'Cash in the EV Bridge',
    summary: 'Understand why cash is subtracted and when not every dollar of cash should be treated identically.',
    concepts: ['cash', 'valuation'],
    intro:
      'Students often memorize “subtract cash” without understanding the economic reason or the exceptions.',
    teachTitle: 'Subtract cash because it is a non-operating asset the buyer receives.',
    paragraphs: [
      'Enterprise Value aims to isolate the value of operating assets.',
      'Cash is generally not needed to generate EBITDA directly in the way factories, employees, and operating assets are.',
      'A buyer can often use acquired cash to repay debt or fund part of the transaction, reducing net purchase cost.',
      'However, companies need some minimum cash to run the business, so analysts may distinguish excess cash from required operating cash.',
    ],
    callout:
      'The clean textbook bridge subtracts cash; real analysis may require judgment about how much cash is truly excess.',
    scenarioTitle: 'Company has $200 of cash, but needs $50 to operate.',
    scenario:
      'Consider how a buyer might think about the balance.',
    workedSteps: [
      { label: 'Total cash', text: '$200.' },
      { label: 'Required operating cash', text: '$50 may need to remain in the business.' },
      { label: 'Potential excess cash', text: '$150 may be more reasonably viewed as non-operating.' },
      { label: 'Judgment', text: 'The exact treatment depends on the transaction and analysis.' },
    ],
    takeaway:
      'Cash subtraction is an economic adjustment, not a mechanical rule with zero judgment.',
    mcq: {
      title: 'What is the strongest reason to subtract excess cash from Enterprise Value?',
      options: [
        'It is a non-operating asset the buyer receives and can use',
        'It is a liability',
        'It creates EBITDA',
        'It is always restricted from use',
      ],
      correctIndex: 0,
      correctText: 'Excess cash reduces the effective net cost of acquiring the operating business.',
      wrongText: 'Think about whether the cash is part of the operations or an additional asset received by the buyer.',
      reviewConcepts: ['cash'],
    },
  }),

  makeLesson({
    id: 'debt-in-ev',
    title: 'Debt in the EV Bridge',
    summary: 'Why debt is added and why debt-like items can matter in transactions.',
    concepts: ['debt', 'valuation'],
    intro:
      'Debt is added because common Equity Value only reflects the residual claim after lender obligations.',
    teachTitle: 'A buyer of the enterprise must account for lender claims too.',
    paragraphs: [
      'Suppose two identical businesses have the same operating assets but one has far more debt.',
      'Their common Equity Values can differ because debt holders have a claim ahead of equity.',
      'Enterprise Value is designed to compare the operating businesses before that financing split.',
      'In real deals, analysts may also identify debt-like obligations beyond traditional bank loans and bonds.',
    ],
    callout:
      'Debt-like treatment is about economic claims on the business, not just whether an account is literally labeled “debt.”',
    scenarioTitle: 'Same operations, different financing.',
    scenario:
      'Company A has $100 Equity Value and no debt. Company B has $40 Equity Value and $60 debt. Ignore cash.',
    workedSteps: [
      { label: 'Company A EV', text: '$100 + $0 = $100.' },
      { label: 'Company B EV', text: '$40 + $60 = $100.' },
      { label: 'Interpretation', text: 'The same enterprise value is divided differently between lenders and shareholders.' },
    ],
    takeaway:
      'Enterprise Value lets analysts compare operating value separately from capital structure.',
    mcq: {
      title: 'Two otherwise identical businesses have the same EV, but one has more debt. What would you generally expect about its Equity Value?',
      options: [
        'It should generally be lower, all else equal',
        'It must be higher',
        'Debt has no relationship to Equity Value',
        'Equity Value must equal cash',
      ],
      correctIndex: 0,
      correctText: 'More enterprise value is claimed by lenders, leaving less residual value for common equity.',
      wrongText: 'Think of EV as the total pie divided among capital providers.',
      reviewConcepts: ['debt', 'equity'],
    },
  }),

  makeLesson({
    id: 'preferred-stock',
    title: 'Preferred Stock',
    summary: 'Understand why preferred sits between debt and common equity in the capital structure.',
    concepts: ['equity', 'capital'],
    intro:
      'Preferred stock is a separate class of capital that often has features of both debt and equity.',
    teachTitle: 'Preferred holders usually have a claim senior to common shareholders.',
    paragraphs: [
      'Preferred securities can pay fixed or floating dividends and may have liquidation preferences.',
      'They generally rank ahead of common equity but behind debt in the capital structure.',
      'Because common Equity Value does not represent preferred holders, preferred value is often added when calculating Enterprise Value.',
      'Exact terms vary widely, so transaction analysis must read the security documents rather than rely only on the label.',
    ],
    callout:
      'Preferred is added to EV because it is a separate financing claim not included in common Equity Value.',
    scenarioTitle: 'A company has common equity and preferred stock.',
    scenario:
      'Common Equity Value is $400 and preferred stock is worth $50. Ignore other adjustments.',
    workedSteps: [
      { label: 'Common Equity Value', text: '$400 belongs to common shareholders.' },
      { label: 'Preferred claim', text: '$50 belongs to a separate class of capital provider.' },
      { label: 'Bridge effect', text: 'Add the $50 preferred claim when moving toward Enterprise Value.' },
    ],
    takeaway:
      'The EV bridge should include claims not already captured in common Equity Value.',
    mcq: {
      title: 'Why is preferred stock not usually included in common Equity Value?',
      options: [
        'Preferred holders are a separate class from common shareholders',
        'Preferred is always cash',
        'Preferred is revenue',
        'Preferred has no value',
      ],
      correctIndex: 0,
      correctText: 'Common Equity Value belongs to common shareholders, while preferred represents another claim.',
      wrongText: 'Think about which investor class the market capitalization represents.',
    },
  }),

  makeLesson({
    id: 'non-controlling-interest',
    title: 'Non-Controlling Interest',
    summary: 'Understand the matching principle behind adding NCI to Enterprise Value.',
    concepts: ['valuation', 'equity'],
    intro:
      'Non-controlling interest matters because accounting can consolidate 100% of a subsidiary even when the parent owns less than 100%.',
    teachTitle: 'Match the numerator and denominator in valuation multiples.',
    paragraphs: [
      'If a parent owns 80% of a subsidiary but controls it, financial statements may consolidate 100% of the subsidiary’s revenue and EBITDA.',
      'The parent’s Equity Value, however, only reflects the economics attributable to its ownership.',
      'Adding non-controlling interest to Enterprise Value helps align the numerator with the 100% consolidated operating metrics in the denominator.',
      'This is one example of the broader valuation rule: make sure value and financial metric represent the same ownership scope.',
    ],
    callout:
      'NCI is often added so EV corresponds to the full consolidated EBITDA being used.',
    scenarioTitle: 'Parent owns 80% but reports 100% of subsidiary EBITDA.',
    scenario:
      'The remaining 20% belongs to outside investors.',
    workedSteps: [
      { label: 'Financial statements', text: 'Include 100% of controlled subsidiary EBITDA.' },
      { label: 'Parent equity claim', text: 'Does not economically own the outside 20%.' },
      { label: 'NCI adjustment', text: 'Add the outside investors’ claim to EV for a consistent EV / EBITDA comparison.' },
    ],
    takeaway:
      'NCI is fundamentally a matching adjustment between ownership value and consolidated financial results.',
    mcq: {
      title: 'What is the key reason to add NCI when using consolidated EBITDA?',
      options: [
        'To make Enterprise Value reflect the same ownership scope as the EBITDA denominator',
        'Because NCI is cash',
        'Because NCI is always debt',
        'Because consolidated EBITDA excludes subsidiaries',
      ],
      correctIndex: 0,
      correctText: 'Valuation multiples should compare value and operating metrics on a consistent ownership basis.',
      wrongText: 'Think numerator-denominator consistency.',
    },
  }),

  makeLesson({
    id: 'diluted-shares',
    title: 'Diluted Share Count',
    summary: 'Understand why options, RSUs, and convertibles can change Equity Value.',
    concepts: ['share', 'equity', 'stockPrice'],
    intro:
      'A company’s basic share count may understate the effective ownership base if other instruments can create common shares.',
    teachTitle: 'Fully diluted shares try to capture economically relevant potential common shares.',
    paragraphs: [
      'Employee options can create additional shares when exercised.',
      'Restricted stock units can become common shares as they vest.',
      'Convertible securities may turn into common shares under certain conditions.',
      'Bankers therefore calculate diluted share count using instrument-specific methods rather than simply reading basic shares from the balance sheet.',
    ],
    callout:
      'More diluted shares at the same share price means a higher diluted Equity Value.',
    scenarioTitle: '100 million basic shares plus 5 million incremental diluted shares.',
    scenario:
      'Assume a $20 share price.',
    workedSteps: [
      { label: 'Basic market cap', text: '100 million × $20 = $2.0 billion.' },
      { label: 'Diluted shares', text: '105 million.' },
      { label: 'Diluted Equity Value', text: '105 million × $20 = $2.1 billion.' },
      { label: 'Difference', text: '$100 million of additional diluted equity value.' },
    ],
    takeaway:
      'Dilution matters because ownership instruments can increase the effective number of common shares.',
    numberCheck: {
      title: 'A company has 70 million basic shares and 3 million incremental diluted shares at $30 per share. What is diluted Equity Value in millions?',
      answer: 2190,
      suffix: 'million dollars',
      explanation: '73 million × $30 = $2,190 million.',
      reviewConcepts: ['share', 'stockPrice'],
    },
    mcq: {
      title: 'All else equal, what happens to diluted Equity Value when diluted share count increases?',
      options: [
        'Diluted Equity Value increases',
        'Diluted Equity Value decreases automatically',
        'Enterprise Value must become zero',
        'Revenue falls',
      ],
      correctIndex: 0,
      correctText: 'At a constant share price, more diluted shares increase total common equity value.',
      wrongText: 'Equity Value is share price multiplied by diluted shares.',
    },
  }),

  makeLesson({
    id: 'ev-vs-equity-metrics',
    title: 'Matching EV and Equity Metrics',
    summary: 'Learn which valuation multiples pair with Enterprise Value versus Equity Value.',
    concepts: ['valuation', 'ebitda', 'ebit', 'netIncome'],
    intro:
      'A valuation multiple only makes sense when the value in the numerator belongs to the same capital providers as the financial metric in the denominator.',
    teachTitle: 'Match pre-interest operating metrics with EV and post-interest equity metrics with Equity Value.',
    paragraphs: [
      'Revenue, EBITDA, and EBIT are generally measured before interest expense, so they reflect performance available to both debt and equity capital providers.',
      'Enterprise Value also represents value to both debt and equity providers, making EV / Revenue, EV / EBITDA, and EV / EBIT logically consistent.',
      'Net income is measured after interest expense and therefore belongs more directly to common equity holders.',
      'Equity Value / Net Income, commonly expressed as P / E, is therefore an equity-value multiple.',
    ],
    callout:
      'EV pairs with pre-interest metrics. Equity Value pairs with post-interest equity metrics.',
    scenarioTitle: 'Choose the right numerator.',
    scenario:
      'You want to value a company using EBITDA and then using net income.',
    workedSteps: [
      { label: 'EBITDA multiple', text: 'Use EV / EBITDA.' },
      { label: 'Net income multiple', text: 'Use Equity Value / Net Income, or P / E.' },
      { label: 'Why', text: 'Each numerator matches the capital-provider scope of its denominator.' },
    ],
    takeaway:
      'Multiple consistency comes from matching who owns the value with who receives the financial metric.',
    mcq: {
      title: 'Which multiple is most logically consistent?',
      options: [
        'EV / EBITDA',
        'Equity Value / EBITDA without adjustment',
        'EV / Net Income',
        'Debt / Revenue as a valuation multiple',
      ],
      correctIndex: 0,
      correctText: 'EBITDA is pre-interest and Enterprise Value represents all major capital providers.',
      wrongText: 'Match the ownership scope of the numerator and denominator.',
      reviewConcepts: ['ebitda', 'valuation'],
    },
  }),

  makeLesson({
    id: 'convert-ev-equity',
    title: 'Converting Between EV and Equity Value',
    summary: 'Move confidently in both directions through the valuation bridge.',
    concepts: ['equity', 'debt', 'cash', 'valuation'],
    intro:
      'Banking interviews often give one value and ask you to solve for the other.',
    teachTitle: 'Rearrange the bridge instead of memorizing a second formula.',
    paragraphs: [
      'Simplified EV = Equity Value + Debt − Cash.',
      'If you know EV and want Equity Value, rearrange: Equity Value = EV − Debt + Cash.',
      'With additional claims, reverse every adjustment consistently.',
      'The logic is always the same: Enterprise Value is allocated among capital claims, while non-operating cash reduces the net operating-business value attributable to those claims.',
    ],
    callout:
      'Do not memorize both directions separately. Understand the bridge and algebraically reverse it.',
    scenarioTitle: 'EV is $900, debt $250, cash $100.',
    scenario:
      'Solve for Equity Value.',
    workedSteps: [
      { label: 'Start EV', text: '$900.' },
      { label: 'Subtract debt claim', text: '$900 − $250 = $650.' },
      { label: 'Add cash', text: '$650 + $100 = $750.' },
      { label: 'Equity Value', text: '$750.' },
    ],
    takeaway:
      'Moving from EV to Equity Value means removing non-equity claims and restoring non-operating assets.',
    numberCheck: {
      title: 'EV is $1,200, debt is $400, and cash is $150. What is Equity Value?',
      answer: 950,
      suffix: 'million',
      explanation: '$1,200 − $400 + $150 = $950.',
    },
    mcq: {
      title: 'If debt increases while EV and cash remain unchanged, what happens to Equity Value?',
      options: [
        'Equity Value decreases',
        'Equity Value increases',
        'Equity Value is unchanged',
        'Revenue increases',
      ],
      correctIndex: 0,
      correctText: 'More of the fixed enterprise value is claimed by lenders, leaving less for common equity.',
      wrongText: 'Use Equity Value = EV − Debt + Cash.',
      reviewConcepts: ['debt', 'equity'],
    },
  }),

  makeLesson({
    id: 'negative-net-debt',
    title: 'Net Cash & Unusual EV Cases',
    summary: 'Understand what happens when cash exceeds debt or when Enterprise Value behaves unexpectedly.',
    concepts: ['cash', 'debt', 'equity', 'valuation'],
    intro:
      'The standard bridge can produce situations that feel counterintuitive, especially for cash-rich companies.',
    teachTitle: 'If cash exceeds debt, Equity Value can be greater than Enterprise Value.',
    paragraphs: [
      'Net debt is often defined as debt minus cash.',
      'If cash is greater than debt, net debt becomes negative and the company has net cash.',
      'In that case, subtracting cash in the EV bridge can make Enterprise Value lower than Equity Value.',
      'This is not an error: shareholders own both the operating business and the excess cash asset.',
    ],
    callout:
      'EV can be below Equity Value when the company has more cash than debt.',
    scenarioTitle: '$500 Equity Value, $50 debt, $150 cash.',
    scenario:
      'Calculate Enterprise Value.',
    workedSteps: [
      { label: 'Start Equity Value', text: '$500.' },
      { label: 'Add debt', text: '+$50.' },
      { label: 'Subtract cash', text: '−$150.' },
      { label: 'EV', text: '$400.' },
      { label: 'Interpretation', text: 'Equity includes a $100 net-cash position in addition to the operating business.' },
    ],
    takeaway:
      'Enterprise Value isolates the operating business, so large non-operating cash balances can make EV lower than Equity Value.',
    mcq: {
      title: 'Can Enterprise Value be lower than Equity Value?',
      options: [
        'Yes, especially when cash exceeds debt and other added claims',
        'No, never',
        'Only if revenue is negative',
        'Only if EBITDA equals zero',
      ],
      correctIndex: 0,
      correctText: 'A net-cash balance can make the operating-business value lower than the total common equity value.',
      wrongText: 'Remember that cash is subtracted in the EV bridge.',
      reviewConcepts: ['cash', 'debt', 'equity'],
    },
  }),

  makeLesson({
    id: 'ev-equity-interview',
    title: 'EV vs. Equity Value Interview Logic',
    summary: 'Handle the conceptual questions interviewers use to test whether you understand the bridge.',
    concepts: ['valuation', 'equity', 'debt', 'cash'],
    intro:
      'Interviewers often care less about whether you remember the formula than whether you can explain why each adjustment exists.',
    teachTitle: 'Explain the economics before quoting the formula.',
    paragraphs: [
      'Equity Value belongs to common shareholders.',
      'Enterprise Value represents the value of the core business to all major capital providers.',
      'Debt is added because lender claims are not captured in common Equity Value.',
      'Cash is subtracted because it is a non-operating asset received with the company.',
      'Other adjustments follow the same logic: add capital claims not in common equity, subtract non-operating assets.',
    ],
    callout:
      'A strong interview answer explains ownership and claims, not just “add debt, subtract cash.”',
    scenarioTitle: 'Interviewer asks why EV is capital-structure neutral.',
    scenario:
      'You need to answer without memorized jargon.',
    workedSteps: [
      { label: 'Start with operations', text: 'EV values the operating business before deciding how that value is split among lenders and shareholders.' },
      { label: 'Financing split', text: 'Debt and equity are alternative claims on the same enterprise.' },
      { label: 'Comparison value', text: 'That makes EV more useful for comparing operating businesses with different financing mixes.' },
    ],
    takeaway:
      'Enterprise Value helps compare operations independently of the debt-versus-equity split.',
    written: {
      title: 'Why do we add debt and subtract cash when moving from Equity Value to Enterprise Value?',
      body: 'Explain the economic reason for both adjustments.',
      placeholder: 'Debt is added because..., while cash is subtracted because...',
      modelAnswer:
        'Debt is added because lenders have a claim on the business that is not included in common Equity Value. Cash is subtracted because the buyer receives that non-operating asset and can use it to reduce the effective cost of acquiring the operating business.',
      criteria: [
        { id: 'debt', label: 'explain that debt is a separate lender claim', keywords: ['debt', 'lender', 'claim', 'owed', 'creditor'] },
        { id: 'cash', label: 'explain that cash is an asset the buyer receives or can use', keywords: ['cash', 'buyer', 'receive', 'offset', 'purchase cost', 'non operating'] },
      ],
    },
    completeTitle: 'Enterprise vs. Equity Value complete.',
    completeBody:
      'You now understand the bridge, the ownership logic, and how to match valuation multiples. Next comes Valuation: using market evidence and financial analysis to estimate what a company is worth.',
  }),
]
