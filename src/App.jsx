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
import HomeNav from './components/HomeNav'
import SiteFooter from './components/SiteFooter'
import LegalPage from './components/LegalPage'
import NotFound from './components/NotFound'
import StudyDialog from './components/StudyDialog'
import SavedVocabulary from './components/SavedVocabulary'
import './App.css'
import './calm.css'

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
  saved,
  onToggle,
  storageError,
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
      <StudyDialog className="concept-modal" label="Concept definition" onClose={onClose}>
        <button
          className="concept-close" aria-label="Close definition"
          onClick={onClose}
        >
          ×
        </button>

        <p className="eyebrow">
          QUICK REFRESHER
        </p>

        <h2>{concept.name}</h2>
        <button className="secondary-button vocabulary-save" aria-pressed={saved} onClick={() => onToggle(conceptId)}>
          {saved ? 'Saved · Remove term' : 'Save term'}
        </button>
        {storageError && <p role="alert">{storageError}</p>}

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
      </StudyDialog>
    </div>
  )
}

const lessonEntries = tracks.flatMap(track => track.modules.flatMap(module =>
  module.lessons.map(lesson => ({ track, module, lesson }))))
const allEntries = [...lessonEntries, ...aiBankingModule.lessons.map(lesson =>
  ({ track: null, module: aiBankingModule, lesson }))]
const routeFromPath = () => {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const pages = { '/': 'home', '/learn': 'learn', '/interview': 'interview',
    '/ai': 'ai', '/vocabulary': 'vocabulary', '/review': 'review', '/privacy': 'privacy', '/terms': 'terms' }
  if (pages[path]) return { page: pages[path] }
  if (!/^\/(lesson|track|module)\/[^/]+$/.test(path)) return { page: 'not-found' }
  const [kind, id] = path.slice(1).split('/')
  if (kind === 'lesson') {
    const entry = allEntries.find(e => e.lesson.id === id)
    if (entry) return { ...entry, page: 'lesson' }
  }
  if (kind === 'track') {
    const track = tracks.find(t => t.id === id)
    if (track) return { track, page: 'track' }
  }
  if (kind === 'module') {
    const entry = allEntries.find(e => e.module.id === id)
    if (entry) return { ...entry, page: 'module' }
  }
  return { page: 'not-found' }
}
const followLink = (event, action) => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
  event.preventDefault()
  action()
}
const initialRoute = routeFromPath()
const pageFromPath = () => routeFromPath().page

