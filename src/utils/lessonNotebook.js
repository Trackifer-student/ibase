export function appendNotePrompt(note, title, prompt) {
  const heading = `## ${title}\n${prompt}\n`
  return note ? `${note.trimEnd()}\n\n${heading}` : heading
}
export function notebookMarkdown(title, note) {
  return `# ${title}\n\n${note || ''}\n`
}

export function saveLessonNote(storage, notes, lessonId, value) {
  const next = { ...notes, [lessonId]: value }
  try {
    storage.setItem('ibase-notes', JSON.stringify(next))
    return { notes: next, error: '' }
  } catch {
    return { notes: next, error: 'Notes could not be saved. Keep this page open and download your notes before leaving.' }
  }
}
