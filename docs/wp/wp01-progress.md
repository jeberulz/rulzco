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

## 2026-07-26 — WP01-S7 setup

- Assignment: Replace the second portfolio case study with Margin, a
  self-initiated finance-dashboard product demo, while keeping all case-study
  work on `feat/wp01-agentic-interface-positioning`.
- Route decision: Keep the existing `/work/rinkl` slug so current links and
  case-study ordering remain stable; change the public title and content to
  Margin.
- File boundaries: `lib/projects.ts`, `components/Portfolio.tsx`, and the WP01
  registry/story/progress documents.
- Required checks: `git diff --check`, TypeScript, production build, and browser
  review at desktop and 390px.
- Content guardrails:
  - Label the work as a self-initiated product demo.
  - Treat Cobble Lane Coffee Roasters and all figures as invented, internally
    consistent demonstration data.
  - Use placeholders for all seven gallery states until real product shots are
    supplied.
  - Never imply a client relationship, live deployment, measured outcome, or
    autonomous commitment.

## 2026-07-26 — WP01-S7 complete

- Actions taken:
  - Replaced all Rinkl public case-study content with Margin while preserving
    the `/work/rinkl` route and slot 02 ordering.
  - Added the seven supplied states and made Margin note linked the lead
    placeholder.
  - Added the Cobble Lane Coffee Roasters subject, internally consistent cost
    and margin figures, component inventory, proof close, and project CTA.
  - Removed the former client testimonial, delivery metrics, and adjacent-proof
    framing.
  - Updated the homepage portfolio card to present Margin with a custom
    self-initiated placeholder rather than the missing Rinkl product image.
- Decisions made:
  - Keep the current route stable until a separate slug/redirect decision is
    requested.
  - Treat Margin as direct agentic-interface proof rather than reframing a
    non-agentic client project.
  - Keep every gallery visual as an explicit placeholder until final product
    shots are provided.
- Checks run:
  - `git diff --check` — passed.
  - `./node_modules/.bin/tsc --noEmit` — passed.
  - `npm run build` — passed; all 60 generated pages completed, including
    `/work/rinkl` and its Open Graph image.
  - Browser review at the default desktop viewport — passed.
  - Browser review at 390px — passed; the title, self-initiated label, tags,
    lead placeholder, and caption remain readable without overflow.
  - Homepage portfolio card check — passed; Margin and its custom placeholder
    copy are present.
  - Browser console warnings/errors — none.
- Result: Passed. Margin now occupies case-study slot 02 as a clearly labelled
  self-initiated product demo with seven ready-to-replace image placeholders.
- Gotchas:
  - The stable route remains `/work/rinkl`; changing it to `/work/margin`
    requires a separate redirect and internal-link update.
  - Final product imagery is intentionally not part of this story.
- Next: Replace the Margin placeholders with the final seven product shots,
  starting with Margin note linked.

## 2026-07-26 — WP01-S8 setup

- User correction: The case-study title had changed, but the page slug still
  exposed Rinkl. “Page name” includes the canonical URL, not only the rendered
  heading and browser title.
- Assignment: Move Margin to `/work/margin` and retain `/work/rinkl` only as a
  permanent compatibility redirect.
- File boundaries: Margin ids in `lib/projects.ts` and
  `components/Portfolio.tsx`, redirect configuration in `next.config.ts`, and
  WP01 registry/story/progress documents.
- Guardrail: Do not rename the separate Rinkl references in partnership and
  proposal content; those describe different work.

## 2026-07-26 — WP01-S8 complete

- Actions taken:
  - Changed the case-study and homepage portfolio ids from `rinkl` to `margin`.
  - Added a permanent redirect from `/work/rinkl` to `/work/margin`.
  - Left the independent Rinkl partnership and proposal references unchanged.
- Checks run:
  - `git diff --check` — passed.
  - `./node_modules/.bin/tsc --noEmit` — passed.
  - `npm run build` — passed; static output now includes `/work/margin` and
    `/work/margin/opengraph-image`.
  - `/work/margin` — HTTP 200.
  - `/work/rinkl` — HTTP 308 permanent redirect to `/work/margin`.
  - Browser redirect check — passed; the final URL, page title, heading, and
    breadcrumb all use Margin.
- Result: Passed. Margin is now the canonical page name and URL while the
  former address remains safe for existing links.

## 2026-07-26 — WP01-S9 setup

- Assignment: Replace case-study slot 03 with Draft, a self-initiated support
  product demo, while keeping all case-study work on
  `feat/wp01-agentic-interface-positioning`.
- Route decision: Make `/work/draft` canonical and retain
  `/work/deskscapes` only as a permanent compatibility redirect.
- File boundaries: `lib/projects.ts`, `components/Portfolio.tsx`,
  `next.config.ts`, and the WP01 registry/story/progress documents.
- Required checks: `git diff --check`, TypeScript, production build, redirect
  checks, and browser review at desktop and 390px.
- Content guardrails:
  - Label the work as a self-initiated product demo.
  - Treat Thornbury Cycles, ticket TC-19442, and the policy sections as
    invented but internally consistent demonstration data.
  - Use placeholders for all seven gallery states until real product shots are
    supplied, with Gate closed as the lead state.
  - Present the send hold as deliberate product behaviour, not a broken or
    generic error state.
  - Never imply a client relationship, live deployment, measured outcome, or
    autonomous approval.
  - Leave separate historical DeskScapes references untouched.

