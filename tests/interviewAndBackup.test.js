import test from 'node:test'
import assert from 'node:assert/strict'
import { interviewQuestions, interviewCategories, interviewDifficulties } from '../src/data/interviewQuestions.js'
import { importProgress } from '../src/utils/progressBackup.js'

class MemoryStorage {
  constructor() { this.items = new Map() }
  get length() { return this.items.size }
  key(index) { return [...this.items.keys()][index] ?? null }
  getItem(key) { return this.items.get(key) ?? null }
  setItem(key, value) { this.items.set(key, String(value)) }
  removeItem(key) { this.items.delete(key) }
}

const backup = (data) => JSON.stringify({
  app: 'IBase', version: 1, exportedAt: '2026-10-14T00:00:00.000Z', data,
})

test('interview bank has 101 unique, substantive questions with valid scoring rubrics', () => {
  assert.equal(interviewQuestions.length, 101)
  assert.equal(new Set(interviewQuestions.map((question) => question.id)).size, 101)
  assert.equal(new Set(interviewQuestions.map((question) => question.prompt)).size, 101)
  for (const question of interviewQuestions) {
    assert.ok(interviewCategories.includes(question.category), question.id)
    assert.ok(interviewDifficulties.includes(question.difficulty), question.id)
    assert.ok(question.prompt.length > 15, question.id)
    assert.ok(question.strongAnswer.length > 100, question.id)
    assert.ok(question.keyPoints.length >= 3, question.id)
    assert.equal(new Set(question.keyPoints).size, question.keyPoints.length, question.id)
  }
})

test('progress import restores supported keys without touching unrelated browser storage', () => {
  globalThis.localStorage = new MemoryStorage()
  localStorage.setItem('unrelated-app', 'leave-me')
  localStorage.setItem('ibase-notes', JSON.stringify({ old: 'discarded' }))
  const count = importProgress(backup({
    'ibase-notes': JSON.stringify({ lesson1: 'my notes' }),
    'ibase-completed-lessons': JSON.stringify(['lesson1']),
    'ibase-interview-review': JSON.stringify(['acct-7']),
    'ibase-xp': '50',
    'ibase-quiz-module-accounting': JSON.stringify({ easy: 80 }),
  }))
  assert.equal(count, 5)
  assert.equal(localStorage.getItem('unrelated-app'), 'leave-me')
  assert.deepEqual(JSON.parse(localStorage.getItem('ibase-notes')), { lesson1: 'my notes' })
  assert.equal(localStorage.getItem('ibase-xp'), '50')
})

test('progress import rejects invalid files without replacing existing progress', () => {
  globalThis.localStorage = new MemoryStorage()
  localStorage.setItem('ibase-xp', '100')
  for (const bad of [
    '{not json',
    JSON.stringify({ app: 'OtherApp', version: 1, data: { 'ibase-xp': '0' } }),
    backup({ 'unrelated-app': 'malicious' }),
    backup({ 'ibase-xp': '-10' }),
    backup({ 'ibase-notes': '{broken' }),
    backup({}),
  ]) {
    assert.throws(() => importProgress(bad))
    assert.equal(localStorage.getItem('ibase-xp'), '100')
  }
})
