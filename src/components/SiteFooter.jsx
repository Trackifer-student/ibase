const COPYRIGHT_YEAR = 2026

function SiteFooter({
  onHome,
  onLearn,
  onInterview,
  onAI,
  onPrivacy,
  onTerms,
}) {
   return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <button className="brand-button" onClick={onHome} aria-label="IBase home">
            IBase
          </button>
          <p>
            Free investment banking education built for students who want to
            understand the material, not just memorize interview answers.
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <button onClick={onLearn}>Courses</button>
          <button onClick={onInterview}>Interview practice</button>
          <button onClick={onAI}>AI for banking</button>
          <button onClick={onPrivacy}>Privacy</button>
          <button onClick={onTerms}>Terms</button>
        </nav>
      </div>

      <div className="footer-bottom">
        <span>© {COPYRIGHT_YEAR} IBase</span>
        <span>Educational content only. Not financial advice.</span>
      </div>
    </footer>
  )
}

export default SiteFooter
