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
    lessons: [
      {
        id: 'why-people-invest',
        title: 'Why Do People Invest?',
        summary:
          'Why someone gives up money today in the hope of having more later.',
        concepts: ['investment', 'investor', 'return', 'risk'],
        prerequisites: ['capital'],
        steps: [
          {
            type: 'intro',
            eyebrow: 'MONEY TODAY VS. MONEY LATER',
            title: 'Investing starts with a trade-off.',
            body:
              'If you have $100 today, you can spend it now or put it into something that might create more value in the future. Choosing the second path is the basic idea behind investing.',
            noteTitle: 'Keep it simple',
            note:
              'An [[investment|investment]] is something you commit money to today because you expect future economic benefits.',
          },
          {
            type: 'teach',
            eyebrow: 'WHY WAIT?',
            title: 'Investors want a return for giving up money today.',
            paragraphs: [
              'An [[investor|investor]] gives up the ability to spend money immediately and accepts uncertainty about what happens next.',
              'In exchange, the investor hopes to earn a [[return|return]]: a gain relative to the amount invested.',
              'If you invest $100 and later have $110, you made $10 and earned a 10% return.',
              'The important word is hopes. Investment outcomes are not guaranteed, which introduces [[risk|risk]].',
            ],
            calloutTitle: 'Core relationship',
            callout:
              'Investing is a trade: money today is exchanged for the possibility of more money later, while accepting uncertainty.',
          },
          {
            type: 'worked',
            eyebrow: 'PUT NUMBERS ON IT',
            title: 'A simple investment return.',
            scenario:
              'You invest $500 in something. One year later it is worth $550.',
            workedSteps: [
              {
                label: 'Starting investment',
                text: 'You committed $500.',
              },
              {
                label: 'Ending value',
                text: 'Your investment is now worth $550.',
              },
              {
                label: 'Dollar gain',
                text: '$550 − $500 = $50.',
              },
              {
                label: 'Percentage return',
                text: '$50 ÷ $500 = 10%.',
              },
            ],
            takeaway:
              'A return compares what you gained or lost with the amount you originally invested.',
          },
          {
            type: 'number',
            eyebrow: 'YOUR TURN',
            title:
              'You invest $200 and later have $230. What percentage return did you earn?',
            answer: 15,
            tolerance: 0.01,
            suffix: '%',
            placeholder: 'Enter return',
            explanation:
              'The gain is $30. $30 ÷ $200 = 15%.',
            reviewConcepts: ['investment', 'return'],
          },
          {
            type: 'mcq',
            eyebrow: 'CHECK THE MODEL',
            title:
              'Why would an investor accept the uncertainty of investing instead of simply holding money?',
            options: [
              'Because the investor hopes to earn a return',
              'Because every investment is guaranteed to rise',
              'Because investing removes all risk',
              'Because companies are required to repay stock investors',
            ],
            correctIndex: 0,
            correctTitle: 'Exactly.',
            correctText:
              'Investors accept uncertainty because they expect the possibility of a worthwhile return.',
            wrongTitle: 'Think about the trade-off.',
            wrongText:
              'The investor gives up money today and accepts risk because of the possibility of future gain.',
            reviewConcepts: ['return', 'risk'],
          },
          {
            type: 'complete',
            title: 'You now know why investing exists.',
            body:
              'Next we look more closely at the relationship between risk and return.',
            takeaway:
              'Investors commit money today because they expect future benefits, but those benefits are uncertain.',
          },
        ],
      },

      {
        id: 'risk-and-return',
        title: 'Risk & Return',
        summary:
          'Why safer and riskier investments usually should not offer the same expected reward.',
        concepts: ['risk', 'return', 'investor'],
        prerequisites: ['investment', 'return'],
        steps: [
          {
            type: 'intro',
            eyebrow: 'NO FREE LUNCH',
            title: 'A higher potential return usually comes with a reason.',
            body:
              'If two investments offered the exact same expected return but one was clearly safer, most investors would prefer the safer one. The riskier investment would need to become more attractive somehow.',
            noteTitle: 'The intuition',
            note:
              'Investors generally want to be compensated for taking more [[risk|risk]].',
          },
          {
            type: 'teach',
            eyebrow: 'WHAT RISK REALLY MEANS',
            title: 'Risk is uncertainty about the outcome.',
            paragraphs: [
              'Risk does not simply mean “bad.” It means the future result is uncertain and could be worse than expected.',
              'A mature business with stable cash flow may be easier to predict than a new startup whose product might fail.',
              'Because the startup is less predictable, an investor may demand a higher potential [[return|return]] before being willing to invest.',
              'This relationship between uncertainty and required return will appear again in valuation, discount rates, debt pricing, and LBOs.',
            ],
            calloutTitle: 'Do not memorize a slogan',
            callout:
              'The point is not “high risk always equals high return.” The point is that investors generally require a better expected reward to willingly accept more risk.',
          },
          {
            type: 'worked',
            eyebrow: 'COMPARE TWO CHOICES',
            title: 'Why 6% is not always the same as 6%.',
            scenario:
              'Investment A has a very predictable 6% expected return. Investment B also offers 6%, but there is a meaningful chance you lose half your money.',
            workedSteps: [
              {
                label: 'Same stated return',
                text: 'Both appear to offer 6%.',
              },
              {
                label: 'Different risk',
                text: 'Investment B has far more uncertainty and downside.',
              },
              {
                label: 'Investor reaction',
                text:
                  'Most investors would prefer A unless B offered a better expected payoff.',
              },
            ],
            takeaway:
              'Return only makes sense when you consider the risk required to pursue it.',
          },
          {
            type: 'mcq',
            eyebrow: 'CHECK YOUR INTUITION',
            title:
              'A risky investment and a very safe investment offer the same expected return. All else equal, which is more attractive?',
            options: [
              'The safer investment',
              'The riskier investment',
              'They must be equally attractive',
              'Neither can have a return',
            ],
            correctIndex: 0,
            correctTitle: 'Right.',
            correctText:
              'If the expected reward is the same, investors generally prefer less uncertainty.',
            wrongTitle: 'Compare reward per unit of risk.',
            wrongText:
              'If two choices offer the same expected payoff, taking extra risk provides no obvious compensation.',
            reviewConcepts: ['risk', 'return'],
          },
          {
            type: 'written',
            eyebrow: 'EXPLAIN THE WHY',
            title:
              'Why might an investor demand a higher expected return from a risky startup than from a stable mature company?',
            body:
              'Explain the logic in plain English rather than repeating “higher risk, higher return.”',
            placeholder:
              'The startup is less predictable, so...',
            modelAnswer:
              'The startup has more uncertainty and a greater chance of disappointing or losing money, so an investor would want more potential upside before accepting that additional risk.',
            reviewConcepts: ['risk', 'return'],
            rubric: {
              criteria: [
                {
                  id: 'uncertainty',
                  label: 'recognize that the startup has more uncertainty or downside',
                  keywords: [
                    'risk',
                    'risky',
                    'uncertain',
                    'uncertainty',
                    'lose',
                    'loss',
                    'downside',
                    'fail',
                    'unpredictable',
                  ],
                },
                {
                  id: 'compensation',
                  label: 'explain that the investor wants more potential reward for accepting that risk',
                  keywords: [
                    'return',
                    'reward',
                    'upside',
                    'compensate',
                    'compensation',
                    'more money',
                    'higher payoff',
                    'higher potential',
                  ],
                },
              ],
            },
          },
          {
            type: 'complete',
            title: 'Risk and return now belong together in your head.',
            body:
              'Next we apply that idea to the most familiar ownership investment: stocks.',
            takeaway:
              'Investors compare expected reward with the uncertainty they must accept to pursue it.',
          },
        ],
      },

      {
        id: 'stocks-and-stock-prices',
        title: 'Stocks & Stock Prices',
        summary:
          'What a stock actually represents and what the quoted price means.',
        concepts: ['share', 'shareholder', 'stockMarket', 'stockPrice', 'marketCap'],
        prerequisites: ['equity', 'share', 'publicCompany'],
        steps: [
          {
            type: 'intro',
            eyebrow: 'OWNERSHIP BECOMES TRADEABLE',
            title: 'A stock is not just a ticker on a screen.',
            body:
              'When you buy stock in a public company, you are buying a small ownership claim in that company.',
            noteTitle: 'Connect this to 00A',
            note:
              'A stock is built on the same [[share|share]] concept you already learned: one unit of company ownership.',
          },
          {
            type: 'teach',
            eyebrow: 'ONE SHARE AT A TIME',
            title: 'Stock price is the market price of one share.',
            paragraphs: [
              'The [[stockMarket|stock market]] is where shares of public companies are bought and sold.',
              'The [[stockPrice|stock price]] is the current price at which one share can trade.',
              'If a company has 100 million shares and each trades for $20, the market value of all of its common equity is roughly $2 billion.',
              'That total is called [[marketCap|market capitalization]], often shortened to market cap.',
            ],
            calloutTitle: 'Formula',
            callout:
              'Market Capitalization = Share Price × Shares Outstanding.',
          },
          {
            type: 'number',
            eyebrow: 'CALCULATE IT',
            title:
              'A company has 50 million shares outstanding and each share trades for $30. What is its market capitalization in millions of dollars?',
            answer: 1500,
            tolerance: 0.01,
            suffix: 'million dollars',
            placeholder: 'Enter market cap',
            explanation:
              '50 million shares × $30 per share = $1,500 million, or $1.5 billion.',
            reviewConcepts: ['stockPrice', 'marketCap'],
          },
          {
            type: 'teach',
            eyebrow: 'IMPORTANT DISTINCTION',
            title: 'A low share price does not automatically mean a cheap company.',
            paragraphs: [
              'One company might trade at $20 per share and another at $200 per share.',
              'That does not tell you which entire company is worth more because the companies can have very different numbers of shares outstanding.',
              'You need both share price and share count to understand equity value.',
            ],
            calloutTitle: 'Example',
            callout:
              '10 shares at $200 each and 100 shares at $20 each both imply $2,000 of total equity value.',
          },
          {
            type: 'mcq',
            eyebrow: 'CHECK THE CONCEPT',
            title:
              'Company A trades at $10 per share and Company B trades at $100 per share. Can you conclude Company B is worth ten times as much?',
            options: [
              'No, because you also need to know how many shares each company has',
              'Yes, share price alone gives total company value',
              'Yes, because higher share prices always mean larger companies',
              'No, because stock prices have nothing to do with company value',
            ],
            correctIndex: 0,
            correctTitle: 'Exactly.',
            correctText:
              'Share price is only the price of one unit of ownership. Total equity value also depends on the number of shares.',
            wrongTitle: 'Think total ownership.',
            wrongText:
              'You need both the price per share and the number of shares to estimate market capitalization.',
            reviewConcepts: ['stockPrice', 'marketCap', 'share'],
          },
          {
            type: 'complete',
            title: 'You can now read a stock quote with the right mental model.',
            body:
              'Next we compare ownership capital with lending capital by introducing bonds.',
            takeaway:
              'A stock is ownership, a stock price is the price of one share, and market cap estimates the market value of all common equity.',
          },
        ],
      },

      {
        id: 'what-is-a-bond',
        title: 'What Is a Bond?',
        summary:
          'How companies borrow from investors instead of selling ownership.',
        concepts: ['bond', 'debt', 'principal', 'interest', 'investor'],
        prerequisites: ['debt', 'interest', 'investor'],
        steps: [
          {
            type: 'intro',
            eyebrow: 'LENDING AT SCALE',
            title: 'Companies do not only borrow from banks.',
            body:
              'Large companies can also borrow money directly from investors by issuing bonds.',
            noteTitle: 'Ownership vs. lending',
            note:
              'Buying stock generally means buying ownership. Buying a [[bond|bond]] generally means lending money.',
          },
          {
            type: 'teach',
            eyebrow: 'THE BASIC PROMISE',
            title: 'A bond is a debt security.',
            paragraphs: [
              'When a company issues a bond, investors provide money to the company.',
              'The company promises to repay the [[principal|principal]] according to the bond terms and usually pays [[interest|interest]] along the way.',
              'The bond investor is a lender, not an owner simply because they hold the bond.',
              'This means stockholders and bondholders have different claims, risks, and potential returns.',
            ],
            calloutTitle: 'Plain English',
            callout:
              'Stock = ownership claim. Bond = lending claim.',
          },
          {
            type: 'worked',
            eyebrow: 'FOLLOW THE MONEY',
            title: 'A company issues a $1,000 bond at 5%.',
            scenario:
              'Assume, for simplicity, the bond pays 5% annual interest and repays principal at maturity.',
            workedSteps: [
              {
                label: 'Investor provides capital',
                text: 'The investor lends the company $1,000.',
              },
              {
                label: 'Company pays interest',
                text: '5% of $1,000 = $50 of annual interest.',
              },
              {
                label: 'Company eventually repays principal',
                text: 'The $1,000 principal is repaid according to the bond terms.',
              },
            ],
            takeaway:
              'The company receives capital now and takes on a contractual obligation to make debt payments later.',
          },
          {
            type: 'number',
            eyebrow: 'QUICK CHECK',
            title:
              'A simplified $2,000 bond pays 6% annual interest. How much annual interest is that?',
            answer: 120,
            tolerance: 0.01,
            suffix: 'dollars',
            placeholder: 'Enter annual interest',
            explanation:
              '$2,000 × 6% = $120.',
            reviewConcepts: ['bond', 'principal', 'interest'],
          },
          {
            type: 'mcq',
            eyebrow: 'OWNERSHIP OR DEBT?',
            title:
              'If you buy a company bond, what is the best description of your relationship to the company?',
            options: [
              'You are generally lending money to the company',
              'You automatically become a common shareholder',
              'You become one of the company’s customers',
              'You eliminate the company’s debt',
            ],
            correctIndex: 0,
            correctTitle: 'Correct.',
            correctText:
              'A bond represents a lending relationship: the company owes payments under the bond terms.',
            wrongTitle: 'Separate debt from equity.',
            wrongText:
              'A bond is a debt claim, while common stock represents equity ownership.',
            reviewConcepts: ['bond', 'debt', 'equity'],
          },
          {
            type: 'complete',
            title: 'You now understand the basic bond contract.',
            body:
              'Next we focus on the price of borrowing itself: interest rates.',
            takeaway:
              'Bonds let companies raise debt capital from investors by promising interest and repayment of principal.',
          },
        ],
      },

      {
        id: 'interest-rates',
        title: 'Interest Rates',
        summary:
          'Why the cost of money matters to borrowers, investors, and company values.',
        concepts: ['interestRate', 'interest', 'debt', 'return'],
        prerequisites: ['interest', 'bond'],
        steps: [
          {
            type: 'intro',
            eyebrow: 'THE PRICE OF BORROWING',
            title: 'Money has a cost.',
            body:
              'When someone lends money, they usually expect compensation. The interest rate helps determine that compensation.',
            noteTitle: 'Basic definition',
            note:
              'An [[interestRate|interest rate]] is the percentage cost of borrowing money over a stated period.',
          },
          {
            type: 'teach',
            eyebrow: 'WHY RATES CHANGE DECISIONS',
            title: 'Higher rates make borrowing more expensive.',
            paragraphs: [
              'If a company can borrow $100 million at 4%, simplified annual interest is $4 million.',
              'At 8%, the same amount of debt would imply $8 million of annual interest.',
              'That extra cost can change whether a factory, acquisition, or other investment still makes economic sense.',
              'Interest rates also affect what returns investors can earn on safer alternatives, which influences how they value risky assets.',
            ],
            calloutTitle: 'Two sides of the same rate',
            callout:
              'For the borrower, interest is a cost. For the lender, interest is part of the return.',
          },
          {
            type: 'number',
            eyebrow: 'RATE CHECK',
            title:
              'A company borrows $500,000 at a simplified 7% annual interest rate. How much annual interest would it pay?',
            answer: 35000,
            tolerance: 0.01,
            suffix: 'dollars',
            placeholder: 'Enter annual interest',
            explanation:
              '$500,000 × 7% = $35,000.',
            reviewConcepts: ['interestRate', 'interest'],
          },
          {
            type: 'worked',
            eyebrow: 'CORPORATE DECISION',
            title: 'The same project can look different when rates change.',
            scenario:
              'A company is considering a project that requires borrowing a large amount of money.',
            workedSteps: [
              {
                label: 'When rates are low',
                text:
                  'The financing cost may be manageable, making the project easier to justify.',
              },
              {
                label: 'When rates rise',
                text:
                  'The same borrowing can become substantially more expensive.',
              },
              {
                label: 'Management reacts',
                text:
                  'The company may delay, resize, or cancel the project if expected benefits no longer justify the financing cost.',
              },
            ],
            takeaway:
              'Interest rates influence real corporate decisions because they change the cost of capital.',
          },
          {
            type: 'mcq',
            eyebrow: 'CHECK THE LINK',
            title:
              'All else equal, what happens to the cost of borrowing when the interest rate rises?',
            options: [
              'Borrowing becomes more expensive',
              'Borrowing becomes free',
              'The principal automatically disappears',
              'The borrower becomes a shareholder',
            ],
            correctIndex: 0,
            correctTitle: 'Right.',
            correctText:
              'A higher rate means more interest cost on the same amount borrowed.',
            wrongTitle: 'Think price of debt.',
            wrongText:
              'The interest rate is part of the price a borrower pays to use someone else’s money.',
            reviewConcepts: ['interestRate', 'debt'],
          },
          {
            type: 'complete',
            title: 'Interest rates now connect to business decisions.',
            body:
              'Next we turn back to stocks and ask why their prices move constantly.',
            takeaway:
              'Interest rates affect borrowing costs, investor alternatives, and therefore financing and valuation decisions.',
          },
        ],
      },

      {
        id: 'why-stock-prices-move',
        title: 'Why Stock Prices Move',
        summary:
          'How expectations about the future become today’s market price.',
        concepts: ['stockPrice', 'investor', 'risk', 'return'],
        prerequisites: ['stockPrice', 'risk', 'return'],
        steps: [
          {
            type: 'intro',
            eyebrow: 'PRICES ARE EXPECTATIONS',
            title: 'A stock price reflects what buyers and sellers believe today.',
            body:
              'A company can report good current results and still see its stock fall if investors expected something even better.',
            noteTitle: 'Key shift',
            note:
              'Markets care not only about what a company has done, but also about what investors expect it to do next.',
          },
          {
            type: 'teach',
            eyebrow: 'BUYERS, SELLERS, AND NEW INFORMATION',
            title: 'Prices change when expectations change.',
            paragraphs: [
              'Investors form views about a company’s future revenue, profit, cash flow, growth, and risk.',
              'New information can change those views: earnings results, a product launch, an acquisition, a recession, new competition, or changes in interest rates.',
              'If more investors become willing to pay higher prices for the company’s shares, the [[stockPrice|stock price]] can rise.',
              'If expectations worsen and sellers accept lower prices, the stock price can fall.',
            ],
            calloutTitle: 'Important',
            callout:
              'The market is not simply asking “Is this a good company?” It is asking “What is this company worth given what we expect from here?”',
          },
          {
            type: 'worked',
            eyebrow: 'EXPECTATIONS VS. RESULTS',
            title: 'Good news can still disappoint.',
            scenario:
              'A company grows revenue by 10%, which sounds strong. But investors had expected 20% growth.',
            workedSteps: [
              {
                label: 'Absolute result',
                text: 'Revenue still grew 10%.',
              },
              {
                label: 'Expectation',
                text: 'The market had priced in much faster growth.',
              },
              {
                label: 'New information',
                text:
                  'The weaker-than-expected growth may cause investors to reduce forecasts for the future.',
              },
              {
                label: 'Price response',
                text:
                  'The stock can fall even though the company technically grew.',
              },
            ],
            takeaway:
              'Stock prices often react to the gap between reality and prior expectations.',
          },
          {
            type: 'mcq',
            eyebrow: 'MARKET THINKING',
            title:
              'A company reports record profit, but the stock falls. Which explanation is plausible?',
            options: [
              'Investors expected even higher profit or worse future guidance',
              'Stocks can only rise when profit rises',
              'Profit and stock prices are completely unrelated',
              'The company must have issued a bond',
            ],
            correctIndex: 0,
            correctTitle: 'Exactly.',
            correctText:
              'A stock can fall on objectively good results if those results or the outlook are worse than what investors had already expected.',
            wrongTitle: 'Think relative to expectations.',
            wrongText:
              'Markets price the future. The question is often whether reality was better or worse than what was already expected.',
            reviewConcepts: ['stockPrice', 'investor'],
          },
          {
            type: 'written',
            eyebrow: 'SAY IT CLEARLY',
            title:
              'Why can a company’s stock price fall even when the company reports higher revenue than last year?',
            body:
              'Use the idea of expectations in your explanation.',
            placeholder:
              'The company can still grow, but investors may have expected...',
            modelAnswer:
              'The stock can fall if investors expected even stronger growth or if new information makes the future look weaker, because the current price reflects expectations about future performance.',
            reviewConcepts: ['stockPrice', 'investor'],
            rubric: {
              criteria: [
                {
                  id: 'expectations',
                  label: 'recognize that investors compare results with expectations',
                  keywords: [
                    'expect',
                    'expected',
                    'expectations',
                    'forecast',
                    'priced in',
                    'anticipated',
                  ],
                },
                {
                  id: 'future',
                  label: 'connect the stock price to views about future performance or value',
                  keywords: [
                    'future',
                    'outlook',
                    'guidance',
                    'growth',
                    'value',
                    'performance',
                    'worse',
                    'weaker',
                  ],
                },
              ],
            },
          },
          {
            type: 'complete',
            title: 'You now have the right mental model for daily market moves.',
            body:
              'Next we separate two markets that beginners often blend together: primary and secondary markets.',
            takeaway:
              'Stock prices move as investors update expectations about a company’s future and change what they are willing to pay.',
          },
        ],
      },

      {
        id: 'primary-vs-secondary-markets',
        title: 'Primary vs. Secondary Markets',
        summary:
          'The difference between a company raising money and investors trading with each other.',
        concepts: ['primaryMarket', 'secondaryMarket', 'capital', 'stockMarket'],
        prerequisites: ['capital', 'stockMarket'],
        steps: [
          {
            type: 'intro',
            eyebrow: 'WHO GETS THE MONEY?',
            title: 'Not every stock trade sends cash to the company.',
            body:
              'This distinction is essential for understanding capital markets and what investment banks actually help clients do.',
            noteTitle: 'Fast test',
            note:
              'Ask: is the company issuing a new security, or are investors trading an existing one?',
          },
          {
            type: 'teach',
            eyebrow: 'PRIMARY MARKET',
            title: 'New securities can raise capital for the issuer.',
            paragraphs: [
              'In the [[primaryMarket|primary market]], a company or other issuer sells newly issued securities.',
              'Because the securities are newly issued, the transaction can provide capital to the issuer.',
              'An IPO is a familiar example: a private company can issue shares to public investors and raise equity capital.',
              'A company can also issue new bonds to raise debt capital.',
            ],
            calloutTitle: 'Primary = issuer involved',
            callout:
              'The issuer is raising capital by selling newly issued securities.',
          },
          {
            type: 'teach',
            eyebrow: 'SECONDARY MARKET',
            title: 'Existing securities trade between investors.',
            paragraphs: [
              'In the [[secondaryMarket|secondary market]], investors buy and sell securities that already exist.',
              'If you buy shares of a public company from another investor through the stock market, the company generally does not receive your purchase price.',
              'The money moves from buyer to seller.',
              'Even though the company is not raising capital in that trade, an active secondary market is valuable because it makes securities easier to buy and sell and helps establish observable prices.',
            ],
            calloutTitle: 'Secondary = investor to investor',
            callout:
              'The security already exists. Ownership changes hands between investors.',
          },
          {
            type: 'worked',
            eyebrow: 'FOLLOW THE CASH',
            title: 'IPO day versus a trade one year later.',
            scenario:
              'A company sells newly issued shares in an IPO. One year later, Investor A sells some of those shares to Investor B.',
            workedSteps: [
              {
                label: 'IPO',
                text:
                  'The newly issued shares are sold in the primary market and the company raises capital.',
              },
              {
                label: 'Later trade',
                text:
                  'Investor B buys existing shares from Investor A in the secondary market.',
              },
              {
                label: 'Who receives the money later?',
                text:
                  'Investor A receives the purchase price, not the company.',
              },
            ],
            takeaway:
              'The easiest way to separate the markets is to ask whether the issuer is selling a new security.',
          },
          {
            type: 'mcq',
            eyebrow: 'MARKET CHECK',
            title:
              'You buy 10 shares of an already-public company from another investor. Which market is this?',
            options: [
              'Secondary market',
              'Primary market',
              'Private market only',
              'Debt market automatically',
            ],
            correctIndex: 0,
            correctTitle: 'Correct.',
            correctText:
              'You are buying existing shares from another investor, so the trade is in the secondary market.',
            wrongTitle: 'Ask whether the shares are newly issued.',
            wrongText:
              'Existing securities trading between investors are secondary-market transactions.',
            reviewConcepts: ['primaryMarket', 'secondaryMarket'],
          },
          {
            type: 'complete',
            title: 'Primary and secondary markets are now separate.',
            body:
              'The final lesson in this module connects companies, investors, securities, and investment banks into one system.',
            takeaway:
              'Primary markets raise capital through new securities; secondary markets let investors trade existing securities.',
          },
        ],
      },

      {
        id: 'companies-and-investors-connect',
        title: 'How Companies & Investors Connect',
        summary:
          'Put capital raising, securities, markets, and investment banks into one picture.',
        concepts: ['capital', 'investor', 'primaryMarket', 'secondaryMarket', 'investmentBank'],
        prerequisites: ['primaryMarket', 'secondaryMarket', 'bond', 'share'],
        steps: [
          {
            type: 'intro',
            eyebrow: 'ZOOM OUT',
            title: 'Financial markets connect people who need capital with people who have capital.',
            body:
              'Companies often need more money than their current operations can provide. Investors have money they want to put to work. Markets and financial institutions help connect the two.',
            noteTitle: 'This is the bridge to banking',
            note:
              'Once you understand why companies need capital and why investors supply it, investment banking starts to make much more sense.',
          },
          {
            type: 'worked',
            eyebrow: 'THE FULL LOOP',
            title: 'A company wants to build a new factory.',
            scenario:
              'The project costs $500 million, more cash than management wants to spend from the company’s existing balance.',
            workedSteps: [
              {
                label: 'Company needs capital',
                text:
                  'Management decides it needs outside financing.',
              },
              {
                label: 'Choose debt or equity',
                text:
                  'The company might issue bonds, shares, or use another financing source.',
              },
              {
                label: 'Investors provide money',
                text:
                  'Investors buy the new securities because they expect an appropriate return for the risk.',
              },
              {
                label: 'Company receives financing',
                text:
                  'The primary-market issuance raises capital for the project.',
              },
              {
                label: 'Securities can later trade',
                text:
                  'After issuance, investors may buy and sell those securities in secondary markets.',
              },
            ],
            takeaway:
              'The financial system channels capital from investors to companies and then allows ownership or debt claims to trade.',
          },
          {
            type: 'teach',
            eyebrow: 'WHERE BANKERS ENTER',
            title: 'Investment banks help make major financing transactions happen.',
            paragraphs: [
              'An [[investmentBank|investment bank]] can advise a company on how much capital to raise, what type of security to issue, how to position the offering, and how to reach investors.',
              'Banks also advise companies on acquisitions, sales, mergers, and other major strategic transactions.',
              'That is why investment bankers need to understand businesses, accounting, markets, valuation, and investor thinking.',
            ],
            calloutTitle: 'Big picture',
            callout:
              'Corporate finance asks how companies fund themselves and make major financial decisions. Investment banking helps companies execute many of those decisions.',
          },
          {
            type: 'mcq',
            eyebrow: 'PUT IT TOGETHER',
            title:
              'A company issues new bonds to investors to finance an acquisition. What is happening?',
            options: [
              'The company is raising debt capital from investors',
              'The company is buying its own customers',
              'Investors are becoming common shareholders',
              'No financing is taking place',
            ],
            correctIndex: 0,
            correctTitle: 'Exactly.',
            correctText:
              'The company is borrowing from investors by issuing debt securities and using the proceeds to finance a transaction.',
            wrongTitle: 'Trace the security and the cash.',
            wrongText:
              'A newly issued bond is debt capital flowing from investors to the company.',
            reviewConcepts: ['bond', 'capital', 'investor'],
          },
          {
            type: 'written',
            eyebrow: 'YOUR BIG-PICTURE CHECK',
            title:
              'In your own words, explain why financial markets are useful to both companies and investors.',
            body:
              'You do not need banking jargon. Explain what each side gets from the system.',
            placeholder:
              'Companies can use markets to..., while investors can...',
            modelAnswer:
              'Companies can raise capital to fund operations, growth, or transactions, while investors can put their money into securities that offer potential returns and can often be traded later.',
            reviewConcepts: ['capital', 'investor', 'return'],
            rubric: {
              criteria: [
                {
                  id: 'company',
                  label: 'explain that companies can obtain capital or financing',
                  keywords: [
                    'capital',
                    'money',
                    'fund',
                    'funding',
                    'finance',
                    'financing',
                    'raise',
                    'borrow',
                    'growth',
                  ],
                },
                {
                  id: 'investor',
                  label: 'explain that investors can put money to work for potential returns',
                  keywords: [
                    'invest',
                    'investor',
                    'return',
                    'gain',
                    'grow',
                    'earn',
                    'stock',
                    'bond',
                    'security',
                    'securities',
                  ],
                },
              ],
            },
          },
          {
            type: 'complete',
            title: 'You now understand the basic financial-market system.',
            body:
              'Next we move inside the company and learn how financial information is organized and used.',
            takeaway:
              'Companies seek capital, investors seek returns, and financial markets and banks help connect those needs.',
          },
        ],
      },
    ],
  },

  {
    id: 'statements-and-value',
    number: '00C',
    title: 'Financial Statements & Value',
    subtitle: 'The bridge into real corporate finance.',
    description:
      'Learn why companies report financial information, what the three statements are trying to tell you, how time affects value, and why valuation exists.',
    lessons: [
      {
        id: 'why-accounting-exists',
        title: 'Why Does Accounting Exist?',
        summary:
          'Why businesses need a common system for describing financial activity.',
        concepts: ['accounting', 'revenue', 'expense', 'cash', 'asset', 'liability'],
        prerequisites: ['revenue', 'profit', 'cash'],
        steps: [
          {
            type: 'intro',
            eyebrow: 'TURN ACTIVITY INTO INFORMATION',
            title: 'A real business has thousands or millions of financial events.',
            body:
              'Customers pay, employees earn wages, inventory is purchased, equipment is bought, loans are taken out, taxes are owed, and cash moves constantly. Someone needs a consistent way to organize all of it.',
            noteTitle: 'That system is accounting',
            note:
              '[[accounting|Accounting]] records, organizes, and reports the financial activity of a business.',
          },
          {
            type: 'teach',
            eyebrow: 'WHY A SYSTEM IS NECESSARY',
            title: 'Without structure, a pile of transactions tells you very little.',
            paragraphs: [
              'Imagine looking at a bank account and seeing hundreds of deposits and withdrawals. You could see cash moving, but you would not automatically know whether the company was profitable, what it owns, or what it owes.',
              'Accounting separates and classifies economic activity so managers, investors, lenders, and analysts can answer useful questions.',
              'For example: How much [[revenue|revenue]] did the company earn? What [[expense|expenses]] did it incur? What [[asset|assets]] does it control? What [[liability|liabilities]] does it owe?',
              'Financial statements are the organized reports that summarize those answers.',
            ],
            calloutTitle: 'Why bankers care',
            callout:
              'Bankers cannot value or model a company reliably without first understanding the accounting information describing the business.',
          },
          {
            type: 'worked',
            eyebrow: 'ONE BUSINESS, DIFFERENT QUESTIONS',
            title: 'A coffee shop buys an espresso machine for $8,000.',
            scenario:
              'One transaction can affect several financial questions.',
            workedSteps: [
              {
                label: 'Cash question',
                text:
                  'Did cash leave the business? If paid immediately, yes.',
              },
              {
                label: 'Asset question',
                text:
                  'Does the company now own a useful resource? Yes, the machine is an asset.',
              },
              {
                label: 'Profit question',
                text:
                  'Should the entire $8,000 necessarily reduce profit immediately? Accounting has rules for how long-lived assets are recognized over time.',
              },
            ],
            takeaway:
              'Accounting exists because “what happened to cash?” and “what happened economically?” are not always the same question.',
          },
          {
            type: 'mcq',
            eyebrow: 'WHY ACCOUNTING?',
            title:
              'Why is a company’s bank-account balance alone not enough to understand the business?',
            options: [
              'Because cash alone does not show profitability, assets, liabilities, and timing of economic activity',
              'Because cash has no value',
              'Because profitable companies never use cash',
              'Because accounting only tracks stock prices',
            ],
            correctIndex: 0,
            correctTitle: 'Correct.',
            correctText:
              'Cash is important, but it is only one piece of a company’s financial picture.',
            wrongTitle: 'Think broader than cash.',
            wrongText:
              'You also need information about revenue, expenses, obligations, resources, and timing.',
            reviewConcepts: ['accounting', 'cash', 'asset', 'liability'],
          },
          {
            type: 'complete',
            title: 'Accounting now has a reason to exist.',
            body:
              'Next we meet the three core financial statements and the different question each one answers.',
            takeaway:
              'Accounting converts messy business activity into structured financial information people can analyze.',
          },
        ],
      },

      {
        id: 'three-financial-statements',
        title: 'The Three Financial Statements',
        summary:
          'The three core reports and the question each one answers.',
        concepts: ['financialStatement', 'incomeStatement', 'balanceSheet', 'cashFlowStatement'],
        prerequisites: ['accounting'],
        steps: [
          {
            type: 'intro',
            eyebrow: 'THREE VIEWS OF ONE COMPANY',
            title: 'No single financial statement tells the whole story.',
            body:
              'The income statement, balance sheet, and cash flow statement each answer a different financial question.',
            noteTitle: 'The goal',
            note:
              'Do not memorize three definitions in isolation. Build a mental picture of what each statement is trying to show.',
          },
          {
            type: 'concept',
            eyebrow: 'SIDE BY SIDE',
            title: 'Performance, position, and cash movement.',
            body:
              'Think of the three statements as three camera angles on the same business.',
            cards: [
              {
                number: 'IS',
                title: 'Income Statement',
                text:
                  'How profitable was the company over a period of time?',
              },
              {
                number: 'BS',
                title: 'Balance Sheet',
                text:
                  'What does the company own and owe at a specific point in time?',
              },
              {
                number: 'CFS',
                title: 'Cash Flow Statement',
                text:
                  'Why did the company’s cash balance change during the period?',
              },
            ],
            plainTitle: 'One sentence',
            plainText:
              '[[incomeStatement|Income statement]] = performance, [[balanceSheet|balance sheet]] = financial position, [[cashFlowStatement|cash flow statement]] = cash movement.',
          },
          {
            type: 'worked',
            eyebrow: 'USE THE RIGHT TOOL',
            title: 'Three questions, three statements.',
            scenario:
              'An analyst is studying one company.',
            workedSteps: [
              {
                label: 'Question 1',
                text:
                  '“How much revenue and profit did it generate this year?” Start with the income statement.',
              },
              {
                label: 'Question 2',
                text:
                  '“How much cash, debt, and other assets and liabilities does it have today?” Start with the balance sheet.',
              },
              {
                label: 'Question 3',
                text:
                  '“Why did cash increase by $40 million this year?” Start with the cash flow statement.',
              },
            ],
            takeaway:
              'The statements answer different questions but ultimately connect to one another.',
          },
          {
            type: 'mcq',
            eyebrow: 'STATEMENT CHECK',
            title:
              'You want to know what a company owns and owes as of December 31. Which statement is the best starting point?',
            options: [
              'Balance sheet',
              'Income statement',
              'Cash flow statement',
              'Stock-price chart',
            ],
            correctIndex: 0,
            correctTitle: 'Right.',
            correctText:
              'The balance sheet shows assets, liabilities, and equity at a specific point in time.',
            wrongTitle: 'Think snapshot.',
            wrongText:
              'The balance sheet is the point-in-time snapshot of what the company owns and owes.',
            reviewConcepts: ['balanceSheet'],
          },
          {
            type: 'complete',
            title: 'You know the job of each statement.',
            body:
              'Now we slow down and look at each one individually, starting with the income statement.',
            takeaway:
              'The income statement shows performance, the balance sheet shows position, and the cash flow statement explains cash movement.',
          },
        ],
      },

      {
        id: 'income-statement-first-look',
        title: 'Income Statement: First Look',
        summary:
          'Follow revenue down to profit without getting lost in accounting detail.',
        concepts: ['incomeStatement', 'revenue', 'expense', 'netIncome'],
        prerequisites: ['revenue', 'expense', 'profit'],
        steps: [
          {
            type: 'intro',
            eyebrow: 'FROM SALES TO PROFIT',
            title: 'The income statement tells the story of profitability over a period.',
            body:
              'It usually begins with revenue and subtracts different categories of expenses until it reaches a bottom-line profit measure.',
            noteTitle: 'Time period matters',
            note:
              'An [[incomeStatement|income statement]] covers a period such as a quarter or a year, rather than one single date.',
          },
          {
            type: 'worked',
            eyebrow: 'A TINY INCOME STATEMENT',
            title: 'Start with the simplest possible version.',
            scenario:
              'A company reports the following for one year.',
            workedSteps: [
              {
                label: 'Revenue',
                text: '$1,000 of sales.',
              },
              {
                label: 'Operating costs',
                text: '$700 of costs and expenses.',
              },
              {
                label: 'Interest and taxes',
                text: '$100 combined for this simplified example.',
              },
              {
                label: 'Net income',
                text: '$1,000 − $700 − $100 = $200.',
              },
            ],
            takeaway:
              '[[netIncome|Net income]] is the accounting profit left after all reported expenses, interest, and taxes.',
          },
          {
            type: 'teach',
            eyebrow: 'THE SHAPE MATTERS',
            title: 'Income statements are layered.',
            paragraphs: [
              'Real income statements contain more line items, but the direction is intuitive: start with sales and work downward through costs.',
              'Different profit measures answer slightly different questions because they stop at different points before all costs have been subtracted.',
              'Later, Accounting Foundations will introduce EBIT, EBITDA, taxes, depreciation, and more detail.',
              'For now, the important skill is understanding the flow from revenue to expenses to profit.',
            ],
            calloutTitle: 'Beginner checkpoint',
            callout:
              'If someone says “the top line,” they usually mean revenue. “The bottom line” commonly refers to net income.',
          },
          {
            type: 'number',
            eyebrow: 'QUICK CALCULATION',
            title:
              'A company has $2,000 of revenue and $1,650 of total expenses in a simplified example. What is net income?',
            answer: 350,
            tolerance: 0.01,
            suffix: 'dollars',
            placeholder: 'Enter net income',
            explanation:
              '$2,000 − $1,650 = $350.',
            reviewConcepts: ['revenue', 'expense', 'netIncome'],
          },
          {
            type: 'mcq',
            eyebrow: 'TIME VS. SNAPSHOT',
            title:
              'Which question is the income statement best designed to answer?',
            options: [
              'How profitable was the company during the period?',
              'What was the stock price at noon?',
              'What assets and liabilities exist at one exact date?',
              'Who founded the company?',
            ],
            correctIndex: 0,
            correctTitle: 'Correct.',
            correctText:
              'The income statement summarizes revenue, expenses, and profit over a period.',
            wrongTitle: 'Think performance over time.',
            wrongText:
              'The income statement is the core statement for understanding profitability during a period.',
            reviewConcepts: ['incomeStatement'],
          },
          {
            type: 'complete',
            title: 'You can now read the basic direction of an income statement.',
            body:
              'Next we switch from performance over time to a snapshot of what the company owns and owes.',
            takeaway:
              'The income statement starts with revenue and subtracts costs to show accounting profitability over a period.',
          },
        ],
      },

      {
        id: 'balance-sheet-first-look',
        title: 'Balance Sheet: First Look',
        summary:
          'Assets, liabilities, equity, and the equation that keeps the statement balanced.',
        concepts: ['balanceSheet', 'asset', 'liability', 'equity', 'accountingEquation'],
        prerequisites: ['asset', 'liability', 'equity'],
        steps: [
          {
            type: 'intro',
            eyebrow: 'A FINANCIAL SNAPSHOT',
            title: 'The balance sheet freezes the company at one point in time.',
            body:
              'Instead of asking what happened during the year, it asks what resources the company controls and what claims exist against those resources on a specific date.',
            noteTitle: 'The foundation',
            note:
              'The balance sheet follows the [[accountingEquation|accounting equation]]: Assets = Liabilities + Equity.',
          },
          {
            type: 'concept',
            eyebrow: 'THREE PIECES',
            title: 'Resources, obligations, and ownership.',
            body:
              'Every beginner balance sheet can be understood through three buckets.',
            cards: [
              {
                number: 'A',
                title: 'Assets',
                text:
                  'Resources the company owns or controls, such as cash, inventory, receivables, and equipment.',
              },
              {
                number: 'L',
                title: 'Liabilities',
                text:
                  'Obligations owed to other parties, such as debt or amounts owed to suppliers.',
              },
              {
                number: 'E',
                title: 'Equity',
                text:
                  'The owners’ claim after liabilities are considered.',
              },
            ],
            plainTitle: 'Equation',
            plainText:
              '[[asset|Assets]] = [[liability|Liabilities]] + [[equity|Equity]].',
          },
          {
            type: 'worked',
            eyebrow: 'MAKE IT BALANCE',
            title: 'A tiny company has $100 of assets.',
            scenario:
              'It has $40 of liabilities. What must equity be?',
            workedSteps: [
              {
                label: 'Start with the equation',
                text: 'Assets = Liabilities + Equity.',
              },
              {
                label: 'Insert what we know',
                text: '$100 = $40 + Equity.',
              },
              {
                label: 'Solve',
                text: 'Equity = $60.',
              },
            ],
            takeaway:
              'The two sides balance because the company’s resources are financed by claims from creditors and owners.',
          },
          {
            type: 'number',
            eyebrow: 'YOUR TURN',
            title:
              'A company has $500 of assets and $320 of liabilities. What is equity?',
            answer: 180,
            tolerance: 0.01,
            suffix: 'dollars',
            placeholder: 'Enter equity',
            explanation:
              '$500 of assets − $320 of liabilities = $180 of equity.',
            reviewConcepts: ['accountingEquation', 'asset', 'liability', 'equity'],
          },
          {
            type: 'mcq',
            eyebrow: 'SNAPSHOT CHECK',
            title:
              'Which item would normally be a liability rather than an asset?',
            options: [
              'Debt the company owes a lender',
              'Cash in the company’s bank account',
              'Equipment owned by the company',
              'Money customers owe the company',
            ],
            correctIndex: 0,
            correctTitle: 'Correct.',
            correctText:
              'Debt is an obligation the company owes, so it is a liability.',
            wrongTitle: 'Ask who owes whom.',
            wrongText:
              'A liability is an obligation the company must satisfy to another party.',
            reviewConcepts: ['liability', 'asset'],
          },
          {
            type: 'complete',
            title: 'The balance sheet now has a structure instead of looking like a list.',
            body:
              'Next we learn the statement that explains how actual cash moved during the period.',
            takeaway:
              'The balance sheet is a point-in-time snapshot built around Assets = Liabilities + Equity.',
          },
        ],
      },

      {
        id: 'cash-flow-statement-first-look',
        title: 'Cash Flow Statement: First Look',
        summary:
          'Why profit and cash differ and how the cash flow statement explains the change.',
        concepts: ['cashFlowStatement', 'cashFlow', 'netIncome', 'cash'],
        prerequisites: ['cashFlow', 'netIncome'],
        steps: [
          {
            type: 'intro',
            eyebrow: 'FOLLOW ACTUAL CASH',
            title: 'Profit does not tell you exactly how cash changed.',
            body:
              'Because accounting recognizes some items at different times from cash collection or payment, net income and cash flow can differ.',
            noteTitle: 'The job of the statement',
            note:
              'The [[cashFlowStatement|cash flow statement]] explains the movement from beginning cash to ending cash.',
          },
          {
            type: 'teach',
            eyebrow: 'THREE CATEGORIES',
            title: 'Cash flow is organized into operating, investing, and financing activity.',
            paragraphs: [
              'Operating activities relate mainly to the company’s core business and the accounting-to-cash adjustments connected to it.',
              'Investing activities include items such as purchases or sales of long-term assets and certain investments.',
              'Financing activities include raising or repaying debt, issuing or repurchasing equity, and other financing-related cash movements.',
              'The three sections together explain the company’s net change in [[cash|cash]].',
            ],
            calloutTitle: 'Simple mental model',
            callout:
              'Operations = running the business. Investing = buying or selling long-term resources. Financing = raising or returning capital.',
          },
          {
            type: 'worked',
            eyebrow: 'WHY PROFIT CAN DIFFER FROM CASH',
            title: 'A sale is recorded before the customer pays.',
            scenario:
              'A company earns $1,000 of revenue by completing work today, but the customer will pay next month.',
            workedSteps: [
              {
                label: 'Income statement',
                text:
                  'The company can recognize the revenue when earned under accrual accounting.',
              },
              {
                label: 'Cash today',
                text:
                  'No $1,000 cash has arrived yet.',
              },
              {
                label: 'Result',
                text:
                  'Accounting profit can increase before cash increases.',
              },
              {
                label: 'Cash flow statement',
                text:
                  'The cash flow statement helps reconcile these timing differences.',
              },
            ],
            takeaway:
              'This is why analysts cannot look only at net income when they care about cash generation.',
          },
          {
            type: 'mcq',
            eyebrow: 'CASH-FLOW CHECK',
            title:
              'A company buys a new factory for cash. Which broad cash-flow category would that most naturally fit?',
            options: [
              'Investing activity',
              'Operating revenue',
              'Financing revenue',
              'Equity profit',
            ],
            correctIndex: 0,
            correctTitle: 'Right.',
            correctText:
              'Buying a long-term asset such as a factory is generally an investing cash outflow.',
            wrongTitle: 'Think long-term asset purchase.',
            wrongText:
              'Purchases of long-term assets are generally classified as investing activities.',
            reviewConcepts: ['cashFlowStatement', 'cashFlow'],
          },
          {
            type: 'written',
            eyebrow: 'EXPLAIN THE GAP',
            title:
              'How can a company report profit even if some of the related customer cash has not arrived yet?',
            body:
              'Use the idea that accounting activity and cash timing can differ.',
            placeholder:
              'The company can recognize the sale when..., even though...',
            modelAnswer:
              'Under accrual accounting, the company can recognize revenue when it earns it even if the customer pays later, so profit can be recorded before the related cash is collected.',
            reviewConcepts: ['netIncome', 'cashFlow', 'accrualAccounting'],
            rubric: {
              criteria: [
                {
                  id: 'earned',
                  label: 'recognize that revenue or profit can be recorded when activity is earned',
                  keywords: [
                    'earn',
                    'earned',
                    'revenue',
                    'sale',
                    'recognize',
                    'recognized',
                    'accrual',
                  ],
                },
                {
                  id: 'timing',
                  label: 'recognize that the customer can pay later',
                  keywords: [
                    'later',
                    'not paid',
                    'has not paid',
                    'before cash',
                    'cash',
                    'collect',
                    'collected',
                    'timing',
                  ],
                },
              ],
            },
          },
          {
            type: 'complete',
            title: 'You now know why cash flow deserves its own statement.',
            body:
              'Next we leave accounting for a moment and introduce one of the most important ideas in valuation: time changes value.',
            takeaway:
              'The cash flow statement explains how actual cash changed and helps bridge accounting profit with cash movement.',
          },
        ],
      },

      {
        id: 'time-value-of-money',
        title: 'Why $1 Today Is Worth More Than $1 Later',
        summary:
          'The intuition behind the time value of money before any DCF formulas.',
        concepts: ['timeValueMoney', 'presentValue', 'return', 'risk'],
        prerequisites: ['return', 'risk', 'interestRate'],
        steps: [
          {
            type: 'intro',
            eyebrow: 'TIME CHANGES VALUE',
            title: 'Would you rather receive $100 today or $100 five years from now?',
            body:
              'Most people should prefer the $100 today, assuming there are no unusual constraints. Finance has a reason for that preference.',
            noteTitle: 'The concept',
            note:
              'The [[timeValueMoney|time value of money]] says that money available today is generally worth more than the same nominal amount received in the future.',
          },
          {
            type: 'teach',
            eyebrow: 'WHY TODAY IS DIFFERENT',
            title: 'Money today has opportunity.',
            paragraphs: [
              'If you receive $100 today, you can invest it and potentially earn a return.',
              'If you must wait years to receive the same $100, you lose that opportunity in the meantime.',
              'Future payments can also involve uncertainty: the farther away a cash flow is, the more that can change before you receive it.',
              'Finance therefore converts future amounts into today’s dollars when comparing value across time.',
            ],
            calloutTitle: 'The translation',
            callout:
              '[[presentValue|Present value]] asks: what is a future cash flow worth today?',
          },
          {
            type: 'worked',
            eyebrow: 'ONE-YEAR EXAMPLE',
            title: '$100 today can become $110 in one year.',
            scenario:
              'Assume you can earn a 10% one-year return.',
            workedSteps: [
              {
                label: 'Start today',
                text: '$100.',
              },
              {
                label: 'Earn 10%',
                text: '$100 × 10% = $10.',
              },
              {
                label: 'Value in one year',
                text: '$110.',
              },
              {
                label: 'Reverse the logic',
                text:
                  'If $100 today can become $110 in one year, then $110 received in one year is worth $100 today under that 10% required return.',
              },
            ],
            takeaway:
              'Discounting is simply the process of translating future money back into today’s value.',
          },
          {
            type: 'number',
            eyebrow: 'INTUITION CHECK',
            title:
              'If $100 invested today grows by 10% over one year, how much would it be worth after one year?',
            answer: 110,
            tolerance: 0.01,
            suffix: 'dollars',
            placeholder: 'Enter future value',
            explanation:
              '$100 × 1.10 = $110.',
            reviewConcepts: ['timeValueMoney', 'return'],
          },
          {
            type: 'mcq',
            eyebrow: 'WHY DISCOUNT?',
            title:
              'Why is $100 today generally more valuable than $100 received several years from now?',
            options: [
              'Money today can be invested and used sooner, while future money involves waiting and uncertainty',
              'Future dollars are legally worth zero',
              'Cash cannot be invested',
              'All future payments are guaranteed',
            ],
            correctIndex: 0,
            correctTitle: 'Exactly.',
            correctText:
              'Receiving money earlier gives you more opportunity and avoids some of the uncertainty of waiting.',
            wrongTitle: 'Think opportunity and time.',
            wrongText:
              'Money received sooner can be invested or used immediately, which gives it greater present economic value.',
            reviewConcepts: ['timeValueMoney', 'presentValue'],
          },
          {
            type: 'complete',
            title: 'You now have the intuition beneath DCF valuation.',
            body:
              'The final Finance From Zero lesson uses everything you have learned to explain what valuation is actually trying to do.',
            takeaway:
              'Future cash flows are worth less today than the same nominal amount received immediately, all else equal.',
          },
        ],
      },

      {
        id: 'what-is-valuation',
        title: 'What Does It Mean to Value a Company?',
        summary:
          'What analysts are actually trying to estimate when they say a business is worth something.',
        concepts: ['valuation', 'presentValue', 'cashFlow', 'risk', 'marketCap', 'investmentBank'],
        prerequisites: ['timeValueMoney', 'cashFlow', 'risk', 'marketCap'],
        steps: [
          {
            type: 'intro',
            eyebrow: 'THE QUESTION BEHIND FINANCE',
            title: 'What is this business worth?',
            body:
              'That question appears in investing, acquisitions, IPOs, fairness opinions, private equity, and many other areas of finance.',
            noteTitle: 'Valuation is an estimate',
            note:
              '[[valuation|Valuation]] is the process of estimating what a company, asset, or security is worth.',
          },
          {
            type: 'teach',
            eyebrow: 'VALUE COMES FROM EXPECTATIONS',
            title: 'A company is valuable because of what people expect it can produce in the future.',
            paragraphs: [
              'A business owns assets, serves customers, earns revenue, pays expenses, generates cash flow, and takes risks.',
              'Investors care about the future economic benefits they may receive from owning or financing that business.',
              'That means valuation requires assumptions about future performance, risk, and the time value of money.',
              'There is rarely one perfectly certain answer. Different assumptions can produce different reasonable estimates.',
            ],
            calloutTitle: 'This is why valuation is analysis, not just arithmetic',
            callout:
              'The formulas matter, but the assumptions about the business matter just as much.',
          },
          {
            type: 'worked',
            eyebrow: 'THREE WAYS TO THINK',
            title: 'Analysts do not rely on only one perspective.',
            scenario:
              'Suppose you are trying to estimate the value of a company.',
            workedSteps: [
              {
                label: 'Future cash flows',
                text:
                  'You can estimate the cash the business may generate and discount it back to present value. This becomes DCF analysis.',
              },
              {
                label: 'Comparable companies',
                text:
                  'You can look at how similar public companies are valued by the market.',
              },
              {
                label: 'Comparable transactions',
                text:
                  'You can examine prices paid in acquisitions of similar businesses.',
              },
              {
                label: 'Use judgment',
                text:
                  'You compare the results, understand why they differ, and develop a defensible valuation range.',
              },
            ],
            takeaway:
              'Valuation is strongest when you understand both the business itself and the method being used.',
          },
          {
            type: 'mcq',
            eyebrow: 'VALUATION THINKING',
            title:
              'Why might two analysts produce different reasonable valuations for the same company?',
            options: [
              'They may use different assumptions about future performance, risk, and appropriate valuation inputs',
              'A company can never be valued',
              'Only the current share price can ever be used',
              'Valuation contains no judgment',
            ],
            correctIndex: 0,
            correctTitle: 'Exactly.',
            correctText:
              'Valuation depends on assumptions, and reasonable analysts can disagree about the future.',
            wrongTitle: 'Think assumptions.',
            wrongText:
              'Different views about growth, margins, cash flow, risk, and comparable companies can produce different valuation estimates.',
            reviewConcepts: ['valuation', 'risk', 'presentValue'],
          },
          {
            type: 'written',
            eyebrow: 'FINAL FOUNDATION CHECK',
            title:
              'In plain English, what does it mean to value a company?',
            body:
              'Explain the goal rather than naming a formula.',
            placeholder:
              'Valuing a company means trying to estimate...',
            modelAnswer:
              'Valuing a company means estimating what the business is worth based on its financial performance, expected future cash flows, risk, and evidence from the market or similar transactions.',
            reviewConcepts: ['valuation', 'cashFlow', 'risk'],
            rubric: {
              criteria: [
                {
                  id: 'estimate',
                  label: 'recognize that valuation is an estimate of what the business is worth',
                  keywords: [
                    'worth',
                    'value',
                    'estimate',
                    'price',
                  ],
                },
                {
                  id: 'drivers',
                  label: 'connect value to business fundamentals, future cash flow, performance, risk, or market evidence',
                  keywords: [
                    'future',
                    'cash flow',
                    'performance',
                    'revenue',
                    'profit',
                    'risk',
                    'comparable',
                    'market',
                    'growth',
                    'earnings',
                  ],
                },
              ],
            },
          },
          {
            type: 'complete',
            title: 'Finance From Zero complete.',
            body:
              'You now have the mental model that the technical curriculum assumes: how businesses make money, how they fund themselves, why investors take risk, how markets work, what the statements are trying to show, why time changes value, and what valuation is trying to estimate.',
            takeaway:
              'From here, Accounting Foundations can go deeper without throwing unexplained finance vocabulary at you.',
          },
        ],
      },
    ],
  },
]
