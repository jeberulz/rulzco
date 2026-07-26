# PRD: Algolia AI Workforce

**Working title:** Algolia AI Workforce
**Previous title:** Algolia Agent Workbench
**Status:** Ready for implementation planning
**Prototype owner:** Staff Product Designer
**Date:** 23 July 2026
**Product type:** Internal interactive concept and functional prototype
**Prototype route:** `/ai-workforce`
**Primary audience:** Algolia employees and AI Operations leadership
**Data policy:** Synthetic mock data only
**Agent execution:** Deterministic simulation; no model or third-party API calls

## 1. Executive summary

Algolia AI Workforce is an employee-facing operating system for building and supervising a personal team of specialised AI employees.

Every human employee remains the principal and orchestrator. They bring intent, organisational context, taste, priorities, judgment, and accountability. They use the most capable approved reasoning model as a Strategy Partner to challenge assumptions, co-create strategy, recommend the required AI team, and convert an approved direction into executable work. Specialist AI employees then perform bounded execution using named skills, approved tools, and role-specific context.

The product is not a chat interface with several personas. It is a persistent work system in which:

1. A human employee shares their role, context, objective, constraints, and quality bar.
2. A frontier Strategy Partner helps the human clarify the strategy and challenge assumptions.
3. The Strategy Partner recommends the AI employees, skills, tools, and context required for the outcome.
4. The human edits and approves the strategy and proposed team.
5. The Strategy Partner proposes a versioned plan that becomes an editable tree of tasks and subtasks.
6. Specialist AI employees claim and execute the approved work.
7. Agents may delegate, create follow-up work, and request missing decisions within explicit guardrails.
8. Reviewers verify evidence and quality.
9. The human receives decisions, blockers, failures, and approvals in one inbox.
10. Completed work becomes an artifact and reusable context.
11. Scheduled routines allow useful work to continue between human sessions.

The prototype will demonstrate this model primarily through the workspace of a Staff Product Designer. Product, People/Recruiting, and Customer Success templates will show that the system can support an AI-native company across functions.

## 2. Product thesis

### 2.1 The operating model

```text
Human employee — principal and orchestrator
Intent • context • taste • priorities • judgment • accountability
        │
        ▼
Frontier Strategy Partner
Strategy co-creation • challenge • team design • planning
        │
        ▼
Human approval
Approved strategy • approved team • autonomy boundaries
        │
        ▼
Specialist AI workforce
Researcher • designer • builder • operator • reviewer
        │
        ▼
Skills + tools + bounded context
Repeatable procedures • permitted actions • organisational knowledge
        │
        ▼
Goals → plans → tasks → runs → evidence → decisions
        │
        ▼
Artifacts + learning + improved future execution
```

### 2.2 Core hypothesis

If every employee can use a frontier reasoning model to co-create strategy, assemble a fit-for-purpose team of specialised AI employees, and manage their work through goals, task trees, routines, evidence, and approval gates, then AI can improve both productivity and work quality without removing human ownership.

### 2.3 What makes this different from a coding or chat agent

Claude, Codex, and similar runtimes can execute individual tasks. This product provides the employee-level operating layer around those runtimes:

- Persistent AI employee identities and responsibilities.
- Reporting and delegation relationships.
- Shared goals and approved plans.
- Durable tasks, subtasks, dependencies, and ownership.
- Recurring work and event-driven wake-ups.
- A decision inbox.
- Evidence, artifacts, and review.
- Permissions and escalation policies.
- Cross-run context and learning.
- A complete audit trail of who did what and why.

The runtime is replaceable. The employee’s AI team, work history, skills, context, and operating rules persist.

## 3. Problem

Most employees currently use AI through isolated chats or single-task tools. This creates several limitations:

- The employee repeatedly explains their role, standards, and context.
- Work is organised around conversations rather than durable outcomes.
- A model can complete a task but does not reliably manage ongoing responsibility.
- There is no clear distinction between an AI employee’s role and the model powering it.
- Multi-agent delegation is difficult to see or control.
- Plans, tasks, dependencies, reviewers, and approvals are fragmented across tools.
- Background work is hard to supervise.
- Agents can appear active without producing verifiable progress.
- Failed runs become dead ends instead of recoverable work states.
- Successful procedures remain trapped inside prompts.
- Corrections do not compound into governed organisational knowledge.
- Employees lack a coherent way to develop their own AI-native operating practice.

The result is “employees using AI” rather than an AI-native organisation.

## 4. Vision

Every Algolia employee should be able to arrive at work with a personal AI team that understands their responsibilities, works from approved company and role context, performs recurring execution, and brings the employee prepared decisions rather than an empty chat box.

Examples:

- A Staff Product Designer manages a Research Assistant, Junior Product Designer, Prototype Builder, and Design QA Reviewer.
- A Talent Partner manages a Sourcing Researcher, Interview Operations Assistant, Candidate Experience Writer, and Process Reviewer.
- A Customer Success Manager manages a Customer Signal Analyst, Account Briefing Assistant, Adoption Planner, and Risk Reviewer.
- A Sales employee manages an Account Researcher, Solution Brief Assistant, Follow-up Writer, and CRM Quality Reviewer.
- A People manager manages a Team Operations Assistant, Planning Analyst, Meeting Synthesiser, and Policy Researcher.

The human employee is not replaced by this team. Their role moves toward higher-leverage direction, judgment, synthesis, coaching, and approval.

## 5. Goals

### 5.1 Product goals

- Make a personal AI workforce understandable and tangible.
- Establish the human employee as the principal and orchestrator.
- Demonstrate a frontier Strategy Partner that helps form strategy and design the AI team.
- Demonstrate that each employee can create multiple role-specific AI employees.
- Make goals, plans, tasks, and subtasks the core execution model.
- Show AI employees delegating work and creating follow-up tasks.
- Demonstrate useful autonomous progress between human check-ins.
- Give the employee one place to inspect, intervene, approve, and recover work.
- Separate an AI employee’s role from the runtime that powers it.
- Make skills, tools, context, and permissions visible and configurable.
- Demonstrate quality improvement through specialist review and evidence.
- Show how personal workflows can become reusable organisational capabilities.
- Support a credible conversation with AI Operations leadership about an employee-centred AI-native operating model.

### 5.2 Prototype goals

- A new user can define their mission, configure a Strategy Partner, and approve a proposed starter AI team in under six minutes.
- A user can define a goal and approve an agent-generated plan in under three minutes.
- An approved plan creates an inspectable task tree.
- At least two AI employees visibly collaborate on the same goal.
- An AI employee can create and assign a subtask during execution.
- At least one task can become blocked and ask the human a structured question.
- At least one failed run can recover through a retry or human decision.
- At least one task requires an independent reviewer.
- At least one consequential action requires human approval.
- At least one routine creates a new auditable task.
- A returning user can understand overnight progress from a daily brief in under one minute.
- The complete primary demonstration can be presented in eight minutes or less.

### 5.3 Organisational goals demonstrated by the concept

- Increase employee leverage without obscuring accountability.
- Improve consistency through reusable skills.
- Improve quality through explicit review and acceptance criteria.
- Reduce repeated context-setting.
- Make agentic work observable and governable.
- Allow approved operating knowledge to compound.
- Give AI Operations a manageable architecture for shared policies, skills, tools, and runtime access.

## 6. Non-goals

The prototype will not include:

