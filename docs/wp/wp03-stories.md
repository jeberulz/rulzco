# WP03 Stories — Algolia AI Workforce Transfer Kit

Branch: `codex/wp03-algolia-transfer-kit`
Lane: Work Package
Registry: `docs/PROJECT_STRATEGY.md`
Definition of done: A self-contained, studio-independent archive includes the
working prototype, product documents, Algolia-specific conversation context,
visual evidence, Codex continuation prompt, and setup instructions; the archive
builds successfully and contains no personal-company references.

## Stories

- [x] `WP03-S1` — Inventory the complete Algolia AI Workforce state
  - Scope: existing PRD, IA/journey, prototype, delivery docs, visual evidence,
    and Algolia-specific conversation history.
  - Acceptance criteria:
    - Product truth, implementation, and visual evidence are identified.
    - Studio-only files and unrelated conversations are excluded.
  - Verification:
    - Focused file and content inventory.

- [x] `WP03-S2` — Create the standalone prototype repository
  - Scope: `exports/algolia-ai-workforce-transfer-kit/prototype/**`
  - Acceptance criteria:
    - The prototype runs independently of the current website.
    - Both `/` and `/ai-workforce` open the workforce experience.
    - Only necessary packages and project configuration are included.
  - Verification:
    - Clean dependency install, typecheck, and production build.

- [x] `WP03-S3` — Create the continuation and knowledge package
  - Scope: `exports/algolia-ai-workforce-transfer-kit/docs/**`,
    `exports/algolia-ai-workforce-transfer-kit/START-HERE.md`,
    `exports/algolia-ai-workforce-transfer-kit/CODEX-CONTINUATION-PROMPT.md`
  - Acceptance criteria:
    - PRD, IA/journey, product decisions, conversation reconstruction,
      implementation status, and next steps are included.
    - A ready-to-paste Codex prompt explains how to resume without re-discovery.
    - Work-computer setup and migration steps are explicit.
  - Verification:
    - Manual cross-check against current product state.

- [x] `WP03-S4` — Include visual evidence and references
  - Scope: `exports/algolia-ai-workforce-transfer-kit/assets/**`
  - Acceptance criteria:
    - Core Today, Goal Plan, AI Team, Strategy, Work, onboarding, and responsive
      visuals are included.
    - Reference material is labelled separately from the product.
  - Verification:
    - File inventory and image readability check.

- [x] `WP03-S5` — Scrub, gate, and archive
  - Scope: complete export folder and generated `.zip`.
  - Acceptance criteria:
    - No case-insensitive personal-company reference exists in any exported text
      file, filename, package metadata, title, or generated archive listing.
    - No credentials, environment files, node modules, build output, or
      unrelated company/project material is included.
    - A portable checksum is produced.
  - Verification:
    - Focused prohibited-term scan.
    - Secret-shaped string scan.
    - Standalone build.
    - Archive listing and checksum.

## Out of Scope

- Deploying or publishing the prototype.
- Configuring work-computer credentials or employer systems.
- Implementing real Claude, Codex, Algolia, Figma, GitHub, HRIS, or knowledge
  integrations.
- Exporting unrelated website, studio, side-project, or personal-company data.
