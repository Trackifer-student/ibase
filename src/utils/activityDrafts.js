import { progressStorage } from './progressStorage.js'
export const DRAFT_KEY = 'ibase-activity-drafts'
export function readDraft(id, storage = progressStorage) {
  try { const entry = JSON.parse(JSON.parse(storage.getItem(DRAFT_KEY) || '{}')[id] || 'null'); return entry?.payload || null } catch { return null }
}
export function writeDraft(id, payload, storage = progressStorage, now = Date.now()) {
  let drafts
  try { drafts = JSON.parse(storage.getItem(DRAFT_KEY) || '{}') } catch { drafts = {} }
  if (!drafts || typeof drafts !== 'object' || Array.isArray(drafts)) drafts = {}
  drafts[id] = JSON.stringify({ updatedAt: now, payload })
  storage.setItem(DRAFT_KEY, JSON.stringify(drafts))
}
export function lessonSignature(lesson) {
  return JSON.stringify(lesson.steps.map(s => [s.type, s.title, s.options, s.answer, s.correctIndex]))
}
export function restoreLesson(lesson, storage = progressStorage) {
  const draft = lesson && readDraft(`lesson:${lesson.id}`, storage)
  if (!draft || draft.signature !== lessonSignature(lesson) || !Number.isInteger(draft.step) || draft.step < 0 || draft.step >= lesson.steps.length) return { step: 0, selected: null, short: '', number: '', written: '' }
  return { step: draft.step, selected: Number.isInteger(draft.selected) ? draft.selected : null,
    short: typeof draft.short === 'string' ? draft.short : '', number: typeof draft.number === 'string' ? draft.number : '', written: typeof draft.written === 'string' ? draft.written : '' }
}
