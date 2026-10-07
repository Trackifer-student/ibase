export const makeLesson = ({
  id,
  title,
  summary,
  concepts = [],
  prerequisites = [],
  eyebrow = 'BUILD THE MODEL',
  intro,
  teachTitle,
  paragraphs = [],
  calloutTitle = 'Why it matters',
  callout,
  scenarioTitle = 'Walk through an example',
  scenario,
  workedSteps = [],
  takeaway,
  numberCheck = null,
  mcq,
  written = null,
  completeTitle = 'Lock it in.',
  completeBody = 'You now have the core idea. Keep building from here.',
}) => {
  const steps = [
    {
      type: 'intro',
      eyebrow,
      title: teachTitle,
      body: intro,
      noteTitle: 'Start with the why',
      note: callout || takeaway,
    },
    {
      type: 'teach',
      eyebrow: 'BUILD THE INTUITION',
      title: teachTitle,
      paragraphs,
      calloutTitle,
      callout,
    },
  ]

  if (scenario && workedSteps.length) {
    steps.push({
      type: 'worked',
      eyebrow: 'WALK IT THROUGH',
      title: scenarioTitle,
      scenario,
      workedSteps,
      takeaway,
    })
  }

  if (numberCheck) {
    steps.push({
      type: 'number',
      eyebrow: 'QUICK CALCULATION',
      title: numberCheck.title,
      answer: numberCheck.answer,
      tolerance: numberCheck.tolerance ?? 0.01,
      suffix: numberCheck.suffix || '',
      placeholder: numberCheck.placeholder || 'Enter answer',
      explanation: numberCheck.explanation,
      reviewConcepts: numberCheck.reviewConcepts || concepts,
    })
  }

  if (mcq) {
    steps.push({
      type: 'mcq',
      eyebrow: 'CHECK YOUR MODEL',
      title: mcq.title,
      options: mcq.options,
      correctIndex: mcq.correctIndex,
      correctTitle: 'Exactly.',
      correctText: mcq.correctText,
      wrongTitle: 'Not quite.',
      wrongText: mcq.wrongText,
      reviewConcepts: mcq.reviewConcepts || concepts,
    })
  }

  if (written) {
    steps.push({
      type: 'written',
      eyebrow: 'EXPLAIN IT',
      title: written.title,
      body: written.body,
      placeholder: written.placeholder,
      modelAnswer: written.modelAnswer,
      reviewConcepts: written.reviewConcepts || concepts,
      rubric: {
        criteria: written.criteria,
      },
    })
  }

  steps.push({
    type: 'complete',
    title: completeTitle,
    body: completeBody,
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