- Real Claude, Codex, OpenAI, Anthropic, Algolia, GitHub, Slack, email, CRM, HRIS, calendar, analytics, or applicant-tracking integrations.
- Real model inference, embeddings, retrieval, or fine-tuning.
- Real employee authentication or Algolia single sign-on.
- Real company or customer data.
- Multi-user collaboration.
- A production database.
- Real work continuing while the local prototype process is stopped.
- Real messages, deployments, purchases, candidate actions, customer actions, or publishing.
- Autonomous hiring, firing, performance evaluation, promotion, compensation, candidate ranking, candidate rejection, or other high-impact employment decisions.
- Employee productivity scoring or surveillance.
- A general-purpose agent marketplace.
- Arbitrary third-party skill installation.
- Real budgets or billing.
- Full enterprise administration.
- Production security or regulatory compliance claims.
- An attempt to model every Algolia team or workflow.


## 8. Product principles

### 8.1 The human is the principal

The employee owns goals, strategy, taste, priorities, judgment, and final accountability. No AI employee outranks or replaces the human.

### 8.2 AI employees are responsibilities, not personas

An AI employee must have a bounded role, expected outcomes, permitted tools, assigned skills, reporting relationship, and escalation policy.

### 8.3 Roles before runtimes

The interface leads with “Research Assistant” or “Prototype Builder,” not “Claude” or “Codex.” Runtime is configuration metadata.

### 8.4 Outcomes before activity

The system measures progress through completed, reviewed artifacts and decisions—not token output, run count, or decorative activity.

### 8.5 Plans become durable work

Agent planning must materialise as editable tasks, subtasks, dependencies, owners, acceptance criteria, and approval points.

### 8.6 Skills over giant prompts

Repeatable work is represented by named, versioned procedures with required inputs, steps, outputs, checks, permissions, and failure behaviour.

### 8.7 Context is explicit and bounded

The employee can see which context an AI employee may use. Context access follows least privilege.

### 8.8 Evidence before confidence

Every material claim or completed artifact should show its contributing mock sources, checks, and unresolved assumptions.

### 8.9 Autonomy is graduated

AI employees may be configured to draft, execute with review, or execute autonomously within a bounded area. Consequential actions always require human approval.

### 8.10 Failure is a designed state

Blocked, failed, stale, rejected, and partially completed work must have a visible owner and a next action.

### 8.11 Learning requires confirmation

Agent corrections become learning proposals. Shared skills or policy never change silently.

### 8.12 No surveillance

The product explains agent work and system health. It does not rank, score, or monitor human employee performance.

### 8.13 Simulation is transparent

Every runtime, run, tool call, and artifact must be labelled “Simulated” in this prototype.

## 9. Product vocabulary

### Human employee

The principal and orchestrator who owns the workspace, supplies context and intent, approves strategy and team composition, directs work, judges quality, and remains accountable for goals and decisions.

### AI employee

A persistent agent with a role, charter, reporting relationship, runtime, skills, context, tools, autonomy level, and work history.

### Strategy Partner

A lead AI employee powered by the most capable approved reasoning model. It helps the human clarify goals, challenge assumptions, co-create strategy, identify required capabilities, propose the AI team, and turn approved direction into plans. It reports to the human and cannot approve its own strategy, team proposals, or autonomy.

### Execution coordinator

An optional AI employee that delegates approved tasks, follows up, prepares decisions, and maintains momentum. The Strategy Partner may also perform this role, or the human may create a separate lower-cost coordinator after the team is established.

### Runtime

The adapter, execution harness, and selected model assigned to an AI employee, such as a Claude Code adapter with a frontier reasoning model or a Codex adapter with a coding model. Adapter, model, and AI employee role are separate configuration layers.

### Goal

An outcome the human wants to achieve, with success criteria, constraints, priority, and review date.

### Plan

A versioned proposal that decomposes a goal into work. A plan must be approved before autonomous execution begins.

### Project

A durable container for related goals, tasks, artifacts, context, and decisions.

### Task

The auditable unit of work. A task has an owner, state, acceptance criteria, dependencies, provenance, runs, discussion, and outputs.

### Routine

A recurring work definition that creates auditable tasks on a schedule or event.

### Skill

A reusable procedure defining how an AI employee performs a specific type of work.

### Tool

A capability the runtime may invoke, such as search, file access, code execution, analytics, or messaging.

### Context source

Approved information an AI employee may read for a task.

### Run

One execution attempt by an AI employee against a task.

### Artifact

A durable output such as a research brief, prototype, report, task plan, or content draft.

### Decision

A human judgment or approval required to unblock or complete work.

### Monitor

A watchdog that detects stalled work, repeated failure, missing evidence, or an exceeded limit.

### Learning proposal

A suggested change to personal context, an AI employee charter, or a shared skill based on correction or observed performance.

## 10. Target users and starter teams

### 10.1 Primary persona: Staff Product Designer

**Mock user:** Alex Morgan
**Role:** Staff Product Designer
**Primary need:** Direct research, synthesis, design exploration, prototyping, and quality review without personally executing every step.
**Human ownership:** Product strategy, problem selection, design direction, taste, trade-offs, and approval.

The following is an example team proposal, not an automatically created default. The Strategy Partner recommends the final composition from the employee’s mission, responsibilities, current goal, constraints, and available company capabilities.

1. **Strategy Partner**
   - Type: Strategy and orchestration partner.
   - Purpose: Help the human clarify strategy, challenge assumptions, propose the required team, convert approved goals into plans, and prepare decisions.
   - Runtime: Most capable approved reasoning model, simulated.
   - Reports to: Human employee.

2. **Research Assistant**
   - Type: Specialist.
   - Purpose: Gather, normalise, cluster, and cite customer and product signals.
   - Runtime: Claude, simulated.
   - Reports to: Strategy Partner for execution; accountable to the human.

3. **Junior Product Designer**
   - Type: Specialist.
   - Purpose: Produce flows, states, alternatives, and rationale from an approved brief.
   - Runtime: Claude, simulated.
   - Reports to: Strategy Partner for execution; accountable to the human.

4. **Prototype Builder**
   - Type: Builder.
   - Purpose: Turn approved designs or build briefs into interactive prototypes.
   - Runtime: Codex, simulated.
   - Reports to: Strategy Partner for execution; accountable to the human.

5. **Design QA Reviewer**
   - Type: Reviewer.
   - Purpose: Review usability, accessibility, consistency, evidence coverage, and acceptance criteria.
   - Runtime: Claude, simulated.
   - Reports to: Human employee for independence.

### 10.2 People/Recruiting template

**Mock user:** Priya Shah
**Role:** Senior Talent Partner
**Human ownership:** Hiring strategy, candidate judgment, advancement, rejection, and final decisions.

Recommended team:

- Recruiting Operations Partner.
- Role Research Assistant.
- Interview Process Designer.
- Candidate Experience Writer.
- Process and Bias Reviewer.

Permitted demonstration:

- Design a structured interview process.
- Prepare interviewer briefs.
- Track missing evidence.
- Draft candidate communications for human review.

Prohibited demonstration:

- Candidate ranking.
- Automated rejection.
- Hiring recommendations presented as decisions.
- Inference of protected or sensitive characteristics.

### 10.3 Customer Success template

**Mock user:** Jordan Lee
**Role:** Senior Customer Success Manager
**Human ownership:** Account strategy, relationship judgment, commitments, and customer communication.

Recommended team:

- Customer Operations Partner.
- Customer Signal Analyst.
- Account Briefing Assistant.
- Adoption Planner.
- Risk and Claims Reviewer.

Permitted demonstration:

- Synthesise synthetic product usage and support signals.
- Prepare an account brief.
- Draft an adoption plan.
- Identify evidence gaps.
- Prepare a customer follow-up for human approval.

