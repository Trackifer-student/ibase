import { useEffect, useMemo, useState } from 'react'
import { prepareQuestions } from '../utils/quizBuilder'

const defaultLevels = [
  {
    id: 'quick',
    label: 'Quick Check',
    description: 'A short pulse check before you move on.',
    count: 5,
  },
  {
    id: 'standard',
    label: 'Standard Quiz',
    description: 'A fuller test across the section.',
    count: 10,
  },
  {
    id: 'mastery',
    label: 'Mastery',
    description: 'The longest version. Mix everything together.',
    count: 20,
  },
]

function QuizRunner({
  title,
  description,
  questionBank,
  onBack,
  storageKey,
  levelCounts,
  onMissedConcepts,
}) {
  const levels = useMemo(
    () =>
      defaultLevels.map((level, index) => ({
        ...level,
        count:
          levelCounts?.[index] ??
          Math.min(level.count, questionBank.length),
      })),
    [levelCounts, questionBank.length],
  )

  const [quiz, setQuiz] = useState(null)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [finished, setFinished] = useState(false)
  const [result, setResult] = useState(null)

  const [bestScores, setBestScores] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || {}
    } catch {
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(bestScores))
  }, [bestScores, storageKey])

  const startQuiz = (level) => {
    const prepared = prepareQuestions(questionBank, level.count)

    setQuiz({
      level,
      questions: prepared,
    })
    setQuestionIndex(0)
    setAnswers({})
    setFinished(false)
    setResult(null)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  if (!questionBank.length) {
    return (
      <section className="quiz-page">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>

        <div className="quiz-empty">
          <p className="eyebrow">QUIZ</p>
          <h1>{title}</h1>
          <p>No quiz questions are available here yet.</p>
        </div>
      </section>
    )
  }

  if (!quiz) {
    return (
      <section className="quiz-page">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>

        <div className="quiz-intro">
          <p className="eyebrow">QUIZ MODE</p>
          <h1>{title}</h1>
          <p className="page-intro">{description}</p>

          <div className="quiz-level-grid">
            {levels.map((level) => {
              const actualCount = Math.min(level.count, questionBank.length)
              const best = bestScores[level.id]

              return (
                <button
                  className="quiz-level-card"
                  key={level.id}
                  onClick={() =>
                    startQuiz({
                      ...level,
                      count: actualCount,
                    })
                  }
                >
                  <span>{level.label}</span>
                  <strong>{actualCount} questions</strong>
                  <p>{level.description}</p>

                  {typeof best === 'number' && (
                    <small>Best: {best}%</small>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  const questions = quiz.questions

  if (finished && result) {
    const { correctCount, score, wrongQuestions } = result

    return (
      <section className="quiz-page">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>

        <div className="quiz-results">
          <p className="eyebrow">{quiz.level.label.toUpperCase()}</p>

          <h1>
            {score >= 90
              ? 'You know this cold.'
              : score >= 75
                ? 'Strong. Clean up the misses.'
                : score >= 60
                  ? 'You have the base. Keep drilling.'
                  : 'Review the weak spots, then run it again.'}
          </h1>

          <div className="quiz-score">
            <strong>{score}%</strong>
            <span>
              {correctCount} / {questions.length} correct
            </span>
          </div>

          <div className="quiz-result-actions">
            <button
              className="secondary-button"
              onClick={() => setQuiz(null)}
            >
              Change level
            </button>

            <button
              className="primary-button"
              onClick={() => startQuiz(quiz.level)}
            >
              Try again
            </button>
          </div>

          {wrongQuestions.length > 0 && (
            <div className="quiz-review">
              <div className="quiz-review-heading">
                <p className="eyebrow">REVIEW</p>
                <h2>Questions to revisit</h2>
              </div>

              {wrongQuestions.map((question) => (
                <article key={question.id}>
                  <span>{question.lessonTitle}</span>
                  <h3>{question.prompt}</h3>

                  <p className="quiz-your-answer">
                    <strong>Your answer:</strong>{' '}
                    {question.options[question.selectedIndex] || 'No answer'}
                  </p>

                  <p className="quiz-correct-answer">
                    <strong>Correct:</strong>{' '}
                    {question.options[question.correctIndex]}
                  </p>

                  {question.explanation && <p>{question.explanation}</p>}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    )
  }

  const current = questions[questionIndex]
  const selected = answers[questionIndex]
  const answeredCount = Object.keys(answers).length
  const progress = ((questionIndex + 1) / questions.length) * 100

  const chooseAnswer = (index) => {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionIndex]: index,
    }))
  }

  const goNext = () => {
    if (questionIndex >= questions.length - 1) {
      const correctCount = questions.filter(
        (question, index) => answers[index] === question.correctIndex,
      ).length

      const score = Math.round(
        (correctCount / questions.length) * 100,
      )

      const wrongQuestions = questions
        .map((question, index) => ({
          ...question,
          selectedIndex: answers[index],
        }))
        .filter(
          (question) =>
            question.selectedIndex !== question.correctIndex,
        )

      const missedConcepts = [
        ...new Set(
          wrongQuestions.flatMap(
            (question) => question.reviewConcepts || [],
          ),
        ),
      ]

      const best = Math.max(
        bestScores[quiz.level.id] || 0,
        score,
      )

      setBestScores((current) => ({
        ...current,
        [quiz.level.id]: best,
      }))

      if (missedConcepts.length) {
        onMissedConcepts?.(missedConcepts)
      }

      setResult({
        correctCount,
        score,
        wrongQuestions,
      })

      setFinished(true)
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    setQuestionIndex((currentIndex) => currentIndex + 1)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const goPrevious = () => {
    if (questionIndex === 0) return
    setQuestionIndex((currentIndex) => currentIndex - 1)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  return (
    <section className="quiz-page">
      <div className="quiz-runner-top">
        <button className="back-button" onClick={onBack}>
          ← Exit quiz
        </button>

        <span>
          {answeredCount} / {questions.length} answered
        </span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="quiz-question-card">
        <div className="quiz-question-meta">
          <span>{current.moduleTitle}</span>
          <span>
            Question {questionIndex + 1} / {questions.length}
          </span>
        </div>

        <h1>{current.prompt}</h1>

        <div className="quiz-answer-grid">
          {current.options.map((option, index) => (
            <button
              key={`${option}-${index}`}
              aria-pressed={selected === index}
              className={
                selected === index
                  ? 'quiz-answer selected'
                  : 'quiz-answer'
              }
              onClick={() => chooseAnswer(index)}
            >
              <span>{String.fromCharCode(65 + index)}</span>
              <p>{option}</p>
            </button>
          ))}
        </div>

        <div className="quiz-nav-actions">
          <button
            className="secondary-button"
            onClick={goPrevious}
            disabled={questionIndex === 0}
          >
            ← Previous
          </button>

          <button
            className="primary-button"
            onClick={goNext}
            disabled={selected === undefined}
          >
            {questionIndex === questions.length - 1
              ? 'Finish quiz'
              : 'Next question →'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default QuizRunner
