function SiteFooter({
  onHome,
  onLearn,
  onInterview,
  onAI,
  onPrivacy,
  onTerms,
}) {
  const year = new Date().getFullYear()

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
          <button onClick={onLearn}>Learn IB</button>
          <button onClick={onInterview}>Interview Prep</button>
          <button onClick={onAI}>AI for Banking</button>
          <button onClick={onPrivacy}>Privacy</button>
          <button onClick={onTerms}>Terms</button>
        </nav>
      </div>

      <div className="footer-bottom">
        <span>© {year} IBase</span>
        <span>Educational content only. Not financial advice.</span>
      </div>
    </footer>
  )
}

export default SiteFooter
