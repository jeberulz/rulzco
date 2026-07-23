# WP01 Progress — Agentic Interface Positioning and Website Copy

Append-only progress log. Do not rely on chat history for project state.

## 2026-07-23 — Setup

- Branch/worktree: `feat/wp01-agentic-interface-positioning` in the main
  checkout; no worktree required.
- Assignment: Analyse the current website against the supplied pivot research,
  then improve the positioning and public-facing copy around Rulz&Co leading
  the design of agentic interfaces.
- File boundaries: Homepage and shared brand components, services content and
  data, primary SEO/LLM brand surfaces, README, and WP documentation listed in
  `docs/wp/wp01-stories.md`.
- Required checks: `npm run lint`, `npm run build`, focused copy search, and
  Playwright desktop/mobile review of `/` and `/services`.
- Initial risks:
  - The current site alternates between `I`, `we`, and `Rulz&Co`.
  - Current services explicitly say development is not offered, while the pivot
    promises design and build.
  - Existing portfolio work is adjacent proof, not yet proof of the full
    agentic interface proposition.
  - The supplied playbooks recommend new price bands, but pricing is an owner
    decision and will not be changed in this WP without approval.
  - `.agents/`, `.claude/`, and `docs/playbook/` were untracked on `main`.
    `.agents/` and `.claude/` are treated as unrelated user work and remain
    untouched. The playbooks are read-only source material for WP01.

## 2026-07-23 — WP01-S1

- Actions taken:
  - Read all five supplied playbook and research documents.
  - Audited homepage, services, shared navigation/footer, work, studio, Labs,
    SEO metadata, structured service data, author boilerplate, and `llms.txt`.
  - Captured the final synthesis in `docs/wp/wp01-copy-strategy.md`.
- Decisions made:
  - Own `agentic interface design and build` as the category.
  - Use `interface layer` as an explanatory phrase rather than the category
    label.
  - Target startups and mid-market product teams with a working AI capability
    but a weak or missing user-facing product layer.
  - Promise how people understand, steer, verify, approve, and recover from AI
    work.
  - Use `we` for the Rulz&Co offer and reserve `I` for founder biography.
  - Keep current public price floors unchanged during WP01.
- Checks run: Manual cross-check against all supplied source documents and
  public-facing copy inventory.
- Result: Passed. The positioning, proof boundary, offer architecture, voice,
  and next proof-building steps are explicit.
- Gotchas: The existing portfolio is adjacent proof of complex interaction
  craft, not yet a complete agentic-interface proof portfolio.
- Next: Implement homepage and shared copy.

## 2026-07-23 — WP01-S2

- Actions taken:
  - Rewrote the homepage hero, service columns, process, engagement models,
    point of view, benefits, project summaries, fit criteria, founder-led close,
    navigation description, and footer.
  - Connected the three primary project CTAs to email and `View All Work` to
    `/work`.
- Decisions made:
  - Lead with `We design the interfaces where people and AI agents work
    together.`
  - Preserve the existing visual system, hierarchy, animations, and layout.
  - Reframe existing work around evidenced interaction craft without presenting
    every project as an agentic AI implementation.
- Checks run: TypeScript, production build, and browser review at desktop and
  mobile widths.
- Result: Passed. The first viewport, supporting sections, fit, and footer tell
  one coherent story with functional CTAs.
- Gotchas: The homepage references four image paths that are not present in
  `public/images/`; this pre-existing asset gap is outside WP01.
- Next: Align the commercial offer.

## 2026-07-23 — WP01-S3

- Actions taken:
  - Reframed the service practice around Design, Strategy, and Build.
  - Replaced Product Sprint / AI MVP Build / Product Partner with Interface
    Diagnostic / Agentic Interface Build / Interface Partner.
  - Updated service metadata, Open Graph copy, process, FAQs, and structured
    service data.
- Decisions made:
  - Make the development boundary precise: scoped React frontends connected to
    an existing AI stack are in scope; large backend, infrastructure, and deep
    integration programmes are not silently promised.
  - Preserve the published price floors of £3,500 / £12,000 / £3,000 per
    month.
- Checks run: Structured-data source review, TypeScript, production build, and
  browser review at desktop and mobile widths.
- Result: Passed. The offer now supports the design-and-build positioning and
  no longer says `Code, no`.
- Gotchas: None.
- Next: Align the remaining brand surfaces.

## 2026-07-23 — WP01-S4

- Actions taken:
  - Updated the default metadata, Open Graph alt/title, `llms.txt`, README, work
    description/CTA, author taxonomy and bio, editorial boilerplate, studio
    hero/metadata, Labs positioning, and one direct project taxonomy reference.
  - Ran a focused content search for the superseded primary phrases.
- Decisions made:
  - Position Labs as the future direct proof surface for agentic interface
    patterns.
  - Leave long-form articles, detailed case-study bodies, proposals, and the
    partnership business model unchanged.
- Checks run: Focused `rg` search, `git diff --check`, TypeScript, and production
  build.
- Result: Passed. No superseded primary positioning phrase remains in the
  WP01 public-surface scope.
- Gotchas: The partnership page retains its own AI-native/equity positioning by
  design; it needs a separate business-model review, not a search-and-replace.
- Next: Run the final gate.

## 2026-07-23 — WP01-S5

- Actions taken:
  - Restored dependencies from the committed `package-lock.json` after a local
    pnpm tool mismatch, then ran the repository in npm/production mode.
  - Verified homepage and services page in a real browser at 1440px and 390px.
  - Checked page titles, descriptions, CTA destinations, console output, and
    horizontal overflow.
- Checks run:
  - `git diff --check` — passed.
  - `npx tsc --noEmit` — passed.
  - `npm run build` — passed; all 58 static/dynamic routes generated.
  - Production homepage at desktop — passed; no horizontal overflow, no browser
    warnings/errors.
  - Production services at mobile — passed; no horizontal overflow, no browser
    warnings/errors.
  - `npm run lint` — not runnable non-interactively because the pre-existing
    script invokes Next's ESLint setup prompt and the repository has no ESLint
    config. The production build's integrated lint/type gate passed.
- Result: Passed with the documented standalone-lint gap.
- Found not fixed:
  - Missing homepage project-card assets:
    `public/images/rinkl-card.png`, `ds-card.png`, `hnp-card.png`, and
    `scan-card.png`.
  - The footer newsletter input has no submission implementation and its
    submit button has no accessible name.
  - `npm ci` reports four existing dependency vulnerabilities (one low, one
    moderate, two high). No dependency or lockfile change is in WP01 scope.
- Next:
  - Build the lead click-to-source document interface in Labs.
  - Review the partnership page against the new specialist positioning.
  - Fix the homepage asset and footer form gaps in a separate scoped WP.

## 2026-07-23 — WP01-S6

- Actions taken:
  - Replaced the mobile two-column table collapse with two intentionally grouped
    lists: Good fit first, then Not a good fit.
  - Kept the desktop comparison as two aligned columns.
  - Reduced the excessive mobile gap below the project CTA.
- Checks run:
  - `git diff --check` — passed.
  - `npx tsc --noEmit` — passed.
  - `npm run build` — passed; all 58 static/dynamic routes generated.
  - Browser review at 390px — passed; headings and entries remain grouped and
    readable.
  - Browser review at 1280px — passed; both column headings share the same
    vertical position and equal width.
- Result: Passed. The fit criteria now follow the intended content hierarchy at
  both mobile and desktop breakpoints.
- Gotchas: None.
- Next: Continue with the existing WP01 proof-building and page-alignment work.