## 11. Experience architecture

The product has two layers.

### 11.1 Personal workforce layer

Owned by the individual employee:

- Personal goals and projects.
- AI team and reporting relationships.
- Personal context and preferences.
- Tasks, routines, artifacts, decisions, and activity.
- Personal learning proposals.
- Approval and autonomy settings within company policy.

### 11.2 Organisational enablement layer

Represented in the prototype through mock policy and shared resources:

- Approved runtime catalogue.
- Shared skill library.
- Role templates.
- Tool permissions.
- Shared context catalogue.
- Data-classification policy.
- Required approval rules.
- Activity retention.
- Skill publishing and review.

The prototype focuses on the personal layer while making the organisational layer visible enough to show how AI Operations could govern it.

## 12. Core lifecycle

```text
Onboard
  ↓
Define role, mission, outcomes, constraints, and quality bar
  ↓
Configure frontier Strategy Partner and verify model environment
  ↓
Human + Strategy Partner co-create and approve strategy
  ↓
Strategy Partner proposes required AI team, skills, tools, and context
  ↓
Human edits and approves team composition and autonomy
  ↓
Connect mock context and skills
  ↓
Strategy Partner proposes a versioned execution plan
  ↓
Human edits and approves the plan
  ↓
Plan materialises as tasks and dependencies
  ↓
AI employees execute, delegate, and review
  ↓
Questions, blockers, approvals, and failures reach the inbox
  ↓
Human decides or redirects
  ↓
Artifacts are completed with evidence
  ↓
Daily brief summarises progress
  ↓
Corrections become learning proposals
```

## 13. Information architecture

### Primary navigation

1. **Today**
   - Daily brief.
   - Work in progress.
   - Decisions required.
   - Recent artifacts.
   - Team health.

2. **Goals**
   - Goal list.
   - Goal detail.
   - Plan proposal and versions.
   - Progress and linked work.

3. **Tasks**
   - List and board views.
   - Parent-child nesting.
   - Filters, grouping, and sorting.
   - Task detail.

4. **AI Team**
   - Team map.
   - AI employee directory.
   - AI employee detail.
   - Add AI employee.

5. **Routines**
   - Recurring definitions.
   - Trigger and delivery settings.
   - Recent routine-created tasks.

6. **Skills**
   - Personal and approved shared skills.
   - Skill detail and versions.
   - Agent assignments.

7. **Context**
   - Personal, project, role, and shared sources.
   - Access matrix.
   - Freshness and classification.

8. **Artifacts**
   - Completed outputs.
   - Evidence and provenance.
   - Review status.

9. **Inbox**
   - Approvals.
   - Questions.
   - Blockers.
   - Failed runs.
   - Recovery decisions.
   - AI employee proposals.

10. **Activity**
    - Human, agent, task, run, and system events.

### Persistent actions

- Create goal.
- Create task.
- Ask AI team.
- Wake Strategy Partner.
- Pause all autonomous work.
- Open command palette.

## 14. Detailed product requirements

### 14.1 Onboarding

The onboarding flow must:

1.
2. Explain the human/AI division of responsibility.
3. Ask the user to select a role template.
4. Offer two mission paths: “I know my mission” and “Help me clarify it.”
5. In the guided path, ask what the employee is responsible for, whom they serve, their current bottleneck, and what success looks like.
6. Let the employee edit and approve the resulting mission statement.
7. Ask what work they never want delegated and their preferred review cadence.
8. Explain the Strategy Partner role and make clear that it supports rather than owns strategy.
9. Let the employee name the Strategy Partner.
10. Let the employee select an approved adapter and model separately.
11. Recommend the most capable approved reasoning model for strategy and team design.
12. Display an environment-health check before any work can run.
13. Let the employee test the simulated environment and understand failures before launch.
14. Review the mission, Strategy Partner, model, boundaries, and approval policy before creation.
15. Create the personal workspace and Strategy Partner only.
16. Start a guided strategy session rather than an automatic generic hiring or implementation task.
17. Have the Strategy Partner propose a role-specific AI team from the approved mission and first goal.
18. Explain why each proposed AI employee, skill, tool, and context source is required.
19. Allow the human to add, remove, rename, reorder, or change reporting relationships.
20. Require human approval before activating any proposed specialist.
21. Require acceptance of simulated-data and simulated-execution disclosure.

The default prototype route should seed the Product/Design workspace while allowing the user to replay onboarding.

The onboarding must not:

- Label the Strategy Partner as the employee’s CEO.
- Treat the Strategy Partner as the owner of company or employee strategy.
- Seed a generic “hire an engineer” or equivalent task unrelated to the approved mission.
- Start autonomous work before the runtime environment is healthy and the human has approved the first goal, team, and plan.
- Create a full generic team before understanding the employee’s responsibilities and current outcome.

### 14.2 AI team builder

The user must be able to create an AI employee in three ways:

1. **Use a recommended role template**
   - Select from role-aligned specialist templates.

2. **Ask the Strategy Partner to propose an AI employee**
   - The Strategy Partner identifies a capability gap in the approved strategy or plan.
   - It proposes role, purpose, skills, adapter, model, reporting line, permissions, and expected value.
   - The proposal enters the Inbox.
   - The human may approve, edit, or reject it.

3. **Configure manually**
   - The human completes the full AI employee configuration.

Required AI employee fields:

- Name.
- Role title.
- Type: strategy partner, execution coordinator, specialist, builder, reviewer, or monitor.
- Purpose.
- Responsibilities.
- Explicit exclusions.
- Reports to.
- May delegate to.
- Adapter.
- Model.
- Environment health.
- Assigned skills.
- Available tools.
- Context access.
- Autonomy level.
- Approval policy.
- Schedule or heartbeat.
- Completion requirements.
- Retry and escalation policy.
- Status: draft, active, paused, error, or archived.

The interface must make clear that:

- Runtime can change without changing the AI employee’s role.
- Adapter and model can be selected independently where the approved runtime supports it.
- The Strategy Partner should default to the most capable approved reasoning model; specialist AI employees may use models optimised for cost, speed, coding, or review.
- An AI employee can have several skills.
- A skill can be shared by several AI employees.
- Reporting lines control delegation, not organisational authority over the human.

### 14.3 AI employee detail

Each AI employee detail page must include:

- Role summary and status.
- Reports-to and delegate relationships.
- Assign task.
- Wake now.
- Pause or resume.
- Current work.
- Recent tasks.
- Instructions.
- Skills.
- Tools.
- Context access.
- Adapter, model, and environment configuration.
- Environment test and latest health result.
- Runs.
- Quality and completion metrics.
- Simulated usage.
- Activity.

Instructions should be represented as structured sections:

- Role.
- Objective.
- Inputs.
- Work the AI employee may perform.
- Work requiring approval.
- Delegation rules.
- Completion requirements.
- Failure policy.
- Safety restrictions.

Saved instruction changes apply to future runs. Active simulated runs retain the version they started with.

### 14.4 Goals

A goal must include:

- Goal title.
- Desired outcome.
- Why it matters.
- Success criteria.
- Constraints.
- Priority.
- Owner.
- Project.
- Target review date.
- Approved context.
- Autonomy ceiling.
- Status: draft, planning, awaiting approval, active, blocked, achieved, or cancelled.
- Linked plans, tasks, artifacts, and decisions.

The human can:

- Create a goal manually.
- Start from a role-specific goal template.
- Ask the Strategy Partner to clarify a vague goal and challenge assumptions.
- Pause, resume, achieve, or cancel a goal.

