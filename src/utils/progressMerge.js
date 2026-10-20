import { isProgressKey, validSavedValue, MAX_BACKUP_BYTES } from './progressBackup.js'
const listKeys = new Set(['ibase-completed-lessons', 'ibase-needs-review', 'ibase-saved-vocabulary', 'ibase-interview-review', 'ibase-completed-labs'])
const record = value => value && typeof value === 'object' && !Array.isArray(value)
export function validateSnapshot(data) {
  if (!record(data) || Object.keys(data).length > 500 || new TextEncoder().encode(JSON.stringify(data)).length > MAX_BACKUP_BYTES) throw new Error('Invalid progress snapshot')
  for (const [key, value] of Object.entries(data)) {
    if (!isProgressKey(key) || typeof value !== 'string') throw new Error('Unsupported progress entry')
    if (key === 'ibase-xp') {
      if (!value.trim() || !Number.isFinite(Number(value)) || Number(value) < 0) throw new Error('Invalid XP')
    } else if (!validSavedValue(key, JSON.parse(value))) throw new Error('Invalid progress value')
  }
  return data
}
const equal = (a, b) => JSON.stringify(a) === JSON.stringify(b)
// Three-way merge: unchanged fields accept the other side's edits/deletions.
// Concurrent progress is a union/max; concurrent notes preserve both versions.
export function mergeProgress(local, remote, base = {}) {
  ;[local, remote, base].forEach(validateSnapshot)
  const result = Object.create(null)
  for (const key of [...new Set([...Object.keys(local), ...Object.keys(remote), ...Object.keys(base)])].sort()) {
    const l = local[key], r = remote[key], b = base[key]
    if (l === r || r === b) { if (l !== undefined) result[key] = l; continue }
    if (l === b) { if (r !== undefined) result[key] = r; continue }
    if (key === 'ibase-xp') { result[key] = String(Math.max(Number(l || 0), Number(r || 0))); continue }
    if (listKeys.has(key)) {
      const ls = JSON.parse(l || '[]'), rs = JSON.parse(r || '[]'), bs = JSON.parse(b || '[]')
      // Existing review/vocabulary removals propagate unless concurrently added.
      const removable = !['ibase-completed-lessons', 'ibase-completed-labs'].includes(key)
      result[key] = JSON.stringify([...new Set([...ls, ...rs])].filter(id => !removable || !bs.includes(id) || (ls.includes(id) && rs.includes(id))).sort())
      continue
    }
    const lm = JSON.parse(l || '{}'), rm = JSON.parse(r || '{}'), bm = JSON.parse(b || '{}'), merged = Object.create(null)
    for (const field of [...new Set([...Object.keys(lm), ...Object.keys(rm), ...Object.keys(bm)])].sort()) {
      const lv = lm[field], rv = rm[field], bv = bm[field]
      if (equal(lv, rv) || equal(rv, bv)) { if (lv !== undefined) merged[field] = lv }
      else if (equal(lv, bv)) { if (rv !== undefined) merged[field] = rv }
      else if (key === 'ibase-notes') {
        // Sorted complete versions make conflict output deterministic and idempotent.
        const versions = [...new Set([lv, rv].filter(v => v !== undefined).flatMap(v => v.split('\n\n--- Preserved note version ---\n\n')))].sort()
        merged[field] = versions.join('\n\n--- Preserved note version ---\n\n')
      } else merged[field] = Math.max(lv || 0, rv || 0)
    }
    result[key] = JSON.stringify(merged)
  }
  return validateSnapshot(result)
}
export const sameProgress = (a, b) => JSON.stringify(Object.entries(a).sort()) === JSON.stringify(Object.entries(b).sort())
