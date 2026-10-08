function NotFound({ onHome }) {
  return (
    <section className="not-found-page">
      <p className="eyebrow">404</p>
      <h1>That page does not exist.</h1>
      <p>
        The link may be outdated, or the address may have been typed
        incorrectly.
      </p>
      <button className="primary-button" onClick={onHome}>
        Go to IBase home
      </button>
    </section>
  )
}

export default NotFound
