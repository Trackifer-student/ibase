import { makeLesson } from './lessonFactory'

export const corporateFinanceLessons = [
  makeLesson({
    id: 'time-value-deeper',
    title: 'Time Value of Money, Revisited',
    summary: 'Turn the Finance From Zero intuition into the foundation for valuation and capital budgeting.',
    concepts: ['timeValueMoney', 'presentValue', 'return'],
    intro:
      'Corporate finance constantly compares money received at different points in time. To compare those amounts fairly, you need a common time basis.',
    teachTitle: 'A dollar today can be put to work, so future dollars must be translated into today’s value.',
    paragraphs: [
      'Money today can be invested, used to reduce debt, or deployed into a business opportunity.',
      'Waiting for money means giving up those alternatives and often accepting additional uncertainty.',
      'The required return represents the return an investor demands for committing capital to a particular opportunity.',
      'Discounting converts future money into present value so alternatives can be compared on the same basis.',
    ],
    callout:
      'Time value of money is not a formula trick. It is the economic cost of waiting and committing capital.',
    scenarioTitle: 'Choose between $100 today and $110 in one year.',
    scenario:
      'Assume 10% is the appropriate one-year required return.',
    workedSteps: [
      { label: 'Today option', text: '$100 is available immediately.' },
      { label: 'Invest it', text: '$100 × 1.10 = $110 in one year.' },
      { label: 'Future option', text: '$110 in one year is economically equivalent to $100 today at a 10% required return.' },
      { label: 'Decision', text: 'The two choices have the same present value under this assumption.' },
    ],
    takeaway:
      'Discounting and compounding are two directions of the same time-value relationship.',
    mcq: {
      title: 'Why does a higher required return usually reduce the present value of a future cash flow?',
      options: [
        'Because investors demand more compensation for waiting or risk, so the future cash flow is discounted more heavily',
        'Because the future cash flow disappears',
        'Because revenue automatically falls',
        'Because debt becomes equity',
      ],
      correctIndex: 0,
      correctText: 'A higher required return means the investor needs more compensation, which lowers what they are willing to pay today.',
      wrongText: 'Think about how much return the investor requires between today and the future payment.',
      reviewConcepts: ['presentValue', 'return'],
    },
  }),

  makeLesson({
    id: 'compounding-future-value',
    title: 'Compounding & Future Value',
    summary: 'Understand how returns build on prior returns over multiple periods.',
    concepts: ['return', 'timeValueMoney'],
    intro:
      'Compounding means that future returns can be earned not only on the original investment but also on prior gains.',
    teachTitle: 'Growth compounds because each period starts from the previous period’s ending value.',
    paragraphs: [
      'With simple one-period growth, future value equals present value multiplied by one plus the return.',
      'Over multiple periods, that growth factor is applied repeatedly.',
      'At 10% annually, $100 becomes $110 after one year, then $121 after two years because the second year earns 10% on $110.',
      'This same compounding logic appears in investment returns, debt balances, and long-term forecasts.',
    ],
    callout:
      'Future Value = Present Value × (1 + return)^number of periods.',
    scenarioTitle: '$1,000 invested at 8% for two years.',
    scenario:
      'Assume annual compounding and no withdrawals.',
    workedSteps: [
      { label: 'Year 1', text: '$1,000 × 1.08 = $1,080.' },
      { label: 'Year 2', text: '$1,080 × 1.08 = $1,166.40.' },
      { label: 'Total gain', text: '$166.40, which is slightly more than simply adding two $80 gains because the first year’s gain also earns a return.' },
    ],
    takeaway:
      'Compounding makes time increasingly important as the number of periods grows.',
    numberCheck: {
      title: '$100 grows 10% in year one and 10% in year two. What is the ending value?',
      answer: 121,
      suffix: 'dollars',
      explanation: '$100 × 1.10 × 1.10 = $121.',
    },
    mcq: {
      title: 'Why is two years of 10% growth more than a 20% total dollar gain on the original base?',
      options: [
        'Because the second year earns a return on the first year’s gain too',
        'Because 10% always equals 20%',
        'Because the starting value falls',
        'Because taxes are ignored',
      ],
      correctIndex: 0,
      correctText: 'Compounding applies the return to the enlarged balance each period.',
      wrongText: 'The base grows after the first year, so the second year’s 10% applies to a larger amount.',
    },
  }),

  makeLesson({
    id: 'discounting-present-value',
    title: 'Discounting & Present Value',
    summary: 'Reverse compounding to determine what future cash is worth today.',
    concepts: ['presentValue', 'timeValueMoney', 'return'],
    intro:
      'Discounting asks the reverse question of compounding: if I know a future cash flow, what amount today would grow into it at the required return?',
    teachTitle: 'Present value pulls a future cash flow back through time.',
    paragraphs: [
      'A future cash flow is divided by the growth factor rather than multiplied by it.',
      'The farther away the payment is, the more periods of discounting it faces.',
      'A higher discount rate also lowers present value because the investor requires a stronger return.',
      'DCF valuation is simply this process applied to many projected future cash flows.',
    ],
    callout:
      'Present Value = Future Value ÷ (1 + discount rate)^number of periods.',
    scenarioTitle: '$121 received in two years at a 10% discount rate.',
    scenario:
      'What is the present value?',
    workedSteps: [
      { label: 'One year back', text: '$121 ÷ 1.10 = $110.' },
      { label: 'Second year back', text: '$110 ÷ 1.10 = $100.' },
      { label: 'Present value', text: '$100.' },
    ],
    takeaway:
      'Discounting translates future economic benefits into today’s dollars.',
    numberCheck: {
      title: '$110 is received in one year. At a 10% discount rate, what is its present value?',
      answer: 100,
      suffix: 'dollars',
      explanation: '$110 ÷ 1.10 = $100.',
      reviewConcepts: ['presentValue'],
    },
    mcq: {
      title: 'All else equal, what happens to present value when the discount rate increases?',
      options: [
        'Present value decreases',
        'Present value increases',
        'Present value is unchanged',
        'The future cash flow becomes revenue',
      ],
      correctIndex: 0,
      correctText: 'A higher required return means investors are willing to pay less today for the same future cash flow.',
      wrongText: 'A higher denominator in the discounting formula lowers present value.',
      reviewConcepts: ['presentValue', 'return'],
    },
  }),

  makeLesson({
    id: 'risk-required-return',
    title: 'Risk & Required Return',
    summary: 'Connect uncertainty to the return investors demand.',
    concepts: ['risk', 'return', 'investor'],
    intro:
      'Investors do not evaluate expected return by itself. They evaluate the return relative to the uncertainty required to pursue it.',
    teachTitle: 'More risk generally requires more expected compensation.',
    paragraphs: [
      'A risky business has a wider range of possible outcomes and a greater chance of disappointing investors.',
      'If investors can earn a similar return from a safer alternative, they have little reason to choose the riskier one.',
      'The risky investment therefore needs to offer a better expected return or a lower price to become attractive.',
      'This logic is why risk affects discount rates and valuation.',
    ],
    callout:
      'Higher required return → higher discount rate → lower present value, all else equal.',
    scenarioTitle: 'Two projects with the same expected cash flows.',
    scenario:
      'Project A has stable contracted customers. Project B depends on an unproven product launch.',
    workedSteps: [
      { label: 'Expected cash', text: 'Assume the forecasted cash flows are initially the same.' },
      { label: 'Risk', text: 'Project B’s outcomes are much less certain.' },
      { label: 'Required return', text: 'Investors would generally demand a higher return for Project B.' },
      { label: 'Value today', text: 'The higher discount rate makes Project B worth less today, all else equal.' },
    ],
    takeaway:
      'Risk changes value because it changes the return investors require.',
    mcq: {
      title: 'Why might two companies with identical expected cash flows have different valuations?',
      options: [
        'The riskier company may require a higher discount rate',
        'Cash flow never affects value',
        'The safer company must have more debt',
        'Valuation ignores uncertainty',
      ],
      correctIndex: 0,
      correctText: 'Different risk can imply different required returns even when expected cash flows are the same.',
      wrongText: 'Think about the discount rate investors require for each set of cash flows.',
      reviewConcepts: ['risk', 'return'],
    },
  }),

  makeLesson({
    id: 'opportunity-cost-capital',
    title: 'Opportunity Cost of Capital',
    summary: 'Why every investment competes with alternative uses of money.',
    concepts: ['capital', 'return', 'risk'],
    intro:
      'Using money for one project means you cannot use that same money somewhere else at the same time.',
    teachTitle: 'Capital has an opportunity cost because investors have alternatives.',
    paragraphs: [
      'A company should not call a project attractive simply because it produces a positive dollar profit.',
      'The project should be compared with the return available on investments of similar risk.',
      'That alternative return is part of the project’s opportunity cost of capital.',
      'If a project cannot earn enough to compensate investors for risk and lost alternatives, committing capital can destroy value even if accounting profit is positive.',
    ],
    callout:
      'The relevant hurdle is not “does this make money?” but “does this earn enough for the risk and alternatives?”',
    scenarioTitle: 'A project offers 5% while similar-risk investments offer 9%.',
    scenario:
      'Assume both opportunities require the same amount of capital.',
    workedSteps: [
      { label: 'Project return', text: '5%.' },
      { label: 'Alternative return', text: '9% for similar risk.' },
      { label: 'Opportunity cost', text: 'Choosing the 5% project gives up the chance to earn 9% elsewhere.' },
      { label: 'Decision intuition', text: 'The 5% project is unattractive despite having a positive return.' },
    ],
    takeaway:
      'Capital should be judged against the best reasonable alternative of similar risk.',
    mcq: {
      title: 'Why can a positive-return project still destroy value?',
      options: [
        'Its return can be below the return investors require for the risk',
        'Any positive return destroys value',
        'Revenue must be negative',
        'Debt must equal zero',
      ],
      correctIndex: 0,
      correctText: 'A project can earn money yet still underperform the opportunity cost of capital.',
      wrongText: 'Compare the project return with the required return, not just zero.',
      reviewConcepts: ['return', 'risk', 'capital'],
    },
  }),

  makeLesson({
    id: 'debt-vs-equity-financing',
    title: 'Debt vs. Equity Financing',
    summary: 'Compare the two major ways companies raise outside capital.',
    concepts: ['debt', 'equity', 'interest', 'capital'],
    intro:
      'Companies can fund growth by borrowing money, selling ownership, or using a combination of both.',
    teachTitle: 'Debt and equity give capital providers different claims and different risks.',
    paragraphs: [
      'Debt holders lend money and generally expect contractual interest and principal repayment.',
      'Equity investors own a residual claim on the company and participate more directly in upside and downside.',
      'Debt does not normally dilute ownership, but it creates fixed obligations that can increase financial risk.',
      'Equity has no required principal repayment, but issuing new shares can dilute existing owners.',
    ],
    callout:
      'Debt = contractual claim with repayment obligations. Equity = ownership claim with residual upside and downside.',
    scenarioTitle: 'Fund a $100 expansion.',
    scenario:
      'A company can borrow $100 or issue $100 of new equity.',
    workedSteps: [
      { label: 'Debt option', text: 'Existing owners keep the same ownership percentage, but the company adds interest and repayment obligations.' },
      { label: 'Equity option', text: 'No new contractual debt payment, but existing owners share the company with new shareholders.' },
      { label: 'Risk trade-off', text: 'Debt increases fixed financial commitments; equity spreads ownership.' },
      { label: 'No universal answer', text: 'The right mix depends on business stability, valuation, interest rates, flexibility, and strategy.' },
    ],
    takeaway:
      'Financing choice changes both risk and how future value is divided among capital providers.',
    mcq: {
      title: 'Which statement best describes a key trade-off of debt financing?',
      options: [
        'It avoids ownership dilution but creates contractual payment obligations',
        'It creates no risk',
        'It always costs less than equity',
        'It automatically increases revenue',
      ],
      correctIndex: 0,
      correctText: 'Debt can preserve ownership percentage but increases fixed obligations through interest and repayment.',
      wrongText: 'Think ownership dilution versus required payments.',
      reviewConcepts: ['debt', 'equity'],
    },
  }),

  makeLesson({
    id: 'capital-structure',
    title: 'Capital Structure',
    summary: 'Understand how a company mixes debt and equity to finance the business.',
    concepts: ['debt', 'equity', 'capital'],
    intro:
      'Capital structure is simply the mix of debt and equity used to finance a company.',
    teachTitle: 'The financing mix changes risk, flexibility, and return distribution.',
    paragraphs: [
      'A company funded mostly with equity has fewer fixed debt obligations but may have more ownership dilution.',
      'Adding debt can increase returns to equity holders when business performance is strong because less equity capital is required.',
      'The same leverage also magnifies downside because debt payments remain due even when operating performance weakens.',
      'Companies therefore balance tax benefits, financing cost, flexibility, credit risk, and shareholder considerations.',
    ],
    callout:
      'Leverage magnifies outcomes for equity because debt holders have a more fixed claim while equity receives the residual.',
    scenarioTitle: 'Same business, different financing.',
    scenario:
      'Business A is funded with $100 of equity. Business B is funded with $50 of debt and $50 of equity.',
    workedSteps: [
      { label: 'Operating business', text: 'Assume both businesses generate the same operating cash flow.' },
      { label: 'Equity invested', text: 'Business B requires only $50 of equity rather than $100.' },
      { label: 'Upside', text: 'Strong performance can create a higher percentage return on the smaller equity base after debt costs.' },
      { label: 'Downside', text: 'Weak performance is more dangerous because debt obligations still must be serviced.' },
    ],
    takeaway:
      'Capital structure does not create operating performance, but it changes who bears risk and who receives the residual return.',
    mcq: {
      title: 'Why can more debt increase risk to equity holders?',
      options: [
        'Because debt payments remain contractual even when operating performance weakens',
        'Because debt removes all interest expense',
        'Because debt is revenue',
        'Because equity becomes cash',
      ],
      correctIndex: 0,
      correctText: 'Fixed debt obligations leave equity holders with a more volatile residual claim.',
      wrongText: 'Think about what happens to equity after lenders are paid.',
      reviewConcepts: ['debt', 'equity'],
    },
  }),

  makeLesson({
    id: 'cost-of-debt',
    title: 'Cost of Debt',
    summary: 'Measure the return lenders require and understand the interest tax shield.',
    concepts: ['debt', 'interestRate', 'interest', 'taxExpense'],
    intro:
      'The cost of debt is the return lenders require to provide borrowed capital to a company.',
    teachTitle: 'Credit risk and market rates drive borrowing cost.',
    paragraphs: [
      'A safer borrower can generally borrow at a lower rate than a risky borrower because lenders expect a better chance of being repaid.',
      'Market interest rates also matter because lenders compare a company’s debt with other available lending opportunities.',
      'For WACC, the pre-tax cost of debt is often adjusted for the tax deductibility of interest.',
      'A simplified after-tax cost of debt is pre-tax cost of debt × (1 − tax rate).',
    ],
    callout:
      'Debt is cheaper after tax when interest expense creates a usable tax shield.',
    scenarioTitle: '6% debt cost at a 25% tax rate.',
    scenario:
      'Assume interest is fully tax-deductible.',
    workedSteps: [
      { label: 'Pre-tax debt cost', text: '6%.' },
      { label: 'Tax shield', text: '25% of the interest cost is offset by lower taxes.' },
      { label: 'After-tax debt cost', text: '6% × (1 − 25%) = 4.5%.' },
    ],
    takeaway:
      'WACC uses after-tax debt cost because interest tax deductibility reduces the effective cost to the company.',
    numberCheck: {
      title: 'A company’s pre-tax cost of debt is 8% and its tax rate is 25%. What is the simplified after-tax cost of debt?',
      answer: 6,
      suffix: '%',
      explanation: '8% × (1 − 25%) = 6%.',
      reviewConcepts: ['interest', 'taxExpense'],
    },
    mcq: {
      title: 'Why does a riskier borrower generally face a higher cost of debt?',
      options: [
        'Lenders demand more compensation for a greater chance of loss',
        'Riskier companies never pay interest',
        'Debt becomes equity',
        'Taxes disappear',
      ],
      correctIndex: 0,
      correctText: 'Higher credit risk usually requires a higher promised return to attract lenders.',
      wrongText: 'Think about the lender’s chance of not receiving the expected payments.',
      reviewConcepts: ['risk', 'debt'],
    },
  }),

  makeLesson({
    id: 'cost-of-equity',
    title: 'Cost of Equity',
    summary: 'Understand the return shareholders require for bearing residual business risk.',
    concepts: ['equity', 'shareholder', 'risk', 'return'],
    intro:
      'Equity does not have a stated interest rate, but it still has a cost: shareholders require an expected return for providing capital and bearing risk.',
    teachTitle: 'The cost of equity is an opportunity cost, not a contractual coupon.',
    paragraphs: [
      'Shareholders are residual owners: they receive value after employees, suppliers, lenders, taxes, and other obligations are satisfied.',
      'Because equity absorbs more uncertainty, shareholders generally require a higher expected return than safer lenders.',
      'The cost of equity represents the return needed to compensate shareholders for the risk of owning the company.',
      'CAPM is one common framework used to estimate that required return.',
    ],
    callout:
      'No required cash payment does not mean equity is free.',
    scenarioTitle: 'A company can raise equity from investors.',
    scenario:
      'Investors can also buy other stocks or safer assets instead.',
    workedSteps: [
      { label: 'Investor choice', text: 'The shareholder compares this company with alternative investments.' },
      { label: 'Risk', text: 'Owning the company exposes the investor to market and company uncertainty.' },
      { label: 'Required return', text: 'The investor needs an expected return high enough to justify that risk and opportunity cost.' },
      { label: 'Company perspective', text: 'That required return is the economic cost of equity capital.' },
    ],
    takeaway:
      'Equity costs the company because investors demand compensation for capital and risk even without a contractual interest payment.',
    mcq: {
      title: 'Why is equity capital not free?',
      options: [
        'Shareholders require an expected return for the risk and opportunity cost of investing',
        'Equity always has a stated coupon',
        'Shareholders are guaranteed repayment',
        'Equity is recorded as revenue',
      ],
      correctIndex: 0,
      correctText: 'The cost of equity is the return investors require to willingly provide ownership capital.',
      wrongText: 'Think about what shareholders could do with their money instead.',
      reviewConcepts: ['equity', 'return', 'risk'],
    },
  }),

  makeLesson({
    id: 'beta',
    title: 'Beta',
    summary: 'Understand the intuition behind market sensitivity before using CAPM.',
    concepts: ['risk', 'return'],
    intro:
      'Beta is a way of describing how sensitive a stock’s returns have historically been to movements in the broader market.',
    teachTitle: 'Beta focuses on market-related risk rather than every possible company-specific risk.',
    paragraphs: [
      'A beta around 1.0 suggests the stock has historically moved roughly in line with the market in percentage terms.',
      'A beta above 1.0 suggests greater sensitivity to broad market moves, while a beta below 1.0 suggests lower sensitivity.',
      'Beta can be noisy and depends on estimation choices, so it should not be treated as a perfect measure of risk.',
      'In CAPM, beta scales the market risk premium to estimate the return equity investors require for market exposure.',
    ],
    callout:
      'Beta is a model input, not a complete description of a company’s risk.',
    scenarioTitle: 'Compare beta 0.7 with beta 1.4.',
    scenario:
      'Assume both estimates are otherwise comparable.',
    workedSteps: [
      { label: '0.7 beta', text: 'Historically less sensitive to broad market moves.' },
      { label: '1.4 beta', text: 'Historically more sensitive to broad market moves.' },
      { label: 'CAPM implication', text: 'The 1.4-beta stock receives a larger market-risk-premium component in its estimated cost of equity.' },
    ],
    takeaway:
      'Beta is the bridge between market risk and the CAPM estimate of required equity return.',
    mcq: {
      title: 'What does a beta greater than 1.0 generally suggest?',
      options: [
        'The stock has historically been more sensitive than the market to broad market moves',
        'The company has no risk',
        'The company has more cash than debt',
        'The stock must rise every day',
      ],
      correctIndex: 0,
      correctText: 'A beta above 1.0 generally indicates greater historical market sensitivity.',
      wrongText: 'Beta is about sensitivity to broad market returns, not certainty of direction.',
    },
  }),

  makeLesson({
    id: 'capm',
    title: 'CAPM',
    summary: 'Estimate the cost of equity from a risk-free rate, beta, and equity risk premium.',
    concepts: ['risk', 'return', 'equity'],
    intro:
      'CAPM is a common finance model for estimating the return equity investors require for bearing market risk.',
    teachTitle: 'Start with a safer baseline, then add compensation for market risk.',
    paragraphs: [
      'The risk-free rate represents the return on a very low-risk benchmark over the relevant horizon.',
      'The equity risk premium represents the extra return investors demand for owning the market rather than the risk-free asset.',
      'Beta scales that market premium for the stock’s estimated market sensitivity.',
      'CAPM cost of equity = Risk-free rate + Beta × Equity risk premium.',
    ],
    callout:
      'CAPM is an estimation framework, not a law of nature. Its inputs require judgment.',
    scenarioTitle: '4% risk-free rate, 1.2 beta, 5% equity risk premium.',
    scenario:
      'Estimate the cost of equity.',
    workedSteps: [
      { label: 'Market-risk component', text: '1.2 × 5% = 6%.' },
      { label: 'Add risk-free rate', text: '4% + 6% = 10%.' },
      { label: 'Estimated cost of equity', text: '10%.' },
    ],
    takeaway:
      'CAPM converts market risk assumptions into an estimated required equity return.',
    numberCheck: {
      title: 'Risk-free rate is 3%, beta is 1.5, and equity risk premium is 6%. What is CAPM cost of equity?',
      answer: 12,
      suffix: '%',
      explanation: '3% + 1.5 × 6% = 12%.',
    },
    mcq: {
      title: 'All else equal, what happens to CAPM cost of equity when beta increases?',
      options: [
        'Cost of equity increases',
        'Cost of equity decreases',
        'Cost of equity becomes zero',
        'Debt disappears',
      ],
      correctIndex: 0,
      correctText: 'Higher beta increases the market-risk-premium component.',
      wrongText: 'Beta multiplies the equity risk premium in CAPM.',
    },
  }),

  makeLesson({
    id: 'wacc',
    title: 'WACC',
    summary: 'Combine the required returns of debt and equity into a blended cost of capital.',
    concepts: ['debt', 'equity', 'capital', 'return'],
    intro:
      'A company is usually financed by more than one type of capital. WACC combines the required returns of major capital providers into one weighted rate.',
    teachTitle: 'Weight each source of capital by its share of the financing mix.',
    paragraphs: [
      'Equity investors require the cost of equity and lenders require the cost of debt.',
      'WACC weights those costs using market-value capital structure.',
      'Debt cost is generally included after tax because of the interest tax shield.',
      'For a simple debt-and-equity company: WACC = Equity weight × Cost of Equity + Debt weight × After-tax Cost of Debt.',
    ],
    callout:
      'WACC is commonly used to discount unlevered free cash flow because that cash flow belongs to all capital providers.',
    scenarioTitle: '60% equity, 40% debt.',
    scenario:
      'Cost of equity is 10%. Pre-tax debt cost is 6%. Tax rate is 25%.',
    workedSteps: [
      { label: 'After-tax debt cost', text: '6% × (1 − 25%) = 4.5%.' },
      { label: 'Equity contribution', text: '60% × 10% = 6.0%.' },
      { label: 'Debt contribution', text: '40% × 4.5% = 1.8%.' },
      { label: 'WACC', text: '6.0% + 1.8% = 7.8%.' },
    ],
    takeaway:
      'WACC is the blended required return demanded by the company’s major capital providers.',
    numberCheck: {
      title: 'A company is 50% equity at 12% cost and 50% debt at 5% after-tax cost. What is WACC?',
      answer: 8.5,
      suffix: '%',
      explanation: '50% × 12% + 50% × 5% = 8.5%.',
    },
    mcq: {
      title: 'Why does WACC use capital-structure weights?',
      options: [
        'Because different sources of capital fund different portions of the company',
        'Because all capital has the same cost',
        'Because debt is revenue',
        'Because equity has no required return',
      ],
      correctIndex: 0,
      correctText: 'Each capital source contributes to the company’s financing in proportion to its market-value weight.',
      wrongText: 'WACC is a weighted average, so the financing mix matters.',
      reviewConcepts: ['debt', 'equity', 'capital'],
    },
  }),

  makeLesson({
    id: 'wacc-decisions',
    title: 'Using the Cost of Capital',
    summary: 'Apply required returns to investment decisions and valuation without treating WACC as a magic number.',
    concepts: ['presentValue', 'risk', 'return', 'capital'],
    intro:
      'Calculating a discount rate is only useful if you understand what it is supposed to represent.',
    teachTitle: 'Match the discount rate to the risk and ownership of the cash flow.',
    paragraphs: [
      'WACC is often used for unlevered cash flows generated by the business before payments to debt and equity holders.',
      'A project much riskier than the existing company may deserve a higher required return than the company-wide WACC.',
      'A safer project may deserve a lower rate.',
      'Using the wrong discount rate can make an unattractive project look valuable or a strong project look weak.',
    ],
    callout:
      'The discount rate should reflect the risk of the cash flow being valued, not simply whichever rate is convenient.',
    scenarioTitle: 'A stable utility evaluates a speculative biotech project.',
    scenario:
      'The project’s risk is dramatically different from the utility’s existing operations.',
    workedSteps: [
      { label: 'Company WACC', text: 'Reflects the utility’s existing overall operating and financing risk.' },
      { label: 'New project', text: 'Has far more uncertain outcomes.' },
      { label: 'Adjustment', text: 'Using the utility’s low WACC could overstate the project’s value.' },
      { label: 'Principle', text: 'Risk and discount rate should be matched.' },
    ],
    takeaway:
      'Cost of capital is a required-return concept grounded in risk, not a spreadsheet plug.',
    written: {
      title: 'Why can using too low a discount rate make a risky investment look artificially attractive?',
      body: 'Explain the present-value effect.',
      placeholder: 'A lower rate means the future cash flows are...',
      modelAnswer:
        'A discount rate that is too low discounts the risky future cash flows too lightly, producing a present value that is too high and making the investment look more attractive than its risk justifies.',
      criteria: [
        { id: 'pv', label: 'recognize that a lower rate increases present value', keywords: ['present value', 'higher value', 'too high', 'discount', 'less discount'] },
        { id: 'risk', label: 'recognize that the rate fails to compensate for risk', keywords: ['risk', 'risky', 'required return', 'compensate', 'uncertainty'] },
      ],
    },
    completeTitle: 'Corporate Finance Foundations complete.',
    completeBody:
      'You now understand the economic logic behind required return, debt and equity costs, CAPM, and WACC. Next we separate Enterprise Value from Equity Value, one of the most important valuation bridges in banking.',
  }),
]