An AI employee cannot materially change the goal’s outcome, success criteria, priority, or autonomy ceiling without approval.

### 14.5 Plan proposal and approval

When planning begins, the Strategy Partner must produce a plan containing:

- Summary.
- Assumptions.
- Questions.
- Workstreams.
- Proposed tasks and subtasks.
- Proposed owners.
- Dependencies.
- Required skills and context.
- Reviewers and approvers.
- Expected artifacts.
- Risks.
- Estimated simulated effort.
- Human decision points.
- Definition of done.

Plan states:

- Draft.
- Proposed.
- Changes requested.
- Approved.
- Superseded.
- Executing.
- Completed.
- Cancelled.

Rules:

- Every plan has a version number.
- Approval applies only to the reviewed version.
- Editing an approved material field creates a new version.
- No autonomous task execution starts before plan approval.
- The human may edit tasks and assignments before approval.
- The human may approve the complete plan or send it back with changes.
- Approved plans create real persisted tasks in the prototype.

### 14.6 Tasks and subtasks

Tasks are the primary unit of execution.

Required task fields:

- Task ID.
- Title.
- Description.
- Goal.
- Project.
- Parent task.
- Originating actor.
- Creating AI employee.
- Assignee.
- Status.
- Priority.
- Labels.
- Acceptance criteria.
- Definition of done.
- Context.
- Skill.
- Tool access.
- Dependencies: blocked by and blocking.
- Subtasks.
- Reviewer.
- Approver.
- Monitor.
- Due or review date.
- Runs.
- Artifacts.
- Discussion.
- Activity.
- Created, started, updated, and completed timestamps.

Task states:

- Backlog.
- Ready.
- In progress.
- Blocked.
- In review.
- Awaiting approval.
- Done.
- Cancelled.

Required behaviour:

- The human can create and assign a task.
- The Strategy Partner or an approved execution coordinator can create tasks from an approved plan.
- An AI employee can create a subtask when its charter permits delegation.
- Agent-created work must display its origin and parent.
- A task cannot start while a blocking dependency is unresolved.
- A task cannot move to Done when required acceptance criteria, evidence, review, or approval are incomplete.
- A comment can wake the responsible AI employee.
- Parent-child nesting can be enabled or disabled.
- Users can view tasks as a list or board.
- Users can filter, group, and sort by status, priority, goal, project, assignee, reviewer, or origin.

### 14.7 Task detail and discussion

The task detail view must combine work definition and work history.

It must include:

- Editable task properties.
- Markdown description.
- Acceptance criteria checklist.
- New subtask.
- Attach mock source.
- Create artifact.
- Discussion.
- Activity.
- Related work.
- Dependencies.
- Review and approval assignments.
- Monitor.
- Run history.

AI employee updates should explain:

- What it did.
- Why it chose that approach.
- Evidence used.
- Output path or artifact.
- Checks performed.
- Assumptions.
- Unresolved issues.
- Recommended next action.

When blocked, the AI employee must state:

- What is missing.
- Who can unblock it.
- A structured question.
- Available options where appropriate.
- What will happen after the answer.

### 14.8 Delegation

Delegation must be explicit and visible.

Rules:

- The Strategy Partner or an approved execution coordinator may delegate only to AI employees in its configured team.
- A specialist may delegate only when its charter permits it.
- Delegation creates a child task or reassigns an existing task; it is not hidden in chat.
- The delegated task inherits the parent goal and relevant approved context.
- The delegator must explain why the assignee is appropriate.
- The delegator remains responsible for following up unless the task is reassigned by the human.
- If a required capability is missing, the Strategy Partner may create an AI employee proposal for human approval.
- AI employees cannot activate another AI employee without human approval.

### 14.9 Runs and simulated execution

Each task execution attempt creates a run.

Run fields:

- Run ID.
- AI employee.
- Adapter.
- Model.
- Trigger.
- Task.
- Instruction version.
- Skill version.
- Context snapshot.
- Simulated tool calls.
- Start and end time.
- Status.
- Output.
- Error.
- Recovery action.

Run triggers:

- Task assigned.
- Manual wake.
- Scheduled heartbeat.
- Routine.
- Comment.
- Dependency cleared.
- Review requested.
- Retry.

Run states:

- Queued.
- Running.
- Waiting for human.
- Succeeded.
- Failed.
- Cancelled.

The simulation must:

- Use deterministic event sequences.
- Persist progress locally.
- Allow pause, resume, cancel, retry, and reset.
- Clearly label all runs and tool calls “Simulated.”
- Avoid fake token streaming.
- Reconcile elapsed time when the user returns and present this as simulated autonomous progress.
- Never claim the browser performed real background work while closed.

### 14.10 Routines and autonomous work

A routine is a recurring definition that materialises into a task.

Required routine fields:

- Title.
- Purpose.
- Responsible AI employee.
- Project.
- Goal.
- Instructions.
- Skill.
- Context.
- Trigger.
- Recurrence.
- Delivery destination.
- Reviewer.
- Approval policy.
- Failure policy.
- Status: draft, active, paused, or archived.

Prototype triggers:

- Daily at a selected time.
- Weekly on a selected day.
- On workspace return after elapsed simulated time.
- Manual run.

Required behaviour:

- Draft routines remain paused until a responsible AI employee is assigned.
- Every routine run creates a task and run record.
- Users can inspect recent routine-created work.
- Users can pause, resume, edit, or archive a routine.
- Material routine edits apply to future runs only.

Starter Product/Design routines:

- Morning decision brief.
- Twice-weekly product signal scan.
- Weekly design-quality review.
- Friday artifact and learning synthesis.

### 14.11 Inbox

The Inbox is the human’s control surface, not a notification dump.

Inbox item types:

- Approval request.
- Structured question.
- Blocker.
- Failed run.
- Recovery decision.
- Review request.
- AI employee proposal.
- Skill change proposal.
- Context freshness warning.
- Daily brief.

Each item must show:

- What needs attention.
- Why it matters.
- Originating goal and task.
- Responsible AI employee.
- Evidence.
- Recommended action.
- Available actions.
- Time created.

Inbox actions may include:

- Approve.
- Reject.
- Request changes.
- Answer.
- Retry.
- Reassign.
- Pause work.
- Resolve recovery.
- Open task.
- Mark read.

The Inbox must support Mine, Unread, Blocked, and All views.

### 14.12 Approvals

Approval gates must be first-class objects.

Approval states:

- Pending.
- Approved.
- Rejected.
- Changes requested.
- Superseded.

Every approval must include:

- Proposed action.
- Why approval is required.
- Evidence.
- Impact.
- What happens after approval.
- Requesting AI employee.
- Related goal, task, and artifact.
- Version.

Always require approval for simulated:

- Activating a newly proposed AI employee.
- Changing a goal’s material scope.
- Publishing or external communication.
- Merging or deploying.
- Customer commitments.
- Candidate or employment decisions.
- Purchases or budget changes.
- Access to a more sensitive context class.
- Changes to shared skills or policy.

### 14.13 Review and quality

Review is distinct from approval.

- A reviewer determines whether work meets defined quality criteria.
- An approver authorises a consequential next action.
- The same actor may perform both only when policy allows it.

A review must check:

- Acceptance criteria.
- Evidence coverage.
- Unsupported claims.
- Known assumptions.
- Accessibility or policy checks where relevant.
- Artifact completeness.
- Required human judgment.

The reviewer may:

- Pass.
- Pass with notes.
- Request changes.
- Block.

### 14.14 Monitors and recovery

A monitor watches a task or workstream for:

