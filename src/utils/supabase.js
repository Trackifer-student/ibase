import { createClient } from '@supabase/supabase-js'
function configuredClient() {
  const url = import.meta.env.VITE_SUPABASE_URL
  const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
  // Only the public publishable key is accepted. Secret/service-role keys are forbidden.
  if (!url || !key?.startsWith('sb_publishable_')) return null
  try {
    if (new URL(url).protocol !== 'https:') return null
    return createClient(url, key, { auth: { flowType: 'pkce', detectSessionInUrl: true } })
  } catch { return null }
}
export const supabase = configuredClient()
