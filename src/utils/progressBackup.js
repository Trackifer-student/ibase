import { progressStorage as localStorage } from './progressStorage.js'
const BACKUP_VERSION = 1
const MAX_BACKUP_BYTES = 2 * 1024 * 1024

const fixedKeys = new Set([
  'ibase-notes',
  'ibase-activity-drafts',
  'ibase-completed-lessons',
  'ibase-xp',
  'ibase-needs-review',
  'ibase-saved-vocabulary',
  'ibase-interview-review',
  'ibase-completed-labs',
  'ibase-quiz-variants-v1',
  'ibase-quiz-cumulative',
])

const listKeys = new Set([
  'ibase-completed-lessons', 'ibase-needs-review', 'ibase-saved-vocabulary',
  'ibase-interview-review', 'ibase-completed-labs',
])
const isRecord = (value) => value !== null && typeof value === 'object' && !Array.isArray(value)

export function validSavedValue(key, value) {
  if (listKeys.has(key)) return Array.isArray(value) && value.every((id) => typeof id === 'string')
  if (!isRecord(value)) return false
  const values = Object.values(value)
  if (key === 'ibase-activity-drafts') return values.every(raw => {
    if (typeof raw !== 'string' || raw.length > 100000) return false
    try { const draft = JSON.parse(raw); return isRecord(draft) && Number.isFinite(draft.updatedAt) && draft.updatedAt >= 0 && isRecord(draft.payload) } catch { return false }
  })
  if (key === 'ibase-notes') return values.every((note) => typeof note === 'string')
  if (key === 'ibase-quiz-variants-v1') return values.every((index) => Number.isInteger(index) && index >= 0)
  return values.every((score) => typeof score === 'number' && Number.isFinite(score) && score >= 0 && score <= 100)
}

export const isProgressKey = (key) =>
  fixedKeys.has(key) ||
  /^ibase-quiz-(module|track)-[a-z0-9-]+$/.test(key)

export const currentProgress = () => {
  const data = {}
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i)
    if (key && isProgressKey(key)) data[key] = localStorage.getItem(key)
  }
  return data
}

export function exportProgress() {
  const data = currentProgress()
  if (!Object.keys(data).length) {
    throw new Error('No saved progress was found in this browser yet.')
  }

  const backup = {
    app: 'IBase',
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    data,
  }
  const blob = new Blob([JSON.stringify(backup, null, 2)], {
    type: 'application/json',
  })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'ibase-progress-' + new Date().toISOString().slice(0, 10) + '.json'
  document.body.appendChild(link)
  link.click()
  link.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
  return Object.keys(data).length
}

export function importProgress(text) {
  if (new Blob([text]).size > MAX_BACKUP_BYTES) {
    throw new Error('This file is too large to be an IBase progress backup.')
  }

  let backup
  try {
    backup = JSON.parse(text)
  } catch {
    throw new Error('The selected file is not valid JSON.')
  }

  if (!backup || backup.app !== 'IBase' || backup.version !== BACKUP_VERSION ||
    !backup.data || typeof backup.data !== 'object' || Array.isArray(backup.data)) {
    throw new Error('This is not a supported IBase progress backup.')
  }

  const entries = Object.entries(backup.data)
  if (!entries.length || entries.length > 500) {
    throw new Error('The backup has no progress or too many entries.')
  }

  for (const [key, value] of entries) {
    if (!isProgressKey(key) || typeof value !== 'string' || value.length > MAX_BACKUP_BYTES) {
      throw new Error('The backup contains an unsupported progress entry.')
    }
    if (key === 'ibase-xp') {
      if (!value.trim() || !Number.isFinite(Number(value)) || Number(value) < 0) {
        throw new Error('The backup contains an invalid learning-points value.')
      }
    } else {
      try {
        if (!validSavedValue(key, JSON.parse(value))) throw new Error('shape')
      } catch {
        throw new Error('The backup contains invalid saved progress. Your current progress has not been changed.')
      }
    }
  }

  // Restore the old state if a browser storage limit prevents a complete import.
  const oldData = currentProgress()
  try {
    Object.keys(oldData).forEach((key) => localStorage.removeItem(key))
    entries.forEach(([key, value]) => localStorage.setItem(key, value))
  } catch {
    Object.keys(backup.data).forEach((key) => localStorage.removeItem(key))
    Object.entries(oldData).forEach(([key, value]) => localStorage.setItem(key, value))
    throw new Error('The browser could not save this backup. Your previous progress was preserved.')
  }

  return entries.length
}

export { MAX_BACKUP_BYTES }
