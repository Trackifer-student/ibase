const moduleContext = {
  technical:
    'This topic matters because it feeds directly into valuation, transaction analysis, or technical interviews.',
}

const toId = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

const makeLesson = ({ moduleId, index, title, summary }) => ({
  id: `${moduleId}-${String(index + 1).padStart(2, '0')}-${toId(title)}`,
  title,
  summary,
  steps: [
    {
      type: 'intro',
      eyebrow: 'BUILD THE MODEL',
      title,
      body: summary,
      noteTitle: 'Why this matters',
      note: moduleContext.technical,
    },
    {
      type: 'teach',
      eyebrow: 'THE CORE IDEA',
      title: 'Understand the logic before the interview wording.',
      paragraphs: [
        summary,
        'Start by identifying the economic event, the metric or statement it affects, and the reason the relationship matters.',
        'Once the business logic is clear, the formulas and interview phrasing become much easier to remember.',
      ],
      calloutTitle: 'IBase rule',
      callout:
        'Do not memorize a sentence you cannot explain. Build the economic story first, then add the finance vocabulary.',
    },
    {
      type: 'worked',
      eyebrow: 'APPLY IT',
      title: `Put ${title} into an analyst situation.`,
      scenario:
        'Imagine you are reviewing a company, transaction, or model where this concept becomes relevant.',
      workedSteps: [
        {
          label: 'Identify the question',
          text: `Ask what ${title.toLowerCase()} is trying to measure, explain, or accomplish.`,
        },
        {
          label: 'Follow the economics',
          text: summary,
        },
        {
          label: 'Connect the implication',
          text:
            'Translate the concept into its effect on value, cash flow, financing, deal economics, or the quality of the analysis.',
        },
      ],
      takeaway: summary,
    },
    {
      type: 'mcq',
      eyebrow: 'CHECK YOUR UNDERSTANDING',
      title: `Which statement best captures ${title}?`,
      options: [
        summary,
        'It is mainly a presentation convention with no meaningful effect on analysis.',
        'It only matters after a transaction closes and is not relevant to valuation or financial analysis.',
        'It can be understood entirely by memorizing a formula without knowing the business logic.',
      ],
      correctIndex: 0,
      correctTitle: 'Exactly.',
      correctText: summary,
      wrongTitle: 'Go back to the economic story.',
      wrongText:
        'The strongest answer explains what the concept actually does and why it matters.',
    },
    {
      type: 'complete',
      title: `${title} locked in.`,
      body:
        'Keep moving. The module quiz will force you to recall the idea without the teaching notes.',
      takeaway: summary,
    },
  ],
})

const makeModule = ([id, number, title, subtitle, description, topics]) => ({
  id,
  number,
  title,
  subtitle,
  description,
  lessons: topics.map(([lessonTitle, summary], index) =>
    makeLesson({
      moduleId: id,
      index,
      title: lessonTitle,
      summary,
    }),
  ),
})

