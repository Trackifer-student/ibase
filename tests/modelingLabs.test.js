import test from 'node:test'
import assert from 'node:assert/strict'
import {
  buildLabCsv,
  calculateDcf,
  calculateLbo,
  calculateMerger,
  dcfDefaults,
  lboDefaults,
  mergerDefaults,
} from '../src/utils/modelingLabCalculations.js'
import { modelingLabs } from '../src/data/modelingLabs.js'
import { advancedTechnicalsModule } from '../src/data/modules/advancedTechnicals.js'
import { tracks } from '../src/data/curriculum.js'

const closeTo = (actual, expected, tolerance = 0.001) => {
  assert.ok(Math.abs(actual - expected) <= tolerance, actual + ' should be close to ' + expected)
}

test('default DCF lab calculates forecast, terminal value, and equity bridge correctly', () => {
  const result = calculateDcf(dcfDefaults)
  assert.equal(result.valid, true)
  assert.equal(result.rows.length, 5)
  closeTo(result.rows[0].revenue, 604.8)
  closeTo(result.rows[0].ufcf, 70.224)
  closeTo(result.enterpriseValue, 1118.538424)
  closeTo(result.equityValue, 868.538424)
  closeTo(result.impliedSharePrice, 17.370768)
  assert.equal(calculateDcf({ ...dcfDefaults, waccPct: 2, terminalGrowthPct: 3 }).valid, false)
  assert.equal(calculateDcf({ ...dcfDefaults, taxRatePct: 150 }).valid, false)
})

test('default merger lab builds financing, pro forma EPS, and accretion correctly', () => {
  const result = calculateMerger(mergerDefaults)
  assert.equal(result.valid, true)
  closeTo(result.buyerEps, 3)
  closeTo(result.stockConsideration, 600)
  closeTo(result.debtIssued, 900)
  closeTo(result.newShares, 12)
  closeTo(result.proFormaNetIncome, 379.5)
  closeTo(result.proFormaEps, 3.388392857)
  closeTo(result.accretionPct, 12.94642857)
  assert.equal(calculateMerger({ ...mergerDefaults, targetPurchaseEquity: -1 }).valid, false)
})

test('default LBO lab builds debt paydown and sponsor returns correctly', () => {
  const result = calculateLbo(lboDefaults)
  assert.equal(result.valid, true)
  assert.equal(result.rows.length, 5)
  closeTo(result.entryEnterpriseValue, 1000)
  closeTo(result.sponsorEquity, 400)
  closeTo(result.exitDebt, 261.569009)
  closeTo(result.exitEnterpriseValue, 1402.551731)
  closeTo(result.exitEquityValue, 1140.982721)
  closeTo(result.moic, 2.852456804)
  closeTo(result.irrPct, 23.3229245)
  assert.equal(calculateLbo({ ...lboDefaults, debtAtEntry: -10 }).valid, false)
})

test('lab downloads provide blank starter files and formula solution files', () => {
  for (const [id, inputs] of [
    ['dcf', dcfDefaults],
    ['merger', mergerDefaults],
    ['lbo', lboDefaults],
  ]) {
    const starter = buildLabCsv(id, inputs, false)
    const solution = buildLabCsv(id, inputs, true)
    assert.equal(starter.includes('=SUM('), false)
    assert.equal(starter.includes('=MIN('), false)
    assert.ok(solution.includes('='), id + ' solution should contain formulas')
    assert.ok(solution.length > starter.length, id + ' solution should add formulas')
    assert.match(starter, /\\d+(?:\\.\\d+)?%/, id + ' inputs should display percentages')
  }
  const tenYear = buildLabCsv('lbo', { ...lboDefaults, holdYears: 10 }, true)
  assert.match(tenYear, /=K17\\*\\$B\\$10/)
})

test('modeling lab metadata and advanced curriculum are complete and linked', () => {
  assert.deepEqual(modelingLabs.map((lab) => lab.id), ['dcf', 'merger', 'lbo'])
  assert.equal(advancedTechnicalsModule.lessons.length, 8)
  const lessonIds = new Set(tracks.flatMap((track) =>
    track.modules.flatMap((module) => module.lessons.map((lesson) => lesson.id))))
  assert.ok(tracks.some((track) => track.modules.some((module) => module.id === 'advanced-technicals')))
  for (const lesson of advancedTechnicalsModule.lessons) {
    assert.ok(lesson.steps.length >= 5, lesson.id)
    for (const prerequisite of lesson.prerequisites || []) {
      assert.ok(lessonIds.has(prerequisite), lesson.id + ' has missing prerequisite ' + prerequisite)
    }
  }
})