- No progress after a threshold.
- Repeated failed runs.
- Missing output.
- Missing evidence.
- Unresolved dependency.
- Unanswered human question.
- Exceeded simulated effort limit.

Default recovery policy:

1. Retry once using a materially different simulated approach.
2. If failure repeats, set the task to Blocked.
3. Create a recovery item in the Inbox.
4. Identify the recovery owner.
5. State the next safe action.
6. Keep recovery open until explicitly resolved.

Recovery actions:

- Retry.
- Change assignee.
- Change skill.
- Reduce scope.
- Provide context.
- Answer question.
- Cancel task.
- Resolve as accepted risk.

### 14.15 Skills

Each skill must define:

- Name.
- Purpose.
- Trigger.
- Required inputs.
- Context to load.
- Steps.
- Permitted tools.
- Deliverables.
- Quality checks.
- Approval gates.
- Failure and escalation behaviour.
- Files or context to update.
- Version.
- Owner.
- Scope: personal, team template, or approved shared.
- Assigned AI employees.

Starter skills:

- Goal clarification.
- Goal-to-plan.
- Work triage and delegation.
- Customer-and-product signal synthesis.
- Research-to-opportunity brief.
- Opportunity-to-design brief.
- Design exploration.
- Brief-to-prototype plan.
- Prototype quality assurance.
- Accessibility review.
- Evidence audit.
- Daily decision brief.
- Weekly work synthesis.
- Structured interview process design.
- Account health synthesis.

Required behaviour:

- Users can inspect skill content.
- Users can see which AI employees use a skill.
- Personal edits create a personal fork.
- Shared changes create proposals requiring review.
- Runs retain the skill version they started with.

### 14.16 Context

Context scopes:

- Personal.
- Role.
- Project.
- Goal.
- Task.
- Approved shared.

Mock context types:

- Strategy.
- Design principles.
- Writing voice.
- Research.
- Product requirements.
- Customer signals.
- Metrics.
- Policies.
- Decisions.
- Repository guidance.
- Previous artifacts.

Each context source must show:

- Title.
- Type.
- Scope.
- Mock owner.
- Classification.
- Freshness.
- Last updated.
- AI employees with access.
- Tasks and artifacts that used it.

Rules:

- Access follows least privilege.
- Task context is snapshotted when a run begins.
- Stale context produces a warning.
- AI employees may propose context updates.
- Personal corrections are not silently promoted to shared truth.

### 14.17 Artifacts

Artifact types include:

- Plan.
- Research brief.
- Opportunity brief.
- Design brief.
- Flow or state specification.
- Prototype plan.
- QA report.
- Interview kit.
- Account brief.
- Adoption plan.
- Daily brief.
- Weekly synthesis.

Every artifact must show:

- Title.
- Type.
- Status.
- Authoring AI employees.
- Human owner.
- Goal and tasks.
- Version.
- Sources.
- Checks.
- Reviewer.
- Approval state.
- Assumptions.
- Created and updated timestamps.

### 14.18 Learning

Learning proposals can update:

- Personal preferences.
- AI employee instructions.
- Task templates.
- Skill content.
- Context.
- Review criteria.

Each proposal must include:

- Observed correction or outcome.
- Proposed change.
- Scope.
- Evidence.
- Expected benefit.
- Risk.
- Human action.

No shared learning is applied without approval.

### 14.19 Today dashboard

The Today page must prioritise supervision and decisions.

Required sections:

- Greeting and current focus.
- Daily brief.
- Decisions required.
- Active goals.
- AI team status.
- Work in progress.
- Blocked or recovering work.
- Recent artifacts.
- Upcoming routines.

Summary measures:

- AI employees active, paused, or in error.
- Tasks ready, in progress, blocked, or awaiting approval.
- Decisions pending.
- Artifacts completed and reviewed.
- Simulated run success rate.
- Quality checks passed.

The dashboard must not score the human employee.

### 14.20 Activity and provenance

The activity log must record:

- Goal created or changed.
- Plan proposed, approved, or superseded.
- Task created, delegated, reassigned, or completed.
- Run started, succeeded, failed, or recovered.
- Question asked and answered.
- Review or approval decision.
- Artifact created or changed.
- AI employee proposed, activated, paused, or edited.
- Routine run.
- Skill or context proposal.

Every event includes:

- Actor.
- Action.
- Object.
- Timestamp.
- Origin.
- Related goal and task.
- Before and after state where relevant.

## 15. Primary demonstration scenario

### Goal

> Identify the highest-impact friction in a synthetic onboarding journey and produce an evidence-backed interactive improvement for review.

### Human responsibilities

- Approve the problem framing.
- Set design principles.
- Choose between material alternatives.
- Judge whether the proposed experience meets the quality bar.
- Approve the final artifact.

### Proposed plan

1. **Collect product and customer signals**
   - Owner: Research Assistant.
   - Output: Normalised source set.

2. **Cluster problems and identify contradictions**
   - Owner: Research Assistant.
   - Output: Evidence map.

3. **Prepare opportunity brief**
   - Owner: Strategy Partner.
   - Reviewer: Design QA Reviewer.
   - Output: Opportunity brief.

4. **Explore three interaction approaches**
   - Owner: Junior Product Designer.
   - Human decision: Select direction.
   - Output: Design alternatives.

5. **Create prototype**
   - Owner: Prototype Builder.
   - Dependency: Approved design direction.
   - Output: Interactive prototype artifact.

6. **Review prototype**
   - Owner: Design QA Reviewer.
   - Output: QA report and requested changes.

7. **Prepare final decision**
   - Owner: Strategy Partner.
   - Approver: Human employee.

### Required dynamic moment

During signal synthesis, the Research Assistant finds conflicting evidence and creates a subtask for a targeted contradiction check. The new work is linked to the parent task, assigned, and visible in activity.

### Required blocker

The Junior Product Designer asks the human to choose whether the concept should optimise for first-session activation or long-term discoverability. Work pauses until the human answers.

### Required recovery

The first prototype run fails a simulated dependency check. The monitor retries once, then escalates with:

- Cause.
- Evidence.
- Recovery owner.
- Recommended action.
- Retry, reassign, or reduce-scope choices.

### Returning-user moment

When the user returns, Today shows:

- What completed.
- What failed.
- What changed.
- Decisions needed.
- Artifacts ready for review.
- Recommended next action.

## 16. Secondary demonstration scenarios

### 16.1 People/Recruiting

**Goal:** Create a structured, equitable interview process for a synthetic role.

AI employees:

- Research common role competencies.
- Draft an interview loop.
- Create evidence rubrics.
- Check for missing or inconsistent evaluation criteria.
- Draft interviewer guidance.

Human retains all candidate and hiring decisions.

### 16.2 Customer Success

**Goal:** Prepare an evidence-based adoption plan for a synthetic account.

AI employees:

- Synthesise mock usage, support, and sentiment signals.
- Identify evidence-backed risks.
- Prepare an account brief.
- Draft an adoption plan.
- Review unsupported claims.
- Draft a customer follow-up for approval.

Human owns account strategy, commitments, and communication.

## 17. User stories

### Onboarding and team creation

- As an employee, I want help clarifying my mission so that the AI workforce is designed around a meaningful outcome.
- As an employee, I want to configure a frontier Strategy Partner so that I can use strong reasoning without surrendering ownership.
- As an employee, I want to test the selected model environment before launch so that failure is visible before work begins.
- As an employee, I want the Strategy Partner to recommend an AI team from my role, mission, and first goal so that I do not start from a blank page or receive a generic team.
- As an employee, I want to understand why each AI employee is recommended so that I can judge its value.
- As an employee, I want to edit and approve the proposed team before activation so that it reflects my way of working.
- As an employee, I want to define work I will never delegate so that my boundaries are explicit.
- As an employee, I want to see role, adapter, model, skills, tools, and context separately so that I understand what I am configuring.

