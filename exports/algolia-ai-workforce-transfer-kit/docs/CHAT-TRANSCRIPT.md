# Algolia AI Workforce — Focused Chat Transcript

This is a chronological reconstruction of the Algolia-specific discussion.
User prompts are preserved closely from the available conversation. Assistant
outputs are represented by the resulting decision or artifact so the transfer
stays useful and compact.

## 1. Internal opportunity

**User**

> Something interesting happened at work today. I work full-time for Algolia as
> a Staff Product Designer. We are hiring a VP of AI Ops & Automation. I imagine
> he will build a team and may hire engineers or forward-deployed engineers
> without thinking of designers. This might be a good opportunity to work with
> the new VP so I can gain real experience in automation, experience and
> workflow design, agents, and skills. How would my current experience add value,
> and how should I pitch myself as a designer who knows design and code?

**Outcome**

The product-design contribution was framed around workflow modelling, human
control, trust, evidence, failure/recovery, agent interaction, and prototyping.
The goal was to demonstrate value through concrete pilots rather than a generic
request to join the team.

## 2. Pilot workflows

**User**

> Give me three to five valuable examples I can build as pilot workflows.
> Customer and Product Signals is an awesome one. I need more so I can read,
> study, and start gathering materials.

**Outcome**

Customer and Product Signals became the lead product/design pilot. Additional
pilots explored research synthesis, workflow opportunity mapping, prototype
delivery, quality review, and decision briefing.

## 3. Beyond R&D

**User**

> Can we think of workflows outside R&D, like People, recruitment, and other
> company functions? The company wants to be AI-native first, so this should cut
> across.

**Outcome**

The system expanded to cross-functional templates for Recruiting, People,
Customer Success, go-to-market, and operations. This established that the
product should provide a reusable employee-level operating model rather than an
R&D-only tool.

## 4. A personal workforce for every employee

**User**

> What do you think about building or deploying an Algolia version of an AI
> agent-management system so each employee can have their own version trained
> in their workflow and support or augment their work?

**Outcome**

The concept became a persistent personal AI workforce. Each employee would
direct multiple specialised AI employees with role-specific skills, tools,
context, goals, tasks, runs, evidence, artifacts, and approval boundaries.

## 5. Product brief

**User**

> I do not want to foreground the reference product. I want to build something
> specifically tuned for Algolia, prototype it, deploy it, and showcase it. Use
> mock data, well-written skills, and agentic workflows. Onboarding should assign
> agents and runtimes such as Claude and Codex. Treat it as an employee-specific
> AI workforce and write the PRD so I can start building.

**Outcome**

The first PRD was created and later rewritten around AI employees rather than a
generic workbench. The current version is `product/PRD.md`.

## 6. Product-choice answers

**User**

> 1A, 2C, 3A, 4B.

**Outcome**

These choices informed the original PRD direction. Later discussion superseded
some framing, and the current settled decisions are recorded in
`PRODUCT-DECISIONS.md`.

## 7. Reference feature coverage

**User**

> Review the reference task-manager experience and tell me whether our PRD
> covers it. Do not edit yet; just report back.

**Outcome**

The review identified task hierarchy, task detail, agent configuration,
routines, runs, inbox, artifacts, activity, resource controls, and recovery as
important product machinery.

## 8. Build versus using coding assistants

**User**

> Can all these outcomes be achieved with Claude-style coworking or Codex? Is
> there a benefit to building this product ourselves instead of only using those
> tools?

**Outcome**

Claude and Codex were positioned as worker runtimes, not the complete operating
system. The product's value is persistent coordination: role-specific context,
goals, task state, schedules, multiple workers, review, approvals, evidence,
provenance, and recovery.

## 9. AI employees, tasks, and autonomy

**User**

> In the reference, agents can create tasks and subtasks and operate like AI
> employees. What I want is for each employee to have multiple dedicated AI
> employees with specialised skills and roles. A Staff Designer might have a
> Junior Designer, Research Assistant, Builder, and Prototyper. They can be
> assigned tasks, create tasks from goals and objectives, and run autonomously
> using skills and tools. The human supplies full context. Does the PRD cover
> this directly or indirectly?

**Outcome**

The answer was that the idea was only partially explicit and needed to become
the core product model.

## 10. PRD rewrite

**User**

> Rewrite the PRD for this new direction. Study the reference experience so we
> can use its architecture. We are creating AI employees, not a company. It
> still aligns with an AI-native company where each employee uses AI to improve
> productivity and work quality.

**Outcome**

The PRD was comprehensively rewritten around:

- Human principal and orchestrator
- Frontier Strategy Partner
- Specialist AI employees
- Goals, plans, tasks, subtasks, and runs
- Skills, tools, and bounded context
- Routines
- Inbox
- Artifacts
- Provenance
- Failure and recovery
- Approval gates

## 11. Human as orchestrator

**User**

> The human employee is the orchestrator. They use the most intelligent model to
> create strategy, decide the required AI team members, and share the overall
> goal. Is this your thinking too?

**Outcome**

The final distinction was:

- Human owns strategy, taste, priorities, judgment, and accountability.
- Frontier Strategy Partner co-creates and challenges strategy, recommends the
  team, plans, and coordinates.
- Human approves.
- Specialists execute.

## 12. Reference onboarding and organisation

**User**

> Use the reference organisation setup to learn what can improve our PRD.

**Outcome**

The product adopted explicit team proposals, role charters, model/runtime
configuration, reporting and review relationships, environment readiness, and
approval before activation. Company and executive metaphors were rejected.

## 13. Information architecture and journey

**User**

> Based on the PRD and the reference organisation experience, design the
> information architecture and user journey for Algolia AI Workforce.

**Outcome**

The resulting source of truth is
`product/INFORMATION-ARCHITECTURE-AND-JOURNEY.md`.

## 14. First wireframes

**User**

> Based on this, design the wireframe for the product. Follow the useful
> structural patterns from the reference. This is purely a wireframe to show the
> product thinking.

**Outcome**

Three core views were designed:

- Today
- Goal Plan
- AI Team

## 15. Build all three

**User**

> Build all three.

**Outcome**

The three views became an interactive Next.js prototype.

## 16. Development chunk failure

**User**

> Runtime ChunkLoadError: loading the `/ai-workforce` page chunk failed.

**Outcome**

The stale Next.js build cache was removed, the development server was restarted,
and the route was reverified.

## 17. Complete wireframe base

**User**

> I want to build the entire wireframe so I have a base to work from. Let us
> build Strategy, Work, Activity, and the other useful features from the
> reference, plus employee onboarding using the demo employee.

**Outcome**

The prototype expanded to every primary and utility destination. Alex Morgan
became the demo employee, and the complete eight-step onboarding was added.

## 18. Transfer without restarting

**User**

> I want to move the entire Algolia AI Workforce work—including the
> conversation, PRD, documents, and wireframes—to my work computer so I can
> continue building without starting from scratch. Package it so Codex can set
> up the conversation and continue from there. Remove all unrelated brand
> references.

**Outcome**

This self-contained transfer kit was created.