## 2026-07-26 — WP01-S9 complete

- Actions taken:
  - Replaced case-study slot 03 and its homepage card with Draft.
  - Made `/work/draft` the canonical project route and added a permanent
    redirect from `/work/deskscapes`.
  - Added the supplied Thornbury Cycles ticket, all four sourced and unsupported
    claims, claim-level interaction framing, component inventory, proof close,
    and project CTA.
  - Added seven numbered image placeholders and made Gate closed the lead
    visual.
  - Removed the former DeskScapes client framing, metrics, deliverables, and
    missing homepage card image from the case-study slot.
- Decisions made:
  - Treat Draft as direct proof of the Rulz&Co agentic-interface positioning,
    with the send gate—not the generated reply—as the product.
  - Describe the hold as an intentional action state that names its blocker and
    rejects send, rather than a generic error.
  - Preserve unrelated historical DeskScapes references outside the case-study
    slot.
- Checks run:
  - `git diff --check` — passed.
  - `./node_modules/.bin/tsc --noEmit` — passed after the production build
    regenerated the Next.js route types.
  - `npm run build` — passed; static output includes `/work/draft` and
    `/work/draft/opengraph-image`.
  - `/work/draft` — HTTP 200.
  - `/work/deskscapes` — HTTP 308 permanent redirect to `/work/draft`.
  - Browser review at 1440px and 390px — passed; title, self-initiated label,
    lead placeholder, and supporting copy remain readable.
  - Homepage portfolio card — passed; Draft and its custom placeholder are
    present and DeskScapes is absent.
  - Browser console warnings/errors — none.
- Result: Passed. Draft now occupies case-study slot 03 as a clearly labelled
  self-initiated product demo with seven ready-to-replace image placeholders.
- Gotchas:
  - Port 3001 was occupied by the separate Margin prototype, so this website
    remains running on port 3003 for review.
  - Final product imagery is intentionally outside this story.
- Next: Replace the Draft placeholders with the seven final product shots,
  starting with Gate closed.

## 2026-07-26 — WP01-S10 setup

- Assignment: Replace case-study slot 04 with Brief, a self-initiated research
  product demo, while keeping all case-study work on
  `feat/wp01-agentic-interface-positioning`.
- Route decision: Make `/work/brief` canonical and retain `/work/human-node`
  only as a permanent compatibility redirect.
- File boundaries: `lib/projects.ts`, `components/Portfolio.tsx`,
  `next.config.ts`, and the WP01 registry/story/progress documents.
- Required checks: `git diff --check`, TypeScript, production build, redirect
  checks, and browser review at desktop and 390px.
- Content guardrails:
  - Label the work as a self-initiated product demo.
  - Treat Pennine Freight, the five sources, and all figures as invented but
    internally consistent demonstration data.
  - Use placeholders for all seven gallery states until real product shots are
    supplied, with Mid-flight as the lead state.
  - Make the ninety-second research pass visible through content and source
    state, not a decorative progress animation.
  - Name slow and failed sources and keep the evidence gap attached to the
    recommendation it changes.
  - Never imply a client relationship, live deployment, measured outcome, or
    autonomous sign-off.

## 2026-07-26 — WP01-S10 complete

- Actions taken:
  - Replaced case-study slot 04 and its homepage card with Brief.
  - Made `/work/brief` the canonical project route and added a permanent
    redirect from `/work/human-node`.
  - Added the supplied Pennine Freight question, five-source research pass,
    slow and failed source states, internally consistent fleet figures, split
    recommendation, component inventory, proof close, and project CTA.
  - Added seven numbered image placeholders and made Mid-flight the lead
    visual.
  - Removed the former Human Node client framing, metrics, deliverables, and
    missing homepage card image from the case-study slot.
- Decisions made:
  - Treat Brief as direct proof of visible agent activity during a long-running
    task, rather than presenting progress as decoration.
  - Keep evidence aligned with the prose it supports and leave failed-source
    gaps visible where they alter the recommendation.
  - Make the incomplete evidence responsible for the split fleet decision:
    convert ten depot vans and hold four long-route vans.
- Checks run:
  - `git diff --check` — passed.
  - `./node_modules/.bin/tsc --noEmit` — passed.
  - `npm run build` — passed; static output includes `/work/brief` and
    `/work/brief/opengraph-image`.
  - `/work/brief` — HTTP 200.
  - `/work/human-node` — HTTP 308 permanent redirect to `/work/brief`.
  - Browser review at 1440px and 390px — passed; title, self-initiated label,
    Mid-flight placeholder, and supporting copy remain readable.
  - All seven gallery states — present in the rendered page.
  - Homepage portfolio card — passed; Brief and its custom placeholder are
    present and Human Node is absent.
  - Browser console warnings/errors — none.
- Result: Passed. Brief now occupies case-study slot 04 as a clearly labelled
  self-initiated product demo with seven ready-to-replace image placeholders.
- Gotchas:
  - Port 3001 remains occupied by the separate Margin prototype, so this
    website continues running on port 3003 for review.
  - Final product imagery is intentionally outside this story.
- Next: Replace the Brief placeholders with the seven final product shots,
  starting with Mid-flight.
