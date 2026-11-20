import test from 'node:test'
import assert from 'node:assert/strict'
import { caseEvents, northstarStatements, statementGuides, checkStatementAnswer } from '../src/data/statementCase.js'
import { appendNotePrompt, notebookMarkdown, saveLessonNote } from '../src/utils/lessonNotebook.js'
import { accountingLessons } from '../src/data/modules/accounting.js'
import { mergeProgress } from '../src/utils/progressMerge.js'
import { validSavedValue } from '../src/utils/progressBackup.js'

test('every Northstar event reconciles all three statements', () => {
  for (let n = 0; n <= caseEvents.length; n++) {
    const s = northstarStatements(n)
    assert.equal(s.assets, s.debt + s.equity)
    assert.equal(s.cash, 100 + s.cfo + s.cfi + s.cff)
    assert.equal(s.equity, 300 + s.netIncome)
  }
  assert.deepEqual([northstarStatements(5).netIncome, northstarStatements(5).cfo, northstarStatements(5).cash], [30, 90, 180])
})
test('collection changes neither profit nor total assets; capex is not expensed; depreciation is noncash', () => {
  const sale = northstarStatements(1), collection = northstarStatements(2), equipment = northstarStatements(3), da = northstarStatements(4)
  assert.equal(collection.netIncome, sale.netIncome)
  assert.equal(collection.assets, sale.assets)
  assert.equal(collection.cfo - sale.cfo, 40)
  assert.equal(equipment.netIncome, collection.netIncome)
  assert.equal(equipment.cash, collection.cash - 60)
  assert.equal(da.netIncome, equipment.netIncome - 10)
  assert.equal(da.cfo, equipment.cfo)
  assert.equal(da.ppe, equipment.ppe - 10)
})
test('real-company exercise calculations are derived from displayed data', () => {
  assert.ok(checkStatementAnswer(195201 / 416161 * 100, statementGuides['income-statement']))
  assert.ok(checkStatementAnswer(285508 / 359241 * 100, statementGuides['balance-sheet']))
  assert.ok(checkStatementAnswer('98,767', statementGuides['cash-flow-statement']))
  assert.ok(checkStatementAnswer(111482 + 15195 - 120686, statementGuides['three-statements-connect']))
  for (const guide of Object.values(statementGuides)) {
    assert.equal(checkStatementAnswer('', guide), null)
    assert.equal(checkStatementAnswer('  ', guide), null)
    assert.equal(checkStatementAnswer('Infinity', guide), null)
    assert.equal(checkStatementAnswer('10 dollars', guide), null)
    assert.equal(checkStatementAnswer('98,76,7', guide), null)
    assert.equal(checkStatementAnswer('0', guide), false)
  }
})
test('four existing routes retain IDs and get a workshop before completion', () => {
  for (const id of Object.keys(statementGuides)) {
    const lesson = accountingLessons.find(l => l.id === id)
    assert.ok(lesson)
    assert.equal(lesson.steps.filter(s => s.type === 'statement-workshop').length, 1)
    assert.equal(lesson.steps.at(-2).type, 'statement-workshop')
    assert.equal(lesson.steps.at(-1).type, 'complete')
  }
})
test('note prompts preserve existing writing; exports include lesson context', () => {
  const text = appendNotePrompt('My calculation: 40', 'Collect the invoice', 'Why no new revenue?')
  assert.ok(text.startsWith('My calculation: 40\n\n'))
  assert.ok(text.includes('## Collect the invoice'))
  assert.equal(notebookMarkdown('Cash flow', text), `# Cash flow\n\n${text}\n`)
})
test('expanded notes remain compatible with backup validation and concurrent sync', () => {
  const first = appendNotePrompt('Existing note', 'Example', 'My explanation')
  const local = { 'ibase-notes': JSON.stringify({ 'balance-sheet': first }) }
  const remote = { 'ibase-notes': JSON.stringify({ 'balance-sheet': 'Other device note' }) }
  assert.ok(validSavedValue('ibase-notes', JSON.parse(local['ibase-notes'])))
  const merged = JSON.parse(mergeProgress(local, remote)['ibase-notes'])['balance-sheet']
  assert.ok(merged.includes(first)); assert.ok(merged.includes('Other device note'))
})

