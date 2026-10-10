import test from 'node:test'
import assert from 'node:assert/strict'
import { tracks } from '../src/data/curriculum.js'
import { aiBankingModule } from '../src/data/modules/aiBanking.js'
import { concepts } from '../src/data/concepts.js'
import { quizBank } from '../src/data/quizBank.js'
import { varyQuestion, chooseVariant, readVariantHistory, VARIANT_COUNT } from '../src/data/quizVariants.js'
import { extractModuleQuestions, extractAllQuestions, extractTrackQuestions, prepareQuestions, parseNumberAnswer, isAnswered, isCorrect, correctAnswer, scoreQuiz } from '../src/utils/quizBuilder.js'
const modules = [...tracks.flatMap(track => track.modules), aiBankingModule]
const all = modules.flatMap(extractModuleQuestions)

test('every module has independent questions at all three difficulties with valid answers and lesson links', () => {
  assert.equal(modules.length, 22)
  assert.equal(all.length, 198)
  assert.equal(new Set(all.map(question => question.id)).size, all.length)
  assert.equal(new Set(all.map(question => question.prompt)).size, all.length)
  assert.deepEqual(Object.keys(quizBank).sort(), modules.map(module => module.id).sort())
  const lessonPrompts = new Set(modules.flatMap(module => module.lessons.flatMap(lesson => lesson.steps.map(step => step.title))))
  for (const module of modules) {
    const bank = extractModuleQuestions(module)
    for (const difficulty of ['easy', 'medium', 'hard']) assert.equal(bank.filter(question => question.difficulty === difficulty).length, 3)
    for (const question of bank) {
      assert.ok(!lessonPrompts.has(question.prompt), question.id)
      assert.ok(question.explanation.length > 10, question.id)
      assert.ok(module.lessons.some(lesson => lesson.id === question.lessonId), question.id)
      for (const id of question.reviewConcepts) assert.ok(Object.hasOwn(concepts, id), id)
      if (question.type === 'number') {
        assert.ok(Number.isFinite(question.answer))
        assert.ok(question.tolerance > 0 && question.tolerance <= 0.01)
        assert.ok(question.unit)
      } else {
        assert.equal(question.options.length, 4)
        assert.equal(new Set(question.options).size, 4)
        const indices = question.type === 'multiple' ? question.correctIndices : [question.correctIndex]
        assert.ok(indices.every(index => index >= 0 && index < 4))
        if (question.type === 'multiple') assert.ok(indices.length > 1 && indices.length < 4)
      }
    }
  }
})

test('randomization preserves correct answers and selects only the requested difficulty', () => {
  for (let run = 0; run < 20; run++) for (const difficulty of ['easy', 'medium', 'hard']) {
    const questions = prepareQuestions(all, 20, difficulty)
    assert.equal(questions.length, 20)
    assert.equal(new Set(questions.map(question => question.id)).size, 20)
    assert.equal(new Set(questions.map(question => question.moduleId)).size, 20)
    for (const question of questions) {
      assert.equal(question.difficulty, difficulty)
      const original = all.find(item => item.id === question.id)
      if (question.type !== 'number') {
        const options = (question.type === 'multiple' ? question.correctIndices : [question.correctIndex]).map(index => question.options[index]).sort()
        const expected = (original.type === 'multiple' ? original.correctIndices : [original.correctIndex]).map(index => original.options[index]).sort()
        assert.deepEqual(options, expected)
      }
      assert.ok(isCorrect(question, question.type === 'number' ? String(question.answer) : correctAnswer(question)))
    }
  }
  assert.equal(prepareQuestions(extractModuleQuestions(modules[0]), 20, 'hard').length, 3)
  assert.deepEqual(prepareQuestions([], 10, 'easy'), [])
  assert.equal(extractAllQuestions(tracks).length, 189)
  assert.equal(extractTrackQuestions(tracks[0]).length, 27)
})

test('number parsing rejects malformed and partial answers while accepting zero, negatives, decimals, and grouped thousands', () => {
  for (const input of ['', ' ', '12abc', '1,2', '10%', '$20', '1+2', 'Infinity', 'NaN', '1e2', null]) assert.ok(Number.isNaN(parseNumberAnswer(input)), String(input))
  for (const [input, expected] of [['0',0],['-8',-8],[' .25 ',0.25],['1,234.50',1234.5],['+20',20]]) assert.equal(parseNumberAnswer(input), expected)
  const question = { type: 'number', answer: 8.26, tolerance: 0.01 }
  assert.ok(isCorrect(question, '8.264'))
  assert.ok(!isCorrect(question, '8.28'))
  assert.ok(!isAnswered(question, ''))
})

test('select-all scoring requires the exact set, regardless of order, without credit for selecting everything', () => {
  const question = { type: 'multiple', options: ['A','B','C','D'], correctIndices: [0,2] }
  assert.ok(isCorrect(question, [2,0]))
  for (const answer of [[],[0],[0,1,2],[0,1,2,3]]) assert.ok(!isCorrect(question, answer))
})

test('mixed-format scoring handles unanswered questions and deduplicates missed concepts', () => {
  const questions = [
    { type: 'single', options: ['A','B'], correctIndex: 0, reviewConcepts: ['cash'] },
    { type: 'number', answer: 0, tolerance: 0.01, reviewConcepts: ['cash','revenue'] },
    { type: 'multiple', options: ['A','B','C'], correctIndices: [0,2], reviewConcepts: ['cash'] },
  ]
  const result = scoreQuiz(questions, { 0: 0, 1: '0', 2: [0] })
  assert.equal(result.correctCount, 2)
  assert.equal(result.score, 67)
  assert.deepEqual(result.missedConcepts, ['cash'])
  assert.equal(scoreQuiz(questions, {}).correctCount, 0)
  assert.equal(scoreQuiz([], {}).score, 0)
})

