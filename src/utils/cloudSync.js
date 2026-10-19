import { mergeProgress, validateSnapshot, sameProgress } from './progressMerge.js'
// Compare-and-swap retries always re-read the latest cloud revision.
export async function syncProgress({ read, write, local, base, attempts = 4 }) {
  validateSnapshot(local); validateSnapshot(base)
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    const row = await read()
    const remote = validateSnapshot(row?.data || {})
    const merged = mergeProgress(local, remote, base)
    if (row && sameProgress(merged, remote)) return merged
    if (await write(merged, row?.revision || 0)) return merged
  }
  throw new Error('Progress changed on another device. Please retry sync.')
}
