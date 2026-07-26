# Algolia AI Workforce — Implementation Status

Status date: 24 July 2026

## Current state

The repository contains a complete interactive wireframe base, not a production
system. The prototype uses React client state and synthetic data.

## Implemented destinations

### Today

- Human decision cards
- Current goal
- Progress stages
- In-progress, waiting, and next tasks
- Current AI team
- Recent artifacts
- Recent activity

### Strategy

- Role and responsibilities
- Mission
- Current priorities
- Stakeholders
- Taste and quality bar
- Decision principles
- Non-delegables
- Approval rules
- Decision rights
- Review cadence
- Proposed context update

### Goals

- Goal header and status
- Goal context and sources
- Strategy, Team, Plan, Work, Artifacts, Decisions, and Activity tabs
- Detailed approved Plan workspace
- Task hierarchy and dependencies
- Human owner
- Strategy Partner
- Assigned specialists
- Approval policy
- Autonomy and resource use
- Open decisions

The Plan tab is the detailed implemented state. Other Goal tabs are lighter
wireframe placeholders and are candidates for the next design slice.

### Work

- Tasks, Routines, and Runs
- Task list, status, assignee, priority, and update time
- Task inspector
- Description and acceptance criteria
- Goal, assignee, reviewer, skill, and runtime properties
- Subtasks
- Latest agent update
- Wake-agent and send-to-review controls
- Recurring routines
- Run history and recovery state

### AI Team

- Human orchestrator
- Strategy Partner
- Specialist team
- Independent reviewer
- Agent inspector
- Mandate, skills, tools, autonomy, approval gates, and run state

### Library

- Skills
- Context
- Tools
- Templates

### Artifacts

- Artifact list
- Author, type, status, and updated time
- Artifact preview
- Recommendation, signals, assumptions, and review status

### Inbox

- Mine, Unread, Blocked, and All filters
- Decisions, reviews, blockers, and recovered items
- Decision detail with recommendation, evidence, consequences, and actions

### Activity

- Human, AI employee, and system events
- Actor, action, object, time, goal, and origin
- Trace-coverage summary

### Settings

- Employee profile and onboarding replay
- Model and runtime assignments
- Autonomy defaults
- Simulation disclosure
- AI resource guardrails

### Onboarding

Eight interactive stages:

1. Welcome
2. Role and mission
3. Working context
4. Strategy Partner
5. Environment
6. Strategy
7. AI team
8. First plan

Completing the flow returns to Today and confirms simulation activation.

## Technical implementation

- Next.js 15 App Router
- React 18
- TypeScript
- CSS Modules
- Lucide icons
- No backend
- No database
- No authentication
- No model or tool calls
- No external services

## Main source files

- `prototype/components/ai-workforce/WorkforcePrototype.tsx`
- `prototype/components/ai-workforce/workforce.module.css`
- `prototype/app/page.tsx`
- `prototype/app/ai-workforce/page.tsx`

## Verified

- TypeScript check
- Production build
- `/` route
- `/ai-workforce` route
- Complete onboarding path
- Primary navigation
- Tasks, Routines, and Runs
- Library, Artifacts, Inbox, Activity, and Settings
- 1440 × 1024 desktop state
- 390 × 844 onboarding state
- No document-level horizontal overflow in verified states

## Known limitations

- Most state resets on refresh.
- The main prototype is a large client component and should be modularised after
  the next product slice is selected.
- Many secondary controls are visual-only.
- Goal tabs other than Plan need deeper states.
- Search is mock-only.
- No keyboard focus choreography for overlays.
- No data contracts or runtime adapters exist.
- No authentication, permissions, or enterprise policy model exists.
- No real scheduled execution exists.

## Recommended next sequence

1. Verify the transferred standalone repository.
2. Select one end-to-end pilot workflow.
3. Split the large component into route/domain modules without changing
   behaviour.
4. Define the persistent data model.
5. Define runtime, skill, tool, context, run, artifact, decision, and approval
   interfaces.
6. Add deterministic prototype persistence.
7. Test with Staff Product Designers.
8. Test one non-R&D employee template.
9. Only then select real internal integrations.
