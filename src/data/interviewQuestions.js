export const interviewQuestions = [
  {
    id: 'acct-1',
    category: 'Accounting',
    difficulty: 'Beginner',
    prompt: 'Walk me through the three financial statements at a high level.',
    strongAnswer:
      'The income statement shows revenue, expenses, and profit over a period. Net income flows into the cash flow statement, which adjusts for non-cash items and working capital to explain the change in cash. Ending cash appears on the balance sheet, while net income also affects retained earnings. The balance sheet shows assets, liabilities, and equity at a point in time and must balance.',
    keyPoints: ['Income statement = profitability', 'Cash flow statement = change in cash', 'Balance sheet = financial position', 'Net income and cash link the statements'],
  },
  {
    id: 'acct-2',
    category: 'Accounting',
    difficulty: 'Intermediate',
    prompt: 'Depreciation increases by $10. Walk through the three statements assuming a 25% tax rate.',
    strongAnswer:
      'EBIT falls by $10, taxes fall by $2.50, and net income falls by $7.50. On the cash flow statement, net income is down $7.50 but depreciation is added back by $10, so cash rises by $2.50. On the balance sheet, cash rises $2.50, PP&E falls $10, and retained earnings falls $7.50. Assets fall $7.50 and equity falls $7.50, so the balance sheet remains balanced.',
    keyPoints: ['Net income −$7.50', 'Add back $10 D&A', 'Cash +$2.50', 'PP&E −$10', 'Retained earnings −$7.50'],
  },
  {
    id: 'acct-3',
    category: 'Accounting',
    difficulty: 'Intermediate',
    prompt: 'Why does an increase in accounts receivable reduce cash flow from operations?',
    strongAnswer:
      'An increase in accounts receivable means the company recognized revenue that it has not yet collected in cash. Because net income already reflects the revenue, the increase in receivables is subtracted on the indirect cash flow statement to remove the uncollected amount from operating cash flow.',
    keyPoints: ['Revenue recognized before cash', 'AR is an operating asset', 'Increase in operating asset uses cash'],
  },
  {
    id: 'acct-4',
    category: 'Accounting',
    difficulty: 'Intermediate',
    prompt: 'What is deferred revenue and why is it a liability?',
    strongAnswer:
      'Deferred revenue arises when a customer pays before the company has earned the related revenue. Cash increases, but the company still owes goods or services, so the unearned amount is recorded as a liability. As the company performs, deferred revenue declines and revenue is recognized.',
    keyPoints: ['Cash first', 'Revenue later', 'Company owes future performance', 'Liability declines as revenue is earned'],
  },
  {
    id: 'acct-5',
    category: 'Accounting',
    difficulty: 'Advanced',
    prompt: 'Why is stock-based compensation added back on the cash flow statement, and why is it not economically free?',
    strongAnswer:
      'SBC reduces operating income and net income but usually does not require an equivalent current-period cash payment, so it is added back in cash flow from operations under the indirect method. It is still economically costly because employees are being compensated and equity awards can dilute existing shareholders.',
    keyPoints: ['Non-cash current-period expense', 'Added back in CFO', 'Real compensation cost', 'Potential dilution'],
  },
  {
    id: 'acct-6',
    category: 'Accounting',
    difficulty: 'Advanced',
    prompt: 'A company buys $50 of equipment for cash. What happens initially across the statements?',
    strongAnswer:
      'There is generally no immediate $50 income-statement expense solely from purchasing the equipment. On the cash flow statement, cash flow from investing falls by $50 for CapEx. On the balance sheet, cash falls $50 and PP&E rises $50, so total assets are unchanged initially. Future depreciation will reduce earnings and PP&E over time.',
    keyPoints: ['No immediate full expense', 'CFI −$50', 'Cash −$50', 'PP&E +$50', 'Future depreciation'],
  },
  {
    id: 'val-1',
    category: 'Valuation',
    difficulty: 'Beginner',
    prompt: 'What are the three main valuation methods?',
    strongAnswer:
      'The standard three are trading comparables, precedent transactions, and discounted cash flow analysis. Trading comps look at how similar public companies are currently valued, precedents look at prices paid in comparable acquisitions, and a DCF estimates intrinsic value by discounting future free cash flow.',
    keyPoints: ['Trading comps', 'Precedent transactions', 'DCF', 'Market vs transaction vs intrinsic perspectives'],
  },
  {
    id: 'val-2',
    category: 'Valuation',
    difficulty: 'Intermediate',
    prompt: 'What is the difference between enterprise value and equity value?',
    strongAnswer:
      'Equity value is the value attributable to common shareholders. Enterprise value represents the value of the core operating business available to all major capital providers. A simplified bridge is Equity Value + Debt + other non-common claims − Cash and non-operating assets.',
    keyPoints: ['Equity value = common shareholders', 'EV = operations / all capital providers', 'Debt added', 'Cash subtracted'],
  },
  {
    id: 'val-3',
    category: 'Valuation',
    difficulty: 'Intermediate',
    prompt: 'Why do you add debt and subtract cash when calculating enterprise value?',
    strongAnswer:
      'Debt is added because an acquirer of the business must address the claims of lenders in addition to paying equity holders. Cash is subtracted because the buyer receives that non-operating asset, which reduces the effective net cost of acquiring the operations.',
    keyPoints: ['Debt is another capital-provider claim', 'Cash is a non-operating asset received by buyer', 'Think acquisition cost of operations'],
  },
  {
    id: 'val-4',
    category: 'Valuation',
    difficulty: 'Intermediate',
    prompt: 'Why would precedent transaction multiples often be higher than trading comparables?',
    strongAnswer:
      'Precedent transactions can include a control premium and part of the value of expected synergies because a buyer is acquiring control of the company. Trading comps reflect minority public-market values and do not generally include a control premium.',
    keyPoints: ['Control premium', 'Synergies', 'Transaction value vs minority trading value'],
  },
  {
    id: 'val-5',
    category: 'Valuation',
    difficulty: 'Advanced',
    prompt: 'Why do you add non-controlling interest to enterprise value?',
    strongAnswer:
      'If a parent consolidates 100% of a subsidiary’s revenue and EBITDA but owns less than 100%, the operating denominator includes the full subsidiary while the parent’s equity value reflects only its ownership. Adding NCI helps match the value numerator to the fully consolidated operating metrics.',
    keyPoints: ['Consolidated EBITDA includes 100%', 'Parent does not own 100%', 'Numerator-denominator consistency'],
  },
  {
    id: 'val-6',
    category: 'Valuation',
    difficulty: 'Advanced',
    prompt: 'How does the treasury stock method calculate option dilution?',
    strongAnswer:
      'It assumes in-the-money options are exercised and the company uses the exercise proceeds to repurchase shares at the current stock price. Incremental dilution equals options exercised minus the shares that could be repurchased with the proceeds. Out-of-the-money options generally create no dilution under the method.',
    keyPoints: ['Exercise in-the-money options', 'Use proceeds to repurchase shares', 'Net incremental shares', 'Out-of-the-money excluded'],
  },
  {
    id: 'dcf-1',
    category: 'DCF',
    difficulty: 'Beginner',
    prompt: 'Walk me through a DCF.',
    strongAnswer:
      'Forecast the company’s operating performance and unlevered free cash flow, discount the explicit forecast cash flows at WACC, estimate terminal value using perpetuity growth or an exit multiple and discount it back, then add the present values to get enterprise value. Bridge to equity value by adjusting for debt, cash, and other claims, divide by diluted shares if needed, and sensitize the key assumptions.',
    keyPoints: ['Forecast UFCF', 'Discount at WACC', 'Terminal value', 'Enterprise value', 'Bridge to equity', 'Sensitivity'],
  },
  {
    id: 'dcf-2',
    category: 'DCF',
    difficulty: 'Intermediate',
    prompt: 'What is unlevered free cash flow?',
    strongAnswer:
      'A common formula is EBIT × (1 − tax rate) + D&A − CapEx − increase in net working capital. It represents cash flow generated by the core business before interest and debt repayment, so it is available to both debt and equity investors.',
    keyPoints: ['NOPAT', '+ D&A', '− CapEx', '− increase in NWC', 'Before financing'],
  },
  {
    id: 'dcf-3',
    category: 'DCF',
    difficulty: 'Intermediate',
    prompt: 'Why do you use WACC to discount unlevered free cash flow?',
    strongAnswer:
      'UFCF is before financing costs and belongs to all capital providers, so the discount rate should reflect the blended required return of those capital providers. WACC combines the required returns on debt and equity using their market-value weights.',
    keyPoints: ['UFCF belongs to debt and equity', 'WACC blends capital-provider required returns', 'Match cash flow and discount rate'],
  },
  {
    id: 'dcf-4',
    category: 'DCF',
    difficulty: 'Intermediate',
    prompt: 'What are the two main ways to calculate terminal value?',
    strongAnswer:
      'The two common methods are the perpetuity growth method and the exit multiple method. Perpetuity growth capitalizes terminal free cash flow using a sustainable long-run growth rate, while the exit multiple method applies a valuation multiple to a terminal-year metric such as EBITDA.',
    keyPoints: ['Perpetuity growth', 'Exit multiple', 'Sustainable terminal assumptions'],
  },
  {
    id: 'dcf-5',
    category: 'DCF',
    difficulty: 'Advanced',
    prompt: 'Why can a small change in WACC have a large effect on DCF value?',
    strongAnswer:
      'WACC affects the present value of every forecast cash flow and the terminal value. Because terminal value often represents a large portion of total DCF value, a small change in the discount rate can materially change both the terminal-value calculation and how heavily it is discounted.',
    keyPoints: ['Discounts every cash flow', 'Affects terminal value formula', 'Terminal value often large share of EV'],
  },
  {
    id: 'dcf-6',
    category: 'DCF',
    difficulty: 'Advanced',
    prompt: 'What is mid-year convention and why does it usually increase DCF value?',
    strongAnswer:
      'Mid-year convention assumes cash is generated throughout the year rather than only at year-end, so annual cash flows are discounted from roughly the middle of each period. Because the cash is treated as arriving earlier, it is discounted less and the present value is usually slightly higher.',
    keyPoints: ['Cash generated throughout year', 'Earlier timing', 'Less discounting', 'Slightly higher value'],
  },
  {
    id: 'ma-1',
    category: 'M&A',
    difficulty: 'Beginner',
    prompt: 'Why do companies make acquisitions?',
    strongAnswer:
      'Common reasons include entering new markets, acquiring products or technology, increasing scale, gaining customers or distribution, removing a competitor, and creating cost or revenue synergies. A deal creates value only if those benefits exceed the purchase premium, integration costs, financing costs, and execution risk.',
    keyPoints: ['Strategic rationale', 'Synergies', 'Benefits must exceed price and risks'],
  },
  {
    id: 'ma-2',
    category: 'M&A',
    difficulty: 'Intermediate',
    prompt: 'What makes a deal accretive or dilutive?',
    strongAnswer:
      'A deal is accretive if the buyer’s pro forma EPS is higher than standalone EPS and dilutive if it is lower. Pro forma EPS is affected by target earnings, financing costs, foregone interest on cash, new share issuance, synergies, purchase-accounting expenses, and taxes.',
    keyPoints: ['Compare pro forma EPS with standalone buyer EPS', 'Target earnings', 'Financing', 'Synergies', 'New shares', 'Purchase accounting'],
  },
  {
    id: 'ma-3',
    category: 'M&A',
    difficulty: 'Intermediate',
    prompt: 'Why might a strategic buyer pay more than a financial buyer?',
    strongAnswer:
      'A strategic buyer may be able to realize synergies such as cost savings, distribution benefits, or cross-selling that a standalone financial buyer cannot. Those incremental benefits can let the strategic buyer justify a higher purchase price while still earning an acceptable return.',
    keyPoints: ['Strategic synergies', 'Incremental value', 'Higher maximum willingness to pay'],
  },
  {
    id: 'ma-4',
    category: 'M&A',
    difficulty: 'Advanced',
    prompt: 'How is goodwill created in an acquisition?',
    strongAnswer:
      'In simplified terms, goodwill equals the purchase price minus the fair value of identifiable net assets acquired. It captures the residual value after allocating purchase price to identifiable assets and liabilities and can reflect expected synergies, assembled workforce, brand-related value, and other benefits that are not separately identifiable.',
    keyPoints: ['Purchase price', 'Less fair value of identifiable net assets', 'Residual', 'Acquisition accounting'],
  },
  {
    id: 'ma-5',
    category: 'M&A',
    difficulty: 'Advanced',
    prompt: 'How does using stock instead of cash affect an acquisition?',
    strongAnswer:
      'Stock consideration preserves cash and can reduce the need for new debt, but it increases the buyer’s share count and dilutes existing shareholders. It also lets the seller participate in the combined company’s future performance, so some post-deal risk is shared with the seller.',
    keyPoints: ['Preserves cash', 'Dilution', 'Less debt need', 'Seller shares post-deal risk'],
  },
  {
    id: 'lbo-1',
    category: 'LBO',
    difficulty: 'Beginner',
    prompt: 'What is an LBO?',
    strongAnswer:
      'A leveraged buyout is an acquisition funded with a significant amount of debt plus sponsor equity. The acquired company’s cash flow helps service and repay the debt, and the sponsor seeks to earn a return through operating growth, debt paydown, and the value of the business at exit.',
    keyPoints: ['Debt + sponsor equity', 'Company cash flow services debt', 'Operating growth', 'Debt paydown', 'Exit value'],
  },
  {
    id: 'lbo-2',
    category: 'LBO',
    difficulty: 'Intermediate',
    prompt: 'What makes a company a good LBO candidate?',
    strongAnswer:
      'Strong candidates usually have stable and predictable cash flow, defensible market positions, manageable CapEx and working-capital needs, available debt capacity, and opportunities for operational improvement. These characteristics make it easier to service debt and create equity value.',
    keyPoints: ['Stable cash flow', 'Debt capacity', 'Manageable reinvestment needs', 'Defensible business', 'Improvement opportunities'],
  },
  {
    id: 'lbo-3',
    category: 'LBO',
    difficulty: 'Intermediate',
    prompt: 'What are the main drivers of LBO returns?',
    strongAnswer:
      'The main drivers are operating growth, margin improvement, free cash flow and debt paydown, entry purchase price, leverage, exit multiple, and holding period. Stronger operations and more deleveraging increase equity value, while paying a lower entry multiple and achieving a higher exit multiple also improve returns.',
    keyPoints: ['EBITDA growth', 'Debt paydown', 'Entry multiple', 'Exit multiple', 'Holding period', 'Leverage'],
  },
  {
    id: 'lbo-4',
    category: 'LBO',
    difficulty: 'Advanced',
    prompt: 'Walk me through a simple paper LBO.',
    strongAnswer:
      'Calculate entry enterprise value from entry EBITDA and the purchase multiple. Build sources and uses to determine debt and sponsor equity. Project EBITDA and free cash flow to estimate debt paydown. At exit, multiply exit EBITDA by the exit multiple to get exit enterprise value, subtract remaining debt to get exit equity value, then compare exit equity with entry sponsor equity to calculate MOIC and IRR.',
    keyPoints: ['Entry EV', 'Sources and uses', 'Debt and sponsor equity', 'Debt paydown', 'Exit EV', 'Exit equity', 'MOIC/IRR'],
  },
  {
    id: 'corp-1',
    category: 'Corporate Finance',
    difficulty: 'Beginner',
    prompt: 'What is WACC?',
    strongAnswer:
      'WACC is the weighted average cost of capital. It blends the required returns of a company’s major debt and equity capital providers using market-value weights. Because unlevered free cash flow belongs to all capital providers, WACC is commonly used as the discount rate in an unlevered DCF.',
    keyPoints: ['Weighted required return', 'Debt and equity', 'Market-value weights', 'DCF discount rate'],
  },
  {
    id: 'corp-2',
    category: 'Corporate Finance',
    difficulty: 'Intermediate',
    prompt: 'What is CAPM?',
    strongAnswer:
      'CAPM estimates cost of equity as the risk-free rate plus beta times the equity risk premium. The risk-free rate provides the baseline return, beta measures the stock’s market sensitivity, and the equity risk premium represents the extra return investors demand for taking broad equity-market risk.',
    keyPoints: ['Rf + beta × ERP', 'Cost of equity', 'Systematic risk'],
  },
  {
    id: 'corp-3',
    category: 'Corporate Finance',
    difficulty: 'Intermediate',
    prompt: 'What is the difference between NPV and IRR?',
    strongAnswer:
      'NPV measures value creation in dollars by subtracting the present value of costs from the present value of benefits. IRR is the discount rate that makes NPV equal zero and expresses an implied annualized return. NPV is usually the cleaner value-creation measure, while IRR is intuitive for comparing return rates.',
    keyPoints: ['NPV = dollar value creation', 'IRR = discount rate where NPV = 0', 'Different but related decision metrics'],
  },
  {
    id: 'market-1',
    category: 'Markets',
    difficulty: 'Beginner',
    prompt: 'What happens to bond prices when market yields rise?',
    strongAnswer:
      'Existing fixed-rate bond prices generally fall when market yields rise because their fixed coupons become less attractive relative to newly issued bonds offering higher yields. The reverse is generally true when market yields fall.',
    keyPoints: ['Prices and yields move inversely', 'Fixed coupons become more or less attractive'],
  },
  {
    id: 'market-2',
    category: 'Markets',
    difficulty: 'Intermediate',
    prompt: 'What is a credit spread?',
    strongAnswer:
      'A credit spread is the extra yield a corporate or other risky bond offers above a benchmark risk-free or government yield. It compensates investors for credit and liquidity risk. Wider spreads imply a higher borrowing cost and generally greater perceived risk.',
    keyPoints: ['Yield above benchmark', 'Compensation for credit/liquidity risk', 'Wider spread = higher borrowing cost'],
  },
  {
    id: 'market-3',
    category: 'Markets',
    difficulty: 'Intermediate',
    prompt: 'Why can a stock fall after a company reports record earnings?',
    strongAnswer:
      'Stocks react to results relative to expectations and to the future outlook. A company can report record earnings but still disappoint if investors expected even more or if guidance suggests weaker future performance. The stock price already reflects what the market expected before the report.',
    keyPoints: ['Expectations matter', 'Guidance matters', 'Price reflects future outlook'],
  },
  {
    id: 'beh-1',
    category: 'Behavioral',
    difficulty: 'Beginner',
    prompt: 'Tell me about yourself.',
    strongAnswer:
      'A strong answer gives a concise story: where you are now, two or three experiences that shaped your interests and strengths, and why investment banking is the logical next step. It should feel like a progression rather than a spoken resume.',
    keyPoints: ['Current context', 'Relevant past experiences', 'Progression', 'Why banking now'],
  },
  {
    id: 'beh-2',
    category: 'Behavioral',
    difficulty: 'Beginner',
    prompt: 'Why investment banking?',
    strongAnswer:
      'A strong answer connects real experiences to specific parts of banking such as rigorous company analysis, transaction work, a steep learning curve, and team-based execution. It should explain why the actual job fits you rather than relying on prestige, pay, or a vague interest in finance.',
    keyPoints: ['Real experiences', 'Specific banking work', 'Fit with strengths and goals', 'Avoid generic prestige answer'],
  },
  {
    id: 'beh-3',
    category: 'Behavioral',
    difficulty: 'Intermediate',
    prompt: 'Tell me about a failure.',
    strongAnswer:
      'Use a real failure that mattered, explain your role clearly, take ownership of what you could have done differently, describe the result, and most importantly show the specific change in behavior or system you adopted afterward.',
    keyPoints: ['Real example', 'Ownership', 'Lesson', 'Changed behavior'],
  },
  {
    id: 'beh-4',
    category: 'Behavioral',
    difficulty: 'Intermediate',
    prompt: 'Tell me about a time you had conflict with a teammate.',
    strongAnswer:
      'Explain the disagreement and each side’s perspective, focus on how you addressed the issue directly and professionally, describe the resolution, and show how the relationship or team outcome improved. The point is judgment and collaboration, not proving you won the argument.',
    keyPoints: ['Understand both sides', 'Direct communication', 'Resolution', 'Preserve trust'],
  },
  {
    id: 'beh-5',
    category: 'Behavioral',
    difficulty: 'Intermediate',
    prompt: 'What is your biggest weakness?',
    strongAnswer:
      'Choose a real and manageable weakness, give a concrete example of when it affected you, and explain the specific steps you are taking to improve. The answer should demonstrate self-awareness and changed behavior rather than disguising a strength as a weakness.',
    keyPoints: ['Real weakness', 'Specific example', 'Improvement system', 'Self-awareness'],
  },
  {
    id: 'beh-6',
    category: 'Behavioral',
    difficulty: 'Intermediate',
    prompt: 'Why this bank?',
    strongAnswer:
      'Use specific evidence about the bank, office, or group, plus real conversations or experiences that made the fit credible. Then connect those specifics to what you want to learn or work on. The answer should not work equally well if the bank name is replaced with a competitor.',
    keyPoints: ['Specific platform/group facts', 'Conversations', 'Personal fit', 'Not generic'],
  },
  {
    id: 'deal-1',
    category: 'Deals',
    difficulty: 'Intermediate',
    prompt: 'Tell me about a recent deal you found interesting.',
    strongAnswer:
      'A strong deal answer covers the buyer and target, transaction value and consideration, strategic rationale, valuation if available, financing, expected synergies, and the major risks or questions. End with your own view on what has to go right for the deal to create value.',
    keyPoints: ['Parties and price', 'Rationale', 'Valuation/financing', 'Synergies', 'Risks', 'Your view'],
  },
  {
    id: 'deal-2',
    category: 'Deals',
    difficulty: 'Advanced',
    prompt: 'How would higher interest rates affect M&A activity?',
    strongAnswer:
      'Higher rates raise debt financing costs, reduce how much leverage buyers can support, and increase discount rates, which can pressure valuations. That can make some deals less accretive or reduce sponsor returns. However, the effect varies by buyer balance sheet, strategic rationale, seller expectations, and whether valuation multiples adjust.',
    keyPoints: ['Higher financing cost', 'Lower debt capacity', 'Higher discount rates', 'Pressure on valuations and sponsor returns', 'Company-specific effects'],
  },
]

export const interviewCategories = [
  'Accounting',
  'Corporate Finance',
  'Valuation',
  'DCF',
  'M&A',
  'LBO',
  'Markets',
  'Deals',
  'Behavioral',
]

export const interviewDifficulties = ['Beginner', 'Intermediate', 'Advanced']
