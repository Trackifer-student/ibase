import { makeLesson } from './lessonFactory'

const L = (lesson) =>
  makeLesson({
    eyebrow: 'LBO FUNDAMENTALS',
    completeTitle: 'Lock in the sponsor logic.',
    completeBody:
      'Keep connecting entry price, leverage, cash generation, debt paydown, and exit value to equity returns.',
    ...lesson,
  })

export const lboLessons = [
  L({
    id: 'lbo-overview',
    title: 'What Is an LBO?',
    summary: 'Understand how a financial sponsor uses debt to acquire a company and earn a return on equity.',
    concepts: ['debt', 'equity', 'cashFlow', 'return'],
    intro:
      'A leveraged buyout is an acquisition where a financial sponsor funds a meaningful portion of purchase price with debt.',
    teachTitle: 'The sponsor invests equity, uses debt, improves or grows the business, pays down debt, and exits later.',
    paragraphs: [
      'The acquired company’s cash flow is expected to service and repay the acquisition debt.',
      'Because debt reduces the amount of equity the sponsor must invest upfront, strong outcomes can produce high equity returns.',
      'The same leverage also magnifies downside because debt obligations remain fixed if performance weakens.',
      'LBO returns are usually driven by entry price, leverage, operating growth, debt paydown, and exit valuation.',
    ],
    callout:
      'Leverage does not create operating value by itself; it changes how much equity is required and how outcomes are distributed.',
    scenarioTitle: 'Buy a company for $1,000 with $600 debt and $400 equity.',
    scenario:
      'Five years later the company is sold for $1,200 after all debt has been repaid.',
    workedSteps: [
      { label: 'Initial sponsor equity', text: '$400.' },
      { label: 'Exit equity value', text: '$1,200.' },
      { label: 'Equity gain', text: '$800.' },
      { label: 'MOIC', text: '$1,200 ÷ $400 = 3.0x.' },
    ],
    takeaway:
      'LBO analysis focuses on how the enterprise value ultimately turns into sponsor equity returns.',
    mcq: {
      title: 'What primarily makes an LBO “leveraged”?',
      options: [
        'A meaningful portion of purchase price is funded with debt',
        'The company has high revenue',
        'The sponsor issues an IPO on day one',
        'The target has no cash flow',
      ],
      correctIndex: 0,
      correctText: 'Debt financing is a defining feature of the transaction structure.',
      wrongText: 'Think about how the acquisition is funded.',
      reviewConcepts: ['debt', 'equity'],
    },
  }),

  L({
    id: 'good-lbo-candidate',
    title: 'What Makes a Good LBO Candidate?',
    summary: 'Identify the business characteristics that can support debt and sponsor returns.',
    concepts: ['cashFlow', 'debt', 'risk'],
    intro:
      'Sponsors prefer businesses that can survive leverage and generate predictable cash to repay debt.',
    teachTitle: 'Stable cash flow and downside protection matter as much as growth.',
    paragraphs: [
      'Recurring or predictable revenue can make debt service easier to underwrite.',
      'Strong margins and cash conversion provide capacity to pay interest and reduce principal.',
      'Low or manageable CapEx and working-capital needs can support free cash flow.',
      'Defensible market position, multiple growth paths, and opportunities for operational improvement can add upside.',
      'Extremely cyclical, capital-intensive, or fragile businesses may struggle under high leverage.',
    ],
    callout:
      'A great LBO candidate is not simply “a company with lots of EBITDA.” It needs durable cash flow and manageable risk.',
    mcq: {
      title: 'Which characteristic is generally attractive in an LBO candidate?',
      options: [
        'Stable, predictable free cash flow',
        'Extreme cash-flow volatility',
        'No ability to service debt',
        'Massive unavoidable CapEx with weak margins',
      ],
      correctIndex: 0,
      correctText: 'Predictable cash generation makes debt service and paydown more reliable.',
      wrongText: 'Sponsors need the company’s cash flow to support leverage.',
      reviewConcepts: ['cashFlow', 'debt', 'risk'],
    },
  }),

  L({
    id: 'lbo-sources-uses',
    title: 'LBO Sources & Uses',
    summary: 'Build the transaction funding schedule and calculate sponsor equity.',
    concepts: ['debt', 'equity', 'cash'],
    intro:
      'Every LBO starts by determining what must be funded and where the money will come from.',
    teachTitle: 'Uses include purchase price and fees; sources include debt and sponsor equity.',
    paragraphs: [
      'Uses often include equity purchase price, refinancing target debt, transaction fees, financing fees, and minimum cash funding.',
      'Sources include new debt, rollover equity, sponsor equity, and sometimes target cash.',
      'Sponsor equity is typically the plug that makes total sources equal total uses.',
      'The amount of sponsor equity invested becomes the denominator of return calculations.',
    ],
    callout:
      'Sponsor Equity = Total Uses − Other Sources.',
    scenarioTitle: 'Total uses $1,050; debt financing $650.',
    scenario:
      'Assume no other sources.',
    workedSteps: [
      { label: 'Uses', text: '$1,050.' },
      { label: 'Debt source', text: '$650.' },
      { label: 'Sponsor equity', text: '$1,050 − $650 = $400.' },
    ],
    takeaway:
      'More debt reduces initial equity required, but also increases financial risk.',
    numberCheck: {
      title: 'Total uses are $900 and debt sources are $540. What is sponsor equity?',
      answer: 360,
      suffix: 'million',
      explanation: '$900 − $540 = $360.',
      reviewConcepts: ['debt', 'equity'],
    },
    mcq: {
      title: 'What item commonly acts as the plug in an LBO Sources & Uses schedule?',
      options: [
        'Sponsor equity',
        'Revenue',
        'Depreciation',
        'Accounts receivable',
      ],
      correctIndex: 0,
      correctText: 'Sponsor equity fills the remaining funding gap after other sources are determined.',
      wrongText: 'The sponsor must fund whatever portion of uses is not covered by debt or other sources.',
      reviewConcepts: ['equity'],
    },
  }),

  L({
    id: 'lbo-debt-structure',
    title: 'LBO Debt Structure',
    summary: 'Understand why LBO financing can include several debt layers with different cost and risk.',
    concepts: ['debt', 'interest', 'risk'],
    intro:
      'Large buyouts often use more than one debt instrument.',
    teachTitle: 'Debt tranches differ by seniority, security, maturity, amortization, and interest rate.',
    paragraphs: [
      'Senior secured debt generally has the strongest claim on assets and therefore tends to have lower cost.',
      'Junior or subordinated debt takes more risk and generally requires a higher return.',
      'Revolvers provide flexible liquidity, while term loans and bonds can provide longer-term financing.',
      'The capital structure is designed to balance cost, flexibility, lender appetite, and downside protection.',
    ],
    callout:
      'Higher lender risk generally means higher required interest cost.',
    mcq: {
      title: 'Why does junior debt generally cost more than senior secured debt?',
      options: [
        'It has a weaker claim and therefore greater risk of loss',
        'It always matures sooner',
        'It is equity',
        'It receives revenue first',
      ],
      correctIndex: 0,
      correctText: 'Lower priority in the capital structure increases lender risk.',
      wrongText: 'Think about who gets repaid first if the business fails.',
      reviewConcepts: ['debt', 'risk', 'interest'],
    },
  }),

  L({
    id: 'lbo-leverage',
    title: 'Leverage & Debt Capacity',
    summary: 'Estimate how much debt a company can support without making the structure unsustainable.',
    concepts: ['debt', 'ebitda', 'cashFlow', 'risk'],
    intro:
      'Sponsors want enough leverage to enhance returns but not so much that the company cannot survive normal volatility.',
    teachTitle: 'Debt capacity depends on cash flow, interest burden, cyclicality, assets, and lender tolerance.',
    paragraphs: [
      'Debt / EBITDA is a common shorthand for leverage.',
      'Interest coverage compares earnings or cash flow with interest obligations.',
      'A stable software company and a cyclical commodity producer may support very different leverage even at the same EBITDA.',
      'Lenders also care about collateral, covenants, maturity, and downside cases.',
    ],
    callout:
      'Maximum leverage is not necessarily optimal leverage.',
    scenarioTitle: '$500 debt and $100 EBITDA.',
    scenario:
      'Calculate gross Debt / EBITDA.',
    workedSteps: [
      { label: 'Debt', text: '$500.' },
      { label: 'EBITDA', text: '$100.' },
      { label: 'Leverage', text: '$500 ÷ $100 = 5.0x.' },
    ],
    takeaway:
      'Leverage must be judged against the durability of cash flow, not only the headline multiple.',
    numberCheck: {
      title: 'Debt is $720 and EBITDA is $120. What is Debt / EBITDA?',
      answer: 6,
      suffix: 'x',
      explanation: '$720 ÷ $120 = 6.0x.',
      reviewConcepts: ['debt', 'ebitda'],
    },
    mcq: {
      title: 'Why might a stable business support more leverage than a cyclical business?',
      options: [
        'Its cash flow is more predictable for debt service',
        'Stable businesses never pay interest',
        'Cyclical businesses have no assets',
        'Leverage ignores cash flow',
      ],
      correctIndex: 0,
      correctText: 'Predictability reduces the risk that operating cash flow falls below debt obligations.',
      wrongText: 'Debt capacity is tied to reliable debt service.',
      reviewConcepts: ['cashFlow', 'debt'],
    },
  }),

  L({
    id: 'lbo-operating-case',
    title: 'Building the LBO Operating Case',
    summary: 'Forecast the business before forecasting sponsor returns.',
    concepts: ['revenue', 'ebitda', 'cashFlow', 'capex', 'workingCapital'],
    intro:
      'An LBO return model is only credible if the underlying operating forecast is credible.',
    teachTitle: 'Project revenue, margins, taxes, CapEx, and working capital to estimate cash available for debt paydown.',
    paragraphs: [
      'Revenue growth and EBITDA margins drive operating earnings.',
      'Taxes, CapEx, and working-capital investment reduce cash available to repay debt.',
      'Sponsors usually model base, upside, and downside cases to understand risk.',
      'The downside case is particularly important because leverage can turn modest operating misses into severe equity losses.',
    ],
    callout:
      'The company repays debt with cash flow, not with EBITDA alone.',
    mcq: {
      title: 'Which item most directly reduces cash available for debt paydown?',
      options: [
        'Capital expenditures',
        'EBITDA add-backs only',
        'Share price',
        'Market capitalization',
      ],
      correctIndex: 0,
      correctText: 'CapEx is a real cash outflow that competes with debt repayment.',
      wrongText: 'Focus on actual cash uses below EBITDA.',
      reviewConcepts: ['capex', 'cashFlow'],
    },
  }),

  L({
    id: 'debt-paydown',
    title: 'Debt Paydown',
    summary: 'Understand why reducing debt can create equity value even with no change in Enterprise Value.',
    concepts: ['debt', 'cashFlow', 'equity'],
    intro:
      'Debt paydown is one of the main return drivers in an LBO.',
    teachTitle: 'As debt falls, more of the same Enterprise Value belongs to equity.',
    paragraphs: [
      'Enterprise Value is split between debt claims and equity value.',
      'If the company uses free cash flow to repay debt while Enterprise Value stays constant, the residual Equity Value increases.',
      'This is a transfer within the capital structure rather than new operating value creation.',
      'Sponsors therefore care deeply about cash conversion and mandatory or optional debt amortization.',
    ],
    callout:
      'Equity Value = Enterprise Value − Net Debt, in a simplified LBO bridge.',
    scenarioTitle: 'EV stays at $1,000 while debt falls from $600 to $300.',
    scenario:
      'Ignore cash.',
    workedSteps: [
      { label: 'Entry equity value', text: '$1,000 − $600 = $400.' },
      { label: 'Exit equity value', text: '$1,000 − $300 = $700.' },
      { label: 'Equity gain from paydown', text: '$300.' },
    ],
    takeaway:
      'Debt paydown can grow sponsor equity value even if the company sells at the same enterprise value.',
    numberCheck: {
      title: 'Exit EV is $900 and debt is $250. Ignore cash. What is exit Equity Value?',
      answer: 650,
      suffix: 'million',
      explanation: '$900 − $250 = $650.',
      reviewConcepts: ['debt', 'equity'],
    },
    mcq: {
      title: 'If EV is unchanged and debt is repaid, what happens to Equity Value?',
      options: [
        'Equity Value increases',
        'Equity Value decreases',
        'Equity Value must stay unchanged',
        'Revenue becomes debt',
      ],
      correctIndex: 0,
      correctText: 'Less enterprise value is claimed by lenders, leaving more for equity.',
      wrongText: 'Use the EV-to-equity bridge.',
      reviewConcepts: ['debt', 'equity'],
    },
  }),

  L({
    id: 'exit-assumptions',
    title: 'Exit Value & Exit Multiple',
    summary: 'Translate future operating performance into sale proceeds for the sponsor.',
    concepts: ['valuation', 'ebitda', 'equity', 'debt'],
    intro:
      'The sponsor usually realizes its return by selling or otherwise monetizing the business after several years.',
    teachTitle: 'Exit Enterprise Value is often modeled as exit EBITDA multiplied by an exit multiple.',
    paragraphs: [
      'The exit multiple should be reasonable relative to entry valuation, peers, and the company’s future growth and risk profile.',
      'Assuming multiple expansion can materially boost returns but should not be the only way the deal works.',
      'After calculating exit EV, subtract exit debt and add cash to reach sponsor exit Equity Value.',
      'That equity value is compared with the sponsor’s initial equity investment.',
    ],
    callout:
      'Exit EV = Exit EBITDA × Exit Multiple.',
    scenarioTitle: 'Exit EBITDA $140 at 8x; exit debt $300.',
    scenario:
      'Ignore cash.',
    workedSteps: [
      { label: 'Exit EV', text: '$140 × 8 = $1,120.' },
      { label: 'Exit debt', text: '$300.' },
      { label: 'Exit equity value', text: '$820.' },
    ],
    takeaway:
      'Exit assumptions are a major return driver and should be conservative enough to survive scrutiny.',
    numberCheck: {
      title: 'Exit EBITDA is $100 and exit multiple is 9x. Debt is $250. Ignore cash. What is exit Equity Value?',
      answer: 650,
      suffix: 'million',
      explanation: 'EV = $900; Equity Value = $900 − $250 = $650.',
    },
    mcq: {
      title: 'Why is relying on multiple expansion risky?',
      options: [
        'Future market valuation levels are outside the sponsor’s control',
        'Exit multiples never change',
        'Debt determines the multiple exactly',
        'EBITDA cannot grow',
      ],
      correctIndex: 0,
      correctText: 'Market conditions at exit may not support a higher multiple.',
      wrongText: 'Sponsors control operations more than future market sentiment.',
      reviewConcepts: ['risk', 'valuation'],
    },
  }),

  L({
    id: 'moic',
    title: 'MOIC',
    summary: 'Measure how many dollars of equity value the sponsor receives for each dollar invested.',
    concepts: ['return', 'equity'],
    intro:
      'MOIC is one of the simplest ways to describe LBO equity return.',
    teachTitle: 'Multiple of Invested Capital compares exit equity proceeds with entry equity invested.',
    paragraphs: [
      'A 2.0x MOIC means the sponsor receives two dollars back for every dollar invested.',
      'A 3.0x MOIC means three dollars back for every dollar invested.',
      'MOIC ignores how long the investment took.',
      'That is why sponsors also use IRR, which incorporates time.',
    ],
    callout:
      'MOIC = Exit Equity Proceeds ÷ Entry Equity Investment.',
    scenarioTitle: '$300 invested and $750 received at exit.',
    scenario:
      'Calculate MOIC.',
    workedSteps: [
      { label: 'Exit proceeds', text: '$750.' },
      { label: 'Entry equity', text: '$300.' },
      { label: 'MOIC', text: '$750 ÷ $300 = 2.5x.' },
    ],
    takeaway:
      'MOIC measures total multiple of money, not speed of return.',
    numberCheck: {
      title: 'Sponsor invests $400 and exits with $1,000. What is MOIC?',
      answer: 2.5,
      suffix: 'x',
      explanation: '$1,000 ÷ $400 = 2.5x.',
    },
    mcq: {
      title: 'What important factor does MOIC ignore?',
      options: [
        'How long the investment is held',
        'Entry equity',
        'Exit equity value',
        'Total return multiple',
      ],
      correctIndex: 0,
      correctText: 'MOIC does not distinguish between a 2.0x return in three years and a 2.0x return in ten years.',
      wrongText: 'Think about time.',
      reviewConcepts: ['return'],
    },
  }),

  L({
    id: 'irr',
    title: 'IRR',
    summary: 'Measure the annualized return implied by the timing of sponsor cash flows.',
    concepts: ['return', 'timeValueMoney'],
    intro:
      'IRR adds time to the return analysis.',
    teachTitle: 'The same MOIC produces a higher IRR when achieved faster.',
    paragraphs: [
      'IRR is the discount rate that makes the present value of investment cash inflows and outflows equal.',
      'In a simple one-entry-one-exit LBO, IRR depends on entry equity, exit equity, and holding period.',
      'A 2.0x MOIC in three years is much more attractive than 2.0x in ten years.',
      'Sponsors therefore manage both value creation and speed of realization.',
    ],
    callout:
      'Shorter hold period increases IRR for the same MOIC.',
    scenarioTitle: '2.0x MOIC over different holding periods.',
    scenario:
      'Compare three years with six years.',
    workedSteps: [
      { label: 'Same money multiple', text: 'Both investments double.' },
      { label: 'Three-year case', text: 'Capital compounds to 2.0x more quickly.' },
      { label: 'Six-year case', text: 'The annualized return is lower because the same gain takes twice as long.' },
    ],
    takeaway:
      'IRR rewards faster realization of the same total equity multiple.',
    mcq: {
      title: 'Two investments both produce 2.0x MOIC. Which has the higher IRR?',
      options: [
        'The one that reaches 2.0x sooner',
        'They must have the same IRR',
        'The one with the longer hold',
        'IRR is unrelated to time',
      ],
      correctIndex: 0,
      correctText: 'IRR annualizes return, so speed matters.',
      wrongText: 'Time is the major difference between MOIC and IRR.',
      reviewConcepts: ['return', 'timeValueMoney'],
    },
  }),

  L({
    id: 'lbo-return-drivers',
    title: 'The Five LBO Return Drivers',
    summary: 'Connect entry price, leverage, growth, debt paydown, and exit multiple to sponsor returns.',
    concepts: ['valuation', 'debt', 'cashFlow', 'return'],
    intro:
      'Most LBO return movement can be explained through a small set of drivers.',
    teachTitle: 'Strong returns usually come from buying well, improving the business, using leverage responsibly, and exiting at a good value.',
    paragraphs: [
      'Lower entry price reduces sponsor equity required and improves return potential.',
      'More leverage can reduce equity required, though it increases downside risk.',
      'Revenue and EBITDA growth increase enterprise value if multiples remain stable.',
      'Free cash flow reduces debt and shifts enterprise value toward equity.',
      'Exit multiple expansion increases sale value, while contraction reduces it.',
    ],
    callout:
      'A strong deal should not require every return driver to move in the sponsor’s favor.',
    scenarioTitle: 'Base case versus downside.',
    scenario:
      'The base case assumes EBITDA growth and flat exit multiple; downside assumes slower growth and multiple contraction.',
    workedSteps: [
      { label: 'Base case', text: 'Returns come from business growth and debt paydown.' },
      { label: 'Downside', text: 'Lower EBITDA and lower multiple reduce EV while debt may be higher.' },
      { label: 'Equity sensitivity', text: 'Because equity is residual, sponsor returns can fall sharply.' },
    ],
    takeaway:
      'Leverage makes equity returns highly sensitive to operating and exit assumptions.',
    mcq: {
      title: 'Which return driver is most outside the sponsor’s direct control?',
      options: [
        'Exit market multiple',
        'Operational improvement efforts',
        'Debt paydown from cash flow',
        'Entry diligence',
      ],
      correctIndex: 0,
      correctText: 'Future market valuation conditions are largely external.',
      wrongText: 'Sponsors can influence operations and debt paydown more directly than future market multiples.',
      reviewConcepts: ['valuation', 'risk'],
    },
  }),

  L({
    id: 'paper-lbo',
    title: 'Paper LBO',
    summary: 'Solve a simplified LBO quickly without a full spreadsheet.',
    concepts: ['ebitda', 'debt', 'equity', 'return'],
    intro:
      'Paper LBO questions test whether you understand the return mechanics well enough to calculate them with simple assumptions.',
    teachTitle: 'Entry EV → debt and equity → operating growth → debt paydown → exit EV → exit equity → return.',
    paragraphs: [
      'Start with entry EBITDA and entry multiple to calculate entry EV.',
      'Use leverage to calculate debt and solve for sponsor equity.',
      'Forecast exit EBITDA and apply an exit multiple to get exit EV.',
      'Subtract exit debt to calculate exit equity value.',
      'Compare exit equity with entry sponsor equity to calculate MOIC and approximate IRR.',
    ],
    callout:
      'Keep the arithmetic simple and narrate the logic as you calculate.',
    scenarioTitle: 'Entry EBITDA $100; 10x entry; 6x debt; exit EBITDA $130; 9x exit; debt falls to $400.',
    scenario:
      'Ignore fees and cash.',
    workedSteps: [
      { label: 'Entry EV', text: '$100 × 10 = $1,000.' },
      { label: 'Entry debt', text: '$100 × 6 = $600.' },
      { label: 'Entry equity', text: '$1,000 − $600 = $400.' },
      { label: 'Exit EV', text: '$130 × 9 = $1,170.' },
      { label: 'Exit equity', text: '$1,170 − $400 = $770.' },
      { label: 'MOIC', text: '$770 ÷ $400 = 1.925x.' },
    ],
    takeaway:
      'A paper LBO is the full sponsor-return bridge stripped down to its essential drivers.',
    written: {
      title: 'Walk through the major steps of a paper LBO.',
      body: 'Explain the order from entry value to sponsor return.',
      placeholder: 'First calculate entry EV from..., then...',
      modelAnswer:
        'Calculate entry EV from EBITDA and the entry multiple, determine debt and sponsor equity, project exit EBITDA and debt paydown, calculate exit EV using the exit multiple, subtract exit debt to get exit Equity Value, then compare exit equity with entry equity to calculate MOIC and IRR.',
      criteria: [
        { id: 'entry', label: 'describe entry EV, debt, and equity', keywords: ['entry', 'ebitda', 'multiple', 'debt', 'equity'] },
        { id: 'exit', label: 'describe exit EV and debt paydown', keywords: ['exit', 'debt paydown', 'debt', 'exit multiple', 'exit ev'] },
        { id: 'return', label: 'describe sponsor return calculation', keywords: ['moic', 'irr', 'return', 'exit equity', 'entry equity'] },
      ],
    },
    completeTitle: 'LBO Fundamentals complete.',
    completeBody:
      'You now understand how sponsors translate leverage, cash flow, debt paydown, and exit value into equity returns. Next comes Markets & Deals so you can connect technical knowledge with the real financial environment.',
  }),
]
