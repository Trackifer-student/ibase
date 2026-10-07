import { accountingLessons } from './modules/accounting'
import { financeZeroModules } from './modules/financeZero'
import { technicalAdvancedById } from './modules/technicalAdvanced'
import { careerAdvancedById } from './modules/careerAdvanced'
const whatIsIBLessons = [
  {
    id: 'what-bankers-do',
    title: 'What an Investment Bank Actually Does',
    summary: 'Advisory, capital raising, and what analysts actually work on.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'START WITH THE JOB',
        title: 'So... what does an investment bank actually do?',
        body:
          "Before you memorize a single valuation formula, you should know what you're trying to get hired to do.",
        noteTitle: 'Quick reality check',
        note:
          "Investment bankers do not spend their day picking stocks. That's a different part of finance.",
      },
      {
        type: 'concept',
        eyebrow: 'THE SIMPLE VERSION',
        title: 'Bankers help companies make big financial decisions.',
        body: 'Most investment banking work falls into two broad buckets.',
        cards: [
          {
            number: '01',
            title: 'Advisory',
            text:
              'Helping companies buy businesses, sell businesses, merge, restructure, or evaluate other major strategic transactions.',
          },
          {
            number: '02',
            title: 'Capital Raising',
            text:
              'Helping companies raise money by issuing debt or equity to investors.',
          },
        ],
        plainTitle: 'Think about it like this',
        plainText:
          'A company is making a decision worth hundreds of millions or billions of dollars. The bank helps analyze it, structure it, market it, and get the transaction done.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title: 'Which one sounds most like investment banking?',
        options: [
          'Buying Apple stock because you think the price will rise',
          'Helping a healthcare company acquire one of its competitors',
          'Managing a retirement portfolio for a wealthy family',
          'Making markets in Treasury bonds',
        ],
        correctIndex: 1,
        correctTitle: 'Exactly.',
        correctText:
          'Advising a company on an acquisition is classic investment banking work.',
        wrongTitle: 'Not quite.',
        wrongText:
          "Those are real finance jobs, but they're generally investing, wealth management, or sales & trading rather than investment banking.",
      },
      {
        type: 'list',
        eyebrow: 'WHAT THE ANALYST DOES',
        title: 'The bank advises the client. The analyst helps build the work.',
        body:
          "As a junior banker, you're usually not the person negotiating directly with the CEO.",
        items: [
          'Research companies and industries',
          'Build and update financial models',
          'Analyze valuation and transaction scenarios',
          'Create presentations and other client materials',
          'Help keep live transactions organized and moving',
        ],
        noteTitle: 'On the job',
        note:
          'A lot of junior banking comes down to being fast, accurate, organized, and very hard to surprise.',
      },
      {
        type: 'written',
        eyebrow: 'PUT IT IN YOUR OWN WORDS',
        title: 'Explain investment banking in one or two sentences.',
        body:
          "Don't worry about sounding polished. If you understand it, you should be able to explain it simply.",
        placeholder: 'Investment banks help companies...',
        modelAnswer:
          'Investment banks advise companies on major transactions, such as mergers and acquisitions, and help them raise capital through debt or equity offerings.',
      },
      {
        type: 'complete',
        title: "You now know what you're actually recruiting for.",
        body:
          "Small win, but an important one. Next we'll look at how the investment bank gets paid.",
        takeaway:
          'Investment banks primarily advise companies on major transactions and help them raise capital.',
      },
    ],
  },

  {
    id: 'how-banks-make-money',
    title: 'How Investment Banks Make Money',
    summary: 'Advisory fees, underwriting economics, and why deal size matters.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'FOLLOW THE MONEY',
        title: 'A bank is a business. So who actually pays it?',
        body:
          'Investment banks can earn very large fees because the transactions they advise on are often very large.',
        noteTitle: 'Know this',
        note:
          "When someone says a bank 'won a mandate,' it usually means the client hired that bank to work on a transaction.",
      },
      {
        type: 'concept',
        eyebrow: 'THE MAIN REVENUE STREAMS',
        title: 'Different transactions create different kinds of fees.',
        body:
          'You do not need to memorize fee percentages. You do need to understand the basic economics.',
        cards: [
          {
            number: '01',
            title: 'Advisory Fees',
            text:
              'A company pays the bank for advising on a transaction such as an acquisition, sale, merger, or restructuring.',
          },
          {
            number: '02',
            title: 'Underwriting Fees',
            text:
              'Banks can earn fees for helping issue and distribute new debt or equity securities to investors.',
          },
        ],
        plainTitle: 'Why deal size matters',
        plainText:
          'Larger and more complicated transactions can generate larger absolute fees, which is one reason bankers care so much about transaction value.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title:
          'A company hires a bank to advise on its $4 billion sale. What is the clearest source of banking revenue?',
        options: [
          'An advisory fee paid by the client',
          'Dividends from the target company',
          'A management fee charged on investor assets',
          'Interest from consumer checking accounts',
        ],
        correctIndex: 0,
        correctTitle: "That's it.",
        correctText:
          'The client pays the investment bank for its advisory work on the transaction.',
        wrongTitle: 'Easy trap.',
        wrongText:
          'Investment banking economics are mainly tied to transactions and capital raising, not portfolio management fees or retail banking deposits.',
      },
      {
        type: 'written',
        eyebrow: 'MAKE IT SIMPLE',
        title: 'Why might a company pay millions of dollars to an investment bank?',
        body:
          'Give the business reason, not just “because the bank charges a fee.”',
        placeholder: 'A company might pay a large advisory fee because...',
        modelAnswer:
          'A major transaction can materially affect the value and future of a company, so the client pays for specialized advice, valuation work, transaction execution, investor access, and help managing the process.',
      },
      {
        type: 'complete',
        title: 'Banking revenue makes more sense once you think in transaction size.',
        body:
          'Next, we separate investment banking from the other finance careers people constantly mix together.',
        takeaway:
          'Investment banks are primarily paid through transaction-related advisory and capital-raising fees.',
      },
    ],
  },

  {
    id: 'finance-careers',
    title: 'IB vs. PE vs. Asset Management vs. S&T',
    summary:
      'Four finance careers that sound similar until you understand who is doing what.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'STOP MIXING THESE UP',
        title: 'Finance is an industry. Investment banking is one job inside it.',
        body:
          'Interviewers expect you to understand why you want investment banking specifically, not just “finance.”',
        noteTitle: 'Easy trap',
        note:
          "Saying you want investment banking because you love investing can create an awkward follow-up: 'Then why not asset management?'",
      },
      {
        type: 'concept',
        eyebrow: 'THE BIG DISTINCTION',
        title: 'Advising companies is different from investing capital.',
        body:
          'The easiest way to separate these careers is to ask what the professional is actually responsible for.',
        cards: [
          {
            number: 'IB',
            title: 'Investment Banking',
            text:
              'Advises companies on transactions and capital raising.',
          },
          {
            number: 'PE',
            title: 'Private Equity',
            text:
              'Invests fund capital into companies with the goal of increasing their value and later exiting the investment.',
          },
          {
            number: 'AM',
            title: 'Asset Management',
            text:
              'Invests money on behalf of clients across securities and other assets.',
          },
          {
            number: 'S&T',
            title: 'Sales & Trading',
            text:
              'Helps institutional clients transact in financial markets and provides liquidity and market access.',
          },
        ],
        plainTitle: 'The shortcut',
        plainText:
          'Investment bankers advise. Private equity and asset managers invest. Sales & trading operates in the markets.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title:
          'Who is most likely deciding whether to acquire a company using money from an investment fund?',
        options: [
          'Investment banking analyst',
          'Private equity associate',
          'Equity sales trader',
          'Wealth management advisor',
        ],
        correctIndex: 1,
        correctTitle: 'Right.',
        correctText:
          'Private equity firms invest capital directly into companies and evaluate acquisitions as principals.',
        wrongTitle: 'Not quite.',
        wrongText:
          'The key phrase is “using money from an investment fund.” That points to private equity rather than an advisor.',
      },
      {
        type: 'written',
        eyebrow: 'TEST YOUR UNDERSTANDING',
        title: 'In one sentence, what is the biggest difference between IB and PE?',
        body:
          'Try to use the words “advisor” and “investor” without turning it into a textbook definition.',
        placeholder: 'Investment banking is different from private equity because...',
        modelAnswer:
          'Investment bankers advise clients on transactions, while private equity firms act as investors and use their own fund capital to acquire companies.',
      },
      {
        type: 'complete',
        title: 'You can now explain why “finance” is way too broad.',
        body:
          'Next we look at the major types of investment banks and what those labels actually mean.',
        takeaway:
          'Investment banking is primarily an advisory business, while private equity and asset management primarily invest capital.',
      },
    ],
  },

  {
    id: 'bank-types',
    title: 'Bulge Brackets, Elite Boutiques & Middle Market Banks',
    summary:
      'The major bank categories and why the labels are useful but imperfect.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'THE BANK LANDSCAPE',
        title: 'Not every investment bank looks the same.',
        body:
          'Banks differ in size, products, client base, geographic reach, balance sheet capabilities, and typical transaction size.',
        noteTitle: 'One warning',
        note:
          'These categories are useful shorthand, but the boundaries are not perfectly clean.',
      },
      {
        type: 'concept',
        eyebrow: 'THREE COMMON LABELS',
        title: 'You will hear these constantly during recruiting.',
        body:
          'Focus on the broad differences rather than obsessing over rankings.',
        cards: [
          {
            number: 'BB',
            title: 'Bulge Bracket',
            text:
              'Large global banks that usually offer a broad set of investment banking and capital markets products.',
          },
          {
            number: 'EB',
            title: 'Elite Boutique',
            text:
              'Advisory-focused firms known for significant M&A or restructuring work.',
          },
          {
            number: 'MM',
            title: 'Middle Market',
            text:
              'Banks that often focus more heavily on middle-market clients and transactions.',
          },
        ],
        plainTitle: 'What students get wrong',
        plainText:
          'A bank category does not tell you everything about your experience. The group, deal flow, culture, and responsibilities matter too.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title: 'Which description best fits an elite boutique?',
        options: [
          'A small local bank that only makes business loans',
          'A large asset manager focused on mutual funds',
          'An advisory-focused investment bank known for major transactions',
          'A retail brokerage serving individual investors',
        ],
        correctIndex: 2,
        correctTitle: 'Exactly.',
        correctText:
          'Elite boutiques are generally advisory-focused investment banks with strong transaction franchises.',
        wrongTitle: 'Not that one.',
        wrongText:
          'The important distinction is that an elite boutique is still an investment bank and is primarily known for advisory work.',
      },
      {
        type: 'complete',
        title: 'Bank labels are useful. They are not the whole story.',
        body:
          'Next we move inside the bank itself and look at coverage groups versus product groups.',
        takeaway:
          'Bank categories describe broad business models, but your experience depends heavily on the specific group and team.',
      },
    ],
  },

  {
    id: 'groups',
    title: 'Coverage Groups vs. Product Groups',
    summary:
      'How investment banking teams are organized and how the work differs.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'INSIDE THE BANK',
        title: 'Investment banking is usually divided by industry and by product.',
        body:
          'Understanding this structure makes recruiting conversations much easier because bankers constantly refer to their “group.”',
        noteTitle: 'Example',
        note:
          'A banker might say, “I am in healthcare coverage,” while another says, “I am in leveraged finance.” Both are investment bankers.',
      },
      {
        type: 'concept',
        eyebrow: 'TWO WAYS TO SPECIALIZE',
        title: 'Coverage knows the industry. Product knows the transaction.',
        body:
          'That is simplified, but it is a very useful starting point.',
        cards: [
          {
            number: '01',
            title: 'Coverage Groups',
            text:
              'Focus on a particular industry, such as healthcare, technology, industrials, consumer, or energy.',
          },
          {
            number: '02',
            title: 'Product Groups',
            text:
              'Focus on a type of transaction or financing, such as M&A, leveraged finance, ECM, or DCM.',
          },
        ],
        plainTitle: 'How they work together',
        plainText:
          'A healthcare company pursuing an acquisition might work with healthcare coverage bankers plus M&A bankers who specialize in transaction execution.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title:
          'Which group is most clearly organized around an industry rather than a transaction type?',
        options: [
          'Mergers & Acquisitions',
          'Leveraged Finance',
          'Technology',
          'Debt Capital Markets',
        ],
        correctIndex: 2,
        correctTitle: 'Yep.',
        correctText:
          'Technology is an industry coverage group. The others are organized around transaction or financing products.',
        wrongTitle: 'Look at what the group specializes in.',
        wrongText:
          'Coverage groups are organized around industries. Product groups specialize in transaction or financing types.',
      },
      {
        type: 'complete',
        title: 'You now know what bankers mean when they talk about their group.',
        body:
          'One last foundation lesson: who actually does what from analyst to managing director.',
        takeaway:
          'Coverage groups specialize by industry, while product groups specialize by transaction or financing type.',
      },
    ],
  },

  {
    id: 'hierarchy',
    title: 'Analyst → Associate → VP → Director → MD',
    summary:
      'Who builds the model, who manages the process, and who owns the relationship.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'WHO DOES WHAT?',
        title: 'The job changes a lot as you move up the banking hierarchy.',
        body:
          'Junior bankers spend more time producing and analyzing the work. Senior bankers spend more time managing clients, teams, and business development.',
        noteTitle: 'The big picture',
        note:
          'Responsibility gradually shifts from execution toward judgment, management, relationships, and winning new business.',
      },
      {
        type: 'concept',
        eyebrow: 'THE LADDER',
        title: 'Think of the hierarchy as a shift in responsibility.',
        body:
          'Titles vary slightly between firms, but this is the common structure.',
        cards: [
          {
            number: 'A1',
            title: 'Analyst',
            text:
              'Builds models, performs analysis, researches companies, and handles much of the detailed execution work.',
          },
          {
            number: 'A2',
            title: 'Associate',
            text:
              'Reviews analyst work, manages execution, and coordinates workstreams.',
          },
          {
            number: 'VP',
            title: 'Vice President',
            text:
              'Runs much of the day-to-day process, manages junior teams, and coordinates with clients.',
          },
          {
            number: 'MD',
            title: 'Managing Director',
            text:
              'Focuses heavily on senior client relationships, strategic advice, and winning new business.',
          },
        ],
        plainTitle: 'And Directors?',
        plainText:
          'Many banks also use Director or Executive Director between VP and MD. Exact titles vary by firm.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title:
          'Who is most likely spending significant time winning new client business?',
        options: [
          'First-year analyst',
          'Managing director',
          'Summer analyst',
          'New associate',
        ],
        correctIndex: 1,
        correctTitle: 'Exactly.',
        correctText:
          'Managing directors are senior relationship managers and business generators.',
        wrongTitle: 'Think senior.',
        wrongText:
          'Junior bankers focus much more heavily on analysis and execution.',
      },
      {
        type: 'complete',
        title: 'Module 1 complete.',
        body:
          'You now have enough context to understand the industry before we start digging into deals, accounting, valuation, and recruiting.',
        takeaway:
          'Junior bankers execute the detailed work; senior bankers increasingly manage people, clients, strategy, and business development.',
      },
    ],
  },
]

