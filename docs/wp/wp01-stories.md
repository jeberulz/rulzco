# WP01 Stories — Agentic Interface Positioning and Website Copy

Branch: `feat/wp01-agentic-interface-positioning`
Lane: Work Package
Registry: `docs/PROJECT_STRATEGY.md`
Definition of done: The homepage, services page, shared brand surfaces, and
machine-readable positioning consistently present Rulz&Co as an agentic
interface design-and-build studio; copy is verified in the rendered site and
the production build passes.

## Stories

- [x] `WP01-S1` — Audit the current positioning and define the message system
  - Scope: `docs/playbook/**`, `docs/wp/wp01-copy-strategy.md`
  - Acceptance criteria:
    - The current website's positioning gaps are documented.
    - The category, audience, problem, promise, proof boundary, voice, and
      message hierarchy are explicit.
    - The direction resolves the current "AI product design" versus "agentic
      interface design" ambiguity.
  - Verification:
    - Manual review against all five supplied playbook documents.

- [x] `WP01-S2` — Reposition the homepage and shared brand surfaces
  - Scope: `components/Hero.tsx`, `components/Process.tsx`,
    `components/Benefits.tsx`, `components/Portfolio.tsx`,
    `components/About.tsx`, `components/NavMenu.tsx`, `components/Footer.tsx`
  - Acceptance criteria:
    - The first viewport names agentic interface design and the design-and-build
      promise.
    - Process, benefits, fit, and calls to action support the same category.
    - Project summaries are reframed honestly around relevant interaction craft
      without inventing AI outcomes.
    - Navigation and footer no longer revert to generic digital-agency copy.
  - Verification:
    - Local browser review at desktop and mobile viewport widths.

- [x] `WP01-S3` — Align the commercial offer with the positioning
  - Scope: `components/services/ServicesPage.tsx`, `lib/services-data.ts`,
    `app/services/page.tsx`, `app/services/opengraph-image.tsx`
  - Acceptance criteria:
    - Services are organised around direction, interaction design, and build.
    - Engagement models clearly describe an interface diagnostic, a working
      interface build, and ongoing iteration.
    - No public service copy says that Rulz&Co does not write code.
    - Existing price floors are not changed without an explicit owner ruling.
  - Verification:
    - Services page and FAQ browser review.
    - Structured service/FAQ data remains sourced from `lib/services-data.ts`.

- [x] `WP01-S4` — Align search, social, and machine-readable brand copy
  - Scope: `lib/seo/site-config.ts`, `app/opengraph-image.tsx`,
    `app/llms.txt/route.ts`, `README.md`, `app/work/page.tsx`,
    `components/work/WorkPage.tsx`, `components/news/ArticlePage.tsx`,
    `lib/authors.ts`, `app/studio/page.tsx`,
    `components/studio/StudioPage.tsx`, `app/labs/page.tsx`,
    `components/labs/LabsIndex.tsx`, `lib/projects.ts`
  - Acceptance criteria:
    - Default metadata, Open Graph copy, `llms.txt`, and repository description
      use the same category and promise.
    - Work and editorial brand boilerplate no longer describe Rulz&Co as a
      general AI product-design partner.
  - Verification:
    - Content search for superseded primary positioning phrases.
    - Production build.

- [x] `WP01-S5` — Gate the copy implementation
  - Scope: files declared in WP01 plus `docs/wp/wp01-progress.md`
  - Acceptance criteria:
    - Type/lint/build checks pass or failures are documented accurately.
    - Homepage and services page are exercised in a real browser.
    - Desktop and mobile screenshots show no copy overflow or broken controls.
    - Progress, decisions, checks, risks, and found-not-fixed items are recorded.
  - Verification:
    - `npm run lint`
    - `npm run build`
    - Playwright CLI snapshots and screenshots.

- [x] `WP01-S6` — Repair the mobile fit comparison
  - Scope: `components/Portfolio.tsx`
  - Acceptance criteria:
    - Mobile presents all Good fit criteria as one group, followed by all Not a
      good fit criteria.
    - Desktop retains the side-by-side comparison.
    - The section has no mobile content-order or spacing regression.
  - Verification:
    - Browser review at 390px and 1280px.
    - TypeScript and production build.

## Out of Scope

- Redesigning the visual system, page layout, motion, or component architecture.
- Inventing new case-study results, testimonials, client metrics, or compliance
  claims.
- Building the agentic interface demo portfolio described in the playbooks.
- Rewriting long-form articles, individual case-study bodies, proposals, or the
  partnership business model.
- Changing service price floors without owner approval.

## Notes

- The supplied `docs/playbook/` files are source material. WP01 preserves them
  as-is and records the final synthesis separately.
- Promote unknown product decisions to `docs/wp/RULINGS.md`.
