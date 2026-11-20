import { appendNotePrompt, notebookMarkdown } from '../utils/lessonNotebook.js'
export default function LessonNotebook({ lesson, step, value, onChange, error }) {
  const download = () => {
    const url = URL.createObjectURL(new Blob([notebookMarkdown(lesson.title, value)], { type: 'text/markdown;charset=utf-8' }))
    const link = document.createElement('a'); link.href = url; link.download = `${lesson.id}-notes.md`; link.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }
  return <aside className="lesson-notebook" aria-label="Lesson notebook"><h2>Your lesson notebook</h2><p>Keep the lesson open as you write. These are the same notes available from the Notes button.</p>
    <button onClick={() => onChange(appendNotePrompt(value, step.title || 'This section', 'Core idea:\nWorked example / calculation:\nWhy it works:\nQuestion to revisit:'))}>Add section prompts</button>
    <label htmlFor="inline-lesson-notes">My notes<textarea id="inline-lesson-notes" value={value} onChange={e => onChange(e.target.value)} placeholder="Explain the idea, work a calculation, or record a question…" /></label>
    <p role="status">{error || 'Saved on this device. Account sync follows your existing sync settings.'}</p>
    {error && <button onClick={() => onChange(value)}>Retry saving notes</button>}
    <button onClick={download}>Download lesson notes</button>
  </aside>
}
