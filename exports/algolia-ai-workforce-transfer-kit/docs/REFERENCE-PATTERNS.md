# Reference Patterns and Product Translation

A local AI-agent task manager was used as an architectural reference. The
Algolia prototype does not depend on it and is not intended to be a clone.

## Patterns retained

### Durable tasks and subtasks

Tasks are persistent work records rather than chat messages. They can carry
status, priority, assignee, goal, origin, parent, subtasks, dependencies,
reviewer, approver, monitor, skill, context, runtime, and related artifacts.

### Task detail as the unit of collaboration

A task detail combines:

- Problem and description
- Acceptance criteria
- Agent updates and human discussion
- Artifacts and evidence
- Related work
- Triage and execution properties
- Activity

### Routines and runs

A routine is a recurring work definition. It materialises into an auditable task
and execution run. The definition is separate from run history.

### Decision inbox

The Inbox combines work requiring human judgment:

- Approval
- Review
- Answer
- Blocker
- Failure
- Retry or recovery
- Proposal

### AI employee configuration

Each AI employee needs separate:

- Instructions and mandate
- Skills
- Tools
- Context
- Runtime/model
- Runs
- Quality/review history
- Resource guardrails

### Artifacts and provenance

Outputs are first-class, reviewable objects linked to tasks and goals. Activity
records who or what changed state and why.

### Failure and recovery

Runtime errors, retries, waiting, blocked work, watchdog intervention, and
recovery are visible product states.

## Patterns translated

| Reference concept | Algolia AI Workforce |
|---|---|
| Company | Personal employee workspace |
| Board or CEO | Human employee and final approver |
| AI executive | Strategy Partner |
| Agent hiring | Add a specialist AI team member |
| Org chart | Delegation and independent-review map |
| Company budget | AI resource guardrails |
| Company dashboard | Today and workforce health |
| Company goals | Employee goals linked to organisational outcomes |

## Patterns rejected

- AI company theatre
- Agent titles without defined skills or completion criteria
- Human productivity ranking
- Employee surveillance
- Cost as the primary definition of success
- Hidden autonomous execution
- Unbounded retries
- Strategy changes without human approval
- False completion without evidence

## Product-specific additions

- Durable personal strategy and taste context
- Explicit non-delegables
- Strategy Partner as the frontier reasoning layer
- Independent design-quality reviewer reporting to the human
- Cross-functional employee templates
- Visible simulation disclosure
- Onboarding gates before activation
