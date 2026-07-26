# Agent Instructions — Algolia AI Workforce

Read these files before proposing or implementing product changes:

1. `../START-HERE.md`
2. `../CODEX-CONTINUATION-PROMPT.md`
3. `../docs/product/PRD.md`
4. `../docs/product/INFORMATION-ARCHITECTURE-AND-JOURNEY.md`
5. `../docs/PRODUCT-DECISIONS.md`
6. `../docs/IMPLEMENTATION-STATUS.md`

## Product rules

- The human employee is the principal and orchestrator.
- The most capable approved reasoning model acts as Strategy Partner.
- The Strategy Partner may challenge, recommend, plan, and coordinate. It does
  not own the human's strategy or taste.
- Specialist AI employees execute bounded work through named skills, approved
  tools, and scoped context.
- Environment, strategy, AI team, and plan must be approved before autonomous
  work starts.
- Publishing, merging, deployment, spending, customer contact, and material
  scope changes require human approval.
- Every material action needs an origin, actor, goal/task, evidence, timestamp,
  and recoverable state.
- Never add employee surveillance, human productivity scoring, or performance
  management.
- Keep mock runtime and tool actions visibly labelled `Simulated` until real
  integrations exist.

## Implementation rules

- Preserve the compact monochrome enterprise wireframe language unless a new
  visual direction is explicitly approved.
- Use realistic synthetic data only.
- Keep the prototype runnable at `/` and `/ai-workforce`.
- Run `npm run typecheck` and `npm run build` before claiming completion.
- Update `../docs/IMPLEMENTATION-STATUS.md` and the relevant delivery notes
  after meaningful changes.
