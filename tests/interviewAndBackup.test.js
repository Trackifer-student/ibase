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
    assert.ok(question.prompt.length >= 12, question.id)
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

test('progress import rejects valid JSON with incompatible data shapes before changing any storage', () => {
  const invalid = {
    'ibase-completed-lessons': [{}, 'lesson1', [null], [42]],
    'ibase-needs-review': [{}, ['interest', false]],
    'ibase-saved-vocabulary': [{}, ['business', {}]],
    'ibase-interview-review': [{}, [false]],
    'ibase-completed-labs': [{}, [7]],
    'ibase-notes': [[], 'a note', { lesson1: { text: 'not a string' } }],
    'ibase-quiz-module-accounting': [[], { 'easy-v2': '100' }, { 'easy-v2': 101 }, { 'easy-v2': -1 }],
    'ibase-quiz-track-technical': [[], { 'hard-v2': null }],
    'ibase-quiz-cumulative': [[], { 'medium-v2': true }],
    'ibase-quiz-variants-v1': [[], { question1: '2' }, { question1: -1 }, { question1: 1.5 }],
  }
  for (const [key, values] of Object.entries(invalid)) {
    for (const value of [null, ...values]) {
      globalThis.localStorage = new MemoryStorage()
      localStorage.setItem('ibase-xp', '100')
      localStorage.setItem('ibase-notes', '{"lesson1":"keep my note"}')
      localStorage.setItem('unrelated-app', 'leave-me')
      const before = [...localStorage.items.entries()]
      assert.throws(() => importProgress(backup({ 'ibase-xp': '200', [key]: JSON.stringify(value) })), key + ': ' + JSON.stringify(value))
      assert.deepEqual([...localStorage.items.entries()], before)
    }
  }
  for (const value of ['', ' ', 'Infinity']) {
    assert.throws(() => importProgress(backup({ 'ibase-xp': value })))
  }
})

test('progress import accepts all current data shapes and previous difficulty scores', () => {
  globalThis.localStorage = new MemoryStorage()
  const data = {
    'ibase-notes': JSON.stringify({ 'what-is-a-business': 'A saved note\nwith two lines.' }),
    'ibase-completed-lessons': JSON.stringify(['what-is-a-business']),
    'ibase-needs-review': JSON.stringify(['interest']),
    'ibase-saved-vocabulary': JSON.stringify(['business']),
    'ibase-interview-review': JSON.stringify(['acct-6']),
    'ibase-completed-labs': JSON.stringify(['dcf']),
    'ibase-quiz-variants-v1': JSON.stringify({ 'assessment-v2-business-basics-3': 4 }),
    'ibase-quiz-module-accounting': JSON.stringify({ quick: 80, standard: 60, mastery: 0, 'easy-v2': 100 }),
    'ibase-quiz-track-technical': JSON.stringify({ 'medium-v2': 67 }),
    'ibase-quiz-cumulative': JSON.stringify({ 'hard-v2': 90 }),
    'ibase-xp': '50',
  }
  assert.equal(importProgress(backup(data)), Object.keys(data).length)
  for (const [key, value] of Object.entries(data)) assert.equal(localStorage.getItem(key), value)
})
