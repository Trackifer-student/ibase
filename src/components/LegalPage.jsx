function LegalPage({ type, onBack }) {
  const privacy = type === 'privacy'

  return (
    <section className="legal-page">
      <button className="back-button" onClick={onBack}>
        ← Back to IBase
      </button>

      <p className="eyebrow">{privacy ? 'PRIVACY' : 'TERMS'}</p>
      <h1>{privacy ? 'Privacy Policy' : 'Terms and Conditions'}</h1>
      <p className="legal-updated">Last updated October 7, 2026</p>

      {privacy ? (
        <div className="legal-copy">
          <section>
            <h2>What IBase stores</h2>
            <p>
              IBase does not require an account. Learning progress, notes, quiz
              scores, and review items are stored in your browser on your device
              using local storage.
            </p>
          </section>

          <section>
            <h2>What IBase does not collect</h2>
            <p>
              The current version does not ask for your name, phone number,
              payment information, or account credentials. IBase does not sell
              personal information.
            </p>
          </section>

          <section>
            <h2>Hosting data</h2>
            <p>
              The hosting provider may process routine technical information,
              such as IP address, browser details, request time, and security
              logs, as part of delivering and protecting the site.
            </p>
          </section>

          <section>
            <h2>Web analytics</h2>
            <p>
              IBase uses Cloudflare Web Analytics to understand aggregate page
              views, visits, and site performance. It does not use advertising
              cookies or track individual visitors. Analytics is separate from
              your locally stored learning progress and notes.
            </p>
          </section>

          <section>
            <h2>AI features</h2>
            <p>
              The current free version does not send written answers to a paid
              AI grading service. Written-answer checks run locally in the
              browser using predefined grading rules.
            </p>
          </section>

          <section>
            <h2>Clearing your data</h2>
            <p>
              Because learning data is stored locally, clearing this site's
              browser storage can remove saved progress, notes, quiz scores, and
              review items from that browser.
            </p>
          </section>

          <section>
            <h2>Changes to this policy</h2>
            <p>
              This policy will be updated before any material change to how
              personal information is collected, used, or shared.
            </p>
          </section>
        </div>
      ) : (
        <div className="legal-copy">
          <section>
            <h2>Educational purpose</h2>
            <p>
              IBase provides educational material about finance, investment
              banking, recruiting, interviews, and analyst workflows. It is not
              financial, investment, legal, tax, accounting, or career advice.
            </p>
          </section>

          <section>
            <h2>No guarantee of outcomes</h2>
            <p>
              Completing lessons, quizzes, or interview practice does not
              guarantee an internship, job offer, investment result, or any
              other outcome.
            </p>
          </section>

          <section>
            <h2>Accuracy</h2>
            <p>
              Reasonable effort is made to keep the material useful and
              accurate, but finance practices, recruiting processes, market
              conventions, and software workflows can change. Users should
              verify important information independently.
            </p>
          </section>

          <section>
            <h2>Your responsibility</h2>
            <p>
              You are responsible for how you use the information on IBase,
              including any decisions made in school, recruiting, work, or
              investing.
            </p>
          </section>

          <section>
            <h2>Acceptable use</h2>
            <p>
              Do not use the site to interfere with its operation, attempt
              unauthorized access, distribute malicious code, or misuse
              copyrighted material.
            </p>
          </section>

          <section>
            <h2>Changes</h2>
            <p>
              These terms may be updated as the site changes. Continued use of
              the site after an update means you accept the revised terms.
            </p>
          </section>
        </div>
      )}
    </section>
  )
}

export default LegalPage
