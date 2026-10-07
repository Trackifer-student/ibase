import { useEffect, useState } from 'react'
import { tracks } from './data/curriculum'
import { concepts } from './data/concepts'
import { aiBankingModule } from './data/modules/aiBanking'
import { gradeWrittenAnswer } from './utils/writtenGrader'
import {
  extractAllQuestions,
  extractModuleQuestions,
  extractTrackQuestions,
} from './utils/quizBuilder'
import QuizRunner from './components/QuizRunner'
import InterviewPrep from './components/InterviewPrep'
import './App.css'

function RichText({ children, onConcept }) {
  if (typeof children !== 'string') {
    return children
  }

  const pieces = children.split(/(\[\[[^\]]+\]\])/g)

  return pieces.map((piece, index) => {
    const match = piece.match(
      /^\[\[([^|\]]+)(?:\|([^\]]+))?\]\]$/,
    )

    if (!match) {
      return <span key={index}>{piece}</span>
    }

    const conceptId = match[1]

    const label =
      match[2] ||
      concepts[conceptId]?.name ||
      conceptId

    return (
      <button
        key={`${conceptId}-${index}`}
        className="concept-keyword"
        onClick={() => onConcept(conceptId)}
      >
        {label}
      </button>
    )
  })
}

function ConceptModal({
  conceptId,
  onClose,
}) {
  const concept = concepts[conceptId]

  if (!concept) {
    return null
  }

  return (
    <div
      className="concept-overlay"
      onClick={onClose}
    >
      <div
        className="concept-modal"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <button
          className="concept-close"
          onClick={onClose}
        >
          ×
        </button>

        <p className="eyebrow">
          QUICK REFRESHER
        </p>

        <h2>{concept.name}</h2>

        <p className="concept-definition">
          {concept.definition}
        </p>

        <div className="concept-example">
          <strong>Example</strong>
          <p>{concept.example}</p>
        </div>

        <div className="concept-why">
          <strong>Why it matters</strong>
          <p>{concept.whyItMatters}</p>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [page, setPage] =
    useState('home')

  const [activeTrack, setActiveTrack] =
    useState(null)

  const [activeModule, setActiveModule] =
    useState(null)

  const [moduleOrigin, setModuleOrigin] =
    useState('track')

  const [quizConfig, setQuizConfig] =
    useState(null)

  const [activeLesson, setActiveLesson] =
    useState(null)

  const [lessonStep, setLessonStep] =
    useState(0)

  const [
    selectedAnswer,
    setSelectedAnswer,
  ] = useState(null)

  const [showFeedback, setShowFeedback] =
    useState(false)

  const [shortAnswer, setShortAnswer] =
    useState('')

  const [numberAnswer, setNumberAnswer] =
    useState('')

  /*
    Written-answer tutor
  */

  const [
    writtenAnswer,
    setWrittenAnswer,
  ] = useState('')

  const [
    writtenResult,
    setWrittenResult,
  ] = useState(null)

  const [
    writtenAttempts,
    setWrittenAttempts,
  ] = useState(0)

  const [
    gradingWritten,
    setGradingWritten,
  ] = useState(false)

  /*
    Concept popup + notes
  */

  const [
    activeConcept,
    setActiveConcept,
  ] = useState(null)

  const [notesOpen, setNotesOpen] =
    useState(false)

  /*
    Saved local data
  */

  const [notes, setNotes] = useState(
    () => {
      try {
        return (
          JSON.parse(
            localStorage.getItem(
              'ibase-notes',
            ),
          ) || {}
        )
      } catch {
        return {}
      }
    },
  )

  const [
    completedLessons,
    setCompletedLessons,
  ] = useState(() => {
    try {
      return (
        JSON.parse(
          localStorage.getItem(
            'ibase-completed-lessons',
          ),
        ) || []
      )
    } catch {
      return []
    }
  })

  const [xp, setXp] = useState(() => {
    return (
      Number(
        localStorage.getItem(
          'ibase-xp',
        ),
      ) || 0
    )
  })

  const [
    needsReview,
    setNeedsReview,
  ] = useState(() => {
    try {
      return (
        JSON.parse(
          localStorage.getItem(
            'ibase-needs-review',
          ),
        ) || []
      )
    } catch {
      return []
    }
  })

  /*
    Persist local data
  */

  useEffect(() => {
    localStorage.setItem(
      'ibase-notes',
      JSON.stringify(notes),
    )
  }, [notes])

  useEffect(() => {
    localStorage.setItem(
      'ibase-completed-lessons',
      JSON.stringify(
        completedLessons,
      ),
    )
  }, [completedLessons])

  useEffect(() => {
    localStorage.setItem(
      'ibase-xp',
      String(xp),
    )
  }, [xp])

  useEffect(() => {
    localStorage.setItem(
      'ibase-needs-review',
      JSON.stringify(needsReview),
    )
  }, [needsReview])

  /*
    General helpers
  */

  const resetInteraction = () => {
    setSelectedAnswer(null)
    setShowFeedback(false)

    setShortAnswer('')
    setNumberAnswer('')

    setWrittenAnswer('')
    setWrittenResult(null)
    setWrittenAttempts(0)
    setGradingWritten(false)
  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const goHome = () => {
    setPage('home')
    scrollTop()
  }

  const openLearn = () => {
    setPage('learn')
    scrollTop()
  }

  const openTrack = (track) => {
    setActiveTrack(track)
    setActiveModule(null)
    setActiveLesson(null)

    setPage('track')
    scrollTop()
  }

  const openModule = (module, origin = 'track') => {
    if (!module.lessons) {
      return
    }

    setActiveModule(module)
    setActiveLesson(null)
    setModuleOrigin(origin)

    setPage('module')
    scrollTop()
  }

  const openQuiz = ({
    title,
    description,
    questionBank,
    storageKey,
    returnPage,
    levelCounts,
  }) => {
    setQuizConfig({
      title,
      description,
      questionBank,
      storageKey,
      returnPage,
      levelCounts,
    })

    setPage('quiz')
    scrollTop()
  }

  const openModuleQuiz = (module, returnPage = 'module') => {
    const questionBank = extractModuleQuestions(module)

    openQuiz({
      title: module.quizTitle || `${module.title} Quiz`,
      description:
        'Use the short version for a quick check, then come back for the longer levels when you want to prove you know the whole module.',
      questionBank,
      storageKey: `ibase-quiz-module-${module.id}`,
      returnPage,
      levelCounts: [5, 10, Math.min(20, questionBank.length)],
    })
  }

  const openTrackQuiz = (track) => {
    const questionBank = extractTrackQuestions(track)

    openQuiz({
      title: `${track.title} Exam`,
      description:
        'Questions are mixed across every live module in this track. This is the step between learning a section and being able to retrieve it under pressure.',
      questionBank,
      storageKey: `ibase-quiz-track-${track.id}`,
      returnPage: 'track',
      levelCounts: [10, 20, Math.min(30, questionBank.length)],
    })
  }

  const openFinalQuiz = () => {
    const questionBank = extractAllQuestions(tracks)

    openQuiz({
      title: 'IBase Cumulative Exam',
      description:
        'Mix the entire curriculum together. No section labels are guaranteed to save you. This is the closest quiz mode to proving the knowledge actually sticks.',
      questionBank,
      storageKey: 'ibase-quiz-cumulative',
      returnPage: 'learn',
      levelCounts: [20, 40, Math.min(60, questionBank.length)],
    })
  }

  const openLesson = (lesson) => {
    setActiveLesson(lesson)
    setLessonStep(0)

    resetInteraction()

    setPage('lesson')
    scrollTop()
  }

  const changeLessonStep = (
    newStep,
  ) => {
    if (!activeLesson) {
      return
    }

    const safeStep = Math.max(
      0,
      Math.min(
        newStep,
        activeLesson.steps.length - 1,
      ),
    )

    setLessonStep(safeStep)

    resetInteraction()
    scrollTop()
  }

  /*
    Lesson navigation
  */

  const getActiveLessonIndex = () => {
    if (
      !activeModule?.lessons ||
      !activeLesson
    ) {
      return -1
    }

    return activeModule.lessons.findIndex(
      (lesson) =>
        lesson.id === activeLesson.id,
    )
  }

  const getNextLesson = () => {
    const currentIndex =
      getActiveLessonIndex()

    if (
      currentIndex === -1 ||
      currentIndex >=
        activeModule.lessons.length - 1
    ) {
      return null
    }

    return activeModule.lessons[
      currentIndex + 1
    ]
  }

  /*
    Objective grading
  */

  const normalizeText = (value) =>
    value
      .trim()
      .toLowerCase()
      .replace(/[.,!?]/g, '')

  const isFillCorrect = (step) => {
    const acceptedAnswers = [
      step.answer,
      ...(step.alternatives || []),
    ].map(normalizeText)

    return acceptedAnswers.includes(
      normalizeText(shortAnswer),
    )
  }

  const parseNumber = (value) => {
    const cleaned =
      String(value).replace(
        /[^0-9.-]/g,
        '',
      )

    return Number(cleaned)
  }

  const isNumberCorrect = (step) => {
    const entered =
      parseNumber(numberAnswer)

    if (Number.isNaN(entered)) {
      return false
    }

    const tolerance =
      step.tolerance ?? 0

    return (
      Math.abs(
        entered - step.answer,
      ) <= tolerance
    )
  }

  /*
    Completion + notes
  */

  const completeCurrentLesson = () => {
    if (!activeLesson) {
      return
    }

    if (
      !completedLessons.includes(
        activeLesson.id,
      )
    ) {
      setCompletedLessons(
        (current) => [
          ...current,
          activeLesson.id,
        ],
      )

      setXp(
        (current) => current + 50,
      )
    }
  }

  const updateCurrentNote = (
    value,
  ) => {
    if (!activeLesson) {
      return
    }

    setNotes((current) => ({
      ...current,
      [activeLesson.id]: value,
    }))
  }

  /*
    Concept mastery
  */

  const markConceptsForReview = (
    conceptIds = [],
  ) => {
    setNeedsReview((current) => {
      return [
        ...new Set([
          ...current,
          ...conceptIds,
        ]),
      ]
    })
  }

  /*
    Written-answer grading
  */

  const handleWrittenGrade = async (
    step,
  ) => {
    if (
      !writtenAnswer.trim() ||
      gradingWritten
    ) {
      return
    }

    const nextAttempt =
      writtenAttempts + 1

    setGradingWritten(true)
    setWrittenResult(null)

    try {
      const result =
        await gradeWrittenAnswer({
          answer: writtenAnswer,
          rubric: step.rubric,
          attempt: nextAttempt,
        })

      setWrittenAttempts(nextAttempt)
      setWrittenResult(result)

      if (
        !result.pass &&
        nextAttempt >= 2
      ) {
        markConceptsForReview(
          step.reviewConcepts ||
            activeLesson?.concepts ||
            [],
        )
      }
    } catch (error) {
      console.error(
        'Written grader error:',
        error,
      )

      setWrittenResult({
        pass: false,
        score: 0,
        understood: [],
        missing: [],
        feedback:
          'Something went wrong while checking your answer. Try again.',
      })
    } finally {
      setGradingWritten(false)
    }
  }

  const skipWrittenQuestion = (
    step,
  ) => {
    markConceptsForReview(
      step.reviewConcepts ||
        activeLesson?.concepts ||
        [],
    )

    changeLessonStep(
      lessonStep + 1,
    )
  }

  /*
    Reusable concept refresher
  */

  const renderReviewConcepts = (
    step,
    correct,
  ) => {
    if (
      correct ||
      !step.reviewConcepts?.length
    ) {
      return null
    }

    return (
      <div className="review-concepts">
        <span>
          Need a refresher?
        </span>

        <div>
          {step.reviewConcepts.map(
            (conceptId) => (
              <button
                key={conceptId}
                onClick={() =>
                  setActiveConcept(
                    conceptId,
                  )
                }
              >
                Review{' '}
                {concepts[
                  conceptId
                ]?.name ||
                  conceptId}
              </button>
            ),
          )}
        </div>
      </div>
    )
  }

  /*
    QUIZ PAGE
  */

  if (page === 'quiz' && quizConfig) {
    return (
      <main>
        <nav className="site-nav">
          <button className="brand-button" onClick={goHome}>
            IBase
          </button>

          <span className="xp-display">{xp} XP</span>
        </nav>

        <QuizRunner
          title={quizConfig.title}
          description={quizConfig.description}
          questionBank={quizConfig.questionBank}
          storageKey={quizConfig.storageKey}
          levelCounts={quizConfig.levelCounts}
          onBack={() => {
            setPage(quizConfig.returnPage)
            scrollTop()
          }}
        />
      </main>
    )
  }

  /*
    LESSON PAGE
  */

  if (
    page === 'lesson' &&
    activeLesson
  ) {
    const step =
      activeLesson.steps[
        lessonStep
      ]

    const progress =
      ((lessonStep + 1) /
        activeLesson.steps.length) *
      100

    const activeLessonIndex =
      getActiveLessonIndex()

    const nextLesson =
      getNextLesson()

    return (
      <main>
        <nav className="site-nav">
          <button
            className="brand-button"
            onClick={goHome}
          >
            IBase
          </button>

          <button
            className="back-button"
            onClick={() => {
              setPage('module')
              scrollTop()
            }}
          >
            ← Back to module
          </button>
        </nav>

        <section className="lesson-shell">
          <div className="lesson-topline">
            <div>
              <p className="lesson-kicker">
                MODULE{' '}
                {activeModule?.number}{' '}
                · LESSON{' '}
                {String(
                  activeLessonIndex +
                    1,
                ).padStart(2, '0')}
              </p>

              <p className="lesson-title-small">
                {activeLesson.title}
              </p>
            </div>

            <div className="lesson-tools">
              <button
                className="notes-button"
                onClick={() =>
                  setNotesOpen(true)
                }
              >
                Notes
              </button>

              <span className="xp-display">
                {xp} XP
              </span>

              <span>
                {lessonStep + 1} /{' '}
                {
                  activeLesson.steps
                    .length
                }
              </span>
            </div>
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          {/* INTRO */}

          {step.type === 'intro' && (
            <div className="lesson-card">
              <p className="eyebrow">
                {step.eyebrow}
              </p>

              <h1>{step.title}</h1>

              <p className="lesson-lead">
                <RichText
                  onConcept={
                    setActiveConcept
                  }
                >
                  {step.body}
                </RichText>
              </p>

              {step.note && (
                <div className="editorial-note">
                  <strong>
                    {step.noteTitle}
                  </strong>

                  <p>
                    <RichText
                      onConcept={
                        setActiveConcept
                      }
                    >
                      {step.note}
                    </RichText>
                  </p>
                </div>
              )}

              <button
                className="primary-button"
                onClick={() =>
                  changeLessonStep(
                    lessonStep + 1,
                  )
                }
              >
                Keep going →
              </button>
            </div>
          )}

          {/* TEACH */}

          {step.type === 'teach' && (
            <div className="lesson-card">
              <p className="eyebrow">
                {step.eyebrow}
              </p>

              <h1>{step.title}</h1>

              <div className="teaching-copy">
                {step.paragraphs.map(
                  (
                    paragraph,
                    index,
                  ) => (
                    <p key={index}>
                      <RichText
                        onConcept={
                          setActiveConcept
                        }
                      >
                        {paragraph}
                      </RichText>
                    </p>
                  ),
                )}
              </div>

              {step.callout && (
                <div className="plain-language">
                  <span>
                    {step.calloutTitle}
                  </span>

                  <p>
                    <RichText
                      onConcept={
                        setActiveConcept
                      }
                    >
                      {step.callout}
                    </RichText>
                  </p>
                </div>
              )}

              <div className="lesson-actions">
                <button
                  className="secondary-button"
                  onClick={() =>
                    changeLessonStep(
                      lessonStep - 1,
                    )
                  }
                >
                  ← Back
                </button>

                <button
                  className="primary-button"
                  onClick={() =>
                    changeLessonStep(
                      lessonStep + 1,
                    )
                  }
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* WORKED EXAMPLE */}

          {step.type ===
            'worked' && (
            <div className="lesson-card">
              <p className="eyebrow">
                {step.eyebrow}
              </p>

              <h1>{step.title}</h1>

              <p className="lesson-lead">
                <RichText
                  onConcept={
                    setActiveConcept
                  }
                >
                  {step.scenario}
                </RichText>
              </p>

              <div className="worked-example">
                {step.workedSteps.map(
                  (
                    workedStep,
                    index,
                  ) => (
                    <div
                      className="worked-step"
                      key={
                        workedStep.label
                      }
                    >
                      <span>
                        {String(
                          index + 1,
                        ).padStart(
                          2,
                          '0',
                        )}
                      </span>

                      <div>
                        <strong>
                          {
                            workedStep.label
                          }
                        </strong>

                        <p>
                          <RichText
                            onConcept={
                              setActiveConcept
                            }
                          >
                            {
                              workedStep.text
                            }
                          </RichText>
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>

              <div className="takeaway-box">
                <span>
                  What this shows
                </span>

                <p>
                  <RichText
                    onConcept={
                      setActiveConcept
                    }
                  >
                    {step.takeaway}
                  </RichText>
                </p>
              </div>

              <div className="lesson-actions">
                <button
                  className="secondary-button"
                  onClick={() =>
                    changeLessonStep(
                      lessonStep - 1,
                    )
                  }
                >
                  ← Back
                </button>

                <button
                  className="primary-button"
                  onClick={() =>
                    changeLessonStep(
                      lessonStep + 1,
                    )
                  }
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* CONCEPT CARDS */}

          {step.type ===
            'concept' && (
            <div className="lesson-card">
              <p className="eyebrow">
                {step.eyebrow}
              </p>

              <h1>{step.title}</h1>

              <p className="lesson-lead">
                <RichText
                  onConcept={
                    setActiveConcept
                  }
                >
                  {step.body}
                </RichText>
              </p>

              <div className="concept-grid">
                {step.cards.map(
                  (card) => (
                    <article
                      key={`${card.number}-${card.title}`}
                    >
                      <span>
                        {card.number}
                      </span>

                      <h2>
                        {card.title}
                      </h2>

                      <p>
                        <RichText
                          onConcept={
                            setActiveConcept
                          }
                        >
                          {card.text}
                        </RichText>
                      </p>
                    </article>
                  ),
                )}
              </div>

              {step.plainText && (
                <div className="plain-language">
                  <span>
                    {step.plainTitle}
                  </span>

                  <p>
                    <RichText
                      onConcept={
                        setActiveConcept
                      }
                    >
                      {step.plainText}
                    </RichText>
                  </p>
                </div>
              )}

              <div className="lesson-actions">
                <button
                  className="secondary-button"
                  onClick={() =>
                    changeLessonStep(
                      lessonStep - 1,
                    )
                  }
                >
                  ← Back
                </button>

                <button
                  className="primary-button"
                  onClick={() =>
                    changeLessonStep(
                      lessonStep + 1,
                    )
                  }
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* LIST */}

          {step.type === 'list' && (
            <div className="lesson-card">
              <p className="eyebrow">
                {step.eyebrow}
              </p>

              <h1>{step.title}</h1>

              <p className="lesson-lead">
                <RichText
                  onConcept={
                    setActiveConcept
                  }
                >
                  {step.body}
                </RichText>
              </p>

              <div className="stack-list">
                {step.items.map(
                  (item, index) => (
                    <div key={item}>
                      <span>
                        {String(
                          index + 1,
                        ).padStart(
                          2,
                          '0',
                        )}
                      </span>

                      <p>
                        <RichText
                          onConcept={
                            setActiveConcept
                          }
                        >
                          {item}
                        </RichText>
                      </p>
                    </div>
                  ),
                )}
              </div>

              {step.note && (
                <div className="editorial-note">
                  <strong>
                    {step.noteTitle}
                  </strong>

                  <p>
                    <RichText
                      onConcept={
                        setActiveConcept
                      }
                    >
                      {step.note}
                    </RichText>
                  </p>
                </div>
              )}

              <div className="lesson-actions">
                <button
                  className="secondary-button"
                  onClick={() =>
                    changeLessonStep(
                      lessonStep - 1,
                    )
                  }
                >
                  ← Back
                </button>

                <button
                  className="primary-button"
                  onClick={() =>
                    changeLessonStep(
                      lessonStep + 1,
                    )
                  }
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* MULTIPLE CHOICE */}

          {step.type === 'mcq' && (
            <div className="lesson-card">
              <p className="eyebrow">
                {step.eyebrow}
              </p>

              <h1>{step.title}</h1>

              <div className="answer-list">
                {step.options.map(
                  (option, index) => (
                    <button
                      key={`${option}-${index}`}
                      className={
                        selectedAnswer ===
                        index
                          ? 'answer-option selected'
                          : 'answer-option'
                      }
                      onClick={() => {
                        setSelectedAnswer(
                          index,
                        )

                        setShowFeedback(
                          false,
                        )
                      }}
                    >
                      {option}
                    </button>
                  ),
                )}
              </div>

              {showFeedback && (
                <div
                  className={
                    selectedAnswer ===
                    step.correctIndex
                      ? 'feedback-box correct'
                      : 'feedback-box'
                  }
                >
                  <strong>
                    {selectedAnswer ===
                    step.correctIndex
                      ? step.correctTitle
                      : step.wrongTitle}
                  </strong>

                  <p>
                    {selectedAnswer ===
                    step.correctIndex
                      ? step.correctText
                      : step.wrongText}
                  </p>

                  {renderReviewConcepts(
                    step,
                    selectedAnswer ===
                      step.correctIndex,
                  )}
                </div>
              )}

              <div className="lesson-actions">
                <button
                  className="secondary-button"
                  onClick={() =>
                    changeLessonStep(
                      lessonStep - 1,
                    )
                  }
                >
                  ← Back
                </button>

                {!showFeedback ? (
                  <button
                    className="primary-button"
                    disabled={
                      selectedAnswer ===
                      null
                    }
                    onClick={() =>
                      setShowFeedback(
                        true,
                      )
                    }
                  >
                    Check answer
                  </button>
                ) : (
                  <button
                    className="primary-button"
                    onClick={() =>
                      changeLessonStep(
                        lessonStep + 1,
                      )
                    }
                  >
                    Continue →
                  </button>
                )}
              </div>
            </div>
          )}

          {/* FILL IN */}

          {step.type === 'fill' && (
            <div className="lesson-card">
              <p className="eyebrow">
                {step.eyebrow}
              </p>

              <h1>{step.title}</h1>

              {step.hint && (
                <p className="lesson-lead">
                  {step.hint}
                </p>
              )}

              <input
                className="short-response"
                type="text"
                value={shortAnswer}
                placeholder="Type your answer"
                onChange={(event) => {
                  setShortAnswer(
                    event.target.value,
                  )

                  setShowFeedback(
                    false,
                  )
                }}
              />

              {showFeedback && (
                <div
                  className={
                    isFillCorrect(step)
                      ? 'feedback-box correct'
                      : 'feedback-box'
                  }
                >
                  <strong>
                    {isFillCorrect(step)
                      ? 'Nice. That’s exactly it.'
                      : 'Not quite.'}
                  </strong>

                  <p>
                    {isFillCorrect(step)
                      ? step.successText
                      : `The answer we're looking for is “${step.answer}.”`}
                  </p>

                  {renderReviewConcepts(
                    step,
                    isFillCorrect(step),
                  )}
                </div>
              )}

              <div className="lesson-actions">
                <button
                  className="secondary-button"
                  onClick={() =>
                    changeLessonStep(
                      lessonStep - 1,
                    )
                  }
                >
                  ← Back
                </button>

                {!showFeedback ? (
                  <button
                    className="primary-button"
                    disabled={
                      !shortAnswer.trim()
                    }
                    onClick={() =>
                      setShowFeedback(
                        true,
                      )
                    }
                  >
                    Check answer
                  </button>
                ) : (
                  <button
                    className="primary-button"
                    onClick={() =>
                      changeLessonStep(
                        lessonStep + 1,
                      )
                    }
                  >
                    Continue →
                  </button>
                )}
              </div>
            </div>
          )}

          {/* NUMBER */}

          {step.type ===
            'number' && (
            <div className="lesson-card">
              <p className="eyebrow">
                {step.eyebrow}
              </p>

              <h1>{step.title}</h1>

              <input
                className="short-response"
                type="text"
                inputMode="decimal"
                value={numberAnswer}
                placeholder={
                  step.placeholder ||
                  'Enter your answer'
                }
                onChange={(event) => {
                  setNumberAnswer(
                    event.target.value,
                  )

                  setShowFeedback(
                    false,
                  )
                }}
              />

              {showFeedback && (
                <div
                  className={
                    isNumberCorrect(step)
                      ? 'feedback-box correct'
                      : 'feedback-box'
                  }
                >
                  <strong>
                    {isNumberCorrect(step)
                      ? 'Nice. That’s exactly it.'
                      : 'Not quite.'}
                  </strong>

                  <p>
                    {isNumberCorrect(step)
                      ? step.explanation
                      : `${step.explanation} The answer is ${step.answer}${
                          step.suffix
                            ? ` ${step.suffix}`
                            : ''
                        }.`}
                  </p>

                  {renderReviewConcepts(
                    step,
                    isNumberCorrect(step),
                  )}
                </div>
              )}

              <div className="lesson-actions">
                <button
                  className="secondary-button"
                  onClick={() =>
                    changeLessonStep(
                      lessonStep - 1,
                    )
                  }
                >
                  ← Back
                </button>

                {!showFeedback ? (
                  <button
                    className="primary-button"
                    disabled={
                      !numberAnswer.trim()
                    }
                    onClick={() =>
                      setShowFeedback(
                        true,
                      )
                    }
                  >
                    Check answer
                  </button>
                ) : (
                  <button
                    className="primary-button"
                    onClick={() =>
                      changeLessonStep(
                        lessonStep + 1,
                      )
                    }
                  >
                    Continue →
                  </button>
                )}
              </div>
            </div>
          )}

          {/* WRITTEN ANSWER TUTOR */}

          {step.type ===
            'written' && (
            <div className="lesson-card written-card">
              <button
                className="skip-question"
                onClick={() =>
                  skipWrittenQuestion(
                    step,
                  )
                }
              >
                Skip for now
              </button>

              <p className="eyebrow">
                {step.eyebrow}
              </p>

              <h1>{step.title}</h1>

              <p className="lesson-lead">
                {step.body}
              </p>

              {writtenAttempts > 0 && (
                <div className="attempt-counter">
                  Attempt{' '}
                  {writtenAttempts + 1}
                </div>
              )}

              <textarea
                className="written-response"
                placeholder={
                  step.placeholder
                }
                value={writtenAnswer}
                disabled={
                  gradingWritten
                }
                onChange={(event) => {
                  setWrittenAnswer(
                    event.target.value,
                  )

                  setWrittenResult(
                    null,
                  )
                }}
              />

              {gradingWritten && (
                <div className="grading-state">
                  <div className="grading-dot" />

                  <span>
                    Checking your
                    explanation...
                  </span>
                </div>
              )}

              {writtenResult && (
                <div
                  className={
                    writtenResult.pass
                      ? 'written-grade pass'
                      : 'written-grade retry'
                  }
                >
                  <div className="written-grade-top">
                    <div>
                      <span>
                        {writtenResult.pass
                          ? 'UNDERSTOOD'
                          : 'KEEP WORKING'}
                      </span>

                      <h3>
                        {writtenResult.pass
                          ? 'You got it.'
                          : 'Not quite yet.'}
                      </h3>
                    </div>

                    <strong>
                      {
                        writtenResult.score
                      }
                      %
                    </strong>
                  </div>

                  <p>
                    {
                      writtenResult.feedback
                    }
                  </p>

                  {writtenResult
                    .understood
                    ?.length > 0 && (
                    <div className="grader-section">
                      <span>
                        What you
                        understood
                      </span>

                      {writtenResult.understood.map(
                        (item) => (
                          <p key={item}>
                            ✓ {item}
                          </p>
                        ),
                      )}
                    </div>
                  )}

                  {!writtenResult.pass &&
                    writtenResult
                      .missing?.length >
                      0 && (
                      <div className="grader-section missing">
                        <span>
                          What’s still
                          missing
                        </span>

                        {writtenResult.missing.map(
                          (item) => (
                            <p key={item}>
                              → {item}
                            </p>
                          ),
                        )}
                      </div>
                    )}

                  {!writtenResult.pass &&
                    writtenAttempts >=
                      2 &&
                    (
                      step.reviewConcepts ||
                      activeLesson.concepts
                    )?.length >
                      0 && (
                      <div className="review-concepts">
                        <span>
                          Refresh the idea
                        </span>

                        <div>
                          {(
                            step.reviewConcepts ||
                            activeLesson.concepts
                          ).map(
                            (
                              conceptId,
                            ) => (
                              <button
                                key={
                                  conceptId
                                }
                                onClick={() =>
                                  setActiveConcept(
                                    conceptId,
                                  )
                                }
                              >
                                Review{' '}
                                {concepts[
                                  conceptId
                                ]?.name ||
                                  conceptId}
                              </button>
                            ),
                          )}
                        </div>
                      </div>
                    )}
                </div>
              )}

              <div className="lesson-actions">
                <button
                  className="secondary-button"
                  onClick={() =>
                    changeLessonStep(
                      lessonStep - 1,
                    )
                  }
                >
                  ← Back
                </button>

                {!writtenResult?.pass ? (
                  <button
                    className="primary-button"
                    disabled={
                      !writtenAnswer.trim() ||
                      gradingWritten
                    }
                    onClick={() =>
                      handleWrittenGrade(
                        step,
                      )
                    }
                  >
                    {gradingWritten
                      ? 'Checking...'
                      : writtenAttempts >
                          0
                        ? 'Check again'
                        : 'Check my answer'}
                  </button>
                ) : (
                  <button
                    className="primary-button"
                    onClick={() =>
                      changeLessonStep(
                        lessonStep + 1,
                      )
                    }
                  >
                    Continue →
                  </button>
                )}
              </div>
            </div>
          )}

          {/* COMPLETE */}

          {step.type ===
            'complete' && (
            <div className="lesson-card completion-card">
              <p className="eyebrow">
                LESSON COMPLETE
              </p>

              <h1>{step.title}</h1>

              <p className="lesson-lead">
                <RichText
                  onConcept={
                    setActiveConcept
                  }
                >
                  {step.body}
                </RichText>
              </p>

              <div className="takeaway-box">
                <span>
                  Know this
                </span>

                <p>
                  <RichText
                    onConcept={
                      setActiveConcept
                    }
                  >
                    {step.takeaway}
                  </RichText>
                </p>
              </div>

              <div className="lesson-actions">
                <button
                  className="secondary-button"
                  onClick={() =>
                    changeLessonStep(
                      lessonStep - 1,
                    )
                  }
                >
                  ← Review
                </button>

                {nextLesson ? (
                  <button
                    className="primary-button"
                    onClick={() => {
                      completeCurrentLesson()

                      openLesson(
                        nextLesson,
                      )
                    }}
                  >
                    Next lesson →
                  </button>
                ) : (
                  <button
                    className="primary-button"
                    onClick={() => {
                      completeCurrentLesson()

                      setPage(
                        'module',
                      )

                      scrollTop()
                    }}
                  >
                    Back to module →
                  </button>
                )}
              </div>
            </div>
          )}
        </section>

        {/* NOTES PANEL */}

        {notesOpen && (
          <div
            className="notes-overlay"
            onClick={() =>
              setNotesOpen(false)
            }
          >
            <aside
              className="notes-panel"
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <div className="notes-header">
                <div>
                  <p className="eyebrow">
                    MY NOTES
                  </p>

                  <h2>
                    {
                      activeLesson.title
                    }
                  </h2>
                </div>

                <button
                  onClick={() =>
                    setNotesOpen(false)
                  }
                >
                  ×
                </button>
              </div>

              <textarea
                value={
                  notes[
                    activeLesson.id
                  ] || ''
                }
                onChange={(event) =>
                  updateCurrentNote(
                    event.target.value,
                  )
                }
                placeholder="Write anything you want to remember..."
              />

              <p className="notes-save">
                Saved automatically on
                this device.
              </p>
            </aside>
          </div>
        )}

        {/* CONCEPT POPUP */}

        {activeConcept && (
          <ConceptModal
            conceptId={activeConcept}
            onClose={() =>
              setActiveConcept(null)
            }
          />
        )}
      </main>
    )
  }

  /*
    MODULE PAGE
  */

  if (
    page === 'module' &&
    activeModule
  ) {
    return (
      <main>
        <nav className="site-nav">
          <button
            className="brand-button"
            onClick={goHome}
          >
            IBase
          </button>

          <button
            className="back-button"
            onClick={() => {
              setPage(moduleOrigin)
              scrollTop()
            }}
          >
            {moduleOrigin === 'ai' ? '← AI for Banking' : '← Back to track'}
          </button>
        </nav>

        <section className="module-page">
          <p className="eyebrow">
            MODULE {activeModule.number}
          </p>

          <h1>
            {activeModule.title}
          </h1>

          <p className="page-intro">
            {
              activeModule.description
            }
          </p>

          <div className="lesson-list">
            {activeModule.lessons.map(
              (lesson, index) => (
                <article
                  className="lesson-row live"
                  key={lesson.id}
                >
                  <div className="lesson-number">
                    {String(
                      index + 1,
                    ).padStart(
                      2,
                      '0',
                    )}
                  </div>

                  <div className="lesson-row-copy">
                    <h2>
                      {lesson.title}
                    </h2>

                    <p>
                      {lesson.summary}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      openLesson(
                        lesson,
                      )
                    }
                  >
                    {completedLessons.includes(
                      lesson.id,
                    )
                      ? '✓ Review'
                      : 'Start →'}
                  </button>
                </article>
              ),
            )}
          </div>

          <div className="module-quiz-card">
            <div>
              <p className="eyebrow">END OF MODULE</p>
              <h2>{activeModule.quizTitle || `${activeModule.title} Quiz`}</h2>
              <p>
                Test the whole module at three levels: Quick Check, Standard,
                and Mastery. Questions reshuffle each time.
              </p>
            </div>

            <button
              className="primary-button"
              onClick={() => openModuleQuiz(activeModule)}
            >
              Take module quiz →
            </button>
          </div>
        </section>
      </main>
    )
  }

  /*
    TRACK PAGE
  */

  if (
    page === 'track' &&
    activeTrack
  ) {
    return (
      <main>
        <nav className="site-nav">
          <button
            className="brand-button"
            onClick={goHome}
          >
            IBase
          </button>

          <button
            className="back-button"
            onClick={openLearn}
          >
            ← All tracks
          </button>
        </nav>

        <section className="track-page">
          <p className="eyebrow">
            {activeTrack.label ||
              `TRACK ${activeTrack.number}`}
          </p>

          <h1>
            {activeTrack.title}
          </h1>

          <p className="page-intro">
            {
              activeTrack.description
            }
          </p>

          <div className="module-grid">
            {activeTrack.modules.map(
              (module) => (
                <article
                  key={module.id}
                  onClick={() =>
                    openModule(module)
                  }
                  className={
                    module.lessons
                      ? 'module-live'
                      : 'module-preview'
                  }
                >
                  <span>
                    {module.number}
                  </span>

                  <div>
                    {module.subtitle && (
                      <p className="module-tagline">
                        {
                          module.subtitle
                        }
                      </p>
                    )}

                    <h2>
                      {module.title}
                    </h2>

                    <p>
                      {
                        module.description
                      }
                    </p>
                  </div>

                  <footer>
                    <small>
                      {module.lessons
                        ? `${module.lessons.length} lessons`
                        : `${module.lessonCount || 0} planned lessons`}
                    </small>

                    <strong>
                      {module.lessons
                        ? 'Open module →'
                        : 'Coming soon'}
                    </strong>
                  </footer>
                </article>
              ),
            )}
          </div>

          <div className="track-exam-card">
            <div>
              <p className="eyebrow">TRACK EXAM</p>
              <h2>{activeTrack.title} Exam</h2>
              <p>
                Mix questions across every module in this track. Use the
                Mastery level once the individual module quizzes feel easy.
              </p>
            </div>

            <button
              className="primary-button"
              onClick={() => openTrackQuiz(activeTrack)}
            >
              Take track exam →
            </button>
          </div>
        </section>
      </main>
    )
  }

  /*
    LEARN PAGE
  */

  if (page === 'learn') {
    return (
      <main>
        <nav className="site-nav">
          <button
            className="brand-button"
            onClick={goHome}
          >
            IBase
          </button>

          <button
            className="back-button"
            onClick={goHome}
          >
            ← Back Home
          </button>
        </nav>

        <section className="curriculum">
          <p className="eyebrow">
            LEARN INVESTMENT BANKING
          </p>

          <h1>
            From zero finance
            knowledge to investment
            banking.
          </h1>

          <p className="page-intro">
            Start from the beginning or
            jump to exactly what you
            need. Concepts build on each
            other, and anything
            important can be refreshed
            along the way.
          </p>

          <div className="track-list">
            {tracks.map((track) => (
              <article
                className="track-card"
                key={track.id}
                onClick={() =>
                  openTrack(track)
                }
              >
                <div className="track-number">
                  {track.number}
                </div>

                <div className="track-copy">
                  <span>
                    {track.label ||
                      `TRACK ${track.number}`}
                  </span>

                  <h2>
                    {track.title}
                  </h2>

                  {track.tagline && (
                    <h3>
                      {track.tagline}
                    </h3>
                  )}

                  <p>
                    {track.description}
                  </p>
                </div>

                <button>
                  Explore track →
                </button>
              </article>
            ))}
          </div>

          <div className="curriculum-note">
            <strong>
              New to finance?
            </strong>

            <p>
              Start with Finance From
              Zero. Nothing important is
              assumed.
            </p>
          </div>

          <div className="cumulative-exam-card">
            <p className="eyebrow">CUMULATIVE</p>
            <h2>IBase Cumulative Exam</h2>
            <p>
              When you are ready, mix the entire learning curriculum together
              instead of relying on section order.
            </p>

            <button className="primary-button" onClick={openFinalQuiz}>
              Take cumulative exam →
            </button>
          </div>
        </section>
      </main>
    )
  }

  /*
    INTERVIEW PREP
  */

  if (page === 'interview') {
    return (
      <main>
        <nav className="site-nav">
          <button className="brand-button" onClick={goHome}>
            IBase
          </button>

          <span className="xp-display">{xp} XP</span>
        </nav>

        <InterviewPrep onBack={goHome} />
      </main>
    )
  }

  /*
    AI FOR BANKING
  */

  if (page === 'ai') {
    return (
      <main>
        <nav className="site-nav">
          <button className="brand-button" onClick={goHome}>
            IBase
          </button>

          <button className="back-button" onClick={goHome}>
            ← Back Home
          </button>
        </nav>

        <section className="ai-course-page">
          <p className="eyebrow">AI FOR BANKING</p>

          <h1>Use AI without becoming useless without it.</h1>

          <p className="page-intro">
            Nine practical lessons on research, filings, Excel, model
            checking, presentations, prompting, hallucinations, and
            confidentiality. The rule is simple: accelerate the work without
            outsourcing judgment.
          </p>

          <div className="ai-course-actions">
            <button
              className="primary-button"
              onClick={() => openModule(aiBankingModule, 'ai')}
            >
              Start AI course →
            </button>

            <button
              className="secondary-button"
              onClick={() => openModuleQuiz(aiBankingModule, 'ai')}
            >
              Take AI quiz
            </button>
          </div>

          <div className="ai-lesson-grid">
            {aiBankingModule.lessons.map((lesson, index) => (
              <article key={lesson.id}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h2>{lesson.title}</h2>
                <p>{lesson.summary}</p>
              </article>
            ))}
          </div>

          <div className="editorial-note wide-note">
            <strong>The non-negotiable</strong>
            <p>
              Never put confidential or restricted client information into an
              unapproved AI tool. Verification and confidentiality matter more
              than convenience.
            </p>
          </div>
        </section>
      </main>
    )
  }

  /*
    HOME PAGE
  */

  return (
    <main>
      <nav className="site-nav">
        <button
          className="brand-button"
          onClick={goHome}
        >
          IBase
        </button>

        <div className="nav-links">
          <button onClick={openLearn}>
            Learn IB
          </button>

          <button
            onClick={() => {
              setPage('interview')
              scrollTop()
            }}
          >
            Interview Prep
          </button>

          <button
            onClick={() => {
              setPage('ai')
              scrollTop()
            }}
          >
            AI for Banking
          </button>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">
          FINANCE FROM ZERO. BANKING
          FROM THERE.
        </p>

        <h1>
          Learn the finance.
          <br />
          Understand the why.
        </h1>

        <p className="subtitle">
          A complete, interactive path
          from basic financial concepts
          to investment banking,
          technical interviews, and
          analyst skills.
        </p>

        <button
          className="primary-button"
          onClick={openLearn}
        >
          Start learning
        </button>

        <p className="hero-small">
          Free. No account. Start from
          zero.
        </p>
      </section>

      <section className="paths">
        <article onClick={openLearn}>
          <span>01</span>

          <h2>Learn IB</h2>

          <p>
            Build financial knowledge
            from the ground up, then
            move into accounting,
            valuation, DCFs, M&A, and
            analyst skills.
          </p>

          <button>
            Explore the curriculum →
          </button>
        </article>

        <article
          onClick={() => {
            setPage('interview')
            scrollTop()
          }}
        >
          <span>02</span>

          <h2>
            Interview Prep
          </h2>

          <p>
            Turn what you learned into
            answers you can actually
            give under pressure.
          </p>

          <button>
            See interview prep →
          </button>
        </article>

        <article
          onClick={() => {
            setPage('ai')
            scrollTop()
          }}
        >
          <span>03</span>

          <h2>
            AI for Banking
          </h2>

          <p>
            Learn where AI helps in
            finance, how to verify its
            work, and where relying on
            it gets dangerous.
          </p>

          <button>
            Explore AI for banking →
          </button>
        </article>
      </section>

      <section className="home-aside">
        <p>
          <strong>
            IBase rule #1:
          </strong>{' '}
          understand it before you
          memorize it.
        </p>
      </section>
    </main>
  )
}

export default App