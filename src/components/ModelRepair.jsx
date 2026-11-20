import { useEffect, useState } from 'react'
import { repairCase } from '../utils/statementPractice.js'
import { parseNumberAnswer } from '../utils/quizBuilder.js'
import { readDraft, writeDraft } from '../utils/activityDrafts.js'
export default function ModelRepair({ onBack, onContinue }) {
  const [values, setValues] = useState(() => readDraft('northstar-repair')?.values || repairCase.broken)
  const [checked, setChecked] = useState(false)
  const [error, setError] = useState('')
  // Persist to external browser storage and report a failed write without losing the draft.
  // eslint-disable-next-line react/set-state-in-effect
  useEffect(() => { try { writeDraft('northstar-repair', { values }); setError('') } catch { setError('This browser could not save your repair draft.') } }, [values])
  const correct = Object.entries(repairCase.correct).every(([key, expected]) => parseNumberAnswer(values[key]) === expected)
  return <article className="lesson-card statement-workshop"><p className="eyebrow">NORTHSTAR EQUIPMENT · MODEL REPAIR</p><h1>Repair the analyst’s broken model</h1><p>{repairCase.prompt}</p><p>Amounts are $ millions. Opening equity is 300. No dividends or other changes. The prefilled figures contain planted errors: fix the logic rather than forcing a balance.</p><table className="statement-table"><caption>Editable output cells</caption><tbody>{Object.keys(repairCase.correct).map(key => <tr key={key}><th scope="row">{{ netIncome: 'Net income', cfo: 'Operating cash flow', cash: 'Ending cash', equity: 'Ending equity' }[key]}</th><td><input aria-label={`Repair ${key}`} inputMode="decimal" value={values[key]} onChange={e => { setValues(v => ({ ...v, [key]: e.target.value })); setChecked(false) }} /></td></tr>)}</tbody></table><button onClick={() => setChecked(true)}>Check repair</button>{checked && <div role="status"><h2>{correct ? 'All four outputs repaired.' : 'Some errors remain.'}</h2>{Object.entries(repairCase.correct).map(([key, value]) => <p key={key}>{parseNumberAnswer(values[key]) === value ? 'Correct: ' : 'Revisit: '}{repairCase.explanations[key]}</p>)}<p>This checks four output cells, not an uploaded spreadsheet’s formulas or analyst readiness.</p></div>}{error && <p role="alert">{error}</p>}<div className="workshop-actions"><button onClick={onBack}>← Back</button><button onClick={onContinue}>Continue lesson →</button></div></article>
}
