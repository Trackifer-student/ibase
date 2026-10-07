export const interviewCategories = [
  'Accounting',
  'Valuation',
  'DCF',
  'M&A',
  'LBO',
  'Markets',
  'Behavioral',
]

export const interviewQuestions = [
  {
    id: 'acct-1',
    category: 'Accounting',
    difficulty: 'Core',
    prompt: 'Walk me through the three financial statements.',
    strongAnswer:
      'The income statement shows revenue, expenses, and net income over a period. Net income flows into the cash flow statement, which adjusts for non-cash items and working capital and adds investing and financing activity to explain the change in cash. Ending cash flows to the balance sheet, and net income also affects retained earnings within equity.',
    criteria: [
      { id: 'statements', label: 'identify what each of the three statements shows', keywords: ['income statement', 'cash flow statement', 'balance sheet', 'revenue', 'assets', 'cash'] },
      { id: 'links', label: 'explain at least one major linkage', keywords: ['net income', 'retained earnings', 'ending cash', 'flows', 'connect'] },
    ],
  },
  {
    id: 'acct-2',
    category: 'Accounting',
    difficulty: 'Core',
    prompt: 'If depreciation increases by $10 and the tax rate is 25%, walk through the three statements.',
    strongAnswer:
      'EBIT falls by $10, taxes fall by $2.50, and net income falls by $7.50. On the cash flow statement, add back the $10 non-cash depreciation, so cash increases by $2.50. On the balance sheet, cash rises $2.50, PP&E falls $10, and retained earnings falls $7.50, so both sides fall $7.50.',
    criteria: [
      { id: 'is', label: 'get the after-tax income-statement effect', keywords: ['7.5', '7.50', 'net income', 'tax', '2.5'] },
      { id: 'cfsbs', label: 'explain the add-back and balance-sheet effects', keywords: ['add back', 'cash', 'ppe', 'retained earnings', 'depreciation'] },
    ],
  },
  {
    id: 'acct-3',
    category: 'Accounting',
    difficulty: 'Core',
    prompt: 'Why can a profitable company run out of cash?',
    strongAnswer:
      'Profit is based on accrual accounting, so revenue and expenses can be recognized at different times from cash movement. A company can have large receivables, inventory, CapEx, debt payments, or other cash uses that consume cash even while net income is positive.',
    criteria: [
      { id: 'timing', label: 'recognize accrual versus cash timing', keywords: ['accrual', 'timing', 'receivable', 'revenue', 'cash'] },
      { id: 'uses', label: 'identify real cash uses', keywords: ['capex', 'inventory', 'debt', 'working capital', 'cash use'] },
    ],
  },
  {
    id: 'acct-4',
    category: 'Accounting',
    difficulty: 'Core',
    prompt: 'What is the difference between accounts receivable and deferred revenue?',
    strongAnswer:
      'Accounts receivable means the company has earned revenue but has not collected the customer cash yet, so it is an asset. Deferred revenue means the company collected cash before earning the revenue and still owes goods or services, so it is a liability.',
    criteria: [
      { id: 'ar', label: 'explain revenue before cash for AR', keywords: ['accounts receivable', 'earned', 'not collected', 'asset', 'customer owes'] },
      { id: 'dr', label: 'explain cash before revenue for deferred revenue', keywords: ['deferred revenue', 'cash first', 'liability', 'owe', 'service'] },
    ],
  },
  {
    id: 'acct-5',
    category: 'Accounting',
    difficulty: 'Core',
    prompt: 'What is working capital and why does it matter for cash flow?',
    strongAnswer:
      'Working capital in banking analysis focuses on short-term operating assets and liabilities such as receivables, inventory, and payables. Increases in operating assets generally use cash, while increases in operating liabilities generally provide cash, which is why changes in working capital affect CFO and free cash flow.',
    criteria: [
      { id: 'accounts', label: 'identify operating assets and liabilities', keywords: ['receivable', 'inventory', 'payable', 'operating asset', 'operating liability'] },
      { id: 'cash', label: 'explain the cash-flow direction', keywords: ['use cash', 'source of cash', 'cash flow', 'increase', 'decrease'] },
    ],
  },
  {
    id: 'acct-6',
    category: 'Accounting',
    difficulty: 'Advanced',
    prompt: 'Why is stock-based compensation added back on the cash flow statement, and why does it still matter economically?',
    strongAnswer:
      'SBC reduces net income but usually does not require the same current-period cash outflow, so it is added back in CFO under the indirect method. It still matters because employees are being compensated and issuing equity can dilute existing shareholders.',
    criteria: [
      { id: 'addback', label: 'explain the non-cash add-back', keywords: ['non cash', 'non-cash', 'add back', 'cash flow', 'net income'] },
      { id: 'economic', label: 'explain the dilution or compensation cost', keywords: ['dilution', 'dilute', 'share', 'compensation', 'economic cost'] },
    ],
  },

  {
    id: 'val-1',
    category: 'Valuation',
    difficulty: 'Core',
    prompt: 'What are the main valuation methods used in investment banking?',
    strongAnswer:
      'The core methods are trading comparables, precedent transactions, and DCF. Trading comps use current public-market multiples, precedents use multiples paid in prior acquisitions, and DCF discounts the company’s own projected future cash flows. Bankers often triangulate a range across several methods.',
    criteria: [
      { id: 'methods', label: 'name the three core methods', keywords: ['comps', 'comparables', 'precedent', 'transactions', 'dcf'] },
      { id: 'logic', label: 'explain at least one method’s logic or triangulation', keywords: ['market', 'multiple', 'cash flow', 'discount', 'range'] },
    ],
  },
  {
    id: 'val-2',
    category: 'Valuation',
    difficulty: 'Core',
    prompt: 'What is the difference between Enterprise Value and Equity Value?',
    strongAnswer:
      'Equity Value is the value attributable to common shareholders. Enterprise Value represents the value of the core operating business to all major capital providers. A simplified bridge is EV = Equity Value + Debt − Cash, with other claims such as preferred stock and NCI added where relevant.',
    criteria: [
      { id: 'ownership', label: 'distinguish common equity from all capital providers', keywords: ['common shareholder', 'equity', 'capital provider', 'operating business'] },
      { id: 'bridge', label: 'explain the EV bridge', keywords: ['debt', 'cash', 'preferred', 'nci', 'enterprise value'] },
    ],
  },
  {
    id: 'val-3',
    category: 'Valuation',
    difficulty: 'Core',
    prompt: 'Why do we use Enterprise Value / EBITDA instead of Equity Value / EBITDA?',
    strongAnswer:
      'EBITDA is before interest expense, so it reflects operating earnings available to both debt and equity providers. Enterprise Value also represents value to debt and equity providers. Equity Value belongs only to common shareholders, so Equity Value / EBITDA mismatches the numerator and denominator.',
    criteria: [
      { id: 'ebitda', label: 'recognize EBITDA is before interest', keywords: ['before interest', 'ebitda', 'debt', 'equity'] },
      { id: 'match', label: 'explain numerator-denominator matching', keywords: ['match', 'capital provider', 'enterprise value', 'equity value'] },
    ],
  },
  {
    id: 'val-4',
    category: 'Valuation',
    difficulty: 'Core',
    prompt: 'Why are precedent transaction multiples often higher than trading-comps multiples?',
    strongAnswer:
      'Precedent transactions reflect prices paid to acquire control of a company and can include a control premium and expected synergies. Trading comps reflect minority public-market pricing. Precedents are not always higher, but those deal-specific benefits can push them above trading multiples.',
    criteria: [
      { id: 'control', label: 'identify control premium', keywords: ['control', 'premium', 'acquire'] },
      { id: 'synergy', label: 'identify synergies or deal-specific value', keywords: ['synergy', 'synergies', 'strategic', 'deal'] },
    ],
  },
  {
    id: 'val-5',
    category: 'Valuation',
    difficulty: 'Core',
    prompt: 'Why might two companies with the same EBITDA trade at different EV / EBITDA multiples?',
    strongAnswer:
      'They can differ in growth, margins, cash conversion, risk, recurring revenue, competitive position, capital intensity, and expected future performance. The multiple reflects the quality and expected growth of the earnings, not only the current EBITDA amount.',
    criteria: [
      { id: 'drivers', label: 'identify business-quality or growth differences', keywords: ['growth', 'margin', 'risk', 'recurring', 'competitive', 'capital'] },
      { id: 'future', label: 'connect the multiple to future expectations', keywords: ['future', 'expected', 'quality', 'cash flow'] },
    ],
  },
  {
    id: 'val-6',
    category: 'Valuation',
    difficulty: 'Advanced',
    prompt: 'Can Enterprise Value be negative?',
    strongAnswer:
      'Yes. In unusual cases, a company can have more cash than the sum of its Equity Value plus debt and other added claims, producing negative EV. This can occur in distressed or cash-rich situations, but it often signals that the market expects substantial cash burn, losses, or other problems.',
    criteria: [
      { id: 'math', label: 'explain the cash-heavy bridge that can produce negative EV', keywords: ['cash', 'debt', 'equity value', 'negative'] },
      { id: 'meaning', label: 'explain why it may occur economically', keywords: ['distress', 'cash burn', 'loss', 'problem', 'expect'] },
    ],
  },

  {
    id: 'dcf-1',
    category: 'DCF',
    difficulty: 'Core',
    prompt: 'Walk me through a DCF.',
    strongAnswer:
      'Forecast operating results and calculate unlevered free cash flow as NOPAT plus D&A minus CapEx and the increase in NWC. Discount each year of UFCF at WACC, calculate terminal value using perpetuity growth or an exit multiple and discount it, add the present values to get Enterprise Value, then bridge to Equity Value and divide by diluted shares.',
    criteria: [
      { id: 'fcf', label: 'describe UFCF and discounting', keywords: ['free cash flow', 'ufcf', 'nopat', 'capex', 'working capital', 'wacc', 'discount'] },
      { id: 'terminal', label: 'describe terminal value and EV-to-equity bridge', keywords: ['terminal value', 'enterprise value', 'equity value', 'debt', 'cash', 'shares'] },
    ],
  },
  {
    id: 'dcf-2',
    category: 'DCF',
    difficulty: 'Core',
    prompt: 'How do you calculate unlevered free cash flow?',
    strongAnswer:
      'A common formula is EBIT × (1 − tax rate) + D&A − CapEx − Change in Net Working Capital. This gives after-tax operating cash flow before interest and debt payments, so it is available to debt and equity holders.',
    criteria: [
      { id: 'formula', label: 'include the core UFCF components', keywords: ['ebit', 'tax', 'd&a', 'depreciation', 'capex', 'working capital'] },
      { id: 'unlevered', label: 'explain that it is before financing effects', keywords: ['before interest', 'debt', 'equity', 'unlevered', 'capital providers'] },
    ],
  },
  {
    id: 'dcf-3',
    category: 'DCF',
    difficulty: 'Core',
    prompt: 'What are the two main ways to calculate terminal value?',
    strongAnswer:
      'The two common approaches are the perpetuity growth method and the exit multiple method. Perpetuity growth applies a sustainable long-term growth rate to normalized free cash flow, while exit multiple applies a market multiple to a terminal-year metric such as EBITDA.',
    criteria: [
      { id: 'methods', label: 'name both terminal methods', keywords: ['perpetuity growth', 'exit multiple'] },
      { id: 'logic', label: 'explain the logic of at least one', keywords: ['growth', 'free cash flow', 'ebitda', 'multiple'] },
    ],
  },
  {
    id: 'dcf-4',
    category: 'DCF',
    difficulty: 'Core',
    prompt: 'What happens to DCF value if WACC increases?',
    strongAnswer:
      'DCF value decreases, all else equal, because future cash flows and terminal value are discounted more heavily. Under the perpetuity growth method, a higher WACC also increases the WACC-minus-growth denominator, further reducing terminal value.',
    criteria: [
      { id: 'direction', label: 'state that value decreases', keywords: ['decrease', 'lower', 'falls'] },
      { id: 'reason', label: 'explain heavier discounting', keywords: ['discount', 'present value', 'wacc', 'terminal'] },
    ],
  },
  {
    id: 'dcf-5',
    category: 'DCF',
    difficulty: 'Core',
    prompt: 'Why do we add back D&A but subtract CapEx in a DCF?',
    strongAnswer:
      'D&A reduced EBIT but is a non-cash expense in the current period, so it is added back after taxes. CapEx is the actual cash spent on long-lived assets, so it is subtracted. D&A and CapEx are related but occur at different times and measure different things.',
    criteria: [
      { id: 'da', label: 'explain D&A is non-cash and added back', keywords: ['d&a', 'depreciation', 'amortization', 'non cash', 'add back'] },
      { id: 'capex', label: 'explain CapEx is real cash investment', keywords: ['capex', 'cash', 'asset', 'subtract'] },
    ],
  },
  {
    id: 'dcf-6',
    category: 'DCF',
    difficulty: 'Advanced',
    prompt: 'Why might a DCF be less useful for a bank or financial institution?',
    strongAnswer:
      'Debt and interest are operating inputs for banks rather than simply financing choices, and regulatory capital is central to the business model. That makes unlevered free cash flow and Enterprise Value concepts less clean. Financial institutions are often valued with equity-based methods such as P / E, P / B, dividend discount, or excess-return approaches.',
    criteria: [
      { id: 'debt', label: 'recognize debt and interest are part of operations', keywords: ['debt', 'interest', 'operating', 'bank'] },
      { id: 'equity', label: 'recognize equity-based methods are often more appropriate', keywords: ['p/e', 'p/b', 'dividend', 'equity', 'book value'] },
    ],
  },

  {
    id: 'ma-1',
    category: 'M&A',
    difficulty: 'Core',
    prompt: 'What makes a deal accretive or dilutive?',
    strongAnswer:
      'A deal is accretive if the buyer’s pro forma EPS is above standalone EPS and dilutive if it is below. Pro forma EPS depends on target earnings, synergies, financing costs, foregone interest, purchase-accounting expenses, taxes, and any new shares issued.',
    criteria: [
      { id: 'definition', label: 'define accretion versus dilution using EPS', keywords: ['eps', 'accretive', 'dilutive', 'higher', 'lower'] },
      { id: 'drivers', label: 'identify transaction drivers', keywords: ['synergy', 'interest', 'shares', 'financing', 'amortization', 'target earnings'] },
    ],
  },
  {
    id: 'ma-2',
    category: 'M&A',
    difficulty: 'Core',
    prompt: 'Why might a strategic buyer pay more than a financial buyer?',
    strongAnswer:
      'A strategic buyer may be able to realize cost or revenue synergies from combining the target with its existing operations. Those buyer-specific benefits can make the target worth more to the strategic buyer than to a financial sponsor that primarily relies on standalone cash flow and leverage.',
    criteria: [
      { id: 'synergy', label: 'identify buyer-specific synergies', keywords: ['synergy', 'cost', 'revenue', 'combine'] },
      { id: 'value', label: 'connect synergies to higher value', keywords: ['worth more', 'pay more', 'value', 'premium'] },
    ],
  },
  {
    id: 'ma-3',
    category: 'M&A',
    difficulty: 'Core',
    prompt: 'What is goodwill and how is it created in an acquisition?',
    strongAnswer:
      'Goodwill is the residual acquisition asset created when purchase price exceeds the fair value of identifiable net assets acquired. It can reflect expected synergies, workforce, strategic position, and other value that is not separately recognized as an identifiable asset.',
    criteria: [
      { id: 'residual', label: 'explain purchase price minus identifiable net assets', keywords: ['purchase price', 'net assets', 'residual', 'fair value'] },
      { id: 'meaning', label: 'identify unrecognized benefits such as synergies', keywords: ['synergy', 'workforce', 'brand', 'strategic', 'goodwill'] },
    ],
  },
  {
    id: 'ma-4',
    category: 'M&A',
    difficulty: 'Core',
    prompt: 'What are the main ways an acquisition can be financed?',
    strongAnswer:
      'The buyer can use cash on hand, new debt, stock consideration, or a combination. Cash creates foregone interest income, debt creates interest expense and leverage, and stock creates new shares and dilution.',
    criteria: [
      { id: 'sources', label: 'identify cash, debt, and stock', keywords: ['cash', 'debt', 'stock', 'shares'] },
      { id: 'effects', label: 'identify at least one financing consequence', keywords: ['interest', 'leverage', 'dilution', 'foregone'] },
    ],
  },
  {
    id: 'ma-5',
    category: 'M&A',
    difficulty: 'Core',
    prompt: 'What are synergies?',
    strongAnswer:
      'Synergies are incremental benefits created by combining the buyer and target that would not exist on a standalone basis. Cost synergies reduce duplicated expenses, while revenue synergies increase sales or gross profit. They should be modeled after tax and with realistic timing and implementation costs.',
    criteria: [
      { id: 'incremental', label: 'define synergies as combination-specific benefits', keywords: ['combine', 'incremental', 'standalone', 'benefit'] },
      { id: 'types', label: 'identify cost or revenue synergies', keywords: ['cost', 'revenue', 'expense', 'sales'] },
    ],
  },
  {
    id: 'ma-6',
    category: 'M&A',
    difficulty: 'Advanced',
    prompt: 'Can a deal be accretive and still destroy value?',
    strongAnswer:
      'Yes. Accretion only measures the effect on buyer EPS. A buyer can overpay, take on excessive leverage, or rely on unrealistic synergies and still create mechanical EPS accretion. True value creation depends on whether the economic benefits exceed the premium, costs, and risk.',
    criteria: [
      { id: 'eps', label: 'recognize accretion is only an EPS metric', keywords: ['eps', 'accretion', 'accounting'] },
      { id: 'value', label: 'identify overpayment or economic return risk', keywords: ['overpay', 'premium', 'synergy', 'risk', 'return', 'value'] },
    ],
  },

  {
    id: 'lbo-1',
    category: 'LBO',
    difficulty: 'Core',
    prompt: 'Walk me through an LBO.',
    strongAnswer:
      'Calculate entry Enterprise Value from EBITDA and the entry multiple, build Sources & Uses with debt and sponsor equity, forecast operations and free cash flow, use cash to pay down debt, calculate exit Enterprise Value using exit EBITDA and an exit multiple, subtract exit debt to get sponsor exit equity, then calculate MOIC and IRR.',
    criteria: [
      { id: 'entry', label: 'describe entry value, debt, and equity', keywords: ['entry', 'enterprise value', 'debt', 'equity', 'sources', 'uses'] },
      { id: 'exit', label: 'describe debt paydown, exit value, and returns', keywords: ['debt paydown', 'exit', 'moic', 'irr', 'return'] },
    ],
  },
  {
    id: 'lbo-2',
    category: 'LBO',
    difficulty: 'Core',
    prompt: 'What makes a good LBO candidate?',
    strongAnswer:
      'A good LBO candidate generally has stable and predictable cash flow, strong cash conversion, manageable CapEx and working-capital needs, a defensible market position, reasonable purchase price, debt capacity, and opportunities for growth or operational improvement.',
    criteria: [
      { id: 'cash', label: 'identify stable cash flow and cash conversion', keywords: ['cash flow', 'stable', 'predictable', 'cash conversion'] },
      { id: 'riskreturn', label: 'identify debt capacity, price, or improvement opportunities', keywords: ['debt', 'leverage', 'price', 'growth', 'improvement', 'capex'] },
    ],
  },
  {
    id: 'lbo-3',
    category: 'LBO',
    difficulty: 'Core',
    prompt: 'What are the main drivers of LBO returns?',
    strongAnswer:
      'The major drivers are entry price, leverage, operating growth and margin improvement, free cash flow and debt paydown, exit multiple, and holding period. Lower entry price, stronger operations, more debt paydown, and a favorable exit can increase equity returns, while leverage also increases downside risk.',
    criteria: [
      { id: 'drivers', label: 'identify several return drivers', keywords: ['entry', 'leverage', 'growth', 'debt paydown', 'exit multiple', 'holding period'] },
      { id: 'risk', label: 'recognize leverage magnifies downside too', keywords: ['risk', 'downside', 'leverage'] },
    ],
  },
  {
    id: 'lbo-4',
    category: 'LBO',
    difficulty: 'Core',
    prompt: 'What is the difference between MOIC and IRR?',
    strongAnswer:
      'MOIC is total exit equity proceeds divided by entry equity invested, so it measures how many times the sponsor’s money was returned. IRR is an annualized return that also incorporates timing, so the same MOIC produces a higher IRR when achieved over a shorter holding period.',
    criteria: [
      { id: 'moic', label: 'define MOIC as total money multiple', keywords: ['moic', 'multiple', 'exit equity', 'entry equity'] },
      { id: 'irr', label: 'explain IRR incorporates time', keywords: ['irr', 'time', 'annual', 'holding period', 'faster'] },
    ],
  },
  {
    id: 'lbo-5',
    category: 'LBO',
    difficulty: 'Core',
    prompt: 'Why does debt paydown increase sponsor equity value?',
    strongAnswer:
      'Equity Value equals Enterprise Value minus net debt in a simplified bridge. If the company uses free cash flow to reduce debt while Enterprise Value stays the same, less of the enterprise value is claimed by lenders and more remains for equity.',
    criteria: [
      { id: 'bridge', label: 'use the EV minus debt equity bridge', keywords: ['enterprise value', 'debt', 'equity value', 'net debt'] },
      { id: 'paydown', label: 'explain the shift from lenders to equity', keywords: ['pay down', 'repay', 'lender', 'equity', 'residual'] },
    ],
  },
  {
    id: 'lbo-6',
    category: 'LBO',
    difficulty: 'Advanced',
    prompt: 'Why might a sponsor prefer a lower entry multiple even if it expects to sell at the same exit multiple?',
    strongAnswer:
      'A lower entry multiple reduces purchase price and sponsor equity required. If operating performance and exit valuation are unchanged, the sponsor invests less upfront for the same or similar exit equity value, increasing MOIC and IRR.',
    criteria: [
      { id: 'entry', label: 'connect lower multiple to lower purchase price or equity invested', keywords: ['lower price', 'entry multiple', 'equity invested', 'purchase price'] },
      { id: 'return', label: 'connect lower entry to higher return', keywords: ['moic', 'irr', 'return', 'higher'] },
    ],
  },

  {
    id: 'mkt-1',
    category: 'Markets',
    difficulty: 'Core',
    prompt: 'How do higher interest rates affect valuation and deal activity?',
    strongAnswer:
      'Higher rates raise borrowing costs and required returns. That can reduce DCF present values, pressure public-market multiples, make debt-funded acquisitions and LBOs more expensive, and reduce IPO or M&A activity if buyer and seller expectations diverge.',
    criteria: [
      { id: 'valuation', label: 'connect rates to discount rates and lower valuation', keywords: ['discount', 'valuation', 'present value', 'multiple'] },
      { id: 'deals', label: 'connect rates to financing cost or deal activity', keywords: ['borrowing', 'debt', 'lbo', 'm&a', 'ipo', 'financing'] },
    ],
  },
  {
    id: 'mkt-2',
    category: 'Markets',
    difficulty: 'Core',
    prompt: 'What is a credit spread?',
    strongAnswer:
      'A credit spread is the extra yield a borrower pays over a benchmark such as a Treasury yield to compensate investors for credit risk. Corporate yield can be thought of as the benchmark yield plus the credit spread.',
    criteria: [
      { id: 'extra', label: 'define spread as extra yield over a benchmark', keywords: ['extra yield', 'benchmark', 'treasury', 'spread'] },
      { id: 'risk', label: 'connect the spread to credit risk', keywords: ['credit risk', 'default', 'risk', 'compensation'] },
    ],
  },
  {
    id: 'mkt-3',
    category: 'Markets',
    difficulty: 'Core',
    prompt: 'Why do bond prices fall when yields rise?',
    strongAnswer:
      'Existing fixed-rate bonds become less attractive when new bonds offer higher yields. Their market price falls so a buyer can earn a return competitive with the new market rate. Bond price and yield therefore generally move in opposite directions.',
    criteria: [
      { id: 'attractiveness', label: 'explain old fixed coupons become less attractive', keywords: ['fixed', 'coupon', 'new bond', 'market rate', 'attractive'] },
      { id: 'inverse', label: 'state the inverse price-yield relationship', keywords: ['price falls', 'yield rises', 'opposite', 'inverse'] },
    ],
  },
  {
    id: 'mkt-4',
    category: 'Markets',
    difficulty: 'Core',
    prompt: 'Give me a simple framework for a market update.',
    strongAnswer:
      'Start with the main macro driver, then describe rates, equities, and credit, mention the catalyst behind those moves, and finish with the implication for valuation, financing, IPOs, M&A, or LBO activity. The goal is to connect market facts to banking consequences.',
    criteria: [
      { id: 'markets', label: 'cover macro, rates, equities, or credit', keywords: ['macro', 'rates', 'equity', 'stock', 'credit', 'spread'] },
      { id: 'so-what', label: 'connect the market to banking implications', keywords: ['valuation', 'financing', 'ipo', 'm&a', 'lbo', 'deal'] },
    ],
  },
  {
    id: 'mkt-5',
    category: 'Markets',
    difficulty: 'Core',
    prompt: 'Why can a stock fall after a company reports record earnings?',
    strongAnswer:
      'Stock prices reflect expectations, not just absolute results. If investors expected even stronger earnings, management gives weak guidance, or the market lowers future growth expectations, the stock can fall despite record historical results.',
    criteria: [
      { id: 'expectations', label: 'recognize expectations versus results', keywords: ['expect', 'expected', 'expectations', 'priced in'] },
      { id: 'future', label: 'connect price to future outlook', keywords: ['future', 'guidance', 'growth', 'outlook'] },
    ],
  },
  {
    id: 'mkt-6',
    category: 'Markets',
    difficulty: 'Advanced',
    prompt: 'How can inflation affect a company’s margins?',
    strongAnswer:
      'Inflation can raise wages, materials, transportation, and other input costs. If the company has pricing power and can raise prices fast enough, it may protect margins. If costs rise faster than selling prices, margins compress.',
    criteria: [
      { id: 'cost', label: 'identify rising input costs', keywords: ['cost', 'wage', 'material', 'input', 'transport'] },
      { id: 'pricing', label: 'explain pricing power versus margin compression', keywords: ['pricing power', 'raise prices', 'margin', 'compress', 'pass through'] },
    ],
  },

  {
    id: 'beh-1',
    category: 'Behavioral',
    difficulty: 'Core',
    prompt: 'Why investment banking?',
    strongAnswer:
      'A strong answer connects your own experiences to the actual work: transaction exposure, financial analysis, steep learning, and team-based execution. It should explain why banking specifically rather than finance generally and avoid relying only on prestige, compensation, or exits.',
    criteria: [
      { id: 'specific', label: 'connect motivation to actual banking work', keywords: ['transaction', 'deal', 'analysis', 'valuation', 'team', 'client'] },
      { id: 'personal', label: 'connect the work to personal experience or interest', keywords: ['experience', 'interest', 'learn', 'background', 'because'] },
    ],
  },
  {
    id: 'beh-2',
    category: 'Behavioral',
    difficulty: 'Core',
    prompt: 'Walk me through your resume.',
    strongAnswer:
      'Use a concise chronological story: background, major experiences, what each taught you, and the transitions that led to your interest in banking. Spend the most time on recent and relevant experiences and finish by connecting the path to why you are interviewing now.',
    criteria: [
      { id: 'path', label: 'explain a coherent progression through experiences', keywords: ['background', 'experience', 'then', 'led', 'path'] },
      { id: 'banking', label: 'connect the path to banking now', keywords: ['banking', 'finance', 'interest', 'why'] },
    ],
  },
  {
    id: 'beh-3',
    category: 'Behavioral',
    difficulty: 'Core',
    prompt: 'Tell me about a failure.',
    strongAnswer:
      'Choose a real mistake where you had responsibility. Explain the situation briefly, own what you did wrong, describe the correction and prevention system, and show how your behavior changed afterward. Avoid blaming others or disguising a strength as a failure.',
    criteria: [
      { id: 'ownership', label: 'take ownership of a real mistake', keywords: ['mistake', 'my fault', 'responsibility', 'failed', 'wrong'] },
      { id: 'change', label: 'explain correction and changed behavior', keywords: ['learned', 'changed', 'improve', 'system', 'prevent', 'now'] },
    ],
  },
  {
    id: 'beh-4',
    category: 'Behavioral',
    difficulty: 'Core',
    prompt: 'Tell me about a time you worked under pressure.',
    strongAnswer:
      'Use a real situation with competing priorities and a deadline. Explain how you prioritized by importance and dependency, communicated trade-offs, protected critical quality checks, and delivered the result.',
    criteria: [
      { id: 'pressure', label: 'describe real deadline or competing priorities', keywords: ['deadline', 'pressure', 'urgent', 'priority', 'time'] },
      { id: 'process', label: 'explain prioritization, communication, or checking', keywords: ['prioritize', 'communicate', 'check', 'review', 'plan'] },
    ],
  },
  {
    id: 'beh-5',
    category: 'Behavioral',
    difficulty: 'Core',
    prompt: 'What is your greatest weakness?',
    strongAnswer:
      'Choose a real but non-fatal weakness. Explain how you identified it, what concrete steps you are taking to improve, and evidence that the behavior is changing. Avoid fake weaknesses or something that directly disqualifies you from the role.',
    criteria: [
      { id: 'real', label: 'identify a real weakness', keywords: ['weakness', 'struggle', 'improve', 'issue'] },
      { id: 'action', label: 'explain concrete improvement actions', keywords: ['working on', 'practice', 'system', 'feedback', 'improve', 'progress'] },
    ],
  },
  {
    id: 'beh-6',
    category: 'Behavioral',
    difficulty: 'Advanced',
    prompt: 'Why this bank?',
    strongAnswer:
      'Use specific evidence such as conversations with bankers, group strengths, relevant transactions, training, office structure, or culture examples, then explain why those details fit what you want to learn and contribute. The answer should not work unchanged for a competitor.',
    criteria: [
      { id: 'specific', label: 'use bank-specific evidence', keywords: ['conversation', 'deal', 'group', 'office', 'training', 'culture'] },
      { id: 'fit', label: 'explain why those specifics matter to you', keywords: ['fit', 'interest', 'learn', 'because', 'want'] },
    ],
  },
]