### AI employee management

- As an employee, I want to create a specialist from a template so that I can add a capability quickly.
- As an employee, I want my Strategy Partner to propose a missing specialist so that the team can identify capability gaps.
- As an employee, I want to approve an AI employee proposal so that agents cannot expand the workforce without me.
- As an employee, I want to pause an AI employee so that I can stop new autonomous work without deleting history.
- As an employee, I want to change a runtime without rebuilding the role so that my operating model is portable.

### Goals and planning

- As an employee, I want to define an outcome and success criteria so that agents work toward value rather than activity.
- As an employee, I want the Strategy Partner to challenge my assumptions so that weak strategy is improved before execution.
- As an employee, I want the Strategy Partner to propose a plan so that I can review decomposition before work begins.
- As an employee, I want to edit task ownership and dependencies so that the plan matches my judgment.
- As an employee, I want approval to bind to a plan version so that later edits cannot bypass my decision.
- As an employee, I want to pause a goal so that related autonomous work stops safely.

### Tasks and delegation

- As an employee, I want a plan to become a task tree so that execution is durable and inspectable.
- As an employee, I want to see who created and assigned each task so that delegation has provenance.
- As an AI coordinator, I want to create subtasks for specialists so that complex work can be decomposed.
- As an AI specialist, I want to create an allowed follow-up task so that unexpected work is captured rather than hidden.
- As an employee, I want dependencies to prevent premature execution so that work happens in the correct order.
- As an employee, I want a comment to wake the responsible AI employee so that task discussion can resume execution.

### Supervision

- As an employee, I want one Inbox for decisions and failures so that I know where my attention is required.
- As an employee, I want structured questions with clear options so that I can unblock agents quickly.
- As an employee, I want to know what happens after approval so that decisions are informed.
- As an employee, I want to see active, blocked, and recovering work so that autonomy remains observable.
- As an employee, I want to pause all autonomous work so that I retain emergency control.

### Quality and evidence

- As an employee, I want completed work to include acceptance criteria and evidence so that “done” is meaningful.
- As an employee, I want an independent reviewer so that speed does not remove quality control.
- As a reviewer, I want to request changes so that incomplete work returns to execution with clear feedback.
- As an employee, I want every artifact to show its sources and assumptions so that I can judge reliability.
- As an employee, I want corrections to create learning proposals so that the system improves without silently changing shared rules.

### Recurring work

- As an employee, I want routines to create tasks on a schedule so that repeated work remains auditable.
- As an employee, I want a morning brief so that I can understand progress quickly.
- As an employee, I want routines to remain paused until an owner is assigned so that work is not orphaned.
- As an employee, I want to inspect past routine runs so that I can evaluate whether the routine is useful.

## 18. Functional requirements

### Workspace and persistence

- FR-1: The prototype must persist onboarding, AI team, goals, plans, tasks, runs, routines, artifacts, Inbox items, and activity locally.
- FR-2: The prototype must provide a complete reset action.
- FR-3: The prototype must seed a Product/Design demonstration workspace.
- FR-4: The prototype must support switching among Product/Design, People/Recruiting, and Customer Success templates.
- FR-5: The prototype must display the independent-concept disclosure.

### AI employees

- FR-6: Users must be able to create an AI employee from a template.
- FR-7: Users must be able to inspect and edit an AI employee.
- FR-8: Users must be able to pause and resume an AI employee.
- FR-9: Users must be able to assign a simulated adapter and model independently where supported.
- FR-10: The system must persist reporting and delegation relationships.
- FR-11: The Strategy Partner must be able to produce an AI employee proposal.
- FR-12: An AI employee proposal must require human approval before activation.
- FR-13: Every AI employee must have a versioned charter.

### Goals and plans

- FR-14: Users must be able to create, edit, pause, resume, achieve, and cancel goals.
- FR-15: The Strategy Partner must be able to generate a deterministic plan proposal.
- FR-16: Users must be able to edit plan tasks, owners, dependencies, reviewers, and approvals.
- FR-17: Plans must be versioned.
- FR-18: Material edits to an approved plan must require reapproval.
- FR-19: Approved plans must create persisted tasks.

### Tasks

- FR-20: Users must be able to create, edit, assign, reassign, and cancel tasks.
- FR-21: Tasks must support parent-child relationships.
- FR-22: Tasks must support blocking dependencies.
- FR-23: Tasks must support acceptance criteria and definition of done.
- FR-24: Tasks must support assignee, reviewer, approver, and monitor roles.
- FR-25: Tasks must display origin and provenance.
- FR-26: AI employees must be able to create permitted subtasks.
- FR-27: The system must prevent blocked tasks from starting.
- FR-28: The system must prevent required-review tasks from completing before review.
- FR-29: The system must prevent required-approval tasks from completing before approval.
- FR-30: Tasks must support list and board views.
- FR-31: Tasks must support search, filtering, grouping, sorting, and parent-child nesting.
- FR-32: Task discussion must support simulated human and AI employee comments.
- FR-33: A human comment must be able to trigger a simulated run.

### Runs and autonomy

- FR-34: Every task execution attempt must create a run.
- FR-35: Runs must store trigger, AI employee, adapter, model, task, versions, context snapshot, events, status, output, and error.
- FR-36: Users must be able to pause, resume, cancel, and retry eligible simulated runs.
- FR-37: The simulation must support manual, assignment, comment, dependency, review, routine, and scheduled triggers.
- FR-38: The prototype must reconcile elapsed time on return and create deterministic simulated progress.
- FR-39: The interface must label simulated execution and simulated tool calls.
- FR-40: The system must provide a global pause control.

### Routines

- FR-41: Users must be able to create, edit, pause, resume, and archive routines.
- FR-42: A routine must require a responsible AI employee before activation.
- FR-43: Every routine run must create a task and run record.
- FR-44: Users must be able to inspect recent routine-created tasks.

### Inbox, review, and recovery

- FR-45: The Inbox must combine approvals, questions, blockers, failures, recoveries, reviews, proposals, and briefs.
- FR-46: Inbox items must link to their originating work.
- FR-47: Users must be able to approve, reject, request changes, answer, retry, reassign, pause, and resolve where applicable.
- FR-48: Review must be represented separately from approval.
- FR-49: A monitor must detect the seeded stalled or failed task.
- FR-50: The default monitor policy must retry once before escalation.
- FR-51: A repeated failure must create a recovery item with an owner and next action.

### Skills, context, artifacts, and learning

- FR-52: Users must be able to inspect skills and versions.
- FR-53: Users must be able to see skill-to-AI-employee assignments.
- FR-54: Personal skill edits must create a personal fork.
- FR-55: Shared skill changes must create approval proposals.
- FR-56: Users must be able to inspect context access by AI employee.
- FR-57: Every run must store a context snapshot.
- FR-58: Stale mock context must generate a warning.
- FR-59: Completed work must create or link to an artifact.
- FR-60: Artifacts must show sources, assumptions, checks, reviewer, and approval state.
- FR-61: Corrections must be convertible into learning proposals.
- FR-62: Learning proposals must not apply without human confirmation.

### Accessibility and trust

- FR-63: All interactive controls must be keyboard accessible.
- FR-64: Status must never be communicated by colour alone.
- FR-65: Focus states must be visible.
- FR-66: Motion must respect reduced-motion preferences.
- FR-67: All mock identities and sources must be clearly synthetic.
- FR-68: No human productivity score may be displayed.

