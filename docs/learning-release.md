# Learning and recruiting release — November 20, 2026

Base verified: GitHub main `9138c69` (optional cloud progress sync). The earlier local notebook pilot was cherry-picked onto a fresh main-based branch; earlier acceptance-only commits were not included. Zach explicitly authorized merging/publishing in the November 20 chat, superseding the original review-only hold. No credentials, schema changes or paid AI services are introduced.

## Validated feedback implemented

1. Dedicated `/recruiting-plan`: eight weeks of concrete outputs across technical learning, resume/story, networking, applications, behavioral prep and market awareness. Checklist persists via the existing progress adapter, backup and optional sync. Recruiting dates must be verified with each firm's official sources; the plan does not invent deadlines.
2. Exact unfinished lesson-step and raw-answer restoration on direct load, homepage Continue, and browser navigation. A content signature invalidates stale answers after lesson changes; feedback/grades are not restored as earned credit. Current URL is reread on account-refresh remounts. New drafts use one versioned timestamped record per activity in `ibase-activity-drafts`; conflict merges choose the latest complete activity rather than combining a step from one version with another answer.
3. Quieter collapsed optional account/sync panel. Consent and incoming-cloud notices remain visible. After this device explicitly enables sync for an account, returning sign-in restores only that account's isolated local cache and checks cloud state; it never silently merges guest work. Older consent remains explicit once after upgrade.
4. Completion, sampled quiz performance, self-assessed interview rubric coverage, checked worksheet figures and self-reported spreadsheet labs are distinguished in the UI. No readiness certification or uploaded-workbook validation is claimed.
5. DCF hard assessment expands from three to six questions, retaining original checks and adding a linked Northstar cash-flow/terminal/discount/bridge calculation, revised-scenario reasoning and formula-error analysis. Numeric variants are independently calculated. Hard questions include ungraded written approach practice; explanations follow submission. Existing quiz history is retained; older best scores are not reinterpreted as proficiency in the new questions.
6. Interview follow-up prompts by topic, with typed reasoning and material-error override: a self-reported material error keeps a question in review even with 75% rubric coverage. No paid AI or automatic judgment of spoken/written delivery.
7. Northstar Equipment, a fictional national industrial manufacturer, now appears in four deeper accounting lessons, linked DCF assessment and a planted-error repair task in Advanced Model Error Hunt. Editable tables check figures across all three statements; zero balances alone do not pass incorrect entries. The worked solution is optional. Draft worksheet inputs persist; checked status is recomputed after reopening. A snapshot can be appended to existing notes. The repair exercise checks four financial outputs, not arbitrary spreadsheet formulas.
8. Lesson assistant instructions explicitly distinguish service users from payers and explain that a person can be both. Workshops/repair are practice contexts with hints only.
9. Lesson notebook available alongside wide-screen reading and after content on phones; section prompts append rather than replace writing; Markdown download and failed-save warnings. Four accounting lessons gain deeper explanations, different practical exercises and a continuing case, not just more repeated prose.
10. AI assistance, creator attribution, historical source/period/units, source-check date and review limitations are transparent. Apple FY2025 figures remain linked to the original unaudited earnings release; they are not described as a complete annual filing or current results. No fabricated banker review.

## Incorrect/outdated or qualified review items

- Mobile outline already defaulted to collapsed below 701px; retained and browser-checked rather than implementing a duplicate behavior. A narrow screen loaded after the app was initially opened wide may retain its user's outline preference until a fresh page load.
- Notes and modeling labs already existed; extended their capability and clarified verification, without replacing them.
- Interview scoring already disclosed self-assessment. Improved material-error handling and follow-ups; did not describe existing scoring as paid AI grading or certification.
- The account-related apparent progress loss was an unresolved account/guest selection state, not confirmed deletion. Restored the previously consented account cache on return, preserving isolation.
- Review was sampled editorial feedback, not an audit of every lesson. We do not claim all 286 lessons were reviewed or rewritten.

## Deferred scope

- Full curriculum expansion and Northstar chapters through all forecasting, merger/LBO and recruiting lessons.
- Complete real-company filing research assignments and industrial issuer comparisons. Current real-company exercises use selected historical Apple excerpts plus links to complete source statements.
- Arbitrary workbook formula validation, uploaded Excel grading, automated voice/delivery judgment, new certification, and spaced adaptive assessment scheduling.
- Full human finance/editorial review. The continuing case deliberately omits tax, interest and dividends at the introductory stage and states these assumptions.

## Validation and release gates

- All automated suites (quiz variants/scoring, assistant boundary/security behavior, interview/backup, modeling calculations, cloud isolation/CAS merges, statement arithmetic, restoration, checklists and notes) must pass.
- Browser: editable worksheet grading, saved answers plus exact lesson step after reload, phone width/outline, wide notebook scrolling, recruiting checklist restoration and model repair. No production learner progress is modified during tests.
- Production build and Worker dry run. Existing large-bundle warning remains; no dependency versions changed.
- GitHub PR/CI before merge; deployment uses existing `ibasefinance` Worker and same production origin. Cloudflare preview first where available. Keep rollback version and verify live route/assets, optional sync configuration, exercise inputs and assistant practice response afterward.
- No database schema, RLS, permissions, OAuth provider configuration or credentials changed. Identity is still validated by the existing auth session; progress ownership is keyed to the authenticated user ID.
