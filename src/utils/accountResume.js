import { currentProgress } from './progressBackup.js'
import { setProgressOwner } from './progressStorage.js'
import { validateSnapshot } from './progressMerge.js'
// Never merge guest data or infer consent from another account's marker.
export function resumeAccountCache(userId, browserStorage) {
  setProgressOwner(null)
  if (!userId || browserStorage.getItem(`ibase-sync:enabled:${userId}`) !== 'true') return null
  try {
    setProgressOwner(userId)
    validateSnapshot(currentProgress())
    return { base: validateSnapshot(JSON.parse(browserStorage.getItem(`ibase-sync:base:${userId}`) || '{}')) }
  } catch (error) { setProgressOwner(null); throw error }
}
