import test from 'node:test'
import assert from 'node:assert/strict'
import { mergeProgress, validateSnapshot, sameProgress } from '../src/utils/progressMerge.js'
import { syncProgress } from '../src/utils/cloudSync.js'
import { progressStorage, setProgressOwner } from '../src/utils/progressStorage.js'
import { currentProgress, importProgress } from '../src/utils/progressBackup.js'
const snapshot = values => Object.fromEntries(Object.entries(values).map(([key, value]) => [`ibase-${key}`, typeof value === 'number' ? String(value) : JSON.stringify(value)]))
test('first merge preserves every progress domain, keeps both notes, and uses max XP/scores', () => {
  const a = snapshot({ notes: { a: 'First', b: 'Solo' }, 'completed-lessons': ['a'], xp: 90, 'needs-review': ['a'], 'saved-vocabulary': ['v1'], 'interview-review': ['i1'], 'completed-labs': ['dcf'], 'quiz-module-accounting': { easy: 80 }, 'quiz-variants-v1': { q: 2 } })
  const b = snapshot({ notes: { a: 'Second' }, 'completed-lessons': ['b'], xp: 100, 'needs-review': ['b'], 'saved-vocabulary': ['v2'], 'interview-review': ['i2'], 'completed-labs': ['lbo'], 'quiz-module-accounting': { easy: 70, hard: 90 }, 'quiz-variants-v1': { q: 1 } })
  const result = mergeProgress(a, b)
  assert.ok(sameProgress(result, mergeProgress(b, a)))
  assert.equal(result['ibase-xp'], '100')
  assert.deepEqual(JSON.parse(result['ibase-completed-lessons']), ['a', 'b'])
  assert.deepEqual(JSON.parse(result['ibase-completed-labs']), ['dcf', 'lbo'])
  assert.deepEqual(JSON.parse(result['ibase-interview-review']), ['i1', 'i2'])
  assert.deepEqual(JSON.parse(result['ibase-saved-vocabulary']), ['v1', 'v2'])
  assert.deepEqual(JSON.parse(result['ibase-needs-review']), ['a', 'b'])
  assert.deepEqual(JSON.parse(result['ibase-quiz-module-accounting']), { easy: 80, hard: 90 })
  assert.equal(JSON.parse(result['ibase-notes']).a, 'First\n\n--- Preserved note version ---\n\nSecond')
  assert.ok(sameProgress(result, mergeProgress(result, b)))
  assert.ok(sameProgress(result, mergeProgress(result, result)))
})
test('three-way merge propagates edits and review/vocabulary removals while preserving independent edits', () => {
  const base = snapshot({ notes: { a: 'Old', b: 'Old' }, 'needs-review': ['a', 'b'], 'saved-vocabulary': ['a'] })
  const local = snapshot({ notes: { a: 'New', b: 'Old' }, 'needs-review': ['b'], 'saved-vocabulary': [] })
  const remote = snapshot({ notes: { a: 'Old', b: 'Remote' }, 'needs-review': ['a', 'b', 'c'], 'saved-vocabulary': ['a'] })
  const result = mergeProgress(local, remote, base)
  assert.deepEqual(JSON.parse(result['ibase-notes']), { a: 'New', b: 'Remote' })
  assert.deepEqual(JSON.parse(result['ibase-needs-review']), ['b', 'c'])
  assert.equal(result['ibase-saved-vocabulary'], '[]')
})
test('rejects unsupported keys, malformed values, oversized data and auth tokens', () => {
  for (const data of [null, [], { token: 'secret' }, { 'ibase-xp': '-1' }, { 'ibase-xp': 'Infinity' }, { 'ibase-notes': '{' }, { 'ibase-completed-labs': '[1]' }, { 'ibase-quiz-cumulative': '{"easy":101}' }, { 'ibase-notes': JSON.stringify({ n: 'x'.repeat(2097152) }) }]) assert.throws(() => validateSnapshot(data))
})
test('CAS retries concurrent writes and merges new remote progress', async () => {
  let row = { data: snapshot({ 'completed-lessons': ['a'] }), revision: 1 }, calls = 0
  const result = await syncProgress({ local: snapshot({ 'completed-lessons': ['b'] }), base: {}, read: async () => row, write: async (data, revision) => {
    calls += 1
    if (calls === 1) { row = { data: snapshot({ 'completed-lessons': ['a', 'c'] }), revision: 2 }; return false }
    assert.equal(revision, 2); row = { data, revision: 3 }; return true
  } })
  assert.deepEqual(JSON.parse(result['ibase-completed-lessons']), ['a', 'b', 'c'])
  assert.equal(calls, 2)
})
test('failed/network sync never writes local storage and conflict retries are bounded', async () => {
  const local = snapshot({ xp: 30 }), before = JSON.stringify(local)
  await assert.rejects(syncProgress({ local, base: {}, read: async () => { throw new Error('offline') }, write: async () => assert.fail() }))
  await assert.rejects(syncProgress({ local, base: {}, read: async () => null, write: async () => false }), /retry/)
  assert.equal(JSON.stringify(local), before)
})
class MemoryStorage {
  items = new Map()
  get length() { return this.items.size }
  key(i) { return [...this.items.keys()][i] ?? null }
  getItem(k) { return this.items.get(k) ?? null }
  setItem(k,v) { this.items.set(k, String(v)) }
  removeItem(k) { this.items.delete(k) }
}
test('account caches, guests, backup import and tokens remain isolated', () => {
  globalThis.localStorage = new MemoryStorage()
  localStorage.setItem('sb-auth-token', 'private')
  setProgressOwner(null); progressStorage.setItem('ibase-xp', '40')
  setProgressOwner('alice'); progressStorage.setItem('ibase-xp', '90')
  assert.deepEqual(currentProgress(), { 'ibase-xp': '90' })
  importProgress(JSON.stringify({ app: 'IBase', version: 1, data: snapshot({ xp: 100 }) }))
  setProgressOwner('bob'); assert.deepEqual(currentProgress(), {})
  setProgressOwner(null); assert.equal(progressStorage.getItem('ibase-xp'), '40')
  setProgressOwner('alice'); assert.equal(progressStorage.getItem('ibase-xp'), '100')
  assert.equal(localStorage.getItem('sb-auth-token'), 'private')
  setProgressOwner(null)
})
test('unapplied cloud progress survives repeated syncs, fresh edits, and a reload before apply', async () => {
  const base = snapshot({ 'completed-lessons': ['a'], notes: { a: 'Old' } })
  let row = { data: snapshot({ 'completed-lessons': ['a', 'b'], notes: { a: 'Phone' } }), revision: 2 }
  const io = { read: async () => row, write: async (data, revision) => {
    assert.equal(revision, row.revision); row = { data, revision: revision + 1 }; return true
  } }
  const incoming = await syncProgress({ ...io, local: base, base })
  const edited = snapshot({ 'completed-lessons': ['a', 'c'], notes: { a: 'Laptop' } })
  const effective = mergeProgress(edited, incoming, base)
  const second = await syncProgress({ ...io, local: effective, base })
  assert.deepEqual(JSON.parse(second['ibase-completed-lessons']), ['a', 'b', 'c'])
  assert.ok(JSON.parse(second['ibase-notes']).a.includes('Phone'))
  assert.ok(JSON.parse(second['ibase-notes']).a.includes('Laptop'))
  // Baseline remains last applied state, so reload cannot interpret unreceived data as deleted.
  const reloaded = await syncProgress({ ...io, local: edited, base })
  assert.ok(sameProgress(second, reloaded))
})
test('malformed cloud snapshots fail before any write; first account save uses revision zero', async () => {
  await assert.rejects(syncProgress({ local: {}, base: {}, read: async () => ({ data: { 'ibase-notes': 'null' }, revision: 1 }), write: async () => assert.fail('must not replace corrupt remote data') }))
  const local = snapshot({ xp: 20 })
  const result = await syncProgress({ local, base: {}, read: async () => null, write: async (data, revision) => { assert.equal(revision, 0); assert.ok(sameProgress(data, local)); return true } })
  assert.ok(sameProgress(result, local))
})
test('a lost save response can be retried without duplicate XP or note versions', async () => {
  const local = snapshot({ xp: 125, notes: { a: 'Offline note' }, 'completed-labs': ['dcf'] })
  let row = { data: snapshot({ xp: 100, notes: { a: 'Cloud note' }, 'completed-labs': ['lbo'] }), revision: 7 }
  let writes = 0
  const read = async () => structuredClone(row)
  await assert.rejects(syncProgress({ local, base: {}, read, write: async (data, revision) => {
    assert.equal(revision, 7)
    row = { data: structuredClone(data), revision: 8 }; writes += 1
    throw new Error('Connection lost after the server committed')
  } }), /Connection lost/)
  const recovered = await syncProgress({ local, base: {}, read, write: async () => { writes += 1; return true } })
  assert.equal(writes, 1)
  assert.equal(row.revision, 8)
  assert.equal(recovered['ibase-xp'], '125')
  assert.deepEqual(JSON.parse(recovered['ibase-completed-labs']), ['dcf', 'lbo'])
  assert.equal(JSON.parse(recovered['ibase-notes']).a, 'Cloud note\n\n--- Preserved note version ---\n\nOffline note')
})