function App() {
  const [savedTerms, setSavedTerms] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('ibase-saved-vocabulary') || '[]')
      return Array.isArray(stored) ? [...new Set(stored.filter(id => typeof id === 'string' && Object.hasOwn(concepts, id)))] : []
    } catch { return [] }
  })
  const [vocabularyOpen, setVocabularyOpen] = useState(false)
  const [vocabularyError, setVocabularyError] = useState('')
  const toggleSavedTerm = id => {
    const next = savedTerms.includes(id) ? savedTerms.filter(term => term !== id) : [...savedTerms, id]
    try {
      localStorage.setItem('ibase-saved-vocabulary', JSON.stringify(next))
      setSavedTerms(next)
      setVocabularyError('')
    } catch {
      setVocabularyError('Your browser could not save this change. Check that browser storage is available and try again.')
    }
  }
  const [search, setSearch] = useState('')
  const [outlineOpen, setOutlineOpen] = useState(() => window.matchMedia('(min-width: 701px)').matches)

  const [page, setPage] =
    useState(pageFromPath)

  const [activeTrack, setActiveTrack] =
    useState(initialRoute.track || null)

  const [activeModule, setActiveModule] =
    useState(initialRoute.module || null)

  const [moduleOrigin, setModuleOrigin] =
    useState(initialRoute.module === aiBankingModule ? 'ai' : 'track')

  const [quizConfig, setQuizConfig] =
    useState(null)

  const [activeLesson, setActiveLesson] =
    useState(initialRoute.lesson || null)

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

  useEffect(() => {
    const onPopState = () => {
      const route = routeFromPath()
      setActiveTrack(route.track || null)
      setActiveModule(route.module || null)
      setActiveLesson(route.lesson || null)
      setModuleOrigin(route.module === aiBankingModule ? 'ai' : 'track')
      setLessonStep(0)
      setSelectedAnswer(null)
      setShowFeedback(false)
      setPage(route.page)
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    const titles = {
      home: 'IBase | Learn Investment Banking from Zero',
      learn: 'Investment Banking Curriculum | IBase',
      interview: 'Investment Banking Interview Prep | IBase',
      ai: 'AI for Banking Course | IBase',
      vocabulary: 'Saved vocabulary | IBase',
      review: 'Review Queue | IBase',
      quiz: 'Quiz | IBase',
      privacy: 'Privacy Policy | IBase',
      terms: 'Terms and Conditions | IBase',
      'not-found': 'Page Not Found | IBase',
    }

    let title = titles[page] || 'IBase'

    if (page === 'track' && activeTrack) {
      title = `${activeTrack.title} | IBase`
    } else if (page === 'module' && activeModule) {
      title = `${activeModule.title} | IBase`
    } else if (page === 'lesson' && activeLesson) {
      title = `${activeLesson.title} | IBase`
    } else if (page === 'quiz' && quizConfig?.title) {
      title = `${quizConfig.title} | IBase`
    }

    document.title = title

    const descriptions = {
      home:
        'Free investment banking lessons, quizzes, interview practice, recruiting guides, and analyst skill training for students starting from zero.',
      learn:
        'Learn finance and investment banking from the ground up with structured lessons, worked examples, quizzes, and cumulative exams.',
      interview:
        'Practice investment banking technical, behavioral, markets, and deal interview questions by topic and difficulty.',
      ai:
        'Learn practical AI workflows for banking research, filings, Excel, model checking, presentations, prompting, verification, and confidentiality.',
      privacy:
        'Read how IBase handles local learning data, browser storage, and privacy.',
      terms:
        'Read the terms and conditions for using IBase educational content.',
    }

    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', descriptions[page] || descriptions.home)
    }
  }, [page, activeTrack, activeModule, activeLesson, quizConfig])

  useEffect(() => {
    const paths = { home: '/', learn: '/learn', interview: '/interview', ai: '/ai',
      vocabulary: '/vocabulary', review: '/review', privacy: '/privacy', terms: '/terms' }
    const path = page === 'lesson' && activeLesson ? `/lesson/${activeLesson.id}`
      : page === 'module' && activeModule ? `/module/${activeModule.id}`
      : page === 'track' && activeTrack ? `/track/${activeTrack.id}` : paths[page]
    if (path && window.location.pathname !== path) window.history.pushState({}, '', path)
  }, [page, activeLesson, activeModule, activeTrack])

  useEffect(() => {
    const heading = document.querySelector('.lesson-card h1') || document.querySelector('main h1')
    if (heading) { heading.setAttribute('tabindex', '-1'); heading.focus({ preventScroll: true }) }
  }, [page, lessonStep])

  useEffect(() => {
    const onEscape = event => {
      if (event.key === 'Escape') { setNotesOpen(false); setActiveConcept(null) }
    }
    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [])

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
      behavior: 'auto',
    })
  }

  const goHome = () => {
    setPage('home')
    scrollTop()
  }

  const openVocabulary = () => { setPage('vocabulary'); scrollTop() }

  const openLearn = () => {
    setPage('learn')
    scrollTop()
  }

  const openInterview = () => {
    setPage('interview')
    scrollTop()
  }

  const openAI = () => {
    setPage('ai')
    scrollTop()
  }

  const openPrivacy = () => {
    window.history.pushState({}, '', '/privacy')
    setPage('privacy')
    scrollTop()
  }

  const openTerms = () => {
    window.history.pushState({}, '', '/terms')
    setPage('terms')
    scrollTop()
  }

  const renderFooter = () => (
    <SiteFooter
      onHome={goHome}
      onLearn={openLearn}
      onInterview={openInterview}
      onAI={openAI}
      onVocabulary={openVocabulary}
      onPrivacy={openPrivacy}
      onTerms={openTerms}
    />
  )

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

  const startEntry = ({ track, module, lesson }) => {
    setActiveTrack(track)
    setActiveModule(module)
    setModuleOrigin(module === aiBankingModule ? 'ai' : 'track')
    openLesson(lesson)
  }
  const nextEntry = lessonEntries.find(entry => !completedLessons.includes(entry.lesson.id))
  const matchingEntries = lessonEntries.filter(entry =>
    entry.lesson.title.toLowerCase().includes(search.trim().toLowerCase()))

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

  const markConceptReviewed = (conceptId) => {
    setNeedsReview((current) =>
      current.filter((id) => id !== conceptId),
    )
  }

  const curriculumLessonIds = [
    ...new Set(
      tracks.flatMap((track) =>
        (track.modules || []).flatMap((module) =>
          (module.lessons || []).map((lesson) => lesson.id),
        ),
      ),
    ),
  ]

  const completedCurriculumCount = curriculumLessonIds.filter(
    (lessonId) => completedLessons.includes(lessonId),
  ).length

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

  if (page === 'vocabulary') {
    return <main>
      <HomeNav onHome={goHome} onLearn={openLearn} onInterview={openInterview} onAI={openAI} onVocabulary={openVocabulary} />
      <section className="vocabulary-page">
        <SavedVocabulary savedTerms={savedTerms} onRemove={toggleSavedTerm} storageError={vocabularyError} />
        <button className="secondary-button" onClick={openLearn}>Browse courses →</button>
      </section>
      {renderFooter()}
    </main>
  }

  if (page === 'privacy' || page === 'terms') {
    return (
      <main>
        <nav className="site-nav">
          <button className="brand-button" onClick={goHome} aria-label="IBase home">
            IBase
          </button>
        </nav>

        <LegalPage type={page} onBack={goHome} />
        {renderFooter()}
      </main>
    )
  }

  if (page === 'not-found') {
    return (
      <main>
        <nav className="site-nav">
          <button className="brand-button" onClick={goHome} aria-label="IBase home">
            IBase
          </button>
        </nav>

        <NotFound onHome={goHome} />
        {renderFooter()}
      </main>
    )
  }

  /*
    REVIEW QUEUE
  */

  if (page === 'review') {
    return (
      <main>
        <nav className="site-nav">
          <button className="brand-button" onClick={goHome}>
            IBase
          </button>

          <button className="back-button" onClick={openLearn}>
            ← Back to curriculum
          </button>
        </nav>

        <section className="review-page">
          <p className="eyebrow">REVIEW QUEUE</p>
          <h1>Turn weak concepts into strong ones.</h1>
          <p className="page-intro">
            Missed quiz concepts, repeated written-answer misses, and skipped
            questions land here. Review the refresher, then clear the concept
            when it feels comfortable.
          </p>

          {needsReview.length ? (
            <div className="review-grid">
              {needsReview.map((conceptId) => {
                const concept = concepts[conceptId]

                if (!concept) return null

                return (
                  <article key={conceptId}>
                    <span>NEEDS REVIEW</span>
                    <h2>{concept.name}</h2>
                    <p>{concept.definition}</p>

                    <div>
                      <button
                        className="secondary-button"
                        onClick={() => setActiveConcept(conceptId)}
                      >
                        Open refresher
                      </button>

                      <button
                        className="primary-button"
                        onClick={() => markConceptReviewed(conceptId)}
                      >
                        Mark reviewed
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>
          ) : (
            <div className="review-empty">
              <h2>Your review queue is clear.</h2>
              <p>
                Missed concepts from lessons and quizzes will appear here
                automatically.
              </p>
            </div>
          )}
        </section>

        {activeConcept && (
          <ConceptModal
            conceptId={activeConcept}
            saved={savedTerms.includes(activeConcept)}
            onToggle={toggleSavedTerm}
            storageError={vocabularyError}
            onClose={() => setActiveConcept(null)}
          />
        )}
      </main>
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
          onMissedConcepts={markConceptsForReview}
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

        <section className={`lesson-shell ${outlineOpen ? 'outline-open' : ''}`}>
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <button onClick={openLearn}>All courses</button><span>/</span>
            <button onClick={() => { setPage('module'); scrollTop() }}>{activeModule.title}</button>
          </nav>
          <button className="outline-toggle" aria-expanded={outlineOpen} aria-controls="lesson-outline"
            onClick={() => setOutlineOpen(value => !value)}>{outlineOpen ? 'Hide outline' : 'Show outline'}</button>
          {outlineOpen && <aside id="lesson-outline" className="lesson-outline">
            <p className="eyebrow">LESSON OUTLINE</p>
            <ol>{activeLesson.steps.map((item, index) => <li key={index} aria-current={index === lessonStep ? 'step' : undefined}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span>{item.title || item.eyebrow || item.type}</span>
              {index === lessonStep && <strong>Current</strong>}
            </li>)}</ol>
          </aside>}
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
              <button onClick={() => setVocabularyOpen(true)}>Saved vocabulary</button>
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

          <div className="progress-track" role="progressbar" aria-label="Lesson progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)}>
            <div
              className="progress-fill"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          {lessonStep === 0 && <details className="getting-started lesson-help">
            <summary>First lesson? Here’s how it works.</summary>
            <p>Read each step and use the button below to continue. Try the questions and check the feedback. Notes saves your own reminders. Click highlighted terms for a definition.</p>
            <p>At the end, choose Next lesson or Back to module to save completion. Completed lessons and notes stay in this browser; reopening a lesson starts it from the beginning.</p>
          </details>}
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
                      aria-pressed={selectedAnswer === index}
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
                  role="status"
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
                aria-label="Lesson answer"
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
                aria-label="Numeric lesson answer"
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
                aria-label="Written lesson answer"
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
                            {item}
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
            <StudyDialog className="notes-panel" label="Lesson notes" returnFocus=".notes-button" onClose={() => setNotesOpen(false)}>
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
                  aria-label="Close lesson notes"
                  onClick={() =>
                    setNotesOpen(false)
                  }
                >
                  ×
                </button>
              </div>

              <textarea
                aria-label="Lesson notes"
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
              />

              <p className="notes-save">
                Saved automatically on
                this device.
              </p>
            </StudyDialog>
          </div>
        )}

        {vocabularyOpen && <div className="notes-overlay" onClick={() => setVocabularyOpen(false)}>
          <StudyDialog className="vocabulary-dialog" label="Saved vocabulary" onClose={() => setVocabularyOpen(false)}>
            <button className="secondary-button" onClick={() => setVocabularyOpen(false)}>Back to lesson</button>
            <SavedVocabulary savedTerms={savedTerms} onRemove={toggleSavedTerm} storageError={vocabularyError} />
          </StudyDialog>
        </div>}

        {/* CONCEPT POPUP */}

        {activeConcept && (
          <ConceptModal
            conceptId={activeConcept}
            saved={savedTerms.includes(activeConcept)}
            onToggle={toggleSavedTerm}
            storageError={vocabularyError}
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
                    aria-label={`${completedLessons.includes(lesson.id) ? 'Review' : 'Start'} ${lesson.title}`}
                    onClick={() =>
                      openLesson(
                        lesson,
                      )
                    }
                  >
                    {completedLessons.includes(
                      lesson.id,
                    )
                      ? 'Review'
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

        {renderFooter()}
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
            ← All courses
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
                  className="module-live"
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
                      {module.lessons.length} lessons
                    </small>

                    <button onClick={() => openModule(module)}>View lessons →</button>
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

        {renderFooter()}
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
            Your learning path.
          </h1>

          <p className="page-intro">
            New to finance? Begin with Finance From Zero below and follow the lessons in order. Each course is divided into modules: small groups of lessons on one topic. Already know the basics? Browse or search for a topic.
          </p>

          {(completedCurriculumCount > 0 || xp > 0 || needsReview.length > 0) && <div className="learning-dashboard">
            <article>
              <span>CURRICULUM PROGRESS</span>
              <strong>
                {completedCurriculumCount} / {curriculumLessonIds.length}
              </strong>
              <p>lessons completed</p>
            </article>

            <article>
              <span>REVIEW QUEUE</span>
              <strong>{needsReview.length}</strong>
              <p>concepts to revisit</p>
              <button
                onClick={() => {
                  setPage('review')
                  scrollTop()
                }}
              >
                Open review queue →
              </button>
            </article>

            <article>
              <span>Learning points</span>
              <strong>{xp}</strong>
              <p>earned on this device</p>
            </article>
          </div>}

          <div className="resume-strip">
            <div><span className="eyebrow">{completedCurriculumCount ? 'CONTINUE LEARNING' : 'BEGIN HERE'}</span>
              <p>{completedCurriculumCount ? 'Pick up with your next unfinished lesson.' : 'Your starting point: What Is a Business? No prior knowledge needed.'}</p>
              <small>Progress and notes are saved in this browser on this device. No account required.</small></div>
            {nextEntry ? <button className="primary-button" onClick={() => startEntry(nextEntry)}>{nextEntry.lesson.title} →</button>
              : <strong>Curriculum complete. Use the review queue or cumulative exam.</strong>}
          </div>
          <div className="index-toolbar">
            <label htmlFor="lesson-search">Search lesson titles</label>
            <input id="lesson-search" type="search" value={search} placeholder="e.g. cash flow, DCF, networking"
              onChange={event => setSearch(event.target.value)} />
            {search && <button onClick={() => setSearch('')}>Clear search</button>}
          </div>
          {search.trim() ? <section className="search-results" aria-label="Lesson search results">
            <p role="status">{matchingEntries.length} matching lessons</p>
            {matchingEntries.map(entry => <div className="index-row" key={entry.lesson.id}>
              <span className="module-code">{entry.module.number}</span>
              <div><h2>{entry.lesson.title}</h2><small>{entry.track.title} / {entry.module.title}</small></div>
              <span>{completedLessons.includes(entry.lesson.id) ? 'Complete' : 'Unfinished'}</span>
              <a href={`/lesson/${entry.lesson.id}`} onClick={event => followLink(event, () => { startEntry(entry) })}>Open lesson →</a>
            </div>)}
            {!matchingEntries.length && <p>Try another lesson title or clear your search to browse all modules.</p>}
          </section> : <div className="curriculum-index">
            {tracks.map(track => <section key={track.id}>
              <div className="index-heading"><span className="module-code">Track {track.number}</span>
                <h2>{track.title}</h2><button onClick={() => openTrack(track)}>View course →</button></div>
              <div className="index-columns" aria-hidden="true"><span>Code</span><span>Module</span><span>Progress</span><span></span></div>
              {track.modules.map(module => {
                const done = module.lessons.filter(lesson => completedLessons.includes(lesson.id)).length
                return <div className="index-row" key={module.id}>
                  <span className="module-code">{module.number}</span>
                  <div><h3>{module.title}</h3><small>{module.lessons.length} lessons</small></div>
                  <span className="index-completion">{done === module.lessons.length ? '✓ Complete' : `${done} / ${module.lessons.length}`}</span>
                  <a href={`/module/${module.id}`} onClick={event => followLink(event, () => { setActiveTrack(track); openModule(module) })}>View lessons →</a>
                </div>
              })}
            </section>)}
          </div>}

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

        {renderFooter()}
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

        <InterviewPrep onBack={goHome} onLearn={openLearn} />
        {renderFooter()}
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

          <h1>Learn to use AI in banking.</h1>

          <p className="page-intro">
            {aiBankingModule.lessons.length} lessons on using artificial intelligence for research, spreadsheets, and presentations. Learn how to ask useful questions, check the results, and protect confidential information. New to finance? Start with the main courses first.
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
                <a href={`/lesson/${lesson.id}`} onClick={event => followLink(event, () => { startEntry({ track: null, module: aiBankingModule, lesson }) })}>Open lesson →</a>
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

        {renderFooter()}
      </main>
    )
  }

  /*
    HOME PAGE
  */

  return (
    <main>
      <HomeNav
        onHome={goHome}
        onLearn={openLearn}
        onInterview={openInterview}
        onAI={openAI}
        onVocabulary={openVocabulary}
      />

      <section className="workstation-home">
        {!(completedCurriculumCount > 0 || xp > 0 || needsReview.length > 0) && <div className="home-opening">
          <div className="home-introduction">
            <p className="eyebrow">Free finance lessons for complete beginners</p>
            <h1>Learn finance.<br />Understand investment banking.</h1>
            <p className="subtitle">IBase teaches you how businesses make money and how investment bankers help companies raise money or buy other businesses. Start with the basics, then build toward job interviews and practical work skills. No finance knowledge needed.</p>
            <div className="home-actions">
              <a className="primary-button" href={`/lesson/${lessonEntries[0].lesson.id}`} onClick={event => followLink(event, () => { startEntry(lessonEntries[0]) })}>Start your first lesson →</a>
              <a className="secondary-button" href="/learn" onClick={event => followLink(event, () => { openLearn() })}>Browse all courses</a>
            </div>
            <p className="access-line">Free · No account required</p>
            <p className="local-note">Progress and notes save automatically in this browser. Use the same browser and device to return to them.</p>
          </div>
          <aside className="curriculum-preview" aria-label="Curriculum preview">
            <h2 className="panel-heading">New here? Start with the basics.</h2><p className="beginner-caption">Take these lessons in order. Each combines an explanation, an example, and questions to try.</p>
            {lessonEntries.slice(0, 3).map((entry, index) => <div className="preview-track" key={entry.lesson.id}>
              <a href={`/lesson/${entry.lesson.id}`} onClick={event => followLink(event, () => startEntry(entry))}>
                <span className="lesson-order">{index + 1}</span>{entry.lesson.title}<span aria-hidden="true">→</span>
              </a>
            </div>)}
            <a className="preview-all" href="/learn" onClick={event => followLink(event, () => { openLearn() })}>See all {lessonEntries.length} lessons →</a>
          </aside>
        </div>}
        {(completedCurriculumCount > 0 || xp > 0 || needsReview.length > 0) && (
          <section className="returning-dashboard" aria-label="Your learning dashboard">
            <h1 className="returning-title">Welcome back.</h1>
            <div className="returning-dashboard-grid">
              <div>
                <span className="dashboard-label">Progress</span>
                <strong>{completedCurriculumCount} / {curriculumLessonIds.length}</strong>
                <p>curriculum lessons complete</p>
              </div>
              <div>
                <span className="dashboard-label">Learning points</span>
                <strong>{xp}</strong>
                <p>earned on this device</p>
              </div>
              <div>
                <span className="dashboard-label">Review</span>
                <strong>{needsReview.length}</strong>
                <p>{needsReview.length === 1 ? 'concept needs attention' : 'concepts need attention'}</p>
              </div>
              <div className="returning-dashboard-action">
                {nextEntry ? (
                  <button className="primary-button" onClick={() => startEntry(nextEntry)}>
                    Continue: {nextEntry.lesson.title} →
                  </button>
                ) : (
                  <button className="primary-button" onClick={openLearn}>Open curriculum →</button>
                )}
                {needsReview.length > 0 && (
                  <button className="secondary-button" onClick={() => { setPage('review'); scrollTop() }}>
                    Review queue →
                  </button>
                )}
              </div>
            </div>
            <p className="local-note">Saved locally in this browser on this device. No account required.</p>
          </section>
        )}
        <details className="getting-started">
          <summary>How does learning on IBase work?</summary>
          <ol>
            <li><strong>Read and try.</strong> Work through explanations and examples, then check your understanding with practice questions.</li>
            <li><strong>Finish the lesson.</strong> Use the final Next lesson or Back to module button to record completion and earn 50 learning points (XP).</li>
            <li><strong>Come back and review.</strong> Use Continue on the homepage for your next unfinished lesson. Open Review to revisit concepts that need practice.</li>
          </ol>
          <p>Notes, scores, and completed lessons stay in this browser on this device. They do not sync to another device, and clearing browser storage removes them.</p>
        </details>
        <section className="area-directory" aria-label="Learning areas">
          <h2 className="panel-heading">What would you like to do?</h2>
          {[['ledger', '01', 'Learn the basics', 'Start here if finance is new to you. Follow courses on businesses, money, and financial statements, then move on to banking and job skills.', '/learn', openLearn, 'Browse courses'],
            ['practice', '02', 'Prepare for interviews', 'Already know some finance? Try interview questions, compare your answers with examples, or practice a full mock interview.', '/interview', openInterview, 'Practice interviews'],
            ['tools', '03', 'Explore AI for banking', 'Learn how artificial intelligence can help with research and everyday banking tasks, and how to check its work. A useful next step after the basics.', '/ai', openAI, 'Explore AI lessons']].map(([, code, title, body, href, action, label]) =>
              <div className="directory-row" key={code}>
                <h2>{title}</h2><p>{body}</p><a href={href} onClick={event => followLink(event, () => { action() })}>{label} →</a></div>)}
        </section>

      </section>

      {renderFooter()}
    </main>
  )
}

export default App