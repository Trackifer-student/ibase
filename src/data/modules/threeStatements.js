import { makeLesson } from './lessonFactory'

export const threeStatementLessons = [
  makeLesson({
    id: 'linkage-framework',
    title: 'The Three-Statement Linkage Framework',
    summary: 'A repeatable method for tracing any accounting change through all three statements.',
    concepts: ['incomeStatement', 'cashFlowStatement', 'balanceSheet', 'accountingEquation'],
    eyebrow: 'MODULE 04',
    intro:
      'Three-statement questions feel difficult when you try to memorize dozens of isolated answers. They become much easier when you use the same sequence every time.',
    teachTitle: 'Start with the income statement, move to cash flow, then make the balance sheet balance.',
    paragraphs: [
      'First ask whether the event changes revenue, expenses, or another income-statement item.',
      'Second, take the resulting net income into the cash flow statement and reverse non-cash items or account for actual investing and financing cash movement.',
      'Third, update the ending cash balance and every affected asset, liability, and equity account on the balance sheet.',
      'Finally, verify that Assets = Liabilities + Equity. If it does not balance, your walkthrough is incomplete.',
    ],
    callout:
      'The order matters because net income links into both the cash flow statement and retained earnings.',
    scenarioTitle: 'Use the framework before touching numbers.',
    scenario:
      'A company buys equipment, records depreciation, sells on credit, or issues debt. The exact event changes, but your workflow does not.',
    workedSteps: [
      { label: '1. Income statement', text: 'Does the event change revenue, expenses, EBIT, taxes, or net income?' },
      { label: '2. Cash flow statement', text: 'Start with net income, reverse non-cash effects, then add investing or financing cash flows.' },
      { label: '3. Balance sheet', text: 'Update cash plus any operating, financing, or asset accounts affected.' },
      { label: '4. Balance check', text: 'Confirm Assets = Liabilities + Equity.' },
    ],
    takeaway:
      'Use one framework repeatedly instead of memorizing one-off answers.',
    mcq: {
      title: 'After determining the income-statement effect, what is usually the next step in a linkage walkthrough?',
      options: [
        'Move to the cash flow statement',
        'Guess the stock price',
        'Skip directly to enterprise value',
        'Ignore net income',
      ],
      correctIndex: 0,
      correctText: 'Net income is the starting point for the indirect cash flow statement, so that is the natural next step.',
      wrongText: 'The standard walkthrough is income statement → cash flow statement → balance sheet.',
    },
    written: {
      title: 'Why is the balance-sheet check useful at the end of a three-statement walkthrough?',
      body: 'Explain what a failure to balance tells you.',
      placeholder: 'If the balance sheet does not balance...',
      modelAnswer:
        'If the balance sheet does not balance, some effect of the transaction is missing or incorrect because the accounting equation must still hold after the event.',
      criteria: [
        { id: 'equation', label: 'recognize that the accounting equation must hold', keywords: ['balance', 'equation', 'assets', 'liabilities', 'equity'] },
        { id: 'error', label: 'recognize that imbalance signals a missing or incorrect effect', keywords: ['missing', 'wrong', 'incorrect', 'error', 'mistake'] },
      ],
    },
    completeTitle: 'You have the framework.',
    completeBody: 'The rest of this module is repetition with different transactions until the logic becomes automatic.',
  }),

  makeLesson({
    id: 'sale-on-credit',
    title: 'Sale on Credit',
    summary: 'What happens when revenue is earned before customer cash arrives.',
    concepts: ['revenue', 'accountsReceivable', 'netIncome', 'cashFlowStatement', 'retainedEarnings'],
    intro:
      'A credit sale is one of the cleanest ways to see why accounting profit and cash can diverge.',
    teachTitle: 'Revenue can rise before cash does.',
    paragraphs: [
      'When a company delivers a product or service and earns revenue, the income statement can recognize that revenue even if the customer will pay later.',
      'The unpaid amount becomes accounts receivable on the balance sheet.',
      'Because net income includes revenue that has not yet been collected, the increase in accounts receivable is subtracted in cash flow from operations under the indirect method.',
      'Retained earnings rises by the after-tax net income effect, while cash does not increase from the sale itself.',
    ],
    callout:
      'Accounts receivable is the balance-sheet bridge between revenue recognized now and cash collected later.',
    scenarioTitle: 'A company makes a $100 sale on credit.',
    scenario:
      'Assume the service costs nothing to deliver and ignore taxes for the moment.',
    workedSteps: [
      { label: 'Income statement', text: 'Revenue and net income increase by $100.' },
      { label: 'Cash flow statement', text: 'Start with +$100 net income and subtract the $100 increase in AR, so cash flow is $0.' },
      { label: 'Balance sheet assets', text: 'AR rises by $100; cash is unchanged.' },
      { label: 'Balance sheet equity', text: 'Retained earnings rises by $100.' },
      { label: 'Balance check', text: 'Assets +$100 = Equity +$100.' },
    ],
    takeaway:
      'A credit sale can increase profit and equity without increasing cash yet.',
    numberCheck: {
      title: 'A company records $80 of credit revenue with no costs or taxes. How much does cash increase immediately?',
      answer: 0,
      suffix: 'dollars',
      explanation: 'AR rises by $80, but no customer cash has been collected yet.',
      reviewConcepts: ['accountsReceivable', 'cash'],
    },
    mcq: {
      title: 'Why is an increase in accounts receivable subtracted on the cash flow statement?',
      options: [
        'Because some recognized revenue has not yet been collected in cash',
        'Because receivables are debt',
        'Because revenue was never earned',
        'Because AR is a financing outflow',
      ],
      correctIndex: 0,
      correctText: 'The income statement included revenue that did not create current cash, so the indirect cash flow statement removes that non-cash portion.',
      wrongText: 'Ask whether the customer has actually paid the company yet.',
      reviewConcepts: ['accountsReceivable', 'cashFlowStatement'],
    },
  }),

  makeLesson({
    id: 'collect-receivable',
    title: 'Collecting Accounts Receivable',
    summary: 'Why collecting a receivable moves cash but creates no new revenue.',
    concepts: ['accountsReceivable', 'cash', 'cashFlowFromOperations'],
    intro:
      'When a customer finally pays an existing receivable, the company is collecting cash for revenue it already recognized earlier.',
    teachTitle: 'Collection changes assets, not current-period revenue.',
    paragraphs: [
      'The revenue was recorded when it was earned, so collecting the receivable does not create new revenue.',
      'Cash increases and accounts receivable decreases by the same amount.',
      'On the cash flow statement, a decrease in AR is a source of operating cash because previously uncollected revenue is now being converted into cash.',
      'Total assets can remain unchanged because one asset rises while another falls.',
    ],
    callout:
      'Do not double-count revenue when cash is collected later.',
    scenarioTitle: 'A customer pays a $60 receivable.',
    scenario:
      'The company recognized the revenue in an earlier period.',
    workedSteps: [
      { label: 'Income statement', text: 'No new revenue or profit is created from the collection.' },
      { label: 'Cash flow statement', text: 'A $60 decrease in AR contributes +$60 to CFO.' },
      { label: 'Balance sheet cash', text: 'Cash increases $60.' },
      { label: 'Balance sheet AR', text: 'Accounts receivable decreases $60.' },
      { label: 'Balance check', text: 'Total assets are unchanged.' },
    ],
    takeaway:
      'Collecting AR converts one asset into another: receivable becomes cash.',
    mcq: {
      title: 'A company collects cash from a customer for revenue recognized last quarter. What happens to current-quarter revenue?',
      options: [
        'No new revenue is recognized from the collection',
        'Revenue increases again',
        'Revenue decreases',
        'Debt increases',
      ],
      correctIndex: 0,
      correctText: 'The revenue was already recognized when earned. Collection simply reduces AR and raises cash.',
      wrongText: 'Avoid recognizing the same sale twice.',
      reviewConcepts: ['accountsReceivable', 'revenue'],
    },
  }),

  makeLesson({
    id: 'inventory-cycle',
    title: 'Inventory Purchase & Sale',
    summary: 'Trace inventory from cash purchase to COGS and customer sale.',
    concepts: ['inventory', 'cash', 'costOfGoodsSold', 'grossProfit'],
    intro:
      'Inventory creates two different events: buying the inventory and later selling it.',
    teachTitle: 'Buying inventory usually affects cash and assets first; selling it brings COGS onto the income statement.',
    paragraphs: [
      'When inventory is purchased for cash, the company exchanges one asset for another: cash falls and inventory rises.',
      'There is generally no immediate income-statement expense simply because inventory was purchased.',
      'When the inventory is sold, revenue is recognized and the cost of that inventory moves from the balance sheet into COGS on the income statement.',
      'This is a classic example of matching a cost with the period in which the related revenue is earned.',
    ],
    callout:
      'Purchase inventory ≠ expense inventory. The cost reaches the income statement when the inventory is sold.',
    scenarioTitle: 'Buy for $40, sell for $70.',
    scenario:
      'Assume cash purchase and cash sale, and ignore taxes.',
    workedSteps: [
      { label: 'Buy inventory', text: 'Cash −$40, inventory +$40. No income-statement effect yet.' },
      { label: 'Sell inventory', text: 'Revenue +$70 and COGS +$40, so profit +$30.' },
      { label: 'Cash flow', text: 'Across the full cycle, cash is +$30 net: −$40 purchase +$70 collection.' },
      { label: 'Balance sheet', text: 'Inventory returns to zero for the units sold, cash is +$30, and retained earnings is +$30.' },
    ],
    takeaway:
      'Inventory cost is capitalized on the balance sheet first and becomes COGS when the related product is sold.',
    numberCheck: {
      title: 'Inventory costs $55 and is sold for $90. Ignoring taxes and other costs, what is gross profit?',
      answer: 35,
      suffix: 'dollars',
      explanation: '$90 revenue − $55 COGS = $35 gross profit.',
      reviewConcepts: ['grossProfit', 'costOfGoodsSold'],
    },
    mcq: {
      title: 'What normally happens on the income statement when inventory is purchased but not yet sold?',
      options: [
        'No COGS is recorded yet',
        'COGS immediately equals the purchase price',
        'Revenue increases',
        'Interest expense increases',
      ],
      correctIndex: 0,
      correctText: 'The inventory cost remains on the balance sheet until the related inventory is sold.',
      wrongText: 'Separate buying inventory from expensing inventory.',
      reviewConcepts: ['inventory', 'costOfGoodsSold'],
    },
  }),

  makeLesson({
    id: 'depreciation-walkthrough',
    title: 'Depreciation Through the Three Statements',
    summary: 'Walk a non-cash operating expense through taxes, cash flow, PP&E, and retained earnings.',
    concepts: ['depreciation', 'ebit', 'netIncome', 'ppe', 'retainedEarnings'],
    intro:
      'Depreciation is one of the most common technical interview walkthroughs because it touches every statement.',
    teachTitle: 'A non-cash expense still changes taxes, asset value, and equity.',
    paragraphs: [
      'Depreciation reduces EBIT on the income statement.',
      'Lower pre-tax income reduces taxes, so the net-income decline is smaller than the depreciation expense when taxes are considered.',
      'On the cash flow statement, depreciation is added back because it was non-cash in the current period.',
      'PP&E falls through accumulated depreciation, cash rises by the tax savings relative to the no-depreciation case, and retained earnings falls by the after-tax net-income effect.',
    ],
    callout:
      'With a tax rate t, a $D depreciation increase reduces net income by D × (1 − t) and increases cash by the tax shield D × t, all else equal.',
    scenarioTitle: '$10 more depreciation at a 25% tax rate.',
    scenario:
      'Assume depreciation is the only change.',
    workedSteps: [
      { label: 'Income statement', text: 'EBIT −$10; taxes fall $2.50; net income −$7.50.' },
      { label: 'Cash flow statement', text: 'Start with −$7.50 net income and add back $10 depreciation, so cash increases $2.50.' },
      { label: 'Balance sheet assets', text: 'Cash +$2.50 and PP&E −$10, so assets −$7.50.' },
      { label: 'Balance sheet equity', text: 'Retained earnings −$7.50.' },
      { label: 'Balance check', text: 'Assets −$7.50 = Equity −$7.50.' },
    ],
    takeaway:
      'Depreciation lowers earnings but can increase cash through tax savings because the expense itself is non-cash.',
    numberCheck: {
      title: '$20 of additional depreciation occurs at a 30% tax rate. By how much does net income fall?',
      answer: 14,
      suffix: 'dollars',
      explanation: '$20 × (1 − 30%) = $14 after-tax reduction in net income.',
      reviewConcepts: ['depreciation', 'netIncome'],
    },
    mcq: {
      title: 'Why can cash increase when depreciation expense increases?',
      options: [
        'Because depreciation creates a tax shield while requiring no new current-period cash payment',
        'Because depreciation is revenue',
        'Because PP&E becomes cash',
        'Because taxes always become zero',
      ],
      correctIndex: 0,
      correctText: 'Depreciation reduces taxable income, creating tax savings, while the expense itself is non-cash.',
      wrongText: 'Focus on the combination of non-cash expense and lower taxes.',
      reviewConcepts: ['depreciation', 'cash'],
    },
  }),

  makeLesson({
    id: 'capex-walkthrough',
    title: 'CapEx Through the Three Statements',
    summary: 'Separate the cash purchase of an asset from the later depreciation expense.',
    concepts: ['capex', 'ppe', 'cashFlowFromInvesting', 'depreciation'],
    intro:
      'CapEx and depreciation are connected economically, but they happen at different times and in different places on the statements.',
    teachTitle: 'CapEx moves cash into PP&E today; depreciation expenses that asset over time.',
    paragraphs: [
      'When a company buys equipment for cash, cash flow from investing records a CapEx outflow.',
      'PP&E increases on the balance sheet and cash decreases by the same amount at purchase.',
      'There is generally no immediate income-statement expense equal to the full CapEx amount.',
      'Future depreciation gradually reduces EBIT and PP&E book value.',
    ],
    callout:
      'CapEx is a cash-flow event first. Depreciation is an accounting-expense event later.',
    scenarioTitle: 'Buy $100 of equipment for cash.',
    scenario:
      'Assume the equipment is placed into service immediately but ignore depreciation on day one.',
    workedSteps: [
      { label: 'Income statement', text: 'No immediate $100 operating expense from the purchase itself.' },
      { label: 'Cash flow statement', text: 'CFI includes −$100 of CapEx.' },
      { label: 'Balance sheet', text: 'Cash −$100; PP&E +$100.' },
      { label: 'Balance check', text: 'Total assets are unchanged at purchase.' },
    ],
    takeaway:
      'CapEx initially changes the composition of assets rather than current profit.',
    mcq: {
      title: 'What is the immediate balance-sheet effect of buying $50 of equipment for cash?',
      options: [
        'Cash −$50 and PP&E +$50',
        'Cash +$50 and debt +$50',
        'Revenue +$50',
        'Retained earnings −$50 immediately',
      ],
      correctIndex: 0,
      correctText: 'The company exchanges cash for another asset, PP&E.',
      wrongText: 'At purchase, think asset swap before later depreciation.',
      reviewConcepts: ['capex', 'ppe', 'cash'],
    },
  }),

  makeLesson({
    id: 'working-capital-walkthroughs',
    title: 'Working Capital Walkthroughs',
    summary: 'Trace AR, inventory, and AP changes through operating cash flow.',
    concepts: ['accountsReceivable', 'inventory', 'accountsPayable', 'workingCapital'],
    intro:
      'Working-capital interview questions are mostly about translating balance-sheet changes into cash consequences.',
    teachTitle: 'Operating assets and operating liabilities usually move cash in opposite directions.',
    paragraphs: [
      'An increase in accounts receivable means more reported revenue has not yet been collected, so it is generally a use of cash.',
      'An increase in inventory means the company has tied up more cash in goods not yet sold, so it is generally a use of cash.',
      'An increase in accounts payable means the company has delayed payment to suppliers, so it is generally a source of cash.',
      'The income-statement effect depends on the underlying transaction, but the cash-flow adjustment comes from the change in the balance-sheet account.',
    ],
    callout:
      'Increase in operating asset = usually cash use. Increase in operating liability = usually cash source.',
    scenarioTitle: 'AR +$20, inventory +$10, AP +$15.',
    scenario:
      'Assume these are the only working-capital changes.',
    workedSteps: [
      { label: 'AR', text: '−$20 cash impact.' },
      { label: 'Inventory', text: '−$10 cash impact.' },
      { label: 'AP', text: '+$15 cash impact.' },
      { label: 'Net CFO effect', text: '−$20 − $10 + $15 = −$15.' },
    ],
    takeaway:
      'Working capital explains why operating cash flow can differ materially from net income.',
    numberCheck: {
      title: 'AR rises $25, inventory falls $5, and AP rises $10. What is the net cash effect?',
      answer: -10,
      suffix: 'dollars',
      explanation: 'AR −$25, inventory decrease +$5, AP +$10 = −$10 net cash effect.',
      reviewConcepts: ['accountsReceivable', 'inventory', 'accountsPayable'],
    },
    mcq: {
      title: 'All else equal, what does an increase in accounts payable do to CFO?',
      options: [
        'Increases CFO',
        'Decreases CFO',
        'Has no effect',
        'Increases CapEx',
      ],
      correctIndex: 0,
      correctText: 'The company has postponed cash payment to suppliers, preserving cash for the period.',
      wrongText: 'AP is an operating liability, so increasing it usually preserves cash.',
      reviewConcepts: ['accountsPayable', 'cashFlowFromOperations'],
    },
  }),

  makeLesson({
    id: 'deferred-revenue-walkthrough',
    title: 'Deferred Revenue Walkthrough',
    summary: 'Trace customer cash received before the related revenue is earned.',
    concepts: ['deferredRevenue', 'cash', 'revenue', 'liability'],
    intro:
      'Deferred revenue is the mirror image of accounts receivable: cash arrives before revenue.',
    teachTitle: 'Cash first creates a liability; revenue appears later as the company performs.',
    paragraphs: [
      'When a customer prepays, cash increases immediately.',
      'Because the company still owes future goods or services, deferred revenue increases as a liability.',
      'There is no immediate revenue for the unearned portion.',
      'As the company performs, deferred revenue declines and revenue is recognized without a new cash inflow.',
    ],
    callout:
      'AR = revenue before cash. Deferred revenue = cash before revenue.',
    scenarioTitle: 'A customer prepays $120 for a one-year service.',
    scenario:
      'Assume no cost to provide the service and equal monthly recognition.',
    workedSteps: [
      { label: 'At prepayment', text: 'Cash +$120; deferred revenue +$120; no revenue yet.' },
      { label: 'After one month', text: 'Revenue +$10 and deferred revenue −$10.' },
      { label: 'Cash flow at recognition', text: 'No new customer cash arrives because it was collected upfront.' },
      { label: 'Equity', text: 'Retained earnings rises as the revenue flows into net income.' },
    ],
    takeaway:
      'Deferred revenue converts a prior cash receipt into accounting revenue over time.',
    mcq: {
      title: 'Why does customer prepayment initially increase a liability?',
      options: [
        'Because the company still owes the customer future performance',
        'Because the customer becomes a lender',
        'Because cash is a liability',
        'Because revenue can never be recognized later',
      ],
      correctIndex: 0,
      correctText: 'The company received cash but has not yet satisfied the related obligation.',
      wrongText: 'Ask what the company still owes after receiving the cash.',
      reviewConcepts: ['deferredRevenue', 'liability'],
    },
  }),

  makeLesson({
    id: 'debt-issuance-repayment',
    title: 'Debt Issuance & Repayment',
    summary: 'Trace financing cash flows and balance-sheet debt without confusing them with revenue or expenses.',
    concepts: ['debt', 'cash', 'cashFlowFromFinancing', 'interest'],
    intro:
      'Borrowing money changes the company’s financing, but the amount borrowed is not revenue.',
    teachTitle: 'Debt issuance raises cash and a liability; repayment reverses both.',
    paragraphs: [
      'When a company borrows $100, cash increases by $100 and debt increases by $100.',
      'The borrowing appears as a financing cash inflow, not revenue on the income statement.',
      'When principal is repaid, cash falls and debt falls, generally through cash flow from financing.',
      'Interest expense is separate from principal repayment and does affect the income statement.',
    ],
    callout:
      'Principal changes the debt balance. Interest is the cost of using the debt.',
    scenarioTitle: 'Borrow $100, then later repay $40 of principal.',
    scenario:
      'Ignore interest for the initial walkthrough.',
    workedSteps: [
      { label: 'Issue debt', text: 'CFF +$100; cash +$100; debt +$100.' },
      { label: 'Income statement at issuance', text: 'No revenue or profit from simply borrowing money.' },
      { label: 'Repay $40 principal', text: 'CFF −$40; cash −$40; debt −$40.' },
      { label: 'Ending debt', text: '$60 remains outstanding.' },
    ],
    takeaway:
      'Borrowing and repaying principal are financing transactions, not operating profit.',
    numberCheck: {
      title: 'A company has $250 of debt, issues $80 more, then repays $30 of principal. What is ending debt?',
      answer: 300,
      suffix: 'million',
      explanation: '$250 + $80 − $30 = $300.',
      reviewConcepts: ['debt'],
    },
    mcq: {
      title: 'Where does issuing new debt normally appear on the cash flow statement?',
      options: [
        'Cash Flow from Financing',
        'Cash Flow from Investing',
        'Revenue',
        'COGS',
      ],
      correctIndex: 0,
      correctText: 'Debt issuance is a financing source of cash.',
      wrongText: 'Borrowing changes capital structure, so it belongs in financing cash flow.',
      reviewConcepts: ['cashFlowFromFinancing', 'debt'],
    },
  }),

  makeLesson({
    id: 'interest-and-taxes',
    title: 'Interest Expense & Taxes',
    summary: 'Understand the after-tax impact of financing costs.',
    concepts: ['interest', 'taxExpense', 'netIncome', 'debt'],
    intro:
      'Interest expense is one of the clearest ways capital structure affects net income.',
    teachTitle: 'Interest reduces pre-tax income, which also reduces taxes.',
    paragraphs: [
      'Interest expense sits below EBIT because it reflects financing rather than core operating performance.',
      'Higher interest lowers pre-tax income.',
      'Lower pre-tax income generally means lower taxes, creating an interest tax shield.',
      'The after-tax impact on net income is therefore smaller than the pre-tax interest expense when the company can use the tax deduction.',
    ],
    callout:
      'After-tax interest cost ≈ Interest × (1 − tax rate), in a simplified profitable-company case.',
    scenarioTitle: '$20 more interest at a 25% tax rate.',
    scenario:
      'Assume the company has enough taxable income to use the deduction.',
    workedSteps: [
      { label: 'Pre-tax income', text: 'Falls by $20.' },
      { label: 'Taxes', text: 'Fall by $5.' },
      { label: 'Net income', text: 'Falls by $15.' },
      { label: 'Cash', text: 'The company pays $20 of interest but saves $5 of taxes, for a net after-tax cash effect of −$15.' },
    ],
    takeaway:
      'Financing costs affect both earnings and taxes.',
    numberCheck: {
      title: '$30 of additional interest occurs at a 20% tax rate. By how much does net income fall?',
      answer: 24,
      suffix: 'dollars',
      explanation: '$30 × (1 − 20%) = $24 after-tax decline.',
      reviewConcepts: ['interest', 'netIncome'],
    },
    mcq: {
      title: 'Why is the after-tax cost of interest lower than the stated interest expense in this simplified case?',
      options: [
        'Because interest reduces taxable income and therefore taxes',
        'Because interest is non-cash',
        'Because debt becomes equity',
        'Because taxes increase when interest rises',
      ],
      correctIndex: 0,
      correctText: 'The tax deduction offsets part of the pre-tax interest cost.',
      wrongText: 'Think about how lower pre-tax income changes taxes.',
      reviewConcepts: ['interest', 'taxExpense'],
    },
  }),

  makeLesson({
    id: 'asset-sale',
    title: 'Selling an Asset: Gain or Loss',
    summary: 'Separate sale proceeds from the accounting gain or loss.',
    concepts: ['ppe', 'cash', 'netIncome', 'cashFlowFromInvesting'],
    intro:
      'When a company sells an asset, the cash received and the income-statement gain are not the same number.',
    teachTitle: 'Compare sale proceeds with book value to determine the gain or loss.',
    paragraphs: [
      'The asset sits on the balance sheet at a carrying or book value.',
      'When it is sold, the company receives cash equal to the sale proceeds.',
      'If proceeds exceed book value, the company records a gain. If proceeds are below book value, it records a loss.',
      'Under the indirect cash flow method, the gain or loss is reversed out of CFO because the full cash proceeds belong in investing cash flow.',
    ],
    callout:
      'Gain or loss = Sale proceeds − Book value.',
    scenarioTitle: 'Sell an asset with $60 book value for $80 cash.',
    scenario:
      'Ignore taxes.',
    workedSteps: [
      { label: 'Income statement', text: 'Record a $20 gain.' },
      { label: 'CFO', text: 'Subtract the $20 gain from net income because it is not operating cash flow.' },
      { label: 'CFI', text: 'Record the full +$80 cash proceeds.' },
      { label: 'Balance sheet', text: 'Cash +$80 and PP&E −$60, while retained earnings +$20 from the gain.' },
    ],
    takeaway:
      'The gain measures accounting profit; the sale proceeds measure cash received.',
    numberCheck: {
      title: 'An asset with $90 book value is sold for $70. What is the gain or loss?',
      answer: -20,
      suffix: 'dollars',
      placeholder: 'Use a negative number for a loss',
      explanation: '$70 proceeds − $90 book value = −$20, a $20 loss.',
      reviewConcepts: ['ppe'],
    },
    mcq: {
      title: 'If an asset is sold for $100 and its book value is $75, how much cash appears in investing cash flow?',
      options: [
        '$100',
        '$25',
        '$75',
        '$0',
      ],
      correctIndex: 0,
      correctText: 'The full sale proceeds are investing cash flow. The $25 difference is the accounting gain.',
      wrongText: 'Do not confuse the cash proceeds with the gain.',
    },
  }),

  makeLesson({
    id: 'impairment-writedown',
    title: 'Impairments & Write-Downs',
    summary: 'Trace a non-cash reduction in asset value through earnings and the balance sheet.',
    concepts: ['impairment', 'goodwill', 'intangibleAsset', 'netIncome'],
    intro:
      'An impairment recognizes that an asset on the balance sheet is no longer worth its recorded carrying value.',
    teachTitle: 'A write-down can reduce earnings and asset value without a current cash payment.',
    paragraphs: [
      'If an asset’s carrying value is no longer supported, accounting may require an impairment expense.',
      'The impairment reduces pre-tax income and net income.',
      'Because the expense itself is non-cash in the current period, it is generally added back on the indirect cash flow statement.',
      'The affected asset decreases on the balance sheet, and retained earnings falls by the after-tax net-income effect.',
    ],
    callout:
      'Impairment is a current accounting recognition of lost asset value, not a new cash purchase.',
    scenarioTitle: '$40 impairment at a 25% tax rate.',
    scenario:
      'Assume the impairment is tax-deductible for this simplified example.',
    workedSteps: [
      { label: 'Income statement', text: 'Pre-tax income −$40; taxes −$10; net income −$30.' },
      { label: 'Cash flow statement', text: 'Add back the $40 non-cash impairment, so cash is +$10 versus the no-impairment case because of tax savings.' },
      { label: 'Balance sheet assets', text: 'The impaired asset −$40 and cash +$10 = assets −$30.' },
      { label: 'Balance sheet equity', text: 'Retained earnings −$30.' },
    ],
    takeaway:
      'A non-cash write-down can reduce net income and book asset value while leaving current cash largely unchanged except for tax effects.',
    mcq: {
      title: 'Why is an impairment commonly added back on the indirect cash flow statement?',
      options: [
        'Because it reduces net income without a matching current-period cash outflow',
        'Because impairment is revenue',
        'Because it increases debt',
        'Because goodwill is cash',
      ],
      correctIndex: 0,
      correctText: 'The expense is accounting recognition of lower asset value, not a new current-period cash payment.',
      wrongText: 'Focus on whether the expense itself caused cash to leave during the period.',
      reviewConcepts: ['impairment', 'cashFlowStatement'],
    },
    completeTitle: 'Three-Statement Linkages complete.',
    completeBody:
      'You now have a framework for tracing operating, investing, financing, and non-cash events across the statements. Next comes corporate finance: how companies think about risk, return, capital structure, and the cost of capital.',
  }),
]
