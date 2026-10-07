export const aiBankingLessons = [
  {
    "id": "company-research",
    "title": "Company Research",
    "summary": "Use AI to accelerate the first pass without outsourcing judgment.",
    "sections": [
      [
        "What AI is good at",
        "Summarizing a business model, organizing questions, comparing segments, and turning scattered notes into a research outline."
      ],
      [
        "What it is bad at",
        "Guaranteeing factual accuracy, knowing the latest undisclosed information, or replacing primary-source reading."
      ],
      [
        "Workflow",
        "Start with the company’s own filings and investor materials. Use AI to organize the information, then verify every material fact against the source."
      ],
      [
        "Example prompt",
        "Using only the information I provide, summarize this company’s business model, revenue drivers, major costs, risks, and three questions an investment banker should investigate next. Separate facts from inferences."
      ]
    ],
    "checklist": [
      "Use primary sources first",
      "Ask AI to separate facts from inference",
      "Verify material numbers",
      "Keep a source trail",
      "Do not paste confidential client information"
    ]
  },
  {
    "id": "industry-research",
    "title": "Industry Research",
    "summary": "Turn a broad sector into a structured map of drivers, competitors, and questions.",
    "sections": [
      [
        "Start with structure",
        "Define the value chain, customer groups, suppliers, competitors, regulation, and major demand drivers."
      ],
      [
        "Use AI for synthesis",
        "AI can cluster themes across notes and help generate a market map or issue tree."
      ],
      [
        "Verify market claims",
        "Market sizes, growth rates, and share data should be tied back to reputable primary or clearly identified secondary sources."
      ],
      [
        "Example prompt",
        "Organize these industry notes into: value chain, key competitors, demand drivers, cost drivers, regulation, risks, and open questions. Do not add facts that are not in my notes."
      ]
    ],
    "checklist": [
      "Define the industry before researching",
      "Separate market facts from opinions",
      "Trace statistics to sources",
      "Use AI to find questions, not invent answers"
    ]
  },
  {
    "id": "sec-filings",
    "title": "SEC Filings",
    "summary": "Use AI to navigate long filings while keeping the filing itself as the source of truth.",
    "sections": [
      [
        "Best uses",
        "Locating sections, summarizing risk-factor themes, comparing year-over-year language, and creating a checklist of important disclosures."
      ],
      [
        "Critical limitation",
        "AI can miss qualifiers, footnotes, accounting definitions, or changes in wording that matter financially."
      ],
      [
        "Workflow",
        "Search the filing directly, extract the relevant section, ask AI to explain it, then reread the original text before using the conclusion."
      ],
      [
        "Example prompt",
        "Explain this filing excerpt in plain English. List the accounting or business implications, quote no more than necessary, and identify anything that should be checked in another footnote or section."
      ]
    ],
    "checklist": [
      "Read the original filing",
      "Check footnotes",
      "Confirm dates and units",
      "Do not trust summaries for exact legal wording"
    ]
  },
  {
    "id": "excel-assistance",
    "title": "Excel Assistance",
    "summary": "Use AI as a formula tutor and debugging partner, not as an invisible model builder.",
    "sections": [
      [
        "Strong use cases",
        "Explaining formulas, suggesting functions, debugging logic, and translating a modeling goal into a step-by-step Excel approach."
      ],
      [
        "Weak use cases",
        "Blindly pasting generated formulas into a live model or trusting references without checking them."
      ],
      [
        "Workflow",
        "Describe the desired logic and cell structure, get a proposed formula, then test it on simple cases before using it broadly."
      ],
      [
        "Example prompt",
        "I need an Excel formula that returns the latest nonblank value across B2:F2. Explain the formula, how it behaves with blanks, and one simple test case I can use to verify it."
      ]
    ],
    "checklist": [
      "Understand every formula before using it",
      "Test edge cases",
      "Check cell references",
      "Never hide an unexplained error with IFERROR"
    ]
  },
  {
    "id": "model-checking",
    "title": "Model Checking",
    "summary": "Use AI to challenge assumptions and create review checklists while you keep responsibility for the model.",
    "sections": [
      [
        "What it can do",
        "Generate audit questions, identify common linkage risks, and help design independent reasonableness checks."
      ],
      [
        "What it cannot do safely",
        "Certify that a model is correct without complete context, live formulas, and reliable inputs."
      ],
      [
        "Workflow",
        "Explain the model architecture and key outputs, ask for a review checklist, then perform the checks yourself in Excel."
      ],
      [
        "Example prompt",
        "Create a review checklist for a three-statement model with a debt schedule and DCF. Focus on balance checks, sign conventions, cash reconciliation, debt roll-forward, circularity, and valuation consistency."
      ]
    ],
    "checklist": [
      "Use independent checks",
      "Recalculate important outputs",
      "Inspect signs and units",
      "Confirm links across schedules",
      "Own the final answer"
    ]
  },
  {
    "id": "presentation-workflows",
    "title": "Presentation Workflows",
    "summary": "Use AI to improve structure and wording without letting it invent the story.",
    "sections": [
      [
        "Good uses",
        "Brainstorming slide structure, tightening titles, rewriting dense bullets, and creating proofreading checklists."
      ],
      [
        "Bad uses",
        "Generating unsupported claims, fake market facts, or generic consultant language that is not tied to the analysis."
      ],
      [
        "Workflow",
        "Build the analysis first, define the slide takeaway, then use AI to test whether the wording communicates that takeaway clearly."
      ],
      [
        "Example prompt",
        "Rewrite these three slide-title options so each communicates one specific takeaway in under 12 words. Do not add claims that are not already supported by the data I provide."
      ]
    ],
    "checklist": [
      "Analysis first, wording second",
      "Keep titles evidence-based",
      "Verify every number",
      "Remove generic filler",
      "Match the client’s tone"
    ]
  },
  {
    "id": "prompting",
    "title": "Prompting for Finance Work",
    "summary": "Good prompts define the task, evidence, output, and verification standard.",
    "sections": [
      [
        "Context",
        "State the role, company, time period, and purpose only when those facts matter."
      ],
      [
        "Evidence rules",
        "Tell the model what sources or supplied text it may use and whether it may infer beyond them."
      ],
      [
        "Output format",
        "Specify the structure you need: table, checklist, formula explanation, issue tree, or concise bullets."
      ],
      [
        "Verification",
        "Ask it to flag uncertainty, assumptions, missing information, and items requiring source confirmation."
      ]
    ],
    "checklist": [
      "Give the actual objective",
      "Provide definitions and units",
      "Specify source boundaries",
      "Ask for assumptions",
      "Require uncertainty to be flagged"
    ]
  },
  {
    "id": "hallucinations",
    "title": "Hallucinations & Verification",
    "summary": "The fastest answer is worthless if the number, quote, or source is invented.",
    "sections": [
      [
        "What hallucination means",
        "A model can produce a confident statement that is false, unsupported, outdated, or sourced incorrectly."
      ],
      [
        "High-risk items",
        "Exact financial figures, transaction terms, legal language, dates, citations, and niche company facts deserve direct verification."
      ],
      [
        "Verification ladder",
        "Check primary documents first, then reputable secondary sources, then calculations and internal consistency."
      ],
      [
        "Practical rule",
        "If a number would appear in a model, client deck, email to a senior, or interview answer, know where it came from."
      ]
    ],
    "checklist": [
      "Verify exact numbers",
      "Open cited sources",
      "Check the date",
      "Recalculate arithmetic",
      "Never confuse confidence with accuracy"
    ]
  },
  {
    "id": "confidentiality",
    "title": "Confidentiality",
    "summary": "Never trade convenience for client, firm, or personal information security.",
    "sections": [
      [
        "Core rule",
        "Do not paste confidential, non-public, personally identifying, or restricted firm information into an unapproved AI system."
      ],
      [
        "Examples",
        "Live deal names, client financials, unreleased earnings, internal models, employee data, and credentials can all be sensitive."
      ],
      [
        "Approved tools",
        "Use only systems and workflows allowed by your employer or institution, with the permissions and data-handling rules they specify."
      ],
      [
        "When unsure",
        "Stop and ask the appropriate manager, compliance team, or policy owner before sharing the information."
      ]
    ],
    "checklist": [
      "Assume live-deal data is confidential",
      "Follow firm policy",
      "Remove sensitive identifiers",
      "Never paste credentials",
      "Ask before sharing uncertain data"
    ]
  }
]
