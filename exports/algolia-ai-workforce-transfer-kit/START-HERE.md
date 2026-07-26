# Start Here — Algolia AI Workforce Transfer Kit

This package contains the complete resumable state for the Algolia AI Workforce
concept and wireframe prototype as of 24 July 2026.

It is designed so you can move the folder to a work computer, open it in Codex,
and continue without repeating the product discovery.

## What is included

- A standalone, runnable Next.js prototype in `prototype/`
- The full PRD in `docs/product/PRD.md`
- The information architecture and user journey in
  `docs/product/INFORMATION-ARCHITECTURE-AND-JOURNEY.md`
- Product rulings in `docs/PRODUCT-DECISIONS.md`
- A reconstruction of the Algolia-specific conversation in
  `docs/CONVERSATION-CONTEXT.md`
- A chronological focused transcript in `docs/CHAT-TRANSCRIPT.md`
- Current implementation status in `docs/IMPLEMENTATION-STATUS.md`
- Reference-pattern analysis in `docs/REFERENCE-PATTERNS.md`
- Wireframes and visual evidence in `assets/`
- A ready-to-paste Codex prompt in `CODEX-CONTINUATION-PROMPT.md`
- Work-computer setup steps in `docs/WORK-COMPUTER-SETUP.md`
- Transfer verification results in `docs/TRANSFER-VERIFICATION.md`

## Recommended transfer sequence

1. Copy the `.zip` archive to an approved work-computer location.
2. Follow your employer's policy for transferring personal prototype material.
3. Unzip the archive.
4. Open the extracted folder as the Codex workspace.
5. Read `docs/WORK-COMPUTER-SETUP.md`.
6. Paste the complete contents of `CODEX-CONTINUATION-PROMPT.md` into the first
   Codex task.
7. Ask Codex to verify the local setup before making product changes.

## Product in one paragraph

Algolia AI Workforce is an employee-facing operating system for creating and
supervising a personal team of specialised AI employees. The human employee
remains the principal and orchestrator. A frontier Strategy Partner helps
clarify intent, challenge assumptions, recommend the necessary AI team, and
turn approved strategy into an executable plan. Specialist AI employees use
named skills, approved tools, and scoped context to perform work. The human
retains strategy, taste, priorities, accountability, and approval. Goals,
tasks, runs, evidence, decisions, artifacts, failures, and recovery remain
visible and auditable.

## Important boundaries

- All data is synthetic.
- All runtime and tool activity is simulated.
- No credentials or environment files are included.
- No Algolia production systems are connected.
- Do not add real employee or customer data until the relevant company approval,
  security review, and data handling rules are established.
- Do not implement employee surveillance, human productivity scoring, or
  performance management.

## Package structure

```text
algolia-ai-workforce-transfer-kit/
├── START-HERE.md
├── CODEX-CONTINUATION-PROMPT.md
├── CHECKSUMS.txt
├── assets/
│   ├── references/
│   └── wireframes/
├── docs/
│   ├── CONVERSATION-CONTEXT.md
│   ├── CHAT-TRANSCRIPT.md
│   ├── DESIGN-QA.md
│   ├── IMPLEMENTATION-STATUS.md
│   ├── PRODUCT-DECISIONS.md
│   ├── REFERENCE-PATTERNS.md
│   ├── TRANSFER-VERIFICATION.md
│   ├── WORK-COMPUTER-SETUP.md
│   ├── delivery/
│   └── product/
└── prototype/
```

Start with the continuation prompt. It tells Codex exactly which files to read
and which assumptions are already settled.
