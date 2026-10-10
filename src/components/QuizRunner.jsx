import { useEffect, useMemo, useRef, useState } from 'react'
import { prepareQuestions, isAnswered, scoreQuiz, formatAnswer, correctAnswer } from '../utils/quizBuilder'

const defaultLevels = [
  { id: 'easy-v2', difficulty: 'easy', label: 'Foundation', description: 'Apply one concept at a time in new examples.' },
  { id: 'medium-v2', difficulty: 'medium', label: 'Applied', description: 'Connect concepts, interpret scenarios, and work through calculations.' },
  { id: 'hard-v2', difficulty: 'hard', label: 'Analyst Challenge', description: 'Solve multi-step problems and evaluate competing conclusions. Some questions have several correct answers.' },
]

function QuizRunner({ title, description, questionBank, onBack, storageKey, levelCounts, onMissedConcepts }) {
  const levels = useMemo(() => defaultLevels.map((level, index) => ({ ...level,
    count: Math.min(levelCounts?.[index] ?? 10, questionBank.filter(question => question.difficulty === level.difficulty).length),
  })), [levelCounts, questionBank])
  const [quiz, setQuiz] = useState(null)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)
  const [saveError, setSaveError] = useState('')
  const heading = useRef(null)
  const [bestScores, setBestScores] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey))
      return stored && typeof stored === 'object' && !Array.isArray(stored) ? stored : {}
    } catch { return {} }
  })
  useEffect(() => { heading.current?.focus({ preventScroll: true }) }, [quiz, questionIndex, result])

  const startQuiz = level => {
    const questions = prepareQuestions(questionBank, level.count, level.difficulty)
    if (!questions.length) return
    setQuiz({ level, questions })
    setQuestionIndex(0)
    setAnswers({})
    setResult(null)
    setSaveError('')
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
  const finishQuiz = () => {
    const scored = scoreQuiz(quiz.questions, answers)
    const best = { ...bestScores, [quiz.level.id]: Math.max(bestScores[quiz.level.id] || 0, scored.score) }
    setBestScores(best)
    try { localStorage.setItem(storageKey, JSON.stringify(best)) }
    catch { setSaveError('Your score is shown below, but this browser could not save it for your next visit.') }
    if (scored.missedConcepts.length) onMissedConcepts?.(scored.missedConcepts)
    setResult(scored)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  if (!quiz) return <section className="quiz-page">
    <button className="back-button" onClick={onBack}>← Back</button>
    <div className="quiz-intro">
      <p className="eyebrow">QUIZ MODE</p>
      <h1 ref={heading} tabIndex={-1}>{title}</h1>
      <p className="page-intro">{description}</p>
      <p>These questions are separate from the lesson quick checks. Choose a difficulty, not a quiz length. You can use a calculator and scratch paper.</p>
      <p className="local-note">Best scores save in this browser on this device. New difficulty scores are separate from your previous quiz scores.</p>
      <div className="quiz-level-grid">{levels.map(level => <button className="quiz-level-card" key={level.id} disabled={!level.count} onClick={() => startQuiz(level)}>
        <span>{level.label}</span><strong>{level.count} questions</strong><p>{level.description}</p>
        {typeof bestScores[level.id] === 'number' && <small>Best: {bestScores[level.id]}%</small>}
      </button>)}</div>
      {!questionBank.length && <p>No quiz questions are available here yet.</p>}
      {['quick', 'standard', 'mastery'].some(id => typeof bestScores[id] === 'number') && <details className="getting-started">
        <summary>Previous quiz scores</summary>
        <p>These were earned on the earlier lesson-question quizzes and are kept for reference.</p>
        {['quick', 'standard', 'mastery'].map((id, index) => typeof bestScores[id] === 'number' && <p key={id}>{['Quick Check', 'Standard', 'Mastery'][index]}: {bestScores[id]}%</p>)}
      </details>}
    </div>
  </section>

  if (result) return <section className="quiz-page">
    <button className="back-button" onClick={onBack}>← Back</button>
    <div className="quiz-results">
      <p className="eyebrow">{quiz.level.label} · {title}</p>
      <h1 ref={heading} tabIndex={-1}>{result.score >= 90 ? 'Strong work. Review your reasoning.' : 'Review your answers, then try again.'}</h1>
      <div className="quiz-score"><strong>{result.score}%</strong><span>{result.correctCount} / {quiz.questions.length} correct</span></div>
      {saveError && <p role="alert">{saveError}</p>}
      <p>Each question is worth one point. For questions with several correct answers, select all correct choices and no others.</p>
      <div className="quiz-result-actions">
        <button className="secondary-button" onClick={() => setQuiz(null)}>Change level</button>
        <button className="primary-button" onClick={() => startQuiz(quiz.level)}>Try again</button>
      </div>
      <div className="quiz-review">
        <h2>Answer review</h2>
        {result.reviewed.map((question, index) => <article key={question.id}>
          <span>{index + 1}. {question.correct ? 'Correct' : 'Needs review'} · {question.lessonTitle}</span>
          <h3>{question.prompt}</h3>
          <p><strong>Your answer: </strong>{formatAnswer(question, question.selectedAnswer)}</p>
          <p><strong>Correct answer: </strong>{formatAnswer(question, correctAnswer(question))}</p>
          <p>{question.explanation}</p>
          <a href={`/lesson/${question.lessonId}`}>Review lesson: {question.lessonTitle} →</a>
        </article>)}
      </div>
    </div>
  </section>

  const current = quiz.questions[questionIndex]
  const selected = answers[questionIndex]
  const answeredCount = quiz.questions.filter((question, index) => isAnswered(question, answers[index])).length
  const select = value => setAnswers(previous => ({ ...previous, [questionIndex]: value }))
  const move = offset => { setQuestionIndex(index => index + offset); window.scrollTo({ top: 0, behavior: 'auto' }) }
  const progress = Math.round((questionIndex + 1) / quiz.questions.length * 100)
  return <section className="quiz-page">
    <div className="quiz-runner-top"><button className="back-button" onClick={onBack}>← Exit quiz</button><span>{quiz.level.label} · {answeredCount} / {quiz.questions.length} answered</span></div>
    <div className="progress-track" role="progressbar" aria-label="Quiz progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}><div className="progress-fill" style={{ width: `${progress}%` }} /></div>
    <div className="quiz-question-card">
      <div className="quiz-question-meta"><span>{current.moduleTitle}</span><span>Question {questionIndex + 1} / {quiz.questions.length}</span></div>
      <h1 ref={heading} tabIndex={-1}>{current.prompt}</h1>
      {current.type === 'number' ? <div className="quiz-number-answer">
        <label htmlFor="quiz-number">Your answer ({current.unit})</label>
        <p id="quiz-number-hint">Enter a number only; a minus sign and decimal point are allowed. Use the units above. Round only when the question asks you to.</p>
        <input id="quiz-number" type="text" inputMode="decimal" autoComplete="off" aria-describedby="quiz-number-hint" value={selected ?? ''} onChange={event => select(event.target.value)} />
        {selected?.trim() && !isAnswered(current, selected) && <p role="status">Enter a valid number, such as 12.5 or -8, without a currency or percent symbol.</p>}
      </div> : current.type === 'multiple' ? <fieldset className="quiz-multiple-answer">
        <legend>Select all that apply. All correct choices and no incorrect choices are required.</legend>
        <div className="quiz-answer-grid">{current.options.map((option, index) => <label key={index} className={`quiz-answer quiz-checkbox ${selected?.includes(index) ? 'selected' : ''}`}>
          <input type="checkbox" checked={selected?.includes(index) || false} onChange={() => select(selected?.includes(index) ? selected.filter(item => item !== index) : [...(selected || []), index])} /><span>{option}</span>
        </label>)}</div>
      </fieldset> : <div className="quiz-answer-grid" role="group" aria-label="Choose one answer">{current.options.map((option, index) => <button key={index} aria-pressed={selected === index} className={`quiz-answer ${selected === index ? 'selected' : ''}`} onClick={() => select(index)}><span>{String.fromCharCode(65 + index)}</span><p>{option}</p></button>)}</div>}
      <div className="quiz-nav-actions">
        <button className="secondary-button" onClick={() => move(-1)} disabled={questionIndex === 0}>← Previous</button>
        <button className="primary-button" disabled={!isAnswered(current, selected)} onClick={() => questionIndex === quiz.questions.length - 1 ? finishQuiz() : move(1)}>{questionIndex === quiz.questions.length - 1 ? 'Finish quiz' : 'Next question →'}</button>
      </div>
    </div>
  </section>
}
export default QuizRunner
