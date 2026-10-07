export const aiBankingTopics = [
  {
    id: 'company-research',
    number: '01',
    title: 'Company Research',
    summary:
      'Use AI to organize public information faster without outsourcing judgment.',
    workflow: [
      'Start with authoritative sources such as filings, investor presentations, earnings materials, and the company website.',
      'Give AI a narrow task: summarize business segments, extract stated growth drivers, or compare management commentary across periods.',
      'Ask for the source location or page reference when the tool supports it.',
      'Verify every material fact before it enters a model or client-facing document.',
    ],
    examplePrompt:
      'Using only the supplied 10-K excerpts, summarize the company’s business segments, revenue mix, and the three risks management emphasizes most. Quote no more than one short phrase per section and point me to the relevant source section.',
    watchFor:
      'AI can confidently merge old information with current information or invent detail that sounds plausible.',
  },
  {
    id: 'industry-research',
    number: '02',
    title: 'Industry Research',
    summary:
      'Turn a broad market into a structured research plan.',
    workflow: [
      'Define the industry narrowly enough that the analysis is useful.',
      'Ask AI to create a research framework: market size, growth, customers, competitors, regulation, pricing, and key operating metrics.',
      'Use primary sources, industry bodies, company filings, and reputable research to fill the framework.',
      'Separate sourced facts from interpretation and assumptions.',
    ],
    examplePrompt:
      'Build a research checklist for the U.S. vertical SaaS market focused on market structure, growth drivers, customer economics, competitive intensity, and valuation-relevant KPIs. Do not provide unsourced market-size numbers.',
    watchFor:
      'Broad industry prompts often produce generic language and unsupported market-size estimates.',
  },
  {
    id: 'sec-filings',
    number: '03',
    title: 'SEC Filings',
    summary:
      'Use AI as a filing navigator, not a substitute for reading the source.',
    workflow: [
      'Use AI to locate likely sections such as MD&A, risk factors, debt footnotes, segment disclosures, and stock-compensation notes.',
      'Ask targeted questions that can be answered from the filing text you provide.',
      'Check the exact table, footnote, and period before using a number.',
      'For important adjustments, read the surrounding disclosure rather than extracting one sentence.',
    ],
    examplePrompt:
      'From this debt footnote, list each borrowing instrument, principal balance, stated rate, maturity, and whether it is secured. Flag anything ambiguous instead of guessing.',
    watchFor:
      'A single filing can contain several similar numbers with different dates, definitions, and scopes.',
  },
  {
    id: 'excel-assistance',
    number: '04',
    title: 'Excel Assistance',
    summary:
      'Use AI to explain formulas and suggest approaches while keeping the workbook under your control.',
    workflow: [
      'Describe the data layout, desired output, and Excel version.',
      'Ask for the simplest auditable formula first.',
      'Test the formula on a small known example before copying it through the model.',
      'Understand every formula you keep; do not paste logic you could not explain to a reviewer.',
    ],
    examplePrompt:
      'I have dates in column A, customer names in B, and revenue in C. I need monthly revenue for one customer selected in F2. Give me a simple auditable Excel formula and explain each range.',
    watchFor:
      'AI can return formulas that are syntactically valid but wrong for your specific ranges or version of Excel.',
  },
  {
    id: 'model-checking',
    number: '05',
    title: 'Model Checking',
    summary:
      'Use AI to generate a review checklist and challenge logic, not to certify the model.',
    workflow: [
      'Describe the model type and the key schedules it contains.',
      'Ask for likely failure points: signs, units, circularity, broken links, inconsistent periods, and balance checks.',
      'Use deterministic checks inside Excel to test the relationships.',
      'Review the economics yourself before accepting any suggested fix.',
    ],
    examplePrompt:
      'Give me a 20-point review checklist for a three-statement model with a debt schedule and DCF. Prioritize errors that can produce plausible-looking but wrong valuation outputs.',
    watchFor:
      'AI cannot reliably validate a workbook it has not fully inspected, and even full inspection does not remove the need for human review.',
  },
  {
    id: 'presentation-workflows',
    number: '06',
    title: 'Presentation Workflows',
    summary:
      'Use AI to improve structure and editing without letting it invent client facts.',
    workflow: [
      'Start with the decision the slide or deck must support.',
      'Use AI to propose an outline, shorten text, or generate alternative headlines.',
      'Provide only information approved for the task and remove confidential details when required.',
      'Check every factual statement, number, source, and implication before using it.',
    ],
    examplePrompt:
      'Rewrite these four bullets into a concise executive-summary slide. Preserve every fact and number exactly, keep the tone neutral, and do not add any new claims.',
    watchFor:
      'Fluent rewriting can quietly change meaning or introduce unsupported claims.',
  },
  {
    id: 'prompting',
    number: '07',
    title: 'Prompting for Finance Work',
    summary:
      'Get better output by specifying task, source boundary, format, and verification requirements.',
    workflow: [
      'State the goal and who the output is for.',
      'Define the information AI may use and what it must not assume.',
      'Specify the output structure and level of detail.',
      'Tell it to flag uncertainty, missing data, and unsupported conclusions.',
    ],
    examplePrompt:
      'Act as a skeptical analyst. Using only the data below, identify the three biggest drivers of EBITDA margin change. Return a table with driver, evidence, estimated direction, and any missing information. Do not infer numbers that are not provided.',
    watchFor:
      'Vague prompts encourage vague answers and hidden assumptions.',
  },
  {
    id: 'hallucinations',
    number: '08',
    title: 'Hallucinations & Verification',
    summary:
      'Assume confidence is not evidence.',
    workflow: [
      'Separate claims into sourced fact, calculation, and interpretation.',
      'Verify sourced facts against the original document.',
      'Recalculate important math independently.',
      'Treat citations, quotes, transaction details, and current market data as high-verification items.',
    ],
    examplePrompt:
      'For each statement in this draft, label it as sourced fact, calculation, inference, or unsupported. For sourced facts, show which supplied source supports it. If no source supports it, say unsupported.',
    watchFor:
      'AI can invent citations, transaction details, quotes, financial figures, and explanations with convincing confidence.',
  },
  {
    id: 'confidentiality',
    number: '09',
    title: 'Confidentiality',
    summary:
      'Know what should never be pasted into an unapproved AI tool.',
    workflow: [
      'Follow your employer’s AI, information-security, and client-confidentiality policies.',
      'Do not upload material non-public information, client data, passwords, personal data, or deal documents into tools that are not explicitly approved.',
      'Use sanitized examples when learning a workflow.',
      'When uncertain, stop and ask the appropriate compliance, security, or team contact.',
    ],
    examplePrompt:
      'Using this fictional and sanitized example, explain how I could structure a diligence request tracker. Do not ask me to provide real client names, deal terms, or confidential documents.',
    watchFor:
      'The productivity benefit of a tool never overrides confidentiality, legal duties, or firm policy.',
  },
]
