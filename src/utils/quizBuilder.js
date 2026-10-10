import { quizBank } from '../data/quizBank.js'
import { varyQuestion, chooseVariant } from '../data/quizVariants.js'

export const extractModuleQuestions = module => (quizBank[module?.id] || []).map((question, index) => {
  const lesson = module.lessons.find(item => item.id === question.lessonId)
  if (!lesson) throw new Error(`Unknown quiz lesson: ${question.lessonId}`)
  return {
    ...question,
    id: `assessment-v2-${module.id}-${index}`,
    moduleId: module.id,
    moduleTitle: module.title,
    lessonTitle: lesson.title,
    reviewConcepts: question.reviewConcepts || lesson.concepts || [],
  }
})
export const extractTrackQuestions = track => (track?.modules || []).flatMap(extractModuleQuestions)
export const extractAllQuestions = tracks => (tracks || []).flatMap(extractTrackQuestions)

export const shuffle = items => {
  const copy = [...items]
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]]
  }
  return copy
}

// Round-robin modules before taking another question from the same module.
// This keeps track and cumulative exams broad even when banks differ in size.
export const prepareQuestions = (bank, count, difficulty, variantHistory = {}) => {
  const groups = new Map()
  for (const question of shuffle(bank.filter(item => item.difficulty === difficulty))) {
    if (!groups.has(question.moduleId)) groups.set(question.moduleId, [])
    groups.get(question.moduleId).push(question)
  }
  const pools = shuffle([...groups.values()])
  const selected = []
  while (selected.length < count && pools.some(pool => pool.length)) {
    for (const pool of pools) {
      if (selected.length >= count) break
      if (pool.length) selected.push(pool.pop())
    }
  }
  return shuffle(selected).map(template => {
    const question = varyQuestion(template, chooseVariant(variantHistory[template.id]))
    if (question.type === 'number') return { ...question }
    const indices = question.type === 'multiple' ? question.correctIndices : [question.correctIndex]
    const records = shuffle(question.options.map((option, index) => ({ option, correct: indices.includes(index) })))
    const correctIndices = records.flatMap((record, index) => record.correct ? [index] : [])
    return { ...question, options: records.map(record => record.option), correctIndices, correctIndex: correctIndices[0] }
  })
}

export const parseNumberAnswer = value => {
  if (typeof value !== 'string') return NaN
  const text = value.trim()
  // Accept normal decimals and correctly grouped thousands, not partial parses or expressions.
  if (!/^[+-]?(?:\d+(?:\.\d*)?|\d{1,3}(?:,\d{3})+(?:\.\d*)?|\.\d+)$/.test(text)) return NaN
  const number = Number(text.replaceAll(',', ''))
  return Number.isFinite(number) ? number : NaN
}
export const isAnswered = (question, answer) => {
  if (question.type === 'number') return Number.isFinite(parseNumberAnswer(answer))
  if (question.type === 'multiple') return Array.isArray(answer) && answer.length > 0
  return Number.isInteger(answer) && answer >= 0 && answer < question.options.length
}
export const isCorrect = (question, answer) => {
  if (!isAnswered(question, answer)) return false
  if (question.type === 'number') return Math.abs(parseNumberAnswer(answer) - question.answer) <= (question.tolerance ?? 0.01) + 1e-9
  if (question.type === 'multiple') {
    const selected = [...new Set(answer)]
    return selected.length === question.correctIndices.length && selected.every(index => question.correctIndices.includes(index))
  }
  return answer === question.correctIndex
}
export const formatAnswer = (question, answer) => {
  if (question.type === 'number') return `${answer ?? 'No answer'} (${question.unit})`
  if (question.type === 'multiple') return Array.isArray(answer) && answer.length ? answer.map(index => question.options[index]).join('; ') : 'No answer'
  return question.options[answer] || 'No answer'
}
export const correctAnswer = question => question.type === 'number' ? question.answer : question.type === 'multiple' ? question.correctIndices : question.correctIndex
export const scoreQuiz = (questions, answers) => {
  const reviewed = questions.map((question, index) => ({ ...question, selectedAnswer: answers[index], correct: isCorrect(question, answers[index]) }))
  const correctCount = reviewed.filter(question => question.correct).length
  return { correctCount, score: questions.length ? Math.round(correctCount / questions.length * 100) : 0, reviewed,
    missedConcepts: [...new Set(reviewed.filter(question => !question.correct).flatMap(question => question.reviewConcepts || []))] }
}
