# Rulz&Co AI Interface Design System

A playbook and component system for building the interface layer of AI products. Grounded in current AI interaction patterns, tuned to your dark editorial brand, and mapped to the demos you are building.

Use it as the base for the document extractor, the finance copilot, the support console, and everything after.

---

## How to read this

- Part 1 is the thinking. The pattern groups and the AI state model. Learn these once.
- Part 2 is the build. Components, tokens, and file structure you code against.
- Part 3 maps the system to your actual demos.

The patterns draw on public AI UX work, mainly Emily Campbell's Shape of AI taxonomy. This system is written in my own words and tuned for your builds, so you own it and can sell work built on it.

---

# Part 1: The thinking

## The six pattern groups

Every AI interface problem falls into one of these. You will not use all of them. The ones that matter for your builds are marked.

### 1. Wayfinders — help the user start
The blank box problem. A user who does not know what to type gets nothing done.
- Initial input: the main prompt or action area.
- Suggestions: starter prompts near the input.
- Templates: pre-built structures the user fills or the AI pre-fills.
- Example gallery: sample outputs that show what is possible.
- Follow-up: the AI asks for more when the request is unclear.

Matters for your builds: high. Every demo needs a way in that is not a bare text field.

### 2. Inputs — what the user directs the AI to do
The actions a user can trigger.
- Open input: natural language box.
- Inline action: act on something already on the page, like selected text.
- Auto-fill: extend one input across many fields.
- Summary, expand, restructure, transform: reshape existing content.

Matters for your builds: medium to high. Inline actions and auto-fill are core to extractors and copilots.

### 3. Tuners — refine before the AI runs
Give the AI context and constraints.
- Attachments: drop in a file, link, or reference.
- Connectors: pull from external data.
- Filters and parameters: constrain source, type, or format.
- Modes: switch persona or depth.

Matters for your builds: medium. Attachments are essential for anything document-based.

### 4. Governors — keep the human in control
This is where most AI products fail, and where your value sits.
- Action plan: the AI shows the steps it will take before it runs.
- Stream of thought: reveal the AI's reasoning and tool use as it works.
- Citations and references: show what the answer is based on.
- Controls: pause or stop mid-run.
- Draft mode: iterate cheaply before committing.
- Verification: the user confirms before the AI acts.
- Variations: several options to pick from.

Matters for your builds: highest. This group is the interface layer the big deployment firms skip. Lead with it.

### 5. Trust builders — confidence in the result
Signals that the output is safe to rely on.
- Caveat: flag the model's limits.
- Disclosure: mark clearly that content is AI-made.
- Footprints: let the user trace prompt to result.
- Consent and data ownership: control over what the AI keeps.

Matters for your builds: high. Confidence and disclosure separate a tool people trust from one they abandon.

### 6. Identifiers — mark the AI
How the AI is recognised across the product.
- Name, avatar, icon, colour, personality.

Matters for your builds: low to medium. Keep it consistent and quiet. One icon and one accent, used the same way everywhere.

---

## The AI state model

A normal interface has a few states. An AI interface has more, and skipping any of them is where products break. Design all eight for every AI feature.

| State | What the user sees | Why it matters |
|---|---|---|
| Idle | Input with suggestions or templates | Solves the blank box |
| Submitting | Input locks, request acknowledged | Confirms the click landed |
| Working | Progress, steps, or streamed reasoning | A frozen screen reads as broken |
| Streaming | Output builds in real time | Long waits feel usable |
| Complete | Final output with sources and actions | The result is verifiable |
| Low confidence | The output plus a clear uncertainty signal | The user knows when to check |
| Error | What failed and how to retry | Failure is common with models |
| Empty | Guidance on what to do next | An empty screen should invite action |

Rule: no AI feature ships until all eight are designed. Most teams design two. That gap is your pitch.

---

## Five principles for the system

1. Show the work. Every AI output links to its source or its steps. If you cannot trace it, do not display it as fact.
2. Never freeze. A model that takes 30 to 90 seconds needs streaming or step visibility. A spinner alone is a failure.
3. Draft, then commit. The AI proposes. The human edits. Then it saves or sends. Never auto-commit a side effect.
4. Signal certainty. Show when the AI is sure and when it is guessing. Hidden uncertainty destroys trust.
5. Design the failure. Error and low-confidence states get the same care as the happy path.

---

# Part 2: The build

## Visual tokens

A dark editorial base. Warm near-black, not pure black. One restrained metallic accent, not a neon. This avoids the default dark-plus-neon look that reads as machine-made.

Retune the hex values to taste. The structure is the point.

### Colour

| Token | Hex | Use |
|---|---|---|
| bg-base | #0A0A0B | Page background |
| surface-1 | #141416 | Cards, panels |
| surface-2 | #1E1E21 | Raised elements, inputs |
| hairline | #2A2A2E | Borders, dividers |
| text-primary | #F5F3EF | Body and headings, warm off-white |
| text-secondary | #A1A0A6 | Supporting text |
| text-muted | #6B6A70 | Labels, captions |
| accent | #C9A96A | AI marker, primary action, champagne bronze |
| accent-dim | #8A7550 | Hover, secondary accent |
| confidence-high | #6FA88A | Sure, verified, desaturated sage |
| confidence-low | #C4934A | Uncertain, needs review, muted amber |
| danger | #C36A6A | Error, destructive, desaturated brick |

Note on marking AI content: use the accent plus a consistent icon. Do not reach for the violet or electric blue that most products use. It fights a luxury base and reads as a template.

### Type

Three roles. Pick one option per row.

