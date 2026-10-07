export const extractModuleQuestions = (module) => {
  if (!module?.lessons) return []

  return module.lessons.flatMap((lesson) =>
    (lesson.steps || [])
      .map((step, stepIndex) => ({ step, stepIndex }))
      .filter(({ step }) => step.type === 'mcq')
      .map(({ step, stepIndex }) => ({
        id: `${module.id}-${lesson.id}-${stepIndex}`,
        moduleId: module.id,
        moduleTitle: module.title,
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        prompt: step.title,
        options: step.options,
        correctIndex: step.correctIndex,
        explanation: step.correctText || step.wrongText || '',
      })),
  )
}

export const extractTrackQuestions = (track) =>
  (track?.modules || []).flatMap(extractModuleQuestions)

export const extractAllQuestions = (tracks) =>
  (tracks || []).flatMap(extractTrackQuestions)

export const shuffle = (items) => {
  const copy = [...items]

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]]
  }

  return copy
}

export const prepareQuestions = (bank, count) =>
  shuffle(bank)
    .slice(0, Math.min(count, bank.length))
    .map((question) => {
      const optionRecords = question.options.map((option, index) => ({
        option,
        correct: index === question.correctIndex,
      }))

      const shuffledOptions = shuffle(optionRecords)

      return {
        ...question,
        options: shuffledOptions.map((record) => record.option),
        correctIndex: shuffledOptions.findIndex((record) => record.correct),
      }
    })
