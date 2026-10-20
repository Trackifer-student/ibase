// Only progress goes through this adapter. Auth tokens never enter backups or sync.
let owner = null
const prefix = () => owner ? `ibase-account:${owner}:` : ''
const keys = () => Array.from({ length: globalThis.localStorage.length }, (_, index) => globalThis.localStorage.key(index)).filter(key => typeof key === 'string').filter(key => owner
  ? key.startsWith(prefix())
  : key.startsWith('ibase-') && !key.startsWith('ibase-account:') && !key.startsWith('ibase-sync:'))
export const progressStorage = {
  get length() { return keys().length },
  key(index) { const key = keys()[index]; return key ? key.slice(prefix().length) : null },
  getItem(key) { return globalThis.localStorage.getItem(prefix() + key) },
  setItem(key, value) {
    const changed = this.getItem(key) !== String(value)
    globalThis.localStorage.setItem(prefix() + key, value)
    if (changed) globalThis.window?.dispatchEvent(new Event('ibase-progress-change'))
  },
  removeItem(key) {
    globalThis.localStorage.removeItem(prefix() + key)
    globalThis.window?.dispatchEvent(new Event('ibase-progress-change'))
  },
}
export function setProgressOwner(id) { owner = id }
export function getProgressOwner() { return owner }
