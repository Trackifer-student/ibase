const moduleContext = {
  recruiting:
    'This topic matters because recruiting rewards preparation, clarity, and evidence that you understand the job.',
  analyst:
    'This topic matters because reliable execution is what makes a junior banker useful to the team.',
}

const toId = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

const makeLesson = ({ moduleId, index, title, summary, context, options, correctIndex }) => ({
  id: `${moduleId}-${String(index + 1).padStart(2, '0')}-${toId(title)}`,
  title,
  summary,
  steps: [
    {
      type: 'intro',
      eyebrow: context === 'recruiting' ? 'RECRUITING PLAYBOOK' : 'ANALYST READY',
      title,
      body: summary,
      noteTitle: 'Why this matters',
      note: moduleContext[context],
    },
    {
      type: 'teach',
      eyebrow: 'THE CORE IDEA',
      title: 'Learn the principle, then make it usable.',
      paragraphs: [
        summary,
        context === 'recruiting'
          ? 'Recruiting goes better when you can explain the reasoning behind your choices rather than copying a script from someone else.'
          : 'On the job, the goal is not just knowing the rule. It is applying the rule consistently under time pressure.',
        'Build a repeatable process you can use without needing to reinvent your approach every time.',
      ],
      calloutTitle: 'IBase rule',
      callout:
        context === 'recruiting'
          ? 'Sound prepared, not manufactured. Use structure, but keep the answer specific to your own experience.'
          : 'Reliability beats occasional brilliance. Make the correct process easy to repeat.',
    },
    {
      type: 'worked',
      eyebrow: 'APPLY IT',
      title: `Put ${title} into a real situation.`,
      scenario:
        context === 'recruiting'
          ? 'Imagine you are preparing for a live recruiting interaction where this decision matters.'
          : 'Imagine you are an analyst with a live deadline and a senior banker depending on the output.',
      workedSteps: [
        {
          label: 'Clarify the objective',
          text: `Define what success looks like for ${title.toLowerCase()} before you act.`,
        },
        {
          label: 'Use the principle',
          text: summary,
        },
        {
          label: 'Check the result',
          text:
            context === 'recruiting'
              ? 'Ask whether the response sounds specific, credible, concise, and natural.'
              : 'Check accuracy, clarity, traceability, and whether another team member can follow the work.',
        },
      ],
      takeaway: summary,
    },
    {
      type: 'mcq',
      eyebrow: 'CHECK YOUR UNDERSTANDING',
      title: `Which statement best captures ${title}?`,
      options,
      correctIndex,
      correctTitle: 'Exactly.',
      correctText: summary,
      wrongTitle: 'Go back to the principle.',
      wrongText:
        'The useful answer is the one that gives you a repeatable process and explains why it works.',
    },
    {
      type: 'complete',
      title: `${title} locked in.`,
      body:
        'Keep moving. The module quiz will test whether you can recall the idea without the teaching notes.',
      takeaway: summary,
    },
  ],
})

const makeModule = ([id, number, title, subtitle, description, context, topics]) => ({
  id,
  number,
  title,
  subtitle,
  description,
  lessons: topics.map(([lessonTitle, summary], index) => {
    const distractors = [1, 2, 3].map(
      (offset) => topics[(index + offset) % topics.length][1],
    )
    const correctIndex = index % 4
    const options = [...distractors]
    options.splice(correctIndex, 0, summary)

    return makeLesson({
      moduleId: id,
      index,
      title: lessonTitle,
      summary,
      context,
      options,
      correctIndex,
    })
  }),
})