import { resumeAccountCache } from '../src/utils/accountResume.js'
import { getProgressOwner } from '../src/utils/progressStorage.js'
test('returning account restores only its previously enabled cache and never merges guest work implicitly', () => {
  globalThis.localStorage = new MemoryStorage()
  setProgressOwner(null); progressStorage.setItem('ibase-completed-lessons', '["guest"]')
  setProgressOwner('alice'); progressStorage.setItem('ibase-completed-lessons', '["alice-work"]')
  assert.equal(resumeAccountCache('alice', localStorage), null)
  assert.equal(getProgressOwner(), null)
  localStorage.setItem('ibase-sync:enabled:alice', 'true')
  assert.deepEqual(resumeAccountCache('alice', localStorage), { base: {} })
  assert.equal(progressStorage.getItem('ibase-completed-lessons'), '["alice-work"]')
  assert.equal(resumeAccountCache('bob', localStorage), null)
  assert.equal(progressStorage.getItem('ibase-completed-lessons'), '["guest"]')
  localStorage.setItem('ibase-sync:base:alice', '{broken')
  assert.throws(() => resumeAccountCache('alice', localStorage))
  assert.equal(getProgressOwner(), null)
  assert.equal(localStorage.getItem('ibase-account:alice:ibase-completed-lessons'), '["alice-work"]')
})