test('representative multi-step financial answer keys agree with independent calculations', () => {
  const find = (module, prefix) => quizBank[module].find(question => question.prompt.startsWith(prefix)).answer
  assert.equal(find('business-basics', 'A store starts'), 700+1600-900+1000)
  assert.equal(find('accounting', 'Net income is'), 45+10-12+3-4)
  assert.equal(find('corp-finance', 'Equity is worth'), 0.75*10+0.25*6*0.75)
  assert.ok(Math.abs(find('dcf','Present value of forecast')-(120+500/1.1**3-150+20))<0.01)
  assert.equal(find('ma','Buyer net income'), 18)
  assert.equal(find('lbo','Entry EV is'), (70*8-180)/200)
  assert.ok(Math.abs(find('lbo','A sponsor doubles')-((2**0.25-1)*100))<0.01)
})

test('all 1,188 variants preserve format, difficulty, lesson links, and valid scoring without mutating templates', () => {
  const before = JSON.stringify(all)
  assert.equal(VARIANT_COUNT, 6)
  for (const template of all) {
    const versions = Array.from({ length: VARIANT_COUNT }, (_, index) => varyQuestion(template, index))
    assert.equal(new Set(versions.map(q => q.prompt + q.scenario)).size, VARIANT_COUNT, template.id)
    if (template.type === 'number') {
      assert.equal(new Set(versions.map(q => q.answer)).size, VARIANT_COUNT, template.id)
      assert.equal(new Set(versions.map(q => q.prompt)).size, VARIANT_COUNT, template.id)
    }
    for (const question of versions) {
      for (const field of ['id', 'type', 'difficulty', 'lessonId', 'moduleId']) assert.equal(question[field], template[field])
      assert.deepEqual(question.reviewConcepts, template.reviewConcepts)
      assert.ok(!/undefined|NaN|Infinity/.test(question.prompt + question.explanation))
      assert.ok(!/^A (illustrator|editor)/.test(question.prompt))
      assert.ok(isCorrect(question, question.type === 'number' ? String(question.answer) : correctAnswer(question)))
      if (question.type === 'number') {
        assert.ok(Number.isFinite(question.answer))
        assert.ok(!isCorrect(question, String(question.answer + 1)))
        if (!Number.isInteger(question.answer)) assert.match(question.prompt, /round/i)
      } else {
        assert.deepEqual(correctAnswer(question), correctAnswer(template))
      }
    }
  }
  assert.equal(JSON.stringify(all), before)
})

test('repeated attempts and reloaded history never choose the previous version of a question', () => {
  let history = {}
  for (let attempt = 0; attempt < 12; attempt++) {
    for (const difficulty of ['easy', 'medium', 'hard']) {
      const questions = prepareQuestions(all, 1000, difficulty, history)
      for (const q of questions) {
        assert.notEqual(q.variantIndex, history[q.id], q.id)
        history[q.id] = q.variantIndex
      }
    }
    history = readVariantHistory({ getItem: () => JSON.stringify(history) })
    assert.equal(Object.keys(history).length, 198)
  }
  for (let previous = 0; previous < VARIANT_COUNT; previous++) {
    for (const random of [0, 0.2, 0.4, 0.6, 0.8, 0.99999]) assert.notEqual(chooseVariant(previous, () => random), previous)
  }
})

test('variant history tolerates unavailable or malformed storage without touching score data', () => {
  assert.deepEqual(readVariantHistory({ getItem: () => { throw new Error('blocked') } }), {})
  for (const text of ['null', '[]', 'false', '{bad', '42']) assert.deepEqual(readVariantHistory({ getItem: () => text }), {})
  assert.deepEqual(readVariantHistory({ getItem: key => {
    assert.equal(key, 'ibase-quiz-variants-v1')
    return JSON.stringify({ 'assessment-v2-valid': 5, 'assessment-v2-negative': -1, 'assessment-v2-large': 6, 'assessment-v2-string': '2', 'best-score': 3 })
  } }), { 'assessment-v2-valid': 5 })
})

test('varied financial answers match calculations from the displayed givens', () => {
  const get = (lesson, difficulty, index) => varyQuestion(all.find(q => q.lessonId === lesson && q.difficulty === difficulty), index)
  const near = (actual, expected) => assert.ok(Math.abs(actual - expected) < 0.011, `${actual} versus ${expected}`)
  for (let index = 0; index < 6; index++) {
    let q = get('how-business-makes-money', 'easy', index)
    near(q.answer, Number(q.prompt.match(/completes (\d+) repairs/)[1]) * 40)
    q = get('revenue-profit-cash', 'hard', index)
    const collected = Number(q.prompt.match(/collects only \$([\d,]+)/)[1].replaceAll(',', ''))
    near(q.answer, 700 + collected - 900 + 1000)
    q = get('owning-a-company', 'hard', index)
    const issued = Number(q.prompt.match(/issues (\d+) new shares/)[1])
    near(q.answer, 25 - 20 / (80 + issued) * 100)
    q = get('lbo-irr', 'hard', index)
    const years = Number(q.prompt.match(/(\d+) years/)[1])
    near(q.answer, (Math.pow(2, 1 / years) - 1) * 100)
    q = get('paper-lbo', 'hard', index)
    const debt = Number(q.prompt.match(/net debt is (\d+)/)[1])
    near(q.answer, (70 * 8 - debt) / 200)
  }
})