export const careerAdvancedModules = [
  [
    "recruiting-process",
    "12",
    "IB Recruiting",
    "Know the process before it starts moving fast.",
    "Learn timelines, applications, HireVues, Superdays, offers, and how to prepare before recruiting accelerates.",
    "recruiting",
    [
      [
        "How IB Recruiting Works",
        "Investment-banking recruiting moves through networking, applications, online assessments or HireVues, interviews, and Superdays."
      ],
      [
        "Recruiting Timeline",
        "Timelines can begin very early, so students should prepare technicals, stories, and relationships before applications formally open."
      ],
      [
        "Types of Banks",
        "Your recruiting strategy should include a mix of bulge brackets, elite boutiques, middle-market banks, and relevant industry boutiques."
      ],
      [
        "Applications",
        "Applications matter, but relationships and preparation often determine whether your resume receives serious attention."
      ],
      [
        "HireVues",
        "HireVues test concise communication, motivation, and basic technical readiness without live interviewer follow-up."
      ],
      [
        "First-Round Interviews",
        "First rounds usually combine behavioral questions with technical checks and determine whether you advance to final rounds."
      ],
      [
        "Superdays",
        "Superdays involve several back-to-back interviews and test consistency across technicals, behavioral answers, and fit."
      ],
      [
        "Offers & Exploding Deadlines",
        "Offers can come with short decision windows, so know your priorities and ongoing processes before the call arrives."
      ],
      [
        "Choosing a Bank",
        "Evaluate group strength, deal flow, culture, training, location, exit opportunities, and people rather than relying only on brand."
      ],
      [
        "Sophomore & Early Programs",
        "Early-insight and diversity programs can accelerate recruiting and provide useful exposure before junior-year internship processes."
      ],
      [
        "Recruiting Preparation Plan",
        "A strong plan combines finance learning, interview practice, networking, resume work, and market awareness on a repeatable weekly schedule."
      ]
    ]
  ],
  [
    "networking",
    "13",
    "Networking",
    "Build real relationships without sounding transactional.",
    "Learn outreach, coffee chats, follow-ups, relationship maintenance, and the mistakes that hurt response rates.",
    "recruiting",
    [
      [
        "Why Networking Matters",
        "Networking helps you learn about firms, build advocates, and increase the chance your application is noticed."
      ],
      [
        "Finding the Right People",
        "Start with alumni, shared affiliations, relevant groups, and junior bankers who can speak candidly about the role."
      ],
      [
        "Cold Email Structure",
        "A strong cold email is short, specific, respectful, and makes an easy request for a brief conversation."
      ],
      [
        "Subject Lines",
        "Good subject lines establish a real connection or clear reason for outreach without sounding promotional."
      ],
      [
        "Coffee Chats",
        "Coffee chats should feel like informed conversations, not interrogations or disguised requests for referrals."
      ],
      [
        "Questions to Ask Bankers",
        "Ask about the person’s experience, group, deals, recruiting advice, and perspective rather than questions easily answered online."
      ],
      [
        "Your Introduction",
        "A concise introduction should explain who you are, what you are exploring, and why you reached out to that person."
      ],
      [
        "Following Up",
        "Follow up politely after several business days and stop after a reasonable number of attempts if there is no response."
      ],
      [
        "Thank-You Notes",
        "A short personalized thank-you reinforces the relationship and should reference something specific from the conversation."
      ],
      [
        "Staying in Touch",
        "Useful relationships are maintained through occasional genuine updates, not constant requests."
      ],
      [
        "Asking for Help",
        "Earn the right to ask for recruiting help by being prepared, respectful, and specific about what would be useful."
      ],
      [
        "Networking Mistakes",
        "Common mistakes include mass-email language, asking for referrals immediately, poor preparation, and treating people transactionally."
      ]
    ]
  ],
  [
    "resume-story",
    "14",
    "Resume & Story",
    "Make your experience make sense.",
    "Build a banking resume, your story, Why IB, bank-specific answers, and a reusable behavioral story bank.",
    "recruiting",
    [
      [
        "IB Resume Structure",
        "An IB resume should be concise, achievement-focused, easy to scan, and organized around education, experience, leadership, and skills."
      ],
      [
        "Writing Strong Bullets",
        "Strong bullets use action, context, and measurable impact rather than listing responsibilities."
      ],
      [
        "Quantifying Impact",
        "Numbers make scope and results concrete when they are accurate and genuinely informative."
      ],
      [
        "Translating Non-Finance Experience",
        "Athletics, restaurants, clubs, research, and other roles can demonstrate leadership, pressure, teamwork, and analytical ability when framed well."
      ],
      [
        "Finance Experience Without an Internship",
        "Projects, student funds, search funds, research, and self-directed modeling can build credible evidence of interest."
      ],
      [
        "Walk Me Through Your Resume",
        "Your resume walkthrough should tell a selective story rather than reading every line chronologically."
      ],
      [
        "Tell Me About Yourself",
        "A strong answer moves from present to relevant past to why banking now, usually in roughly one to two minutes."
      ],
      [
        "Why Investment Banking",
        "A credible Why IB answer connects the work itself, your experiences, and what you want to learn rather than prestige or exits."
      ],
      [
        "Why This Bank",
        "A strong bank-specific answer uses concrete evidence from people, group strengths, transactions, or culture."
      ],
      [
        "Why This Group",
        "Show that you understand the group’s sector or product and can explain why its work fits your interests."
      ],
      [
        "Strengths",
        "Choose strengths that are supported by evidence and relevant to demanding team-based analytical work."
      ],
      [
        "Weaknesses",
        "Use a real but manageable weakness, explain what you are doing about it, and avoid disguised strengths."
      ],
      [
        "Leadership Story",
        "A leadership story should show how you influenced people or outcomes, not merely that you held a title."
      ],
      [
        "Teamwork Story",
        "A teamwork story should show collaboration, conflict management, reliability, and a concrete result."
      ],
      [
        "Failure Story",
        "A good failure story takes ownership, explains what changed, and demonstrates learning without creating a major judgment concern."
      ],
      [
        "Conflict Story",
        "Conflict answers should show maturity, direct communication, and focus on the team outcome rather than blaming someone else."
      ],
      [
        "Ethical Judgment",
        "Ethical questions reward honesty, escalation when appropriate, and protecting clients and the firm over short-term convenience."
      ],
      [
        "Story Bank",
        "Build a reusable set of experiences that can answer leadership, teamwork, failure, conflict, initiative, and pressure questions."
      ],
      [
        "STAR Framework",
        "STAR keeps behavioral answers structured through situation, task, action, and result without making them robotic."
      ],
      [
        "Behavioral Interview Polish",
        "The best behavioral answers are concise, specific, conversational, and practiced enough to be clear without sounding memorized."
      ]
    ]
  ],
  [
    "excel",
    "15",
    "Excel for Banking",
    "Build speed without sacrificing control.",
    "Learn the formulas, conventions, shortcuts, model checks, and workflow habits that make Excel reliable.",
    "analyst",
    [
      [
        "Excel Setup for Bankers",
        "Banking Excel work prioritizes keyboard efficiency, consistent formatting, auditability, and clean model structure."
      ],
      [
        "Navigation Shortcuts",
        "Fast navigation reduces mouse dependence and helps you move through large models without losing context."
      ],
      [
        "Selection & Editing",
        "Selection, fill, copy, paste-special, and editing shortcuts are foundational to speed."
      ],
      [
        "Formatting Conventions",
        "Consistent number formats, units, dates, colors, and labels make models easier to review and less error-prone."
      ],
      [
        "Cell References",
        "Relative, absolute, and mixed references control how formulas behave when copied across a model."
      ],
      [
        "Core Formulas",
        "SUM, AVERAGE, MIN, MAX, IF, and related functions support a large share of day-to-day model logic."
      ],
      [
        "Lookup Functions",
        "XLOOKUP, INDEX/MATCH, and similar functions connect schedules and datasets when inputs are stored elsewhere."
      ],
      [
        "Date Functions",
        "DATE, YEAR, MONTH, EOMONTH, and date arithmetic help build timelines and period calculations."
      ],
      [
        "Error Handling",
        "IFERROR can improve presentation, but real model errors should be understood rather than hidden blindly."
      ],
      [
        "Sensitivity Tables",
        "Data tables show how model outputs change when one or two key assumptions vary."
      ],
      [
        "Model Checks",
        "Balance checks, source checks, and reasonableness tests help catch errors before a model reaches a client."
      ],
      [
        "Hardcodes vs. Formulas",
        "Separating inputs from formulas and applying consistent conventions makes models easier to audit."
      ],
      [
        "Linking Across Tabs",
        "Clear links between assumptions, schedules, statements, and outputs make a model modular and traceable."
      ],
      [
        "Speed & Workflow",
        "Banking speed comes from repeatable processes, keyboard habits, and reducing unnecessary rework."
      ],
      [
        "Excel Review Checklist",
        "Before sending, check signs, units, formulas, links, formatting, sources, assumptions, and whether outputs make economic sense."
      ]
    ]
  ],
  [
    "modeling",
    "16",
    "Financial Modeling",
    "Turn concepts into an integrated model.",
    "Build historicals, operating forecasts, schedules, three-statement models, scenarios, and model checks.",
    "analyst",
    [
      [
        "Model Architecture",
        "A good financial model separates assumptions, calculations, statements, schedules, and outputs so another person can follow the logic."
      ],
      [
        "Historical Financials",
        "Historical financials should be sourced accurately, normalized where appropriate, and tied to reported statements."
      ],
      [
        "Revenue Build",
        "Revenue forecasts are stronger when driven by units, price, customers, capacity, or other operating drivers."
      ],
      [
        "Expense Build",
        "Expense forecasts should reflect fixed versus variable behavior, margins, headcount, and operating assumptions."
      ],
      [
        "Depreciation Schedule",
        "A depreciation schedule links beginning PP&E, CapEx, asset lives, depreciation expense, and ending PP&E."
      ],
      [
        "Working Capital Schedule",
        "Working-capital schedules forecast receivables, inventory, payables, and other operating balances using turnover or days assumptions."
      ],
      [
        "Debt Schedule",
        "A debt schedule tracks beginning balances, borrowing, repayment, interest, maturity, and ending balances."
      ],
      [
        "Interest Schedule",
        "Interest expense should connect to debt balances and rates, with careful treatment of average balances and circularity."
      ],
      [
        "Three-Statement Model",
        "A three-statement model integrates the income statement, balance sheet, and cash flow statement so changes flow consistently across all three."
      ],
      [
        "Cash Sweep & Revolver",
        "A revolver can plug minimum cash needs while excess cash can be used to repay debt under a cash-sweep mechanism."
      ],
      [
        "Circular References",
        "Circularity occurs when an output feeds back into an input, such as debt affecting interest and interest affecting cash available for debt repayment."
      ],
      [
        "Scenario Analysis",
        "Base, upside, and downside cases help test how a model responds to different operating assumptions."
      ],
      [
        "Model Error Checks",
        "Checks should test statement balance, cash flow reconciliation, debt roll-forwards, and other internal identities."
      ],
      [
        "Model Outputs",
        "Outputs should highlight the decisions users care about, not force senior reviewers to hunt through calculation tabs."
      ],
      [
        "Modeling Discipline",
        "Reliable modeling means transparent assumptions, consistent formulas, clear sources, and independent reasonableness checks."
      ]
    ]
  ],
  [
    "powerpoint",
    "17",
    "PowerPoint & Pitchbooks",
    "Communicate analysis clearly.",
    "Learn slide structure, charts, tables, valuation pages, profiles, sourcing, and proofreading.",
    "analyst",
    [
      [
        "Why PowerPoint Matters",
        "Bankers use presentations to communicate analysis, recommendations, process updates, and transaction positioning to clients."
      ],
      [
        "Slide Structure",
        "A strong slide has a clear message, a logical hierarchy, and only the information needed to support that message."
      ],
      [
        "Titles That Say Something",
        "Good slide titles communicate the takeaway rather than simply naming the topic."
      ],
      [
        "Alignment & Spacing",
        "Consistent alignment and spacing make a deck easier to read and signal attention to detail."
      ],
      [
        "Fonts & Hierarchy",
        "Font size, weight, and placement should guide the reader from message to evidence without visual clutter."
      ],
      [
        "Tables",
        "Tables should use consistent units, decimals, labels, and emphasis so comparisons are immediate."
      ],
      [
        "Charts",
        "Charts should make the intended relationship obvious and avoid unnecessary decoration."
      ],
      [
        "Valuation Pages",
        "Valuation pages combine methods, assumptions, ranges, and clear sourcing to support a defensible conclusion."
      ],
      [
        "Company Profiles",
        "Company profiles summarize business description, key metrics, ownership, management, and recent developments efficiently."
      ],
      [
        "Process Slides",
        "Process and timeline slides clarify responsibilities, milestones, and next steps on live assignments."
      ],
      [
        "Footnotes & Sources",
        "Sources and footnotes make analysis traceable and protect credibility when data definitions differ."
      ],
      [
        "Proofreading",
        "Proofreading should include numbers, grammar, dates, labels, consistency, and whether the slide’s message matches the data."
      ],
      [
        "Pitchbook Review Checklist",
        "Before sending a deck, test every page for message clarity, source accuracy, formatting consistency, and client-readiness."
      ]
    ]
  ],
  [
    "analyst-work",
    "18",
    "Working Like an Analyst",
    "Become the person the team trusts.",
    "Learn execution habits around instructions, checking, sourcing, version control, prioritization, communication, and ownership.",
    "analyst",
    [
      [
        "Attention to Detail",
        "Attention to detail means consistently catching errors before they reach someone else, not simply caring about quality in theory."
      ],
      [
        "Taking Instructions",
        "Repeat back key requirements, clarify ambiguities early, and capture deadlines and format expectations before starting."
      ],
      [
        "Managing Comments",
        "Track every comment, resolve it deliberately, and never assume silence means a requested change can be ignored."
      ],
      [
        "Version Control",
        "Clear file names, timestamps, and controlled working copies prevent teams from editing or sending the wrong version."
      ],
      [
        "Checking Your Work",
        "Recalculate key outputs independently, compare against prior versions, and ask whether the result makes economic sense."
      ],
      [
        "Sourcing",
        "Every important external number should be traceable to a reliable source with the correct date and definition."
      ],
      [
        "Research Workflow",
        "Efficient research starts with the question, prioritizes primary sources, and captures evidence in a reusable format."
      ],
      [
        "Prioritization",
        "Prioritize by deadline, client impact, dependency, and who is blocked by your work rather than simply working in arrival order."
      ],
      [
        "Communicating Up",
        "Keep seniors informed about progress, blockers, and changes without creating unnecessary noise."
      ],
      [
        "Owning Mistakes",
        "If you find an error, surface it quickly with the impact, fix, and prevention plan instead of hiding it."
      ],
      [
        "Email Discipline",
        "Banking emails should be concise, complete, professional, and clear about the requested action or decision."
      ],
      [
        "Meeting Notes",
        "Good notes capture decisions, open questions, owners, and deadlines rather than transcribing every sentence."
      ],
      [
        "Working Under Pressure",
        "Pressure management depends on organization, communication, and protecting accuracy when workload spikes."
      ],
      [
        "Becoming Reliable",
        "The analyst who is trusted gets there by repeatedly being accurate, responsive, organized, and easy to work with."
      ]
    ]
  ]
].map(makeModule)

export const careerAdvancedById = Object.fromEntries(
  careerAdvancedModules.map((module) => [module.id, module]),
)
