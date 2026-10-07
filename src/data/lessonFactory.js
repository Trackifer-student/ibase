export const makeLesson = ({
  id,
  title,
  summary,
  concepts = [],
  prerequisites = [],
  eyebrow = 'BUILD THE MODEL',
  intro,
  why,
  teachTitle,
  teach = [],
  callout,
  example,
  check,
  written,
  takeaway,
}) => {
  const steps = [
    {
      type: 'intro',
      eyebrow,
      title: intro?.title || title,
      body: intro?.body || summary,
      noteTitle: 'Why it matters',
      note:
        why ||
        'This concept becomes more useful when you can explain the logic behind it instead of memorizing a definition.',
    },
    {
      type: 'teach',
      eyebrow: 'LEARN IT',
      title: teachTitle || 'Build the idea step by step.',
      paragraphs: teach,
      calloutTitle: 'Banker lens',
      callout:
        callout ||
        'Focus on what changes economically, where it appears financially, and why the distinction matters.',
    },
  ]

  if (example) {
    steps.push({
      type: 'worked',
      eyebrow: 'WALK THROUGH IT',
      title: example.title,
      scenario: example.scenario,
      workedSteps: example.steps.map((text, index) => ({
        label: example.labels?.[index] || `Step ${index + 1}`,
        text,
      })),
      takeaway: example.takeaway || takeaway,
    })
  }

  if (check) {
    steps.push({
      type: 'mcq',
      eyebrow: 'CHECK YOUR UNDERSTANDING',
      title: check.question,
      options: check.options,
      correctIndex: check.correctIndex,
      correctTitle: 'Exactly.',
      correctText: check.explanation,
      wrongTitle: 'Not quite.',
      wrongText: check.wrongText || check.explanation,
      reviewConcepts: check.reviewConcepts || concepts,
    })
  }

  if (written) {
    steps.push({
      type: 'written',
      eyebrow: 'EXPLAIN IT',
      title: written.question,
      body:
        written.body ||
        'Use your own words. The goal is to show the reasoning, not repeat a definition.',
      placeholder: written.placeholder || 'Explain your thinking...',
      modelAnswer: written.modelAnswer,
      reviewConcepts: written.reviewConcepts || concepts,
      rubric: {
        criteria: written.criteria,
      },
    })
  }

  steps.push({
    type: 'complete',
    title: 'Lock in the idea.',
    body:
      'You do not need to memorize every sentence. You should be able to explain the core logic and recognize when it matters.',
    takeaway,
  })

  return {
    id,
    title,
    summary,
    concepts,
    prerequisites,
    steps,
  }
}

export const moduleFromSpecs = ({
  id,
  number,
  title,
  subtitle,
  description,
  specs,
  quizTitle,
}) => ({
  id,
  number,
  title,
  subtitle,
  description,
  quizTitle: quizTitle || `${title} Quiz`,
  lessons: specs.map(makeLesson),
})
