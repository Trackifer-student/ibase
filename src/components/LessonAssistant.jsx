import { useEffect, useRef, useState } from 'react'
import StudyDialog from './StudyDialog'
import './LessonAssistant.css'

export default function LessonAssistant({ lesson, stepIndex, open, onClose }) {
  const [draft, setDraft] = useState('')
  const [messages, setMessages] = useState([])
  const [pending, setPending] = useState('')
  const [error, setError] = useState('')
  const request = useRef(null)
  const answerEnd = useRef(null)
  const hintOnly = ['mcq', 'fill', 'number', 'written'].includes(lesson.steps[stepIndex].type)
  useEffect(() => () => request.current?.abort(), [])
  const close = () => { request.current?.abort(); request.current = null; setPending(''); onClose() }
  useEffect(() => { if (open && messages.length) answerEnd.current?.scrollIntoView({ block: 'nearest' }) }, [messages, open])

  async function ask(question = draft) {
    const text = question.trim()
    if (!text || text.length > 600 || request.current) return
    const controller = new AbortController()
    request.current = controller
    setDraft(text)
    setPending(text)
    setError('')
    const timer = setTimeout(() => controller.abort(), 30000)
    try {
      const result = await fetch('/api/lesson-assistant', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: controller.signal,
        body: JSON.stringify({ lessonId: lesson.id, stepIndex, message: text,
          history: messages.slice(-4).map(({ role, content }) => ({ role, content })) }),
      })
      const data = await result.json()
      if (!result.ok) throw new Error(data.error || 'The assistant is unavailable. Please try again later.')
      if (typeof data.answer !== 'string' || !data.answer.trim()) throw new Error('The assistant returned an empty answer. Please try again.')
      if (request.current !== controller) return
      const sources = Array.isArray(data.sources) ? data.sources.filter(source => typeof source.title === 'string' && /^\/lesson\/[a-z0-9-]+$/.test(source.href)) : []
      setMessages(previous => [...previous.slice(-10), { role: 'user', content: text }, { role: 'assistant', content: data.answer, sources }])
      setDraft('')
    } catch (failure) {
      if (request.current === controller) setError(failure.name === 'AbortError' ? 'That answer took too long. Please try again.' : failure instanceof SyntaxError ? 'The assistant is not connected on this preview yet. The lesson still works.' : failure.message || 'Could not connect. Please try again.')
    } finally {
      clearTimeout(timer)
      if (request.current === controller) { request.current = null; setPending('') }
    }
  }
  if (!open) return null
  return <div className="assistant-overlay" onClick={close}>
    <StudyDialog className="lesson-assistant" label="Ask about this lesson" returnFocus=".assistant-button" onClose={close}>
      <header className="assistant-header">
        <div><p className="eyebrow">YOUR STUDY ASSISTANT</p><h2>Ask about this lesson</h2></div>
        <button className="assistant-close" onClick={close} aria-label="Close lesson assistant">×</button>
      </header>
      <p className="assistant-context">{lesson.title} · Step {stepIndex + 1}</p>
      <p className="assistant-notice">{hintOnly ? 'I can offer hints and explain the method while you work out your answer.' : 'Ask a finance question, request a simpler explanation, or try another example.'}</p>
      <p className="assistant-privacy">AI can make mistakes—check important details against the lesson. Sending shares your question, recent chat, and course context with Cloudflare AI. Notes and progress are not sent. Don’t include private information. <a href="/privacy">Privacy</a></p>
      <div className="assistant-conversation" role="log" aria-label="Lesson conversation" aria-live="polite" aria-busy={Boolean(pending)}>
        {!messages.length && <p className="assistant-empty">What would help this idea click?</p>}
        {messages.map((message, index) => <article className={`assistant-message ${message.role}`} key={index}>
          <strong>{message.role === 'user' ? 'You' : 'IBase assistant'}</strong>
          <p>{message.content}</p>
          {message.sources?.length > 0 && <div className="assistant-sources"><span>Course references</span>{message.sources.map(source => <a key={source.href} href={source.href}>{source.title} →</a>)}</div>}
        </article>)}
        {pending && <p className="assistant-pending">Thinking about: {pending}</p>}
        <div ref={answerEnd} />
      </div>
      {!messages.length && <div className="assistant-suggestions" aria-label="Suggested questions">
        {(hintOnly ? ['Give me a hint', 'Explain the idea behind this question'] : ['Explain this more simply', 'Give me another example']).map(text => <button key={text} disabled={Boolean(pending)} onClick={() => ask(text)}>{text}</button>)}
      </div>}
      {error && <p className="assistant-error" role="alert">{error} Your question is still below.</p>}
      <form onSubmit={event => { event.preventDefault(); ask() }}>
        <label htmlFor="lesson-assistant-question">Your question</label>
        <textarea id="lesson-assistant-question" value={draft} maxLength={600} rows={3} readOnly={Boolean(pending)}
          placeholder="For example: why can profit and cash be different?" onChange={event => setDraft(event.target.value)}
          aria-describedby="assistant-input-help" onKeyDown={event => { if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) { event.preventDefault(); ask() } }} />
        <div className="assistant-form-footer"><span id="assistant-input-help">{draft.length}/600 · Ctrl/⌘ + Enter to send</span><button className="primary-button" disabled={Boolean(pending) || !draft.trim()} type="submit">{pending ? 'Thinking…' : 'Send question'}</button></div>
      </form>
      <p className="assistant-footnote">Free shared daily allowance. Chat stays only while this lesson step is open; it isn’t saved to your notes.</p>
    </StudyDialog>
  </div>
}
