> Historical pilot notes. Superseded by `learning-release.md` for the November 20 release, including editable worksheets and restored activity drafts.

# Statement learning and notebook pilot — November 4, 2026

Local branch: `feat/statement-learning-notes`. Built from local commit b88deb0 on the existing optional-cloud-sync branch. GitHub main cannot be refreshed while access is suspended. Before opening a PR, compare with current main and rebase/cherry-pick only this change; do not accidentally include unmerged sync work. No deployment or remote changes made.

## Implemented

- Notebook in every lesson, beside reading on screens at least 1250px wide and after content on narrow screens. Existing Notes dialog edits the same text.
- Append section prompts without replacing writing; download Markdown; save each edit synchronously, showing a recoverable storage error instead of claiming success when a write fails.
- Existing `ibase-notes` format, account isolation, backups and note conflict merging retained. No new backend, schema, credentials, account requirement or paid service.
- Four accounting lessons expanded: income statement, balance sheet, cash flow statement and three-statements-connect. Existing lesson routes, questions and completion IDs retained.
- Northstar Equipment is a fictional national industrial machinery manufacturer with service operations. Opening balances and five transactions are consistently linked across three statements. This is one simplified reporting period, not yet a full corporate history. Taxes, interest and dividends are deliberately excluded and labeled.
- Predict before recording an event; move backward/reset; inspect statement changes and the accounting check; append a case snapshot and reasoning to saved notes. Scratchpad and practice calculations are temporary until added to notes; they do not award mastery.
- Historical Apple FY2025 selected statement excerpts, sourced to the original unaudited earnings release (pages 1–3), with units/periods, calculation checks, explanations, and caveats. The original full statements open from source links. Not represented as an annual filing or current results.
- Authorship and source-check date stated without invented credentials. Assistant treats workshops as practice and provides hints.

## Validated feedback

Existing lessons already had notes, and the mobile outline already defaulted to collapsed. Preserved both. The concrete gap was that note-taking required leaving reading for a modal, and these lessons lacked an interactive common-company statement case. Added deeper reference explanations and application rather than padding every lesson.

## Validation

All automated tests, lint and production build pass. Tests cover every case event balancing, cash bridges, collection/capex/depreciation treatment, independent source-exercise arithmetic, malformed input, insertion into existing lessons, note append/export, backup/sync compatibility and failed-save draft retention. Browser checks at the available narrow viewport confirm collapsed outline, note restoration on reload, event table updates, saved snapshots and correct real-statement feedback. Wide desktop layout still needs visual review at a full-width browser before release. Build reports the existing large-bundle warning.

## Deferred

- Extend Northstar into working capital, forecasts, DCF, acquisitions, debt schedules and later modeling work after reviewing the pilot.
- An industrial issuer comparison and more complete source-statement research tasks; current real-company example is Apple.
- Exact lesson-position and workshop-input restoration. Saved notebooks and appended snapshots persist; workshop event position and scratch answers reset when reopened.
- Returning-account consent/restoration UX and the broader original feedback pass remain separate work.
- Human finance/editorial review, cloud round-trip acceptance and reconciliation against current main before release. No independent banker review claimed.