| Role | Option A | Option B | Use |
|---|---|---|---|
| Display | Fraunces (variable serif) | Instrument Serif | Headlines, hero, big moments |
| Body | Geist Sans | Inter | Interface text, everything default |
| Mono | Geist Mono | JetBrains Mono | Citations, data, confidence values, code |

Set a clear scale. Suggested: 12, 14, 16, 20, 28, 40, 64. Body at 16. Captions and data at 14 mono. Weights: body 400 and 500, display 400 with tight tracking.

### Spacing

4px base. Scale: 4, 8, 12, 16, 24, 32, 48, 64. Use it strictly. No off-scale values.

### Radius

Restraint reads as luxury. Scale: 4 (inputs), 8 (buttons), 12 (cards). Nothing fully rounded except avatars and status dots.

### Motion

Subtle and fast.
- Token fade-in on stream: 120ms ease-out.
- State transitions: 200ms ease.
- Streaming cursor: a blinking accent block.
- Respect prefers-reduced-motion. Cut all non-essential animation when set.

---

## Core components

The building blocks. Each maps to a pattern group and covers the states it needs. Build these once, reuse across every demo.

### AIInput
The way in. Not a bare field.
- Contains: text input, attachment button, suggestion chips, submit.
- States: idle with suggestions, focused, submitting, disabled.
- Pattern group: Wayfinders, Tuners.

### StreamOutput
Text that builds in real time.
- Contains: streamed text, blinking cursor, stop control.
- States: streaming, complete, interrupted.
- Rule: always show a stop control while streaming.
- Pattern group: Governors.

### Citation
Inline source link. Your click-to-source signature.
- Contains: a numbered or highlighted marker in the output that, on click, reveals or scrolls to the exact source passage.
- States: default, hover, active with source shown.
- Pattern group: Governors, Trust builders.

### ConfidenceTag
A visible certainty signal.
- Contains: a small tag or bar using confidence-high or confidence-low, with a one-word label.
- States: high, medium, low.
- Rule: never show a number without a plain-language label next to it.
- Pattern group: Trust builders.

### ActionPlan
The steps the AI will take, shown before it runs.
- Contains: an ordered list of planned steps, each with an approve or skip control on high-stakes actions.
- States: proposed, approved, running, done.
- Pattern group: Governors.

### AgentSteps
Live view of a multi-step run.
- Contains: each step with its status, tool used, and result, appearing as it happens. Pause and redirect controls.
- States: pending, active, complete, failed, paused.
- Pattern group: Governors.

### DraftReview
AI proposes, human edits before commit.
- Contains: the AI draft in an editable field, an approve action, a regenerate action.
- States: draft, editing, approved.
- Rule: nothing sends or saves without passing through this.
- Pattern group: Governors.

### ErrorState
What failed and how to fix it.
- Contains: a plain description of the failure and a retry action. No apology, no vague copy.
- States: error, retrying.
- Pattern group: part of every feature.

### AIBadge
The consistent AI marker.
- Contains: one icon plus the accent, used the same way everywhere AI content appears.
- Pattern group: Identifiers, Trust builders disclosure.

---

## File structure

A starting layout for the component library. React and Tailwind, matching how you build.

```
/design-system
  /tokens
    colors.ts
    type.ts
    spacing.ts
    motion.ts
  /primitives
    Button.tsx
    Input.tsx
    Tag.tsx
    Card.tsx
  /ai
    AIInput.tsx
    StreamOutput.tsx
    Citation.tsx
    ConfidenceTag.tsx
    ActionPlan.tsx
    AgentSteps.tsx
    DraftReview.tsx
    ErrorState.tsx
    AIBadge.tsx
  /patterns
    states.ts        // the eight-state model as a shared type
  index.ts
```

Define the eight states as one shared type so every AI component speaks the same language.

```
type AIState =
  | 'idle'
  | 'submitting'
  | 'working'
  | 'streaming'
  | 'complete'
  | 'low_confidence'
  | 'error'
  | 'empty'
```

---

# Part 3: Applying it to your demos

Each demo leads with a different Governor or Trust pattern. That is deliberate. Each one proves a separate hard problem.

### Document extractor
- Lead pattern: Citation, click-to-source.
- Components: AIInput with attachment, StreamOutput, Citation, ConfidenceTag, DraftReview, ErrorState.
- The proof: click any extracted value, the source highlights. Low-confidence fields flag amber. Wrong values correct in one click.

### Finance copilot
- Lead pattern: grounded explanation tied to a chart.
- Components: AIInput, StreamOutput, Citation, ConfidenceTag, AIBadge.
- The proof: the AI names one next action and the chart highlights exactly what it refers to. The data and the AI talk to each other.

### Support reply console
- Lead pattern: ConfidenceTag plus DraftReview.
- Components: AIInput, DraftReview, ConfidenceTag, Citation, ErrorState.
- The proof: every AI draft shows confidence and its source. Low-confidence drafts route to human review before send.

### Agent run monitor
- Lead pattern: AgentSteps, live multi-step visibility.
- Components: ActionPlan, AgentSteps, StreamOutput, ErrorState.
- The proof: a user watches the agent work step by step and can pause or redirect mid-run.

---

## Build order

1. Set the tokens. Colour, type, spacing, motion. One afternoon.
2. Build the primitives. Button, Input, Tag, Card.
3. Build the AI components in this order: Citation, ConfidenceTag, StreamOutput, DraftReview. These four carry most of your demos.
4. Build the document extractor using only those four plus AIInput.
5. Add ActionPlan and AgentSteps when you build the agent monitor.

Ship the tokens and the four core AI components first. They are enough to build your strongest demo.
