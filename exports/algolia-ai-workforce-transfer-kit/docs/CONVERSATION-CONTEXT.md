# Algolia AI Workforce — Conversation Context

This is a focused reconstruction of the product conversation that led to the
current PRD, information architecture, and wireframe. It includes the
Algolia-specific decisions needed to continue the work. It is not presented as
a word-for-word export of every assistant response.

## 1. Opportunity inside Algolia

The project began when the product owner learned that Algolia was hiring a VP
of AI Ops & Automation. As a Staff Product Designer who can also work with code,
the owner saw an opportunity to contribute beyond conventional interface design:

- Design how people direct and supervise automation.
- Map workflows before automating them.
- Define agent responsibilities, handoffs, and approval points.
- Design how skills, context, tools, evidence, failure, and recovery appear to
  employees.
- Build working prototypes rather than stopping at static screens.

The working career thesis was that AI operations teams may initially favour
engineers and forward-deployed profiles, while underestimating the need for
workflow design, human control, legibility, trust, and experience quality.

## 2. Pilot workflow exploration

The first requested pilot was Customer and Product Signals: collect signals
from customer conversations, product feedback, research, analytics, and support;
synthesise themes; preserve evidence; identify contradictions; and prepare
decision briefs for product teams.

The exploration expanded beyond R&D to show that an AI-native company model must
work across functions. Candidate workflows included:

- Recruiting intake, role clarification, sourcing support, interview-kit
  preparation, evidence synthesis, and human hiring decisions.
- People-team onboarding, policy navigation, manager briefs, and recurring
  employee-support workflows.
- Customer Success account briefs, risk detection, adoption plans, and renewal
  preparation.
- Go-to-market research, content preparation, campaign operations, and review.
- Finance and operations routines with strict approval and audit boundaries.

The conclusion was that the product should not be a collection of isolated
automations. It should give each employee a persistent, role-specific AI
workforce.

## 3. Product concept

The concept evolved into an Algolia-specific employee operating system.

Each human employee can create or receive multiple dedicated AI employees with
specialised roles and skills. For example, a Staff Product Designer may have:

- A Strategy Partner
- A Research Assistant
- A Junior Product Designer
- A Prototype Builder
- A Design QA Reviewer

The human supplies organisational context, goals, constraints, taste, and
approval. AI employees can create tasks and subtasks, execute approved skills,
use approved tools, produce artifacts, create follow-up work, run scheduled
routines, and escalate decisions. They may operate between human sessions
inside explicit guardrails.

This is not a chat interface with multiple personas. It is a persistent work
system.

## 4. Orchestration ruling

A central question was whether the human employee is the orchestrator.

The resolved model is:

```text
Human employee
Intent · context · taste · priorities · judgment · accountability
        ↓
Frontier Strategy Partner
Challenge · strategy co-creation · team design · planning · coordination
        ↓
Human approval
Approved strategy · team · plan · autonomy boundaries
        ↓
Specialist AI employees
Execution through named skills, approved tools, and bounded context
        ↓
Evidence · decisions · artifacts · learning · recovery
```

The human is still the principal and final orchestrator. The strongest approved
reasoning model is the orchestration layer that helps the human think, proposes
the appropriate team, and coordinates approved work. It does not independently
own strategy or taste.

## 5. Reference product analysis

A local task-and-agent management product was studied as a reference. Useful
patterns included:

- Persistent tasks and subtasks
- Task detail with description, acceptance criteria, relationships, comments,
  artifacts, assignee, reviewer, approver, monitor, skill, context, and runtime
- Recurring routines that materialise into auditable tasks and runs
- A central inbox for decisions, reviews, blockers, failures, and retry/recovery
- Agent detail with instructions, skills, tools, configuration, runs, and
  resource usage
- Artifact grouping and source evidence
- Activity and provenance
- Runtime health, retry limits, watchdogs, and recovery

Patterns deliberately rejected or translated:

- Company, CEO, board, hiring, and firing metaphors
- AI employees pretending to own human strategy
- Human productivity scoring
- Employee surveillance
- Cost as the primary measure of success

The Algolia product is personal and employee-owned. Resource usage is a runtime
guardrail, not a score of the human.

## 6. PRD rewrite

The original workbench PRD was rewritten around a persistent personal AI
workforce.

Key requirements:

- Employee onboarding starts from role and mission.
- A Strategy Partner can help clarify a vague mission.
- Responsibilities, stakeholders, taste, decision principles, guardrails,
  non-delegables, and review cadence become durable context.
- The employee approves the Strategy Partner, runtime, environment, strategy,
  specialist team, and first plan.
- Goals become versioned task trees.
- Agents may create subtasks and follow-up work inside approved scope.
- Every execution has a visible run and status.
- Important outputs become artifacts with sources and review state.
- The inbox concentrates human attention.
- Failure and recovery are first-class.
- The system is cross-functional, not limited to product development.

The demo uses synthetic data and deterministic simulation.

## 7. Demo employee and onboarding

The demo employee is Alex Morgan, Staff Product Designer.

Alex owns:

- Product strategy
- Problem selection
- Design direction
- Taste and quality bar
- Tradeoffs
- Final approval

The eight wireframe onboarding stages are:

1. Welcome and simulation disclosure
2. Role and mission
3. Working context
4. Strategy Partner configuration
5. Environment health check
6. Strategy approval
7. Specialist-team approval
8. First-plan approval and workspace activation

No autonomous work begins before environment, strategy, team, and plan are
approved.

## 8. Information architecture

Primary destinations:

- Today
- Strategy
- Goals
- Work
- AI Team
- Library
- Artifacts

Utilities:

- Inbox
- Activity
- Search
- Pause all
- Settings

Work contains Tasks, Routines, and Runs. Library contains Skills, Context,
Tools, and Templates.

## 9. Wireframe implementation

The prototype began with Today, Goal Plan, and AI Team.

It was then expanded to include:

- Strategy with durable operating context, decision rights, review cadence, and
  proposed context updates
- Work with task table, task inspector, subtasks, acceptance criteria, runtime,
  skills, reviewers, routines, and run history
- Library, Artifacts, Inbox, Activity, and Settings
- The complete Alex Morgan onboarding flow
- Desktop and responsive states

The current prototype is intentionally monochrome and dense. It is a base for
product reasoning, not a final Algolia visual design.

## 10. Current transfer request

The full Algolia AI Workforce state is being transferred to a work computer so
implementation can continue without restarting discovery.

The transfer package therefore includes:

- The standalone code
- Product documents
- Conversation context
- Decision log
- Current implementation status
- Visual evidence
- A Codex continuation prompt
- Setup and verification instructions

The next Codex session should verify the package first, then continue from the
existing product model.
