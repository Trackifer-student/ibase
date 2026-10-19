# Optional Google sign-in and progress sync

Implementation branch only: do not merge or deploy until review. No Supabase project, OAuth client, or public Sheets templates have been provisioned by this change. Guest learning continues without any environment variables.

## Cost and scope (verified October 19, 2026)

Supabase Free currently includes social OAuth, 50,000 monthly active users, 500 MB database storage, and 5 GB egress; two active free projects. Free projects can pause after one week of inactivity and have no automatic database backups. Keep the organization on **Free**, do not enable paid add-ons or upgrade, monitor database/egress usage, and retain exported progress backups. This fits a small MVP; it is not an unlimited capacity or uptime guarantee. Polling runs every 30 seconds only in visible signed-in tabs, with debounced uploads after local changes and retries on focus/online. No Realtime, paid API, cron keep-alive, or Google Drive API is required.

Sources:
- https://supabase.com/pricing
- https://supabase.com/docs/guides/platform/free-project-pausing
- https://supabase.com/docs/guides/auth/social-login/auth-google
- https://supabase.com/docs/guides/database/postgres/row-level-security

## One-time console setup for Zach

1. Create a Supabase project in an organization on the **Free** plan. Keep its database password private; the website never needs it.
2. Run `supabase/migrations/202610190001_progress.sql` in Supabase's SQL Editor. It creates one row per Auth user, enables RLS, permits reading only your own row, denies direct client writes, and supplies an authenticated compare-and-swap RPC. The RPC derives the owner from `auth.uid()` and never accepts a user ID. Deleting an Auth user cascades to their progress row.
3. In Google Cloud Console, select/create a project. Configure Google Auth Platform Branding (IBase, support/contact email), Audience (External for general users), and Data Access. Request only `openid`, `email`, `profile`. Add test users while in Testing; publish the consent app when ready for general users. Follow any branding/domain requirements Google displays. No Drive scope, billing upgrade, or API key is needed for this login flow.
4. Create an OAuth client of type **Web application**. Add the actual reviewed production origin to Authorized JavaScript origins, and `http://localhost:5173` for local testing. Add the exact callback displayed by Supabase, typically `https://<project-ref>.supabase.co/auth/v1/callback`, to Authorized redirect URIs. This callback is Supabase's URL, not IBase's homepage.
5. In Supabase → Authentication → Sign In / Providers → Google, enable Google and paste the Google client ID and **client secret**. Keep the secret in that console only; never put it in Vite variables, GitHub, source files, or chat.
6. In Supabase → Authentication → URL Configuration, set Site URL to the actual production origin (currently expected to be `https://ibasefinance.zachblach07-56c.workers.dev`; verify before use). Add that origin and `http://localhost:5173` to Redirect URLs. Add only preview URLs you deliberately want to test; avoid broad wildcards. The client returns to `window.location.origin`.
7. Copy `.env.example` to `.env.local`. Set `VITE_SUPABASE_URL` to the project's HTTPS API URL and `VITE_SUPABASE_PUBLISHABLE_KEY` to its **publishable** key (`sb_publishable_…`) from project API settings. These are public browser configuration and depend on RLS for protection. Legacy JWT, `service_role`, `sb_secret_…`, database passwords, and OAuth client secrets are deliberately unsupported in the client config.
8. For a later approved production build, add the same two public variables to the hosting build environment and rebuild. Vite embeds them at build time; Worker runtime secrets alone will not configure the frontend. Missing/invalid config leaves guest mode available with a setup notice.
9. Review this PR and complete the acceptance checks below before authorizing merge/deployment.

## Storage and deterministic merge contract

All existing progress writes and export/import use a shared storage adapter. Guests retain the original `ibase-*` keys. Account caches use `ibase-account:<auth-user-id>:<progress-key>`; auth tokens and sync metadata never enter a backup or cloud payload. Signing out restores the separate guest experience. Account caches remain for recovery; clear browser site data on shared devices.

After each new sign-in/reload, choose **Merge and sync** or **Use account progress only**. The latter leaves guest progress untouched. The former copies guest progress into the account cache, retaining both sides. Neither choice uploads other accounts' caches. The last successfully applied cloud snapshot is the three-way merge baseline. A failed upload never marks local data as synced. Concurrent writes retry against a fresh cloud revision, with a bounded retry count. Receiving remote progress shows **Apply cloud progress**, which refreshes the activity only after user action, preserving in-progress interview/quiz/lab work until then. Incoming data is never treated as applied before that action; reloads safely fetch it again.

Rules apply to the actual current persistence schema:

