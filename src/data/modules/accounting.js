export const accountingLessons = [
  {
    id: 'why-accounting-matters',
    title: 'Why Accounting Matters in Investment Banking',
    summary:
      'Why accounting is the language underneath valuation, modeling, and deal analysis.',
    concepts: ['accounting', 'financialStatement'],
    prerequisites: ['accounting', 'financialStatement'],
    steps: [
      {
        type: 'intro',
        eyebrow: 'START WITH THE WHY',
        title: 'Accounting turns a business into information you can analyze.',
        body:
          'Investment bankers do not value a logo or a product in the abstract. They analyze a real business: what it sells, what it costs to operate, what it owns, what it owes, and how much cash it produces.',
        noteTitle: 'The point of this module',
        note:
          'You are not trying to become an accountant. You are learning enough [[accounting|accounting]] to understand the financial logic behind banking work.',
      },
      {
        type: 'teach',
        eyebrow: 'WHY BANKERS CARE',
        title: 'Almost every technical banking task starts with financial statements.',
        paragraphs: [
          'A banker researching a company starts with its reported financial information.',
          'A valuation model uses revenue, profit, cash flow, debt, cash, and other accounting data as inputs.',
          'An M&A model needs to understand how two companies’ financial statements will combine.',
          'A lender or sponsor needs to know whether the business can generate enough cash to support debt.',
          'If the underlying financial statements are misunderstood, the analysis built on top of them will also be wrong.',
        ],
        calloutTitle: 'Useful mental model',
        callout:
          'Accounting describes what happened financially. Finance uses that information to make decisions about value, funding, and transactions.',
      },
      {
        type: 'worked',
        eyebrow: 'FROM BUSINESS EVENT TO BANKING ANALYSIS',
        title: 'Imagine a company sells $1 million of software.',
        scenario:
          'The sale sounds simple, but a banker immediately has several follow-up questions.',
        workedSteps: [
          {
            label: 'Revenue',
            text:
              'Was the $1 million actually earned during this period?',
          },
          {
            label: 'Cash',
            text:
              'Did the customer already pay, or is the company still waiting to collect?',
          },
          {
            label: 'Profit',
            text:
              'What costs were required to generate the sale?',
          },
          {
            label: 'Balance sheet',
            text:
              'Did the transaction create a receivable, deferred revenue, or another balance sheet account?',
          },
          {
            label: 'Valuation',
            text:
              'Is this sale recurring, profitable, and likely to continue in the future?',
          },
        ],
        takeaway:
          'Accounting gives the structure needed to answer the first four questions before finance can tackle the fifth.',
      },
      {
        type: 'mcq',
        eyebrow: 'CHECK YOUR MODEL',
        title:
          'Why does an investment banking analyst need accounting knowledge?',
        options: [
          'Because valuation and modeling depend on understanding financial statements',
          'Because bankers mainly prepare personal tax returns',
          'Because accounting makes valuation unnecessary',
          'Because only accountants can read public-company filings',
        ],
        correctIndex: 0,
        correctTitle: 'Exactly.',
        correctText:
          'Bankers rely on financial statements to understand companies before building valuation, financing, and transaction analysis.',
        wrongTitle: 'Think about the input to the analysis.',
        wrongText:
          'A banking model is only as useful as the financial information and accounting logic underneath it.',
        reviewConcepts: ['accounting', 'financialStatement'],
      },
      {
        type: 'written',
        eyebrow: 'EXPLAIN THE WHY',
        title:
          'Why would misunderstanding a company’s accounting create problems in a valuation model?',
        body:
          'Answer in plain English. Focus on the connection between the financial statements and the model.',
        placeholder:
          'If the financial statements are misunderstood, then...',
        modelAnswer:
          'Valuation models use financial-statement numbers and accounting relationships as inputs, so misunderstanding the accounting can lead to incorrect revenue, profit, cash flow, debt, or other assumptions and therefore a bad valuation.',
        reviewConcepts: ['accounting', 'financialStatement', 'valuation'],
        rubric: {
          criteria: [
            {
              id: 'inputs',
              label:
                'recognize that valuation or modeling uses accounting information as an input',
              keywords: [
                'input',
                'inputs',
                'financial statements',
                'numbers',
                'data',
                'model',
                'valuation',
                'accounting',
              ],
            },
            {
              id: 'consequence',
              label:
                'explain that bad accounting understanding can produce incorrect analysis or value',
              keywords: [
                'wrong',
                'incorrect',
                'bad',
                'mistake',
                'misstate',
                'misleading',
                'valuation',
                'cash flow',
                'profit',
                'revenue',
              ],
            },
          ],
        },
      },
      {
        type: 'complete',
        title: 'Accounting is the foundation, not the destination.',
        body:
          'Next we rebuild the income statement from the most basic pieces: revenue, expenses, and profit.',
        takeaway:
          'Bankers use accounting to understand the business before they value it, finance it, or advise on a transaction.',
      },
    ],
  },

  {
    id: 'revenue-expenses-profit',
    title: 'Revenue, Expenses & Profit',
    summary:
      'Build the basic economic engine before adding accounting detail.',
    concepts: [
      'revenue',
      'expense',
      'profit',
      'costOfGoodsSold',
      'grossProfit',
      'operatingExpense',
    ],
    prerequisites: ['revenue', 'expense', 'profit'],
    steps: [
      {
        type: 'intro',
        eyebrow: 'THE ECONOMIC ENGINE',
        title: 'A business sells something, incurs costs, and hopes something is left over.',
        body:
          'Every income statement becomes easier once you can separate three ideas: money generated from customers, costs required to run the business, and the profit that remains.',
        noteTitle: 'Start simple',
        note:
          'Do not jump straight to EBITDA or free cash flow. First make [[revenue|revenue]], [[expense|expenses]], and [[profit|profit]] feel obvious.',
      },
      {
        type: 'teach',
        eyebrow: 'FIRST LAYER',
        title: 'Revenue tells you how much the business sold.',
        paragraphs: [
          'Revenue is the value of goods or services sold during a period.',
          'If a company sells 1,000 subscriptions for $20 each, it generates $20,000 of revenue.',
          'Revenue is sometimes called the top line because it appears near the top of the income statement.',
          'Revenue alone does not tell you whether the company made money because the company also had to incur costs.',
        ],
        calloutTitle: 'Do not confuse',
        callout:
          'Revenue is sales before subtracting expenses. It is not the same thing as profit or cash.',
      },
      {
        type: 'teach',
        eyebrow: 'SECOND LAYER',
        title: 'Not all expenses sit in the same place.',
        paragraphs: [
          'Some costs are closely tied to producing or delivering what the company sells. These are often included in [[costOfGoodsSold|cost of goods sold]], or COGS.',
          'Other costs are required to run the broader organization, such as sales teams, headquarters, and research. These are often [[operatingExpense|operating expenses]].',
          'Separating cost categories lets analysts see where profit is being created or consumed.',
          'The exact labels vary by industry, so always understand the economics rather than memorizing one company’s wording.',
        ],
        calloutTitle: 'Example',
        callout:
          'For a retailer, the cost of merchandise sold is usually COGS. Corporate salaries and advertising are more likely operating expenses.',
      },
      {
        type: 'worked',
        eyebrow: 'FOLLOW ONE INCOME STATEMENT',
        title: 'A simple business generates $1,000 of revenue.',
        scenario:
          'The company has $600 of direct product costs and $250 of other operating expenses.',
        workedSteps: [
          {
            label: 'Revenue',
            text: '$1,000.',
          },
          {
            label: 'Less COGS',
            text: '$1,000 − $600 = $400 of [[grossProfit|gross profit]].',
          },
          {
            label: 'Less operating expenses',
            text: '$400 − $250 = $150 of simplified operating profit.',
          },
          {
            label: 'What changed?',
            text:
              'Each layer tells you how much of the original revenue remains after another category of cost.',
          },
        ],
        takeaway:
          'Income statements are easier when you view them as a series of profit layers rather than a wall of line items.',
      },
      {
        type: 'number',
        eyebrow: 'CALCULATE GROSS PROFIT',
        title:
          'A company generates $900 million of revenue and has $540 million of COGS. What is gross profit?',
        answer: 360,
        tolerance: 0.01,
        suffix: 'million',
        placeholder: 'Enter gross profit',
        explanation:
          '$900 million − $540 million = $360 million of gross profit.',
        reviewConcepts: ['revenue', 'costOfGoodsSold', 'grossProfit'],
      },
      {
        type: 'mcq',
        eyebrow: 'CHECK THE DISTINCTION',
        title:
          'A company grows revenue by $20 million while every expense stays exactly the same. What happens to profit?',
        options: [
          'Profit increases by $20 million',
          'Profit decreases by $20 million',
          'Profit must remain unchanged',
          'Revenue becomes an asset',
        ],
        correctIndex: 0,
        correctTitle: 'Right.',
        correctText:
          'If expenses truly remain unchanged, the additional revenue flows through to additional profit.',
        wrongTitle: 'Keep the equation simple.',
        wrongText:
          'Profit is revenue minus expenses. Higher revenue with unchanged expenses means higher profit.',
        reviewConcepts: ['revenue', 'expense', 'profit'],
      },
      {
        type: 'complete',
        title: 'You now understand the basic shape of profitability.',
        body:
          'The next complication is timing: accounting profit and cash can move at different times.',
        takeaway:
          'Revenue is reduced by different categories of expenses to create different layers of profit.',
      },
    ],
  },

  {
    id: 'cash-vs-accrual',
    title: 'Cash vs. Accrual Accounting',
    summary:
      'Why earning revenue, recording expenses, and moving cash can happen at different times.',
    concepts: [
      'accrualAccounting',
      'accountsReceivable',
      'accountsPayable',
      'deferredRevenue',
      'cash',
    ],
    prerequisites: ['revenue', 'expense', 'cash'],
    steps: [
      {
        type: 'intro',
        eyebrow: 'THE TIMING PROBLEM',
        title: 'Economic activity and cash movement do not always happen together.',
        body:
          'A business can earn revenue before a customer pays. It can receive cash before earning revenue. It can incur an expense before paying the supplier. Accrual accounting exists partly to handle those timing differences.',
        noteTitle: 'Core principle',
        note:
          'Under [[accrualAccounting|accrual accounting]], revenue is generally recognized when earned and expenses when incurred, not simply whenever cash moves.',
      },
      {
        type: 'worked',
        eyebrow: 'CASE 1: REVENUE BEFORE CASH',
        title: 'You finish $10,000 of work today. The customer pays next month.',
        scenario:
          'The economic work is complete, but the cash has not arrived.',
        workedSteps: [
          {
            label: 'Revenue',
            text:
              'The company can recognize $10,000 of revenue because it earned it.',
          },
          {
            label: 'Cash',
            text:
              'Cash does not increase yet because the customer has not paid.',
          },
          {
            label: 'Balance sheet',
            text:
              '[[accountsReceivable|Accounts receivable]] increases by $10,000 because the customer owes the company money.',
          },
          {
            label: 'Later collection',
            text:
              'When the customer pays, cash rises and accounts receivable falls. No new revenue is created at that point because the revenue was already recognized.',
          },
        ],
        takeaway:
          'Accounts receivable is the bridge between earned revenue and cash collected later.',
      },
      {
        type: 'worked',
        eyebrow: 'CASE 2: EXPENSE BEFORE CASH',
        title: 'A supplier delivers $4,000 of materials today and lets you pay next month.',
        scenario:
          'The company has received the economic benefit, but the supplier has not yet been paid.',
        workedSteps: [
          {
            label: 'Obligation',
            text:
              'The company now owes the supplier $4,000.',
          },
          {
            label: 'Balance sheet',
            text:
              '[[accountsPayable|Accounts payable]] increases.',
          },
          {
            label: 'Cash',
            text:
              'Cash does not fall until the company actually pays the supplier.',
          },
        ],
        takeaway:
          'Accounts payable is one example of an obligation that can exist before the related cash payment.',
      },
      {
        type: 'worked',
        eyebrow: 'CASE 3: CASH BEFORE REVENUE',
        title: 'A customer prepays $1,200 for a one-year subscription.',
        scenario:
          'The company receives the cash now but still owes twelve months of service.',
        workedSteps: [
          {
            label: 'Cash',
            text:
              'Cash increases immediately by $1,200.',
          },
          {
            label: 'Revenue',
            text:
              'The company has not yet earned the full $1,200 of revenue.',
          },
          {
            label: 'Balance sheet',
            text:
              'The unearned amount is recorded as [[deferredRevenue|deferred revenue]], a liability.',
          },
          {
            label: 'Over time',
            text:
              'As the company provides the service, deferred revenue declines and revenue is recognized.',
          },
        ],
        takeaway:
          'Cash can arrive before revenue just as revenue can appear before cash.',
      },
      {
        type: 'mcq',
        eyebrow: 'TIMING CHECK',
        title:
          'A company earns $50 of revenue today but will collect the customer cash next month. What is the most likely immediate effect?',
        options: [
          'Revenue rises and accounts receivable rises',
          'Cash rises and no revenue is recorded',
          'Debt automatically rises',
          'Deferred revenue rises',
        ],
        correctIndex: 0,
        correctTitle: 'Exactly.',
        correctText:
          'The company earned the revenue, but because cash has not arrived, the amount owed by the customer appears as accounts receivable.',
        wrongTitle: 'Separate earning from collecting.',
        wrongText:
          'Under accrual accounting, revenue can be recognized before the related cash is collected.',
        reviewConcepts: ['accrualAccounting', 'accountsReceivable', 'cash'],
      },
      {
        type: 'fill',
        eyebrow: 'VOCABULARY CHECK',
        title:
          'Revenue recognized before the customer pays commonly creates accounts ______.',
        answer: 'receivable',
        alternatives: ['accounts receivable'],
        hint:
          'This asset represents money customers still owe the company.',
        successText:
          'Correct. Accounts receivable represents amounts customers owe for revenue already recognized.',
        reviewConcepts: ['accountsReceivable'],
      },
      {
        type: 'complete',
        title: 'You now understand why profit and cash can differ.',
        body:
          'Next we organize revenue and expenses into the first major financial statement: the income statement.',
        takeaway:
          'Accrual accounting separates the timing of economic recognition from the timing of cash movement.',
      },
    ],
  },

  {
    id: 'income-statement',
    title: 'The Income Statement',
    summary:
      'Follow the company from revenue down to net income and understand what each layer means.',
    concepts: [
      'incomeStatement',
      'revenue',
      'costOfGoodsSold',
      'grossProfit',
      'operatingExpense',
      'ebit',
      'interest',
      'taxExpense',
      'netIncome',
    ],
    prerequisites: ['revenue', 'expense', 'profit'],
    steps: [
      {
        type: 'intro',
        eyebrow: 'STATEMENT 1 OF 3',
        title: 'The income statement measures profitability over a period of time.',
        body:
          'It starts with what the company sold and works downward through different costs until it reaches bottom-line accounting profit.',
        noteTitle: 'Period, not snapshot',
        note:
          'An [[incomeStatement|income statement]] covers a period such as a quarter or a year. The balance sheet will be a snapshot at one specific date.',
      },
      {
        type: 'list',
        eyebrow: 'THE BASIC FLOW',
        title: 'Read the income statement from top to bottom.',
        body:
          'Real companies use different labels, but the economic sequence usually looks like this.',
        items: [
          'Revenue',
          'Less: Cost of Goods Sold',
          'Equals: Gross Profit',
          'Less: Operating Expenses',
          'Equals: Operating Income / EBIT',
          'Less: Interest and other non-operating items',
          'Less: Taxes',
          'Equals: Net Income',
        ],
        noteTitle: 'Why the layers matter',
        note:
          'Each subtotal answers a different question about where the company is making or losing money.',
      },
      {
        type: 'worked',
        eyebrow: 'BUILD ONE FROM SCRATCH',
        title: 'A simplified company has $1,000 of revenue.',
        scenario:
          'Assume $600 of COGS, $200 of operating expenses, $50 of interest expense, and a 25% tax rate on pre-tax income.',
        workedSteps: [
          {
            label: 'Revenue',
            text: '$1,000.',
          },
          {
            label: 'Gross profit',
            text:
              '$1,000 − $600 = $400 of [[grossProfit|gross profit]].',
          },
          {
            label: 'EBIT',
            text:
              '$400 − $200 = $200 of [[ebit|EBIT]], or operating income.',
          },
          {
            label: 'Pre-tax income',
            text:
              '$200 − $50 of interest = $150.',
          },
          {
            label: 'Taxes',
            text:
              '25% × $150 = $37.50 of tax expense.',
          },
          {
            label: 'Net income',
            text:
              '$150 − $37.50 = $112.50 of [[netIncome|net income]].',
          },
        ],
        takeaway:
          'The income statement is a waterfall: each new category of cost reduces the profit available at the next level.',
      },
      {
        type: 'teach',
        eyebrow: 'WHAT EACH PROFIT LEVEL TELLS YOU',
        title: 'Different profit measures isolate different parts of the business.',
        paragraphs: [
          'Gross profit focuses on revenue after direct production or delivery costs.',
          'EBIT focuses on operating profitability before interest and taxes.',
          'Net income includes financing costs, taxes, and other items and therefore represents bottom-line accounting profit attributable after those costs.',
          'Bankers use different profit measures for different questions, so the right metric depends on what you are trying to analyze.',
        ],
        calloutTitle: 'Interview habit',
        callout:
          'Do not say one profit measure is always “better.” Explain what it includes, what it excludes, and why that is useful for the question.',
      },
      {
        type: 'number',
        eyebrow: 'FULL FLOW CHECK',
        title:
          'Revenue is $800, COGS is $500, operating expenses are $180, and interest expense is $20. Ignoring taxes, what is pre-tax income?',
        answer: 100,
        tolerance: 0.01,
        suffix: 'million',
        placeholder: 'Enter pre-tax income',
        explanation:
          '$800 − $500 = $300 gross profit. $300 − $180 = $120 EBIT. $120 − $20 = $100 pre-tax income.',
        reviewConcepts: ['grossProfit', 'ebit', 'interest'],
      },
      {
        type: 'mcq',
        eyebrow: 'PLACEMENT CHECK',
        title:
          'Which item is generally subtracted after EBIT to help reach pre-tax income?',
        options: [
          'Interest expense',
          'Cash balance',
          'Accounts receivable',
          'Inventory',
        ],
        correctIndex: 0,
        correctTitle: 'Correct.',
        correctText:
          'Interest expense is a financing cost and is generally below operating income / EBIT.',
        wrongTitle: 'Think income statement, not balance sheet.',
        wrongText:
          'Cash, receivables, and inventory are balance sheet items. Interest expense is an income-statement cost.',
        reviewConcepts: ['ebit', 'interest', 'incomeStatement'],
      },
      {
        type: 'complete',
        title: 'The income statement now has a logical shape.',
        body:
          'Next we switch from performance over time to the company’s financial position at a single point in time.',
        takeaway:
          'The income statement moves from revenue through operating costs, financing costs, and taxes to reach net income.',
      },
    ],
  },

  {
    id: 'balance-sheet',
    title: 'The Balance Sheet',
    summary:
      'Understand what the company owns, what it owes, and how the accounting equation holds everything together.',
    concepts: [
      'balanceSheet',
      'asset',
      'liability',
      'equity',
      'accountingEquation',
      'retainedEarnings',
      'inventory',
      'ppe',
    ],
    prerequisites: ['asset', 'liability', 'equity'],
    steps: [
      {
        type: 'intro',
        eyebrow: 'STATEMENT 2 OF 3',
        title: 'The balance sheet is a snapshot of the company on one date.',
        body:
          'Instead of asking what happened during the quarter, it asks what resources the company controls and what claims exist against those resources right now.',
        noteTitle: 'Know this equation cold',
        note:
          '[[accountingEquation|Assets = Liabilities + Equity]].',
      },
      {
        type: 'concept',
        eyebrow: 'THREE BUCKETS',
        title: 'Everything fits into assets, liabilities, or equity.',
        body:
          'The categories are broad, but the underlying logic is straightforward.',
        cards: [
          {
            number: 'A',
            title: 'Assets',
            text:
              'Resources with economic value, such as cash, receivables, inventory, and PP&E.',
          },
          {
            number: 'L',
            title: 'Liabilities',
            text:
              'Obligations owed to other parties, such as accounts payable, deferred revenue, and debt.',
          },
          {
            number: 'E',
            title: 'Equity',
            text:
              'The accounting claim attributable to owners after liabilities.',
          },
        ],
        plainTitle: 'The relationship',
        plainText:
          'The company’s resources are financed by claims from creditors and owners, so the two sides of the balance sheet must balance.',
      },
      {
        type: 'teach',
        eyebrow: 'CURRENT VS. LONG-TERM',
        title: 'Timing also helps organize the balance sheet.',
        paragraphs: [
          'Assets expected to turn into cash or be used relatively soon are often classified as current assets. Cash, [[accountsReceivable|accounts receivable]], and [[inventory|inventory]] are common examples.',
          'Longer-lived operating assets such as [[ppe|property, plant & equipment]] are generally non-current.',
          'Current liabilities are obligations expected to be settled relatively soon, while debt and other obligations can also be long-term.',
          'The exact classification rules matter in accounting, but for banking you first need the economic meaning of each account.',
        ],
        calloutTitle: 'Classification question',
        callout:
          'Ask two things: What is this item economically, and when is it expected to turn into cash, be used, or be settled?',
      },
      {
        type: 'worked',
        eyebrow: 'MAKE THE EQUATION WORK',
        title: 'A company has $1,000 of assets and $650 of liabilities.',
        scenario:
          'What must shareholders’ equity equal?',
        workedSteps: [
          {
            label: 'Equation',
            text:
              'Assets = Liabilities + Equity.',
          },
          {
            label: 'Insert the numbers',
            text:
              '$1,000 = $650 + Equity.',
          },
          {
            label: 'Solve',
            text:
              'Equity = $350.',
          },
          {
            label: 'Interpretation',
            text:
              'The $1,000 of resources are financed by $650 of creditor claims and $350 of accounting equity.',
          },
        ],
        takeaway:
          'The balance sheet cannot be understood as a loose list of accounts; every account must fit into the accounting equation.',
      },
      {
        type: 'teach',
        eyebrow: 'ONE IMPORTANT EQUITY ACCOUNT',
        title: 'Net income can increase retained earnings.',
        paragraphs: [
          '[[retainedEarnings|Retained earnings]] sits within shareholders’ equity.',
          'When a company earns net income and does not distribute all of it to shareholders, retained earnings generally increases.',
          'That creates one of the major links between the income statement and balance sheet.',
        ],
        calloutTitle: 'Preview',
        callout:
          'You will use this link in the next two lessons when we connect all three statements.',
      },
      {
        type: 'number',
        eyebrow: 'BALANCE-SHEET CHECK',
        title:
          'A company has $720 of assets and $465 of liabilities. What is equity?',
        answer: 255,
        tolerance: 0.01,
        suffix: 'million',
        placeholder: 'Enter equity',
        explanation:
          '$720 − $465 = $255 of equity.',
        reviewConcepts: ['accountingEquation', 'asset', 'liability', 'equity'],
      },
      {
        type: 'mcq',
        eyebrow: 'CLASSIFY IT',
        title:
          'Which item is normally an asset rather than a liability?',
        options: [
          'Inventory held for sale',
          'Accounts payable owed to suppliers',
          'Debt owed to lenders',
          'Deferred revenue for service still owed to customers',
        ],
        correctIndex: 0,
        correctTitle: 'Right.',
        correctText:
          'Inventory is a resource the company controls and expects to sell or use, so it is an asset.',
        wrongTitle: 'Ask whether the company owns a resource or owes an obligation.',
        wrongText:
          'Accounts payable, debt, and deferred revenue are obligations. Inventory is a resource.',
        reviewConcepts: ['inventory', 'asset', 'liability'],
      },
      {
        type: 'complete',
        title: 'The balance sheet is now a system, not a memorization list.',
        body:
          'Next we learn the statement that explains how actual cash changed during the period.',
        takeaway:
          'The balance sheet is a point-in-time snapshot built around Assets = Liabilities + Equity.',
      },
    ],
  },

  {
    id: 'cash-flow-statement',
    title: 'The Cash Flow Statement',
    summary:
      'Reconcile accounting profit with actual cash movement across operations, investing, and financing.',
    concepts: [
      'cashFlowStatement',
      'cashFlowFromOperations',
      'cashFlowFromInvesting',
      'cashFlowFromFinancing',
      'cash',
      'netIncome',
    ],
    prerequisites: ['cashFlowStatement', 'netIncome', 'cash'],
    steps: [
      {
        type: 'intro',
        eyebrow: 'STATEMENT 3 OF 3',
        title: 'The cash flow statement explains why the cash balance changed.',
        body:
          'Net income is an accounting profit measure, not a direct record of cash collected and paid. The cash flow statement bridges that gap.',
        noteTitle: 'Indirect method',
        note:
          'Most public-company cash flow statements start with [[netIncome|net income]] and adjust it to reach actual operating cash flow.',
      },
      {
        type: 'concept',
        eyebrow: 'THREE SECTIONS',
        title: 'Group cash movement by what the company is doing.',
        body:
          'The sections help you separate the business itself from long-term investment and financing choices.',
        cards: [
          {
            number: 'CFO',
            title: 'Cash Flow from Operations',
            text:
              'Cash generated or used by the core business, including non-cash adjustments and working-capital changes.',
          },
          {
            number: 'CFI',
            title: 'Cash Flow from Investing',
            text:
              'Cash used for or generated by long-term assets, investments, and acquisitions.',
          },
          {
            number: 'CFF',
            title: 'Cash Flow from Financing',
            text:
              'Cash raised from or returned to lenders and shareholders.',
          },
        ],
        plainTitle: 'Ending cash',
        plainText:
          'CFO + CFI + CFF = Net Change in Cash. Beginning Cash + Net Change in Cash = Ending Cash.',
      },
      {
        type: 'worked',
        eyebrow: 'WHY START WITH NET INCOME?',
        title: 'Turn accounting earnings into operating cash flow.',
        scenario:
          'A company reports $100 of net income, $20 of depreciation, and a $15 increase in accounts receivable. Ignore everything else.',
        workedSteps: [
          {
            label: 'Start with net income',
            text:
              '$100.',
          },
          {
            label: 'Add back depreciation',
            text:
              'Depreciation reduced net income but did not require a new cash payment in this period, so add back $20.',
          },
          {
            label: 'Adjust for receivables',
            text:
              'Accounts receivable increased $15, meaning some reported revenue has not yet been collected in cash. Subtract $15.',
          },
          {
            label: 'Operating cash flow',
            text:
              '$100 + $20 − $15 = $105.',
          },
        ],
        takeaway:
          'The indirect cash flow statement asks: what made accounting profit different from actual cash generated by operations?',
      },
      {
        type: 'teach',
        eyebrow: 'INVESTING AND FINANCING',
        title: 'The other sections explain major uses and sources of capital.',
        paragraphs: [
          'Buying equipment with cash is generally a [[cashFlowFromInvesting|cash flow from investing]] outflow.',
          'Issuing debt is generally a [[cashFlowFromFinancing|cash flow from financing]] inflow.',
          'Repaying debt, paying dividends, or repurchasing shares are generally financing outflows.',
          'These sections do not tell you whether a decision was good or bad by themselves. They tell you where the cash moved.',
        ],
        calloutTitle: 'Analyst habit',
        callout:
          'Classify the economic activity first. Then think about the sign: did cash enter or leave the company?',
      },
      {
        type: 'number',
        eyebrow: 'NET CHANGE IN CASH',
        title:
          'CFO is +$180, CFI is −$120, and CFF is −$25. What is the net change in cash?',
        answer: 35,
        tolerance: 0.01,
        suffix: 'million',
        placeholder: 'Enter net change in cash',
        explanation:
          '$180 − $120 − $25 = a $35 million increase in cash.',
        reviewConcepts: [
          'cashFlowFromOperations',
          'cashFlowFromInvesting',
          'cashFlowFromFinancing',
        ],
      },
      {
        type: 'mcq',
        eyebrow: 'CLASSIFY IT',
        title:
          'A company spends $40 million of cash on new manufacturing equipment. Where does the cash outflow normally appear?',
        options: [
          'Cash Flow from Investing',
          'Cash Flow from Financing',
          'Revenue',
          'Shareholders’ Equity only',
        ],
        correctIndex: 0,
        correctTitle: 'Correct.',
        correctText:
          'Buying a long-lived asset is a capital expenditure and generally appears as an investing cash outflow.',
        wrongTitle: 'Think long-term asset investment.',
        wrongText:
          'Purchases of long-term assets are generally classified in cash flow from investing.',
        reviewConcepts: ['cashFlowFromInvesting', 'capex'],
      },
      {
        type: 'complete',
        title: 'You now know what each statement is trying to explain.',
        body:
          'Next we connect them into one integrated financial system.',
        takeaway:
          'The cash flow statement reconciles net income to cash and organizes cash movement into operating, investing, and financing activities.',
      },
    ],
  },

  {
    id: 'three-statements-connect',
    title: 'How the Three Statements Connect',
    summary:
      'See the financial statements as one integrated model rather than three separate reports.',
    concepts: [
      'netIncome',
      'retainedEarnings',
      'cashFlowStatement',
      'balanceSheet',
      'incomeStatement',
      'cash',
    ],
    prerequisites: ['incomeStatement', 'balanceSheet', 'cashFlowStatement'],
    steps: [
      {
        type: 'intro',
        eyebrow: 'CONNECT THE SYSTEM',
        title: 'The three statements describe one company, so they must connect.',
        body:
          'The income statement measures profit, the cash flow statement explains cash movement, and the balance sheet shows the ending financial position. Changes on one statement often flow into another.',
        noteTitle: 'Interview importance',
        note:
          'Understanding the connections matters more than memorizing three separate definitions.',
      },
      {
        type: 'list',
        eyebrow: 'THE FOUR LINKS TO KNOW FIRST',
        title: 'Start with the biggest connections.',
        body:
          'You do not need every edge case yet. Lock in these relationships first.',
        items: [
          'Net income flows from the income statement into the cash flow statement',
          'Net income also contributes to retained earnings within equity',
          'The cash flow statement calculates the period’s change in cash',
          'Ending cash from the cash flow statement appears on the ending balance sheet',
        ],
        noteTitle: 'One loop',
        note:
          'Income statement → cash flow statement → ending cash on the balance sheet, while net income also updates retained earnings.',
      },
      {
        type: 'worked',
        eyebrow: 'WALK ONE DOLLAR THROUGH',
        title: 'A company earns $50 of net income and nothing else changes.',
        scenario:
          'Assume no non-cash items, no working-capital changes, no investing or financing activity, and no dividends.',
        workedSteps: [
          {
            label: 'Income statement',
            text:
              'Net income is $50.',
          },
          {
            label: 'Cash flow statement',
            text:
              'With no adjustments, operating cash flow is $50 and net cash increases by $50.',
          },
          {
            label: 'Balance sheet cash',
            text:
              'Cash increases by $50.',
          },
          {
            label: 'Balance sheet equity',
            text:
              '[[retainedEarnings|Retained earnings]] also increases by $50 because the company kept the profit.',
          },
          {
            label: 'Does the balance sheet still balance?',
            text:
              'Yes. Assets rise $50 through cash, and equity rises $50 through retained earnings.',
          },
        ],
        takeaway:
          'The same underlying event can move through multiple statements while preserving the accounting equation.',
      },
      {
        type: 'worked',
        eyebrow: 'ADD A NON-CASH EXPENSE',
        title: 'Now add $10 of depreciation.',
        scenario:
          'Assume the company has $10 of depreciation expense and ignore taxes for the moment.',
        workedSteps: [
          {
            label: 'Income statement',
            text:
              'Depreciation reduces EBIT and net income by $10.',
          },
          {
            label: 'Cash flow statement',
            text:
              'Because depreciation is non-cash in the current period, add the $10 back in operating cash flow.',
          },
          {
            label: 'Balance sheet asset',
            text:
              'PP&E decreases by $10 through accumulated depreciation.',
          },
          {
            label: 'Balance sheet equity',
            text:
              'Lower net income means retained earnings is $10 lower than it otherwise would have been.',
          },
        ],
        takeaway:
          'A non-cash expense can reduce earnings and asset value without reducing current-period cash.',
      },
      {
        type: 'mcq',
        eyebrow: 'LINKAGE CHECK',
        title:
          'Where does the ending cash balance calculated on the cash flow statement ultimately appear?',
        options: [
          'On the balance sheet',
          'As revenue on the income statement',
          'As EBITDA',
          'Nowhere else',
        ],
        correctIndex: 0,
        correctTitle: 'Exactly.',
        correctText:
          'The cash flow statement explains the change in cash, and the resulting ending cash balance appears on the balance sheet.',
        wrongTitle: 'Think ending financial position.',
        wrongText:
          'Cash is an asset, so the ending cash balance belongs on the balance sheet.',
        reviewConcepts: ['cashFlowStatement', 'balanceSheet', 'cash'],
      },
      {
        type: 'written',
        eyebrow: 'EXPLAIN THE CONNECTION',
        title:
          'How does net income connect the income statement to the other two statements?',
        body:
          'Mention both the cash flow statement and the balance sheet.',
        placeholder:
          'Net income flows into..., and it also...',
        modelAnswer:
          'Net income starts the indirect cash flow statement and is adjusted to calculate cash from operations. Net income also increases retained earnings on the balance sheet, assuming it is not distributed through dividends or other adjustments.',
        reviewConcepts: [
          'netIncome',
          'cashFlowStatement',
          'retainedEarnings',
          'balanceSheet',
        ],
        rubric: {
          criteria: [
            {
              id: 'cashflow',
              label:
                'explain that net income feeds into the cash flow statement',
              keywords: [
                'cash flow statement',
                'cash flow',
                'cfo',
                'operating cash',
                'starts',
                'starting point',
              ],
            },
            {
              id: 'equity',
              label:
                'explain that net income affects retained earnings or equity',
              keywords: [
                'retained earnings',
                'equity',
                'shareholders equity',
                'balance sheet',
              ],
            },
          ],
        },
      },
      {
        type: 'complete',
        title: 'You now see one financial system instead of three isolated statements.',
        body:
          'Next we compare three profit measures bankers use constantly: EBITDA, EBIT, and net income.',
        takeaway:
          'Net income, cash, retained earnings, and balance sheet accounts create the core links between the three statements.',
      },
    ],
  },

  {
    id: 'ebitda-ebit-net-income',
    title: 'EBITDA, EBIT & Net Income',
    summary:
      'Understand what each profit measure includes, excludes, and is trying to tell you.',
    concepts: ['ebitda', 'ebit', 'netIncome', 'depreciation', 'amortization', 'interest', 'taxExpense'],
    prerequisites: ['incomeStatement', 'netIncome'],
    steps: [
      {
        type: 'intro',
        eyebrow: 'THREE PROFIT MEASURES',
        title: 'EBITDA, EBIT, and net income answer different questions.',
        body:
          'They are related, but they are not interchangeable. Each removes or includes different categories of cost.',
        noteTitle: 'The order',
        note:
          'EBITDA is generally above EBIT, and EBIT is generally above net income when the excluded expenses are positive.',
      },
      {
        type: 'concept',
        eyebrow: 'SIDE BY SIDE',
        title: 'Know what each measure excludes.',
        body:
          'The names tell you much of the answer.',
        cards: [
          {
            number: 'EBITDA',
            title: 'EBITDA',
            text:
              'Earnings before interest, taxes, depreciation, and amortization.',
          },
          {
            number: 'EBIT',
            title: 'EBIT',
            text:
              'Earnings before interest and taxes. Depreciation and amortization have already been deducted.',
          },
          {
            number: 'NI',
            title: 'Net Income',
            text:
              'Bottom-line accounting profit after operating costs, interest, taxes, and other relevant items.',
          },
        ],
        plainTitle: 'The bridge',
        plainText:
          'EBITDA − D&A = EBIT. EBIT − net interest and other items − taxes = Net Income, in a simplified flow.',
      },
      {
        type: 'worked',
        eyebrow: 'BRIDGE THE METRICS',
        title: 'Start with $200 of EBITDA.',
        scenario:
          'Assume $30 of depreciation and amortization, $20 of interest expense, and $30 of taxes.',
        workedSteps: [
          {
            label: 'EBITDA',
            text: '$200.',
          },
          {
            label: 'Subtract D&A',
            text:
              '$200 − $30 = $170 of EBIT.',
          },
          {
            label: 'Subtract interest',
            text:
              '$170 − $20 = $150 of pre-tax income.',
          },
          {
            label: 'Subtract taxes',
            text:
              '$150 − $30 = $120 of net income.',
          },
        ],
        takeaway:
          'Each step includes another category of cost that the higher profit measure excluded.',
      },
      {
        type: 'teach',
        eyebrow: 'WHY BANKERS USE EBITDA',
        title: 'EBITDA can help compare operating performance before financing and certain non-cash charges.',
        paragraphs: [
          'Because EBITDA excludes interest, it is less affected by how a company chooses to finance itself.',
          'Because it excludes taxes, it is less affected by tax structure and jurisdiction.',
          'Because it excludes depreciation and amortization, it removes those accounting charges from the metric.',
          'That can make EBITDA useful for certain comparisons and valuation multiples, but it does not mean EBITDA equals cash flow.',
        ],
        calloutTitle: 'Very important',
        callout:
          'EBITDA ignores capital expenditures, working-capital needs, taxes, and interest. A company can have strong EBITDA and still generate weak cash flow.',
      },
      {
        type: 'number',
        eyebrow: 'BRIDGE CHECK',
        title:
          'EBITDA is $150 and D&A is $25. What is EBIT?',
        answer: 125,
        tolerance: 0.01,
        suffix: 'million',
        placeholder: 'Enter EBIT',
        explanation:
          '$150 − $25 = $125 of EBIT.',
        reviewConcepts: ['ebitda', 'ebit', 'depreciation', 'amortization'],
      },
      {
        type: 'mcq',
        eyebrow: 'CONCEPT CHECK',
        title:
          'Which statement about EBITDA is most accurate?',
        options: [
          'EBITDA is a profit measure, but it is not the same as cash flow',
          'EBITDA equals ending cash',
          'EBITDA includes interest expense',
          'EBITDA is always lower than net income',
        ],
        correctIndex: 0,
        correctTitle: 'Exactly.',
        correctText:
          'EBITDA is widely used, but it does not capture all cash costs or investment needs.',
        wrongTitle: 'Do not turn EBITDA into cash.',
        wrongText:
          'EBITDA excludes several items that still matter economically, including CapEx, taxes, interest, and working capital.',
        reviewConcepts: ['ebitda', 'cashFlow'],
      },
      {
        type: 'complete',
        title: 'You now know what the three major profit measures are actually doing.',
        body:
          'Next we unpack depreciation and amortization, the items separating EBITDA from EBIT.',
        takeaway:
          'EBITDA, EBIT, and net income differ because each includes a different set of costs.',
      },
    ],
  },

  {
    id: 'depreciation-amortization',
    title: 'Depreciation & Amortization',
    summary:
      'Why companies spread the cost of long-lived assets over time and how non-cash expenses affect the statements.',
    concepts: ['depreciation', 'amortization', 'ppe', 'capex', 'ebitda', 'ebit'],
    prerequisites: ['ebitda', 'ebit', 'balanceSheet', 'cashFlowStatement'],
    steps: [
      {
        type: 'intro',
        eyebrow: 'COST OVER TIME',
        title: 'Buying a long-lived asset and expensing it are not always the same event.',
        body:
          'If a company buys equipment that will be used for years, accounting generally does not treat the full purchase price as an income-statement expense on day one.',
        noteTitle: 'The idea',
        note:
          '[[depreciation|Depreciation]] allocates the cost of tangible long-lived assets over time. [[amortization|Amortization]] often does something similar for certain intangible assets.',
      },
      {
        type: 'worked',
        eyebrow: 'TANGIBLE ASSET',
        title: 'A company buys a $100 machine with a five-year useful life.',
        scenario:
          'Assume straight-line depreciation, no salvage value, and ignore taxes.',
        workedSteps: [
          {
            label: 'Day 1 cash flow',
            text:
              'The company spends $100 of cash on [[capex|CapEx]].',
          },
          {
            label: 'Balance sheet',
            text:
              'The company records the machine in [[ppe|PP&E]] rather than taking a $100 operating expense immediately.',
          },
          {
            label: 'Annual depreciation',
            text:
              '$100 ÷ 5 years = $20 of annual depreciation expense.',
          },
          {
            label: 'Income statement',
            text:
              'Each year, the $20 depreciation expense reduces EBIT.',
          },
          {
            label: 'Cash flow statement',
            text:
              'Because the $20 depreciation expense is non-cash in that year, it is added back in CFO under the indirect method.',
          },
        ],
        takeaway:
          'The cash left when the asset was purchased. Depreciation is the later accounting allocation of that historical cost.',
      },
      {
        type: 'teach',
        eyebrow: 'WHY IT IS CALLED NON-CASH',
        title: 'Non-cash does not mean economically meaningless.',
        paragraphs: [
          'Depreciation does not require a new cash payment in the period the expense is recorded.',
          'But the underlying asset cost was real: the company already paid cash to acquire or build the asset.',
          'That is why analysts should not blindly add back depreciation and conclude it never matters.',
          'Capital-intensive businesses often need continuing CapEx to replace or expand the assets that are depreciating.',
        ],
        calloutTitle: 'Key distinction',
        callout:
          'Depreciation is non-cash in the current period. The asset itself was not free.',
      },
      {
        type: 'teach',
        eyebrow: 'AMORTIZATION',
        title: 'Amortization commonly applies to certain intangible assets.',
        paragraphs: [
          'A finite-lived intangible asset may be expensed over its useful life through amortization.',
          'Customer relationships, certain technologies, and other acquired intangible assets can create amortization expense.',
          'Like depreciation, amortization is generally added back in operating cash flow because the current-period expense is non-cash.',
          'In acquisition analysis, amortization can become important because deals can create new identifiable intangible assets.',
        ],
        calloutTitle: 'Remember the bridge',
        callout:
          'EBITDA − Depreciation − Amortization = EBIT, in the simplified bridge.',
      },
      {
        type: 'number',
        eyebrow: 'DEPRECIATION CHECK',
        title:
          'A $240 machine is depreciated straight-line over six years with no salvage value. What is annual depreciation?',
        answer: 40,
        tolerance: 0.01,
        suffix: 'million',
        placeholder: 'Enter annual depreciation',
        explanation:
          '$240 ÷ 6 = $40 per year.',
        reviewConcepts: ['depreciation', 'ppe'],
      },
      {
        type: 'mcq',
        eyebrow: 'STATEMENT EFFECT',
        title:
          'Why is depreciation added back on the cash flow statement under the indirect method?',
        options: [
          'Because it reduced net income without causing a new cash outflow in the current period',
          'Because the asset was free',
          'Because depreciation increases revenue',
          'Because depreciation is debt',
        ],
        correctIndex: 0,
        correctTitle: 'Correct.',
        correctText:
          'Depreciation is an accounting expense in the current period, but the related asset purchase cash outflow occurred separately.',
        wrongTitle: 'Focus on timing of cash.',
        wrongText:
          'The current depreciation expense lowers net income even though there is no matching current-period cash payment.',
        reviewConcepts: ['depreciation', 'cashFlowStatement'],
      },
      {
        type: 'complete',
        title: 'Depreciation and amortization now have an economic story.',
        body:
          'Next we focus on the cash investment that often creates depreciation in the first place: capital expenditures.',
        takeaway:
          'D&A spreads historical asset cost across time, reduces accounting profit, and is non-cash in the period recorded.',
      },
    ],
  },

  {
    id: 'capex',
    title: 'Capital Expenditures',
    summary:
      'Understand why buying long-lived assets affects cash immediately but earnings over time.',
    concepts: ['capex', 'ppe', 'depreciation', 'cashFlowFromInvesting'],
    prerequisites: ['depreciation', 'ppe', 'cashFlowStatement'],
    steps: [
      {
        type: 'intro',
        eyebrow: 'INVESTING IN THE BUSINESS',
        title: 'CapEx is cash spent on long-lived assets.',
        body:
          'Companies need buildings, servers, machinery, vehicles, and other long-lived assets to operate and grow. Buying or improving those assets usually creates capital expenditures.',
        noteTitle: 'The timing mismatch',
        note:
          '[[capex|CapEx]] is usually a cash outflow today, while the related [[depreciation|depreciation]] expense is recognized over future periods.',
      },
      {
        type: 'worked',
        eyebrow: 'THREE-STATEMENT VIEW',
        title: 'A company spends $60 on new equipment.',
        scenario:
          'Assume the equipment is purchased for cash and ignore taxes.',
        workedSteps: [
          {
            label: 'Cash flow statement',
            text:
              'Cash flow from investing includes a $60 CapEx outflow.',
          },
          {
            label: 'Balance sheet cash',
            text:
              'Cash decreases by $60.',
          },
          {
            label: 'Balance sheet PP&E',
            text:
              'PP&E increases by $60 initially.',
          },
          {
            label: 'Income statement today',
            text:
              'There is generally no immediate $60 operating expense solely because the equipment was purchased.',
          },
          {
            label: 'Future periods',
            text:
              'Depreciation expense gradually reduces the book value of the asset and lowers EBIT.',
          },
        ],
        takeaway:
          'CapEx changes the form of an asset from cash into a long-lived operating asset, then depreciation recognizes cost over time.',
      },
      {
        type: 'teach',
        eyebrow: 'MAINTENANCE VS. GROWTH',
        title: 'Not all CapEx serves the same purpose.',
        paragraphs: [
          'Maintenance CapEx is spending needed to keep the existing business operating at roughly its current capability.',
          'Growth CapEx is spending intended to increase capacity, enter markets, or support expansion.',
          'Companies do not always report a perfectly clean split, so analysts often need judgment.',
          'The distinction matters because a business requiring heavy ongoing maintenance investment may convert EBITDA into cash less efficiently.',
        ],
        calloutTitle: 'Why bankers care',
        callout:
          'Two companies with identical EBITDA can have very different cash generation if one needs much more CapEx.',
      },
      {
        type: 'worked',
        eyebrow: 'COMPARE TWO BUSINESSES',
        title: 'Same EBITDA, different cash needs.',
        scenario:
          'Company A and Company B each generate $100 of EBITDA. Company A needs $10 of annual CapEx; Company B needs $60.',
        workedSteps: [
          {
            label: 'Company A',
            text:
              'Less cash is required to maintain or expand long-lived assets.',
          },
          {
            label: 'Company B',
            text:
              'Much more cash is absorbed by capital spending.',
          },
          {
            label: 'Implication',
            text:
              'The same EBITDA does not imply the same cash generation.',
          },
        ],
        takeaway:
          'Capital intensity is one reason analysts look beyond EBITDA.',
      },
      {
        type: 'mcq',
        eyebrow: 'CLASSIFICATION CHECK',
        title:
          'Where does a cash purchase of new equipment normally appear on the cash flow statement?',
        options: [
          'Cash Flow from Investing',
          'Cash Flow from Financing',
          'Revenue',
          'Deferred Revenue',
        ],
        correctIndex: 0,
        correctTitle: 'Right.',
        correctText:
          'CapEx is generally an investing cash outflow.',
        wrongTitle: 'Think long-lived asset purchase.',
        wrongText:
          'Purchasing PP&E is an investment in long-term operating assets and therefore usually belongs in CFI.',
        reviewConcepts: ['capex', 'cashFlowFromInvesting'],
      },
      {
        type: 'written',
        eyebrow: 'EXPLAIN THE DIFFERENCE',
        title:
          'Why can two companies with the same EBITDA generate very different amounts of cash?',
        body:
          'Use capital expenditures as one reason.',
        placeholder:
          'One company may need to spend much more cash on...',
        modelAnswer:
          'Two companies can have the same EBITDA but different cash generation if one needs much more capital expenditure to maintain or grow its assets, because CapEx uses cash even though it is not deducted in EBITDA.',
        reviewConcepts: ['ebitda', 'capex', 'cashFlow'],
        rubric: {
          criteria: [
            {
              id: 'capex',
              label:
                'identify different capital-expenditure needs',
              keywords: [
                'capex',
                'capital expenditure',
                'equipment',
                'assets',
                'maintenance',
                'investment',
              ],
            },
            {
              id: 'cash',
              label:
                'explain that CapEx uses cash even though EBITDA does not deduct it',
              keywords: [
                'cash',
                'cash flow',
                'uses cash',
                'spend',
                'outflow',
                'ebitda',
                'not included',
              ],
            },
          ],
        },
      },
      {
        type: 'complete',
        title: 'You now understand the cash side of long-lived assets.',
        body:
          'Next we move to day-to-day operating assets and liabilities through working capital.',
        takeaway:
          'CapEx uses cash immediately, creates or improves long-lived assets, and affects earnings later through depreciation.',
      },
    ],
  },

  {
    id: 'working-capital',
    title: 'Working Capital',
    summary:
      'Learn how receivables, inventory, and payables can turn accounting profit into more or less cash.',
    concepts: [
      'workingCapital',
      'accountsReceivable',
      'inventory',
      'accountsPayable',
      'cashFlowFromOperations',
    ],
    prerequisites: ['accountsReceivable', 'accountsPayable', 'cashFlowStatement'],
    steps: [
      {
        type: 'intro',
        eyebrow: 'THE CASH TIED UP IN OPERATIONS',
        title: 'A profitable sale does not always produce cash immediately.',
        body:
          'Day-to-day operating accounts can temporarily absorb or release cash. Working capital is the framework bankers use to think about those timing effects.',
        noteTitle: 'Focus on operating accounts',
        note:
          'In banking analysis, [[workingCapital|working capital]] often focuses on short-term operating assets and liabilities rather than simply every current balance-sheet account.',
      },
      {
        type: 'concept',
        eyebrow: 'THREE ACCOUNTS TO KNOW FIRST',
        title: 'Receivables, inventory, and payables drive the intuition.',
        body:
          'Ask whether each account represents cash the business has not yet collected, cash already spent, or cash payment delayed.',
        cards: [
          {
            number: 'AR',
            title: 'Accounts Receivable',
            text:
              'Revenue earned but customer cash not yet collected. More AR generally ties up cash.',
          },
          {
            number: 'INV',
            title: 'Inventory',
            text:
              'Cash invested in goods or materials that have not yet been sold. More inventory generally ties up cash.',
          },
          {
            number: 'AP',
            title: 'Accounts Payable',
            text:
              'Supplier obligations not yet paid. More AP generally preserves cash for longer.',
          },
        ],
        plainTitle: 'Cash intuition',
        plainText:
          'Operating assets usually use cash when they increase. Operating liabilities usually provide cash when they increase.',
      },
      {
        type: 'worked',
        eyebrow: 'ACCOUNTS RECEIVABLE',
        title: 'AR increases by $20.',
        scenario:
          'The company recognized revenue, but customers are taking longer to pay.',
        workedSteps: [
          {
            label: 'Income statement',
            text:
              'Revenue and profit may already reflect the sales.',
          },
          {
            label: 'Cash reality',
            text:
              'The company has not collected $20 of that amount yet.',
          },
          {
            label: 'Cash flow statement',
            text:
              'An increase in AR is generally a $20 use of cash in CFO.',
          },
        ],
        takeaway:
          'Higher receivables can make accounting earnings look stronger than the cash actually collected.',
      },
      {
        type: 'worked',
        eyebrow: 'ACCOUNTS PAYABLE',
        title: 'AP increases by $15.',
        scenario:
          'The company received goods or services but has not yet paid suppliers.',
        workedSteps: [
          {
            label: 'Obligation',
            text:
              'The company owes suppliers $15 more.',
          },
          {
            label: 'Cash reality',
            text:
              'Because payment has been delayed, the company still holds that $15 of cash.',
          },
          {
            label: 'Cash flow statement',
            text:
              'An increase in AP is generally a $15 source of cash in CFO.',
          },
        ],
        takeaway:
          'Operating liabilities can temporarily fund the business by delaying cash payments.',
      },
      {
        type: 'number',
        eyebrow: 'WORKING-CAPITAL CASH EFFECT',
        title:
          'AR increases by $30, inventory increases by $10, and AP increases by $15. What is the net cash impact from these changes?',
        answer: -25,
        tolerance: 0.01,
        suffix: 'million',
        placeholder: 'Enter cash impact; use a negative number for cash use',
        explanation:
          'AR uses $30, inventory uses $10, and AP provides $15. Net cash impact = −$30 − $10 + $15 = −$25.',
        reviewConcepts: [
          'accountsReceivable',
          'inventory',
          'accountsPayable',
          'workingCapital',
        ],
      },
      {
        type: 'mcq',
        eyebrow: 'DIRECTION CHECK',
        title:
          'All else equal, what does an increase in accounts receivable usually do to operating cash flow?',
        options: [
          'Reduces operating cash flow',
          'Increases operating cash flow',
          'Has no possible cash effect',
          'Automatically increases debt',
        ],
        correctIndex: 0,
        correctTitle: 'Correct.',
        correctText:
          'More AR means more revenue has not yet been collected in cash, so the increase generally reduces CFO.',
        wrongTitle: 'Ask whether customers paid yet.',
        wrongText:
          'An increase in receivables represents cash the company is still waiting to collect.',
        reviewConcepts: ['accountsReceivable', 'cashFlowFromOperations'],
      },
      {
        type: 'complete',
        title: 'Working capital now has a cash-flow meaning.',
        body:
          'Next we focus on one especially important timing account: deferred revenue.',
        takeaway:
          'Increases in operating assets generally use cash, while increases in operating liabilities generally provide cash.',
      },
    ],
  },

  {
    id: 'deferred-revenue',
    title: 'Deferred Revenue',
    summary:
      'Understand what happens when customers pay before the company earns the revenue.',
    concepts: ['deferredRevenue', 'cash', 'revenue', 'liability', 'cashFlowFromOperations'],
    prerequisites: ['accrualAccounting', 'cash', 'revenue'],
    steps: [
      {
        type: 'intro',
        eyebrow: 'CASH BEFORE REVENUE',
        title: 'Sometimes the customer pays first and the company performs later.',
        body:
          'Subscription businesses, airlines, event companies, and many other businesses can receive cash before they have fully earned the related revenue.',
        noteTitle: 'Why it is a liability',
        note:
          '[[deferredRevenue|Deferred revenue]] represents an obligation to provide goods or services in the future.',
      },
      {
        type: 'worked',
        eyebrow: 'ONE-YEAR SUBSCRIPTION',
        title: 'A customer prepays $1,200 for twelve months of service.',
        scenario:
          'Assume the company receives all cash on day one and earns revenue evenly over twelve months.',
        workedSteps: [
          {
            label: 'Day 1 cash',
            text:
              'Cash increases by $1,200.',
          },
          {
            label: 'Day 1 liability',
            text:
              'Deferred revenue increases by $1,200 because the company still owes twelve months of service.',
          },
          {
            label: 'After one month',
            text:
              'The company earns $100 of revenue.',
          },
          {
            label: 'After one month balance sheet',
            text:
              'Deferred revenue falls by $100 to $1,100.',
          },
          {
            label: 'New cash?',
            text:
              'No new cash is required when that $100 of revenue is recognized because the customer already paid.',
          },
        ],
        takeaway:
          'Deferred revenue turns previously collected cash into revenue as the company performs its obligation.',
      },
      {
        type: 'concept',
        eyebrow: 'COMPARE THE TWO TIMING ACCOUNTS',
        title: 'Accounts receivable and deferred revenue are opposites in timing.',
        body:
          'Both relate to revenue, but the order of revenue and cash is reversed.',
        cards: [
          {
            number: 'AR',
            title: 'Accounts Receivable',
            text:
              'Revenue first, cash later. The company is owed money.',
          },
          {
            number: 'DR',
            title: 'Deferred Revenue',
            text:
              'Cash first, revenue later. The company owes service or product.',
          },
        ],
        plainTitle: 'Shortcut',
        plainText:
          'AR = customer owes company. Deferred revenue = company owes customer performance.',
      },
      {
        type: 'mcq',
        eyebrow: 'BALANCE-SHEET CHECK',
        title:
          'Why is deferred revenue normally recorded as a liability?',
        options: [
          'Because the company has received cash but still owes goods or services',
          'Because the customer owes the company money',
          'Because it represents equipment',
          'Because it is always bank debt',
        ],
        correctIndex: 0,
        correctTitle: 'Exactly.',
        correctText:
          'The cash arrived, but the company still has an obligation to perform.',
        wrongTitle: 'Think about who owes what.',
        wrongText:
          'Deferred revenue reflects the company’s obligation to deliver future goods or services.',
        reviewConcepts: ['deferredRevenue', 'liability'],
      },
      {
        type: 'written',
        eyebrow: 'EXPLAIN THE TIMING',
        title:
          'Why can deferred revenue increase cash without increasing revenue by the same amount immediately?',
        body:
          'Explain what the company has received and what it still owes.',
        placeholder:
          'The company receives the cash now, but...',
        modelAnswer:
          'The company receives customer cash upfront, but it has not yet earned all of the revenue because it still owes future goods or services. The unearned amount stays as a liability until the company performs.',
        reviewConcepts: ['deferredRevenue', 'cash', 'revenue'],
        rubric: {
          criteria: [
            {
              id: 'cash',
              label:
                'recognize that customer cash is received upfront',
              keywords: [
                'cash',
                'paid',
                'prepaid',
                'upfront',
                'receive',
                'received',
              ],
            },
            {
              id: 'notearned',
              label:
                'explain that the revenue is not yet fully earned because service or product is still owed',
              keywords: [
                'not earned',
                'unearned',
                'owe',
                'owed',
                'service',
                'future',
                'perform',
                'deliver',
                'liability',
              ],
            },
          ],
        },
      },
      {
        type: 'complete',
        title: 'Deferred revenue is now a timing story rather than a vocabulary word.',
        body:
          'Next we look at another non-cash accounting item with major interview relevance: stock-based compensation.',
        takeaway:
          'Deferred revenue arises when cash arrives before the related revenue is earned.',
      },
    ],
  },

  {
    id: 'stock-based-compensation',
    title: 'Stock-Based Compensation',
    summary:
      'Why paying employees with equity can reduce earnings without using current-period cash.',
    concepts: ['stockBasedCompensation', 'equity', 'cashFlowFromOperations', 'shareholder'],
    prerequisites: ['equity', 'cashFlowStatement', 'netIncome'],
    steps: [
      {
        type: 'intro',
        eyebrow: 'PAYING WITH EQUITY',
        title: 'Compensation does not have to be paid entirely in cash.',
        body:
          'Companies can compensate employees with stock, restricted stock units, options, and other equity awards. Accounting still recognizes compensation expense even though the company may not pay the same amount of cash in that period.',
        noteTitle: 'The concept',
        note:
          '[[stockBasedCompensation|Stock-based compensation]], or SBC, is employee compensation delivered through equity awards.',
      },
      {
        type: 'worked',
        eyebrow: 'THREE-STATEMENT INTUITION',
        title: 'A company records $10 of stock-based compensation expense.',
        scenario:
          'Ignore taxes and other changes.',
        workedSteps: [
          {
            label: 'Income statement',
            text:
              'Compensation expense reduces operating income and net income by $10.',
          },
          {
            label: 'Cash flow statement',
            text:
              'Because the accounting expense did not require a $10 current-period cash payment, the $10 is generally added back in CFO under the indirect method.',
          },
          {
            label: 'Equity',
            text:
              'The equity award affects shareholders’ equity and can increase the share count over time depending on the award.',
          },
        ],
        takeaway:
          'SBC can reduce accounting earnings without reducing current-period cash by the same amount.',
      },
      {
        type: 'teach',
        eyebrow: 'NON-CASH DOES NOT MEAN FREE',
        title: 'Shareholders can still bear an economic cost.',
        paragraphs: [
          'If a company issues additional shares to employees, existing shareholders can own a smaller percentage of the company than they otherwise would.',
          'That effect is called dilution.',
          'This is why analysts should be careful with the phrase “non-cash expense.” Non-cash does not mean no economic consequence.',
          'In valuation, companies with heavy SBC often require careful treatment of share count and ongoing compensation economics.',
        ],
        calloutTitle: 'Key distinction',
        callout:
          'Cash cost and economic cost are not always the same thing.',
      },
      {
        type: 'mcq',
        eyebrow: 'CASH-FLOW CHECK',
        title:
          'Why is stock-based compensation commonly added back on the indirect cash flow statement?',
        options: [
          'Because it reduced net income without an equivalent current-period cash outflow',
          'Because employees were not compensated',
          'Because it increases revenue',
          'Because it is debt repayment',
        ],
        correctIndex: 0,
        correctTitle: 'Correct.',
        correctText:
          'The expense lowers accounting earnings, but the company did not pay the same amount of cash in the period.',
        wrongTitle: 'Focus on the current-period cash effect.',
        wrongText:
          'SBC is an accounting compensation expense that often does not require equivalent cash payment when recorded.',
        reviewConcepts: ['stockBasedCompensation', 'cashFlowFromOperations'],
      },
      {
        type: 'written',
        eyebrow: 'ECONOMIC THINKING',
        title:
          'Why is it misleading to say stock-based compensation “does not matter” just because it is non-cash?',
        body:
          'Think about employee compensation and shareholder dilution.',
        placeholder:
          'It may not use current cash, but...',
        modelAnswer:
          'Stock-based compensation still pays employees and can dilute existing shareholders by increasing the share count, so it can have a real economic cost even though it does not require the same amount of current-period cash.',
        reviewConcepts: ['stockBasedCompensation', 'shareholder', 'equity'],
        rubric: {
          criteria: [
            {
              id: 'noncash',
              label:
                'recognize that the expense may not use current-period cash',
              keywords: [
                'non cash',
                'non-cash',
                'cash',
                'current cash',
                'outflow',
              ],
            },
            {
              id: 'economic',
              label:
                'identify a real economic consequence such as compensation or dilution',
              keywords: [
                'dilution',
                'dilute',
                'shares',
                'share count',
                'employees',
                'compensation',
                'economic cost',
                'ownership',
              ],
            },
          ],
        },
      },
      {
        type: 'complete',
        title: 'You now understand why non-cash accounting items still require judgment.',
        body:
          'Next we apply the same timing logic to taxes.',
        takeaway:
          'SBC reduces accounting earnings, is often added back in CFO, and can still impose an economic cost through compensation and dilution.',
      },
    ],
  },

  {
    id: 'taxes',
    title: 'Taxes & Deferred Taxes',
    summary:
      'Separate accounting tax expense from cash taxes and understand why timing differences create deferred taxes.',
    concepts: ['taxExpense', 'deferredTax', 'netIncome', 'depreciation'],
    prerequisites: ['netIncome', 'depreciation', 'cashFlowStatement'],
    steps: [
      {
        type: 'intro',
        eyebrow: 'BOOK TAX VS. CASH TAX',
        title: 'Tax expense and cash taxes do not always match.',
        body:
          'Accounting rules and tax rules can recognize the same economic item at different times. That can make reported tax expense differ from the cash actually paid to tax authorities during the period.',
        noteTitle: 'The key idea',
        note:
          '[[deferredTax|Deferred taxes]] arise from timing differences between book accounting and tax accounting.',
      },
      {
        type: 'teach',
        eyebrow: 'START WITH TAX EXPENSE',
        title: 'Tax expense helps move pre-tax income to net income.',
        paragraphs: [
          'A simplified income statement calculates pre-tax income before recording [[taxExpense|tax expense]].',
          'Subtracting tax expense helps reach net income.',
          'But the accounting tax expense does not necessarily equal the current-period cash tax payment.',
          'Differences can come from depreciation methods, recognition timing, loss carryforwards, and many other tax rules.',
        ],
        calloutTitle: 'Do not assume',
        callout:
          'Income-statement tax expense and cash taxes paid are related, but they are not automatically identical.',
      },
      {
        type: 'worked',
        eyebrow: 'TIMING DIFFERENCE EXAMPLE',
        title: 'Tax depreciation is faster than book depreciation.',
        scenario:
          'Assume a company records $20 of book depreciation but can deduct $40 for tax purposes this year.',
        workedSteps: [
          {
            label: 'Book accounting',
            text:
              'Only $20 of depreciation reduces book pre-tax income.',
          },
          {
            label: 'Tax accounting',
            text:
              '$40 of depreciation reduces taxable income this year.',
          },
          {
            label: 'Cash taxes today',
            text:
              'Taxable income is lower, so current cash taxes may be lower than book tax expense would suggest.',
          },
          {
            label: 'Deferred tax',
            text:
              'Because the difference is timing-based and may reverse later, a deferred tax balance can be created.',
          },
        ],
        takeaway:
          'Deferred taxes often reflect “different timing now, reversal later” rather than a permanent free tax benefit.',
      },
      {
        type: 'concept',
        eyebrow: 'TWO BROAD TYPES',
        title: 'Deferred tax assets and liabilities reflect future tax effects.',
        body:
          'You do not need every tax rule yet. Understand the direction.',
        cards: [
          {
            number: 'DTA',
            title: 'Deferred Tax Asset',
            text:
              'Generally represents a future tax benefit created by certain timing differences or tax attributes.',
          },
          {
            number: 'DTL',
            title: 'Deferred Tax Liability',
            text:
              'Generally represents future taxes expected from timing differences that reduced taxes earlier.',
          },
        ],
        plainTitle: 'Use judgment',
        plainText:
          'The classification depends on how book and tax treatment differ and how that difference is expected to reverse.',
      },
      {
        type: 'mcq',
        eyebrow: 'CONCEPT CHECK',
        title:
          'What is the best reason book tax expense can differ from cash taxes paid?',
        options: [
          'Accounting and tax rules can recognize items at different times',
          'Cash taxes never exist',
          'Tax expense is always revenue',
          'The balance sheet removes all taxes',
        ],
        correctIndex: 0,
        correctTitle: 'Exactly.',
        correctText:
          'Different recognition timing under book and tax rules can create differences between reported tax expense and cash taxes.',
        wrongTitle: 'Think timing differences.',
        wrongText:
          'Book accounting and tax accounting do not always recognize the same item in the same period.',
        reviewConcepts: ['taxExpense', 'deferredTax'],
      },
      {
        type: 'complete',
        title: 'You now have the right intuition for deferred taxes.',
        body:
          'Next we move into acquisition accounting and two balance-sheet items that show up constantly in M&A: goodwill and intangible assets.',
        takeaway:
          'Tax expense and cash taxes can differ because book and tax rules may recognize the same economics at different times.',
      },
    ],
  },

  {
    id: 'goodwill-intangibles',
    title: 'Goodwill & Intangible Assets',
    summary:
      'Understand the acquisition-accounting logic behind goodwill, identifiable intangibles, amortization, and impairment.',
    concepts: ['goodwill', 'intangibleAsset', 'amortization', 'impairment', 'asset'],
    prerequisites: ['asset', 'amortization', 'balanceSheet'],
    steps: [
      {
        type: 'intro',
        eyebrow: 'M&A ACCOUNTING',
        title: 'An acquisition can create new balance-sheet assets.',
        body:
          'When one company buys another, the purchase price may exceed the target’s existing book equity. Accounting then allocates the purchase price across identifiable assets and liabilities, with the residual often becoming goodwill.',
        noteTitle: 'Why bankers care',
        note:
          '[[goodwill|Goodwill]] and [[intangibleAsset|intangible assets]] appear frequently in M&A models, purchase accounting, and transaction analysis.',
      },
      {
        type: 'teach',
        eyebrow: 'IDENTIFIABLE INTANGIBLES',
        title: 'Some valuable assets are not physical.',
        paragraphs: [
          'A company can own valuable patents, trademarks, technology, customer relationships, licenses, and other non-physical resources.',
          'In an acquisition, certain identifiable intangible assets can be recognized separately at fair value.',
          'Finite-lived intangible assets may then create [[amortization|amortization]] expense over time.',
          'The exact accounting can become technical, but the economic idea is simple: some of the purchase price is assigned to identifiable non-physical assets.',
        ],
        calloutTitle: 'Physical vs. non-physical',
        callout:
          'PP&E is tangible. Patents and customer relationships are examples of intangible assets.',
      },
      {
        type: 'worked',
        eyebrow: 'CALCULATE GOODWILL',
        title: 'A buyer pays $500 for a company.',
        scenario:
          'Assume the fair value of identifiable assets acquired is $420 and liabilities assumed are $120.',
        workedSteps: [
          {
            label: 'Identifiable net assets',
            text:
              '$420 of assets − $120 of liabilities = $300.',
          },
          {
            label: 'Purchase price',
            text:
              'The buyer paid $500.',
          },
          {
            label: 'Residual',
            text:
              '$500 − $300 = $200.',
          },
          {
            label: 'Goodwill',
            text:
              'The simplified goodwill created is $200.',
          },
        ],
        takeaway:
          'Goodwill is the residual purchase price after accounting for the fair value of identifiable net assets acquired.',
      },
      {
        type: 'teach',
        eyebrow: 'WHAT GOODWILL REPRESENTS',
        title: 'Goodwill often reflects value that is difficult to separate into individual assets.',
        paragraphs: [
          'A buyer may pay for an assembled workforce, brand strength, expected synergies, strategic positioning, or other benefits that are not separately recorded as identifiable assets.',
          'Those expectations can contribute to goodwill.',
          'Goodwill is not normally amortized in the same way as a finite-lived intangible asset under U.S. GAAP.',
          'Instead, goodwill is tested for [[impairment|impairment]], which can create a large non-cash write-down if the acquired business performs worse than expected.',
        ],
        calloutTitle: 'Do not over-interpret',
        callout:
          'Goodwill is an accounting residual created in acquisition accounting, not a direct market-value estimate of “brand.”',
      },
      {
        type: 'number',
        eyebrow: 'GOODWILL CHECK',
        title:
          'A buyer pays $900. Identifiable assets are valued at $760 and liabilities assumed are $210. What is simplified goodwill?',
        answer: 350,
        tolerance: 0.01,
        suffix: 'million',
        placeholder: 'Enter goodwill',
        explanation:
          'Net identifiable assets = $760 − $210 = $550. Goodwill = $900 − $550 = $350.',
        reviewConcepts: ['goodwill', 'intangibleAsset'],
      },
      {
        type: 'mcq',
        eyebrow: 'ACCOUNTING CHECK',
        title:
          'What can happen if an acquired business performs much worse than expected and its goodwill is no longer supported?',
        options: [
          'The company may record a goodwill impairment',
          'Goodwill automatically becomes cash',
          'Revenue must equal goodwill',
          'All debt disappears',
        ],
        correctIndex: 0,
        correctTitle: 'Correct.',
        correctText:
          'A goodwill impairment can reduce the carrying value of goodwill and create a non-cash expense.',
        wrongTitle: 'Think asset write-down.',
        wrongText:
          'When carrying value is no longer supported, accounting may require an impairment charge.',
        reviewConcepts: ['goodwill', 'impairment'],
      },
      {
        type: 'complete',
        title: 'You now understand the accounting logic beneath two major M&A balance-sheet items.',
        body:
          'The final lesson turns financial-statement numbers into ratios that help compare companies.',
        takeaway:
          'Acquisitions can create identifiable intangible assets and goodwill, and those assets can later create amortization or impairment effects.',
      },
    ],
  },

  {
    id: 'financial-ratios',
    title: 'Basic Financial Ratios',
    summary:
      'Turn raw statement numbers into margins, liquidity measures, and leverage metrics that are easier to compare.',
    concepts: [
      'grossMargin',
      'operatingMargin',
      'netMargin',
      'currentRatio',
      'debtToEbitda',
      'ebitda',
    ],
    prerequisites: ['incomeStatement', 'balanceSheet', 'ebitda'],
    steps: [
      {
        type: 'intro',
        eyebrow: 'FROM NUMBERS TO RELATIONSHIPS',
        title: 'A dollar amount means more when you put it in context.',
        body:
          'A company earning $100 of profit might sound strong, but the interpretation changes if revenue is $200 versus $10 billion. Ratios help scale financial information and make comparisons more meaningful.',
        noteTitle: 'Ratios are tools, not answers',
        note:
          'A ratio can highlight a relationship. You still need business context to understand why the ratio is high, low, improving, or deteriorating.',
      },
      {
        type: 'concept',
        eyebrow: 'PROFITABILITY MARGINS',
        title: 'Margins tell you how much of each revenue dollar remains at different levels.',
        body:
          'Divide the relevant profit measure by revenue.',
        cards: [
          {
            number: 'GM',
            title: 'Gross Margin',
            text:
              'Gross Profit ÷ Revenue. Shows what remains after direct product or service costs.',
          },
          {
            number: 'OM',
            title: 'Operating Margin',
            text:
              'EBIT ÷ Revenue. Shows what remains after core operating costs.',
          },
          {
            number: 'NM',
            title: 'Net Margin',
            text:
              'Net Income ÷ Revenue. Shows bottom-line accounting profit as a percentage of sales.',
          },
        ],
        plainTitle: 'Interpretation',
        plainText:
          'Higher is not automatically better in every context, but margins are useful for comparing profitability across time and peers.',
      },
      {
        type: 'worked',
        eyebrow: 'MARGIN WALKTHROUGH',
        title: 'A company has $1,000 of revenue.',
        scenario:
          'Gross profit is $400, EBIT is $150, and net income is $90.',
        workedSteps: [
          {
            label: 'Gross margin',
            text:
              '$400 ÷ $1,000 = 40%.',
          },
          {
            label: 'Operating margin',
            text:
              '$150 ÷ $1,000 = 15%.',
          },
          {
            label: 'Net margin',
            text:
              '$90 ÷ $1,000 = 9%.',
          },
          {
            label: 'What the gaps show',
            text:
              'The fall from 40% to 15% reflects operating costs below gross profit. The fall from 15% to 9% reflects interest, taxes, and other below-operating items.',
          },
        ],
        takeaway:
          'A margin is not just a percentage; it helps show where revenue is being consumed by different costs.',
      },
      {
        type: 'concept',
        eyebrow: 'LIQUIDITY AND LEVERAGE',
        title: 'Other ratios answer different questions.',
        body:
          'Two common beginner examples are the current ratio and Debt / EBITDA.',
        cards: [
          {
            number: 'CR',
            title: 'Current Ratio',
            text:
              'Current Assets ÷ Current Liabilities. A simple short-term liquidity measure.',
          },
          {
            number: 'D/E',
            title: 'Debt / EBITDA',
            text:
              'Debt ÷ EBITDA. A common shorthand for leverage relative to operating earnings.',
          },
        ],
        plainTitle: 'Be careful',
        plainText:
          'Neither ratio tells the whole story. Liquidity depends on asset quality and timing, while leverage depends on cash flow, interest cost, debt terms, and business risk.',
      },
      {
        type: 'number',
        eyebrow: 'MARGIN CHECK',
        title:
          'A company has $500 of revenue and $125 of EBIT. What is operating margin?',
        answer: 25,
        tolerance: 0.01,
        suffix: '%',
        placeholder: 'Enter operating margin',
        explanation:
          '$125 ÷ $500 = 25%.',
        reviewConcepts: ['operatingMargin', 'ebit'],
      },
      {
        type: 'number',
        eyebrow: 'LEVERAGE CHECK',
        title:
          'A company has $450 of debt and $150 of EBITDA. What is Debt / EBITDA?',
        answer: 3,
        tolerance: 0.01,
        suffix: 'x',
        placeholder: 'Enter leverage ratio',
        explanation:
          '$450 ÷ $150 = 3.0x Debt / EBITDA.',
        reviewConcepts: ['debtToEbitda', 'debt', 'ebitda'],
      },
      {
        type: 'written',
        eyebrow: 'ANALYST THINKING',
        title:
          'Why is a ratio more useful when compared with the company’s history or with similar companies?',
        body:
          'Explain why context matters.',
        placeholder:
          'A ratio by itself tells you..., but comparing it can show...',
        modelAnswer:
          'A ratio by itself shows a relationship but does not tell you whether that relationship is strong or weak. Comparing it with prior periods or similar companies helps show trends, differences in business economics, and whether performance is improving or deteriorating.',
        reviewConcepts: ['grossMargin', 'operatingMargin', 'netMargin', 'debtToEbitda'],
        rubric: {
          criteria: [
            {
              id: 'standalone',
              label:
                'recognize that a standalone ratio has limited context',
              keywords: [
                'context',
                'alone',
                'by itself',
                'limited',
                'meaning',
                'strong',
                'weak',
              ],
            },
            {
              id: 'comparison',
              label:
                'explain that comparison reveals trends or differences',
              keywords: [
                'compare',
                'comparison',
                'history',
                'trend',
                'peers',
                'similar companies',
                'improve',
                'deteriorate',
                'change',
              ],
            },
          ],
        },
      },
      {
        type: 'complete',
        title: 'Accounting Foundations complete.',
        body:
          'You can now read the core statements, separate accrual profit from cash, follow major statement links, understand common non-cash items, and interpret basic financial ratios.',
        takeaway:
          'You are ready for Three-Statement Linkages, where individual accounting changes are walked through across all three statements step by step.',
      },
    ],
  },
]
