# Vintage finance workstation review

This redesign is proposed on `vintage-finance-workstation` for review before merge or deployment. The Cloudflare Worker configuration, deployment workflow, package manifest/lockfile, curriculum data, lesson order, question banks, scoring utilities, and localStorage keys are unchanged.

## Interface

- Warm paper `#F2EFE6`, ink `#191919`, green `#205544`, square corners, ruled directories, monospace controls and tabular numerals. Three original 8 × 8 pixel SVG icons.
- Homepage exposes real curriculum lessons, an immediate Finance From Zero route, area directory, and working sample lesson. No fabricated metrics or endorsements.
- Curriculum calculates 278 lessons from the current data, preserves module codes, searches lesson titles, and shows completion, next unfinished lesson, XP, and review queue. Device-local storage is explicitly explained.
- Lessons retain the existing sequence and practice gates. The outline is collapsible, initially open on desktop and closed on phones. Breadcrumbs, current step, progress, and Notes stay above the reading column.
- Notes/definitions use labeled dialogs with keyboard focus containment and Escape dismissal. Notes return focus to their button. Route changes focus the reading heading; interactive controls have a visible green focus outline.
- Existing learning screens gain shareable `/learn`, `/track/:id`, `/module/:id`, `/lesson/:id`, `/interview`, `/ai`, and `/review` URLs. Privacy, Terms, unknown-page handling, and SPA fallback remain intact. Refresh reopens a lesson at its first step, matching the existing step persistence behavior. Quiz attempts remain transient; best scores remain saved.

## Checks performed (October 8, 2026)

- Exact `npm ci --ignore-scripts` install from the unchanged npm lockfile.
- `npm run lint`: passes with no warnings.
- `npm run build`: passes. Existing large JavaScript chunk warning remains (about 773 KB uncompressed / 232 KB gzip).
- `npm audit --omit=dev --audit-level=high`: zero vulnerabilities.
- Full audit: the unchanged Wrangler 4.148.0 development dependency brings in the sharp/librsvg advisory GHSA-wq5f-xc86-pv6w, propagated through miniflare (three high-severity entries for one dependency chain). This is documented for a separate targeted tooling update; no deployment dependency was silently changed.
- `git diff --check`: passes. No curriculum, grading utility, legal copy, storage key, or Cloudflare configuration changes.

## Browser interaction checks

- Homepage curriculum preview, sample lesson, directory, and mobile Menu → Learn IB.
- Search matches a real lesson; a nonexistent title yields zero results and a useful clear-search action.
- First lesson: reading, worked example, wrong/correct multiple-choice explanations, written-answer grading (100%), completion, next lesson, 50 XP, and curriculum progress changing to 1 / 278.
- Saved notes survive page reload. In the final production build, Tab stays in the notes dialog, Escape closes it, and focus returns to Notes.
- Numeric question: 200 × $5 accepted as 1000 with the original explanatory feedback.
- Module Quick Check: four questions, two correct → 50%, missed-answer explanations, saved best score, and missed concepts entering the review queue. Mark reviewed removes a concept.
- Interview Prep: real Valuation/Beginner filters, typed answer, benchmark reveal, self-grading, and weak-question queue.
- Direct AI lesson opens and survives refresh with the correct module origin.
- Privacy, Terms, unknown URL → 404, and browser Back from lesson → homepage.
- Mobile homepage/curriculum at 390 px, curriculum/lesson at 320 px, and desktop lesson at 1280 px; no horizontal document overflow in inspected views. Mobile outline expands by keyboard.

## WCAG contrast

Ratios calculated using sRGB relative luminance. All listed normal-text combinations exceed 4.5:1.

| Foreground | Background | Ratio |
| --- | --- | --- |
| Ink `#191919` | Paper `#F2EFE6` | 15.29:1 |
| Green `#205544` | Paper `#F2EFE6` | 7.47:1 |
| Muted `#50534d` | Paper `#F2EFE6` | 6.80:1 |
| Muted `#50534d` | Panel `#e3e2d9` | 6.01:1 |
| Green `#205544` | Selected/correct `#e1e9df` | 6.92:1 |
| Error `#833d24` | Incorrect `#f0e3d5` | 6.27:1 |

Rendered text contrast checks also found no below-4.5:1 text combinations on the inspected homepage, sample lesson, and Terms views. This is a targeted QA pass, not a claim of exhaustive assistive-technology certification.
