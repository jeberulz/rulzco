# WP02 Progress — Algolia AI Workforce Wireframe Base

Append-only progress log. Do not rely on chat history for project state.

## 2026-07-24 — Setup and reference review

- Branch: `codex/wp02-ai-workforce-base`.
- Assignment: Extend the existing `/ai-workforce` prototype into the complete
  wireframe base for an employee-owned AI workforce and add the Alex Morgan
  onboarding journey.
- Inputs:
  - `tasks/prd-algolia-agent-workbench.md`
  - `tasks/algolia-ai-workforce-information-architecture-and-user-journey.md`
  - Local reference task-and-agent manager reviewed during the original session
- Reference flows reviewed:
  - Dashboard and workforce-level health.
  - Task list, task hierarchy, task detail, properties, comments, related work,
    reviewers, approvers, monitors, and execution metadata.
  - Routines and recent runs.
  - Decision inbox with read, retry, archive, blocked, and review states.
  - Artifacts grouped by work and filtered by type.
  - Agent dashboard, instructions, skills, configuration, tools, runs, and
    resource usage.
  - Activity trail.
- Translation decisions:
  - Keep tasks, subtasks, routines, runs, inbox, artifacts, skills, activity,
    agent health, recovery, and resource guardrails.
  - Replace company/board hierarchy with the human employee as orchestrator.
  - Replace hiring language with adding specialist AI team members.
  - Treat cost as a guardrail, never as employee performance.
  - Keep all runtime and tool activity explicitly simulated in the prototype.
  - Do not include human productivity scores or surveillance.
- File boundaries:
  - `components/ai-workforce/WorkforcePrototype.tsx`
  - `components/ai-workforce/workforce.module.css`
  - `docs/PROJECT_STRATEGY.md`
  - `docs/wp/wp02-stories.md`
  - `docs/wp/wp02-progress.md`
  - `design-qa.md`
- Required checks:
  - `npx tsc --noEmit`
  - `npm run build`
  - In-app browser walkthrough of onboarding and primary/utility destinations.
- Risks:
  - The existing prototype is concentrated in a large client component; WP02
    prioritises a coherent base over a full component-system refactor.
  - The prototype uses mock data and must not imply real agent execution.
  - The development server previously experienced a stale Next.js chunk; final
    verification must use a clean build and refreshed browser state.
- Next: Implement the primary workspace, utilities, and onboarding flow.

## 2026-07-24 — WP02-S2 to WP02-S4

- Actions taken:
  - Replaced the Strategy, Work, Library, and Artifacts placeholders with
    populated, interactive wireframe destinations.
  - Added Work views for Tasks, Routines, and Runs.
  - Added a task-detail inspector with acceptance criteria, properties,
    subtasks, latest agent update, wake, and review controls.
  - Added Inbox, Activity, and Settings utility destinations.
  - Added Alex Morgan throughout the workforce as the human orchestrator.
  - Added an eight-step employee onboarding covering role and mission, durable
    context, Strategy Partner, environment checks, strategy approval,
    specialist-team approval, and first-plan activation.
  - Connected Today shortcuts to Goals, AI Team, Inbox, Artifacts, and Activity.
- Decisions made:
  - Present resource usage as AI runtime guardrails, not a score of the human.
  - Keep explicit `Simulated` disclosure on runtime and tool representations.
  - Group the PRD's detailed onboarding sequence into eight usable wireframe
    stages while retaining every approval gate.
  - Keep the existing monochrome, dense enterprise visual language.
- Result: Passed. The complete navigation now has a coherent wireframe base.
- Gotchas:
  - This remains a single large client component so the design can change
    quickly. Modularisation is deferred until the information architecture and
    interaction model stabilise.

## 2026-07-24 — WP02-S5

- Checks run:
  - `git diff --check` — passed.
  - TypeScript (`tsc --noEmit`) — passed.
  - `npm run build` — passed; `/ai-workforce` generated as a static route.
  - In-app browser walkthrough at 1440 × 1024 — passed.
  - Onboarding completion from Welcome to first-plan activation — passed.
  - Strategy, Tasks, Routines, Runs, Library, Artifacts, Inbox, Activity, and
    Settings checks — passed.
  - Browser console warnings/errors — none.
  - Mobile onboarding at 390 × 844 — passed after responsive correction.
  - Design QA comparison — passed; recorded in `design-qa.md`.
- Found and fixed:
  - The first 390 px onboarding layout retained the desktop progress rail and
    clipped the welcome cards.
  - The narrow layout now removes the rail, stacks content, and preserves the
    approval footer without document-level horizontal overflow.
- Result: Passed. WP02 definition of done is met.
- Follow-up:
  - Convert approved wireframe areas into modular components and a persistent
    mock data model.
  - Define the runtime integration contract for Claude, Codex, tools, and
    scheduled routines.
  - Run user testing with staff designers and one non-R&D employee role before
    selecting the first build slice.