const dealsLessons = [
  {
    id: 'why-raise-capital',
    title: 'Why Companies Raise Capital',
    summary:
      'Why businesses need outside money and what they actually use it for.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'START WITH THE WHY',
        title: 'Companies raise capital because growth usually costs money.',
        body:
          'A company can generate cash internally, but sometimes its plans require more capital than the business currently has available.',
        noteTitle: 'Think like the company',
        note:
          'The question is not “Why would a company want money?” The useful question is what the company plans to do with that money.',
      },
      {
        type: 'list',
        eyebrow: 'COMMON USES',
        title: 'Capital usually has a job.',
        body:
          'Companies raise money for a few recurring reasons.',
        items: [
          'Build factories, stores, data centers, or other assets',
          'Acquire another company',
          'Invest in research, technology, or new products',
          'Refinance existing debt',
          'Fund working capital',
          'Strengthen the balance sheet',
        ],
        noteTitle: 'On the job',
        note:
          'Bankers often frame financing decisions around the use of proceeds: what the company needs the money for.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title:
          'A fast-growing company wants to build three new manufacturing plants but does not have enough cash. What is the most direct reason to raise capital?',
        options: [
          'To increase its stock price automatically',
          'To fund expansion',
          'To reduce revenue',
          'To avoid preparing financial statements',
        ],
        correctIndex: 1,
        correctTitle: 'Exactly.',
        correctText:
          'The company needs capital to finance expansion beyond what its current cash can support.',
        wrongTitle: 'Not quite.',
        wrongText:
          'Capital raising is about funding a business need. Here, that need is expansion.',
      },
      {
        type: 'fill',
        eyebrow: 'FILL THE GAP',
        title: 'Capital is usually raised for a specific ______ of proceeds.',
        answer: 'use',
        alternatives: ['use'],
        hint: 'Bankers use this phrase constantly.',
        successText:
          'Right. “Use of proceeds” describes what the company plans to do with the money raised.',
      },
      {
        type: 'complete',
        title: 'Capital raising starts with the business need.',
        body:
          'Next we look at the two broad ways a company can fund that need: debt and equity.',
        takeaway:
          'Companies raise capital to fund investments, acquisitions, refinancing, working capital, and other corporate needs.',
      },
    ],
  },

  {
    id: 'debt-vs-equity',
    title: 'Debt vs. Equity',
    summary:
      'Borrowing money versus selling ownership, and the trade-offs behind each.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'THE FIRST BIG CHOICE',
        title: 'A company can borrow money or sell ownership.',
        body:
          'Those are the two basic financing categories behind most capital-raising decisions.',
        noteTitle: 'Know this cold',
        note:
          'Debt creates a contractual obligation. Equity represents ownership.',
      },
      {
        type: 'concept',
        eyebrow: 'SIDE BY SIDE',
        title: 'Debt and equity solve the same funding problem differently.',
        body:
          'Neither one is automatically better. The trade-off depends on the company and situation.',
        cards: [
          {
            number: 'D',
            title: 'Debt',
            text:
              'The company borrows money and generally owes interest plus repayment of principal. Existing owners usually avoid dilution.',
          },
          {
            number: 'E',
            title: 'Equity',
            text:
              'The company sells an ownership stake. There is no required principal repayment, but existing shareholders are diluted.',
          },
        ],
        plainTitle: 'The core trade-off',
        plainText:
          'Debt can be cheaper but adds fixed obligations and financial risk. Equity is more flexible but gives away ownership.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title:
          'Which financing source most directly dilutes existing shareholders?',
        options: [
          'New debt',
          'New common equity',
          'Accounts payable',
          'Cash on the balance sheet',
        ],
        correctIndex: 1,
        correctTitle: 'Right.',
        correctText:
          'Issuing new common shares increases the ownership base and therefore dilutes existing shareholders.',
        wrongTitle: 'Easy trap.',
        wrongText:
          'Debt adds obligations but usually does not change ownership. New equity does.',
      },
      {
        type: 'fill',
        eyebrow: 'VOCABULARY CHECK',
        title:
          'When new shares reduce an existing shareholder’s percentage ownership, that is called ______.',
        answer: 'dilution',
        alternatives: ['dilution', 'shareholder dilution'],
        hint: 'You will hear this word constantly in finance.',
        successText:
          'Exactly. Dilution means an existing shareholder owns a smaller percentage after new shares are issued.',
      },
      {
        type: 'complete',
        title: 'Debt versus equity is one of the core corporate finance decisions.',
        body:
          'Now we can look at one of the best-known equity transactions: an IPO.',
        takeaway:
          'Debt requires repayment and interest; equity sells ownership and can dilute existing shareholders.',
      },
    ],
  },

  {
    id: 'ipo',
    title: 'What an IPO Actually Is',
    summary:
      'How a private company enters the public markets and what the bank does.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'GOING PUBLIC',
        title: 'An IPO is the first public sale of a company’s stock.',
        body:
          'IPO stands for Initial Public Offering. It is the process through which a private company becomes publicly traded.',
        noteTitle: 'Do not overcomplicate it',
        note:
          'At the highest level: private company → public investors buy shares → stock begins trading publicly.',
      },
      {
        type: 'list',
        eyebrow: 'WHY GO PUBLIC?',
        title: 'An IPO can do more than just raise money.',
        body:
          'Companies may pursue an IPO for several reasons.',
        items: [
          'Raise growth capital',
          'Create liquidity for existing shareholders',
          'Establish a public market value',
          'Use publicly traded stock in future acquisitions',
          'Increase visibility and access to capital markets',
        ],
        noteTitle: 'Important',
        note:
          'Going public also adds disclosure requirements, scrutiny, and the pressure of public-market expectations.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title: 'What makes an IPO “initial”?',
        options: [
          'It is the company’s first public equity offering',
          'It is always the company’s first financing ever',
          'The company has no existing shareholders',
          'The shares cannot trade afterward',
        ],
        correctIndex: 0,
        correctTitle: 'Exactly.',
        correctText:
          'The IPO is the company’s initial offering of shares to the public market.',
        wrongTitle: 'Not quite.',
        wrongText:
          'A company may have raised private capital many times before. “Initial” refers to the first public offering.',
      },
      {
        type: 'list',
        eyebrow: 'WHAT THE BANK DOES',
        title: 'The bank helps prepare, market, price, and distribute the offering.',
        body:
          'An IPO is not just “put the shares online and see what happens.”',
        items: [
          'Help prepare the company for investors',
          'Assist with valuation and positioning',
          'Coordinate diligence and offering materials',
          'Market the company to investors',
          'Help determine pricing',
          'Allocate shares to investors',
        ],
        noteTitle: 'On the job',
        note:
          'ECM and industry coverage bankers often work together on equity offerings.',
      },
      {
        type: 'complete',
        title: 'An IPO is the bridge from private ownership to public markets.',
        body:
          'But public companies can raise equity again later. That is where follow-on offerings come in.',
        takeaway:
          'An IPO is a private company’s first public stock offering and is used to raise capital, create liquidity, and establish public ownership.',
      },
    ],
  },

  {
    id: 'follow-on',
    title: 'Follow-On Equity Offerings',
    summary:
      'How a company raises equity after it is already public.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'PUBLIC ALREADY?',
        title: 'An IPO is not the last time a company can issue stock.',
        body:
          'A public company can return to the equity markets later and sell additional shares.',
        noteTitle: 'Terminology',
        note:
          'These transactions are commonly called follow-on offerings or secondary offerings, although the exact terminology can depend on who is selling the shares.',
      },
      {
        type: 'concept',
        eyebrow: 'TWO SOURCES OF SHARES',
        title: 'New shares and existing shares are economically different.',
        body:
          'The key question is whether the company itself receives cash.',
        cards: [
          {
            number: 'P',
            title: 'Primary Shares',
            text:
              'New shares issued by the company. The company receives the proceeds.',
          },
          {
            number: 'S',
            title: 'Secondary Shares',
            text:
              'Existing shares sold by current shareholders. The selling shareholders receive the proceeds.',
          },
        ],
        plainTitle: 'Interview favorite',
        plainText:
          'Primary issuance raises capital for the company. Secondary selling creates liquidity for existing holders.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title:
          'A public company issues $500 million of brand-new shares to investors. Who receives the cash?',
        options: [
          'The company',
          'Only existing shareholders',
          'The stock exchange',
          'No one',
        ],
        correctIndex: 0,
        correctTitle: 'Correct.',
        correctText:
          'Because the shares are newly issued by the company, this is primary issuance and the company receives the proceeds.',
        wrongTitle: 'Watch the wording.',
        wrongText:
          '“Brand-new shares” means the company is issuing them, so the proceeds go to the company.',
      },
      {
        type: 'complete',
        title: 'Public equity markets remain available after the IPO.',
        body:
          'Next we switch from ownership financing to borrowing.',
        takeaway:
          'Primary equity raises money for the company; secondary selling provides liquidity to existing shareholders.',
      },
    ],
  },

  {
    id: 'debt-offerings',
    title: 'Debt Offerings',
    summary:
      'How companies borrow from capital markets instead of issuing stock.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'BORROWING AT SCALE',
        title: 'Companies can borrow from investors by issuing debt securities.',
        body:
          'Instead of taking only a traditional bank loan, a company can issue bonds or other debt instruments into the capital markets.',
        noteTitle: 'The key difference',
        note:
          'Debt investors are lenders, not owners.',
      },
      {
        type: 'concept',
        eyebrow: 'WHAT THE INVESTOR GETS',
        title: 'Debt has a promised economic structure.',
        body:
          'The exact terms differ by security, but three concepts show up constantly.',
        cards: [
          {
            number: '01',
            title: 'Principal',
            text:
              'The amount borrowed that is generally repaid at maturity.',
          },
          {
            number: '02',
            title: 'Interest',
            text:
              'The compensation paid to lenders for providing capital.',
          },
          {
            number: '03',
            title: 'Maturity',
            text:
              'The date when the debt is scheduled to be repaid.',
          },
        ],
        plainTitle: 'Why companies use debt',
        plainText:
          'Debt can fund acquisitions, refinance existing obligations, finance investment, or provide general corporate liquidity without issuing new ownership.',
      },
      {
        type: 'number',
        eyebrow: 'MINI CALCULATION',
        title:
          'A company issues $200 million of debt with a 6% annual coupon. Roughly how much annual interest does that imply?',
        answer: 12,
        tolerance: 0.01,
        suffix: 'million',
        placeholder: 'Enter the answer in millions',
        explanation:
          '6% × $200 million = $12 million of annual interest.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title: 'Which is most directly associated with debt rather than equity?',
        options: [
          'Ownership dilution',
          'Interest expense',
          'Voting ownership',
          'Common dividends',
        ],
        correctIndex: 1,
        correctTitle: 'Exactly.',
        correctText:
          'Borrowing creates interest expense. Ownership and voting rights are equity concepts.',
        wrongTitle: 'Think lender, not owner.',
        wrongText:
          'Debt holders are lenders. The clearest recurring cost to the company is interest.',
      },
      {
        type: 'complete',
        title: 'Debt financing raises capital without selling ownership.',
        body:
          'Now we move from capital raising into the other major banking bucket: M&A.',
        takeaway:
          'Debt offerings allow companies to borrow from investors in exchange for interest and future repayment.',
      },
    ],
  },

  {
    id: 'what-is-ma',
    title: 'What M&A Actually Is',
    summary:
      'What mergers and acquisitions mean without the jargon.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'THE OTHER BIG BUCKET',
        title: 'M&A is about combining ownership of businesses.',
        body:
          'M&A stands for mergers and acquisitions. In practice, most conversations revolve around one company acquiring another or two companies combining.',
        noteTitle: 'Keep it simple',
        note:
          'You do not need to start with legal structures. Start with the economic idea: one business is buying or combining with another.',
      },
      {
        type: 'list',
        eyebrow: 'WHY DO DEALS HAPPEN?',
        title: 'Companies usually acquire for a strategic or financial reason.',
        body:
          'The buyer expects the combined business to be worth more, become more competitive, or create another valuable outcome.',
        items: [
          'Enter a new market',
          'Acquire technology or products',
          'Increase scale',
          'Eliminate or combine with a competitor',
          'Capture cost savings',
          'Add customers or distribution',
          'Acquire talent or capabilities',
        ],
        noteTitle: 'Interview perspective',
        note:
          '“Synergies” is not a magic word. Be able to explain what the actual benefit is.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title:
          'A software company buys a smaller firm mainly to acquire its technology and engineers. What is the clearest deal rationale?',
        options: [
          'Access capabilities and technology',
          'Reduce all debt automatically',
          'Avoid financial reporting',
          'Create an IPO',
        ],
        correctIndex: 0,
        correctTitle: 'Right.',
        correctText:
          'The buyer is acquiring capabilities that would otherwise take time or money to build internally.',
        wrongTitle: 'Not quite.',
        wrongText:
          'Focus on what the buyer actually gains from owning the target.',
      },
      {
        type: 'complete',
        title: 'M&A is ultimately about ownership and strategic value.',
        body:
          'Next we look at which side of the transaction the bank is advising.',
        takeaway:
          'M&A involves businesses combining or one company acquiring another for strategic or financial reasons.',
      },
    ],
  },

  {
    id: 'buy-side-vs-sell-side',
    title: 'Buy-Side vs. Sell-Side M&A',
    summary:
      'The same deal looks very different depending on which client hired the bank.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'WHICH CLIENT ARE YOU ADVISING?',
        title: 'A banker can work for the buyer or the seller.',
        body:
          'The transaction may be the same, but the objectives and process differ depending on which side hired the bank.',
        noteTitle: 'Do not confuse this',
        note:
          '“Buy-side” here refers to M&A advisory for an acquirer. It is different from using “buy-side” to describe careers like PE or asset management.',
      },
      {
        type: 'concept',
        eyebrow: 'TWO SIDES',
        title: 'The client changes the assignment.',
        body:
          'Think about whose interests the bank represents.',
        cards: [
          {
            number: 'BUY',
            title: 'Buy-Side Advisory',
            text:
              'The bank advises a buyer evaluating and potentially acquiring a target.',
          },
          {
            number: 'SELL',
            title: 'Sell-Side Advisory',
            text:
              'The bank advises a company or shareholder seeking to sell a business.',
          },
        ],
        plainTitle: 'Different objectives',
        plainText:
          'A buyer wants to find the right target and avoid overpaying. A seller wants to position the business well, create competition, and maximize value and deal certainty.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title:
          'Your client owns a business and wants your bank to find potential acquirers. Which side are you on?',
        options: [
          'Buy-side',
          'Sell-side',
          'Debt capital markets',
          'Equity research',
        ],
        correctIndex: 1,
        correctTitle: 'Exactly.',
        correctText:
          'Your client is the seller, so this is sell-side M&A advisory.',
        wrongTitle: 'Look at your client.',
        wrongText:
          'The easiest way to answer is to ask whether the client is buying or selling.',
      },
      {
        type: 'complete',
        title: 'The side of the mandate determines the banker’s objective.',
        body:
          'Now we look at the two most common types of buyers.',
        takeaway:
          'Buy-side bankers advise acquirers; sell-side bankers advise sellers.',
      },
    ],
  },

  {
    id: 'strategic-vs-financial',
    title: 'Strategic vs. Financial Buyers',
    summary:
      'Corporate acquirers versus investment firms and why they may value a target differently.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'WHO IS BUYING?',
        title: 'Not every buyer evaluates a target the same way.',
        body:
          'One of the most useful distinctions in M&A is between strategic buyers and financial buyers.',
        noteTitle: 'Know this',
        note:
          'Strategic buyers are usually operating companies. Financial buyers are typically investment firms such as private equity funds.',
      },
      {
        type: 'concept',
        eyebrow: 'THE DIFFERENCE',
        title: 'Strategics buy businesses to fit a business. Financial sponsors buy investments.',
        body:
          'That difference can materially affect valuation and deal rationale.',
        cards: [
          {
            number: 'S',
            title: 'Strategic Buyer',
            text:
              'An operating company acquiring another company to create strategic or operating benefits.',
          },
          {
            number: 'F',
            title: 'Financial Buyer',
            text:
              'An investment firm, often private equity, acquiring a company with the goal of earning an investment return.',
          },
        ],
        plainTitle: 'Why a strategic may pay more',
        plainText:
          'A strategic buyer may expect synergies that a standalone financial buyer cannot capture, potentially allowing it to justify a higher price.',
      },
      {
        type: 'mcq',
        eyebrow: 'QUICK CHECK',
        title:
          'A global beverage company buys a smaller drink brand to expand distribution through its existing network. What type of buyer is it?',
        options: [
          'Strategic buyer',
          'Financial buyer',
          'Retail investor',
          'Debt holder',
        ],
        correctIndex: 0,
        correctTitle: 'Correct.',
        correctText:
          'The buyer is an operating company expecting strategic benefits from combining the businesses.',
        wrongTitle: 'Think about who the buyer is.',
        wrongText:
          'An operating company buying another business for strategic benefits is a strategic buyer.',
      },
      {
        type: 'complete',
        title: 'Buyer type affects both rationale and valuation.',
        body:
          'Next we zoom out and walk through how an M&A deal actually progresses.',
        takeaway:
          'Strategic buyers seek business benefits; financial buyers primarily seek investment returns.',
      },
    ],
  },

  {
    id: 'deal-process',
    title: 'How a Deal Progresses',
    summary:
      'From the first pitch to announcement and closing.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'FROM IDEA TO CLOSE',
        title: 'Deals move through a process, not a single meeting.',
        body:
          'M&A execution can take months and involves bankers, lawyers, accountants, executives, financing providers, and other advisors.',
        noteTitle: 'Important',
        note:
          'The exact sequence varies by deal. Learn the logic, not a rigid script.',
      },
      {
        type: 'list',
        eyebrow: 'A SIMPLIFIED PROCESS',
        title: 'Here is the basic flow.',
        body:
          'A typical transaction moves through several broad stages.',
        items: [
          'Pitch or initial strategic discussion',
          'Engagement and preparation',
          'Buyer outreach or target evaluation',
          'Management meetings and diligence',
          'Valuation and negotiation',
          'Financing and documentation',
          'Signing and announcement',
          'Regulatory or shareholder approvals',
          'Closing',
        ],
        noteTitle: 'On the job',
        note:
          'Analysts help keep information, analysis, materials, and deadlines organized throughout this process.',
      },
      {
        type: 'mcq',
        eyebrow: 'SEQUENCE CHECK',
        title:
          'Which usually happens before a transaction closes?',
        options: [
          'Diligence',
          'Nothing',
          'The target disappears immediately',
          'Financial statements stop being relevant',
        ],
        correctIndex: 0,
        correctTitle: 'Correct.',
        correctText:
          'Buyers typically perform extensive diligence before closing a transaction.',
        wrongTitle: 'Not quite.',
        wrongText:
          'A buyer generally investigates the target before committing billions of dollars.',
      },
      {
        type: 'complete',
        title: 'A deal is a long execution process.',
        body:
          'The final lesson looks specifically at what bankers are doing while that process unfolds.',
        takeaway:
          'M&A execution moves from preparation and diligence through negotiation, signing, approvals, and closing.',
      },
    ],
  },

  {
    id: 'what-bankers-do-on-deal',
    title: 'What Bankers Do During a Deal',
    summary:
      'The actual work behind valuation, materials, diligence, and keeping the process moving.',
    steps: [
      {
        type: 'intro',
        eyebrow: 'THE REAL WORK',
        title: 'A live deal creates a lot of moving pieces.',
        body:
          'Bankers sit at the center of analysis, client communication, materials, process management, and coordination with other advisors.',
        noteTitle: 'Analyst reality',
        note:
          'The work is often less glamorous than the headline. Accuracy and process discipline matter enormously.',
      },
      {
        type: 'list',
        eyebrow: 'COMMON WORKSTREAMS',
        title: 'A junior banker may touch all of these.',
        body:
          'The exact mix depends on the deal and group.',
        items: [
          'Valuation analysis',
          'Financial modeling',
          'Buyer or target research',
          'Presentation materials',
          'Diligence tracking',
          'Data room organization',
          'Management presentation support',
          'Process timelines',
          'Transaction documentation support',
          'Updating senior bankers and the client',
        ],
        noteTitle: 'On the job',
        note:
          'A strong analyst is not just good at Excel. They make the entire team more reliable.',
      },
      {
        type: 'written',
        eyebrow: 'PUT IT TOGETHER',
        title:
          'Why does attention to detail matter so much on a live transaction?',
        body:
          'Think about the scale of the decision and how many people rely on the work.',
        placeholder: 'Attention to detail matters because...',
        modelAnswer:
          'Live deals involve high-stakes decisions, tight deadlines, and many parties relying on the same analysis and materials, so small errors can create confusion, damage credibility, or affect important decisions.',
      },
      {
        type: 'mcq',
        eyebrow: 'FINAL CHECK',
        title:
          'Which skill is most useful for a junior banker on a live deal?',
        options: [
          'Being consistently accurate and organized',
          'Guessing when numbers are missing',
          'Ignoring formatting because only the math matters',
          'Avoiding communication with the team',
        ],
        correctIndex: 0,
        correctTitle: 'Exactly.',
        correctText:
          'Technical skill matters, but reliable execution is one of the defining expectations of junior bankers.',
        wrongTitle: 'That would get painful quickly.',
        wrongText:
          'Live deals reward accuracy, communication, organization, and strong technical execution.',
      },
      {
        type: 'complete',
        title: 'Investment Banking Fundamentals complete.',
        body:
          'You now understand what banks do, how they get paid, how they are organized, why companies raise capital, and how transactions work.',
        takeaway:
          'Investment banking combines financial analysis with transaction execution, client service, and process management.',
      },
    ],
  },
]

