import { useEffect, useMemo, useState } from 'react'
import {
  interviewCategories,
  interviewDifficulties,
  interviewQuestions,
} from '../data/interviewQuestions'
import { shuffle } from '../utils/quizBuilder'

function InterviewPrep({ onBack }) {
  const [screen, setScreen] = useState('home')
  const [category, setCategory] = useState('Accounting')
  const [difficulty, setDifficulty] = useState('All')
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [answer, setAnswer] = useState('')
  const [revealed, setRevealed] = useState(false)
  const [voiceSupported, setVoiceSupported] = useState(false)
  const [listening, setListening] = useState(false)

  const [weakIds, setWeakIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('ibase-interview-review')) || []
    } catch {
      return []
    }
  })

  const [mockQuestions, setMockQuestions] = useState([])
  const [mockIndex, setMockIndex] = useState(0)
  const [mockRatings, setMockRatings] = useState([])

  useEffect(() => {
    setVoiceSupported(
      Boolean(window.SpeechRecognition || window.webkitSpeechRecognition),
    )
  }, [])

  useEffect(() => {
    localStorage.setItem('ibase-interview-review', JSON.stringify(weakIds))
  }, [weakIds])

  const filteredQuestions = useMemo(() => {
    return interviewQuestions.filter((question) => {
      const categoryMatch =
        category === 'All' || question.category === category

      const difficultyMatch =
        difficulty === 'All' || question.difficulty === difficulty

      return categoryMatch && difficultyMatch
    })
  }, [category, difficulty])

  const resetAnswer = () => {
    setAnswer('')
    setRevealed(false)
    setListening(false)
  }

  const pickPracticeQuestion = (pool = filteredQuestions) => {
    const picked = shuffle(pool)[0] || null
    setCurrentQuestion(picked)
    resetAnswer()
  }

  const startPractice = () => {
    setScreen('practice')
    pickPracticeQuestion()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const startWeakReview = () => {
    const pool = interviewQuestions.filter((question) =>
      weakIds.includes(question.id),
    )

    if (!pool.length) return

    setScreen('practice')
    setCurrentQuestion(shuffle(pool)[0])
    resetAnswer()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const startMock = () => {
    const behavioral = shuffle(
      interviewQuestions.filter((q) => q.category === 'Behavioral'),
    ).slice(0, 2)

    const technical = shuffle(
      interviewQuestions.filter(
        (q) =>
          !['Behavioral', 'Markets', 'Deals'].includes(q.category),
      ),
    ).slice(0, 5)

    const marketDeal = shuffle(
      interviewQuestions.filter((q) =>
        ['Markets', 'Deals'].includes(q.category),
      ),
    ).slice(0, 1)

    const questions = shuffle([
      ...behavioral,
      ...technical,
      ...marketDeal,
    ])

    setMockQuestions(questions)
    setMockIndex(0)
    setMockRatings([])
    setCurrentQuestion(questions[0])
    resetAnswer()
    setScreen('mock')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const startVoice = () => {
    const Recognition =
      window.SpeechRecognition || window.webkitSpeechRecognition

    if (!Recognition) return

    const recognition = new Recognition()
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = 'en-US'

    recognition.onstart = () => setListening(true)

    recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript || ''

      setAnswer((current) =>
        current ? `${current} ${transcript}` : transcript,
      )
    }

    recognition.onerror = () => setListening(false)
    recognition.onend = () => setListening(false)

    recognition.start()
  }

  const markWeak = (questionId) => {
    setWeakIds((current) => [...new Set([...current, questionId])])
  }

  const markStrong = (questionId) => {
    setWeakIds((current) => current.filter((id) => id !== questionId))
  }

  const rateQuestion = (rating) => {
    if (!currentQuestion) return

    if (rating === 'weak') {
      markWeak(currentQuestion.id)
    } else {
      markStrong(currentQuestion.id)
    }

    if (screen === 'mock') {
      const nextRatings = [
        ...mockRatings,
        {
          questionId: currentQuestion.id,
          rating,
        },
      ]

      setMockRatings(nextRatings)

      if (mockIndex >= mockQuestions.length - 1) {
        setScreen('mock-summary')
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      const nextIndex = mockIndex + 1
      setMockIndex(nextIndex)
      setCurrentQuestion(mockQuestions[nextIndex])
      resetAnswer()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const pool =
      screen === 'practice' && weakIds.includes(currentQuestion.id)
        ? interviewQuestions.filter((question) =>
            weakIds.includes(question.id),
          )
        : filteredQuestions

    pickPracticeQuestion(pool.length ? pool : filteredQuestions)
  }

  if (screen === 'mock-summary') {
    const strongCount = mockRatings.filter(
      (rating) => rating.rating === 'strong',
    ).length

    return (
      <section className="interview-page">
        <div className="interview-shell">
          <button className="back-button" onClick={() => setScreen('home')}>
            ← Interview Prep
          </button>

          <div className="interview-summary">
            <p className="eyebrow">MOCK COMPLETE</p>
            <h1>
              {strongCount >= 7
                ? 'Strong round.'
                : strongCount >= 5
                  ? 'Good base. Tighten the misses.'
                  : 'Run it again after reviewing.'}
            </h1>

            <div className="quiz-score">
              <strong>
                {strongCount} / {mockQuestions.length}
              </strong>
              <span>self-rated strong</span>
            </div>

            <p>
              Questions you marked “Needs work” were added to your review
              queue.
            </p>

            <div className="quiz-result-actions">
              <button
                className="secondary-button"
                onClick={() => setScreen('home')}
              >
                Back to prep
              </button>

              <button className="primary-button" onClick={startMock}>
                Run another mock
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if ((screen === 'practice' || screen === 'mock') && currentQuestion) {
    return (
      <section className="interview-page">
        <div className="interview-shell">
          <div className="interview-runner-top">
            <button className="back-button" onClick={() => setScreen('home')}>
              ← Exit
            </button>

            {screen === 'mock' && (
              <span>
                Question {mockIndex + 1} / {mockQuestions.length}
              </span>
            )}
          </div>

          <div className="interview-question-card">
            <div className="interview-question-meta">
              <span>{currentQuestion.category}</span>
              <span>{currentQuestion.difficulty}</span>
            </div>

            <h1>{currentQuestion.prompt}</h1>

            <p className="interview-hint">
              Answer like you are actually in the interview. Then reveal the
              benchmark and grade yourself.
            </p>

            <textarea
              className="interview-answer"
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              placeholder="Type your answer here..."
            />

            <div className="interview-answer-tools">
              {voiceSupported && (
                <button
                  className="secondary-button"
                  onClick={startVoice}
                  disabled={listening}
                >
                  {listening ? 'Listening…' : '🎙 Say answer'}
                </button>
              )}

              {!revealed && (
                <button
                  className="primary-button"
                  onClick={() => setRevealed(true)}
                >
                  Reveal strong answer
                </button>
              )}
            </div>

            {revealed && (
              <div className="interview-benchmark">
                <p className="eyebrow">STRONG ANSWER</p>
                <p>{currentQuestion.strongAnswer}</p>

                <div className="interview-key-points">
                  <strong>Key points</strong>

                  {currentQuestion.keyPoints.map((point) => (
                    <span key={point}>✓ {point}</span>
                  ))}
                </div>

                <div className="interview-self-grade">
                  <p>How did your answer compare?</p>

                  <button
                    className="secondary-button"
                    onClick={() => rateQuestion('weak')}
                  >
                    Needs work
                  </button>

                  <button
                    className="primary-button"
                    onClick={() => rateQuestion('strong')}
                  >
                    Got it
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="interview-page">
      <div className="interview-shell">
        <button className="back-button" onClick={onBack}>
          ← Back Home
        </button>

        <div className="interview-intro">
          <p className="eyebrow">INTERVIEW PREP</p>

          <h1>Practice like someone is actually across the table.</h1>

          <p className="page-intro">
            No paid AI grader. Give the answer yourself, reveal a strong
            benchmark, and mark what needs work. The weak-question queue stays
            on this device.
          </p>
        </div>

        <div className="interview-mode-grid">
          <article>
            <span>01</span>
            <h2>Practice Mode</h2>
            <p>
              Drill a specific topic and difficulty until the answer comes out
              naturally.
            </p>

            <label>
              Topic
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="All">All topics</option>
                {interviewCategories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Difficulty
              <select
                value={difficulty}
                onChange={(event) => setDifficulty(event.target.value)}
              >
                <option value="All">All levels</option>
                {interviewDifficulties.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <button className="primary-button" onClick={startPractice}>
              Start practice →
            </button>
          </article>

          <article>
            <span>02</span>
            <h2>Mock Interview</h2>
            <p>
              Eight mixed questions: behavioral, technical, and markets/deals.
              No hints until you reveal the benchmark.
            </p>

            <div className="mock-breakdown">
              <span>2 behavioral</span>
              <span>5 technical</span>
              <span>1 markets / deal</span>
            </div>

            <button className="primary-button" onClick={startMock}>
              Start mock →
            </button>
          </article>
        </div>

        <div className="interview-review-card">
          <div>
            <p className="eyebrow">REVIEW QUEUE</p>
            <h2>{weakIds.length} questions need work</h2>
            <p>
              Anything you mark “Needs work” stays here until you later mark it
              “Got it.”
            </p>
          </div>

          <button
            className="secondary-button"
            onClick={startWeakReview}
            disabled={!weakIds.length}
          >
            Review weak questions →
          </button>
        </div>
      </div>
    </section>
  )
}

export default InterviewPrep