test('saving notes preserves other lessons and retains the draft when browser storage fails', () => {
  const before = { previous: 'Keep me' }
  let stored
  const saved = saveLessonNote({ setItem: (key, value) => { stored = [key, JSON.parse(value)] } }, before, 'cash-flow-statement', 'New explanation')
  assert.equal(saved.error, '')
  assert.deepEqual(stored, ['ibase-notes', { previous: 'Keep me', 'cash-flow-statement': 'New explanation' }])
  assert.deepEqual(before, { previous: 'Keep me' })
  const failed = saveLessonNote({ setItem: () => { throw new Error('Storage full') } }, before, 'cash-flow-statement', 'Unsaved draft')
  assert.equal(failed.notes['cash-flow-statement'], 'Unsaved draft')
  assert.match(failed.error, /could not be saved/)
})

import { gradeStatementCells } from '../src/utils/statementPractice.js'
import { restoreLesson, lessonSignature, writeDraft, readDraft } from '../src/utils/activityDrafts.js'
import { rubricRating, interviewProbes } from '../src/data/interviewProbes.js'
import { recruitingWeeks, recruitingLanes, nextRecruitingWeek } from '../src/data/recruitingPlan.js'

test('unfinished lesson position and raw answer restore only against matching content', () => {
  const memory = new Map(), storage = { getItem: key => memory.get(key) || null, setItem: (key, value) => memory.set(key, value) }
  const lesson = accountingLessons[0]
  writeDraft(`lesson:${lesson.id}`, { signature: lessonSignature(lesson), step: 2, written: 'My unfinished reasoning', number: '12', short: 'draft', selected: 1 }, storage, 10)
  assert.equal(restoreLesson(lesson, storage).step, 2)
  assert.equal(restoreLesson(lesson, storage).written, 'My unfinished reasoning')
  assert.equal(restoreLesson({ ...lesson, steps: [...lesson.steps, { type: 'teach', title: 'Changed content' }] }, storage).step, 0)
  storage.setItem('ibase-activity-drafts', 'broken')
  assert.equal(restoreLesson(lesson, storage).step, 0)
})
test('worksheet grading distinguishes balanced wrong figures from correct statements', () => {
  for (let event = 1; event <= 5; event++) {
    const expected = northstarStatements(event)
    const answers = Object.fromEntries(Object.entries(expected).map(([key, value]) => [key, String(value)]))
    assert.ok(gradeStatementCells(event, answers).correct)
    assert.equal(gradeStatementCells(event, answers).balance, 0)
    answers.assets = String(expected.assets + 20); answers.equity = String(expected.equity + 20)
    assert.equal(gradeStatementCells(event, answers).balance, 0)
    assert.equal(gradeStatementCells(event, answers).correct, false)
  }
  assert.equal(gradeStatementCells(1, {}).balance, null)
})
test('activity drafts survive backup validation and choose latest complete record in concurrent sync', () => {
  const local = { 'ibase-activity-drafts': JSON.stringify({ x: JSON.stringify({ updatedAt: 20, payload: { step: 2, answer: 'local' } }) }) }
  const remote = { 'ibase-activity-drafts': JSON.stringify({ x: JSON.stringify({ updatedAt: 30, payload: { step: 1, answer: 'remote' } }) }) }
  const merged = mergeProgress(local, remote)
  assert.ok(validSavedValue('ibase-activity-drafts', JSON.parse(merged['ibase-activity-drafts'])))
  assert.equal(readDraft('x', { getItem: key => merged[key] }).answer, 'remote')
})
test('material errors override otherwise strong self-reported rubric coverage', () => {
  assert.equal(rubricRating(4, 4, true).rating, 'weak')
  assert.equal(rubricRating(4, 3, false).rating, 'strong')
  assert.equal(rubricRating(4, 2, false).rating, 'weak')
  assert.equal(interviewProbes({ category: 'Accounting' }).length, 2)
})
test('recruiting plan has parallel weekly outputs and progresses only when outputs are checked', () => {
  assert.equal(recruitingWeeks.length, 8)
  assert.equal(recruitingLanes.length, 6)
  for (const week of recruitingWeeks) assert.equal(week.outputs.length, 6)
  assert.equal(nextRecruitingWeek({}), 1)
  assert.equal(nextRecruitingWeek(Object.fromEntries(recruitingLanes.map((_, i) => [`1-${i}`, true]))), 2)
})
