# Algolia AI Workforce — Product Decisions

These are settled rulings unless the product owner explicitly changes them.

## Product definition

Algolia AI Workforce is an employee-facing operating system for creating and
supervising a persistent personal team of specialised AI employees.

It is not:

- A multi-persona chatbot
- A generic prompt library
- A company simulation
- An employee-monitoring product
- A dashboard of disconnected automations

## Human ownership

The human employee owns:

- Intent and mission
- Strategy and priorities
- Taste and the quality bar
- Material product and business tradeoffs
- Non-delegables
- Approval and accountability
- Publishing and release

AI may recommend, challenge, draft, execute, and review. AI does not become the
unaccountable owner of these decisions.

## Strategy Partner

Use the most capable approved reasoning model as the Strategy Partner.

Its responsibilities:

- Clarify the employee's goal
- Challenge assumptions and vague outcomes
- Propose strategy and alternatives
- Recommend the specialist AI team
- Identify required skills, tools, and context
- Create and revise plans
- Coordinate approved work
- Prepare decision briefs
- Detect blockers and stale work

Its boundary:

- It proposes strategy; the human approves strategy.
- It applies the documented quality bar; the human owns taste.

## Specialist AI employees

Specialists have narrow mandates and explicit contracts:

- Inputs
- Named skills
- Approved tools
- Scoped context
- Autonomy level
- Completion criteria
- Reviewer and approver
- Failure and escalation rules

Specialists can create subtasks or follow-up tasks only when they remain
traceable to an approved goal and plan.

## Approval sequence

The activation sequence is:

1. Role and mission
2. Durable working context
3. Strategy Partner
4. Runtime and environment health
5. Strategy
6. Specialist team
7. Plan
8. Work

Work must not start before steps 4–7 are approved.

## Human approval gates

Always require human approval for:

- Strategy or priority changes
- Material scope changes
- New active goals
- External publishing
- Sending external messages
- Merging or production deployment
- Spending or purchasing
- Customer contact
- Pricing
- Destructive actions
- Sensitive data access

## Work model

Use this hierarchy:

```text
Mission
  → Strategy
    → Goal
      → Plan
        → Task
          → Subtask
            → Run
              → Evidence
                → Artifact
                  → Decision or learning
```

## Context model

Separate:

- Durable personal context
- Company context
- Project and goal context
- Task-specific context
- Skills as repeatable procedures
- Tools as permitted capabilities
- Runs as execution history
- Artifacts as reviewable outputs
- Decisions as versioned human judgments

Agents should read from and write back to approved context. Context proposals
must be reviewable; agents must not silently rewrite strategy or the quality
bar.

## Inbox

The Inbox is the human attention layer. It includes:

- Needs decision
- Needs answer
- Needs review
- Blocked
- Failed or recovering
- Strategy, team, plan, skill, or context proposals
- Daily and weekly briefs

Each item must explain what happened, why it matters, evidence, requested
decision, and consequences.

## Activity and provenance

Every material event records:

- Actor
- Action
- Object
- Timestamp
- Origin
- Goal and task
- Before/after state where relevant
- Evidence or artifact
- Recovery state

## Failure and recovery

- Retry at most once by default using a materially different approach.
- After repeated failure, stop, preserve evidence, and escalate.
- Show failure, recovery, and waiting states in the primary UI.
- A task is not complete without its required artifact and checks.

## Resource guardrails

Track:

- Concurrent AI employees
- Runs per day
- Maximum run duration
- Retry count
- Model/runtime assignment
- Provider or workspace limits when relevant

Do not turn runtime usage into a human performance score.

## Demo and data

- Demo employee: Alex Morgan, Staff Product Designer
- Data: realistic synthetic mock data
- Runtime: deterministic simulation
- Real company or customer data: prohibited until formally approved
- Visible label: `Simulated`

## Design direction

- Compact, monochrome, enterprise wireframe
- Clear hierarchy and useful density
- Restrained status colour
- Evidence and approval close to the work
- No decorative AI imagery
- Current visuals are structural, not final brand design

## Reference translation

Keep:

- Task trees
- Routines and runs
- Decision inbox
- Agent instructions, skills, tools, and configuration
- Artifacts
- Activity and audit history
- Health, watchdog, retry, and recovery

Do not keep:

- Company, CEO, board, hiring, or firing metaphors
- Human employee scoring
- Surveillance
- Agent-generated strategy without human approval