export const technicalAdvancedModules = [
  [
    "three-statements",
    "04",
    "Three-Statement Linkages",
    "Where memorization stops working.",
    "Walk through the accounting changes that interviewers use to test whether you really understand the three statements.",
    [
      [
        "Statement Linkage Framework",
        "Use the accounting equation and cash reconciliation to trace one business event through the income statement, cash flow statement, and balance sheet."
      ],
      [
        "Depreciation Walkthrough",
        "Depreciation lowers operating profit and net income, is added back as a non-cash item in CFO, and reduces the carrying value of PP&E."
      ],
      [
        "CapEx Walkthrough",
        "A cash purchase of long-lived assets is an investing outflow that increases PP&E initially and affects earnings later through depreciation."
      ],
      [
        "Accounts Receivable Walkthrough",
        "An increase in accounts receivable means recognized revenue has not yet been collected, so it generally reduces cash from operations."
      ],
      [
        "Accounts Payable Walkthrough",
        "An increase in accounts payable means the company has delayed supplier payments, so it generally increases cash from operations."
      ],
      [
        "Inventory Walkthrough",
        "Buying inventory uses cash before the goods are sold, while expensing inventory through COGS happens when the related sale is recognized."
      ],
      [
        "Deferred Revenue Walkthrough",
        "Cash received before revenue is earned increases cash and a liability first, then becomes revenue as the company performs."
      ],
      [
        "Debt Issuance & Repayment",
        "Issuing debt brings in financing cash and raises debt, while repayment uses financing cash and reduces the debt balance."
      ],
      [
        "Stock-Based Compensation",
        "SBC reduces accounting earnings, is commonly added back in CFO, and can increase equity and diluted share count."
      ],
      [
        "Asset Sale",
        "Selling an asset can create a gain or loss on the income statement while the full cash proceeds appear in investing cash flow."
      ],
      [
        "Impairment Charge",
        "An impairment reduces accounting earnings and an asset carrying value but is generally non-cash in the period recorded."
      ],
      [
        "Three-Statement Interview Drills",
        "The best three-statement answers start with the income statement, move through cash flow, then finish by proving the balance sheet still balances."
      ]
    ]
  ],
  [
    "corp-finance",
    "05",
    "Corporate Finance Foundations",
    "Why required return drives value.",
    "Build the time-value, risk, capital-structure, CAPM, and WACC foundation used throughout valuation.",
    [
      [
        "Time Value of Money",
        "A dollar today is worth more than the same dollar later because money today can be invested and because future cash flows carry uncertainty."
      ],
      [
        "Compounding",
        "Compounding grows money by earning returns on both the original amount and prior accumulated returns."
      ],
      [
        "Discounting",
        "Discounting converts a future cash flow into present value using a required rate of return."
      ],
      [
        "Risk & Required Return",
        "Investors generally demand higher expected returns when they accept more uncertainty or downside risk."
      ],
      [
        "Capital Structure",
        "Capital structure describes how a company finances itself using debt, equity, and sometimes other securities."
      ],
      [
        "Cost of Debt",
        "The cost of debt is the return lenders require, adjusted for the tax deductibility of interest when appropriate."
      ],
      [
        "Cost of Equity",
        "The cost of equity is the return shareholders require for bearing the risk of owning the company."
      ],
      [
        "Beta",
        "Beta measures how a stock’s returns have tended to move relative to the broader market and is used as an input in CAPM."
      ],
      [
        "CAPM",
        "CAPM estimates cost of equity as the risk-free rate plus beta times the equity risk premium."
      ],
      [
        "WACC",
        "WACC blends the after-tax cost of debt and cost of equity according to the company’s target capital structure."
      ],
      [
        "Marginal vs. Average Cost of Capital",
        "Valuation focuses on the cost of raising the next dollar of capital, not simply historical average financing costs."
      ],
      [
        "Corporate Finance Decision Framework",
        "Good corporate finance decisions compare expected returns on a project with the risk-adjusted cost of funding it."
      ]
    ]
  ],
  [
    "ev-equity",
    "06",
    "Enterprise vs. Equity Value",
    "Know exactly what each value belongs to.",
    "Build the enterprise-to-equity bridge and learn the adjustments that create the most common interview traps.",
    [
      [
        "Equity Value Refresher",
        "Equity value represents the value attributable to common shareholders and is commonly approximated by diluted shares times share price."
      ],
      [
        "Enterprise Value Intuition",
        "Enterprise value measures the value of the core operations available to all capital providers, independent of how those operations are financed."
      ],
      [
        "EV to Equity Bridge",
        "A simplified bridge is Enterprise Value = Equity Value + Debt + Preferred Stock + NCI − Cash."
      ],
      [
        "Why Add Debt",
        "Debt is added when moving from equity value to enterprise value because an acquirer effectively assumes or repays the target’s debt."
      ],
      [
        "Why Subtract Cash",
        "Excess cash is subtracted because an acquirer receives that cash and can use it to offset part of the purchase price."
      ],
      [
        "Preferred Stock",
        "Preferred stock is usually treated as a non-common equity claim and is often added in the enterprise value bridge."
      ],
      [
        "Non-Controlling Interest",
        "NCI is added when consolidated financials include 100% of a subsidiary’s operating results but the parent owns less than 100%."
      ],
      [
        "Diluted Shares Outstanding",
        "Diluted shares include common shares plus the effect of in-the-money options, RSUs, and other dilutive securities."
      ],
      [
        "Treasury Stock Method",
        "The treasury stock method estimates incremental shares from options by assuming option proceeds are used to repurchase shares at the current price."
      ],
      [
        "Convertible Securities",
        "Convertible debt or preferred stock can affect diluted share count or enterprise value depending on whether conversion is economically assumed."
      ],
      [
        "Operating vs. Non-Operating Assets",
        "Non-operating assets may need separate treatment because enterprise value should primarily represent operating assets."
      ],
      [
        "EV / Equity Interview Traps",
        "Most EV versus equity mistakes come from mismatching the numerator and denominator or double-counting financing claims."
      ]
    ]
  ],
  [
    "valuation",
    "07",
    "Valuation",
    "Turn company analysis into a defensible range.",
    "Learn trading comps, precedents, premiums, football fields, and the judgment behind choosing a valuation method.",
    [
      [
        "Why Valuation Is a Range",
        "Valuation is an estimate built from assumptions, so bankers usually present a range rather than one supposedly perfect number."
      ],
      [
        "Trading Comparables Overview",
        "Trading comps value a company by comparing market valuation multiples with those of similar public companies."
      ],
      [
        "Choosing Comparable Companies",
        "Good peers resemble the target in business model, end markets, growth, margins, size, risk, and geography."
      ],
      [
        "Enterprise Value Multiples",
        "EV-based multiples such as EV/Revenue and EV/EBITDA pair enterprise value with metrics available to debt and equity capital providers."
      ],
      [
        "Equity Value Multiples",
        "Equity-based multiples such as P/E pair equity value with metrics that belong after interest and other financing effects."
      ],
      [
        "LTM vs. NTM Metrics",
        "LTM looks backward at the last twelve months, while NTM uses expected next-twelve-month performance."
      ],
      [
        "Median vs. Mean Multiples",
        "The median is often useful because it is less distorted by extreme outliers than the mean."
      ],
      [
        "Applying a Multiple",
        "Apply a selected peer multiple to the target’s matching financial metric to estimate implied enterprise or equity value."
      ],
      [
        "Precedent Transactions Overview",
        "Precedent transactions use acquisition prices paid for similar companies to infer value in a control transaction."
      ],
      [
        "Control Premium",
        "Acquisition prices can exceed unaffected trading values because buyers may pay for control and expected synergies."
      ],
      [
        "Precedent Selection",
        "Relevant precedents should resemble the target and be recent enough that market conditions and industry economics remain comparable."
      ],
      [
        "Public vs. Private Company Valuation",
        "Private companies lack an observable share price, so valuation relies more heavily on transactions, comps, DCF, and negotiated terms."
      ],
      [
        "Valuation Football Field",
        "A football field chart places ranges from several methods side by side to show where valuation indications overlap or diverge."
      ],
      [
        "52-Week High / Low",
        "Historical stock-price ranges provide market context but are not a standalone intrinsic valuation method."
      ],
      [
        "Premiums Paid Analysis",
        "Premiums paid analysis looks at acquisition premiums over unaffected share prices in comparable deals."
      ],
      [
        "Valuation Method Judgment",
        "The best valuation method depends on the business, available information, market conditions, and purpose of the analysis."
      ]
    ]
  ],
  [
    "dcf",
    "08",
    "DCF",
    "Build intrinsic value from future cash flow.",
    "Forecast unlevered free cash flow, calculate terminal value, discount the cash flows, and bridge from enterprise to equity value.",
    [
      [
        "DCF Overview",
        "A DCF estimates intrinsic enterprise value by forecasting future unlevered free cash flow and discounting it back to present value."
      ],
      [
        "Revenue Forecasting",
        "A strong DCF starts with operating assumptions that connect revenue growth to real business drivers rather than arbitrary percentages."
      ],
      [
        "Margin Forecasting",
        "Forecast margins by understanding cost structure, scale, pricing, mix, and management guidance."
      ],
      [
        "EBIT to NOPAT",
        "NOPAT approximates after-tax operating profit by applying taxes to EBIT before financing costs."
      ],
      [
        "Depreciation in DCF",
        "Depreciation reduces EBIT but is added back in free cash flow because it is non-cash in the current period."
      ],
      [
        "Capital Expenditures in DCF",
        "CapEx is subtracted because it represents real cash investment required to maintain or grow the operating asset base."
      ],
      [
        "Working Capital in DCF",
        "Increases in operating net working capital generally use cash, while decreases generally release cash."
      ],
      [
        "Unlevered Free Cash Flow",
        "A common formula is EBIT × (1 − tax rate) + D&A − CapEx − Increase in NWC."
      ],
      [
        "Projection Period",
        "The explicit forecast period should be long enough for the company to approach a more normalized operating state."
      ],
      [
        "WACC in DCF",
        "WACC is commonly used to discount unlevered free cash flow because both are measured before payments to debt and equity holders."
      ],
      [
        "Mid-Year Convention",
        "Mid-year convention assumes cash flows arrive throughout the year rather than entirely at year-end, increasing present value relative to year-end discounting."
      ],
      [
        "Terminal Value Purpose",
        "Terminal value captures the value of cash flows occurring after the explicit forecast period."
      ],
      [
        "Perpetuity Growth Method",
        "The perpetuity growth method values terminal cash flow as FCF in the next period divided by WACC minus perpetual growth."
      ],
      [
        "Exit Multiple Method",
        "The exit multiple method applies a market-based multiple to a terminal-year metric such as EBITDA."
      ],
      [
        "Choosing Perpetual Growth",
        "Long-run perpetual growth should be economically sustainable and generally cannot exceed the economy indefinitely."
      ],
      [
        "Choosing Exit Multiple",
        "An exit multiple should be defensible relative to trading comps, business quality, growth, and the company’s expected terminal profile."
      ],
      [
        "Discounting Terminal Value",
        "Terminal value is measured at the end of the projection period and must be discounted back to present value."
      ],
      [
        "From Enterprise to Equity Value",
        "After calculating DCF enterprise value, adjust for debt, cash, and other non-common claims to reach implied equity value."
      ],
      [
        "Implied Share Price",
        "Divide implied equity value by diluted shares outstanding to estimate implied value per share."
      ],
      [
        "DCF Sensitivity Table",
        "Sensitivity analysis shows how valuation changes across reasonable WACC and terminal-value assumptions."
      ],
      [
        "Stub Periods",
        "A stub period handles valuation dates that fall between fiscal year-ends by discounting cash flows for fractional periods."
      ],
      [
        "Circularity & Debt in Levered DCF",
        "Levered cash flow approaches can create financing circularity, which is one reason unlevered DCF is common in banking."
      ],
      [
        "DCF Common Mistakes",
        "Common errors include mixing levered and unlevered metrics, using inconsistent discount rates, and double-counting cash or debt."
      ],
      [
        "Full DCF Interview Walkthrough",
        "A strong interview answer explains forecast cash flows, calculate terminal value, discount everything, sum to enterprise value, then bridge to equity value."
      ]
    ]
  ],
  [
    "ma",
    "09",
    "M&A",
    "Understand the mechanics behind an acquisition.",
    "Work through purchase price, financing, purchase accounting, synergies, and accretion/dilution.",
    [
      [
        "M&A Model Overview",
        "An M&A model tests how an acquisition affects the buyer’s ownership, financing, earnings, leverage, and valuation."
      ],
      [
        "Purchase Price",
        "Purchase price reflects what the buyer pays for the target’s equity, while transaction value also considers assumed debt and other claims."
      ],
      [
        "Sources of Consideration",
        "Acquisitions can be funded with cash, debt, stock, or a mixture of those forms of consideration."
      ],
      [
        "Cash-Funded Deal",
        "Cash funding reduces buyer cash and can reduce interest income or require new debt if internal cash is insufficient."
      ],
      [
        "Debt-Funded Deal",
        "Debt funding adds interest expense and leverage but avoids issuing new shares."
      ],
      [
        "Stock-Funded Deal",
        "Stock consideration issues buyer shares to target shareholders and creates dilution based on the exchange ratio and relative valuations."
      ],
      [
        "Accretion vs. Dilution",
        "A deal is EPS-accretive if pro forma EPS exceeds standalone buyer EPS and dilutive if it is lower."
      ],
      [
        "Purchase Accounting",
        "Purchase accounting revalues identifiable assets and liabilities and records goodwill for the residual purchase price."
      ],
      [
        "Goodwill Creation",
        "Goodwill generally equals purchase consideration minus the fair value of identifiable net assets acquired, subject to detailed accounting adjustments."
      ],
      [
        "Intangible Asset Write-Ups",
        "New intangible assets created in purchase accounting can generate future amortization expense."
      ],
      [
        "PP&E Write-Ups",
        "Writing PP&E up to fair value can create additional depreciation expense after the deal."
      ],
      [
        "Deferred Tax Liabilities in M&A",
        "Book-tax differences from asset write-ups can create deferred tax liabilities and affect goodwill."
      ],
      [
        "Cost Synergies",
        "Cost synergies improve combined earnings by eliminating duplicate or unnecessary costs, but timing and execution risk matter."
      ],
      [
        "Revenue Synergies",
        "Revenue synergies assume the combined company can generate additional sales, but they are generally harder to underwrite than cost savings."
      ],
      [
        "Financing Fees",
        "Debt financing and advisory fees can create cash costs and accounting effects that need to be reflected in the model."
      ],
      [
        "Exchange Ratio",
        "In a stock deal, the exchange ratio determines how many buyer shares target shareholders receive for each target share."
      ],
      [
        "Ownership Split",
        "In stock deals, relative equity values and shares issued determine how much of the combined company each shareholder group owns."
      ],
      [
        "Pro Forma Balance Sheet",
        "The closing balance sheet combines buyer and target accounts with purchase-accounting and financing adjustments."
      ],
      [
        "M&A Sensitivities",
        "Bankers sensitize purchase price, synergies, financing mix, and other assumptions to understand deal economics."
      ],
      [
        "Full Accretion / Dilution Walkthrough",
        "A complete merger model combines purchase price, financing, purchase accounting, synergies, and share count to calculate pro forma EPS."
      ]
    ]
  ],
  [
    "lbo",
    "10",
    "LBO Fundamentals",
    "Understand how leverage creates equity returns.",
    "Learn sources & uses, debt schedules, exit value, MOIC, IRR, and the logic of a paper LBO.",
    [
      [
        "LBO Overview",
        "An LBO uses significant debt to acquire a company and aims to generate attractive equity returns as debt is repaid and the business grows."
      ],
      [
        "What Makes a Good LBO Candidate",
        "Strong candidates often have stable cash flow, defensible market positions, manageable CapEx needs, and opportunities for operational improvement."
      ],
      [
        "Sources & Uses",
        "Sources and uses shows where acquisition funds come from and how those funds are spent at closing."
      ],
      [
        "Entry Enterprise Value",
        "Entry enterprise value is typically derived from purchase price and the target’s debt, cash, and other relevant claims."
      ],
      [
        "Debt Tranches",
        "LBO debt can include revolvers, term loans, notes, and other instruments with different priority, pricing, and repayment terms."
      ],
      [
        "Mandatory Amortization",
        "Some debt requires scheduled principal repayment, reducing outstanding debt over time."
      ],
      [
        "Cash Sweep",
        "A cash sweep uses excess cash generation to repay debt faster than mandatory amortization alone."
      ],
      [
        "Sponsor Equity",
        "Sponsor equity is the residual funding needed after debt and other financing sources and is the denominator for sponsor returns."
      ],
      [
        "Exit Enterprise Value",
        "Exit enterprise value is commonly estimated by applying an exit multiple to a future operating metric such as EBITDA."
      ],
      [
        "MOIC",
        "MOIC equals equity value received at exit divided by equity invested at entry and measures total multiple of money."
      ],
      [
        "IRR",
        "IRR measures annualized investment return and is highly sensitive to both value creation and holding period."
      ],
      [
        "Paper LBO Walkthrough",
        "A paper LBO estimates entry price, debt paydown, exit value, and sponsor returns using a simplified set of assumptions."
      ]
    ]
  ],
  [
    "markets",
    "11",
    "Markets & Deals",
    "Connect current markets to client decisions.",
    "Understand rates, credit, equities, issuance windows, M&A conditions, and how to discuss a recent deal.",
    [
      [
        "Why Bankers Follow Markets",
        "Market conditions affect valuation, financing costs, investor demand, and whether clients can execute transactions."
      ],
      [
        "Interest Rates & Yield Curves",
        "Rates influence borrowing costs and asset values, while the yield curve shows market yields across maturities."
      ],
      [
        "The Federal Reserve",
        "The Fed influences short-term interest rates and financial conditions through monetary policy."
      ],
      [
        "Inflation",
        "Inflation affects costs, consumer demand, interest-rate expectations, and real purchasing power."
      ],
      [
        "Equity Markets",
        "Equity-market levels, volatility, and sector performance influence IPOs, follow-ons, and valuation conversations."
      ],
      [
        "Credit Markets",
        "Credit spreads and yields determine how expensive and available debt financing is for borrowers."
      ],
      [
        "Investment-Grade vs. High-Yield",
        "Investment-grade issuers generally have stronger credit profiles, while high-yield debt carries more credit risk and higher required yields."
      ],
      [
        "Market Volatility",
        "High volatility can make pricing transactions harder because investor risk appetite and valuations move more rapidly."
      ],
      [
        "IPO Window",
        "An IPO window is a period when market conditions and investor demand are favorable enough for new equity issuance."
      ],
      [
        "M&A Environment",
        "M&A activity depends on CEO confidence, valuations, financing availability, strategic pressure, and regulatory conditions."
      ],
      [
        "Reading a Market Update",
        "A useful market update connects moves in rates, equities, credit, commodities, and currencies to client implications."
      ],
      [
        "Following Recent Deals",
        "Knowing recent transactions helps you discuss valuation, strategic rationale, financing, and current industry themes."
      ],
      [
        "Discussing a Deal in Interviews",
        "A strong deal discussion covers what happened, why it happened, valuation, financing, and your view on the strategic logic."
      ],
      [
        "Building a Market View",
        "A market view should connect observable data to a reasoned implication rather than simply repeating headlines."
      ]
    ]
  ]
].map(makeModule)

export const technicalAdvancedById = Object.fromEntries(
  technicalAdvancedModules.map((module) => [module.id, module]),
)
