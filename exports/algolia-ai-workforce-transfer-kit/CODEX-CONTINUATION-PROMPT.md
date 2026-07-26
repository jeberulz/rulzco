# Codex Continuation Prompt

Copy everything below the divider into a new Codex task on the work computer.

---

You are resuming the Algolia AI Workforce project from a completed product
definition and interactive wireframe. Do not restart discovery, rename the
product, or replace the existing information architecture before reviewing the
source-of-truth files.

First, read these files completely in order:

1. `START-HERE.md`
2. `docs/CONVERSATION-CONTEXT.md`
3. `docs/CHAT-TRANSCRIPT.md`
4. `docs/product/PRD.md`
5. `docs/product/INFORMATION-ARCHITECTURE-AND-JOURNEY.md`
6. `docs/PRODUCT-DECISIONS.md`
7. `docs/IMPLEMENTATION-STATUS.md`
8. `docs/REFERENCE-PATTERNS.md`
9. `docs/DESIGN-QA.md`
10. `prototype/AGENTS.md`

Then inspect the prototype code and visual evidence:

- `prototype/components/ai-workforce/WorkforcePrototype.tsx`
- `prototype/components/ai-workforce/workforce.module.css`
- `assets/wireframes/`

After reading:

1. Confirm the product model in your own words.
2. Run `npm install`, `npm run typecheck`, and `npm run build` from
   `prototype/`.
3. Start the prototype and verify `/` and `/ai-workforce`.
4. Report any differences between the documented state and the running state.
5. Do not make implementation changes until the verification report is
   complete.

Product invariants:

- The human employee is the principal and orchestrator.
- The most capable approved reasoning model acts as Strategy Partner.
- The Strategy Partner co-creates strategy, challenges assumptions, recommends
  the AI team, creates plans, and coordinates work. It does not own human taste
  or final strategy.
- Specialist AI employees execute through named skills, approved tools, and
  bounded context.
- Environment, strategy, team, and plan require human approval before work
  starts.
- Publishing, merging, deployment, spending, customer contact, and material
  scope changes require human approval.
- Every action must be traceable to an actor, origin, goal/task, evidence,
  timestamp, and recovery state.
- The system must not score or surveil human employees.
- Use synthetic data until an approved internal data model exists.
- Runtime and tool activity must remain labelled `Simulated` until real
  integrations are deliberately added.

The current demo employee is Alex Morgan, Staff Product Designer. Their proposed
team is:

- Strategy Partner
- Research Assistant
- Junior Product Designer
- Prototype Builder
- Design QA Reviewer

The complete wireframe currently includes:

- Eight-step employee onboarding
- Today and the human decision queue
- Strategy and durable operating context
- Goals and approved plan hierarchy
- Tasks, subtasks, routines, and runs
- AI Team map and specialist detail
- Skills, context, tools, and templates library
- Artifacts and evidence review
- Inbox, provenance activity, recovery states, and settings

Treat the existing prototype as a base to evolve, not disposable demo code.
Before a significant implementation:

- State the proposed work package and file boundaries.
- Explain which PRD requirement or validated user journey it serves.
- Preserve the current product invariants.
- Run typecheck and production build.
- Update `docs/IMPLEMENTATION-STATUS.md` and the delivery log.

My first request after verification will define the next implementation slice.

---
