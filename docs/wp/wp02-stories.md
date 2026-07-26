# WP02 Stories — Algolia AI Workforce Wireframe Base

Branch: `codex/wp02-ai-workforce-base`
Lane: Work Package
Registry: `docs/PROJECT_STRATEGY.md`
Definition of done: The `/ai-workforce` prototype provides a coherent,
interactive wireframe base for an employee-owned AI workforce: strategy, goals,
work, AI team, library, artifacts, inbox, activity, settings, and the Alex
Morgan onboarding journey are represented and verified in the browser.

## Stories

- [x] `WP02-S1` — Map proven workforce-management patterns to the employee model
  - Scope: local Paperclip reference, PRD, IA/journey, this story file
  - Acceptance criteria:
    - Tasks, subtasks, routines, runs, inbox, artifacts, skills, activity, agent
      configuration, and resource guardrails are assessed.
    - Company-specific metaphors are excluded.
    - Human ownership, approval, taste, and non-delegables stay explicit.
  - Verification:
    - Read-only browser inspection of the local reference.

- [x] `WP02-S2` — Build the core operating workspace
  - Scope: `components/ai-workforce/WorkforcePrototype.tsx`,
    `components/ai-workforce/workforce.module.css`
  - Acceptance criteria:
    - Strategy, Goals, Work, AI Team, Library, and Artifacts have purposeful,
      populated wireframe states.
    - Work supports Tasks, Routines, and Runs views.
    - The task detail exposes ownership, acceptance criteria, related artifacts,
      activity, and execution controls.
    - Existing Today, Goal Plan, and AI Team interactions remain usable.
  - Verification:
    - Browser walkthrough of each primary navigation destination.

- [x] `WP02-S3` — Build the control and provenance workspace
  - Scope: `components/ai-workforce/WorkforcePrototype.tsx`,
    `components/ai-workforce/workforce.module.css`
  - Acceptance criteria:
    - Inbox distinguishes decisions, reviews, blockers, and recovery.
    - Activity records human, agent, and system actions with useful context.
    - Settings covers models, autonomy, notifications, simulation, resource
      guardrails, and onboarding replay.
    - Simulation and human-approval boundaries are visible.
  - Verification:
    - Browser walkthrough and interaction checks.

- [x] `WP02-S4` — Build the Alex Morgan employee onboarding
  - Scope: `components/ai-workforce/WorkforcePrototype.tsx`,
    `components/ai-workforce/workforce.module.css`
  - Acceptance criteria:
    - The demo employee is Alex Morgan, Staff Product Designer.
    - The flow establishes role, mission, responsibilities, taste, guardrails,
      Strategy Partner, runtime, environment, workspace, strategy, specialist
      team, and first plan.
    - Work cannot begin before environment, strategy, team, and plan approval.
    - Onboarding can be replayed from the product.
  - Verification:
    - Complete the flow from welcome to the first approved plan in the browser.

- [x] `WP02-S5` — Gate the complete wireframe base
  - Scope: WP02 implementation, `design-qa.md`,
    `docs/wp/wp02-progress.md`
  - Acceptance criteria:
    - TypeScript and production build pass or failures are recorded accurately.
    - Core desktop screens have no broken controls or horizontal overflow.
    - A source/reference and implementation visual comparison is recorded.
    - The design QA result is `passed`.
  - Verification:
    - `npx tsc --noEmit`
    - `npm run build`
    - In-app browser review at a desktop viewport.

## Out of Scope

- Real model, agent-runtime, authentication, HRIS, or Algolia integrations.
- Persistent data, production deployment, and autonomous side effects.
- Employee surveillance, productivity scoring, or performance management.
- A literal clone of Paperclip's company, board, budget, or hiring metaphors.
