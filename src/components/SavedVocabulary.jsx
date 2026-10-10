import { useState } from 'react'
import { concepts } from '../data/concepts'

export default function SavedVocabulary({ savedTerms, onRemove, storageError }) {
  const [search, setSearch] = useState('')
  const [hideDefinitions, setHideDefinitions] = useState(false)
  const [revealed, setRevealed] = useState([])
  const terms = savedTerms.filter(id => concepts[id]).sort((a, b) => concepts[a].name.localeCompare(concepts[b].name))
  const matches = terms.filter(id => concepts[id].name.toLowerCase().includes(search.trim().toLowerCase()))
  return <div className="saved-vocabulary">
    <h1>Saved vocabulary</h1>
    <p>Keep useful terms here as you learn. Click a highlighted, underlined word in a lesson, then choose Save term.</p>
    <p className="local-note">Saved in this browser on this device. Clearing browser storage removes your list.</p>
    {storageError && <p role="alert">{storageError}</p>}
    <p role="status">{terms.length} {terms.length === 1 ? 'term' : 'terms'} saved</p>
    {terms.length > 0 ? <>
      <div className="vocabulary-controls">
        <label>Search saved terms<input type="search" value={search} onChange={event => setSearch(event.target.value)} /></label>
        <label className="vocabulary-study-toggle"><input type="checkbox" checked={hideDefinitions} onChange={event => { setHideDefinitions(event.target.checked); setRevealed([]) }} /> Hide definitions to practice</label>
      </div>
      {matches.length === 0 && <p>No saved terms match your search.</p>}
      <ul className="vocabulary-list">{matches.map(id => {
        const concept = concepts[id]
        const visible = !hideDefinitions || revealed.includes(id)
        return <li key={id}>
          <h2>{concept.name}</h2>
          {hideDefinitions && <button className="secondary-button" aria-expanded={visible} aria-controls={`vocabulary-${id}`} onClick={() => setRevealed(current => current.includes(id) ? current.filter(term => term !== id) : [...current, id])}>
            {visible ? 'Hide definition' : 'Show definition'}<span className="sr-only"> for {concept.name}</span>
          </button>}
          <div id={`vocabulary-${id}`} hidden={!visible}>
            <p>{concept.definition}</p>
            <p><strong>Example: </strong>{concept.example}</p>
            <p><strong>Why it matters: </strong>{concept.whyItMatters}</p>
          </div>
          <button className="inline-course-link" aria-label={`Remove ${concept.name} from saved vocabulary`} onClick={() => onRemove(id)}>Remove term</button>
        </li>
      })}</ul>
    </> : <p>No terms saved yet. Start with a lesson and save any words you want to revisit.</p>}
  </div>
}
