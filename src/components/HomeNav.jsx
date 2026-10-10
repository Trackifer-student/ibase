import { useState } from 'react'

function HomeNav({ onHome, onLearn, onInterview, onAI, onVocabulary }) {
  const [open, setOpen] = useState(false)

  const run = (action) => {
    setOpen(false)
    action()
  }

  return (
    <nav className="site-nav home-nav" aria-label="Primary navigation">
      <button className="brand-button" onClick={onHome} aria-label="IBase home">
        IBase
      </button>

      <div className="nav-links">
        <button onClick={onLearn}>Courses</button>
        <button onClick={onInterview}>Interview practice</button>
        <button onClick={onAI}>AI for banking</button>
        <button onClick={onVocabulary}>Saved vocabulary</button>
      </div>

      <button
        className="mobile-menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-site-menu"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? 'Close' : 'Menu'}
      </button>

      {open && (
        <div className="mobile-menu" id="mobile-site-menu">
          <button onClick={() => run(onLearn)}>Courses</button>
          <button onClick={() => run(onInterview)}>Interview practice</button>
          <button onClick={() => run(onAI)}>AI for banking</button>
          <button onClick={() => run(onVocabulary)}>Saved vocabulary</button>
        </div>
      )}
    </nav>
  )
}

export default HomeNav