### Strategy formation and first-run experience

- FR-69: Onboarding must offer direct mission entry and guided mission clarification.
- FR-70: Guided mission clarification must ask about responsibilities, audience, bottleneck, desired outcome, constraints, and quality bar.
- FR-71: The employee must be able to edit and approve the mission before AI team design begins.
- FR-72: Initial workspace creation must create the human workspace and Strategy Partner before creating specialist AI employees.
- FR-73: The interface must configure adapter, model, and AI employee role as separate concepts.
- FR-74: The interface must recommend the most capable approved reasoning model for the Strategy Partner while allowing the human to change it.
- FR-75: The interface must provide a simulated environment-health check before the Strategy Partner is activated.
- FR-76: Autonomous work must not start while the selected environment is unhealthy.
- FR-77: The first task must be a guided strategy-and-team-design session derived from the approved mission, not a generic hiring or implementation task.
- FR-78: The Strategy Partner must propose specialist roles, purposes, skills, tools, context, adapters, models, reporting relationships, and expected value.
- FR-79: Proposed specialists must remain inactive until the human edits or approves the proposal.
- FR-80: The product must never label the Strategy Partner as the human employee’s CEO or strategy owner.
- FR-81: Specialist AI employees may use models optimised for cost, speed, coding, or review while the Strategy Partner uses the strongest approved reasoning model.

## 19. UX and visual requirements

### 19.1 Experience character

The product should feel:

- Calm.
- Operational.
- Employee-centred.
- Trustworthy.
- Precise.
- Designed for supervision, not spectacle.

It should not feel like:

- A chat app with decorative agent avatars.
- A sci-fi command centre.
- A company org-chart simulator.
- A surveillance dashboard.
- A fake stream of model thoughts.

### 19.2 Primary interaction patterns

- Dense but readable work surfaces.
- Clear task status and ownership.
- Contextual side panels for detail.
- Human decision cards with strong hierarchy.
- Expandable task trees.
- Inspectable provenance.
- Visible recovery actions.
- Consistent role badges for human, AI employee, reviewer, approver, and monitor.

### 19.3 Status language

Prefer concrete states:

- Ready.
- Working.
- Waiting for you.
- Blocked.
- In review.
- Recovering.
- Done.

Avoid anthropomorphic states such as “thinking deeply” or “feeling unsure.”

### 19.4 Responsive behaviour

The full prototype is desktop-first.

- Minimum primary viewport: 1280 × 800.
- At narrower widths, detail panels may become drawers.
- Task table may switch to cards.
- The mobile experience is view-and-decide, not full configuration.

## 20. Technical approach

### 20.1 Prototype architecture

Use the existing Next.js application and implement the prototype as a self-contained feature module.

Suggested structure:

```text
app/
  labs/
    ai-workforce/
      page.tsx
      [...view]/

components/
  ai-workforce/
    onboarding/
    today/
    goals/
    plans/
    tasks/
    agents/
    routines/
    skills/
    context/
    artifacts/
    inbox/
    activity/
    shared/

lib/
  ai-workforce/
    types.ts
    fixtures.ts
    templates.ts
    simulation.ts
    transitions.ts
    selectors.ts
    storage.ts
    permissions.ts
    reset.ts
```

### 20.2 State model

The prototype should use a single persisted workspace state containing:

- Workspace.
- Human employee.
- Role template.
- Projects.
- Goals.
- Plan versions.
- AI employees.
- Reporting relationships.
- Skills and versions.
- Tools.
- Context sources.
- Tasks and dependencies.
- Runs and events.
- Routines.
- Inbox items.
- Reviews.
- Approvals.
- Artifacts.
- Monitors.
- Learning proposals.
- Activity events.
- Simulation clock.

### 20.3 Deterministic simulation

The simulator should be event-driven rather than a set of disconnected screen toggles.

Each scenario defines:

- Trigger.
- Preconditions.
- Event sequence.
- Delay range.
- State transitions.
- Output fixture.
- Optional blocker.
- Optional question.
- Optional failure.
- Recovery.
- Artifact.
- Follow-up work.

The simulator must produce the same logical outcome for the same seeded choice, allowing reliable demonstration and testing.

### 20.4 State machines

Implement explicit transition maps for:

- Goal.
- Plan.
- Task.
- Run.
- Review.
- Approval.
- Routine.
- AI employee.
- Recovery.

Invalid transitions must be rejected in the interface and development logs.

### 20.5 Local autonomous-progress simulation

The prototype cannot perform real work when closed. To demonstrate asynchronous operation:

1. Persist a simulation timestamp.
2. On return, calculate elapsed mock time.
3. Apply eligible deterministic routine and task events.
4. Create run, task, artifact, and Inbox records.
5. Present the result in the daily brief.
6. Label the behaviour “Simulated autonomous progress.”

### 20.6 No real secrets

- Do not request API keys.
- Do not include real provider SDKs.
- Do not include real integration credentials.
- Do not send mock data to third parties.
- Do not add production action affordances that appear real.

## 21. Conceptual data model

### HumanEmployee

- `id`
- `name`
- `role`
- `responsibilities`
- `delegationBoundaries`
- `reviewCadence`
- `preferences`

### AIEmployee

- `id`
- `name`
- `roleTitle`
- `type`
- `purpose`
- `responsibilities`
- `exclusions`
- `reportsToId`
- `delegateIds`
- `adapterId`
- `modelId`
- `skillVersionIds`
- `toolIds`
- `contextSourceIds`
- `autonomyLevel`
- `approvalPolicy`
- `schedule`
- `completionRequirements`
- `failurePolicy`
- `instructionVersion`
- `status`

### Goal

- `id`
- `title`
- `outcome`
- `why`
- `successCriteria`
- `constraints`
- `priority`
- `ownerId`
- `projectId`
- `reviewDate`
- `contextSourceIds`
- `autonomyCeiling`
- `status`

### Plan

- `id`
- `goalId`
- `version`
- `summary`
- `assumptions`
- `questions`
- `workstreams`
- `risks`
- `definitionOfDone`
- `status`
- `approvedBy`
- `approvedAt`

### Task

- `id`
- `title`
- `description`
- `goalId`
- `projectId`
- `planId`
- `parentTaskId`
- `originatingActorId`
- `createdByAgentId`
- `assigneeId`
- `status`
- `priority`
- `labels`
- `acceptanceCriteria`
- `definitionOfDone`
- `contextSourceIds`
- `skillVersionId`
- `toolIds`
- `blockedByIds`
- `reviewerId`
- `approverId`
- `monitorId`
- `artifactIds`
- `timestamps`

### Run

- `id`
- `taskId`
- `agentId`
- `adapterId`
- `modelId`
- `trigger`
- `instructionVersion`
- `skillVersionId`
- `contextSnapshot`
- `events`
- `status`
- `output`
- `error`
- `recoveryAction`
- `startedAt`
- `completedAt`

### Routine

- `id`
- `title`
- `purpose`
- `agentId`
- `projectId`
- `goalId`
- `instructions`
- `skillVersionId`
- `contextSourceIds`
- `trigger`
- `recurrence`
- `delivery`
- `reviewerId`
- `approvalPolicy`
- `failurePolicy`
- `status`

### InboxItem

- `id`
- `type`
- `title`
- `summary`
- `goalId`
- `taskId`
- `runId`
- `originatingActorId`
- `evidence`
- `recommendation`
- `actions`
- `status`
- `createdAt`

## 22. Seed content

