import { makeLesson } from './lessonFactory'

const L = makeLesson

export const dcfLessons = [
  L({
    id: 'dcf-overview',
    title: 'DCF: The Big Picture',
    summary: 'Value a business from the cash it can generate in the future.',
    concepts: ['valuation', 'presentValue', 'cashFlow', 'timeValueMoney'],
    intro:
      'A Discounted Cash Flow analysis estimates intrinsic value by forecasting future cash flows and converting them into today’s dollars.',
    teachTitle: 'Forecast cash, discount it, add terminal value, then bridge to equity.',
    paragraphs: [
      'A DCF starts with operating forecasts for revenue, margins, taxes, investment, and working capital.',
      'Those forecasts produce free cash flow available to capital providers.',
      'Each future cash flow is discounted back using a required return that reflects risk.',
      'Because companies are assumed to continue beyond the explicit forecast, a terminal value captures cash flows after the forecast period.',
    ],
    callout:
      'DCF = Present value of explicit forecast cash flows + Present value of terminal value.',
    scenarioTitle: 'Think of a business as a stream of future cash.',
    scenario:
      'You are buying the right to future cash flows, not merely this year’s accounting profit.',
    workedSteps: [
      { label: 'Forecast operations', text: 'Project revenue, margins, taxes, D&A, CapEx, and working capital.' },
      { label: 'Calculate free cash flow', text: 'Translate accounting earnings into cash available to all capital providers.' },
      { label: 'Discount', text: 'Convert future cash flows into present value using WACC.' },
      { label: 'Terminal value', text: 'Estimate value beyond the explicit forecast.' },
      { label: 'Bridge to equity', text: 'Move from EV to Equity Value and implied share price.' },
    ],
    takeaway:
      'A DCF turns business assumptions into an intrinsic enterprise value.',
    mcq: {
      title: 'What is the core economic idea behind a DCF?',
      options: [
        'A business is worth the present value of the future cash flows it can generate',
        'A business is worth book equity only',
        'A business is worth last year’s revenue',
        'A business is worth whatever debt it has',
      ],
      correctIndex: 0,
      correctText: 'DCF directly values expected future cash generation in present-value terms.',
      wrongText: 'Think future cash flows and time value of money.',
      reviewConcepts: ['presentValue', 'cashFlow', 'valuation'],
    },
  }),

  L({
    id: 'levered-vs-unlevered-fcf',
    title: 'Levered vs. Unlevered Free Cash Flow',
    summary: 'Know who the cash flow belongs to before choosing the discount rate.',
    concepts: ['cashFlow', 'debt', 'equity'],
    intro:
      'The type of free cash flow you forecast determines which capital providers own it and which discount rate is appropriate.',
    teachTitle: 'Unlevered FCF is before debt payments; levered FCF is after debt financing effects.',
    paragraphs: [
      'Unlevered free cash flow is available to both debt and equity holders because it is calculated before interest and debt principal payments.',
      'It is commonly discounted using WACC to produce Enterprise Value.',
      'Levered free cash flow is after interest, debt repayments, and borrowing effects and belongs to equity holders.',
      'It is discounted using the cost of equity to produce Equity Value.',
    ],
    callout:
      'UFCF + WACC → Enterprise Value. Levered FCF + Cost of Equity → Equity Value.',
    scenarioTitle: 'Choose the right pairing.',
    scenario:
      'You forecast cash before interest expense and debt repayments.',
    workedSteps: [
      { label: 'Cash-flow type', text: 'That is unlevered because financing has not been deducted.' },
      { label: 'Owners of cash flow', text: 'Both lenders and shareholders have claims on it.' },
      { label: 'Discount rate', text: 'Use WACC.' },
      { label: 'Value output', text: 'Enterprise Value.' },
    ],
    takeaway:
      'Always match cash-flow ownership with the discount rate and value output.',
    mcq: {
      title: 'What value do you get by discounting unlevered FCF at WACC?',
      options: [
        'Enterprise Value',
        'Equity Value directly',
        'Net income',
        'Book value',
      ],
      correctIndex: 0,
      correctText: 'Unlevered FCF belongs to all capital providers, matching Enterprise Value.',
      wrongText: 'Match unlevered cash flow with the all-capital-provider value.',
    },
  }),

  L({
    id: 'forecasting-revenue',
    title: 'Forecasting Revenue',
    summary: 'Build revenue forecasts from business drivers instead of arbitrary growth rates.',
    concepts: ['revenue', 'valuation'],
    intro:
      'Revenue is usually the first major forecast line in a DCF, and every downstream result depends on it.',
    teachTitle: 'Strong forecasts connect revenue growth to real business drivers.',
    paragraphs: [
      'A simple forecast may apply a growth rate to prior-year revenue.',
      'A stronger model often separates price, volume, customers, units, locations, or other operating drivers.',
      'Historical growth provides context but should not be extended mechanically if the market, competition, or company maturity is changing.',
      'The forecast should become more conservative as visibility decreases unless there is strong evidence otherwise.',
    ],
    callout:
      'A forecast should tell an operating story, not just fill cells.',
    scenarioTitle: 'Subscription business.',
    scenario:
      'Customers grow from 100,000 to 115,000 while average annual revenue per customer is $120.',
    workedSteps: [
      { label: 'Customers', text: '115,000.' },
      { label: 'Revenue per customer', text: '$120.' },
      { label: 'Forecast revenue', text: '115,000 × $120 = $13.8 million.' },
      { label: 'Driver logic', text: 'Revenue growth is explained by customer count and pricing, not a random percentage.' },
    ],
    takeaway:
      'The best DCF forecasts are linked to how the business actually makes money.',
    numberCheck: {
      title: 'A company expects 50,000 units at $30 each. What is forecast revenue in millions?',
      answer: 1.5,
      suffix: 'million dollars',
      explanation: '50,000 × $30 = $1,500,000 = $1.5 million.',
      reviewConcepts: ['revenue'],
    },
    mcq: {
      title: 'What usually makes a revenue forecast more defensible?',
      options: [
        'Tying it to business drivers such as price, volume, customers, or units',
        'Choosing the highest growth rate',
        'Copying historical growth forever',
        'Ignoring market size',
      ],
      correctIndex: 0,
      correctText: 'Driver-based forecasts make the assumptions economically explainable.',
      wrongText: 'Good forecasting connects spreadsheet growth to the real business.',
      reviewConcepts: ['revenue'],
    },
  }),

  L({
    id: 'forecasting-margins',
    title: 'Forecasting Margins',
    summary: 'Translate operating assumptions into gross profit, EBITDA, and EBIT margins.',
    concepts: ['grossMargin', 'operatingMargin', 'ebitda', 'ebit'],
    intro:
      'Revenue growth alone does not determine value. The company must convert that revenue into profit and cash.',
    teachTitle: 'Margins should reflect scale, pricing, mix, competition, and cost structure.',
    paragraphs: [
      'A company can expand margins if fixed costs grow more slowly than revenue or if pricing improves.',
      'Margins can contract if competition increases, input costs rise, or the company invests heavily in growth.',
      'Historical margins and peer margins provide useful context, but the forecast should reflect company-specific drivers.',
      'Long-term margin assumptions deserve particular scrutiny because small changes can materially affect terminal value.',
    ],
    callout:
      'Do not forecast a margin because it “looks nice.” Explain what operating change makes it possible.',
    scenarioTitle: 'Revenue rises while fixed overhead stays flat.',
    scenario:
      'A company grows revenue from $100 to $120 while fixed overhead remains $20 and variable costs remain 50% of revenue.',
    workedSteps: [
      { label: 'Old variable cost', text: '$50; total cost $70; operating profit $30.' },
      { label: 'New variable cost', text: '$60; total cost $80; operating profit $40.' },
      { label: 'Old margin', text: '30%.' },
      { label: 'New margin', text: '33.3%.' },
      { label: 'Reason', text: 'Fixed cost was leveraged over a larger revenue base.' },
    ],
    takeaway:
      'Margin expansion should come from an economic driver such as operating leverage, mix, or pricing.',
    mcq: {
      title: 'What is the strongest reason to forecast margin expansion?',
      options: [
        'A specific operating driver such as scale or pricing supports it',
        'Higher margins always look better',
        'DCF requires margins to rise',
        'Debt is lower',
      ],
      correctIndex: 0,
      correctText: 'Forecasts should reflect business mechanics rather than desired valuation output.',
      wrongText: 'Tie the margin assumption to an operating reason.',
    },
  }),

  L({
    id: 'nopat',
    title: 'EBIT to NOPAT',
    summary: 'Convert operating profit into after-tax operating profit before financing.',
    concepts: ['ebit', 'taxExpense'],
    intro:
      'Unlevered free cash flow starts from operating performance before interest, so taxes must also be calculated on an operating basis.',
    teachTitle: 'NOPAT is EBIT after applying taxes, before financing costs.',
    paragraphs: [
      'NOPAT stands for Net Operating Profit After Tax.',
      'A common simplified formula is EBIT × (1 − tax rate).',
      'Because EBIT is before interest, NOPAT keeps the cash-flow calculation independent of capital structure.',
      'This is why unlevered FCF can be compared across companies with different debt levels.',
    ],
    callout:
      'NOPAT = EBIT × (1 − tax rate).',
    scenarioTitle: '$200 EBIT at a 25% tax rate.',
    scenario:
      'Calculate NOPAT.',
    workedSteps: [
      { label: 'EBIT', text: '$200.' },
      { label: 'Taxes on EBIT', text: '25% × $200 = $50.' },
      { label: 'NOPAT', text: '$200 − $50 = $150.' },
    ],
    takeaway:
      'NOPAT is after-tax operating profit before interest and debt effects.',
    numberCheck: {
      title: 'EBIT is $120 and the tax rate is 30%. What is NOPAT?',
      answer: 84,
      suffix: 'million',
      explanation: '$120 × 70% = $84.',
      reviewConcepts: ['ebit', 'taxExpense'],
    },
    mcq: {
      title: 'Why does NOPAT exclude interest expense?',
      options: [
        'Because unlevered FCF is meant to be independent of capital structure',
        'Because interest is revenue',
        'Because debt never matters',
        'Because taxes are ignored',
      ],
      correctIndex: 0,
      correctText: 'Unlevered FCF belongs to all capital providers and therefore starts before financing costs.',
      wrongText: 'Think about whether the cash flow belongs only to equity or to debt and equity together.',
      reviewConcepts: ['debt', 'equity'],
    },
  }),

  L({
    id: 'd-and-a-in-dcf',
    title: 'D&A in a DCF',
    summary: 'Understand why D&A lowers EBIT but is added back in free cash flow.',
    concepts: ['depreciation', 'amortization', 'ebit', 'cashFlow'],
    intro:
      'Depreciation and amortization affect accounting profit but do not represent new current-period cash payments.',
    teachTitle: 'D&A creates a tax shield, then gets added back as a non-cash expense.',
    paragraphs: [
      'D&A is included in operating expenses and therefore reduces EBIT.',
      'Lower EBIT reduces taxes, creating a tax benefit.',
      'After calculating NOPAT, D&A is added back because the expense itself did not use cash in the forecast period.',
      'The economic cash cost of maintaining assets is captured separately through CapEx.',
    ],
    callout:
      'Do not simply “ignore D&A.” It affects taxes even though it is added back later.',
    scenarioTitle: '$20 depreciation in a DCF.',
    scenario:
      'Assume a 25% tax rate.',
    workedSteps: [
      { label: 'EBIT effect', text: '−$20.' },
      { label: 'Tax effect', text: 'Taxes fall $5.' },
      { label: 'NOPAT effect', text: '−$15.' },
      { label: 'Add back D&A', text: '+$20 in FCF.' },
      { label: 'Net FCF effect before CapEx', text: '+$5 tax shield.' },
    ],
    takeaway:
      'D&A is non-cash but still matters because it reduces taxable operating income.',
    mcq: {
      title: 'Why is D&A added back after NOPAT?',
      options: [
        'Because it reduced EBIT without using current-period cash',
        'Because D&A is revenue',
        'Because it increases debt',
        'Because CapEx is identical to D&A',
      ],
      correctIndex: 0,
      correctText: 'The expense lowered accounting profit but did not represent a new cash outflow in the period.',
      wrongText: 'Separate accounting expense from cash payment.',
      reviewConcepts: ['depreciation', 'amortization'],
    },
  }),

  L({
    id: 'capex-in-dcf',
    title: 'CapEx in a DCF',
    summary: 'Capture the real cash investment required to maintain and grow the asset base.',
    concepts: ['capex', 'ppe', 'cashFlow'],
    intro:
      'A business may report strong EBITDA while consuming large amounts of cash on equipment, facilities, or technology.',
    teachTitle: 'CapEx is subtracted because it is a real cash outflow needed to support operations.',
    paragraphs: [
      'CapEx does not reduce EBITDA directly, which is why EBITDA can overstate cash generation for capital-intensive businesses.',
      'A DCF subtracts capital expenditures when calculating free cash flow.',
      'Maintenance CapEx keeps the current business operating; growth CapEx expands capacity or capabilities.',
      'Long-term forecasts should be economically consistent: a company cannot usually grow forever while investing nothing in assets.',
    ],
    callout:
      'Free cash flow cares about actual reinvestment, not just accounting earnings.',
    scenarioTitle: 'Two companies with $100 EBITDA.',
    scenario:
      'Company A spends $10 on CapEx; Company B spends $60.',
    workedSteps: [
      { label: 'Same EBITDA', text: '$100 each.' },
      { label: 'Different CapEx', text: 'A uses $10 cash; B uses $60.' },
      { label: 'FCF difference', text: 'Before other adjustments, Company A retains $50 more cash.' },
    ],
    takeaway:
      'CapEx is one reason EBITDA and free cash flow can tell very different stories.',
    mcq: {
      title: 'Why is CapEx subtracted in unlevered FCF?',
      options: [
        'It is a real cash investment required in long-lived operating assets',
        'It is always interest expense',
        'It increases net income',
        'It is financing cash flow',
      ],
      correctIndex: 0,
      correctText: 'CapEx consumes cash even though it is not deducted in EBITDA.',
      wrongText: 'Think about the cash required to maintain and grow operating assets.',
      reviewConcepts: ['capex', 'cashFlow'],
    },
  }),

  L({
    id: 'nwc-in-dcf',
    title: 'Net Working Capital in a DCF',
    summary: 'Translate growth in receivables, inventory, and payables into cash uses or sources.',
    concepts: ['workingCapital', 'accountsReceivable', 'inventory', 'accountsPayable'],
    intro:
      'Growth often requires companies to tie up cash in day-to-day operations before that cash returns.',
    teachTitle: 'An increase in net working capital is generally a use of cash.',
    paragraphs: [
      'Accounts receivable ties up cash when customers have not yet paid.',
      'Inventory ties up cash when the company has purchased or produced goods that have not yet been sold.',
      'Accounts payable provides temporary financing when suppliers have not yet been paid.',
      'In DCF, the change in net working capital captures the net cash absorbed or released by these operating accounts.',
    ],
    callout:
      'UFCF subtracts increases in net working capital and adds decreases.',
    scenarioTitle: 'NWC rises from $50 to $65.',
    scenario:
      'What is the free-cash-flow effect?',
    workedSteps: [
      { label: 'Beginning NWC', text: '$50.' },
      { label: 'Ending NWC', text: '$65.' },
      { label: 'Change', text: '+$15.' },
      { label: 'FCF effect', text: 'Subtract $15 because more cash is tied up in operations.' },
    ],
    takeaway:
      'Growth can consume cash even when revenue and profit rise.',
    numberCheck: {
      title: 'NWC falls from $40 to $32. What is the cash-flow impact?',
      answer: 8,
      suffix: 'million positive cash impact',
      explanation: 'A $8 decrease in NWC releases $8 of cash.',
      reviewConcepts: ['workingCapital'],
    },
    mcq: {
      title: 'All else equal, what does an increase in net working capital do to FCF?',
      options: [
        'Reduces FCF',
        'Increases FCF',
        'Has no effect',
        'Turns debt into equity',
      ],
      correctIndex: 0,
      correctText: 'More cash is tied up in operating assets net of operating liabilities.',
      wrongText: 'Think of working capital growth as cash invested in day-to-day operations.',
      reviewConcepts: ['workingCapital'],
    },
  }),

  L({
    id: 'ufcf-formula',
    title: 'The Unlevered Free Cash Flow Formula',
    summary: 'Combine operating profit, taxes, non-cash charges, CapEx, and working capital into one cash-flow measure.',
    concepts: ['ebit', 'depreciation', 'capex', 'workingCapital', 'cashFlow'],
    intro:
      'Once you understand each component, the UFCF formula becomes a summary of economic logic rather than a memorization exercise.',
    teachTitle: 'Start with after-tax EBIT, add back non-cash D&A, subtract reinvestment.',
    paragraphs: [
      'A common formulation is EBIT × (1 − tax rate) + D&A − CapEx − Change in NWC.',
      'EBIT captures operating profit before financing.',
      'Taxes convert EBIT into after-tax operating profit.',
      'D&A is added back because it is non-cash, while CapEx and working-capital investment are subtracted because they consume cash.',
    ],
    callout:
      'UFCF = NOPAT + D&A − CapEx − Change in NWC.',
    scenarioTitle: 'Build UFCF from five inputs.',
    scenario:
      'EBIT $100; tax rate 25%; D&A $20; CapEx $30; increase in NWC $10.',
    workedSteps: [
      { label: 'NOPAT', text: '$100 × 75% = $75.' },
      { label: 'Add D&A', text: '$75 + $20 = $95.' },
      { label: 'Subtract CapEx', text: '$95 − $30 = $65.' },
      { label: 'Subtract NWC increase', text: '$65 − $10 = $55.' },
      { label: 'UFCF', text: '$55.' },
    ],
    takeaway:
      'The formula converts operating earnings into cash available before debt and equity financing payments.',
    numberCheck: {
      title: 'EBIT $80, tax rate 25%, D&A $10, CapEx $15, NWC increase $5. What is UFCF?',
      answer: 50,
      suffix: 'million',
      explanation: '$80 × 75% + $10 − $15 − $5 = $50.',
    },
    mcq: {
      title: 'Why is interest expense absent from UFCF?',
      options: [
        'Because UFCF is calculated before financing effects and belongs to debt and equity providers',
        'Because interest is non-cash',
        'Because debt never matters',
        'Because interest is included in revenue',
      ],
      correctIndex: 0,
      correctText: 'Unlevered FCF is independent of capital structure.',
      wrongText: 'UFCF is the cash generated by operations before debt financing effects.',
    },
  }),

  L({
    id: 'forecast-period',
    title: 'Choosing the Forecast Period',
    summary: 'Decide how long to model explicitly before relying on terminal value.',
    concepts: ['valuation', 'cashFlow'],
    intro:
      'A DCF needs an explicit forecast period long enough for the business to move toward a more stable state.',
    teachTitle: 'Forecast long enough to capture the company’s transition, but not so long that precision becomes fake.',
    paragraphs: [
      'Five years is common, but some businesses require longer forecasts because growth, margins, or capital intensity are still changing materially.',
      'The end of the forecast should ideally represent a period where long-term assumptions are more stable.',
      'If a company is still growing at extreme rates or changing margins rapidly in the terminal year, terminal value assumptions become harder to defend.',
      'Long forecasts can create false confidence because detailed estimates far into the future are highly uncertain.',
    ],
    callout:
      'Choose the forecast horizon based on business economics, not a fixed template rule.',
    scenarioTitle: 'Early-stage company with rapid margin expansion.',
    scenario:
      'After five years, growth is still 30% and margins are still changing sharply.',
    workedSteps: [
      { label: 'Problem', text: 'The business is not yet near a mature state.' },
      { label: 'Risk', text: 'Applying a steady-state terminal value at year five may be inconsistent.' },
      { label: 'Possible fix', text: 'Extend the explicit forecast or use more conservative transition assumptions.' },
    ],
    takeaway:
      'The terminal year should be economically compatible with the terminal-value method.',
    mcq: {
      title: 'What is a warning sign that the explicit forecast period may be too short?',
      options: [
        'The terminal year still has unusually high growth or rapidly changing margins',
        'The model has five columns',
        'The company has cash',
        'EBITDA is positive',
      ],
      correctIndex: 0,
      correctText: 'Terminal assumptions work best when the business is approaching a more sustainable state.',
      wrongText: 'Look for whether the company is mature enough for steady-state assumptions.',
    },
  }),

  L({
    id: 'wacc-in-dcf',
    title: 'WACC in a DCF',
    summary: 'Use the blended required return that matches unlevered free cash flow.',
    concepts: ['debt', 'equity', 'return', 'risk'],
    intro:
      'WACC is the discount rate most commonly paired with unlevered free cash flow.',
    teachTitle: 'WACC reflects the return required by debt and equity providers for the company’s operating risk.',
    paragraphs: [
      'The equity portion uses the cost of equity, often estimated with CAPM.',
      'The debt portion uses the after-tax cost of debt.',
      'Weights should generally reflect market-value capital structure rather than accounting book values.',
      'Because WACC can materially change DCF output, analysts should test reasonable ranges rather than treat one decimal point as certainty.',
    ],
    callout:
      'Small changes in WACC can create large valuation changes because every projected cash flow and terminal value is discounted by it.',
    scenarioTitle: 'WACC rises from 8% to 10%.',
    scenario:
      'The projected cash flows are unchanged.',
    workedSteps: [
      { label: 'Higher required return', text: 'Investors demand more compensation.' },
      { label: 'Discounting', text: 'Each future cash flow is discounted more heavily.' },
      { label: 'DCF value', text: 'Present value falls.' },
    ],
    takeaway:
      'WACC is one of the most sensitive assumptions in a DCF.',
    mcq: {
      title: 'All else equal, what happens to DCF value when WACC increases?',
      options: [
        'DCF value decreases',
        'DCF value increases',
        'DCF value is unchanged',
        'Revenue increases',
      ],
      correctIndex: 0,
      correctText: 'A higher discount rate lowers the present value of future cash flows.',
      wrongText: 'Higher required return means lower present value.',
      reviewConcepts: ['presentValue', 'return'],
    },
  }),

  L({
    id: 'discounting-fcf',
    title: 'Discounting Explicit Free Cash Flow',
    summary: 'Convert each year of forecast UFCF into present value.',
    concepts: ['presentValue', 'cashFlow'],
    intro:
      'A forecasted dollar five years from now is not worth the same as a dollar today.',
    teachTitle: 'Discount each annual cash flow by both the required return and the time until receipt.',
    paragraphs: [
      'A year-one cash flow is discounted for roughly one period under a simple year-end convention.',
      'A year-five cash flow is discounted for more periods and therefore has a lower present value relative to its nominal amount.',
      'The exact exponent depends on timing convention.',
      'Adding the present values of the explicit cash flows gives the first major piece of Enterprise Value.',
    ],
    callout:
      'PV of FCF = FCF ÷ (1 + WACC)^t.',
    scenarioTitle: '$100 FCF in year two at 10% WACC.',
    scenario:
      'Use a simple year-end convention.',
    workedSteps: [
      { label: 'Discount factor', text: '1.10² = 1.21.' },
      { label: 'Present value', text: '$100 ÷ 1.21 = about $82.64.' },
    ],
    takeaway:
      'Farther cash flows are worth less today because capital is tied up for longer.',
    numberCheck: {
      title: '$121 is received in year two and WACC is 10%. What is present value?',
      answer: 100,
      suffix: 'dollars',
      explanation: '$121 ÷ 1.10² = $100.',
      reviewConcepts: ['presentValue'],
    },
    mcq: {
      title: 'Why is year-five cash usually discounted more than year-one cash?',
      options: [
        'Because the investor waits longer to receive it',
        'Because year five has no value',
        'Because WACC becomes zero',
        'Because revenue is ignored',
      ],
      correctIndex: 0,
      correctText: 'More time means more periods over which the required return applies.',
      wrongText: 'Discounting reflects both rate and time.',
      reviewConcepts: ['timeValueMoney'],
    },
  }),

  L({
    id: 'midyear-convention',
    title: 'Mid-Year Convention',
    summary: 'Reflect that cash flows are generated throughout the year rather than only on December 31.',
    concepts: ['presentValue', 'cashFlow'],
    intro:
      'A standard year-end DCF assumes the entire annual cash flow arrives at the end of each year, which is often unrealistic.',
    teachTitle: 'Mid-year convention discounts annual cash flow as if it is received around the middle of the year.',
    paragraphs: [
      'Businesses generate cash continuously throughout the year.',
      'Mid-year convention approximates that timing by using half-year discount periods.',
      'Receiving cash earlier increases present value compared with a year-end assumption.',
      'The convention must be applied consistently to the explicit forecast and terminal value timing.',
    ],
    callout:
      'Earlier assumed receipt → less discounting → higher present value.',
    scenarioTitle: 'Year-one $100 FCF at 10% WACC.',
    scenario:
      'Compare year-end and simplified mid-year discounting.',
    workedSteps: [
      { label: 'Year-end', text: '$100 ÷ 1.10 ≈ $90.91.' },
      { label: 'Mid-year', text: '$100 ÷ 1.10^0.5 ≈ $95.35.' },
      { label: 'Difference', text: 'Mid-year convention produces higher PV because cash is assumed to arrive earlier.' },
    ],
    takeaway:
      'Timing convention changes value because time changes present value.',
    mcq: {
      title: 'Why does mid-year convention usually increase DCF value relative to year-end convention?',
      options: [
        'Cash flows are assumed to be received earlier and are discounted for less time',
        'WACC becomes lower automatically',
        'Revenue is doubled',
        'Terminal value is removed',
      ],
      correctIndex: 0,
      correctText: 'Earlier cash receipt means less discounting.',
      wrongText: 'The key difference is timing, not operating assumptions.',
    },
  }),

  L({
    id: 'terminal-value-overview',
    title: 'Terminal Value',
    summary: 'Capture the value of cash flows beyond the explicit forecast period.',
    concepts: ['valuation', 'presentValue', 'cashFlow'],
    intro:
      'A company is usually assumed to continue operating beyond the five or ten years modeled explicitly.',
    teachTitle: 'Terminal value represents the value of all cash flows after the explicit forecast.',
    paragraphs: [
      'Without a terminal value, a DCF would implicitly assume the business becomes worthless at the end of the forecast.',
      'Terminal value is often a large portion of total DCF value, which makes its assumptions critical.',
      'The two common approaches are the perpetuity growth method and the exit multiple method.',
      'Both approaches estimate value at the end of the forecast and then discount that value back to today.',
    ],
    callout:
      'Terminal value is not “extra value.” It is simply the present value of cash flows beyond the explicit forecast.',
    scenarioTitle: 'Five-year DCF.',
    scenario:
      'The model forecasts years 1–5 explicitly.',
    workedSteps: [
      { label: 'Explicit period', text: 'Years 1–5 cash flows are modeled individually.' },
      { label: 'After year 5', text: 'The business is assumed to keep generating cash.' },
      { label: 'Terminal value', text: 'Summarizes the value of year 6 onward as of the end of year 5.' },
      { label: 'Present value', text: 'Discount terminal value back to today.' },
    ],
    takeaway:
      'Terminal value closes the gap between a finite spreadsheet forecast and a continuing business.',
    mcq: {
      title: 'Why is terminal value needed in most DCFs?',
      options: [
        'Because the business is expected to generate cash beyond the explicit forecast period',
        'Because debt must be zero',
        'Because revenue stops after five years',
        'Because WACC cannot discount annual cash flows',
      ],
      correctIndex: 0,
      correctText: 'The explicit forecast covers only part of the company’s economic life.',
      wrongText: 'The company usually continues after the detailed forecast ends.',
      reviewConcepts: ['valuation', 'cashFlow'],
    },
  }),

  L({
    id: 'perpetuity-growth',
    title: 'Perpetuity Growth Method',
    summary: 'Estimate terminal value from normalized free cash flow, WACC, and sustainable growth.',
    concepts: ['cashFlow', 'presentValue', 'return'],
    intro:
      'The perpetuity growth method assumes free cash flow grows at a constant sustainable rate forever after the explicit forecast.',
    teachTitle: 'Use a steady-state growth assumption that is economically sustainable.',
    paragraphs: [
      'The standard formula is Terminal Value = Final-year FCF × (1 + g) ÷ (WACC − g).',
      'The growth rate should generally be modest because no company can outgrow the economy forever.',
      'The final-year cash flow should also represent a normalized business, with sustainable margins and reinvestment.',
      'Because WACC and g appear in the denominator, small changes can materially affect terminal value.',
    ],
    callout:
      'The perpetuity growth model is extremely sensitive when g approaches WACC.',
    scenarioTitle: 'Year-five FCF $100, WACC 10%, g 3%.',
    scenario:
      'Calculate terminal value at the end of year five.',
    workedSteps: [
      { label: 'Next-year FCF', text: '$100 × 1.03 = $103.' },
      { label: 'Spread', text: '10% − 3% = 7%.' },
      { label: 'Terminal value', text: '$103 ÷ 7% ≈ $1,471.43.' },
    ],
    takeaway:
      'Perpetuity growth converts a normalized final-year cash flow into a continuing value.',
    numberCheck: {
      title: 'Final-year FCF is $80, WACC is 9%, and g is 3%. What is terminal value?',
      answer: 1373.333333,
      tolerance: 0.1,
      suffix: 'million',
      explanation: '$80 × 1.03 ÷ (9% − 3%) = about $1,373.3.',
    },
    mcq: {
      title: 'What happens to terminal value when g increases, all else equal?',
      options: [
        'Terminal value increases',
        'Terminal value decreases',
        'Terminal value becomes zero',
        'WACC becomes debt',
      ],
      correctIndex: 0,
      correctText: 'Higher perpetual growth raises future cash flows and reduces the WACC-minus-growth denominator.',
      wrongText: 'Look at both parts of the perpetuity-growth formula.',
    },
  }),

  L({
    id: 'exit-multiple',
    title: 'Exit Multiple Method',
    summary: 'Estimate terminal value by applying a market multiple to a terminal-year financial metric.',
    concepts: ['valuation', 'ebitda'],
    intro:
      'The exit multiple method values the company at the end of the forecast using a market-based valuation multiple.',
    teachTitle: 'Apply a reasonable terminal multiple to a normalized terminal-year metric.',
    paragraphs: [
      'A common approach is terminal-year EBITDA multiplied by an EV / EBITDA exit multiple.',
      'The multiple should be supported by comparable-company trading levels and the company’s mature growth and risk profile.',
      'Using today’s high-growth multiple for a slower, mature terminal-year business may be inconsistent.',
      'Like perpetuity growth, exit multiple terminal value must be discounted back to present value.',
    ],
    callout:
      'Terminal Value = Terminal-year metric × Exit multiple.',
    scenarioTitle: 'Year-five EBITDA $150 at an 8x exit multiple.',
    scenario:
      'Calculate terminal value.',
    workedSteps: [
      { label: 'Terminal EBITDA', text: '$150.' },
      { label: 'Exit multiple', text: '8.0x.' },
      { label: 'Terminal value', text: '$150 × 8 = $1,200.' },
    ],
    takeaway:
      'Exit multiple uses relative valuation evidence to estimate continuing value.',
    numberCheck: {
      title: 'Terminal-year EBITDA is $90 and the exit multiple is 10x. What is terminal value?',
      answer: 900,
      suffix: 'million',
      explanation: '$90 × 10 = $900.',
      reviewConcepts: ['ebitda', 'valuation'],
    },
    mcq: {
      title: 'What is a key risk of using an aggressive exit multiple?',
      options: [
        'It can overstate terminal value and therefore the entire DCF',
        'It removes terminal value',
        'It makes EBITDA negative automatically',
        'It eliminates WACC',
      ],
      correctIndex: 0,
      correctText: 'Terminal value is often large, so an inflated multiple can dominate the DCF output.',
      wrongText: 'Think about how much of DCF value can come from terminal value.',
    },
  }),

  L({
    id: 'terminal-methods-compare',
    title: 'Perpetuity Growth vs. Exit Multiple',
    summary: 'Compare the two terminal-value methods and use one as a cross-check on the other.',
    concepts: ['valuation', 'ebitda', 'cashFlow'],
    intro:
      'Both terminal-value methods estimate the same economic object but approach it from different assumptions.',
    teachTitle: 'Perpetuity growth is cash-flow based; exit multiple is market-multiple based.',
    paragraphs: [
      'Perpetuity growth relies on long-term cash flow growth and WACC.',
      'Exit multiple relies on a terminal financial metric and a market valuation multiple.',
      'Analysts often calculate both and compare the outputs.',
      'A large gap between the methods can reveal inconsistent assumptions, such as a terminal growth rate that implies an unrealistic market multiple.',
    ],
    callout:
      'Use the second terminal method as a reasonableness check, not just a second answer.',
    scenarioTitle: 'Perpetuity growth implies 14x terminal EBITDA; comps trade at 8x–10x.',
    scenario:
      'The mismatch deserves investigation.',
    workedSteps: [
      { label: 'Observe implied multiple', text: '14x is materially above the peer range.' },
      { label: 'Check assumptions', text: 'WACC may be too low, growth too high, or terminal margins too aggressive.' },
      { label: 'Reconcile', text: 'Adjust or explain the difference rather than ignoring it.' },
    ],
    takeaway:
      'Terminal methods should tell an economically coherent story.',
    mcq: {
      title: 'Why calculate an implied terminal multiple from a perpetuity-growth DCF?',
      options: [
        'To check whether the terminal value is reasonable relative to market evidence',
        'To eliminate free cash flow',
        'To set revenue equal to EV',
        'To replace WACC with debt',
      ],
      correctIndex: 0,
      correctText: 'An implied multiple is a useful cross-check on long-term DCF assumptions.',
      wrongText: 'Use market evidence to sanity-check the intrinsic terminal value.',
    },
  }),

  L({
    id: 'terminal-sensitivity',
    title: 'Terminal Value Sensitivity',
    summary: 'See why small changes in WACC, growth, or exit multiple can move DCF value sharply.',
    concepts: ['valuation', 'presentValue', 'risk'],
    intro:
      'Terminal value often represents a large portion of DCF value, so its assumptions deserve more scrutiny than almost any other model input.',
    teachTitle: 'Sensitivity is not optional when the output depends heavily on uncertain assumptions.',
    paragraphs: [
      'Lower WACC increases present value and usually increases terminal value under perpetuity growth.',
      'Higher perpetual growth increases terminal value.',
      'Higher exit multiple increases terminal value directly.',
      'A robust DCF shows how valuation changes across reasonable assumption ranges instead of presenting one fragile point estimate.',
    ],
    callout:
      'If a 0.5% WACC change moves value dramatically, the right response is to show the sensitivity, not hide it.',
    scenarioTitle: 'Base DCF value is $50 per share.',
    scenario:
      'At slightly lower WACC it becomes $60; at slightly higher WACC it becomes $43.',
    workedSteps: [
      { label: 'Observation', text: 'The model is highly rate-sensitive.' },
      { label: 'Implication', text: 'A single $50 output creates false precision.' },
      { label: 'Presentation', text: 'Show a WACC / terminal-growth sensitivity table.' },
    ],
    takeaway:
      'Sensitivity analysis communicates uncertainty instead of pretending it does not exist.',
    mcq: {
      title: 'Why is terminal-value sensitivity especially important?',
      options: [
        'Terminal value can be a large portion of total DCF value',
        'Terminal value never affects DCF',
        'WACC cannot change',
        'Growth is always zero',
      ],
      correctIndex: 0,
      correctText: 'Large terminal-value weight makes the DCF highly sensitive to long-term assumptions.',
      wrongText: 'Think about how much of the total enterprise value often comes from the terminal period.',
    },
  }),

  L({
    id: 'pv-terminal-value',
    title: 'Discounting Terminal Value',
    summary: 'Remember that terminal value is measured in the future and must still be brought back to today.',
    concepts: ['presentValue', 'valuation'],
    intro:
      'A common beginner mistake is to add terminal value directly to today’s present value without discounting it.',
    teachTitle: 'Terminal value is calculated at the end of the forecast period, not today.',
    paragraphs: [
      'A terminal value calculated using year-five cash flow is generally a value as of the end of year five.',
      'That future value must be discounted back by the appropriate number of periods.',
      'The same timing convention used for the explicit cash flows should be handled consistently for terminal value.',
      'Only after discounting can terminal value be added to the present value of explicit cash flows.',
    ],
    callout:
      'Future terminal value ≠ present terminal value.',
    scenarioTitle: 'Terminal value is $1,610.51 at end of year five; WACC 10%.',
    scenario:
      'Discount it to today under a simple year-end convention.',
    workedSteps: [
      { label: 'Discount factor', text: '1.10^5 ≈ 1.61051.' },
      { label: 'PV of terminal value', text: '$1,610.51 ÷ 1.61051 = $1,000.' },
    ],
    takeaway:
      'Every future value in a DCF must be translated into present value.',
    numberCheck: {
      title: 'A terminal value of $121 is measured at end of year two and WACC is 10%. What is its present value?',
      answer: 100,
      suffix: 'dollars',
      explanation: '$121 ÷ 1.10² = $100.',
      reviewConcepts: ['presentValue'],
    },
    mcq: {
      title: 'Why do we discount terminal value?',
      options: [
        'Because it is measured at a future date',
        'Because terminal value is debt',
        'Because it has no cash flows',
        'Because WACC applies only to revenue',
      ],
      correctIndex: 0,
      correctText: 'The terminal value is a future value and must be converted into today’s dollars.',
      wrongText: 'Ask when the terminal value is measured.',
      reviewConcepts: ['presentValue'],
    },
  }),

  L({
    id: 'dcf-enterprise-value',
    title: 'From DCF Cash Flows to Enterprise Value',
    summary: 'Add the present value of explicit FCF and terminal value to get operating-business value.',
    concepts: ['valuation', 'cashFlow'],
    intro:
      'Once every forecast cash flow and terminal value is discounted, the pieces combine into Enterprise Value.',
    teachTitle: 'Enterprise Value is the sum of present values attributable to all capital providers.',
    paragraphs: [
      'Each explicit UFCF present value represents one year of operating cash generation.',
      'The present value of terminal value captures the post-forecast period.',
      'Adding them produces the DCF-implied Enterprise Value.',
      'This value still needs to be bridged to common Equity Value before calculating an implied share price.',
    ],
    callout:
      'DCF EV = Sum of PV of forecast UFCF + PV of terminal value.',
    scenarioTitle: 'Explicit PV $300; terminal-value PV $700.',
    scenario:
      'Calculate DCF Enterprise Value.',
    workedSteps: [
      { label: 'Explicit period', text: '$300.' },
      { label: 'Terminal period', text: '$700.' },
      { label: 'Enterprise Value', text: '$1,000.' },
    ],
    takeaway:
      'A standard unlevered DCF directly produces Enterprise Value.',
    numberCheck: {
      title: 'PV of forecast FCF is $240 and PV of terminal value is $560. What is EV?',
      answer: 800,
      suffix: 'million',
      explanation: '$240 + $560 = $800.',
    },
    mcq: {
      title: 'What does an unlevered DCF produce before the EV bridge?',
      options: [
        'Enterprise Value',
        'Share price directly',
        'Net income',
        'Revenue',
      ],
      correctIndex: 0,
      correctText: 'Unlevered cash flows belong to debt and equity providers, so their PV equals Enterprise Value.',
      wrongText: 'Match the cash-flow ownership with the value output.',
      reviewConcepts: ['valuation'],
    },
  }),

  L({
    id: 'dcf-ev-to-equity',
    title: 'DCF Enterprise Value to Equity Value',
    summary: 'Apply the EV bridge after the operating-business valuation is complete.',
    concepts: ['valuation', 'debt', 'cash', 'equity'],
    intro:
      'A DCF is not finished when Enterprise Value is calculated if the goal is an implied common share price.',
    teachTitle: 'Remove non-equity claims and add non-operating assets.',
    paragraphs: [
      'Subtract debt and other claims that belong to non-common capital providers.',
      'Add cash and other non-operating assets where appropriate.',
      'The result is implied Equity Value.',
      'This is the same EV-to-equity bridge used in trading comps and precedent transactions.',
    ],
    callout:
      'Valuation methods differ upstream; the EV bridge is the same downstream.',
    scenarioTitle: 'DCF EV $1,000; debt $300; cash $80.',
    scenario:
      'Solve for Equity Value.',
    workedSteps: [
      { label: 'Start EV', text: '$1,000.' },
      { label: 'Subtract debt', text: '$700.' },
      { label: 'Add cash', text: '$780.' },
      { label: 'Equity Value', text: '$780.' },
    ],
    takeaway:
      'DCF Enterprise Value becomes useful to shareholders only after the financing bridge.',
    numberCheck: {
      title: 'DCF EV is $900, debt $250, cash $50. What is Equity Value?',
      answer: 700,
      suffix: 'million',
      explanation: '$900 − $250 + $50 = $700.',
      reviewConcepts: ['debt', 'cash', 'equity'],
    },
    mcq: {
      title: 'Why is debt subtracted from DCF Enterprise Value to reach common Equity Value?',
      options: [
        'Debt holders have a claim on enterprise value ahead of common shareholders',
        'Debt is revenue',
        'Debt increases cash automatically',
        'Common equity already includes debt',
      ],
      correctIndex: 0,
      correctText: 'Enterprise Value belongs to all capital providers; common equity is the residual after non-equity claims.',
      wrongText: 'Think about which capital provider owns the debt claim.',
      reviewConcepts: ['debt', 'equity'],
    },
  }),

  L({
    id: 'implied-share-price',
    title: 'Implied Share Price',
    summary: 'Convert DCF Equity Value into a per-share value using diluted shares.',
    concepts: ['equity', 'share', 'stockPrice'],
    intro:
      'Public-company DCF analysis often ends with an implied value per diluted share.',
    teachTitle: 'Divide implied Equity Value by fully diluted shares outstanding.',
    paragraphs: [
      'The numerator should be common Equity Value after the EV bridge.',
      'The denominator should be a fully diluted share count consistent with the company’s equity instruments.',
      'The resulting implied share price can be compared with the current trading price.',
      'A gap does not automatically mean buy or sell because forecasts and assumptions may be wrong.',
    ],
    callout:
      'Implied Share Price = Implied Equity Value ÷ Diluted Shares.',
    scenarioTitle: '$750 million Equity Value and 30 million diluted shares.',
    scenario:
      'Calculate implied share price.',
    workedSteps: [
      { label: 'Equity Value', text: '$750 million.' },
      { label: 'Diluted shares', text: '30 million.' },
      { label: 'Implied share price', text: '$25.' },
    ],
    takeaway:
      'The per-share output is only as good as the assumptions and dilution analysis underneath it.',
    numberCheck: {
      title: 'Implied Equity Value is $1.2 billion and diluted shares are 60 million. What is implied share price?',
      answer: 20,
      suffix: 'dollars per share',
      explanation: '$1,200 million ÷ 60 million = $20.',
      reviewConcepts: ['equity', 'share'],
    },
    mcq: {
      title: 'Why use diluted shares rather than basic shares in many DCFs?',
      options: [
        'Potential common shares can affect how Equity Value is spread across shareholders',
        'Debt becomes shares automatically',
        'Revenue determines share count',
        'Basic shares are never reported',
      ],
      correctIndex: 0,
      correctText: 'Dilution can increase the effective common share count and reduce per-share value.',
      wrongText: 'Think about options, RSUs, and other potential common shares.',
      reviewConcepts: ['share'],
    },
  }),

  L({
    id: 'dcf-sensitivity-table',
    title: 'DCF Sensitivity Tables',
    summary: 'Show how valuation changes across reasonable WACC and terminal assumptions.',
    concepts: ['valuation', 'risk', 'presentValue'],
    intro:
      'A DCF should communicate uncertainty instead of hiding it behind a single output.',
    teachTitle: 'Sensitivity tables change two key assumptions at once and show the resulting valuation range.',
    paragraphs: [
      'A common table varies WACC across columns and terminal growth across rows.',
      'Another common table varies WACC and exit multiple.',
      'The center cell usually contains the base case, while surrounding cells show upside and downside cases.',
      'The ranges should be reasonable and supported rather than selected to manufacture a desired target price.',
    ],
    callout:
      'Sensitivity analysis is part of the valuation, not decoration after the model is done.',
    scenarioTitle: 'Base WACC 9%; base terminal growth 2.5%.',
    scenario:
      'Build a table around nearby assumptions.',
    workedSteps: [
      { label: 'WACC range', text: 'For example 8%–10%.' },
      { label: 'Growth range', text: 'For example 2%–3%.' },
      { label: 'Read the table', text: 'Lower WACC and higher growth usually produce higher value.' },
      { label: 'Use the range', text: 'Discuss valuation uncertainty and key drivers.' },
    ],
    takeaway:
      'A sensitivity table makes the model’s dependence on assumptions visible.',
    mcq: {
      title: 'Which combination usually creates the highest DCF value?',
      options: [
        'Lower WACC and higher terminal growth',
        'Higher WACC and lower terminal growth',
        'Higher WACC and higher taxes only',
        'Lower growth and higher WACC',
      ],
      correctIndex: 0,
      correctText: 'Lower discounting and faster long-term cash-flow growth both increase present value.',
      wrongText: 'Think about what raises future cash flows and reduces discounting.',
    },
  }),

  L({
    id: 'dcf-strengths',
    title: 'DCF Strengths',
    summary: 'Know when intrinsic valuation adds insight beyond market multiples.',
    concepts: ['valuation', 'cashFlow'],
    intro:
      'DCF is powerful because it forces the analyst to model the economics of the business directly.',
    teachTitle: 'A DCF can value unique companies without requiring a perfect peer set.',
    paragraphs: [
      'The method is based on the company’s own projected cash flows rather than relying entirely on how the market prices other companies.',
      'It makes assumptions about growth, margins, reinvestment, and risk explicit.',
      'It can be especially useful when peer companies are poor matches or market sentiment appears extreme.',
      'The detailed forecast also helps analysts understand which operating drivers create value.',
    ],
    callout:
      'DCF is useful because it exposes assumptions, not because it eliminates assumptions.',
    scenarioTitle: 'A unique business has no close public peers.',
    scenario:
      'Trading comps provide weak evidence.',
    workedSteps: [
      { label: 'Problem', text: 'Relative valuation lacks strong comparable companies.' },
      { label: 'DCF advantage', text: 'Forecast the business’s own economics directly.' },
      { label: 'Remaining challenge', text: 'The forecast and discount rate still require judgment.' },
    ],
    takeaway:
      'Intrinsic valuation is particularly valuable when market comparables are limited or misleading.',
    mcq: {
      title: 'What is a major strength of DCF?',
      options: [
        'It values the company using its own projected cash flows and makes assumptions explicit',
        'It requires no assumptions',
        'It guarantees the market is wrong',
        'It ignores risk',
      ],
      correctIndex: 0,
      correctText: 'DCF provides a company-specific intrinsic framework while exposing the inputs driving value.',
      wrongText: 'DCF is assumption-heavy, but those assumptions are visible and tied to business economics.',
      reviewConcepts: ['valuation', 'cashFlow'],
    },
  }),

  L({
    id: 'dcf-weaknesses',
    title: 'DCF Weaknesses',
    summary: 'Understand forecast risk, terminal-value dependence, and false precision.',
    concepts: ['valuation', 'risk'],
    intro:
      'A DCF can look mathematically precise while being economically fragile.',
    teachTitle: 'The model is extremely sensitive to assumptions you cannot know with certainty.',
    paragraphs: [
      'Long-term revenue and margin forecasts can be wrong.',
      'WACC is estimated rather than observed perfectly.',
      'Terminal value often represents a large portion of total value.',
      'Small changes in discount rate, terminal growth, or exit multiple can materially change the output.',
      'A polished spreadsheet does not reduce business uncertainty.',
    ],
    callout:
      'DCF precision should never be confused with certainty.',
    scenarioTitle: 'Two analysts use the same historical data.',
    scenario:
      'One assumes 15% long-term margins; the other assumes 20%.',
    workedSteps: [
      { label: 'Same past', text: 'Historical results are identical.' },
      { label: 'Different future', text: 'Margin assumptions diverge.' },
      { label: 'Different FCF', text: 'Higher margins create higher cash flow.' },
      { label: 'Different value', text: 'DCF outputs can differ materially even with identical starting data.' },
    ],
    takeaway:
      'The quality of a DCF depends more on disciplined assumptions than on spreadsheet complexity.',
    mcq: {
      title: 'Why can DCF outputs vary widely between analysts?',
      options: [
        'Forecasts, WACC, and terminal assumptions require judgment',
        'DCF has no formulas',
        'Enterprise Value is random',
        'Cash flow cannot be forecast at all',
      ],
      correctIndex: 0,
      correctText: 'Reasonable differences in assumptions can create meaningful valuation differences.',
      wrongText: 'The model is highly assumption-sensitive.',
      reviewConcepts: ['risk', 'valuation'],
    },
  }),

  L({
    id: 'terminal-year-consistency',
    title: 'Terminal-Year Consistency',
    summary: 'Make sure growth, margins, reinvestment, and terminal assumptions can all be true at the same time.',
    concepts: ['cashFlow', 'capex', 'workingCapital', 'valuation'],
    intro:
      'A terminal year should represent a sustainable long-term business, not an impossible combination of high growth and low reinvestment.',
    teachTitle: 'Growth requires reinvestment, so terminal assumptions must be internally consistent.',
    paragraphs: [
      'A company growing forever needs enough CapEx and working capital to support that growth.',
      'If terminal CapEx is far below depreciation while the business still grows quickly, the asset base may be shrinking in the model while revenue expands.',
      'Extremely high margins may also be inconsistent with competitive markets over the long run.',
      'A good DCF checks whether the terminal economics resemble a sustainable mature company.',
    ],
    callout:
      'Terminal value should not be where unrealistic assumptions go to hide.',
    scenarioTitle: '5% perpetual growth with almost no reinvestment.',
    scenario:
      'The company is capital-intensive.',
    workedSteps: [
      { label: 'Growth claim', text: 'Revenue and cash flow keep expanding.' },
      { label: 'Reinvestment claim', text: 'CapEx is near zero.' },
      { label: 'Conflict', text: 'A capital-intensive company cannot usually grow indefinitely without replacing or expanding assets.' },
      { label: 'Fix', text: 'Normalize growth and reinvestment together.' },
    ],
    takeaway:
      'Long-term growth must be supported by long-term reinvestment.',
    mcq: {
      title: 'Why should terminal CapEx be checked against depreciation and growth?',
      options: [
        'Because long-term growth usually requires a sustainable asset base and reinvestment',
        'Because CapEx is revenue',
        'Because depreciation is debt',
        'Because terminal value excludes operations',
      ],
      correctIndex: 0,
      correctText: 'Reinvestment assumptions must support the growth embedded in terminal value.',
      wrongText: 'A business cannot generally grow forever while letting productive assets disappear.',
      reviewConcepts: ['capex', 'depreciation'],
    },
  }),

  L({
    id: 'dcf-common-mistakes',
    title: 'Common DCF Mistakes',
    summary: 'Catch the errors that make a polished model economically wrong.',
    concepts: ['valuation', 'cashFlow', 'debt', 'equity'],
    intro:
      'Most serious DCF mistakes are consistency errors rather than arithmetic errors.',
    teachTitle: 'Watch cash-flow ownership, timing, terminal assumptions, and the EV bridge.',
    paragraphs: [
      'Do not discount unlevered FCF at cost of equity or levered FCF at WACC.',
      'Do not forget to discount terminal value.',
      'Do not mix an EV-based output with an equity-only financial metric.',
      'Do not subtract CapEx twice or forget working-capital changes.',
      'Do not use a terminal growth rate or exit multiple that is inconsistent with a mature business.',
      'Do not stop at EV if the question asks for share price.',
    ],
    callout:
      'Every line should answer one question: what cash flow is this, who owns it, and when is it received?',
    scenarioTitle: 'Model outputs an absurdly high value.',
    scenario:
      'The math formulas all calculate without Excel errors.',
    workedSteps: [
      { label: 'Check terminal value', text: 'Was it discounted? Is the growth rate reasonable?' },
      { label: 'Check cash flow', text: 'Is it unlevered and paired with WACC?' },
      { label: 'Check bridge', text: 'Were debt, cash, and diluted shares treated correctly?' },
      { label: 'Check signs', text: 'Are CapEx and increases in NWC reducing FCF?' },
    ],
    takeaway:
      'Model review should focus on economic consistency, not just whether cells calculate.',
    mcq: {
      title: 'Which is a clear DCF consistency error?',
      options: [
        'Discounting unlevered FCF at cost of equity',
        'Using WACC with unlevered FCF',
        'Subtracting CapEx once',
        'Discounting terminal value',
      ],
      correctIndex: 0,
      correctText: 'Unlevered FCF belongs to debt and equity providers, so WACC is the consistent discount rate.',
      wrongText: 'Match the cash flow with the required return of the same capital providers.',
    },
  }),

  L({
    id: 'full-dcf-walkthrough',
    title: 'Full DCF Walkthrough',
    summary: 'Tie the entire model together from operating forecast to implied share price.',
    concepts: ['valuation', 'cashFlow', 'presentValue', 'debt', 'cash', 'equity'],
    intro:
      'You should be able to explain a DCF without seeing a spreadsheet.',
    teachTitle: 'A strong DCF explanation follows the economic sequence.',
    paragraphs: [
      'Forecast revenue and operating margins to reach EBIT.',
      'Tax EBIT to calculate NOPAT, add back D&A, subtract CapEx, and subtract the increase in NWC to get UFCF.',
      'Discount each year of UFCF at WACC.',
      'Calculate terminal value using perpetuity growth or exit multiple and discount it to present value.',
      'Add present values to get Enterprise Value, then bridge to Equity Value and divide by diluted shares for implied share price.',
    ],
    callout:
      'If you can explain every step and why it exists, you understand DCF better than someone who only memorized the formula.',
    scenarioTitle: 'The complete sequence.',
    scenario:
      'An interviewer says: “Walk me through a DCF.”',
    workedSteps: [
      { label: '1. Forecast operations', text: 'Revenue → margins → EBIT.' },
      { label: '2. Calculate UFCF', text: 'NOPAT + D&A − CapEx − change in NWC.' },
      { label: '3. Discount explicit FCF', text: 'Use WACC and timing convention.' },
      { label: '4. Terminal value', text: 'Perpetuity growth or exit multiple, then discount.' },
      { label: '5. Enterprise Value', text: 'Sum PV of explicit FCF and terminal value.' },
      { label: '6. Equity bridge', text: 'Subtract debt and other claims, add cash and non-operating assets.' },
      { label: '7. Per-share value', text: 'Divide Equity Value by diluted shares.' },
    ],
    takeaway:
      'DCF is a chain of linked economic assumptions, not one formula.',
    written: {
      title: 'Walk through a DCF in your own words.',
      body: 'Cover free cash flow, discounting, terminal value, Enterprise Value, and the equity bridge.',
      placeholder: 'First I would forecast..., then...',
      modelAnswer:
        'Forecast operating results and calculate unlevered free cash flow from NOPAT plus D&A minus CapEx and the increase in NWC. Discount the forecast FCF at WACC, calculate and discount terminal value, add the present values to get Enterprise Value, then bridge to Equity Value and divide by diluted shares for implied share price.',
      criteria: [
        { id: 'fcf', label: 'describe forecasting and unlevered free cash flow', keywords: ['forecast', 'free cash flow', 'fcf', 'nopat', 'capex', 'working capital'] },
        { id: 'discount', label: 'describe discounting and terminal value', keywords: ['discount', 'wacc', 'terminal value', 'present value'] },
        { id: 'bridge', label: 'describe EV to Equity Value and per-share value', keywords: ['enterprise value', 'equity value', 'debt', 'cash', 'shares', 'share price'] },
      ],
    },
    completeTitle: 'DCF complete.',
    completeBody:
      'You can now explain and build the logic behind a full intrinsic valuation. Next comes M&A, where valuation, financing, purchase accounting, and strategic rationale collide in one transaction.',
  }),
]
