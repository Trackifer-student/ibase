export const interviewTopics = [
  {
    "id": "accounting",
    "title": "Accounting",
    "description": "Three statements, working capital, D&A, deferred revenue, and classic linkage questions.",
    "questions": [
      [
        "Walk me through the three financial statements and how they connect.",
        [
          "Net income links the income statement to the cash flow statement.",
          "Non-cash items and working-capital changes reconcile net income to cash.",
          "Ending cash from the cash flow statement appears on the balance sheet.",
          "Net income also affects retained earnings."
        ]
      ],
      [
        "If depreciation increases by $10, what happens to the three statements? Ignore taxes.",
        [
          "Income statement: EBIT and net income fall by $10.",
          "Cash flow statement: add back $10 depreciation, so cash is unchanged.",
          "Balance sheet: PP&E falls $10 and retained earnings falls $10."
        ]
      ],
      [
        "Why can a profitable company run out of cash?",
        [
          "Profit is accrual accounting, not cash.",
          "Receivables, inventory, CapEx, debt repayment, or other cash uses can exceed cash generated.",
          "Timing between revenue/expenses and cash matters."
        ]
      ],
      [
        "What happens when accounts receivable increases?",
        [
          "Revenue may already have been recognized.",
          "Cash has not yet been collected.",
          "The increase in AR is generally a use of cash in CFO."
        ]
      ],
      [
        "What happens when deferred revenue increases?",
        [
          "Cash is collected before all related revenue is earned.",
          "Cash rises and deferred revenue, a liability, rises.",
          "Revenue is recognized later as the company performs."
        ]
      ],
      [
        "Why is depreciation added back on the cash flow statement?",
        [
          "It reduced net income.",
          "It is non-cash in the current period.",
          "The original asset purchase cash outflow occurred separately as CapEx."
        ]
      ],
      [
        "What is working capital and why does it matter?",
        [
          "Focus on short-term operating assets and liabilities.",
          "Increases in operating assets generally use cash.",
          "Increases in operating liabilities generally provide cash."
        ]
      ],
      [
        "What is stock-based compensation and why is it added back in CFO?",
        [
          "It is compensation expense paid with equity awards.",
          "It reduces accounting earnings without equivalent current-period cash outflow.",
          "It can still dilute shareholders, so non-cash does not mean free."
        ]
      ]
    ]
  },
  {
    "id": "valuation",
    "title": "Valuation",
    "description": "Comps, precedents, enterprise value, equity value, and valuation judgment.",
    "questions": [
      [
        "What are the main ways to value a company?",
        [
          "Trading comparables.",
          "Precedent transactions.",
          "DCF.",
          "Other context methods can include premiums paid, 52-week range, or LBO depending on situation."
        ]
      ],
      [
        "How do trading comps work?",
        [
          "Select comparable public companies.",
          "Calculate relevant market multiples.",
          "Apply appropriate multiples to the target’s matching financial metrics.",
          "Use a range and judgment rather than one perfect point."
        ]
      ],
      [
        "Why are precedent transaction multiples often higher than trading multiples?",
        [
          "Acquisitions can include a control premium.",
          "Buyers may pay for synergies.",
          "Deal-specific competition and market conditions matter."
        ]
      ],
      [
        "What is the difference between enterprise value and equity value?",
        [
          "Equity value belongs to common shareholders.",
          "Enterprise value represents core operations available to all capital providers.",
          "Bridge with debt, cash, preferred stock, and NCI as appropriate."
        ]
      ],
      [
        "Why do you add debt and subtract cash when calculating enterprise value?",
        [
          "Debt is a claim an acquirer effectively assumes or repays.",
          "Cash acquired can offset purchase cost.",
          "The goal is to isolate value of operations independent of capital structure."
        ]
      ],
      [
        "When would you use EV/EBITDA instead of P/E?",
        [
          "EV/EBITDA pairs an enterprise-value numerator with a pre-interest operating metric.",
          "It is less affected by capital structure.",
          "P/E is an equity-value multiple paired with after-interest earnings."
        ]
      ],
      [
        "How would you value a private company?",
        [
          "Use public comps with judgment for liquidity/size differences.",
          "Use precedent transactions.",
          "Use DCF when forecasts are supportable.",
          "No observable public share price exists."
        ]
      ],
      [
        "Why is valuation usually presented as a range?",
        [
          "Methods depend on assumptions and market inputs.",
          "Reasonable analysts can disagree.",
          "A range communicates uncertainty and triangulates multiple methods."
        ]
      ]
    ]
  },
  {
    "id": "dcf",
    "title": "DCF",
    "description": "Free cash flow, WACC, terminal value, sensitivities, and the full walkthrough.",
    "questions": [
      [
        "Walk me through a DCF.",
        [
          "Forecast unlevered free cash flow.",
          "Discount projected cash flows using WACC.",
          "Calculate and discount terminal value.",
          "Sum to enterprise value.",
          "Bridge to equity value and divide by diluted shares if needed."
        ]
      ],
      [
        "What is unlevered free cash flow?",
        [
          "Cash flow from operations before financing decisions.",
          "Common formula: EBIT × (1-tax rate) + D&A − CapEx − increase in NWC.",
          "Available to both debt and equity holders."
        ]
      ],
      [
        "Why do you use WACC to discount unlevered FCF?",
        [
          "Unlevered FCF is available to all capital providers.",
          "WACC reflects blended required returns of debt and equity.",
          "Numerator and discount rate must be conceptually consistent."
        ]
      ],
      [
        "What are the two main ways to calculate terminal value?",
        [
          "Perpetuity growth method.",
          "Exit multiple method.",
          "Both should be checked for reasonableness."
        ]
      ],
      [
        "What happens to a DCF if WACC increases?",
        [
          "Present values fall.",
          "Terminal value usually falls.",
          "Implied enterprise value decreases, all else equal."
        ]
      ],
      [
        "What happens if perpetual growth increases?",
        [
          "Terminal value increases, all else equal.",
          "DCF value rises.",
          "Growth must remain economically sustainable and below WACC."
        ]
      ],
      [
        "Why can terminal value be a large percentage of DCF value?",
        [
          "Most businesses are assumed to operate beyond the explicit forecast.",
          "Many future cash flows sit after the projection period.",
          "That concentration makes terminal assumptions especially important."
        ]
      ],
      [
        "What is a sensitivity table in a DCF?",
        [
          "Shows valuation across ranges of key assumptions.",
          "Often WACC versus perpetual growth or exit multiple.",
          "Helps show how fragile or robust the valuation is."
        ]
      ]
    ]
  },
  {
    "id": "ma-lbo",
    "title": "M&A + LBO",
    "description": "Accretion/dilution, purchase accounting, deal funding, leverage, MOIC, and IRR.",
    "questions": [
      [
        "What makes a deal accretive or dilutive?",
        [
          "Compare buyer standalone EPS with pro forma EPS after the acquisition.",
          "Financing cost, target earnings, synergies, purchase accounting, and new shares all matter.",
          "Higher pro forma EPS means accretive; lower means dilutive."
        ]
      ],
      [
        "What are the main ways an acquisition can be financed?",
        [
          "Cash on hand.",
          "New debt.",
          "Buyer stock.",
          "A mix of sources."
        ]
      ],
      [
        "What creates goodwill in an acquisition?",
        [
          "Purchase consideration exceeds fair value of identifiable net assets acquired.",
          "Purchase-accounting adjustments affect the calculation.",
          "Goodwill is the residual."
        ]
      ],
      [
        "Why can a strategic buyer pay more than a financial buyer?",
        [
          "Strategic buyers may realize operating or revenue synergies.",
          "They may have lower financing costs or strategic reasons.",
          "A sponsor must underwrite a target return."
        ]
      ],
      [
        "What makes a good LBO candidate?",
        [
          "Stable and predictable cash flow.",
          "Manageable CapEx and working-capital needs.",
          "Defensible business and opportunities for improvement.",
          "Ability to support and repay debt."
        ]
      ],
      [
        "Walk me through a paper LBO.",
        [
          "Estimate entry enterprise value and sources & uses.",
          "Determine sponsor equity after debt financing.",
          "Forecast cash flow and debt paydown.",
          "Apply exit multiple to exit EBITDA.",
          "Calculate exit equity value, MOIC, and IRR."
        ]
      ],
      [
        "What are the main drivers of LBO returns?",
        [
          "Entry valuation.",
          "EBITDA growth and margin improvement.",
          "Debt paydown.",
          "Exit multiple.",
          "Holding period."
        ]
      ],
      [
        "What is the difference between MOIC and IRR?",
        [
          "MOIC measures total multiple of invested equity.",
          "IRR measures annualized return.",
          "IRR is especially sensitive to time."
        ]
      ]
    ]
  },
  {
    "id": "behavioral",
    "title": "Behavioral",
    "description": "Story, Why IB, teamwork, leadership, failure, conflict, and bank-specific fit.",
    "questions": [
      [
        "Tell me about yourself.",
        [
          "Present situation.",
          "Relevant experiences that explain your interest.",
          "Why banking now.",
          "Keep it concise and connected."
        ]
      ],
      [
        "Why investment banking?",
        [
          "Reference the actual work: transactions, analysis, steep learning, client exposure.",
          "Connect to your own experiences.",
          "Avoid prestige, money, or exits as the core reason."
        ]
      ],
      [
        "Why this bank?",
        [
          "Use specific people, transactions, group strengths, culture, or platform evidence.",
          "Show you researched the firm.",
          "Connect those facts to what you want."
        ]
      ],
      [
        "Tell me about a time you led a team.",
        [
          "Use a specific situation.",
          "Explain your action, not just your title.",
          "Show how you influenced the outcome.",
          "Give the result and learning."
        ]
      ],
      [
        "Tell me about a failure.",
        [
          "Own the mistake.",
          "Explain the impact without excuses.",
          "Show what you changed.",
          "Prove the lesson affected later behavior."
        ]
      ],
      [
        "Tell me about a conflict.",
        [
          "Describe the disagreement fairly.",
          "Show direct communication and listening.",
          "Focus on resolving the issue for the team.",
          "Avoid making the other person the villain."
        ]
      ],
      [
        "What is your biggest weakness?",
        [
          "Choose a real but manageable weakness.",
          "Avoid a disguised strength.",
          "Explain specific steps you are taking.",
          "Show progress, not perfection."
        ]
      ],
      [
        "Why should we hire you?",
        [
          "Tie strengths to evidence.",
          "Emphasize learning ability, work ethic, teamwork, and reliability.",
          "Keep claims specific and credible."
        ]
      ]
    ]
  },
  {
    "id": "markets",
    "title": "Markets + Deals",
    "description": "Rates, equity and credit markets, current transactions, and building a market view.",
    "questions": [
      [
        "How do higher interest rates affect companies?",
        [
          "Borrowing becomes more expensive.",
          "Valuations can fall as discount rates rise.",
          "Financing-dependent transactions can become harder.",
          "Impact varies by business and balance sheet."
        ]
      ],
      [
        "What is the yield curve?",
        [
          "Shows yields across debt maturities.",
          "Shape reflects market expectations and risk premiums.",
          "Bankers watch it because it affects financing and economic expectations."
        ]
      ],
      [
        "What is the difference between investment-grade and high-yield debt?",
        [
          "Investment-grade issuers have stronger credit quality on average.",
          "High-yield carries more credit risk.",
          "Investors require higher yields for that added risk."
        ]
      ],
      [
        "Why does market volatility matter for an IPO?",
        [
          "Makes valuation and pricing less predictable.",
          "Can reduce investor risk appetite.",
          "Issuers may delay if execution risk becomes too high."
        ]
      ],
      [
        "How would you discuss a recent deal in an interview?",
        [
          "Explain companies and transaction.",
          "Give strategic rationale.",
          "Discuss valuation and financing if known.",
          "Offer a thoughtful view on why the deal makes or does not make sense."
        ]
      ],
      [
        "What makes M&A activity rise or fall?",
        [
          "CEO confidence.",
          "Valuation gaps.",
          "Financing availability and rates.",
          "Regulation and industry pressure.",
          "Market volatility."
        ]
      ],
      [
        "How does inflation affect valuation?",
        [
          "Can raise costs and rates.",
          "May affect pricing power and margins.",
          "Higher discount rates can reduce present values.",
          "Effects vary by company."
        ]
      ],
      [
        "What makes a good market view?",
        [
          "Start from observable data.",
          "Explain the driver.",
          "Connect it to client or valuation implications.",
          "Acknowledge uncertainty rather than pretending certainty."
        ]
      ]
    ]
  }
]

export const allInterviewQuestions = interviewTopics.flatMap((topic) =>
  topic.questions.map(([question, keyPoints], index) => ({
    id: `${topic.id}-${index + 1}`,
    topicId: topic.id,
    topic: topic.title,
    question,
    keyPoints,
  })),
)
