import { useEffect, useMemo, useRef, useState } from 'react'
import { tracks } from '../data/curriculum'
import { aiBankingModule } from '../data/modules/aiBanking'
import { concepts } from '../data/concepts'
import { interviewQuestions } from '../data/interviewQuestions'

const lessonIndex = [
  ...tracks.flatMap((track) =>
    track.modules.flatMap((module) =>
      module.lessons.map((lesson) => ({ lesson, module, track })),
    ),
  ),
  ...aiBankingModule.lessons.map((lesson) => ({
    lesson, module: aiBankingModule, track: null,
  })),
]

const conceptIndex = Object.entries(concepts).map(([id, concept]) => ({
  id, ...concept,
}))

function GlobalSearchPage({ onBack, onLesson, onConcept, onInterviewQuestion }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const results = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return []

    const rank = (title, supportingText) => {
      const name = title.toLowerCase()
      if (name === term) return 0
      if (name.startsWith(term)) return 1
      if (name.includes(term)) return 2
      if (supportingText.toLowerCase().includes(term)) return 3
      return -1
    }

    const matches = []

    lessonIndex.forEach((entry) => {
      const score = rank(entry.lesson.title,
        [entry.lesson.summary, entry.module.title, entry.track?.title,
          ...(entry.lesson.concepts || [])].filter(Boolean).join(' '))
      if (score >= 0) matches.push({
        id: 'lesson-' + entry.lesson.id,
        type: 'Lesson',
        title: entry.lesson.title,
        detail: [entry.track?.title || 'AI for Banking', entry.module.title].join(' / '),
        score,
        action: () => onLesson(entry),
      })
    })

    conceptIndex.forEach((concept) => {
      const score = rank(concept.name,
        [concept.definition, concept.example, concept.whyItMatters].join(' '))
      if (score >= 0) matches.push({
        id: 'concept-' + concept.id,
        type: 'Concept',
        title: concept.name,
        detail: concept.definition,
        score,
        action: () => onConcept(concept.id),
      })
    })

    interviewQuestions.forEach((question) => {
      const score = rank(question.prompt,
        [question.category, question.strongAnswer, ...question.keyPoints].join(' '))
      if (score >= 0) matches.push({
        id: 'interview-' + question.id,
        type: 'Interview question',
        title: question.prompt,
        detail: question.category + ' / ' + question.difficulty,
        score,
        action: () => onInterviewQuestion(question.id),
      })
    })

    return matches.sort((a, b) => a.score - b.score ||
      a.title.localeCompare(b.title)).slice(0, 30)
  }, [query, onLesson, onConcept, onInterviewQuestion])

  return (
    <section className="global-search-page">
      <button className="back-button" onClick={onBack}>← Back Home</button>
      <header className="global-search-header">
        <p className="eyebrow">FIND SOMETHING</p>
        <h1>Search IBase.</h1>
        <p className="page-intro">
          Find lessons, finance definitions, and interview questions.
          Press Cmd+K on Mac or Ctrl+K on Windows from anywhere to return here.
        </p>
      </header>

      <label className="global-search-label" htmlFor="global-search-input">Search the entire site</label>
      <input
        ref={inputRef}
        id="global-search-input"
        className="global-search-input"
        type="search"
        placeholder="Try WACC, goodwill, working capital, or paper LBO"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        autoComplete="off"
      />
      {query.trim() ? (
        <div className="global-search-results">
          <p className="global-search-count" role="status">{results.length === 30 ? 'Top 30 results' : results.length + ' results'} for “{query.trim()}”</p>
          {results.length ? results.map((item) => (
            <button className="global-search-result" key={item.id} onClick={item.action}>
              <span className="eyebrow">{item.type}</span>
              <strong>{item.title}</strong>
              <small>{item.detail}</small>
              <span className="global-search-arrow" aria-hidden="true">→</span>
            </button>
          )) : <p>No matches yet. Try a broader term, such as valuation or accounting.</p>}
        </div>
      ) : (
        <div className="global-search-tips">
          <p className="eyebrow">POPULAR STARTING POINTS</p>
          {['Accounting', 'WACC', 'DCF', 'Goodwill', 'Networking', 'Paper LBO'].map((term) => (
            <button key={term} onClick={() => setQuery(term)}>{term} →</button>
          ))}
        </div>
      )}
    </section>
  )
}

export default GlobalSearchPage