| Domain | First merge / concurrent conflict | Changes after a shared baseline |
| --- | --- | --- |
| Completed lessons and labs | Sorted unique union | One-sided changes accepted; concurrent achievements union |
| XP | Maximum, never sum (avoids counting the same learning twice) | One-sided edits accepted; concurrent XP maximum |
| Notes | Per lesson; preserve distinct full versions in sorted order separated by a visible note-version marker | One-sided edit/deletion accepted; concurrent text conflicts preserve versions |
| Quiz best scores | Per quiz and difficulty maximum | One-sided changes accepted; concurrent scores maximum |
| Lesson review, interview review, saved vocabulary | Sorted unique union | Baseline removals propagate; independent additions retained |
| Quiz variant history | Per question maximum index | One-sided changes accepted; concurrent maximum |

The interview currently persists weak-question IDs only; draft answers, mock-session ratings, and live lab assumptions are not persistent and are not added to the cloud payload. Sheets cell edits belong to the user's Google file, not IBase's progress record. Backup import retains the existing **replace active profile** behavior and validation; while syncing, later merges follow the same baseline rules. Export before replacement if you want to keep an extra copy.

Snapshots are allowlisted, shape checked, and limited to 2 MiB client-side. Database constraints also bound JSON payload size. If storage is full, syncing fails visibly; export a backup and free storage. Offline changes remain in the account cache. After a reload, reconnect that account to resume; the app starts in guest mode until a sync choice is made. No service worker is added: offline fallback covers saved progress when the page is available, not guaranteed cold offline loading of the website.

## Review and acceptance checks requiring a configured project

Automated tests cover merge rules, serialization validation, account/guest separation, backup compatibility, network failure, and CAS contention. They do not prove a live OAuth setup or RLS deployment.

Before release:
1. Without env vars, complete lessons, save notes/vocabulary, finish a quiz and a lab, export/import a backup. No login prompt blocks use.
2. With configured local env, sign in as test user A. Verify consent has no Drive scope. Merge pre-existing guest progress; receive and apply cloud data. Confirm both note versions and highest scores/XP survive.
3. Sign in as A on a second browser/device. Edit different notes and complete different lessons concurrently; sync both and apply received progress. Verify no missing achievements; review/vocabulary removal propagates after a shared baseline.
4. Edit during a slow upload and leave an incoming change unapplied across another sync and a reload. Verify the edit and remote data both survive. Test network loss, expired auth, paused project, storage quota, and retry behavior.
5. Sign out, verify original guest progress; sign in as B and choose account only, verify no A data appears. The UI may retain cached account data on disk by design, so use separate browser profiles on shared computers.
6. Test RLS through the API with anon and A/B access tokens: anon cannot read/write; A cannot select B's row; direct insert/update/delete is denied; RPC modifies only caller's row and rejects stale revision. Do not use service-role credentials for these tests.
7. Verify Cloudflare build variables and final desktop/mobile layout. No production deployment has been performed by this branch.

For cloud deletion requests, the owner can delete the user from Supabase Authentication → Users; the FK removes progress. Also clear browser site storage to remove local caches.

## Google Sheets modeling labs: free, without Drive access

The labs keep starter/solution CSV downloads and show free Sheets import instructions now. Sheets copy buttons appear only when real template URLs are configured; no spreadsheet IDs are invented.

To enable each copy button:
1. Download that lab's starter CSV. In a blank Google spreadsheet, use **File → Import → Upload**. For checking formulas, separately import the revealed formula solution CSV; verify formulas and numeric results against IBase's defaults. Keep starter templates free of worked solutions unless deliberately providing a solution sheet.
2. Name and format the DCF, merger, and LBO templates. Share each **Anyone with the link → Viewer**, and allow viewers to copy. Check in a signed-out window that the template is accessible. Publish only exercise data, never student work.
3. Set `VITE_DCF_SHEET_URL`, `VITE_MA_SHEET_URL`, and `VITE_LBO_SHEET_URL` to their `https://docs.google.com/spreadsheets/d/<real-id>/edit` URLs. Rebuild after approval. The client validates the Google Sheets host and converts each to `/copy`.
4. Test each copy link with a separate Google account. The user signs in directly to Google and owns their copy; IBase gets no Drive permissions, provider access token, or cell data.

Until templates exist, students can use the CSV import workflow for free. A static copy starts from template defaults, whereas CSV downloads include the current in-page assumptions. No Drive integration or paid service is required.

Google help: https://support.google.com/docs/answer/49114 and https://support.google.com/a/users/answer/9331167
