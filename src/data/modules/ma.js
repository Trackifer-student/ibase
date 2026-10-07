import { makeLesson } from './lessonFactory'

const M = (lesson) =>
  makeLesson({
    eyebrow: 'M&A',
    completeTitle: 'Lock in the deal logic.',
    completeBody:
      'Keep connecting strategic rationale, valuation, financing, and accounting rather than memorizing transaction vocabulary.',
    ...lesson,
  })

export const maLessons = [
  M({
    id: 'ma-overview',
    title: 'M&A: The Big Picture',
    summary: 'Understand what happens economically when one company acquires another.',
    concepts: ['valuation', 'equity', 'debt'],
    intro:
      'Mergers and acquisitions combine businesses, ownership, financing, and valuation into one transaction.',
    teachTitle: 'A buyer pays consideration to obtain control of a target business.',
    paragraphs: [
      'The buyer may acquire the target using cash, stock, debt financing, or a combination.',
      'The purchase price must be justified by the target’s standalone value plus any strategic or financial benefits the buyer expects to capture.',
      'After closing, the buyer consolidates the target’s operations and records acquisition accounting effects.',
      'Bankers help evaluate value, structure the transaction, finance it, negotiate terms, and manage the process.',
    ],
    callout:
      'M&A asks four questions: Why buy it? What is it worth? How do we pay? What happens after closing?',
    mcq: {
      title: 'What is the core economic event in an acquisition?',
      options: [
        'A buyer pays consideration to obtain control of a target',
        'A company automatically issues an IPO',
        'Revenue is converted into debt',
        'All liabilities disappear',
      ],
      correctIndex: 0,
      correctText: 'The buyer exchanges value for ownership and control of the target.',
      wrongText: 'Focus on transfer of control and consideration.',
    },
  }),

  M({
    id: 'deal-rationale',
    title: 'Why Companies Do Deals',
    summary: 'Separate real strategic rationale from vague buzzwords.',
    concepts: ['valuation'],
    intro:
      'An acquisition only makes sense if management expects the combined outcome to be more valuable than the alternatives.',
    teachTitle: 'Good deal rationale connects the target to a specific strategic or financial benefit.',
    paragraphs: [
      'A buyer may enter a new market, add products, gain customers, acquire technology, increase scale, or remove duplicated costs.',
      'Financial buyers may focus on cash generation, leverage capacity, operational improvement, and exit value.',
      'The phrase “strategic fit” is not enough; analysts should identify the exact mechanism creating value.',
      'A deal can still destroy value if the buyer overpays for otherwise attractive benefits.',
    ],
    callout:
      'A good target at the wrong price can be a bad deal.',
    mcq: {
      title: 'Which is the strongest acquisition rationale?',
      options: [
        'The target gives the buyer a product and distribution network it would take years to build',
        'The target has a nice logo',
        'All acquisitions increase EPS',
        'M&A always creates value',
      ],
      correctIndex: 0,
      correctText: 'The rationale identifies a concrete capability and time-to-build advantage.',
      wrongText: 'Look for a specific economic benefit.',
    },
  }),

  M({
    id: 'strategic-vs-financial-buyers',
    title: 'Strategic vs. Financial Buyers',
    summary: 'Compare operating-company acquirers with private equity and other financial sponsors.',
    concepts: ['investment', 'return', 'valuation'],
    intro:
      'Different buyers can value the same target differently because they expect different benefits.',
    teachTitle: 'Strategics buy businesses to fit operations; financial buyers buy investments to earn returns.',
    paragraphs: [
      'A strategic buyer may capture revenue or cost synergies from combining operations.',
      'A financial buyer generally cannot rely on the same operating synergies and instead focuses on cash flow, leverage, operational improvement, and exit value.',
      'Strategics can sometimes justify a higher price because the target is worth more inside their existing platform.',
      'Financial sponsors remain disciplined because returns depend heavily on entry price.',
    ],
    callout:
      'Buyer-specific value can differ from standalone value.',
    mcq: {
      title: 'Why might a strategic buyer pay more than a financial sponsor?',
      options: [
        'The strategic may capture synergies unavailable to the sponsor',
        'Strategics never use debt',
        'Financial sponsors cannot value companies',
        'Strategics ignore purchase price',
      ],
      correctIndex: 0,
      correctText: 'Synergies can make the target economically more valuable to a specific strategic buyer.',
      wrongText: 'Think about benefits created only by combining the two operating businesses.',
    },
  }),

  M({
    id: 'buy-side-sell-side',
    title: 'Buy-Side vs. Sell-Side M&A',
    summary: 'Understand how the banker’s objective changes depending on the client.',
    concepts: ['valuation'],
    intro:
      'The same transaction looks different depending on whether your client is buying or selling.',
    teachTitle: 'Buy-side work helps an acquirer find and evaluate targets; sell-side work helps an owner market and sell a business.',
    paragraphs: [
      'Buy-side bankers may screen targets, evaluate valuation, analyze synergies, structure consideration, and support negotiation.',
      'Sell-side bankers prepare marketing materials, identify buyers, run an auction or negotiated process, and seek to maximize value and certainty.',
      'A sell-side process often creates competitive tension among buyers.',
      'Both sides require valuation, modeling, diligence, and process management.',
    ],
    callout:
      'Ask one question first: who is the client?',
    mcq: {
      title: 'Your client owns a business and wants to find buyers. Which mandate is this?',
      options: [
        'Sell-side M&A',
        'Buy-side M&A',
        'Debt research',
        'Equity trading',
      ],
      correctIndex: 0,
      correctText: 'The client is the seller, so the bank is advising on the sell side.',
      wrongText: 'Identify whether your client is buying or selling.',
    },
  }),

  M({
    id: 'cash-vs-stock-consideration',
    title: 'Cash vs. Stock Consideration',
    summary: 'Understand how the buyer can pay and how payment choice changes economics.',
    concepts: ['cash', 'share', 'equity', 'debt'],
    intro:
      'Acquirers can pay with cash, stock, or a mix, and each choice affects financing, ownership, and risk.',
    teachTitle: 'Cash transfers value without sharing future ownership; stock shares future ownership with target shareholders.',
    paragraphs: [
      'Cash consideration may be funded from existing cash or new debt.',
      'Stock consideration requires the buyer to issue shares, diluting existing shareholders but preserving cash.',
      'Target shareholders receiving stock participate in the future combined company.',
      'The right mix depends on valuation, leverage capacity, market conditions, tax considerations, and buyer/target preferences.',
    ],
    callout:
      'Cash shifts financing risk to the buyer; stock shares ownership risk with the seller.',
    mcq: {
      title: 'What is a common effect of stock consideration?',
      options: [
        'The buyer issues new shares and existing shareholders can be diluted',
        'No ownership changes',
        'Debt automatically disappears',
        'Cash always increases',
      ],
      correctIndex: 0,
      correctText: 'New shares expand the ownership base and transfer part of the combined company to target shareholders.',
      wrongText: 'Think about what happens when the buyer pays using its own equity.',
      reviewConcepts: ['share', 'equity'],
    },
  }),

  M({
    id: 'purchase-price',
    title: 'Purchase Price & Offer Premium',
    summary: 'Translate an offer per share into equity purchase price and compare it with unaffected value.',
    concepts: ['stockPrice', 'equity', 'valuation'],
    intro:
      'Public-company deals are often discussed in terms of offer price per share and premium to the unaffected trading price.',
    teachTitle: 'Offer price × diluted shares gives the target equity purchase price.',
    paragraphs: [
      'The unaffected share price is typically the target’s market price before deal speculation materially influenced it.',
      'The offer premium measures how much more the buyer is offering relative to that unaffected price.',
      'The target’s diluted share count determines the equity purchase price.',
      'To move from equity purchase price to transaction Enterprise Value, account for debt, cash, and other claims.',
    ],
    callout:
      'Premium = Offer Price ÷ Unaffected Price − 1.',
    scenarioTitle: '$30 unaffected price, $36 offer price, 50 million diluted shares.',
    scenario:
      'Calculate premium and equity purchase price.',
    workedSteps: [
      { label: 'Premium', text: '$36 ÷ $30 − 1 = 20%.' },
      { label: 'Equity purchase price', text: '$36 × 50 million = $1.8 billion.' },
    ],
    takeaway:
      'Deal headline price per share must be translated into total equity and enterprise purchase value.',
    numberCheck: {
      title: 'Offer price is $25 and diluted shares are 40 million. What is equity purchase price in millions?',
      answer: 1000,
      suffix: 'million dollars',
      explanation: '$25 × 40 million = $1,000 million.',
    },
    mcq: {
      title: 'Why use diluted shares in purchase price calculations?',
      options: [
        'Potential equity instruments can increase the amount required to acquire all common ownership',
        'Debt is counted as shares',
        'Cash is always diluted',
        'Revenue determines share count',
      ],
      correctIndex: 0,
      correctText: 'The buyer must account for economically relevant potential common shares.',
      wrongText: 'Think about options, RSUs, and other instruments that can become common equity.',
    },
  }),

  M({
    id: 'synergies',
    title: 'Revenue & Cost Synergies',
    summary: 'Model the benefits a buyer expects from combining two businesses.',
    concepts: ['revenue', 'expense', 'valuation'],
    intro:
      'Synergies are incremental benefits that exist because the two companies combine.',
    teachTitle: 'Cost synergies reduce duplicated spending; revenue synergies increase sales or gross profit.',
    paragraphs: [
      'Cost synergies can come from eliminating duplicated corporate functions, procurement savings, facilities consolidation, or scale.',
      'Revenue synergies may come from cross-selling, distribution expansion, pricing, or product bundling.',
      'Revenue synergies are often harder to underwrite because they depend on customer behavior and execution.',
      'Synergies should be modeled with timing, implementation costs, and taxes rather than assumed to appear instantly.',
    ],
    callout:
      'Synergy value is only real if the combined company can actually capture it.',
    scenarioTitle: '$20 annual pre-tax cost synergies at a 25% tax rate.',
    scenario:
      'Estimate annual after-tax benefit once fully realized.',
    workedSteps: [
      { label: 'Pre-tax savings', text: '$20.' },
      { label: 'Tax effect', text: '$5.' },
      { label: 'After-tax benefit', text: '$15 per year.' },
    ],
    takeaway:
      'Synergies can justify a premium, but they require execution and should be valued after tax.',
    numberCheck: {
      title: 'Pre-tax cost synergies are $40 and tax rate is 25%. What is annual after-tax synergy benefit?',
      answer: 30,
      suffix: 'million',
      explanation: '$40 × 75% = $30.',
    },
    mcq: {
      title: 'Why are revenue synergies often considered riskier than cost synergies?',
      options: [
        'They often depend on customer behavior and future sales execution',
        'Revenue cannot increase after a deal',
        'Cost savings are always guaranteed',
        'Revenue synergies have no tax effect',
      ],
      correctIndex: 0,
      correctText: 'Cross-selling and market expansion depend on uncertain customer and execution outcomes.',
      wrongText: 'Think about which synergy type management can control more directly.',
    },
  }),

  M({
    id: 'accretion-dilution-intro',
    title: 'Accretion / Dilution: The Core Idea',
    summary: 'Measure whether a transaction increases or decreases the buyer’s EPS.',
    concepts: ['netIncome', 'share'],
    intro:
      'Public-company merger models often focus on whether the deal increases or decreases the buyer’s earnings per share.',
    teachTitle: 'Accretive means pro forma EPS rises; dilutive means pro forma EPS falls.',
    paragraphs: [
      'Start with buyer standalone EPS.',
      'Estimate combined net income after adding target earnings, synergies, financing costs, lost interest income, new amortization, and other deal effects.',
      'Divide combined net income by the pro forma diluted share count.',
      'Compare pro forma EPS with buyer standalone EPS.',
    ],
    callout:
      'Accretion / Dilution % = Pro Forma EPS ÷ Buyer Standalone EPS − 1.',
    scenarioTitle: 'Buyer EPS $2.00; pro forma EPS $2.10.',
    scenario:
      'Calculate accretion.',
    workedSteps: [
      { label: 'Difference', text: '$2.10 − $2.00 = $0.10.' },
      { label: 'Percent', text: '$0.10 ÷ $2.00 = 5%.' },
      { label: 'Result', text: 'The deal is 5% accretive.' },
    ],
    takeaway:
      'Accretion / dilution is an EPS test, not a complete measure of whether a deal creates value.',
    numberCheck: {
      title: 'Buyer standalone EPS is $4.00 and pro forma EPS is $3.80. What is accretion / dilution percentage?',
      answer: -5,
      suffix: '%',
      explanation: '$3.80 ÷ $4.00 − 1 = −5%, so the deal is 5% dilutive.',
    },
    mcq: {
      title: 'Can an accretive deal still destroy value?',
      options: [
        'Yes, EPS accretion does not guarantee the buyer paid a sensible price',
        'No, accretion proves value creation',
        'No, because EPS is the same as cash flow',
        'Only if the buyer uses stock',
      ],
      correctIndex: 0,
      correctText: 'EPS mechanics can be favorable even when the buyer overpays or takes excessive risk.',
      wrongText: 'Accretion is one financial effect, not the complete economic verdict.',
    },
  }),

  M({
    id: 'eps-mechanics',
    title: 'EPS Mechanics in a Deal',
    summary: 'Build the numerator and denominator of pro forma EPS.',
    concepts: ['netIncome', 'share', 'interest'],
    intro:
      'Accretion / dilution becomes straightforward once you separate the pro forma net-income numerator from the diluted-share denominator.',
    teachTitle: 'Deal financing changes both earnings and share count.',
    paragraphs: [
      'Cash-funded deals can reduce interest income on cash used.',
      'Debt-funded deals add interest expense.',
      'Stock-funded deals increase diluted shares outstanding.',
      'Synergies increase operating profit, while purchase-accounting amortization and financing fees can reduce earnings.',
    ],
    callout:
      'Numerator = pro forma net income. Denominator = pro forma diluted shares.',
    scenarioTitle: 'Buyer NI $100, target NI $20, after-tax synergies $10, after-tax interest cost $5.',
    scenario:
      'Assume no new shares.',
    workedSteps: [
      { label: 'Combined standalone NI', text: '$100 + $20 = $120.' },
      { label: 'Add synergies', text: '$130.' },
      { label: 'Subtract financing cost', text: '$125 pro forma net income.' },
      { label: 'EPS', text: 'Divide $125 by buyer diluted shares because no new shares were issued.' },
    ],
    takeaway:
      'Every deal input either changes pro forma earnings, pro forma shares, or both.',
    mcq: {
      title: 'Which financing method most directly increases the EPS denominator?',
      options: [
        'Stock consideration',
        'Cash on hand',
        'Debt financing',
        'Cost synergies',
      ],
      correctIndex: 0,
      correctText: 'Issuing stock creates additional shares outstanding.',
      wrongText: 'The denominator is diluted shares.',
      reviewConcepts: ['share'],
    },
  }),

  M({
    id: 'cash-funding',
    title: 'Cash-Funded Acquisition',
    summary: 'Understand the opportunity cost of using cash to finance a deal.',
    concepts: ['cash', 'interest', 'return'],
    intro:
      'Using existing cash avoids new debt and new shares, but cash is not free.',
    teachTitle: 'The buyer gives up whatever return that cash was earning.',
    paragraphs: [
      'Cash held on the balance sheet may earn interest or investment income.',
      'When cash is spent on an acquisition, that future interest income is lost.',
      'Merger models therefore often include foregone interest income as a cost of cash funding.',
      'The after-tax cost depends on the yield the cash was earning and the tax rate.',
    ],
    callout:
      'Cash funding has an opportunity cost even without a stated financing coupon.',
    scenarioTitle: '$100 cash earns 4%; tax rate 25%.',
    scenario:
      'Estimate after-tax foregone annual interest.',
    workedSteps: [
      { label: 'Pre-tax interest', text: '$100 × 4% = $4.' },
      { label: 'After-tax amount', text: '$4 × 75% = $3.' },
      { label: 'Deal effect', text: 'Using the cash removes roughly $3 of annual after-tax income.' },
    ],
    takeaway:
      'Cash financing reduces future interest income that would otherwise support EPS.',
    numberCheck: {
      title: '$200 of cash earns 5%; tax rate 20%. What is after-tax foregone annual interest?',
      answer: 8,
      suffix: 'million',
      explanation: '$200 × 5% × 80% = $8.',
    },
    mcq: {
      title: 'Why can cash funding reduce pro forma net income?',
      options: [
        'The buyer loses interest income previously earned on the cash',
        'Cash is an expense equal to purchase price',
        'Cash increases share count',
        'Cash creates debt',
      ],
      correctIndex: 0,
      correctText: 'The opportunity cost of cash shows up as lost investment or interest income.',
      wrongText: 'Think about what the cash was earning before it was spent.',
      reviewConcepts: ['cash', 'interest'],
    },
  }),

  M({
    id: 'debt-funding',
    title: 'Debt-Funded Acquisition',
    summary: 'Model the interest expense created by financing purchase price with debt.',
    concepts: ['debt', 'interest', 'taxExpense'],
    intro:
      'Debt financing can preserve cash and avoid share issuance, but it increases leverage and interest expense.',
    teachTitle: 'New debt adds a financing cost that reduces pro forma earnings after tax.',
    paragraphs: [
      'Estimate the amount of debt required and the expected interest rate.',
      'Debt × interest rate gives pre-tax interest expense.',
      'Interest reduces pre-tax income and generally creates a tax shield.',
      'The merger model should also consider financing fees, debt paydown, and leverage constraints where relevant.',
    ],
    callout:
      'After-tax interest expense ≈ Debt issued × rate × (1 − tax rate).',
    scenarioTitle: '$300 new debt at 6%; tax rate 25%.',
    scenario:
      'Estimate after-tax annual interest cost.',
    workedSteps: [
      { label: 'Pre-tax interest', text: '$300 × 6% = $18.' },
      { label: 'Tax shield', text: '$18 × 25% = $4.5.' },
      { label: 'After-tax cost', text: '$13.5.' },
    ],
    takeaway:
      'Debt financing can make a deal more EPS-dilutive if interest cost exceeds earnings acquired and synergies.',
    numberCheck: {
      title: '$500 debt at 8% with a 25% tax rate. What is after-tax annual interest?',
      answer: 30,
      suffix: 'million',
      explanation: '$500 × 8% × 75% = $30.',
      reviewConcepts: ['debt', 'interest'],
    },
    mcq: {
      title: 'What is a major non-EPS risk of debt funding?',
      options: [
        'Higher leverage and fixed payment obligations',
        'Automatic share dilution',
        'Lower debt balance',
        'No financing cost',
      ],
      correctIndex: 0,
      correctText: 'Debt increases financial obligations and can reduce flexibility.',
      wrongText: 'Think beyond the income statement to the balance sheet and risk profile.',
      reviewConcepts: ['debt'],
    },
  }),

  M({
    id: 'stock-funding',
    title: 'Stock-Funded Acquisition',
    summary: 'Understand how exchange ratios and new share issuance affect ownership and EPS.',
    concepts: ['share', 'equity', 'stockPrice'],
    intro:
      'Stock consideration lets the buyer preserve cash and debt capacity but gives target shareholders ownership in the combined company.',
    teachTitle: 'Purchase price divided by buyer share price determines new shares issued in a simple stock deal.',
    paragraphs: [
      'If the buyer uses $500 of stock and its shares trade at $50, it must issue roughly 10 million shares.',
      'Those new shares increase the diluted-share denominator in pro forma EPS.',
      'A high buyer P / E stock can sometimes make stock-funded deals more easily accretive because fewer shares are needed per dollar of purchase price.',
      'Stock consideration also shares future upside and downside with target shareholders.',
    ],
    callout:
      'New Shares ≈ Stock Consideration ÷ Buyer Share Price.',
    scenarioTitle: '$600 stock consideration at $60 buyer share price.',
    scenario:
      'Calculate shares issued.',
    workedSteps: [
      { label: 'Stock value paid', text: '$600 million.' },
      { label: 'Buyer share price', text: '$60.' },
      { label: 'New shares', text: '10 million.' },
    ],
    takeaway:
      'Stock financing changes ownership and EPS through new share issuance.',
    numberCheck: {
      title: '$400 million of stock consideration at $40 per buyer share. How many million shares are issued?',
      answer: 10,
      suffix: 'million shares',
      explanation: '$400 ÷ $40 = 10 million.',
      reviewConcepts: ['share', 'stockPrice'],
    },
    mcq: {
      title: 'What is the primary EPS denominator effect of stock consideration?',
      options: [
        'Diluted shares increase',
        'Diluted shares decrease',
        'Debt increases automatically',
        'Revenue decreases',
      ],
      correctIndex: 0,
      correctText: 'The buyer issues new shares to target shareholders.',
      wrongText: 'Stock consideration expands the ownership base.',
      reviewConcepts: ['share'],
    },
  }),

  M({
    id: 'purchase-accounting',
    title: 'Purchase Accounting',
    summary: 'Understand what happens to target assets and liabilities when the buyer records an acquisition.',
    concepts: ['goodwill', 'intangibleAsset', 'asset', 'liability'],
    intro:
      'After an acquisition, accounting remeasures many target assets and liabilities and creates new acquisition-related balances.',
    teachTitle: 'Purchase price is allocated to identifiable assets and liabilities, with residual value becoming goodwill.',
    paragraphs: [
      'Certain target assets are stepped up or down to fair value.',
      'New identifiable intangible assets such as customer relationships or technology may be recorded.',
      'Those finite-lived intangibles can create future amortization expense.',
      'After identifiable net assets are measured, the remaining purchase-price residual is generally recorded as goodwill.',
    ],
    callout:
      'Purchase accounting turns transaction price into a new post-deal balance sheet.',
    mcq: {
      title: 'What is generally recorded after purchase price is allocated to identifiable net assets and a residual remains?',
      options: [
        'Goodwill',
        'Revenue',
        'Debt repayment',
        'Cash flow from operations',
      ],
      correctIndex: 0,
      correctText: 'Goodwill is the residual acquisition asset after identifiable net assets are measured.',
      wrongText: 'Think about the purchase-price allocation residual.',
      reviewConcepts: ['goodwill'],
    },
  }),

  M({
    id: 'goodwill-in-ma',
    title: 'Goodwill in M&A',
    summary: 'Calculate and interpret the acquisition-accounting residual.',
    concepts: ['goodwill', 'intangibleAsset', 'valuation'],
    intro:
      'Goodwill often becomes one of the largest new balance-sheet items created by an acquisition.',
    teachTitle: 'Goodwill reflects purchase price not assigned to identifiable net assets.',
    paragraphs: [
      'Start with equity purchase price and include assumed debt or other items as required by the transaction accounting.',
      'Measure identifiable acquired assets and assumed liabilities at fair value.',
      'Recognize identifiable intangible assets separately where appropriate.',
      'The remaining residual is goodwill, which can reflect expected synergies, workforce, strategic position, and other unidentifiable benefits.',
    ],
    callout:
      'Goodwill is an accounting residual, not a direct standalone valuation method.',
    scenarioTitle: 'Purchase price $500; identifiable assets $450; liabilities $150.',
    scenario:
      'Calculate simplified goodwill.',
    workedSteps: [
      { label: 'Net identifiable assets', text: '$450 − $150 = $300.' },
      { label: 'Purchase price', text: '$500.' },
      { label: 'Goodwill', text: '$500 − $300 = $200.' },
    ],
    takeaway:
      'Higher purchase price generally creates more goodwill, all else equal.',
    numberCheck: {
      title: 'Purchase price $700, identifiable assets $600, liabilities $180. What is simplified goodwill?',
      answer: 280,
      suffix: 'million',
      explanation: 'Net assets = $420; goodwill = $700 − $420 = $280.',
      reviewConcepts: ['goodwill'],
    },
    mcq: {
      title: 'Does goodwill represent cash that can be spent?',
      options: [
        'No, it is an acquisition-related accounting asset',
        'Yes, goodwill is cash',
        'Yes, goodwill is debt capacity',
        'No, because goodwill is revenue',
      ],
      correctIndex: 0,
      correctText: 'Goodwill is a balance-sheet accounting asset created by purchase accounting.',
      wrongText: 'Goodwill is not a cash account.',
      reviewConcepts: ['goodwill'],
    },
  }),

  M({
    id: 'asset-writeups',
    title: 'Asset Write-Ups & New Amortization',
    summary: 'Connect purchase accounting adjustments to future income-statement expense.',
    concepts: ['intangibleAsset', 'amortization', 'ppe', 'depreciation'],
    intro:
      'Acquisition accounting can increase the recorded value of target assets, creating additional future depreciation or amortization.',
    teachTitle: 'Write-ups increase the accounting asset base and can reduce future pro forma earnings.',
    paragraphs: [
      'If PP&E is written up, the incremental fair-value amount may create additional depreciation.',
      'New identifiable intangible assets can create amortization expense.',
      'These expenses are non-cash in the period recorded but reduce EBIT and net income.',
      'Merger models therefore include purchase-accounting D&A when calculating pro forma EPS.',
    ],
    callout:
      'A higher purchase price can indirectly reduce future EPS through additional acquisition-related amortization.',
    scenarioTitle: '$50 intangible write-up amortized over 10 years.',
    scenario:
      'Ignore taxes.',
    workedSteps: [
      { label: 'New intangible asset', text: '$50.' },
      { label: 'Annual amortization', text: '$50 ÷ 10 = $5.' },
      { label: 'Income statement effect', text: 'Pre-tax income is $5 lower each year during the amortization period.' },
    ],
    takeaway:
      'Purchase-accounting write-ups can create recurring non-cash expense after a deal.',
    numberCheck: {
      title: 'A $60 intangible asset is amortized straight-line over 12 years. What is annual amortization?',
      answer: 5,
      suffix: 'million',
      explanation: '$60 ÷ 12 = $5.',
      reviewConcepts: ['amortization', 'intangibleAsset'],
    },
    mcq: {
      title: 'Why can an acquisition reduce future GAAP earnings even if operations perform well?',
      options: [
        'New depreciation and amortization can arise from purchase-accounting write-ups',
        'Revenue must fall after every deal',
        'Goodwill is always expensed immediately',
        'Debt has no interest',
      ],
      correctIndex: 0,
      correctText: 'Acquisition accounting can create incremental non-cash D&A.',
      wrongText: 'Think about the new fair-value asset base after purchase accounting.',
      reviewConcepts: ['amortization', 'depreciation'],
    },
  }),

  M({
    id: 'deferred-taxes-ma',
    title: 'Deferred Taxes in M&A',
    summary: 'Understand why purchase-accounting write-ups can create deferred tax liabilities.',
    concepts: ['deferredTax', 'intangibleAsset', 'taxExpense'],
    intro:
      'Book accounting and tax accounting may treat acquisition-related asset write-ups differently.',
    teachTitle: 'A book step-up without a matching tax basis can create a deferred tax liability.',
    paragraphs: [
      'Purchase accounting may increase the book value of an identifiable asset.',
      'If tax basis does not increase by the same amount, future book expense and tax deductions differ.',
      'That temporary difference can create a deferred tax liability.',
      'The DTL itself can also affect goodwill in the purchase-price allocation.',
    ],
    callout:
      'Deferred taxes in M&A are timing differences created by book-versus-tax treatment of acquired assets and liabilities.',
    scenarioTitle: '$100 book write-up with no tax-basis step-up; tax rate 25%.',
    scenario:
      'Estimate the initial DTL in a simplified case.',
    workedSteps: [
      { label: 'Temporary difference', text: '$100.' },
      { label: 'Tax rate', text: '25%.' },
      { label: 'Deferred tax liability', text: '$25.' },
    ],
    takeaway:
      'Purchase accounting can create tax balances even when no immediate cash tax is paid.',
    numberCheck: {
      title: 'A $80 temporary difference is taxed at 30%. What is the DTL?',
      answer: 24,
      suffix: 'million',
      explanation: '$80 × 30% = $24.',
      reviewConcepts: ['deferredTax'],
    },
    mcq: {
      title: 'What commonly creates a DTL in acquisition accounting?',
      options: [
        'A book asset write-up without an equal tax-basis increase',
        'Issuing common stock only',
        'Receiving customer cash',
        'Repaying debt',
      ],
      correctIndex: 0,
      correctText: 'Different book and tax bases create a temporary timing difference.',
      wrongText: 'Think book basis versus tax basis.',
      reviewConcepts: ['deferredTax'],
    },
  }),

  M({
    id: 'merger-model',
    title: 'Merger Model Structure',
    summary: 'See how purchase price, financing, synergies, accounting, and share count combine in one model.',
    concepts: ['valuation', 'netIncome', 'share', 'debt', 'cash'],
    intro:
      'A merger model is the spreadsheet that ties transaction assumptions to pro forma financial results.',
    teachTitle: 'The model connects transaction mechanics to accretion / dilution.',
    paragraphs: [
      'Start with buyer and target standalone financials and purchase price.',
      'Build sources and uses to show how the transaction is funded.',
      'Calculate financing costs, foregone interest, synergies, purchase-accounting adjustments, and taxes.',
      'Combine net income and pro forma shares to calculate accretion / dilution.',
    ],
    callout:
      'A merger model is not one formula; it is a transaction logic chain.',
    scenarioTitle: 'High-level model flow.',
    scenario:
      'A buyer announces an acquisition.',
    workedSteps: [
      { label: 'Purchase price', text: 'Determine equity and enterprise transaction value.' },
      { label: 'Financing', text: 'Allocate cash, debt, and stock consideration.' },
      { label: 'Pro forma earnings', text: 'Combine target earnings, synergies, and deal costs.' },
      { label: 'Pro forma shares', text: 'Add new shares issued.' },
      { label: 'Output', text: 'Calculate accretion / dilution and key leverage metrics.' },
    ],
    takeaway:
      'Merger modeling translates deal structure into measurable financial consequences.',
    mcq: {
      title: 'What is the usual headline output of a simple public-company merger model?',
      options: [
        'EPS accretion / dilution',
        'Inventory turnover only',
        'Gross margin only',
        'Employee count',
      ],
      correctIndex: 0,
      correctText: 'Merger models commonly show how the transaction changes buyer EPS.',
      wrongText: 'Think pro forma net income divided by pro forma shares.',
    },
  }),

  M({
    id: 'deal-process-ma',
    title: 'The M&A Deal Process',
    summary: 'Understand the execution path from initial idea to closing.',
    concepts: ['valuation'],
    intro:
      'Deals take months because the buyer, seller, lawyers, bankers, accountants, lenders, regulators, and boards all need to complete different workstreams.',
    teachTitle: 'The process moves from preparation to diligence, negotiation, signing, approvals, and closing.',
    paragraphs: [
      'Sell-side processes often begin with preparation of marketing materials and buyer lists.',
      'Potential buyers may sign NDAs, receive a confidential information memorandum, submit bids, attend management meetings, and perform diligence.',
      'The parties negotiate price and legal terms before signing definitive documentation.',
      'Regulatory, financing, shareholder, or other conditions may need to be satisfied before closing.',
    ],
    callout:
      'Signing and closing are often different dates.',
    mcq: {
      title: 'What normally happens before a buyer commits to close a major acquisition?',
      options: [
        'Diligence and negotiation',
        'Nothing',
        'All target financial information is ignored',
        'The target repays every liability',
      ],
      correctIndex: 0,
      correctText: 'Buyers investigate the target and negotiate terms before closing.',
      wrongText: 'Large transactions require extensive diligence and documentation.',
    },
  }),

  M({
    id: 'transaction-fees',
    title: 'Transaction & Financing Fees',
    summary: 'Recognize that deals create real advisory, legal, accounting, and financing costs.',
    concepts: ['expense', 'debt', 'cash'],
    intro:
      'The purchase price is not the only cash cost of executing a transaction.',
    teachTitle: 'Advisory, legal, accounting, and financing fees must be funded and modeled.',
    paragraphs: [
      'Investment banking advisory fees are paid for transaction advice and execution.',
      'Legal and accounting diligence creates additional costs.',
      'Debt financing can require underwriting or arrangement fees.',
      'Some fees are expensed immediately while others may be capitalized or amortized depending on their nature and accounting treatment.',
    ],
    callout:
      'Sources and uses should include the cash needed for fees, not only the headline purchase price.',
    scenarioTitle: '$1 billion purchase plus $30 million fees.',
    scenario:
      'How much total cash funding is required before considering cash acquired?',
    workedSteps: [
      { label: 'Purchase price', text: '$1,000 million.' },
      { label: 'Fees', text: '$30 million.' },
      { label: 'Total gross funding need', text: '$1,030 million.' },
    ],
    takeaway:
      'Transaction costs can affect financing needs, EPS, and cash even though they are smaller than purchase price.',
    numberCheck: {
      title: 'Purchase price is $600 million and fees are $18 million. What is gross funding need?',
      answer: 618,
      suffix: 'million',
      explanation: '$600 + $18 = $618.',
    },
    mcq: {
      title: 'Why do financing fees matter in a merger model?',
      options: [
        'They require cash and can affect reported earnings over time',
        'They increase revenue',
        'They eliminate debt',
        'They have no economic effect',
      ],
      correctIndex: 0,
      correctText: 'Fees are real transaction costs and may also create accounting effects.',
      wrongText: 'Think cash funding and expense or amortization treatment.',
    },
  }),

  M({
    id: 'sources-uses-ma',
    title: 'Sources & Uses in an Acquisition',
    summary: 'Show what the buyer needs to fund and where that funding comes from.',
    concepts: ['cash', 'debt', 'equity'],
    intro:
      'Sources & Uses is a simple schedule that forces transaction funding to balance.',
    teachTitle: 'Uses show where money goes; sources show where money comes from.',
    paragraphs: [
      'Uses can include equity purchase price, debt repayment, transaction fees, and other required payments.',
      'Sources can include buyer cash, new debt, stock consideration, rollover equity, or other financing.',
      'Total sources must equal total uses.',
      'The schedule provides the foundation for financing assumptions in a merger model or LBO.',
    ],
    callout:
      'Sources = Uses. If they do not match, the transaction is not fully funded.',
    scenarioTitle: 'Uses of $500 purchase price plus $20 fees.',
    scenario:
      'Buyer uses $200 cash and $320 debt.',
    workedSteps: [
      { label: 'Total uses', text: '$520.' },
      { label: 'Cash source', text: '$200.' },
      { label: 'Debt source', text: '$320.' },
      { label: 'Balance', text: '$520 sources = $520 uses.' },
    ],
    takeaway:
      'Sources & Uses turns a transaction price into a fully funded deal structure.',
    numberCheck: {
      title: 'Total uses are $800 and the buyer contributes $250 cash. How much additional funding is required?',
      answer: 550,
      suffix: 'million',
      explanation: '$800 − $250 = $550.',
    },
    mcq: {
      title: 'What must always be true in a completed Sources & Uses schedule?',
      options: [
        'Total sources equal total uses',
        'Debt equals revenue',
        'Cash equals EBITDA',
        'Fees equal zero',
      ],
      correctIndex: 0,
      correctText: 'Every dollar required by the transaction must be funded by a source.',
      wrongText: 'A transaction cannot close with an unfunded gap.',
    },
  }),

  M({
    id: 'ma-valuation-vs-accretion',
    title: 'Valuation vs. Accretion',
    summary: 'Understand why an EPS-accretive deal is not automatically a good acquisition.',
    concepts: ['valuation', 'netIncome', 'share'],
    intro:
      'One of the most important M&A lessons is that accretion and value creation are not the same thing.',
    teachTitle: 'Accretion is an accounting-per-share outcome; value creation depends on price versus economic benefit.',
    paragraphs: [
      'A buyer with a high P / E ratio can sometimes issue expensive stock to buy a lower-P / E target and create EPS accretion mechanically.',
      'That does not prove the target is worth the premium paid.',
      'A deal creates value when the present value of synergies and strategic benefits exceeds the premium and transaction costs.',
      'Management should therefore evaluate strategic fit, valuation, return on investment, leverage, and integration risk alongside accretion.',
    ],
    callout:
      'Accretive ≠ value creating. Dilutive ≠ value destroying.',
    mcq: {
      title: 'Which statement is correct?',
      options: [
        'An accretive deal can still destroy value if the buyer overpays',
        'Every accretive deal creates value',
        'Every dilutive deal destroys value',
        'EPS determines enterprise value perfectly',
      ],
      correctIndex: 0,
      correctText: 'EPS mechanics do not measure the full economic cost and benefit of the acquisition.',
      wrongText: 'Separate accounting accretion from economic return.',
      reviewConcepts: ['valuation'],
    },
  }),

  M({
    id: 'ma-risks',
    title: 'Why Deals Fail',
    summary: 'Identify overpayment, integration, synergy, financing, and cultural risks.',
    concepts: ['risk', 'debt', 'valuation'],
    intro:
      'A transaction can look attractive in a model and still fail in execution.',
    teachTitle: 'The biggest deal risks often come from assumptions that do not survive reality.',
    paragraphs: [
      'Buyers can overpay because of competitive auctions or unrealistic growth expectations.',
      'Synergies may arrive late or never materialize.',
      'Integration can disrupt customers, employees, systems, and culture.',
      'Debt-funded deals can become dangerous if operating performance weakens.',
      'Regulatory remedies or closing delays can change the economics.',
    ],
    callout:
      'The model should not only show upside. Good analysis asks what breaks the deal thesis.',
    mcq: {
      title: 'Which is a real post-closing acquisition risk?',
      options: [
        'Integration problems prevent expected synergies from being realized',
        'Purchase price automatically refunds itself',
        'All debt becomes cash',
        'Target revenue is guaranteed',
      ],
      correctIndex: 0,
      correctText: 'Execution risk can destroy benefits that looked compelling before closing.',
      wrongText: 'Think about what can go wrong after ownership actually changes.',
      reviewConcepts: ['risk'],
    },
  }),

  M({
    id: 'ma-interview-walkthrough',
    title: 'M&A Interview Walkthrough',
    summary: 'Explain a deal from rationale through valuation, financing, accounting, and accretion.',
    concepts: ['valuation', 'cash', 'debt', 'share', 'goodwill'],
    intro:
      'A strong M&A answer connects business rationale to transaction mechanics rather than listing disconnected terms.',
    teachTitle: 'Walk from why the deal happens to what it does financially.',
    paragraphs: [
      'Start with the strategic rationale and target valuation.',
      'Determine offer price and consideration mix: cash, debt-funded cash, stock, or a combination.',
      'Model synergies, financing costs, foregone interest, purchase accounting, and new share issuance.',
      'Calculate pro forma earnings, leverage, and accretion / dilution.',
      'Then step back and assess whether the strategic and financial returns justify the purchase price and risk.',
    ],
    callout:
      'The model supports the decision; it is not the decision.',
    scenarioTitle: 'Interviewer asks: “Walk me through an acquisition.”',
    scenario:
      'Use the transaction sequence rather than jumping straight to EPS.',
    workedSteps: [
      { label: '1. Rationale', text: 'Why does the buyer want the target?' },
      { label: '2. Valuation', text: 'What is the target worth and what premium is paid?' },
      { label: '3. Financing', text: 'How is the purchase funded?' },
      { label: '4. Accounting', text: 'What goodwill, write-ups, and amortization are created?' },
      { label: '5. Pro forma results', text: 'How do synergies, financing, and shares affect EPS and leverage?' },
      { label: '6. Economic judgment', text: 'Does expected value creation justify the price and risk?' },
    ],
    takeaway:
      'M&A analysis combines strategy, valuation, financing, accounting, and execution.',
    written: {
      title: 'Why is EPS accretion not enough to decide whether an acquisition is attractive?',
      body: 'Explain what else matters economically.',
      placeholder: 'EPS accretion only tells you..., while a good deal also needs...',
      modelAnswer:
        'EPS accretion only shows the transaction’s effect on per-share accounting earnings. A good acquisition also requires a sensible purchase price, realistic synergies, acceptable leverage, strategic fit, and returns that exceed the risks and costs.',
      criteria: [
        { id: 'eps', label: 'recognize that accretion is only an EPS outcome', keywords: ['eps', 'accretion', 'earnings per share', 'accounting'] },
        { id: 'economics', label: 'identify broader deal economics such as price, synergies, returns, or risk', keywords: ['price', 'overpay', 'synergy', 'return', 'risk', 'leverage', 'strategic', 'value'] },
      ],
    },
    completeTitle: 'M&A complete.',
    completeBody:
      'You can now follow a deal from rationale through purchase accounting and accretion / dilution. Next comes LBO Fundamentals, where leverage, debt paydown, and exit value drive equity returns.',
  }),
]
