import { useEffect, useRef, useState } from 'react'
import { supabase } from '../utils/supabase.js'
import { currentProgress } from '../utils/progressBackup.js'
import { progressStorage, setProgressOwner } from '../utils/progressStorage.js'
import { mergeProgress, sameProgress, validateSnapshot } from '../utils/progressMerge.js'
import { syncProgress } from '../utils/cloudSync.js'

export default function CloudProgress({ onRefresh }) {
  const [user, setUser] = useState(null)
  const [status, setStatus] = useState('Progress saves on this device. No account required.')
  const [pending, setPending] = useState(false)
  const [incoming, setIncoming] = useState(null)
  const state = useRef({ user: null, base: {}, busy: false, enabled: false, epoch: 0 })
  const install = data => {
    const previous = currentProgress()
    try {
      for (const key of Object.keys(previous)) progressStorage.removeItem(key)
      for (const [key, value] of Object.entries(data)) progressStorage.setItem(key, value)
    } catch (error) {
      for (const key of Object.keys(currentProgress())) progressStorage.removeItem(key)
      for (const [key, value] of Object.entries(previous)) progressStorage.setItem(key, value)
      throw error
    }
  }
  const sync = async () => {
    const s = state.current
    if (!s.enabled || s.busy || !s.user || document.hidden) return
    s.busy = true
    const epoch = s.epoch, id = s.user.id
    try {
      setStatus('Syncing…')
      const rawLocal = currentProgress()
      const local = s.incoming ? mergeProgress(rawLocal, s.incoming, s.incomingLocal) : rawLocal
      const merged = await syncProgress({ local, base: s.base,
        read: async () => {
          const { data, error } = await supabase.from('user_progress').select('data,revision').eq('user_id', id).maybeSingle()
          if (error) throw error
          return data
        },
        write: async (data, revision) => {
          if (state.current.epoch !== epoch) throw new Error('Account changed')
          const { data: saved, error } = await supabase.rpc('save_progress', { payload: data, expected_revision: revision })
          if (error) throw error
          return saved
        },
      })
      if (s.epoch !== epoch) return
      // Edits made while the request was in flight must survive too.
      const latest = mergeProgress(currentProgress(), merged, rawLocal)
      if (!sameProgress(latest, currentProgress())) {
        // Do not remount a lesson or destroy an unsaved interview answer mid-session.
        s.pendingBase = merged; s.incoming = latest; s.incomingLocal = currentProgress(); setIncoming(latest)
        setStatus('Cloud progress received. Apply when you’re ready to leave this activity.')
      } else { s.base = merged; window.localStorage.setItem(`ibase-sync:base:${id}`, JSON.stringify(merged)); s.incoming = null; setIncoming(null); setStatus(sameProgress(merged, currentProgress()) ? 'Synced. Progress is also saved on this device.' : 'Saved on this device. Recent changes are waiting to sync.') }
    } catch {
      if (s.epoch === epoch) setStatus('Sync unavailable. Your device progress is safe. Retry when online.')
    } finally { s.busy = false }
  }
  useEffect(() => {
    if (!supabase) return
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const s = state.current
      if (s.user?.id === session?.user?.id) return
      s.epoch += 1; s.enabled = false; s.user = session?.user || null
      s.incoming = null; setUser(s.user); setIncoming(null)
      setPending(Boolean(s.user))
      setStatus(s.user ? 'Choose whether to merge this device’s guest progress.' : 'Progress saves on this device. No account required.')
      setProgressOwner(null)
      onRefresh()
    })
    let debounce
    const changed = () => { clearTimeout(debounce); debounce = setTimeout(sync, 1500) }
    window.addEventListener('ibase-progress-change', changed)
    const timer = setInterval(sync, 30000)
    const retry = () => sync()
    window.addEventListener('online', retry)
    window.addEventListener('focus', retry)
    document.addEventListener('visibilitychange', retry)
    return () => { subscription.unsubscribe(); clearInterval(timer); clearTimeout(debounce); window.removeEventListener('ibase-progress-change', changed); window.removeEventListener('online', retry); window.removeEventListener('focus', retry); document.removeEventListener('visibilitychange', retry) }
  }, [onRefresh]) // The ref holds current sync state; subscription is created once.
  const connect = async includeGuest => {
    try {
      const guest = includeGuest ? currentProgress() : {}
      const s = state.current
      setProgressOwner(user.id)
      const cached = validateSnapshot(currentProgress())
      s.base = validateSnapshot(JSON.parse(window.localStorage.getItem(`ibase-sync:base:${user.id}`) || '{}'))
      install(mergeProgress(cached, guest))
      s.enabled = true; setPending(false); onRefresh()
      await sync()
    } catch {
      setProgressOwner(null); onRefresh()
      setStatus('Unable to prepare sync. Your guest progress is unchanged. Export a backup and retry.')
    }
  }
  const signOut = async () => {
    const wasEnabled = state.current.enabled
    state.current.enabled = false; state.current.epoch += 1
    const { error } = await supabase.auth.signOut({ scope: 'local' })
    if (error) { state.current.enabled = wasEnabled; setStatus('Could not sign out. Please retry.'); return }
    setProgressOwner(null); onRefresh()
  }
  return <aside className="cloud-progress" aria-label="Optional account and progress sync">
    <span role="status">{status}</span>
    {!user && supabase && <button onClick={async () => {
      const { error } = await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.origin, scopes: 'openid email profile' } })
      if (error) setStatus('Sign-in unavailable. Keep learning on this device and try again later.')
    }}>Sign in with Google to sync</button>}
    {!supabase && <span>Optional cloud sync is awaiting setup.</span>}
    {user && <><span>{user.email}</span><button onClick={signOut}>Sign out</button></>}
    {pending && <div><p>Merge guest progress into this account? Both sides’ notes and achievements are preserved. Guest progress stays separate when you sign out.</p>
      <button onClick={() => connect(true)}>Merge and sync</button><button onClick={() => connect(false)}>Use account progress only</button></div>}
    {user && !pending && <button onClick={sync}>Sync now / retry</button>}
    {incoming && <button onClick={() => {
      try { install(mergeProgress(currentProgress(), incoming, state.current.incomingLocal)); state.current.base = state.current.pendingBase; window.localStorage.setItem(`ibase-sync:base:${user.id}`, JSON.stringify(state.current.base)); state.current.incoming = null; setIncoming(null); onRefresh(); setStatus('Cloud progress applied. Device changes will sync automatically.'); }
      catch { setStatus('Device storage is full. Export a backup before retrying.'); }
    }}>Apply cloud progress (leaves current activity)</button>}
  </aside>
}