export const tracks = [
    {
    id: 'finance-zero',
    number: '00',
    label: 'BEGIN HERE',
    title: 'Finance From Zero',
    tagline: 'No finance background required.',
    description:
      'Build the financial foundation that accounting, valuation, markets, and investment banking all depend on.',
    modules: financeZeroModules,
  },
  {
    id: 'fundamentals',
    number: '01',
    label: 'START HERE',
    title: 'Investment Banking Fundamentals',
    tagline: 'What bankers actually do all day.',
    description:
      'Understand the industry, the players, the deals, and the language before diving into the technicals.',
    modules: [
      {
        id: 'what-is-ib',
        number: '01',
        title: 'What Is Investment Banking?',
        subtitle: 'Start with the job itself.',
        description:
          'What investment banks do, how they make money, and what analysts actually work on.',
        lessons: whatIsIBLessons,
      },
      {
        id: 'deals',
        number: '02',
        title: 'Deals & Capital Markets',
        subtitle: 'Why companies hire bankers.',
        description:
          'M&A, IPOs, debt offerings, equity raises, and how a transaction actually moves from idea to close.',
        lessons: dealsLessons,
      },
    ],
  },

  {
    id: 'technical',
    number: '02',
    label: 'INTERVIEW CORE',
    title: 'Technical Interview Mastery',
    tagline: 'The stuff you need to know cold.',
    description:
      'Accounting, valuation, DCFs, M&A, and the concepts that show up again and again in banking interviews.',
    modules: [
     {
  id: 'accounting',
  number: '03',
  title: 'Accounting Foundations',
  subtitle: 'Three statements. Less scary than they look.',
  description:
    'Learn the income statement, balance sheet, cash flow statement, and the logic connecting them.',
  lessons: accountingLessons,
},
      technicalAdvancedById['three-statements'],
      technicalAdvancedById['corp-finance'],
      technicalAdvancedById['ev-equity'],
      technicalAdvancedById['valuation'],
      technicalAdvancedById['dcf'],
      technicalAdvancedById['ma'],
      technicalAdvancedById['lbo'],
      technicalAdvancedById['markets'],
    ],
  },

  {
    id: 'recruiting',
    number: '03',
    label: 'LAND THE JOB',
    title: 'Recruiting & Interviewing',
    tagline: 'Knowing finance is only half the game.',
    description:
      'Learn how recruiting works, how to network without sounding transactional, and how to tell your story.',
    modules: [
      careerAdvancedById['recruiting-process'],
      careerAdvancedById['networking'],
      careerAdvancedById['resume-story'],
    ],
  },

  {
    id: 'analyst',
    number: '04',
    label: 'ON THE JOB',
    title: 'Analyst Ready',
    tagline: 'Go beyond just passing the interview.',
    description:
      'Learn the tools, habits, and workflows that become important once you actually sit down at the desk.',
    modules: [
      careerAdvancedById['excel'],
      careerAdvancedById['modeling'],
      careerAdvancedById['powerpoint'],
      careerAdvancedById['analyst-work'],
    ],
  },
]