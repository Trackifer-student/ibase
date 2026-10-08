import { useLayoutEffect, useRef } from 'react'

export default function StudyDialog({ children, className, label, onClose, returnFocus }) {
  const panel = useRef(null)
  const previous = useRef(document.activeElement)
  useLayoutEffect(() => {
    const root = panel.current
    const returnTarget = returnFocus ? document.querySelector(returnFocus) : previous.current
    const controls = () => [...root.querySelectorAll('button, textarea, input, a[href], [tabindex="0"]')]
      .filter(element => !element.disabled)
    ;(root.querySelector('textarea') || controls()[0] || root).focus()
    const onKey = event => {
      if (event.key === 'Escape') { event.preventDefault(); onClose(); return }
      if (event.key !== 'Tab') return
      const items = controls()
      const first = items[0] || root
      const last = items.at(-1) || root
      if (event.shiftKey && (document.activeElement === first || document.activeElement === root)) {
        event.preventDefault(); last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus()
      }
    }
    root.addEventListener('keydown', onKey)
    return () => { root.removeEventListener('keydown', onKey); returnTarget?.focus() }
    // The dialog's close action is stable for the lifetime of this mounted panel.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <div ref={panel} tabIndex={-1} role="dialog" aria-modal="true" aria-label={label}
    className={className} onClick={event => event.stopPropagation()}>{children}</div>
}
