# SEO + AEO Monitoring Runbook

Operational guide for the SEO/AEO foundation. Lightweight by design — a weekly
15-minute pass plus a launch checklist.

## Environment variables (Vercel → Project → Settings → Environment Variables)

| Variable | Scope | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production, Preview, Development | Canonical origin for metadataBase, sitemaps, robots, OG, JSON-LD. Set to `https://rulz.co` in Production. |
| `NEXT_PUBLIC_GSC_VERIFY` | Production | Google Search Console HTML-tag verification token. Emits `<meta name="google-site-verification">` when set. |
| `OTTERLY_API_KEY` | Production (optional) | Otterly.AI AEO monitoring, if used via API. |

## Launch checklist (do within 48h of DNS cutover)

1. Confirm `NEXT_PUBLIC_SITE_URL=https://rulz.co` in Production and redeploy.
2. Verify live endpoints:
   - `https://rulz.co/robots.txt` — training crawlers blocked, retrieval bots allowed, both sitemaps listed.
   - `https://rulz.co/sitemap.xml` and `/news-sitemap.xml` — well-formed (run through an XML validator).
   - `https://rulz.co/llms.txt` — renders, under 5 KB.
3. Google Search Console:
   - Add the `rulz.co` property; verify via `NEXT_PUBLIC_GSC_VERIFY` (or DNS TXT).
   - Submit `https://rulz.co/sitemap.xml` and `https://rulz.co/news-sitemap.xml`.
4. Validate structured data with the [Rich Results Test](https://search.google.com/test/rich-results) on: home (Organization, WebSite), an article (NewsArticle, BreadcrumbList), `/services` (ItemList, FAQPage), an author page once real (Person).
5. Preview social cards via opengraph.xyz, Twitter Card Validator, LinkedIn Post Inspector.
6. Bing Webmaster Tools: add site, submit sitemaps (powers Copilot).

## Weekly review (~15 min)

### Core Web Vitals — Vercel Speed Insights
- Dashboard → Speed Insights. Watch **INP < 200ms**, **LCP < 2.5s**, **CLS < 0.1** at P75 (mobile).
- INP is the usual failure. If it regresses, the prime suspect is client-side JS on the fully-client-rendered pages — see the GSAP code-split follow-up (`docs/plans/.../U8-followup`).

### Search — Google Search Console
- Performance: track impressions/clicks/avg position for target queries.
- Pages: confirm new URLs are indexed; investigate "Crawled — not indexed".
- Core Web Vitals + Page Experience reports mirror CrUX field data (28-day rolling).

### AEO citations — Otterly.AI (free tier to start)
- Track 5 prompts, e.g.:
  1. "best AI product design partner for startups UK"
  2. "Manchester AI product design studio"
  3. "AI MVP design studio for founders"
  4. "agentic UX design consultancy"
  5. "design partner for AI-native startups"
- Watch Share-of-Voice and whether `rulz.co` is cited in ChatGPT / Perplexity / Google AI Overviews. Note which pages get cited (usually listicle-style and answer-first content).

## When INP regresses

1. Confirm in Speed Insights (field) before acting — don't chase lab noise.
2. `npm run analyze` to inspect the client bundle; look for large/unexpected chunks.
3. Check recent commits for new client components or heavy imports.
4. Prioritise the GSAP code-split follow-up: move animation to a dynamically
   imported (`ssr:false`) shell so the initial JS shrinks.

## Content freshness policy

- Substantively review evergreen pages on a 6–12 month cycle.
- When an article changes materially, set `dateModified` on it — this surfaces a
  visible "Updated:" line and updates `dateModified` in NewsArticle schema.
- News sitemap only carries articles < 48h old; that's expected.