### Product/Design project

**Name:** Onboarding Experience Improvement
**Goal:** Identify the highest-impact friction and produce an evidence-backed prototype.
**Synthetic sources:**

- Product analytics summary.
- Support ticket excerpts.
- Mock customer interviews.
- NPS comments.
- Usability study notes.
- Design principles.
- Existing flow specification.

### Seed decisions

- Choose optimisation target.
- Approve plan v1.
- Approve proposed Research Contradiction Checker AI employee.
- Review prototype direction.
- Resolve prototype failure.
- Approve final artifact.

### Seed failures

- Missing context.
- Contradictory signals.
- Simulated runtime error.
- Missing accessibility evidence.

## 23. Success metrics

### 23.1 Usability

- 80% of test users can explain the difference between an AI employee, adapter, model, skill, task, and routine after one walkthrough.
- 80% can create a goal and approve a plan without facilitation.
- 80% can identify where human judgment is required.
- 80% can find the source of an agent-created subtask.
- Median time to resolve a seeded blocker is under 60 seconds.

### 23.2 Trust and control

- 90% can identify whether execution is simulated.
- 80% can find which context and skill a run used.
- 80% can explain why a task is blocked.
- 80% can pause all autonomous work.
- No user interprets agent activity metrics as employee performance scoring.

### 23.3 Product communication

- Viewers describe the product as a “personal AI team” or “AI workforce operating system,” not merely a workflow dashboard.
- Viewers understand that the human owns strategy and taste.
- Viewers understand why the product adds value beyond a single Claude or Codex session.
- The primary scenario can be demonstrated in eight minutes.

### 23.4 Prototype quality

- All seeded workflows reach deterministic completion.
- All invalid state transitions are prevented.
- All required decisions appear in the Inbox.
- All completed artifacts show evidence and provenance.
- Reset returns the prototype to the exact seeded state.
- No real network request is made for agent execution.

## 24. Risks and mitigations

### Risk: “AI employees” sounds like human replacement

**Mitigation:** Consistently state that the product augments each employee. Make the human’s responsibilities and approval rights visible throughout.

### Risk: The experience becomes a renamed project manager

**Mitigation:** Demonstrate persistent agent charters, autonomous triggers, skill execution, delegation, runtime portability, context access, evidence, and recovery.

### Risk: The prototype implies real autonomy

**Mitigation:** Label every run and tool call simulated. Explain elapsed-time reconciliation honestly.

### Risk: Too many concepts overwhelm the user

**Mitigation:** Use role-based onboarding, a recommended starter team, progressive disclosure, and one guided first goal.

### Risk: Agents create noisy task explosions

**Mitigation:** Limit delegation depth, require parent linkage, enforce task creation policies, and let the Strategy Partner or execution coordinator consolidate duplicates.

### Risk: Activity is mistaken for productivity

**Mitigation:** Prioritise accepted artifacts, evidence quality, resolved decisions, and goal progress.

### Risk: Human review becomes a bottleneck

**Mitigation:** Group low-risk decisions, use independent AI review for quality, and reserve human approval for material judgment or consequential action.

### Risk: Personal context conflicts with company policy

**Mitigation:** Make scopes visible and ensure company policy overrides personal configuration.

### Risk: Cross-functional templates create ethical harm

**Mitigation:** Use synthetic data, prohibit high-impact automated decisions, and make human accountability explicit.

## 25. Delivery scope

### Phase 1: Foundation

- New route and shell.
- Workspace state and local persistence.
- Seeded Product/Design workspace.
- Disclosure.
- Today, AI Team, Goals, Tasks, and Inbox navigation.
- Reset.

### Phase 2: Team and planning

- Onboarding.
- Guided mission clarification.
- Strategy Partner configuration.
- Adapter and model selection.
- Environment-health check.
- Human and Strategy Partner strategy session.
- Team-composition proposal and approval.
- AI team builder.
- AI employee detail.
- Goal creation.
- Deterministic plan proposal.
- Plan editing and approval.
- Task-tree materialisation.

### Phase 3: Execution and supervision

- Task detail.
- Runs.
- Delegation.
- Structured questions.
- Review.
- Approval.
- Monitor and recovery.
- Daily brief.

### Phase 4: Compounding system

- Routines.
- Skills.
- Context access.
- Artifacts.
- Learning proposals.
- Activity and provenance.

### Phase 5: Cross-functional breadth

- People/Recruiting template.
- Customer Success template.
- Role switcher.
- Comparative case-study views.

## 26. Release acceptance criteria

The prototype is ready when:

1. A user can complete guided mission clarification and approve the resulting mission.
2. A user can configure a Strategy Partner, select its adapter and model, and inspect an environment-health result.
3. The interface identifies the human as principal and orchestrator and never labels the Strategy Partner as CEO.
4. The first task is a strategy-and-team-design session derived from the approved mission.
5. The Strategy Partner can challenge assumptions and propose an initial strategy.
6. The Strategy Partner can propose a role-specific AI team with rationale, skills, tools, context, runtimes, and reporting relationships.
7. Proposed specialists remain inactive until the human edits or approves them.
8. The team map shows the human, Strategy Partner, approved specialists, builder, and independent reviewer.
9. A user can create the seeded goal.
10. The Strategy Partner can propose plan v1.
11. The user can edit and approve plan v1.
12. Approval creates the correct task tree and dependencies.
13. The Research Assistant can create a linked contradiction-check subtask.
14. The Junior Product Designer can ask a blocking structured question.
15. A human answer can wake the task and continue execution.
16. The Prototype Builder can encounter the seeded failure.
17. The monitor can retry once and create a recovery item.
18. The human can resolve the recovery.
19. The Design QA Reviewer can request changes and later pass the artifact.
20. The final approval can complete the goal.
21. A routine can create an auditable daily-brief task.
22. Returning to the prototype can show simulated elapsed-time progress.
23. Every run shows role, adapter, model, skill, context snapshot, and simulated status.
24. Every artifact shows sources, assumptions, checks, and provenance.
25. The user can pause all work and reset the experience.
26. The People/Recruiting and Customer Success templates communicate cross-functional applicability without enabling prohibited decisions.

## 27. Open questions for a later production concept

- Which organisational systems would own identity, policy, and access?
- Should the Strategy Partner also coordinate execution, or should employees be able to create a separate lower-cost execution coordinator?
- Which company skills should be centrally mandated, recommended, or optional?
- How should personal skill forks be evaluated and promoted?
- What autonomy levels are appropriate for each tool and data classification?
- How should real runtime cost, latency, quality, and availability affect routing?
- What evidence is required before an agent-created task can be considered complete?
- How should work be handed between a human’s AI team and a shared departmental AI service?
- How should an employee transfer or offboarding affect personal context and AI employees?
- Which events belong in an enterprise audit log?
- What is the right governance model for employee-created AI roles?
- How should Works Council, privacy, security, legal, and accessibility stakeholders participate?
- How should the organisation measure value without turning the system into employee surveillance?

## 28. Final product statement

> Algolia AI Workforce gives every employee a persistent team of specialised AI employees. The human sets strategy, taste, priorities, and boundaries. Their AI team plans and executes work through reusable skills, approved tools, and bounded context. Goals become auditable tasks; agents delegate and work autonomously within guardrails; reviewers verify quality; and the employee receives the decisions that require human judgment.

This is the intended AI-native operating model:

```text
One human employee
        +
A role-specific AI team
        +
Shared organisational skills and context
        +
Visible tasks, evidence, approvals, and learning
        =
Higher-leverage, higher-quality work with human accountability
```
