export const accountingLessons = [
  {
    id: 'why-accounting-matters',
    title: 'Why Accounting Matters in Investment Banking',
    summary:
      'Why bankers care about financial statements before valuation even starts.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'START WITH THE WHY',
        title: 'Accounting is the language behind almost every banking analysis.',
        body:
          'Before you can value a company, build a model, or analyze a deal, you need to understand what the company is actually earning, owning, owing, and spending.',
        noteTitle: 'Do not skip this',
        note:
          'A lot of technical interview questions that look like valuation questions are really accounting questions underneath.',
      },
      {
        type: 'list',
        eyebrow: 'WHERE IT SHOWS UP',
        title: 'Bankers use accounting constantly.',
        body:
          'You do not need to become an accountant. You do need to understand the financial logic.',
        items: [
          'Reading company filings',
          'Understanding historical performance',
          'Building financial models',
          'Calculating EBITDA and cash flow',
          'Analyzing working capital',
          'Valuing companies',
          'Evaluating acquisitions',
          'Checking whether a model actually balances',
        ],
        noteTitle: 'On the job',
        note:
          'If the financial statements do not make sense to you, the model built on top of them will not make sense either.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title:
          'Why does accounting matter to an investment banking analyst?',
        options: [
          'Because bankers prepare personal tax returns',
          'Because financial analysis depends on understanding a company’s statements',
          'Because accounting replaces valuation',
          'Because only accountants are allowed to read financial filings',
        ],
        correctIndex: 1,
        correctTitle: 'Exactly.',
        correctText:
          'Financial models, valuation, transaction analysis, and company research all depend on understanding the underlying financial statements.',
        wrongTitle: 'Not quite.',
        wrongText:
          'Bankers are not acting as accountants, but they depend heavily on accounting information to analyze companies.',
      },
      {
        type: 'complete',
        title: 'Accounting is the foundation, not the destination.',
        body:
          'We will start with the simplest possible building blocks: revenue, expenses, and profit.',
        takeaway:
          'Bankers use accounting to understand historical performance and build the financial analysis used in valuation and transactions.',
      },
    ],
  },

  {
    id: 'revenue-expenses-profit',
    title: 'Revenue, Expenses & Profit',
    summary:
      'The basic economics of how a company turns sales into earnings.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'THE BASIC ENGINE',
        title: 'A business earns revenue and incurs expenses to generate profit.',
        body:
          'Almost everything on the income statement builds from that simple idea.',
        noteTitle: 'Start simple',
        note:
          'Do not rush into EBITDA, EBIT, and free cash flow before revenue and expenses feel obvious.',
      },
      {
        type: 'concept',
        eyebrow: 'THE THREE BUILDING BLOCKS',
        title: 'Sales come in. Costs come out. What remains is profit.',
        body:
          'Different types of profit appear at different points on the income statement.',
        cards: [
          {
            number: 'R',
            title: 'Revenue',
            text:
              'The value of goods or services a company sells during a period.',
          },
          {
            number: 'E',
            title: 'Expenses',
            text:
              'Costs incurred to generate revenue and operate the business.',
          },
          {
            number: 'P',
            title: 'Profit',
            text:
              'What remains after subtracting the relevant expenses from revenue.',
          },
        ],
        plainTitle: 'The core equation',
        plainText:
          'Revenue − Expenses = Profit. The rest of accounting mostly adds detail about which revenue, which expenses, and when they are recognized.',
      },
      {
        type: 'number',
        eyebrow: 'MINI CALCULATION',
        title:
          'A company earns $500 million of revenue and has $320 million of total expenses. What is profit?',
        answer: 180,
        tolerance: 0.01,
        suffix: 'million',
        placeholder: 'Enter the answer in millions',
        explanation:
          '$500 million of revenue − $320 million of expenses = $180 million of profit.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title:
          'If revenue increases while all expenses stay exactly the same, what happens to profit?',
        options: [
          'Profit decreases',
          'Profit increases',
          'Profit must stay unchanged',
          'The balance sheet disappears',
        ],
        correctIndex: 1,
        correctTitle: 'Right.',
        correctText:
          'With expenses unchanged, additional revenue flows through to higher profit.',
        wrongTitle: 'Keep it simple.',
        wrongText:
          'If revenue rises and expenses do not change, profit increases.',
      },
      {
        type: 'complete',
        title: 'You have the basic economic engine.',
        body:
          'Now we need one important complication: accounting does not always recognize revenue and expenses when cash moves.',
        takeaway:
          'Profit represents revenue minus expenses, but accounting rules determine when those items are recognized.',
      },
    ],
  },

  {
    id: 'cash-vs-accrual',
    title: 'Cash vs. Accrual Accounting',
    summary:
      'Why revenue, expenses, and cash flow can happen at different times.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'A CRITICAL DISTINCTION',
        title: 'Profit is not the same thing as cash flow.',
        body:
          'Under accrual accounting, revenue and expenses are generally recorded when they are earned or incurred, not simply when cash changes hands.',
        noteTitle: 'Interview favorite',
        note:
          'Understanding the difference between cash and accrual accounting is essential for understanding how the three statements connect.',
      },
      {
        type: 'concept',
        eyebrow: 'TWO DIFFERENT TIMINGS',
        title: 'Accounting activity and cash movement can happen separately.',
        body:
          'That timing difference creates many balance sheet accounts.',
        cards: [
          {
            number: 'AR',
            title: 'Accounts Receivable',
            text:
              'Revenue has been recognized, but the customer has not paid the company yet.',
          },
          {
            number: 'AP',
            title: 'Accounts Payable',
            text:
              'An expense or purchase has occurred, but the company has not paid the supplier yet.',
          },
          {
            number: 'DR',
            title: 'Deferred Revenue',
            text:
              'The company received cash before it earned the related revenue.',
          },
        ],
        plainTitle: 'The key idea',
        plainText:
          'The income statement tracks economic activity. The cash flow statement tracks actual cash movement.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title:
          'A company completes $100 of work for a customer today but will not be paid until next month. What happens today?',
        options: [
          'No revenue is recognized until cash arrives',
          'Revenue can be recognized and accounts receivable increases',
          'Cash increases immediately',
          'Debt increases automatically',
        ],
        correctIndex: 1,
        correctTitle: 'Exactly.',
        correctText:
          'The company has earned the revenue, so revenue can be recognized even though cash has not yet been collected. Accounts receivable records the amount owed.',
        wrongTitle: 'Watch the timing.',
        wrongText:
          'Under accrual accounting, earning revenue and collecting cash do not have to happen at the same time.',
      },
      {
        type: 'fill',
        eyebrow: 'VOCABULARY CHECK',
        title:
          'Revenue recognized before the customer pays often creates accounts ______.',
        answer: 'receivable',
        alternatives: ['receivable', 'accounts receivable'],
        hint: 'Think about money the company is still waiting to receive.',
        successText:
          'Right. Accounts receivable represents amounts customers owe the company.',
      },
      {
        type: 'complete',
        title: 'Profit and cash can move differently.',
        body:
          'That distinction becomes much clearer once we look at each of the three financial statements individually.',
        takeaway:
          'Accrual accounting recognizes economic activity when earned or incurred, which can differ from the timing of cash movement.',
      },
    ],
  },

  {
    id: 'income-statement',
    title: 'The Income Statement',
    summary:
      'Revenue down to net income and what each layer tells you.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'STATEMENT 1 OF 3',
        title: 'The income statement shows profitability over a period of time.',
        body:
          'It answers a simple question: how much did the company earn after accounting for the costs associated with running the business?',
        noteTitle: 'Period, not snapshot',
        note:
          'An income statement covers a period such as a quarter or year. That is different from the balance sheet, which represents one point in time.',
      },
      {
        type: 'list',
        eyebrow: 'TOP TO BOTTOM',
        title: 'A simplified income statement looks like this.',
        body:
          'The exact labels differ between companies, but the basic flow is consistent.',
        items: [
          'Revenue',
          'Less: Cost of Goods Sold',
          'Equals: Gross Profit',
          'Less: Operating Expenses',
          'Equals: Operating Income / EBIT',
          'Less: Interest Expense',
          'Less: Taxes',
          'Equals: Net Income',
        ],
        noteTitle: 'Know the flow',
        note:
          'You should eventually be able to move from revenue down to net income without thinking about the order.',
      },
      {
        type: 'number',
        eyebrow: 'MINI CALCULATION',
        title:
          'Revenue is $800 million and COGS is $500 million. What is gross profit?',
        answer: 300,
        tolerance: 0.01,
        suffix: 'million',
        placeholder: 'Enter the answer in millions',
        explanation:
          '$800 million of revenue − $500 million of COGS = $300 million of gross profit.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title:
          'Which line is generally found at the bottom of the income statement?',
        options: [
          'Cash',
          'Accounts Receivable',
          'Net Income',
          'Property, Plant & Equipment',
        ],
        correctIndex: 2,
        correctTitle: 'Correct.',
        correctText:
          'Net income represents the company’s accounting profit after operating costs, interest, taxes, and other relevant items.',
        wrongTitle: 'Think profitability.',
        wrongText:
          'Cash, accounts receivable, and PP&E are balance sheet accounts. Net income sits on the income statement.',
      },
      {
        type: 'complete',
        title: 'The income statement tells you how profitable the company was.',
        body:
          'Next we move from performance over time to what the company owns and owes at a specific moment.',
        takeaway:
          'The income statement moves from revenue through expenses to net income over a defined period.',
      },
    ],
  },

  {
    id: 'balance-sheet',
    title: 'The Balance Sheet',
    summary:
      'Assets, liabilities, equity, and the equation that always has to balance.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'STATEMENT 2 OF 3',
        title: 'The balance sheet is a snapshot of the company at one point in time.',
        body:
          'It shows what the company owns, what it owes, and the residual value attributable to shareholders.',
        noteTitle: 'Know this cold',
        note:
          'Assets = Liabilities + Shareholders’ Equity.',
      },
      {
        type: 'concept',
        eyebrow: 'THREE SECTIONS',
        title: 'Everything fits into one of three broad buckets.',
        body:
          'The accounting equation connects them.',
        cards: [
          {
            number: 'A',
            title: 'Assets',
            text:
              'Resources the company owns or controls, such as cash, inventory, receivables, PP&E, and certain intangible assets.',
          },
          {
            number: 'L',
            title: 'Liabilities',
            text:
              'Obligations the company owes, such as accounts payable, debt, and deferred revenue.',
          },
          {
            number: 'E',
            title: 'Shareholders’ Equity',
            text:
              'The residual accounting value attributable to shareholders after liabilities.',
          },
        ],
        plainTitle: 'The equation',
        plainText:
          'Assets = Liabilities + Equity. If your model does not satisfy this equation, something is wrong.',
      },
      {
        type: 'number',
        eyebrow: 'MINI CALCULATION',
        title:
          'A company has $900 million of assets and $550 million of liabilities. What is shareholders’ equity?',
        answer: 350,
        tolerance: 0.01,
        suffix: 'million',
        placeholder: 'Enter the answer in millions',
        explanation:
          '$900 million of assets − $550 million of liabilities = $350 million of shareholders’ equity.',
      },
      {
        type: 'mcq',
        eyebrow: 'CLASSIFY IT',
        title:
          'Which of the following is generally a liability?',
        options: [
          'Cash',
          'Inventory',
          'Accounts Payable',
          'Property, Plant & Equipment',
        ],
        correctIndex: 2,
        correctTitle: 'Exactly.',
        correctText:
          'Accounts payable represents money the company owes to suppliers.',
        wrongTitle: 'Not that one.',
        wrongText:
          'Cash, inventory, and PP&E are assets. Accounts payable is an obligation and therefore a liability.',
      },
      {
        type: 'complete',
        title: 'The balance sheet tells you what the company has and how it is financed.',
        body:
          'But neither profit nor the balance sheet alone tells you exactly what happened to cash. That is the job of the cash flow statement.',
        takeaway:
          'The balance sheet is a point-in-time snapshot governed by Assets = Liabilities + Equity.',
      },
    ],
  },

  {
    id: 'cash-flow-statement',
    title: 'The Cash Flow Statement',
    summary:
      'How operating, investing, and financing activity explains the change in cash.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'STATEMENT 3 OF 3',
        title: 'The cash flow statement explains why cash changed.',
        body:
          'Under the indirect method, it begins with net income and adjusts for non-cash items and other differences between accounting profit and actual cash movement.',
        noteTitle: 'The purpose',
        note:
          'The cash flow statement bridges accounting earnings to the company’s actual change in cash.',
      },
      {
        type: 'concept',
        eyebrow: 'THREE SECTIONS',
        title: 'Cash flow is grouped by the type of activity.',
        body:
          'You should know these three sections cold.',
        cards: [
          {
            number: 'CFO',
            title: 'Cash Flow from Operations',
            text:
              'Cash generated or used by the company’s core operating activities, including adjustments for non-cash items and working capital.',
          },
          {
            number: 'CFI',
            title: 'Cash Flow from Investing',
            text:
              'Cash used for or generated by long-term investments such as CapEx, acquisitions, and asset sales.',
          },
          {
            number: 'CFF',
            title: 'Cash Flow from Financing',
            text:
              'Cash related to debt, equity, dividends, share repurchases, and other financing activity.',
          },
        ],
        plainTitle: 'The ending result',
        plainText:
          'CFO + CFI + CFF = Net Change in Cash. Add that to beginning cash to reach ending cash.',
      },
      {
        type: 'mcq',
        eyebrow: 'CLASSIFY IT',
        title:
          'A company spends cash to purchase new manufacturing equipment. Where does that normally appear?',
        options: [
          'Cash Flow from Operations',
          'Cash Flow from Investing',
          'Cash Flow from Financing',
          'Revenue',
        ],
        correctIndex: 1,
        correctTitle: 'Right.',
        correctText:
          'Purchasing long-term assets is capital expenditure and normally appears in cash flow from investing.',
        wrongTitle: 'Think long-term investment.',
        wrongText:
          'CapEx represents investment in long-term assets, so it normally appears in the investing section.',
      },
      {
        type: 'number',
        eyebrow: 'MINI CALCULATION',
        title:
          'CFO is +$150 million, CFI is −$90 million, and CFF is −$20 million. What is the net change in cash?',
        answer: 40,
        tolerance: 0.01,
        suffix: 'million',
        placeholder: 'Enter the answer in millions',
        explanation:
          '$150 million − $90 million − $20 million = a $40 million increase in cash.',
      },
      {
        type: 'complete',
        title: 'Now you know the purpose of all three statements.',
        body:
          'The next lesson connects them, because in the real world they do not operate independently.',
        takeaway:
          'The cash flow statement explains the change in cash through operating, investing, and financing activities.',
      },
    ],
  },

  {
    id: 'three-statements-connect',
    title: 'How the Three Statements Connect',
    summary:
      'The major links between net income, cash, retained earnings, and balance sheet accounts.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'CONNECT THE SYSTEM',
        title: 'The three statements are separate reports describing one company.',
        body:
          'Changes on one statement often create effects on the others. That is why three-statement modeling works as an integrated system.',
        noteTitle: 'Interview favorite',
        note:
          '“Walk me through the three financial statements and how they connect” is one of the most common foundational technical questions.',
      },
      {
        type: 'list',
        eyebrow: 'THE MAJOR LINKS',
        title: 'Start with these connections.',
        body:
          'You do not need every accounting edge case yet.',
        items: [
          'Net income from the income statement flows into the cash flow statement',
          'Net income also contributes to retained earnings within shareholders’ equity',
          'The cash flow statement calculates the change in cash',
          'Ending cash flows back onto the balance sheet',
          'Balance sheet changes such as working capital affect cash flow',
          'Depreciation reduces PP&E and is added back as a non-cash item on the cash flow statement',
        ],
        noteTitle: 'Do not memorize blindly',
        note:
          'The next module will make you walk actual transactions through all three statements. That is where this starts to stick.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title:
          'Which income statement line typically serves as the starting point of an indirect cash flow statement?',
        options: [
          'Revenue',
          'Gross Profit',
          'Net Income',
          'Accounts Payable',
        ],
        correctIndex: 2,
        correctTitle: 'Exactly.',
        correctText:
          'The indirect cash flow statement generally starts with net income and reconciles it to cash generated or used.',
        wrongTitle: 'Think bottom line.',
        wrongText:
          'Under the indirect method, net income is the typical starting point.',
      },
      {
        type: 'fill',
        eyebrow: 'CONNECTION CHECK',
        title:
          'Ending cash from the cash flow statement appears as cash on the ______ sheet.',
        answer: 'balance',
        alternatives: ['balance', 'balance sheet'],
        hint: 'Which statement contains cash as an asset?',
        successText:
          'Correct. Ending cash calculated through the cash flow statement appears on the balance sheet.',
      },
      {
        type: 'complete',
        title: 'The statements form one connected financial system.',
        body:
          'Next we clarify three profitability metrics that interviewers expect you to distinguish immediately.',
        takeaway:
          'Net income links the income statement to cash flow and equity, while ending cash and other balance sheet changes complete the three-statement connection.',
      },
    ],
  },

  {
    id: 'ebitda-ebit-net-income',
    title: 'EBITDA, EBIT & Net Income',
    summary:
      'Three profitability metrics that measure different layers of the business.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'DO NOT MIX THESE UP',
        title: 'EBITDA, EBIT, and net income are not interchangeable.',
        body:
          'Each metric removes a different set of expenses and therefore answers a slightly different question.',
        noteTitle: 'Know this cold',
        note:
          'This distinction becomes extremely important once you reach valuation multiples.',
      },
      {
        type: 'concept',
        eyebrow: 'THREE LEVELS OF PROFIT',
        title: 'Move from operating performance toward the shareholder bottom line.',
        body:
          'Think about which expenses each metric includes.',
        cards: [
          {
            number: 'EBITDA',
            title: 'EBITDA',
            text:
              'Earnings Before Interest, Taxes, Depreciation & Amortization. A commonly used proxy for operating profitability before D&A.',
          },
          {
            number: 'EBIT',
            title: 'EBIT',
            text:
              'Earnings Before Interest and Taxes. Includes the impact of depreciation and amortization.',
          },
          {
            number: 'NI',
            title: 'Net Income',
            text:
              'The accounting profit remaining after operating expenses, interest, taxes, and other relevant items.',
          },
        ],
        plainTitle: 'A useful relationship',
        plainText:
          'EBITDA − D&A = EBIT. From EBIT, subtract items such as interest and taxes to eventually reach net income.',
      },
      {
        type: 'number',
        eyebrow: 'MINI CALCULATION',
        title:
          'A company has $120 million of EBITDA and $25 million of D&A. What is EBIT?',
        answer: 95,
        tolerance: 0.01,
        suffix: 'million',
        placeholder: 'Enter the answer in millions',
        explanation:
          '$120 million of EBITDA − $25 million of D&A = $95 million of EBIT.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title:
          'Which metric is calculated before depreciation and amortization?',
        options: [
          'Net Income',
          'EBIT',
          'EBITDA',
          'Retained Earnings',
        ],
        correctIndex: 2,
        correctTitle: 'Exactly.',
        correctText:
          'Depreciation and amortization are explicitly added back when moving from EBIT to EBITDA.',
        wrongTitle: 'Look at the name.',
        wrongText:
          'EBITDA stands for Earnings Before Interest, Taxes, Depreciation and Amortization.',
      },
      {
        type: 'complete',
        title: 'Profitability depends on where you stop the income statement.',
        body:
          'Next we isolate depreciation and amortization, because their non-cash nature creates one of the most famous banking interview questions.',
        takeaway:
          'EBITDA excludes D&A, EBIT includes D&A but excludes interest and taxes, and net income reflects the broader accounting bottom line.',
      },
    ],
  },

  {
    id: 'depreciation-amortization',
    title: 'Depreciation & Amortization',
    summary:
      'Why long-term asset costs are spread over time and why D&A gets added back to cash flow.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'NON-CASH DOES NOT MEAN FAKE',
        title: 'Depreciation spreads the cost of a long-term asset across its useful life.',
        body:
          'Instead of expensing the entire cost of a long-lived asset immediately, accounting generally capitalizes the asset and recognizes expense over time.',
        noteTitle: 'Key distinction',
        note:
          'Depreciation generally relates to tangible assets such as equipment. Amortization often relates to certain intangible assets.',
      },
      {
        type: 'concept',
        eyebrow: 'WHAT ACTUALLY HAPPENS',
        title: 'The cash payment and accounting expense can occur at different times.',
        body:
          'That timing is why D&A affects both profit and cash flow differently.',
        cards: [
          {
            number: '1',
            title: 'Asset Purchased',
            text:
              'Cash is spent to acquire a long-term asset and the asset is recorded on the balance sheet.',
          },
          {
            number: '2',
            title: 'Expense Recognized Over Time',
            text:
              'Depreciation reduces reported earnings in later periods even though no new cash payment is required for that depreciation expense.',
          },
        ],
        plainTitle: 'Why it gets added back',
        plainText:
          'Depreciation lowers net income but is non-cash in the current period, so it is added back in cash flow from operations under the indirect method.',
      },
      {
        type: 'number',
        eyebrow: 'MINI CALCULATION',
        title:
          'A company buys a $100 million machine and depreciates it evenly over 10 years with no residual value. What is annual depreciation?',
        answer: 10,
        tolerance: 0.01,
        suffix: 'million',
        placeholder: 'Enter the answer in millions',
        explanation:
          '$100 million ÷ 10 years = $10 million of annual straight-line depreciation.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title:
          'Why is depreciation added back on the cash flow statement under the indirect method?',
        options: [
          'Because depreciation increases revenue',
          'Because it reduced net income without representing a current-period cash outflow',
          'Because depreciation is debt',
          'Because the asset was never purchased',
        ],
        correctIndex: 1,
        correctTitle: 'Exactly.',
        correctText:
          'Depreciation lowered accounting earnings, but the depreciation expense itself does not represent a new cash payment in that period.',
        wrongTitle: 'Focus on cash timing.',
        wrongText:
          'The asset may have required cash when purchased, but the later depreciation expense itself is non-cash.',
      },
      {
        type: 'complete',
        title: 'Depreciation separates cash spending from expense recognition.',
        body:
          'That naturally leads to CapEx: the actual investment in long-term assets.',
        takeaway:
          'D&A reduces accounting earnings but is non-cash in the period recognized, so it is added back in the operating cash flow reconciliation.',
      },
    ],
  },

  {
    id: 'capex',
    title: 'Capital Expenditures',
    summary:
      'How companies invest in long-term assets and why CapEx differs from an operating expense.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'INVESTING FOR THE FUTURE',
        title: 'CapEx is money spent on long-term assets.',
        body:
          'Examples include factories, equipment, servers, buildings, and other assets expected to provide benefits beyond the current period.',
        noteTitle: 'Interview favorite',
        note:
          'A common distinction is whether a cost should be expensed immediately or capitalized and recognized over time.',
      },
      {
        type: 'concept',
        eyebrow: 'EXPENSE VS. CAPITALIZE',
        title: 'The accounting treatment depends on the nature of the spending.',
        body:
          'The timing of expense recognition is the key difference.',
        cards: [
          {
            number: 'EXP',
            title: 'Expense',
            text:
              'Recognized on the income statement in the current period, reducing current earnings.',
          },
          {
            number: 'CAP',
            title: 'Capitalize',
            text:
              'Record the spending as an asset on the balance sheet and recognize expense over future periods, often through depreciation or amortization.',
          },
        ],
        plainTitle: 'Cash still leaves',
        plainText:
          'Capitalizing a purchase does not mean it was free. CapEx is still generally a cash outflow, usually shown in cash flow from investing.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title:
          'A company buys a new $50 million factory. Which treatment is most typical at purchase?',
        options: [
          'Expense the full $50 million through operating expenses immediately',
          'Record a long-term asset and show the cash purchase in investing cash flow',
          'Record $50 million of revenue',
          'Increase accounts receivable',
        ],
        correctIndex: 1,
        correctTitle: 'Right.',
        correctText:
          'The factory is a long-term asset. Its purchase is generally capitalized, while the cash outflow appears in investing activities.',
        wrongTitle: 'Think long-term asset.',
        wrongText:
          'Long-lived productive assets are generally capitalized rather than fully expensed immediately.',
      },
      {
        type: 'fill',
        eyebrow: 'VOCABULARY CHECK',
        title:
          'Recording a long-term expenditure as an asset rather than immediately expensing it is called ______.',
        answer: 'capitalizing',
        alternatives: [
          'capitalizing',
          'capitalization',
          'capitalize',
          'capitalized',
        ],
        hint: 'Same root word as capital expenditure.',
        successText:
          'Exactly. Capitalizing a cost records it as an asset that is generally expensed over future periods.',
      },
      {
        type: 'complete',
        title: 'CapEx affects cash immediately but earnings over time.',
        body:
          'Next we move to another major source of cash-flow differences: working capital.',
        takeaway:
          'CapEx is investment in long-term assets, usually recorded as an asset and reflected as an investing cash outflow.',
      },
    ],
  },

  {
    id: 'working-capital',
    title: 'Working Capital',
    summary:
      'Receivables, inventory, payables, and why growth can consume cash.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'CASH HIDES HERE',
        title: 'Working capital captures short-term operating assets and liabilities.',
        body:
          'For banking and modeling, the most useful concept is usually operating net working capital rather than simply all current assets minus all current liabilities.',
        noteTitle: 'Know the intuition',
        note:
          'An increase in operating net working capital is generally a use of cash. A decrease is generally a source of cash.',
      },
      {
        type: 'concept',
        eyebrow: 'THE MAJOR ACCOUNTS',
        title: 'Some operating accounts tie up cash. Others preserve it.',
        body:
          'Think about whether cash has already been collected or paid.',
        cards: [
          {
            number: 'AR',
            title: 'Accounts Receivable',
            text:
              'Customers owe the company money. Higher receivables generally mean more cash is tied up waiting to be collected.',
          },
          {
            number: 'INV',
            title: 'Inventory',
            text:
              'The company has spent money on products or materials that have not yet been sold.',
          },
          {
            number: 'AP',
            title: 'Accounts Payable',
            text:
              'The company owes suppliers money. Higher payables generally mean the company has delayed a cash payment.',
          },
        ],
        plainTitle: 'Cash-flow intuition',
        plainText:
          'More operating assets usually consume cash. More operating liabilities usually provide cash, all else equal.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title:
          'Accounts receivable increases by $20 million because customers have not paid yet. What is the general cash-flow impact?',
        options: [
          'Source of cash',
          'Use of cash',
          'No possible relationship to cash',
          'Always financing cash flow',
        ],
        correctIndex: 1,
        correctTitle: 'Exactly.',
        correctText:
          'Revenue may have been recognized, but the company has not collected the cash. The increase in receivables is therefore generally a use of cash.',
        wrongTitle: 'Follow the cash.',
        wrongText:
          'Higher receivables mean more money is still sitting with customers rather than in the company’s bank account.',
      },
      {
        type: 'number',
        eyebrow: 'MINI CALCULATION',
        title:
          'Operating current assets are $180 million and operating current liabilities are $120 million. What is operating net working capital?',
        answer: 60,
        tolerance: 0.01,
        suffix: 'million',
        placeholder: 'Enter the answer in millions',
        explanation:
          '$180 million of operating current assets − $120 million of operating current liabilities = $60 million of operating net working capital.',
      },
      {
        type: 'complete',
        title: 'Working capital explains why earnings and cash can diverge.',
        body:
          'Next we look at a particularly important working-capital liability: deferred revenue.',
        takeaway:
          'Increases in operating assets generally use cash, while increases in operating liabilities generally provide cash.',
      },
    ],
  },

  {
    id: 'deferred-revenue',
    title: 'Deferred Revenue',
    summary:
      'What happens when a customer pays before the company earns the revenue.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'CASH FIRST, REVENUE LATER',
        title: 'Deferred revenue begins with the company getting paid early.',
        body:
          'If a customer pays before the company has delivered the promised product or service, the company generally cannot recognize all of that amount as revenue yet.',
        noteTitle: 'Why it is a liability',
        note:
          'The company has the cash, but it still owes the customer a product or service.',
      },
      {
        type: 'concept',
        eyebrow: 'THE SEQUENCE',
        title: 'Cash and revenue occur at different times.',
        body:
          'This is a classic accrual-accounting timing difference.',
        cards: [
          {
            number: '1',
            title: 'Customer Pays',
            text:
              'Cash increases and deferred revenue increases as a liability.',
          },
          {
            number: '2',
            title: 'Company Performs',
            text:
              'Deferred revenue decreases and revenue is recognized on the income statement.',
          },
        ],
        plainTitle: 'Common example',
        plainText:
          'A software customer pays for a one-year subscription upfront. The company receives the cash immediately but generally recognizes the revenue over the service period.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title:
          'A customer prepays $1,200 for a one-year service contract before any service has been delivered. What generally increases immediately?',
        options: [
          'Cash and deferred revenue',
          'Revenue only',
          'Accounts receivable only',
          'Debt and interest expense',
        ],
        correctIndex: 0,
        correctTitle: 'Correct.',
        correctText:
          'The company receives cash but still owes the service, creating deferred revenue.',
        wrongTitle: 'Remember the obligation.',
        wrongText:
          'Receiving cash does not necessarily mean revenue has already been earned.',
      },
      {
        type: 'fill',
        eyebrow: 'CLASSIFY IT',
        title:
          'Deferred revenue is generally recorded as a ______ on the balance sheet.',
        answer: 'liability',
        alternatives: ['liability'],
        hint: 'The company still owes something to the customer.',
        successText:
          'Exactly. Deferred revenue represents an obligation to provide goods or services in the future.',
      },
      {
        type: 'complete',
        title: 'Cash collection does not automatically equal revenue recognition.',
        body:
          'Next we look at another item that reduces accounting profit without requiring the same amount of current cash: stock-based compensation.',
        takeaway:
          'Deferred revenue is a liability created when cash is received before the related revenue has been earned.',
      },
    ],
  },

  {
    id: 'stock-based-compensation',
    title: 'Stock-Based Compensation',
    summary:
      'Why paying employees with equity still creates an expense and potential dilution.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'NON-CASH, BUT NOT FREE',
        title: 'Companies can compensate employees with equity as well as cash.',
        body:
          'Stock-based compensation, or SBC, is generally recognized as an expense even though it does not require an equivalent current-period cash payment.',
        noteTitle: 'Important nuance',
        note:
          'Calling SBC “non-cash” does not mean it has no economic cost. Issuing equity can dilute existing shareholders.',
      },
      {
        type: 'concept',
        eyebrow: 'TWO EFFECTS',
        title: 'SBC affects both profitability and ownership.',
        body:
          'That is why analysts care about it.',
        cards: [
          {
            number: 'IS',
            title: 'Income Statement',
            text:
              'Stock-based compensation is recognized as an expense and therefore reduces accounting earnings.',
          },
          {
            number: 'CFS',
            title: 'Cash Flow Statement',
            text:
              'Because the expense itself is non-cash, it is generally added back in the operating cash flow reconciliation.',
          },
          {
            number: 'SH',
            title: 'Shareholders',
            text:
              'Equity compensation can increase diluted share count and reduce existing shareholders’ ownership percentage.',
          },
        ],
        plainTitle: 'Do not say this',
        plainText:
          '“SBC does not matter because it is non-cash” is poor reasoning. Cash timing and economic cost are not the same thing.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title:
          'Why might investors still care about stock-based compensation even though it is non-cash?',
        options: [
          'It can dilute existing shareholders',
          'It automatically eliminates taxes',
          'It is always recorded as debt',
          'It increases cash revenue',
        ],
        correctIndex: 0,
        correctTitle: 'Exactly.',
        correctText:
          'Equity compensation can increase the diluted share count, spreading ownership across more shares.',
        wrongTitle: 'Think ownership.',
        wrongText:
          'The key economic issue is potential shareholder dilution.',
      },
      {
        type: 'complete',
        title: 'Non-cash does not mean economically irrelevant.',
        body:
          'Next we look at taxes, where accounting timing differences can create another layer of balance sheet complexity.',
        takeaway:
          'SBC reduces accounting profit, is generally added back as a non-cash operating adjustment, and may dilute shareholders.',
      },
    ],
  },

  {
    id: 'taxes',
    title: 'Taxes & Deferred Taxes',
    summary:
      'Tax expense, cash taxes, and why timing differences create deferred tax balances.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'KEEP THE FIRST PASS SIMPLE',
        title: 'Accounting tax expense and actual cash taxes do not always match.',
        body:
          'Differences between financial accounting rules and tax rules can cause income or expenses to be recognized at different times.',
        noteTitle: 'Do not overdo this yet',
        note:
          'For early interviews, understand the intuition behind deferred taxes before worrying about complicated tax accounting.',
      },
      {
        type: 'concept',
        eyebrow: 'TIMING DIFFERENCES',
        title: 'Deferred taxes move tax effects across periods.',
        body:
          'Two balance sheet concepts come up most often.',
        cards: [
          {
            number: 'DTA',
            title: 'Deferred Tax Asset',
            text:
              'Generally represents a potential future tax benefit created by timing differences or certain tax attributes.',
          },
          {
            number: 'DTL',
            title: 'Deferred Tax Liability',
            text:
              'Generally represents taxes expected to be paid in the future because of timing differences.',
          },
        ],
        plainTitle: 'The intuition',
        plainText:
          'Deferred taxes often exist because book accounting and tax accounting recognize the same economics in different periods.',
      },
      {
        type: 'number',
        eyebrow: 'MINI CALCULATION',
        title:
          'Pre-tax income is $100 million and the simplified tax rate is 25%. Ignoring deferred-tax complications, what is tax expense?',
        answer: 25,
        tolerance: 0.01,
        suffix: 'million',
        placeholder: 'Enter the answer in millions',
        explanation:
          '$100 million × 25% = $25 million of tax expense.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title:
          'What is the simplest reason a deferred tax balance can exist?',
        options: [
          'Book accounting and tax accounting can recognize items at different times',
          'Taxes never require cash',
          'Revenue is always tax-free',
          'All companies use identical tax rules worldwide',
        ],
        correctIndex: 0,
        correctTitle: 'Exactly.',
        correctText:
          'Timing differences between book and tax accounting can create future tax benefits or obligations.',
        wrongTitle: 'Think timing.',
        wrongText:
          'Deferred taxes often arise because the same economic item is recognized in different periods for book and tax purposes.',
      },
      {
        type: 'complete',
        title: 'You have enough tax accounting for the foundation layer.',
        body:
          'Next we move to assets created frequently during acquisitions: goodwill and intangible assets.',
        takeaway:
          'Book tax expense and cash taxes can differ, creating deferred tax assets or liabilities through timing differences.',
      },
    ],
  },

  {
    id: 'goodwill-intangibles',
    title: 'Goodwill & Intangible Assets',
    summary:
      'What acquisition accounting puts on the balance sheet beyond physical assets.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'M&A STARTS SHOWING UP',
        title: 'A company can own valuable assets that you cannot physically touch.',
        body:
          'Brands, patents, customer relationships, software, and other identifiable intangibles can carry significant economic value.',
        noteTitle: 'Why bankers care',
        note:
          'Goodwill and intangible assets become especially important in acquisition accounting and M&A analysis.',
      },
      {
        type: 'concept',
        eyebrow: 'DO NOT CONFUSE THEM',
        title: 'Identifiable intangibles and goodwill are different.',
        body:
          'Both can arise in acquisitions, but they represent different things.',
        cards: [
          {
            number: 'IA',
            title: 'Identifiable Intangibles',
            text:
              'Separately identifiable non-physical assets such as patents, trademarks, technology, and customer relationships.',
          },
          {
            number: 'GW',
            title: 'Goodwill',
            text:
              'The residual acquisition value remaining after allocating the purchase price to identifiable assets and liabilities at fair value.',
          },
        ],
        plainTitle: 'Simplified goodwill formula',
        plainText:
          'Goodwill ≈ Purchase Price − Fair Value of Identifiable Net Assets Acquired.',
      },
      {
        type: 'number',
        eyebrow: 'MINI CALCULATION',
        title:
          'A buyer pays $600 million for a company whose identifiable assets are worth $500 million and liabilities are $150 million. Using the simplified formula, how much goodwill is created?',
        answer: 250,
        tolerance: 0.01,
        suffix: 'million',
        placeholder: 'Enter the answer in millions',
        explanation:
          'Identifiable net assets = $500 million − $150 million = $350 million. $600 million purchase price − $350 million = $250 million of goodwill.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title:
          'Which asset is most likely to be an identifiable intangible?',
        options: [
          'Cash',
          'Inventory',
          'Customer relationships',
          'Accounts payable',
        ],
        correctIndex: 2,
        correctTitle: 'Correct.',
        correctText:
          'Customer relationships can be separately identifiable intangible assets in acquisition accounting.',
        wrongTitle: 'Think non-physical value.',
        wrongText:
          'Customer relationships are non-physical assets that may be separately identified and valued.',
      },
      {
        type: 'complete',
        title: 'Goodwill is the acquisition residual, not a pile of mysterious cash.',
        body:
          'We finish the module by turning financial-statement numbers into useful ratios.',
        takeaway:
          'Identifiable intangible assets can be separately valued, while goodwill represents residual acquisition value beyond identifiable net assets.',
      },
    ],
  },

  {
    id: 'financial-ratios',
    title: 'Basic Financial Ratios',
    summary:
      'Margins, liquidity, and leverage metrics that turn raw statements into analysis.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'NUMBERS NEED CONTEXT',
        title: '$100 million of profit means very little by itself.',
        body:
          'Ratios let you compare companies of different sizes and analyze profitability, liquidity, and leverage more intelligently.',
        noteTitle: 'Do not memorize 50 ratios',
        note:
          'For banking, focus on ratios that actually help you understand operating performance, financial position, and valuation.',
      },
      {
        type: 'concept',
        eyebrow: 'THREE USEFUL CATEGORIES',
        title: 'Ratios answer different types of questions.',
        body:
          'Start with a few intuitive examples.',
        cards: [
          {
            number: 'M',
            title: 'Margins',
            text:
              'Measure profitability relative to revenue, such as gross margin, EBITDA margin, or net margin.',
          },
          {
            number: 'LQ',
            title: 'Liquidity',
            text:
              'Measures the company’s ability to meet shorter-term obligations, such as the current ratio.',
          },
          {
            number: 'LV',
            title: 'Leverage',
            text:
              'Measures debt relative to the company’s earnings or capital structure, such as Debt / EBITDA.',
          },
        ],
        plainTitle: 'Why ratios help',
        plainText:
          'A $200 million EBITDA business looks very different if it has $500 million of revenue versus $5 billion of revenue.',
      },
      {
        type: 'number',
        eyebrow: 'MARGIN CALCULATION',
        title:
          'A company generates $200 million of EBITDA on $1 billion of revenue. What is its EBITDA margin as a percentage?',
        answer: 20,
        tolerance: 0.01,
        suffix: '%',
        placeholder: 'Enter the percentage',
        explanation:
          '$200 million ÷ $1,000 million = 20% EBITDA margin.',
      },
      {
        type: 'number',
        eyebrow: 'LEVERAGE CALCULATION',
        title:
          'A company has $600 million of debt and $200 million of EBITDA. What is Debt / EBITDA?',
        answer: 3,
        tolerance: 0.01,
        suffix: 'x',
        placeholder: 'Enter the multiple',
        explanation:
          '$600 million of debt ÷ $200 million of EBITDA = 3.0x Debt / EBITDA.',
      },
      {
        type: 'mcq',
        eyebrow: 'FINAL CHECK',
        title:
          'If two companies have identical EBITDA but Company A generates that EBITDA on much less revenue, what does Company A generally have?',
        options: [
          'A higher EBITDA margin',
          'A lower EBITDA margin',
          'Automatically more debt',
          'Automatically less cash',
        ],
        correctIndex: 0,
        correctTitle: 'Exactly.',
        correctText:
          'Generating the same EBITDA from less revenue means a greater percentage of revenue is converted into EBITDA.',
        wrongTitle: 'Think percentage.',
        wrongText:
          'Margin measures profit relative to revenue. Same profit with lower revenue means the margin is higher.',
      },
      {
        type: 'written',
        eyebrow: 'PUT IT TOGETHER',
        title:
          'Why are margins often more useful than looking at profit alone?',
        body:
          'Think about comparing companies of different sizes.',
        placeholder: 'Margins are useful because...',
        modelAnswer:
          'Margins show profitability relative to revenue, making it easier to compare operating performance across companies of different sizes.',
      },
      {
        type: 'complete',
        title: 'Accounting Foundations complete.',
        body:
          'You now understand the three statements, accrual accounting, EBITDA, D&A, CapEx, working capital, deferred revenue, SBC, taxes, goodwill, and basic ratios. Next we make the statements move.',
        takeaway:
          'The next step is not more definitions. It is learning how individual transactions flow through all three financial statements.',
      },
    ],
  },
]