# Transfer Verification

Verification date: 24 July 2026

## Standalone prototype

- Clean dependency installation completed successfully.
- TypeScript validation completed successfully.
- Next.js production build completed successfully.
- `/` rendered the Algolia AI Workforce prototype.
- `/ai-workforce` rendered the Algolia AI Workforce prototype.
- The standalone build does not depend on the source website.

## Privacy and portability

- Personal-studio names and identifiers: no matches.
- Personal absolute filesystem paths: no matches.
- Source-development localhost addresses: no matches.
- Secret-shaped strings: no matches.
- Environment files: excluded.
- Credentials: excluded.
- `node_modules`: excluded.
- `.next` build output: excluded.
- Unrelated products, company documents, and conversations: excluded.

## Package integrity

`CHECKSUMS.txt` contains a SHA-256 checksum for each transferred file except the
checksum file itself. The outer archive also ships with a separate
`.zip.sha256` checksum.

On the destination computer, verify the archive before extracting:

```bash
shasum -a 256 -c algolia-ai-workforce-transfer-kit.zip.sha256
```

After extracting, verify the package files:

```bash
cd algolia-ai-workforce-transfer-kit
shasum -a 256 -c CHECKSUMS.txt
```

## Rebuild check on the destination computer

```bash
cd prototype
npm install
npm run typecheck
npm run build
npm run dev
```

Open `http://localhost:3000` or `http://localhost:3000/ai-workforce`.
