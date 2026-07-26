# Work Computer Setup

## Before transferring

Confirm the transfer complies with your employer's policies. The package
contains only synthetic product material and open-source prototype code, but the
destination and transfer method still need to be approved.

Do not add:

- Personal credentials
- Employer credentials
- API keys
- Authentication cookies
- Real employee data
- Customer data
- Internal documents
- Proprietary source code

## Unpack

Move `algolia-ai-workforce-transfer-kit.zip` to an approved folder and extract
it.

Recommended location:

```text
~/Projects/algolia-ai-workforce-transfer-kit
```

## Open in Codex

Open the extracted top-level folder, not only the `prototype/` subfolder. Codex
needs access to both product documents and code.

Paste `CODEX-CONTINUATION-PROMPT.md` into a new Codex task.

## Install and verify

From a terminal:

```bash
cd prototype
npm install
npm run typecheck
npm run build
npm run dev
```

Open:

```text
http://localhost:3000
http://localhost:3000/ai-workforce
```

If port 3000 is busy:

```bash
npm run dev -- --port 3002
```

## Optional Git setup

Only after verifying the folder:

```bash
git init
git add .
git commit -m "Initial Algolia AI Workforce transfer"
```

If this becomes an internal company repository, create it through the approved
Algolia source-control process and follow internal classification, access, and
retention requirements.

## First Codex task

The first task should be verification only:

> Read the continuation prompt and all referenced product truth. Install the
> prototype, run typecheck and production build, inspect both routes, and report
> whether the transferred state matches the implementation-status document.
> Do not modify product behaviour yet.

## Recommended second task

After verification:

> Propose a work package for selecting and implementing one complete pilot
> workflow. Preserve the existing product model and explain which PRD
> requirements the pilot validates.

## Troubleshooting

### Node is unavailable

Install the company-approved current Node.js LTS version, then run the install
steps again.

### The page loads without styles

Confirm the workspace contains:

- `prototype/components/ai-workforce/workforce.module.css`
- `prototype/app/globals.css`

Then remove `.next/` and restart the development server.

### A stale chunk error appears

Stop the server, remove `prototype/.next/`, and restart:

```bash
rm -rf .next
npm run dev
```

### Codex tries to restart discovery

Point it to:

- `docs/product/PRD.md`
- `docs/PRODUCT-DECISIONS.md`
- `docs/IMPLEMENTATION-STATUS.md`

Ask it to identify a specific unresolved question before proposing changes to
settled decisions.
