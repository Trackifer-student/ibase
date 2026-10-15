import { useRef, useState } from 'react'
import { exportProgress, importProgress, MAX_BACKUP_BYTES } from '../utils/progressBackup'

function ProgressBackup({ onBack }) {
  const fileInput = useRef(null)
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')

  const handleExport = () => {
    try {
      const count = exportProgress()
      setError('')
      setStatus('Backup downloaded with ' + count + ' saved progress entries.')
    } catch (cause) {
      setStatus('')
      setError(cause.message || 'Could not export progress.')
    }
  }

  const handleImport = async (event) => {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return

    if (file.size > MAX_BACKUP_BYTES) {
      setError('This file is too large to be an IBase progress backup.')
      setStatus('')
      return
    }

    let text
    try {
      text = await file.text()
    } catch {
      setError('Could not read the selected file.')
      setStatus('')
      return
    }

    if (!window.confirm('Importing will replace the IBase progress saved in this browser. Continue?')) {
      return
    }

    try {
      importProgress(text)
      setError('')
      setStatus('Progress restored. Reloading IBase to update your dashboard...')
      window.setTimeout(() => window.location.reload(), 300)
    } catch (cause) {
      setStatus('')
      setError(cause.message || 'Could not import progress.')
    }
  }

  return (
    <section className="progress-backup-page">
      <button className="back-button" onClick={onBack}>← Back Home</button>
      <header className="progress-backup-intro">
        <p className="eyebrow">YOUR LEARNING DATA</p>
        <h1>Back up your IBase progress.</h1>
        <p className="page-intro">
          Your completed lessons, notes, saved vocabulary, quiz scores, and interview review
          questions stay in this browser. Download a backup to move them to another
          browser or protect against clearing local storage.
        </p>
      </header>

      <div className="progress-backup-grid">
        <article>
          <span className="eyebrow">01 / EXPORT</span>
          <h2>Save a copy</h2>
          <p>Download a JSON file containing the IBase progress saved on this device. Keep it somewhere private if your notes include personal information.</p>
          <button className="primary-button" onClick={handleExport}>Export progress →</button>
        </article>
        <article>
          <span className="eyebrow">02 / IMPORT</span>
          <h2>Restore a copy</h2>
          <p>Choose a previously exported IBase file. Importing replaces the progress currently stored in this browser, so export a copy first if you want to keep it.</p>
          <input
            ref={fileInput}
            type="file"
            accept=".json,application/json"
            className="progress-backup-file"
            aria-label="Choose IBase progress backup"
            onChange={handleImport}
          />
          <button className="secondary-button" onClick={() => fileInput.current?.click()}>Import progress →</button>
        </article>
      </div>

      {status && <p className="progress-backup-message" role="status">{status}</p>}
      {error && <p className="progress-backup-error" role="alert">{error}</p>}
      <p className="progress-backup-note">
        No account or paid service is needed. Your backup stays on your device and is
        not uploaded to IBase. Importing restores saved progress, not a cloud sync.
      </p>
    </section>
  )
}

export default ProgressBackup
