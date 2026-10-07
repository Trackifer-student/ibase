import { makeLesson } from './lessonFactory'

const M = (lesson) =>
  makeLesson({
    eyebrow: 'MARKETS & DEALS',
    completeTitle: 'Connect the market signal.',
    completeBody:
      'Keep asking how the market development changes financing cost, valuation, risk appetite, or deal activity.',
    ...lesson,
  })

export const marketsLessons = [
  M({
    id: 'rates-matter',
    title: 'Why Interest Rates Matter',
    summary: 'Connect rates to borrowing costs, valuation, and deal activity.',
    concepts: ['interestRate', 'presentValue', 'debt', 'valuation'],
    intro:
      'Interest rates sit underneath almost every major finance decision because they influence the cost of money.',
    teachTitle: 'Higher rates usually raise borrowing costs and discount rates.',
    paragraphs: [
      'Companies face higher interest expense when new debt becomes more expensive.',
      'Higher required returns reduce the present value of future cash flows, all else equal.',
      'More expensive financing can make acquisitions, buyouts, and capital projects harder to justify.',
      'Rate changes can also shift investor appetite between bonds, equities, and other assets.',
    ],
    callout:
      'Rates affect both the numerator through earnings and cash flow and the denominator through valuation discount rates.',
    mcq: {
      title: 'All else equal, what does a rise in interest rates usually do to DCF value?',
      options: [
        'Reduces DCF value',
        'Increases DCF value automatically',
        'Has no effect',
        'Eliminates debt',
      ],
      correctIndex: 0,
      correctText: 'Higher required returns usually reduce present value.',
      wrongText: 'Think discount rates and financing costs.',
      reviewConcepts: ['interestRate', 'presentValue'],
    },
  }),

  M({
    id: 'fed-monetary-policy',
    title: 'The Fed & Monetary Policy',
    summary: 'Understand how central-bank policy flows into markets and corporate finance.',
    concepts: ['interestRate'],
    intro:
      'In the U.S., Federal Reserve policy influences short-term rates and financial conditions across the economy.',
    teachTitle: 'Policy affects the price and availability of credit.',
    paragraphs: [
      'The Fed can raise or lower its policy rate in response to inflation, employment, and economic conditions.',
      'Changes in short-term rates can influence Treasury yields, bank lending, corporate borrowing, mortgages, and investor risk appetite.',
      'Markets often move before the Fed acts because investors price expected future policy.',
      'Bankers care because financing conditions can materially change transaction timing and valuation.',
    ],
    callout:
      'Markets trade expectations, not only announced policy.',
    mcq: {
      title: 'Why can markets move before a Fed rate decision?',
      options: [
        'Investors price expectations about future policy in advance',
        'Rates have no market effect',
        'The Fed sets every stock price',
        'Debt disappears before meetings',
      ],
      correctIndex: 0,
      correctText: 'Asset prices incorporate expectations before official actions occur.',
      wrongText: 'Financial markets are forward-looking.',
      reviewConcepts: ['interestRate'],
    },
  }),

  M({
    id: 'yield-curve',
    title: 'The Yield Curve',
    summary: 'Read the relationship between interest rates and maturity.',
    concepts: ['interestRate', 'bond'],
    intro:
      'The yield curve plots yields on similar-quality debt across different maturities.',
    teachTitle: 'Its shape reflects expectations about future rates, growth, inflation, and risk.',
    paragraphs: [
      'An upward-sloping curve generally means longer-term yields are above short-term yields.',
      'A flat or inverted curve means short-term yields are near or above longer-term yields.',
      'Curve shape can affect bank profitability, borrowing decisions, and market sentiment.',
      'The curve is an indicator, not a perfect forecasting machine.',
    ],
    callout:
      'Always identify which maturities and credit quality you are comparing.',
    mcq: {
      title: 'What is an inverted yield curve?',
      options: [
        'Short-term yields are above longer-term yields',
        'Long-term yields are always zero',
        'All bonds have the same price',
        'Equities trade below cash',
      ],
      correctIndex: 0,
      correctText: 'Inversion means shorter maturities yield more than longer maturities.',
      wrongText: 'Compare short and long maturity yields.',
      reviewConcepts: ['bond', 'interestRate'],
    },
  }),

  M({
    id: 'inflation',
    title: 'Inflation & Corporate Finance',
    summary: 'See how changing prices affect rates, margins, and valuation.',
    concepts: ['interestRate', 'revenue', 'expense'],
    intro:
      'Inflation changes the prices companies charge, the costs they pay, and the rates investors require.',
    teachTitle: 'The key question is whether pricing power keeps up with cost inflation.',
    paragraphs: [
      'Revenue can rise simply because prices rise, but that does not guarantee better real economics.',
      'Input, wage, and transportation costs can pressure margins if companies cannot pass increases to customers.',
      'Persistent inflation can contribute to higher interest rates and discount rates.',
      'Businesses with strong pricing power may protect margins better than those selling commoditized products.',
    ],
    callout:
      'Nominal growth is not automatically real value creation.',
    mcq: {
      title: 'Why can inflation hurt a company even if its revenue grows?',
      options: [
        'Costs may rise faster than prices, compressing margins',
        'Inflation always eliminates revenue',
        'Inflation makes debt disappear',
        'Revenue cannot change with prices',
      ],
      correctIndex: 0,
      correctText: 'The margin effect depends on how selling prices compare with cost inflation.',
      wrongText: 'Look beyond nominal revenue to costs and margins.',
    },
  }),

  M({
    id: 'bond-price-yield',
    title: 'Bond Prices & Yields',
    summary: 'Understand the inverse relationship between existing bond prices and market yields.',
    concepts: ['bond', 'interestRate', 'return'],
    intro:
      'When market rates change, the value of existing fixed-rate bonds changes too.',
    teachTitle: 'Bond prices and yields generally move in opposite directions.',
    paragraphs: [
      'An existing bond with a fixed coupon becomes less attractive when new bonds offer higher yields.',
      'Its market price must fall so a new buyer can earn a more competitive return.',
      'When market yields fall, the fixed coupon on the existing bond becomes more attractive and its price can rise.',
      'Longer-duration bonds are generally more sensitive to rate changes.',
    ],
    callout:
      'Rates up → existing fixed-rate bond prices down, all else equal.',
    mcq: {
      title: 'What generally happens to the price of an existing fixed-rate bond when market yields rise?',
      options: [
        'Its price falls',
        'Its price rises',
        'Its principal automatically increases',
        'Its coupon becomes revenue',
      ],
      correctIndex: 0,
      correctText: 'The bond price adjusts downward so its return becomes more competitive with new higher-yielding bonds.',
      wrongText: 'Think about the attractiveness of an old fixed coupon versus new market rates.',
      reviewConcepts: ['bond', 'interestRate'],
    },
  }),

  M({
    id: 'credit-spreads',
    title: 'Credit Spreads',
    summary: 'Separate base interest rates from compensation for borrower credit risk.',
    concepts: ['debt', 'risk', 'interestRate'],
    intro:
      'Corporate borrowing cost is not just the risk-free rate. Investors also demand compensation for credit risk.',
    teachTitle: 'Credit spread is the extra yield over a benchmark required to lend to a risky borrower.',
    paragraphs: [
      'A high-quality borrower may issue debt at a narrow spread over Treasuries.',
      'A highly leveraged or distressed borrower generally pays a wider spread.',
      'Spreads can widen across the market when investors become more risk-averse.',
      'Wider spreads raise financing costs even if government yields do not change.',
    ],
    callout:
      'Corporate yield ≈ benchmark yield + credit spread.',
    scenarioTitle: 'Treasury yield 4%; company spread 2.5%.',
    scenario:
      'Estimate corporate yield.',
    workedSteps: [
      { label: 'Base rate', text: '4.0%.' },
      { label: 'Credit spread', text: '2.5%.' },
      { label: 'Corporate yield', text: 'About 6.5%.' },
    ],
    takeaway:
      'Borrowing cost reflects both general rates and company-specific credit risk.',
    numberCheck: {
      title: 'Benchmark yield is 3.5% and spread is 1.5%. What is total yield?',
      answer: 5,
      suffix: '%',
      explanation: '3.5% + 1.5% = 5.0%.',
    },
    mcq: {
      title: 'What usually happens to credit spreads when investors become more worried about default risk?',
      options: [
        'Spreads widen',
        'Spreads always go to zero',
        'Debt becomes equity',
        'Treasury yields must rise equally',
      ],
      correctIndex: 0,
      correctText: 'Investors demand more compensation for perceived credit risk.',
      wrongText: 'More perceived risk generally requires more yield.',
      reviewConcepts: ['risk', 'debt'],
    },
  }),

  M({
    id: 'equity-markets',
    title: 'Equity Markets',
    summary: 'Connect stock valuations, investor risk appetite, and capital raising.',
    concepts: ['stockMarket', 'stockPrice', 'marketCap', 'risk'],
    intro:
      'Equity markets determine what public investors are willing to pay for ownership claims at any moment.',
    teachTitle: 'Stock prices reflect expectations about earnings, cash flow, risk, and required return.',
    paragraphs: [
      'Strong growth expectations can support higher valuations.',
      'Higher rates can pressure valuations by increasing required returns.',
      'Risk-off periods can reduce multiples even if near-term company earnings have not changed.',
      'Strong equity markets can make IPOs and follow-on offerings easier because investors are more willing to buy new shares.',
    ],
    callout:
      'Market conditions affect both valuation and the feasibility of raising equity.',
    mcq: {
      title: 'Why can a company delay an IPO during a weak equity market?',
      options: [
        'Investor demand and valuation may be too weak to achieve an attractive offering',
        'IPOs are legally prohibited in weak markets',
        'Revenue cannot be reported',
        'Debt must be zero first',
      ],
      correctIndex: 0,
      correctText: 'Poor demand can force an unattractive price or increase execution risk.',
      wrongText: 'Capital raising depends on investor appetite and valuation.',
      reviewConcepts: ['stockMarket', 'valuation'],
    },
  }),

  M({
    id: 'ipo-market',
    title: 'The IPO Market',
    summary: 'Understand what makes the new-issue equity market open or closed.',
    concepts: ['primaryMarket', 'publicCompany', 'equity'],
    intro:
      'The IPO market is part of the primary market where private companies sell newly issued shares to public investors.',
    teachTitle: 'IPO windows depend on investor demand, volatility, valuation, and recent deal performance.',
    paragraphs: [
      'Issuers want attractive valuation and confidence that the offering can be placed successfully.',
      'High market volatility can make pricing difficult because investor views change rapidly.',
      'Strong performance of recent IPOs can improve confidence, while failed offerings can damage sentiment.',
      'Bankers monitor the pipeline and market windows to advise clients on timing.',
    ],
    callout:
      'Being “ready to IPO” operationally does not mean the market is ready to receive the deal.',
    mcq: {
      title: 'What can make an IPO window less attractive?',
      options: [
        'High volatility and weak investor demand',
        'Strong market demand',
        'Stable valuation conditions',
        'Successful recent offerings',
      ],
      correctIndex: 0,
      correctText: 'Uncertainty and weak demand increase pricing and execution risk.',
      wrongText: 'Think about whether investors are willing to commit capital at a stable price.',
      reviewConcepts: ['primaryMarket', 'equity'],
    },
  }),

  M({
    id: 'ma-market-cycle',
    title: 'M&A Market Cycles',
    summary: 'Connect financing conditions, valuations, confidence, and deal volume.',
    concepts: ['valuation', 'debt', 'risk'],
    intro:
      'M&A activity tends to rise and fall with the broader financing and economic environment.',
    teachTitle: 'Deals are easier when buyers have confidence, financing is available, and valuation expectations can meet.',
    paragraphs: [
      'Low financing costs can make leveraged acquisitions more affordable.',
      'Strong stock prices can give public buyers valuable stock currency.',
      'Economic uncertainty can reduce management confidence and widen the gap between buyer and seller valuation expectations.',
      'Distress can also create deal activity as companies sell assets or restructure.',
    ],
    callout:
      'Deal volume depends on both desire to transact and ability to finance and agree on price.',
    mcq: {
      title: 'Why can rapidly rising rates reduce M&A activity?',
      options: [
        'Financing becomes more expensive and valuations can reset',
        'Acquisitions become free',
        'Sellers stop having businesses',
        'Debt is converted into revenue',
      ],
      correctIndex: 0,
      correctText: 'Higher rates can hurt affordability and change buyer and seller valuation expectations.',
      wrongText: 'Think financing cost plus valuation.',
      reviewConcepts: ['interestRate', 'valuation'],
    },
  }),

  M({
    id: 'leveraged-finance-market',
    title: 'Leveraged Finance Markets',
    summary: 'Understand why sponsor and highly leveraged deals depend on credit-market conditions.',
    concepts: ['debt', 'risk', 'interestRate'],
    intro:
      'Leveraged buyouts and highly indebted companies rely heavily on investor appetite for risky credit.',
    teachTitle: 'When leveraged-loan and high-yield markets are open, more debt can be raised at better terms.',
    paragraphs: [
      'Credit investors evaluate leverage, cash flow, collateral, covenants, and downside risk.',
      'In strong markets, spreads can tighten and debt capacity can rise.',
      'In stressed markets, spreads widen, leverage availability falls, and underwriting becomes more cautious.',
      'That can directly change the price sponsors are willing or able to pay for targets.',
    ],
    callout:
      'Credit-market conditions can determine whether an LBO is financeable at all.',
    mcq: {
      title: 'What usually happens to sponsor buying power when leveraged-finance markets tighten sharply?',
      options: [
        'It can fall because debt becomes more expensive or less available',
        'It always rises',
        'Debt capacity becomes unlimited',
        'Exit multiples automatically expand',
      ],
      correctIndex: 0,
      correctText: 'Less or more expensive leverage increases required sponsor equity and can reduce returns.',
      wrongText: 'Sponsors rely on debt capacity to finance purchase price.',
      reviewConcepts: ['debt', 'risk'],
    },
  }),

  M({
    id: 'economic-cycle',
    title: 'The Economic Cycle',
    summary: 'Connect expansion, slowdown, recession, and recovery to company fundamentals.',
    concepts: ['revenue', 'expense', 'risk'],
    intro:
      'Companies do not operate in isolation from the economy.',
    teachTitle: 'Cyclicality determines how sensitive a business is to economic conditions.',
    paragraphs: [
      'Consumer discretionary, industrial, advertising, and commodity businesses can be highly sensitive to growth cycles.',
      'Healthcare, utilities, and certain subscription businesses can be more defensive, though no business is perfectly insulated.',
      'In downturns, revenue can weaken while fixed costs remain, compressing margins.',
      'Analysts adjust forecasts and valuation depending on where earnings are relative to a normalized cycle.',
    ],
    callout:
      'Peak earnings and trough earnings can both mislead if treated as permanent.',
    mcq: {
      title: 'Why can a cyclical company look deceptively cheap at the top of a cycle?',
      options: [
        'Peak earnings can make valuation multiples appear low even if those earnings are not sustainable',
        'Revenue becomes debt at the peak',
        'Cyclical companies have no expenses',
        'Market value disappears',
      ],
      correctIndex: 0,
      correctText: 'A low multiple on temporarily inflated earnings can create a false impression of cheapness.',
      wrongText: 'Normalize the earnings cycle before interpreting the multiple.',
    },
  }),

  M({
    id: 'fx-markets',
    title: 'FX & Multinational Companies',
    summary: 'Understand how currency moves affect reported revenue, costs, and deal economics.',
    concepts: ['revenue', 'expense', 'risk'],
    intro:
      'Companies operating across countries earn and spend money in different currencies.',
    teachTitle: 'Exchange-rate changes can alter reported results even when local operations are unchanged.',
    paragraphs: [
      'A U.S. company earning euros must translate those results into dollars for reporting.',
      'If the dollar strengthens against the euro, the same euro revenue translates into fewer dollars.',
      'Currency can also affect input costs, competitiveness, debt obligations, and cross-border purchase prices.',
      'Companies may hedge some exposures, but hedging rarely eliminates every economic effect.',
    ],
    callout:
      'Translation effects change reported numbers; transaction effects can change actual cash economics.',
    mcq: {
      title: 'A U.S. company earns the same euro revenue, but the dollar strengthens sharply. What can happen to reported dollar revenue?',
      options: [
        'Reported dollar revenue can fall',
        'Reported dollar revenue must rise',
        'Revenue becomes debt',
        'FX has no reporting effect',
      ],
      correctIndex: 0,
      correctText: 'Each euro translates into fewer dollars when the dollar strengthens.',
      wrongText: 'Think about currency translation.',
    },
  }),

  M({
    id: 'commodities',
    title: 'Commodity Prices & Input Costs',
    summary: 'See how oil, metals, agriculture, and other commodities affect company margins and valuation.',
    concepts: ['revenue', 'expense', 'risk'],
    intro:
      'Commodity moves can help one company while hurting another depending on whether it sells or consumes the commodity.',
    teachTitle: 'The same commodity price change can create opposite earnings effects across industries.',
    paragraphs: [
      'Higher oil prices can benefit producers while increasing fuel costs for airlines and transportation companies.',
      'Manufacturers can face pressure when metals or other raw materials become more expensive.',
      'Some companies can pass cost increases to customers; others cannot.',
      'Hedging can delay or smooth the earnings impact.',
    ],
    callout:
      'Always ask whether the company is naturally long or short the commodity exposure.',
    mcq: {
      title: 'Who is more likely to benefit directly from higher oil prices, all else equal?',
      options: [
        'An oil producer',
        'An airline consuming jet fuel',
        'A company with no oil exposure',
        'A bond issuer automatically',
      ],
      correctIndex: 0,
      correctText: 'Higher commodity prices can increase revenue for the producer.',
      wrongText: 'Ask whether the company sells or consumes the commodity.',
    },
  }),

  M({
    id: 'market-update-framework',
    title: 'How to Give a Market Update',
    summary: 'Answer “what is happening in markets?” without rambling.',
    concepts: ['interestRate', 'stockMarket', 'risk'],
    intro:
      'Market questions in interviews test whether you can prioritize information and connect it to finance.',
    teachTitle: 'Use a simple structure: rates, equities, credit, macro catalyst, and banking implication.',
    paragraphs: [
      'Start with the most important current macro driver such as inflation, growth, or central-bank policy.',
      'Describe the direction of rates and equity markets rather than reciting dozens of numbers.',
      'Mention credit spreads or financing conditions if they matter to deal activity.',
      'Finish by explaining what the environment means for valuations, IPOs, M&A, or leveraged finance.',
    ],
    callout:
      'A market update is stronger when every fact has a “so what?”',
    scenarioTitle: 'Rates rise, stocks fall, credit spreads widen.',
    scenario:
      'Turn three observations into one banking implication.',
    workedSteps: [
      { label: 'Rates', text: 'Higher borrowing and discount rates.' },
      { label: 'Equities', text: 'Lower valuation and weaker risk appetite.' },
      { label: 'Credit', text: 'More expensive debt financing.' },
      { label: 'Banking implication', text: 'IPO, M&A, and LBO activity may become harder to execute.' },
    ],
    takeaway:
      'Market commentary should connect price moves to corporate-finance consequences.',
    written: {
      title: 'Why do bankers care about both interest rates and credit spreads?',
      body: 'Explain how the two combine to affect corporate borrowing cost.',
      placeholder: 'The base rate matters because..., while the spread...',
      modelAnswer:
        'Interest rates set the broad base cost of money, while credit spreads add compensation for borrower-specific or market credit risk. Together they determine the yield companies pay and therefore affect financing cost and deal economics.',
      criteria: [
        { id: 'base', label: 'explain that rates provide the base cost of money', keywords: ['rate', 'base', 'benchmark', 'treasury', 'cost of money'] },
        { id: 'spread', label: 'explain that spreads add credit-risk compensation', keywords: ['spread', 'credit', 'risk', 'compensation', 'borrower'] },
      ],
    },
    completeTitle: 'Markets & Deals complete.',
    completeBody:
      'You now have the framework to discuss rates, equities, credit, macro conditions, and deal activity. The technical track is complete; next, turn the knowledge into recruiting outcomes.',
  }),
]
