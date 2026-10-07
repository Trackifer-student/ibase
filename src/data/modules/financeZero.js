export const financeZeroModules = [
  {
    id: 'business-basics',
    number: '00A',
    title: 'How Businesses Actually Work',
    subtitle: 'Start here if finance feels like another language.',
    description:
      'Build the mental model everything else rests on: businesses, customers, revenue, costs, profit, cash, and ownership.',
    lessons: [
      {
        id: 'what-is-a-business',
        title: 'What Is a Business?',
        summary:
          'Start at absolute zero: what a company does and why it exists.',
        concepts: ['business', 'customer'],
        steps: [
          {
            type: 'intro',
            eyebrow: 'FINANCE FROM ZERO',
            title: 'Before finance, understand the thing finance is analyzing.',
            body:
              'Investment bankers spend their careers analyzing businesses. So we should start with the most basic question possible: what is a business?',
            noteTitle: 'No prior knowledge assumed',
            note:
              'Throughout Finance From Zero, we are going to build every major idea from the ground up rather than assuming you already know the vocabulary.',
          },
          {
            type: 'teach',
            eyebrow: 'THE CORE IDEA',
            title: 'A business solves a problem for a customer.',
            paragraphs: [
              'At its simplest, a [[business|business]] provides something that another person or company values.',
              'That “something” might be physical. Nike sells shoes. It might be digital. Spotify sells access to music. It might be a service. A barber sells haircuts.',
              'The person or company paying for that product or service is the [[customer|customer]].',
              'If customers value what the business provides enough to pay for it, the business can generate money from those customers.',
            ],
            calloutTitle: 'A useful mental model',
            callout:
              'Business → provides value → customer pays → business receives money.',
          },
          {
            type: 'worked',
            eyebrow: 'WALK THROUGH IT',
            title: 'Imagine you start a lawn-care business.',
            scenario:
              'A homeowner pays you $50 to mow their lawn.',
            workedSteps: [
              {
                label: '1. Customer has a problem',
                text:
                  'Their lawn needs to be cut, and they either cannot or do not want to do it themselves.',
              },
              {
                label: '2. You provide value',
                text:
                  'You spend your time and use your equipment to mow the lawn.',
              },
              {
                label: '3. Customer pays you',
                text:
                  'The homeowner gives your business $50.',
              },
              {
                label: '4. A business transaction occurred',
                text:
                  'Your business provided a service in exchange for money.',
              },
            ],
            takeaway:
              'Almost every giant company is a much more complicated version of this same basic exchange.',
          },
          {
            type: 'mcq',
            eyebrow: 'CHECK YOUR MODEL',
            title:
              'A company builds software that helps hospitals schedule patients, and hospitals pay to use it. Who are the customers?',
            options: [
              'The hospitals paying for the software',
              'Only the software engineers',
              'The company’s bank',
              'Every person who owns a computer',
            ],
            correctIndex: 0,
            correctTitle: 'Exactly.',
            correctText:
              'The hospitals are paying the company for the product, so they are the customers.',
            wrongTitle: 'Follow the money.',
            wrongText:
              'Ask who receives value from the company and pays the company for it.',
            reviewConcepts: ['customer', 'business'],
          },
          {
  type: 'written',
  eyebrow: 'USE YOUR OWN WORDS',
  title:
    'Choose any business you know. What does it provide, and who pays it?',
  body:
    'Do not use finance vocabulary. Explain it like you would to a friend.',
  placeholder:
    'For example: Chipotle provides..., and its customers are...',
  modelAnswer:
    'Chipotle provides prepared meals. Its customers are people who pay Chipotle to buy those meals.',
  reviewConcepts: ['business', 'customer'],
  rubric: {
    criteria: [
      {
        id: 'offering',
        label:
          'explain what the business provides or sells',
        keywords: [
          'provide',
          'provides',
          'sell',
          'sells',
          'makes',
          'offers',
          'product',
          'service',
          'food',
          'software',
          'shoes',
          'clothes',
          'meals',
        ],
      },
      {
        id: 'customer',
        label:
          'identify who buys it or pays the business',
        keywords: [
          'customer',
          'customers',
          'people',
          'buyer',
          'buyers',
          'buy',
          'buys',
          'pay',
          'pays',
          'users',
          'clients',
          'companies',
          'businesses',
        ],
      },
    ],
  },
},

          {
            type: 'complete',
            title: 'You now have the starting point for corporate finance.',
            body:
              'Every concept we learn later describes some part of how a business earns money, funds itself, grows, or creates value.',
            takeaway:
              'A business provides goods or services that customers value enough to pay for.',
          },
        ],
      },

      {
        id: 'how-business-makes-money',
        title: 'How a Business Makes Money',
        summary:
          'Follow one dollar from a customer into a company.',
        concepts: ['revenue', 'expense', 'profit'],
        prerequisites: ['business', 'customer'],
        steps: [
          {
            type: 'intro',
            eyebrow: 'FOLLOW THE DOLLAR',
            title: 'A customer paying a company is only the beginning.',
            body:
              'Companies collect money from customers, but they also spend money to produce products, hire employees, rent buildings, advertise, and operate.',
            noteTitle: 'The key question',
            note:
              'How much money came from customers, and how much did the company have to spend to earn it?',
          },
          {
            type: 'teach',
            eyebrow: 'FIRST: MONEY FROM CUSTOMERS',
            title: 'Sales create revenue.',
            paragraphs: [
              'When a business sells goods or services, the value of those sales is called [[revenue|revenue]].',
              'Suppose your lawn-care business mows 10 lawns for $50 each.',
              '10 lawns × $50 = $500.',
              'Your business generated $500 of revenue.',
            ],
            calloutTitle: 'Important',
            callout:
              'Revenue is not the same as profit. Revenue is the amount generated from sales before subtracting the costs of running the business.',
          },
          {
            type: 'number',
            eyebrow: 'YOUR TURN',
            title:
              'A coffee shop sells 200 drinks for an average of $5 each. How much revenue did it generate?',
            answer: 1000,
            tolerance: 0.01,
            suffix: 'dollars',
            placeholder: 'Enter revenue',
            explanation:
              '200 drinks × $5 per drink = $1,000 of revenue.',
            reviewConcepts: ['revenue'],
          },
          {
            type: 'teach',
            eyebrow: 'THEN: THE COST OF RUNNING IT',
            title: 'Businesses also have expenses.',
            paragraphs: [
              'The money required to operate a business is reflected through [[expense|expenses]].',
              'Our lawn-care business might need gasoline, equipment, advertising, insurance, and eventually employees.',
              'If the business earns $500 from customers but spends $300 operating, the entire $500 is not yours to keep.',
            ],
            calloutTitle: 'Do not confuse',
            callout:
              'Revenue tells you how much the business sold. Expenses tell you what it cost to operate.',
          },
          {
            type: 'worked',
            eyebrow: 'PUT THEM TOGETHER',
            title: 'Revenue minus expenses gets us to profit.',
            scenario:
              'Your lawn-care business earns $500 of revenue this week.',
            workedSteps: [
              {
                label: 'Revenue',
                text: '$500 comes from customers.',
              },
              {
                label: 'Gas',
                text: 'You spend $80.',
              },
              {
                label: 'Equipment',
                text: 'You incur $70 of relevant cost.',
              },
              {
                label: 'Other expenses',
                text: 'You incur another $100.',
              },
              {
                label: 'Total expenses',
                text: '$80 + $70 + $100 = $250.',
              },
              {
                label: 'Profit',
                text: '$500 revenue − $250 expenses = $250 profit.',
              },
            ],
            takeaway:
              '[[profit|Profit]] is what remains after subtracting the relevant expenses from revenue.',
          },
          {
            type: 'number',
            eyebrow: 'INDEPENDENT CHECK',
            title:
              'A small business generates $8,000 of revenue and has $5,500 of expenses. What is profit?',
            answer: 2500,
            tolerance: 0.01,
            suffix: 'dollars',
            placeholder: 'Enter profit',
            explanation:
              '$8,000 of revenue − $5,500 of expenses = $2,500 of profit.',
            reviewConcepts: ['revenue', 'expense', 'profit'],
          },
          {
            type: 'complete',
            title: 'You now understand the basic economic engine of a business.',
            body:
              'Next we slow down and separate three words that beginners constantly mix together: revenue, profit, and cash.',
            takeaway:
              'A business generates revenue from sales, incurs expenses to operate, and earns profit when revenue exceeds expenses.',
          },
        ],
      },

      {
        id: 'revenue-profit-cash',
        title: 'Revenue vs. Profit vs. Cash',
        summary:
          'Three basic words that mean very different things.',
        concepts: ['revenue', 'profit', 'cash', 'cashFlow'],
        prerequisites: ['revenue', 'expense', 'profit'],
        steps: [
          {
            type: 'intro',
            eyebrow: 'THREE DIFFERENT THINGS',
            title: '$1 million of revenue does not mean the company made $1 million.',
            body:
              'Revenue, profit, and cash answer different questions. Mixing them up causes problems later in accounting, valuation, and interviews.',
            noteTitle: 'This matters a lot',
            note:
              'Before moving on, you should be able to explain the difference without memorizing a textbook definition.',
          },
          {
            type: 'concept',
            eyebrow: 'SIDE BY SIDE',
            title: 'Ask a different question for each concept.',
            body:
              'The words are related, but they are not interchangeable.',
            cards: [
              {
                number: 'R',
                title: 'Revenue',
                text:
                  'How much value did the business generate from selling goods or services?',
              },
              {
                number: 'P',
                title: 'Profit',
                text:
                  'How much remained after subtracting the relevant expenses?',
              },
              {
                number: 'C',
                title: 'Cash',
                text:
                  'How much actual money does the business currently have available?',
              },
            ],
            plainTitle: 'One sentence',
            plainText:
              '[[revenue|Revenue]] measures sales, [[profit|profit]] measures earnings after expenses, and [[cash|cash]] is actual money available.',
          },
          {
            type: 'worked',
            eyebrow: 'WHY THIS GETS CONFUSING',
            title: 'Imagine you sell a $1,000 service today.',
            scenario:
              'You complete the work today, but the customer says they will pay next month.',
            workedSteps: [
              {
                label: 'Did you make a sale?',
                text:
                  'Yes. You completed the service.',
              },
              {
                label: 'Did you generate revenue?',
                text:
                  'Yes. The business earned $1,000 from the sale.',
              },
              {
                label: 'Did you receive the $1,000 cash?',
                text:
                  'No. The customer has not paid yet.',
              },
              {
                label: 'What does this prove?',
                text:
                  'Revenue and cash do not always happen at the same time.',
              },
            ],
            takeaway:
              'This timing difference is one of the reasons accounting exists.',
          },
          {
            type: 'mcq',
            eyebrow: 'CHECK THE IDEA',
            title:
              'You complete $2,000 of work today. The customer will pay next month. Which statement is most accurate?',
            options: [
              'You can have revenue even though the cash has not arrived yet',
              'No economic activity happened',
              'Revenue and cash must always move together',
              'The customer automatically becomes an owner',
            ],
            correctIndex: 0,
            correctTitle: 'Exactly.',
            correctText:
              'The business can earn revenue before actually collecting the related cash.',
            wrongTitle: 'Focus on timing.',
            wrongText:
              'Completing the sale and collecting the cash can happen at different times.',
            reviewConcepts: ['revenue', 'cash'],
          },
          {
            type: 'teach',
            eyebrow: 'ONE MORE TERM',
            title: 'Cash flow tracks actual money moving.',
            paragraphs: [
              'When cash enters or leaves a business, that movement is part of [[cashFlow|cash flow]].',
              'A customer paying you creates a cash inflow.',
              'Paying rent creates a cash outflow.',
              'Later, we will learn why a profitable company can still run into serious trouble if its cash flow is poor.',
            ],
            calloutTitle: 'Foundation for later',
            callout:
              'DCF literally stands for Discounted Cash Flow. Understanding cash flow now will make valuation much easier later.',
          },
          {
            type: 'complete',
            title: 'Revenue, profit, and cash are now separate ideas.',
            body:
              'Next we introduce ownership: what it actually means when someone says they “own part of a company.”',
            takeaway:
              'Revenue measures sales, profit reflects earnings after expenses, and cash reflects actual money held by the business.',
          },
        ],
      },

      {
        id: 'owning-a-company',
        title: 'What Does It Mean to Own a Company?',
        summary:
          'Equity, shareholders, and what ownership actually represents.',
        concepts: ['equity', 'shareholder', 'share'],
        prerequisites: ['business', 'profit'],
        steps: [
          {
            type: 'intro',
            eyebrow: 'OWNERSHIP',
            title: 'A company can be divided into pieces of ownership.',
            body:
              'Finance uses the word equity constantly. Before we use it in formulas, let’s make the idea intuitive.',
            noteTitle: 'Plain English first',
            note:
              '[[equity|Equity]] basically means ownership.',
          },
          {
            type: 'worked',
            eyebrow: 'START WITH A TINY COMPANY',
            title: 'Imagine you and a friend start a business.',
            scenario:
              'You agree that the company has 100 ownership units.',
            workedSteps: [
              {
                label: 'You own 60 units',
                text:
                  'You own 60% of the company.',
              },
              {
                label: 'Your friend owns 40 units',
                text:
                  'Your friend owns 40% of the company.',
              },
              {
                label: 'Those units represent ownership',
                text:
                  'We can call those ownership units [[share|shares]].',
              },
              {
                label: 'Who are the owners?',
                text:
                  'People who own shares are [[shareholder|shareholders]].',
              },
            ],
            takeaway:
              'A share is simply a unit representing part ownership of a company.',
          },
          {
            type: 'number',
            eyebrow: 'OWNERSHIP CHECK',
            title:
              'A company has 1,000 shares outstanding. You own 250. What percentage of the company do you own?',
            answer: 25,
            tolerance: 0.01,
            suffix: '%',
            placeholder: 'Enter ownership percentage',
            explanation:
              '250 shares ÷ 1,000 total shares = 25% ownership.',
            reviewConcepts: ['share', 'shareholder', 'equity'],
          },
          {
            type: 'teach',
            eyebrow: 'WHY OWNERSHIP HAS VALUE',
            title: 'Owners participate in the value of the company.',
            paragraphs: [
              'If a company becomes more valuable, its owners can benefit because their ownership stake may also become more valuable.',
              'If the company performs badly, that ownership can lose value.',
              'This connection between ownership, company value, and investor returns sits underneath much of corporate finance.',
            ],
            calloutTitle: 'Coming later',
            callout:
              'Eventually we will distinguish Equity Value from Enterprise Value. For now, just lock in that equity means ownership.',
          },
          {
            type: 'complete',
            title: 'Equity now has a real meaning.',
            body:
              'Next we look at why some companies trade on the stock market while others do not.',
            takeaway:
              'Equity represents ownership, shares divide that ownership into units, and shareholders own those shares.',
          },
        ],
      },

      {
        id: 'private-vs-public',
        title: 'Private vs. Public Companies',
        summary:
          'Why some shares trade freely while others do not.',
        concepts: [
          'privateCompany',
          'publicCompany',
          'stockMarket',
          'share',
        ],
        prerequisites: ['equity', 'share', 'shareholder'],
        steps: [
          {
            type: 'intro',
            eyebrow: 'WHO CAN BUY THE COMPANY?',
            title: 'Not every company is listed on the stock market.',
            body:
              'Companies can be privately owned or publicly traded, and that difference changes how their shares are bought, sold, and valued.',
            noteTitle: 'Keep the distinction simple',
            note:
              'Public does not mean “owned by the government.” It means ownership shares trade in public markets.',
          },
          {
            type: 'concept',
            eyebrow: 'TWO STRUCTURES',
            title: 'Private and public refer to how ownership is held and traded.',
            body:
              'Both are still businesses. The difference is largely in their ownership and market access.',
            cards: [
              {
                number: 'PVT',
                title: 'Private Company',
                text:
                  'Ownership is held privately and shares are not freely traded on a public stock exchange.',
              },
              {
                number: 'PUB',
                title: 'Public Company',
                text:
                  'Shares can generally be bought and sold by public investors through a stock exchange.',
              },
            ],
            plainTitle: 'Examples',
            plainText:
              'A startup funded by founders and venture investors may be a [[privateCompany|private company]]. Apple is a [[publicCompany|public company]].',
          },
          {
            type: 'teach',
            eyebrow: 'THE STOCK MARKET',
            title: 'Public shares need a marketplace.',
            paragraphs: [
              'The [[stockMarket|stock market]] is where investors buy and sell ownership shares of public companies.',
              'When you hear that Apple stock traded at a certain price, that price represents the market price for one share of Apple at that moment.',
              'Millions of investors making buy and sell decisions help determine those market prices.',
            ],
            calloutTitle: 'Important',
            callout:
              'Buying a share in the stock market usually means buying that share from another investor, not handing money directly to the company.',
          },
          {
            type: 'mcq',
            eyebrow: 'QUICK CHECK',
            title:
              'Which statement best describes a public company?',
            options: [
              'Its shares can generally be traded by public investors on an exchange',
              'It cannot have employees',
              'The government must own it',
              'It cannot borrow money',
            ],
            correctIndex: 0,
            correctTitle: 'Exactly.',
            correctText:
              'Public companies have shares that can generally trade in public securities markets.',
            wrongTitle: 'Focus on ownership.',
            wrongText:
              'Public versus private primarily describes how ownership shares are held and traded.',
            reviewConcepts: [
              'publicCompany',
              'privateCompany',
              'stockMarket',
            ],
          },
          {
            type: 'complete',
            title: 'You now understand the basic ownership side of finance.',
            body:
              'But companies do not only fund themselves by selling ownership. They can also borrow money.',
            takeaway:
              'Private-company shares are privately held, while public-company shares can generally trade in public markets.',
          },
        ],
      },

      {
        id: 'debt-and-interest',
        title: 'Debt & Interest',
        summary:
          'What borrowing actually means before we talk about bonds, leverage, or LBOs.',
        concepts: ['debt', 'interest'],
        prerequisites: ['business', 'cash'],
        steps: [
          {
            type: 'intro',
            eyebrow: 'BORROWING',
            title: 'A company does not have to sell ownership to get money.',
            body:
              'It can borrow money instead. In finance, borrowed money is generally called debt.',
            noteTitle: 'Core distinction',
            note:
              'Equity makes someone an owner. Debt makes someone a lender.',
          },
          {
            type: 'worked',
            eyebrow: 'SIMPLE EXAMPLE',
            title: 'Your business needs a $10,000 lawn mower.',
            scenario:
              'You do not have $10,000 of cash available.',
            workedSteps: [
              {
                label: 'A bank lends you $10,000',
                text:
                  'Your business receives $10,000 of cash.',
              },
              {
                label: 'You now owe the bank',
                text:
                  'That $10,000 is [[debt|debt]].',
              },
              {
                label: 'The bank expects compensation',
                text:
                  'You agree to pay the bank [[interest|interest]] for using its money.',
              },
              {
                label: 'You eventually repay the borrowing',
                text:
                  'Debt normally comes with contractual repayment obligations.',
              },
            ],
            takeaway:
              'Debt gives the company money today in exchange for future payment obligations.',
          },
          {
            type: 'number',
            eyebrow: 'INTEREST CHECK',
            title:
              'A company borrows $1,000 at a simplified 5% annual interest rate. How much annual interest is that?',
            answer: 50,
            tolerance: 0.01,
            suffix: 'dollars',
            placeholder: 'Enter annual interest',
            explanation:
              '$1,000 × 5% = $50 of annual interest.',
            reviewConcepts: ['debt', 'interest'],
          },
          {
            type: 'concept',
            eyebrow: 'OWNER VS. LENDER',
            title: 'Equity and debt create very different relationships.',
            body:
              'This distinction will eventually become one of the most important ideas in finance.',
            cards: [
              {
                number: 'EQ',
                title: 'Equity Investor',
                text:
                  'Owns part of the business and participates in changes in its value.',
              },
              {
                number: 'D',
                title: 'Lender',
                text:
                  'Provides borrowed money and expects repayment plus agreed interest.',
              },
            ],
            plainTitle: 'Why companies use both',
            plainText:
              'Selling equity gives away ownership. Borrowing debt avoids that dilution but creates fixed payment obligations.',
          },
          {
            type: 'complete',
            title: 'You now understand the two basic ways outsiders fund companies.',
            body:
              'The next lesson gives those resources a broader name: capital.',
            takeaway:
              'Debt is borrowed money that normally requires repayment and interest; equity represents ownership.',
          },
        ],
      },

      {
        id: 'what-is-capital',
        title: 'What Does “Capital” Mean?',
        summary:
          'The finance word that appears everywhere once you understand what it really means.',
        concepts: ['capital', 'debt', 'equity'],
        prerequisites: ['debt', 'equity'],
        steps: [
          {
            type: 'intro',
            eyebrow: 'A WORD YOU WILL HEAR CONSTANTLY',
            title: 'Capital is funding that can be put to work.',
            body:
              'Companies need resources to build factories, hire employees, develop products, make acquisitions, and grow.',
            noteTitle: 'Plain English',
            note:
              'When someone says a company “needs capital,” think: the company needs financial resources to fund something.',
          },
          {
            type: 'teach',
            eyebrow: 'WHERE CAPITAL COMES FROM',
            title: 'Companies can obtain capital from owners or lenders.',
            paragraphs: [
              'A company can raise [[equity|equity]] capital by selling ownership.',
              'It can raise [[debt|debt]] capital by borrowing money.',
              'Together, debt and equity are the two broad sources of outside financing we will use throughout this course.',
            ],
            calloutTitle: 'Connect this to IB',
            callout:
              'Helping companies raise capital is one of the core businesses of an investment bank.',
          },
          {
            type: 'mcq',
            eyebrow: 'CONNECT THE CONCEPTS',
            title:
              'A company needs $500 million to build a factory. Which are two broad ways it could obtain outside capital?',
            options: [
              'Issue debt or issue equity',
              'Increase its font size or rename the company',
              'Only sell inventory',
              'Only reduce accounts payable',
            ],
            correctIndex: 0,
            correctTitle: 'Exactly.',
            correctText:
              'Companies can broadly raise capital from lenders through debt or from owners through equity.',
            wrongTitle: 'Go back to the funding sources.',
            wrongText:
              'The two broad external financing categories are debt and equity.',
            reviewConcepts: ['capital', 'debt', 'equity'],
          },
          {
  type: 'written',
  eyebrow: 'EXPLAIN IT',
  title:
    'In your own words, what does it mean when a company “raises capital”?',
  body:
    'Imagine you are explaining it to someone who has never taken a finance class.',
  placeholder:
    'A company raises capital when...',
  modelAnswer:
    'A company raises capital when it obtains money or financial resources, often by borrowing through debt or selling ownership through equity, so it can fund business needs.',
  reviewConcepts: [
    'capital',
    'debt',
    'equity',
  ],
  rubric: {
    criteria: [
      {
        id: 'funding',
        label:
          'explain that the company is obtaining money or funding',
        keywords: [
          'money',
          'funding',
          'funds',
          'capital',
          'resources',
          'financing',
          'cash',
        ],
      },
      {
        id: 'source-or-purpose',
        label:
          'explain where the funding can come from or what it is used for',
        keywords: [
          'debt',
          'borrow',
          'borrowing',
          'loan',
          'equity',
          'ownership',
          'shares',
          'invest',
          'investment',
          'grow',
          'growth',
          'business',
          'factory',
          'acquisition',
          'operations',
        ],
      },
    ],
  },
},

          {
            type: 'complete',
            title: 'Capital no longer needs to sound like finance jargon.',
            body:
              'You now have enough language to understand why investment banks exist in the first place.',
            takeaway:
              'Capital is funding used by a business, and debt and equity are the two major external sources of that funding.',
          },
        ],
      },
    ],
  },

  {
    id: 'markets-and-finance',
    number: '00B',
    title: 'Money, Markets & Investing',
    subtitle: 'Why financial markets exist.',
    description:
      'Build intuition for stocks, bonds, risk, return, interest rates, and how money moves between investors and companies.',
    lessonCount: 8,
  },

  {
    id: 'statements-and-value',
    number: '00C',
    title: 'Financial Statements & Value',
    subtitle: 'The bridge into real corporate finance.',
    description:
      'Learn why companies report financial information, what cash flow means, how time affects value, and why valuation exists.',
    lessonCount: 7,
  },
]