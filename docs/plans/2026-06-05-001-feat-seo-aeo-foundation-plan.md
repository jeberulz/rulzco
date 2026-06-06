---
title: SEO + AEO Foundation for Rulz&Co Next.js Rebuild
type: feat
status: active
date: 2026-06-05
---

# SEO + AEO Foundation for Rulz&Co Next.js Rebuild

## Summary

Build a production-grade SEO + Answer Engine Optimization (AEO) foundation into the Next.js 15 App Router rebuild of rulz.co so the new site outranks the legacy Webflow build and gets cited by ChatGPT, Claude, Perplexity, Google AI Overviews, and Bing Copilot. Work spans technical SEO files (sitemap, robots, manifest, OG images), `schema-dts`-typed JSON-LD across all page templates, an E-E-A-T author entity layer, an `llms.txt` answer-engine surface, Core Web Vitals fixes (next/font, dynamic GSAP, MUI audit), visible `dateModified` and breadcrumb UI, and analytics + AEO citation monitoring. Delivered in 10 dependency-ordered units; the legacy Webflow site provides almost nothing worth adopting (no JSON-LD, no sitemap, no robots, dead UA Analytics, typo in title) — the rebuild is greenfield SEO/AEO.

---

## Problem Frame

The live rulz.co (Webflow) has weak SEO and zero AEO infrastructure: no `robots.txt`, no `/sitemap.xml` (returns 404), no `llms.txt`, **zero** JSON-LD blocks, no canonical/hreflang, a typo in the homepage `<title>` ("Webfflow"), and tracking via deprecated Universal Analytics (UA-122304290-1, stopped collecting July 2023). The brand is also repositioning from "Manchester Web Design Agency" → "AI Product Design & Strategy partner for startups," so old URL equity is partially abandoned. The Next.js rebuild in this repo (Next.js 15.5.19, React 18, MUI 7, Radix, GSAP, Tailwind v4) has all routes scaffolded with static SSG but is missing every SEO/AEO primitive: no `app/sitemap.ts`, no `app/robots.ts`, no `metadataBase`, no JSON-LD, no Twitter cards, no OG images, no canonicals, no author pages, no `next/font` (Inter loaded via raw CSS `@import`), and no analytics. Without this foundation, the relaunch will lose existing rankings and miss the AI-citation window — a 73%/page-one disconnect means top organic ranking no longer guarantees AI Overview / ChatGPT citation.

---

## Requirements

- R1. Ship a complete technical SEO foundation (sitemap, news-sitemap, robots, manifest, metadataBase, canonicals, OG/Twitter cards) before public relaunch.
- R2. Add `schema-dts`-typed JSON-LD on every page template covering Organization, WebSite + SiteLinksSearchBox, NewsArticle, BreadcrumbList, Person, Service, CreativeWork, and FAQPage where applicable.
- R3. Build an E-E-A-T author/entity layer (`/studio/[author-slug]` Person pages, visible `Updated:` dates, byline links, `sameAs` to external profiles).
- R4. Publish `/llms.txt` (≤5 KB) and configure `robots.txt` to **allow retrieval crawlers** (Claude-User, Claude-SearchBot, ChatGPT-User, PerplexityBot, OAI-SearchBot) while blocking training crawlers (ClaudeBot, GPTBot, Google-Extended, CCBot).
- R5. Hit Core Web Vitals "good" thresholds in CrUX field data at P75: LCP <2.5s, INP <200ms, CLS <0.1 — convert Inter to `next/font`, dynamic-import GSAP/ScrollTrigger, audit MUI bundle, set `priority` on every template's LCP image.
- R6. Restructure editorial + service copy to be answer-first (inverted pyramid, 40–60 word lead blocks, ≥1 stat per block) so LLMs can extract clean quote-ready chunks.
- R7. Add Vercel Analytics + Speed Insights, Google Search Console verification, and an AEO citation monitor (Otterly or Profound) before launch.
- R8. Implement breadcrumb UI + `BreadcrumbList` schema across all nested routes.
- R9. Add image SEO: descriptive alt on every content image, descriptive filenames in news image pipeline, `images` array in sitemap entries, `priority` on LCP images, 3 aspect ratios (16:9, 4:3, 1:1) for NewsArticle hero images.
- R10. Document a content cadence policy (substantive freshness on 6–12 mo cycle, last-updated date visible on-page) and a corrections/AI-disclosure policy page Google now expects for News inclusion.

---

## Scope Boundaries

- **Not** rebuilding the Webflow site itself — Webflow is being decommissioned at switchover; only redirect mapping is in scope.
- **Not** migrating from Next.js 15 to Next.js 16 / Cache Components / PPR in this plan — keep on 15.5.x; PPR migration is a separate plan.
- **Not** building a CMS — content stays in `lib/articles.ts` and `lib/projects.ts` TypeScript modules.
- **Not** introducing i18n routing — site stays English-only at `en-GB` locale; hreflang scaffolding ships but only `x-default` + `en-GB` are emitted.
- **Not** paid SEO link building, digital PR outreach, or content writing as separate engagements (recommendation only).
- **Not** a full accessibility audit — `alt` text and semantic HTML hygiene are in scope; broader WCAG 2.2 AA work is separate.

### Deferred to Follow-Up Work

- Next.js 16 + PPR + Cache Components migration: separate plan after this lands.
- 301 redirect map from legacy Webflow URLs to new routes: separate plan once new IA is locked.
- Beehiiv newsletter integration on the news section: separate plan (skill exists).
- Image sitemap for case-study assets: deferred until projects have published image manifests.
- Multi-language launch: deferred; structure supports it via `metadata.alternates.languages`.

---

## Context & Research

### Live rulz.co (Webflow) Audit — What to Adopt vs Replace

| Signal | rulz.co status | Decision |
|---|---|---|
| robots.txt | Empty / not served | **Replace** — write proper file via `app/robots.ts` |
| sitemap.xml | 404 (Webflow not-found) | **Replace** — `app/sitemap.ts` + `app/news-sitemap.xml/route.ts` |
| llms.txt | 404 | **Add** — none on legacy; greenfield |
| JSON-LD blocks | 0 | **Add** — none to adopt |
| Canonical / hreflang | None | **Add** |
| OG image | Yes (Webflow CDN) | **Replace** with `opengraph-image.tsx` per route |
| Twitter cards | Basic name/desc only | **Upgrade** to `summary_large_image` |
| `<title>` quality | Typo: "Webfflow" | **Replace** — repositioning anyway |
| Analytics | Universal Analytics UA-122304290-1 (dead since Jul 2023) | **Replace** with Vercel Analytics + GA4 (optional) |
| Chat widget | AutoCrew (RULZ-001-SUP-001) | **Carry over** if still in use; not SEO-relevant |
| Positioning | "Manchester Web Design Agency" | **Replace** — new brand is "AI Product Design & Strategy" |

**Conclusion:** the Webflow site contributes essentially zero adoptable SEO/AEO assets. Treat this as a greenfield foundation.

### Local Repo Audit (Next.js 15)

- Routes scaffolded: `/`, `/news`, `/news/[slug]`, `/news/category/[slug]`, `/work`, `/work/[slug]`, `/services`, `/partnership`, `/studio`. All dynamic routes are SSG via `generateStaticParams`.
- `app/layout.tsx` has minimal `metadata` (title + description + basic OG `type:"website"`); no `metadataBase`, no Twitter card, no canonical, no JSON-LD.
- Content lives in TypeScript: `lib/articles.ts` (~24KB, 8+ articles) and `lib/projects.ts` (~24KB, case studies). Categories: AI & Design, Founders, Design, Industry, Studio Notes.
- Image pipeline: `lib/article-image-manifest.ts` + `scripts/generate-news-images.ts` (Recraft). Public path `/images/news/*.png`.
- Inter is loaded via `globals.css` `@import` — **must move to `next/font/google`** to hit INP/LCP targets.
- Heavy stack: MUI 7 + Radix + GSAP + Emotion. Bundle audit required before launch.
- No `.env` SEO config — needs `NEXT_PUBLIC_SITE_URL=https://rulz.co` and similar.

### Relevant Code and Patterns

- `app/layout.tsx` — root `metadata` export pattern to extend (lines 5–13).
- `app/news/[slug]/page.tsx` — `generateMetadata({ params })` pattern (await params; lines 10–22). Extend with `openGraph.images`, `alternates.canonical`, `twitter`, and embed JSON-LD.
- `app/work/[slug]/page.tsx` — mirror pattern.
- `app/news/category/[slug]/page.tsx` — mirror pattern + add `BreadcrumbList`.
- `lib/articles.ts`, `lib/projects.ts` — single source of truth; extend types with `author`, `dateModified`, `slug` (already present), `coverImage` aspect-ratio variants.
- `next.config.ts` — empty `images.remotePatterns: []`; add `formats: ['image/avif','image/webp']` once any remote source is added.

### Institutional Learnings

- No `docs/solutions/` yet. Capture learnings post-implementation as: `docs/solutions/seo-foundation-nextjs-15.md`, `docs/solutions/jsonld-with-schema-dts.md`, `docs/solutions/news-sitemap-route-handler.md`.

### External References

- Next.js 16.2.7 `generateMetadata` — https://nextjs.org/docs/app/api-reference/functions/generate-metadata (March 2026)
- Next.js sitemap conventions — https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
- Next.js JSON-LD guide — https://nextjs.org/docs/app/guides/json-ld
- Google Search Central: Article structured data — https://developers.google.com/search/docs/appearance/structured-data/article
- Google Search Central: News sitemap — https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap
- `schema-dts` — https://www.npmjs.com/package/schema-dts
- llms.txt spec — https://llmstxt.org
- Anthropic crawler framework (ClaudeBot training vs Claude-User retrieval vs Claude-SearchBot search) — https://docs.anthropic.com (referenced in 2025–2026 SEO press)
- AEO 2026 measurement: Otterly ($29/mo), Profound (enterprise), Scrunch, AthenaHQ.
- Core Web Vitals 2026 — INP <200ms is the most-failed metric (~43%); LCP <2.5s; CLS <0.1.
- AI Overviews 2026: queries ≥8 words are 7× more likely to trigger; listicles win 63% of citations; content updated <12 mo gets 65% of AI bot traffic.

---

## Key Technical Decisions

- **Use `schema-dts` for JSON-LD.** Compile-time Schema.org types; zero runtime cost. Emit via native `<script type="application/ld+json" dangerouslySetInnerHTML>` (sanitize `<` → `\u003c`). Do **not** use `next/script` for JSON-LD.
- **`metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL!)`** in root layout — required for relative `openGraph.images` / `alternates.canonical` to resolve.
- **Shared metadata module** (`lib/seo/shared-metadata.ts`) to defuse the OG shallow-merge trap (child setting any `openGraph` key wipes parent fields).
- **News sitemap as Route Handler** (`app/news-sitemap.xml/route.ts`) — `MetadataRoute.Sitemap` cannot emit the `news:` XML namespace. Window-filter to articles published in last 48h. Rebuild via `export const revalidate = 3600`.
- **Standard sitemap via `app/sitemap.ts`** returning `MetadataRoute.Sitemap` for all evergreen URLs; include `images` array per entry and `alternates.languages` (only `en-GB` + `x-default` for now).
- **`robots.txt` allow-retrieval / block-training split.** Block: ClaudeBot, GPTBot, Google-Extended, CCBot, Bytespider. Allow by omission: Claude-User, Claude-SearchBot, ChatGPT-User, PerplexityBot, OAI-SearchBot, Applebot-Extended. `Sitemap:` directive points at `/sitemap.xml` and `/news-sitemap.xml`.
- **Fonts via `next/font/google`** with `display: 'swap'` and `adjustFontFallback: true`. Replace CSS `@import` in `globals.css`. Use `--font-inter` CSS var on `<html>`.
- **GSAP + ScrollTrigger lazy.** Replace top-of-module `import gsap from 'gsap'` with `dynamic(() => import('@/components/hero/HeroAnimated'), { ssr: false })` for client-only animation shells. Static SSR baseline must be readable and complete without JS.
- **MUI policy.** Audit each `@mui/material` and `@mui/icons-material` import via `@next/bundle-analyzer`. Prefer Radix + Tailwind shadcn primitives for anything ≥10 KB; allow MUI only where Radix lacks an equivalent. New components must not import MUI by default.
- **OG images:** dynamic generation via Next.js `opengraph-image.tsx` + `ImageResponse` from `next/og` per route (homepage, services, work, news index, article, partnership, studio). 1200×630.
- **Author entity:** every article in `lib/articles.ts` must have an `authorSlug` field. `/studio/[author-slug]` renders `Person` schema with `sameAs` (LinkedIn, X), `knowsAbout`, `affiliation: Rulz&Co`.
- **Visible `Updated:` line** on article + service templates (Google Quality Raters check this, not just schema).
- **Analytics stack:** `@vercel/analytics` + `@vercel/speed-insights`. GSC verified via DNS TXT or `<meta name="google-site-verification">`. AEO monitoring via Otterly free tier to start.
- **Locale = `en-GB`** (Manchester, UK studio). `<html lang="en-GB">`. `metadata.alternates.languages = { 'en-GB': '/', 'x-default': '/' }` placeholder for future i18n.

---

## Open Questions

### Resolved During Planning

- *Should we adopt anything from rulz.co Webflow?* — No. Audit shows zero adoptable SEO/AEO assets.
- *Should `llms.txt` list every article URL?* — No. Cap at 15–20 high-leverage URLs per spec; lists kill the brevity signal.
- *Block GPTBot or not?* — Block GPTBot (training). Allow ChatGPT-User + OAI-SearchBot (retrieval). Same split for Claude.
- *Where do BreadcrumbList JSON-LD blocks live?* — Inside the page template, not the breadcrumb UI component, so dynamic data is available.
- *Inter via Google Fonts CDN vs `next/font`?* — `next/font` is non-negotiable for CWV.

### Deferred to Implementation

- Exact `Person.knowsAbout` taxonomy per author (needs founder review).
- Final OG image visual treatment (design decision; placeholder template ships first).
- Whether to keep AutoCrew chat widget (carry over verbatim if yes; check user with hello@rulz.co contact).
- Final list of `sameAs` URLs per founder/author (LinkedIn confirmed, others TBD).
- Whether Bytespider should be blocked or allowed (APAC audience question).
- Whether to wire GA4 alongside Vercel Analytics (default: skip GA4 unless conversion attribution demanded).

---

## High-Level Technical Design

> *This illustrates the intended approach and is directional guidance for review, not implementation specification. The implementing agent should treat it as context, not code to reproduce.*

**Module layout:**

```
app/
  layout.tsx                       # metadataBase, lang="en-GB", Inter via next/font
  sitemap.ts                       # MetadataRoute.Sitemap (all evergreen URLs)
  robots.ts                        # MetadataRoute.Robots (allow retrieval, block training)
  manifest.ts                      # PWA manifest
  opengraph-image.tsx              # default OG via next/og
  llms.txt/route.ts                # GET → text/plain llms.txt
  news-sitemap.xml/route.ts        # GET → news: namespace XML, last 48h
  (existing routes)/
    page.tsx                       # add JSON-LD, alternates.canonical, OG images
    opengraph-image.tsx            # per-route OG (optional)
lib/
  seo/
    shared-metadata.ts             # canonical OG/Twitter base
    jsonld.ts                      # builder helpers (Article, Service, ...)
    site-config.ts                 # NAME, URL, LOCALE, sameAs, logo
    breadcrumbs.ts                 # path → BreadcrumbList items
  articles.ts                      # extend Article with authorSlug, dateModified, coverImageRatios
  projects.ts                      # extend Project with dateModified
  authors.ts                       # NEW: Person records with sameAs
components/
  seo/
    JsonLd.tsx                     # <script type="application/ld+json"> wrapper
    Breadcrumbs.tsx                # visible UI + emits BreadcrumbList JSON-LD
    UpdatedDate.tsx                # visible "Updated: 5 June 2026"
```

**Crawler decision flow (robots.ts):**

```
incoming UA →
  ClaudeBot | GPTBot | Google-Extended | CCBot | Bytespider → Disallow: /
  Claude-User | Claude-SearchBot | ChatGPT-User
    | PerplexityBot | OAI-SearchBot | Applebot-Extended → Allow: / (by omission)
  Googlebot | Bingbot | DuckDuckBot | other generic → Allow: /
Sitemap: https://rulz.co/sitemap.xml
Sitemap: https://rulz.co/news-sitemap.xml
```

**JSON-LD per route matrix:**

| Route | JSON-LD blocks |
|---|---|
| `/` | `Organization`, `WebSite` + `SiteLinksSearchBox` |
| `/services` | `Organization` (ref), `ItemList` of `Service`, `BreadcrumbList` |
| `/services` sub | `Service` + `BreadcrumbList` |
| `/work` | `Organization` (ref), `CollectionPage` with `ItemList`, `BreadcrumbList` |
| `/work/[slug]` | `CreativeWork`, `BreadcrumbList` |
| `/news` | `CollectionPage` with `ItemList` of `NewsArticle`, `BreadcrumbList` |
| `/news/[slug]` | `NewsArticle` (author → Person, publisher → Organization, images ×3), `BreadcrumbList`, optional `FAQPage` |
| `/news/category/[slug]` | `CollectionPage`, `BreadcrumbList` |
| `/partnership` | `Organization`, `FAQPage` |
| `/studio` | `Organization`, `AboutPage` |
| `/studio/[author]` | `Person` (sameAs, knowsAbout, affiliation) |

---

## Implementation Units

- U1. **Site config, metadataBase, shared metadata module**

**Goal:** Establish single source of truth for site identity, base URL, and shared OG/Twitter fields; wire `metadataBase` into root layout.

**Requirements:** R1, R2.

**Dependencies:** none.

**Files:**
- Create: `lib/seo/site-config.ts`
- Create: `lib/seo/shared-metadata.ts`
- Modify: `app/layout.tsx`
- Modify: `.env.example`, `.env.local`

**Approach:**
- `site-config.ts` exports `SITE_NAME`, `SITE_URL`, `SITE_LOCALE='en-GB'`, `SITE_DESCRIPTION`, `LOGO_URL`, `TWITTER_HANDLE`, `ORG_SAME_AS` (LinkedIn, GitHub, X), `CONTACT_EMAIL='hello@rulz.co'`, `STUDIO_ADDRESS` (Manchester, UK).
- `shared-metadata.ts` exports `sharedOpenGraph`, `sharedTwitter`, `buildMetadata(opts)` helper that spreads shared OG and Twitter so child pages cannot accidentally wipe shared fields.
- Root layout sets `metadataBase: new URL(SITE_URL)`, `lang='en-GB'`, `alternates: { canonical: '/', languages: { 'en-GB': '/', 'x-default': '/' } }`, Twitter card defaults to `summary_large_image`.
- Add `NEXT_PUBLIC_SITE_URL=https://rulz.co` to `.env.example`.

**Patterns to follow:**
- Existing root `Metadata` export in `app/layout.tsx:5-13`.

**Test scenarios:**
- Happy path: `buildMetadata({ title: 'X', description: 'Y' })` returns merged OG with shared `siteName`, `images`, and Twitter card.
- Edge case: child passes `openGraph.title` only; helper preserves shared `siteName`, `images`, `type`.
- Edge case: missing `NEXT_PUBLIC_SITE_URL` throws at build time with a clear message (not silent string `undefined`).

**Verification:**
- `next build` succeeds with no metadata warnings.
- Inspect rendered `/` head; canonical, og:url, twitter:card all resolve to absolute URLs.

---

- U2. **`app/robots.ts` with allow-retrieval / block-training split**

**Goal:** Publish a crawler-aware `robots.txt` that lets AI retrieval bots cite the site while blocking training scrapers.

**Requirements:** R4.

**Dependencies:** U1.

**Files:**
- Create: `app/robots.ts`

**Approach:**
- Return `MetadataRoute.Robots` with multiple rule entries:
  - `userAgent: ['ClaudeBot','GPTBot','Google-Extended','CCBot','Bytespider']` → `disallow: '/'`
  - `userAgent: '*'` → `allow: '/'`, `disallow: ['/api/','/_next/','/admin']`
- `sitemap: ['https://rulz.co/sitemap.xml','https://rulz.co/news-sitemap.xml']`
- Pull base URL from `lib/seo/site-config.ts`.

**Test scenarios:**
- Happy path: rendered `/robots.txt` contains the five disallow blocks and the two sitemap lines.
- Edge case: Claude-User, ChatGPT-User, PerplexityBot do **not** appear in `Disallow` blocks (allowed by omission, verified by absence).
- Integration: GSC `robots.txt` tester (manual post-deploy) accepts the file.

**Verification:**
- `curl https://rulz.co/robots.txt` returns expected text in preview deploy.

---

- U3. **`app/sitemap.ts` + `app/news-sitemap.xml/route.ts`**

**Goal:** Two sitemaps — a standard one for all evergreen URLs with image and language alternates, and a separate news sitemap with the `news:` XML namespace for articles ≤48h old.

**Requirements:** R1, R9.

**Dependencies:** U1.

**Files:**
- Create: `app/sitemap.ts`
- Create: `app/news-sitemap.xml/route.ts`

**Approach:**
- `app/sitemap.ts` iterates `articles`, `projects`, plus the static page list; emits `lastModified` (use `dateModified` falling back to `datePublished`), `priority` (home=1.0, hubs=0.8, leaves=0.6), `images: [coverImage]`, `alternates.languages: { 'en-GB': absUrl, 'x-default': absUrl }`.
- `app/news-sitemap.xml/route.ts` exports `GET` returning `new Response(xml, { headers: { 'Content-Type': 'application/xml' } })`. Filter articles where `Date.now() - new Date(publishedAt).getTime() < 48*3600*1000`. Emit `<news:news>` with `name`, `language='en-GB'`, `publication_date` (ISO 8601), `title`. Set `export const revalidate = 3600`.
- Both files import a shared `urlFor(path)` helper from `lib/seo/site-config.ts`.

**Patterns to follow:**
- Next.js `MetadataRoute.Sitemap` types.

**Test scenarios:**
- Happy path: `/sitemap.xml` includes every static route + every article slug + every project slug + every category slug.
- Edge case: when no articles are <48h old, news sitemap still returns a valid empty `<urlset>` (not a 500).
- Edge case: article with no `coverImage` emits sitemap entry without `images` (no crash).
- Integration: each entry's `lastModified` is an ISO date string parsable by Google's validator.

**Verification:**
- Local `curl http://localhost:3000/sitemap.xml | xmllint --noout -` passes.
- Local `curl http://localhost:3000/news-sitemap.xml | xmllint --noout -` passes.

---

- U4. **Type-safe JSON-LD with `schema-dts`**

**Goal:** Install `schema-dts`, build a `<JsonLd>` component and per-schema builder helpers, ship `Organization` + `WebSite` JSON-LD globally and per-page schemas on every template.

**Requirements:** R2.

**Dependencies:** U1.

**Files:**
- Modify: `package.json` (add `schema-dts`)
- Create: `lib/seo/jsonld.ts`
- Create: `components/seo/JsonLd.tsx`
- Modify: `app/layout.tsx` (emit Organization + WebSite)
- Modify: `app/page.tsx` (emit homepage JSON-LD)
- Modify: `app/news/[slug]/page.tsx` (NewsArticle + BreadcrumbList)
- Modify: `app/work/[slug]/page.tsx` (CreativeWork + BreadcrumbList)
- Modify: `app/services/page.tsx` (ItemList<Service> + BreadcrumbList)
- Modify: `app/news/page.tsx` (CollectionPage + ItemList<NewsArticle>)
- Modify: `app/news/category/[slug]/page.tsx` (CollectionPage + BreadcrumbList)
- Modify: `app/partnership/page.tsx` (Organization + FAQPage)
- Modify: `app/studio/page.tsx` (AboutPage + Organization)

**Approach:**
- `components/seo/JsonLd.tsx` renders `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialize(data) }} />`. `serialize` does `JSON.stringify(data).replaceAll('<','\u003c')`.
- `lib/seo/jsonld.ts` exports `buildOrganization()`, `buildWebSite()`, `buildNewsArticle(article)`, `buildCreativeWork(project)`, `buildService(svc)`, `buildBreadcrumbList(crumbs)`, `buildPerson(author)`, `buildFAQPage(faqs)`. Each returns `WithContext<T>` from `schema-dts`.
- `NewsArticle` builder emits `image` as array of three URLs (16:9, 4:3, 1:1) when available; falls back to single URL. `author` is `{ '@type':'Person', '@id': absUrl('/studio/'+slug) }`. `publisher` references `@id` of Organization.
- Use `@id` URI fragments so cross-schema refs resolve (`/#organization`, `/#website`, `/studio/jane#person`).

**Patterns to follow:**
- Next.js JSON-LD guide pattern: inline `<script>` in `page.tsx`, not `<head>` manipulation.

**Test scenarios:**
- Happy path: rendered `/news/[slug]` HTML contains exactly one `NewsArticle` JSON-LD block with valid Schema.org `@context`.
- Edge case: article missing `dateModified` falls back to `datePublished` in schema.
- Edge case: `<script>` payload containing `</script>` substring is escaped via `\u003c` (XSS guard).
- Integration: Google's Rich Results Test passes for `NewsArticle`, `Article`, `Organization`, `WebSite`, `BreadcrumbList` on staging URLs.

**Verification:**
- Schema.org validator on staging finds zero errors for all page types.
- Google Rich Results Test reports eligible rich result types per page.

---

- U5. **Per-route metadata hardening + OG image generation**

**Goal:** Every route ships full metadata (canonical, OG image, Twitter card, robots directive) and a dynamically generated 1200×630 OG image.

**Requirements:** R1.

**Dependencies:** U1, U4.

**Files:**
- Create: `app/opengraph-image.tsx` (default OG via `next/og`)
- Create: `app/news/[slug]/opengraph-image.tsx`
- Create: `app/work/[slug]/opengraph-image.tsx`
- Create: `app/services/opengraph-image.tsx`
- Modify: `app/page.tsx` (alternates.canonical='/')
- Modify: `app/services/page.tsx` (alternates.canonical='/services')
- Modify: `app/work/page.tsx`
- Modify: `app/work/[slug]/page.tsx`
- Modify: `app/news/page.tsx`
- Modify: `app/news/[slug]/page.tsx`
- Modify: `app/news/category/[slug]/page.tsx`
- Modify: `app/partnership/page.tsx`
- Modify: `app/studio/page.tsx`

**Approach:**
- Use `next/og` `ImageResponse` with brand fonts (loaded via fetch from `public/fonts/`), brand mark, page-specific title and tag.
- Each `generateMetadata` returns `alternates: { canonical: '/path', languages: { 'en-GB': '/path', 'x-default': '/path' } }`.
- `twitter` defaults to `summary_large_image`; pass `creator: '@rulzandco'` (TBD).
- Use `buildMetadata()` helper from U1 so OG fields don't shallow-overwrite.

**Test scenarios:**
- Happy path: rendered head on each route contains `<link rel="canonical">`, `og:url`, `og:image` (1200×630), `twitter:card=summary_large_image`.
- Edge case: long article title truncates with ellipsis in OG image at safe width.
- Edge case: missing optional OG image falls back to default `app/opengraph-image.tsx`.
- Integration: opengraph.xyz preview renders cleanly for each template.

**Verification:**
- Manual check on staging via opengraph.xyz, Twitter Card Validator, LinkedIn Post Inspector.

---

- U6. **Author entity layer + visible E-E-A-T signals**

**Goal:** Build a credible author/entity layer so Google's E-E-A-T and AI engines' citation models recognize Rulz&Co's experts.

**Requirements:** R3.

**Dependencies:** U4.

**Files:**
- Create: `lib/authors.ts`
- Create: `app/studio/[author]/page.tsx`
- Create: `components/seo/UpdatedDate.tsx`
- Create: `components/news/AuthorByline.tsx`
- Modify: `lib/articles.ts` (extend `Article` type with `authorSlug`, `dateModified`)
- Modify: `components/news/ArticlePage.tsx` (render `<AuthorByline>` + visible `<UpdatedDate>`)
- Modify: `app/news/[slug]/page.tsx` (link author Person schema)

**Approach:**
- `lib/authors.ts` exports `Author` type and an `authors` map with `slug`, `name`, `role`, `bio` (150–300 words), `headshotUrl`, `credentials[]`, `sameAs[]` (LinkedIn, X, professional bodies), `knowsAbout[]`.
- `/studio/[author]` renders bio + credentials + recent articles + `Person` JSON-LD with `sameAs`, `knowsAbout`, `affiliation` → Organization `@id`.
- `<UpdatedDate>` renders `Updated: 5 June 2026` (Intl.DateTimeFormat, `en-GB`, 'long' format) — visible, not just schema.
- `<AuthorByline>` renders linked author name + role + headshot; links to `/studio/[author-slug]`.
- Article cards on `/news` show byline.

**Test scenarios:**
- Happy path: visiting `/studio/jane-doe` renders bio and `Person` JSON-LD with `sameAs` URLs.
- Edge case: article references unknown `authorSlug` → build fails (typed `keyof typeof authors`).
- Edge case: `dateModified === datePublished` renders `Published: …`, not redundant `Updated: …`.
- Integration: NewsArticle JSON-LD `author.@id` matches the Person `@id` on author page.

**Verification:**
- Google Rich Results Test passes Person on author page.
- Visible date renders in correct locale on article page.

---

- U7. **`llms.txt` + conversational answer surface**

**Goal:** Publish a tight, brand-summary-first `/llms.txt` plus restructure key service/case-study leads so LLMs can extract them cleanly.

**Requirements:** R4, R6.

**Dependencies:** U1, U6.

**Files:**
- Create: `app/llms.txt/route.ts` (or `public/llms.txt` if simpler — Route Handler preferred so it stays generated)
- Modify: `app/services/page.tsx` (answer-first H2 → 40–60 word lead)
- Modify: `app/page.tsx` (homepage answer-first lead)
- Modify: `lib/articles.ts` (add optional `faqs` array per article)
- Create: `components/news/FAQ.tsx` (renders visible accordion + FAQPage JSON-LD)

**Approach:**
- `/llms.txt` content under 5 KB:
  - H1 `# Rulz & Co`
  - Blockquote one-paragraph summary: AI product design & strategy partner, Manchester, three engagement types, three disciplines.
  - `## Services` — 3 bullets linking to services anchor URLs.
  - `## Case Studies` — top 5 project URLs.
  - `## Editorial` — top 5 article URLs.
  - `## Team` — author page URLs.
  - `## Contact / Press` — hello@rulz.co.
- Services + homepage leads rewritten so the first sentence after every H2 is the complete answer (no setup, no story).
- Optional `faqs` on articles renders both a visible accordion and `FAQPage` JSON-LD.

**Test scenarios:**
- Happy path: `curl https://rulz.co/llms.txt` returns text/plain, byte-count <5 KB.
- Happy path: homepage H2 leads each followed by ≥1 sentence containing a statistic or specific factual claim.
- Edge case: FAQ block with no entries does not emit empty FAQPage JSON-LD.
- Integration: Otterly / Profound free-tier crawl confirms `/llms.txt` is discovered.

**Verification:**
- `wc -c` confirms size budget.
- Manual review confirms answer-first structure on services + homepage.

---

- U8. **Core Web Vitals fixes — fonts, GSAP, MUI, LCP image**

**Goal:** Hit "good" P75 thresholds in CrUX (LCP <2.5s, INP <200ms, CLS <0.1).

**Requirements:** R5, R9.

**Dependencies:** none (can run in parallel with U2–U7).

**Files:**
- Modify: `app/layout.tsx` (next/font, font CSS var)
- Modify: `app/globals.css` (remove `@import url(...fonts.googleapis.com...)`)
- Modify: `components/Hero.tsx` (move GSAP to dynamic-imported client shell)
- Modify: `components/news/ArticlePage.tsx` (dynamic-import scroll animations)
- Modify: `components/studio/StudioPage.tsx` (dynamic-import animations)
- Modify: `next.config.ts` (`images: { formats: ['image/avif','image/webp'], remotePatterns: [...] }`)
- Modify: any image rendering the LCP element per template — add `priority` prop.
- Add: `@next/bundle-analyzer` and `npm run analyze` script.

**Approach:**
- `next/font/google` → `const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })`; set `className={inter.variable}` on `<html>`.
- Remove the Google Fonts `@import` from `globals.css`.
- GSAP must not be in any server component bundle. Wrap in `dynamic(() => import('@/components/animations/HeroScroll'), { ssr: false })`. Static SSR baseline must look correct without JS.
- Audit MUI: run `ANALYZE=true npm run build`. Replace any standalone `@mui/material` usages with Radix + Tailwind where feasible; add `optimizePackageImports: ['@mui/icons-material']` to `next.config.ts`.
- Identify LCP image per template (hero on `/`, cover on article, etc.) — add `priority`.

**Test scenarios:**
- Happy path: Lighthouse mobile run on staging reports LCP <2.5s on `/`, `/services`, `/news/[slug]`.
- Edge case: Page with JS disabled still renders text content (GSAP is animation only, not content).
- Integration: `npm run analyze` shows `@mui/material` import contributes <40 KB gzip or is eliminated.

**Verification:**
- Lighthouse CI (or PageSpeed Insights) field data after 28-day rollout in CrUX shows LCP/INP/CLS in "good" bucket at P75.

---

- U9. **Breadcrumb UI + BreadcrumbList schema**

**Goal:** Every nested route renders visible breadcrumbs and emits `BreadcrumbList` JSON-LD.

**Requirements:** R8.

**Dependencies:** U4.

**Files:**
- Create: `components/seo/Breadcrumbs.tsx`
- Create: `lib/seo/breadcrumbs.ts`
- Modify: `app/news/[slug]/page.tsx`, `app/news/category/[slug]/page.tsx`, `app/work/[slug]/page.tsx`, `app/services/page.tsx` (mount `<Breadcrumbs>` above heading)

**Approach:**
- `<Breadcrumbs items={[{name,url}, ...]} />` renders ordered list with chevron separator + emits `BreadcrumbList` JSON-LD via `<JsonLd>`.
- `lib/seo/breadcrumbs.ts` exports `breadcrumbsForArticle(article)`, `breadcrumbsForProject(project)`, `breadcrumbsForCategory(category)`, `breadcrumbsForService(service)`.

**Test scenarios:**
- Happy path: `/news/some-article` renders crumbs `Home › Dispatch › [Category] › [Title]` and a JSON-LD `BreadcrumbList` with matching positions.
- Edge case: top-level routes (`/services`, `/work`, `/news`) get a 2-item breadcrumb (`Home › X`).
- Integration: Google Rich Results Test accepts `BreadcrumbList` schema.

**Verification:**
- Manual visual check + Rich Results Test on each template.

---

- U10. **Analytics, GSC verification, AEO monitoring stub**

**Goal:** Wire `@vercel/analytics` + `@vercel/speed-insights`, verify GSC, set up an AEO citation monitor and a corrections / AI-disclosure policy page.

**Requirements:** R7, R10.

**Dependencies:** U1.

**Files:**
- Modify: `package.json` (`@vercel/analytics`, `@vercel/speed-insights`)
- Modify: `app/layout.tsx` (`<Analytics />`, `<SpeedInsights />`)
- Create: `app/policies/corrections/page.tsx`
- Create: `app/policies/ai-disclosure/page.tsx`
- Modify: `components/Footer.tsx` (link to both policies)
- Modify: `app/layout.tsx` (`<meta name="google-site-verification" content="..." />` from env)
- Modify: `.env.example` (`NEXT_PUBLIC_GSC_VERIFY`, `OTTERLY_API_KEY?`)
- Create: `docs/runbooks/seo-aeo-monitoring.md` (lightweight ops doc — only doc allowed in this plan)

**Approach:**
- Vercel Analytics + Speed Insights mounted once in root layout; works in production.
- GSC verification meta gated on `NEXT_PUBLIC_GSC_VERIFY` env var (omit tag if unset).
- Policies pages are short, factually-formatted, linked from footer; satisfy 2026 Google News implicit quality signals.
- Otterly free-tier monitor configured with five tracked prompts (e.g., "best AI product design partner UK", "Manchester AI consultancy startups").
- Runbook documents: how to read CrUX in GSC, how to read Vercel Speed Insights, how to read Otterly Share-of-Voice, weekly review cadence.

**Test scenarios:**
- Happy path: production build emits Analytics + SpeedInsights scripts only when `process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'`.
- Edge case: GSC verify meta absent when env var unset (no broken `<meta content="">`).
- Integration: `/policies/corrections` and `/policies/ai-disclosure` resolve and return 200 in build manifest.

**Verification:**
- After deploy, GSC verifies domain.
- Otterly dashboard receives first crawl.
- Vercel dashboard shows first Real-User INP samples within 24h.

---

## System-Wide Impact

- **Interaction graph:** Every page template imports from `lib/seo/*` and `components/seo/*`. Root layout mounts `<Analytics />`, `<SpeedInsights />`, and emits global Organization + WebSite JSON-LD — any change to `site-config.ts` propagates everywhere.
- **Error propagation:** `metadataBase` requires `NEXT_PUBLIC_SITE_URL` — failures must surface at build time, not silently render `undefined` into canonicals (covered in U1 tests).
- **State lifecycle risks:** News sitemap revalidates hourly; an article published >48h ago must drop out (window filter inclusive). A stale published-flag could leak old URLs into `news:` namespace and trigger Google News warnings.
- **API surface parity:** All `generateMetadata` functions must `await params` (Next.js 15+ contract). The OG shallow-merge trap means child pages that override `openGraph.title` without spreading shared fields will silently drop `siteName`, `images`, `twitter` — caught in U1 tests and enforced via `buildMetadata()` helper.
- **Integration coverage:** Google Rich Results Test, Schema.org validator, opengraph.xyz, Twitter Card Validator, GSC, Otterly are all out-of-process checks; capture them in the U10 runbook.
- **Unchanged invariants:** Tailwind v4 + Radix component contracts unchanged. Existing copy on `/`, `/services`, `/work`, `/partnership` unchanged except for answer-first H2 leads on `/` and `/services`. Content data shape in `lib/articles.ts` / `lib/projects.ts` is **extended** (new optional fields) — existing entries continue to render.

---

## Risks & Dependencies

| Risk | Mitigation |
|---|---|
| OG shallow-merge silently drops shared metadata in nested routes | `buildMetadata()` helper enforces spread; U1 tests guard regression |
| `generateMetadata` forgetting to `await params` (Next.js 15+) | Code-review checklist; type-level enforcement via `Promise<...>` |
| MUI bundle blowing INP budget | Bundle-analyzer audit in U8; replace MUI components case-by-case |
| Inter not loading via `next/font` (still in CSS) | U8 explicitly removes the CSS `@import` and adds bundle test |
| Blocking ChatGPT-User by mistake (regex matches GPTBot) | U2 tests verify exact UA strings appear/don't appear in disallow blocks |
| News sitemap drops articles too early (timezone math) | Use UTC ISO timestamps everywhere; U3 edge-case tests |
| `dangerouslySetInnerHTML` XSS in JSON-LD | Serialize replaces `<` → `\u003c`; covered in U4 tests |
| Repositioning loses existing keyword rankings (Webfflow typo aside) | Out of scope here; separate 301 redirect plan listed under Deferred |
| Webflow → Next.js DNS cutover before sitemap submission | Submit sitemap and refresh GSC within 48h of cutover (runbook U10) |

---

## Documentation / Operational Notes

- Single ops doc allowed by this plan: `docs/runbooks/seo-aeo-monitoring.md` (created in U10). It covers: CrUX/GSC review, Vercel Speed Insights review, Otterly citation tracking, weekly cadence, what to do when INP regresses.
- No new CLAUDE.md guidance added in this plan — existing guidance suffices.
- Vercel: configure `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GSC_VERIFY`, optional `OTTERLY_API_KEY` in project env (Production, Preview, Development scopes).

---

## Sources & References

- Next.js generateMetadata API (v16.2.7, March 2026): https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- Next.js sitemap.xml file convention: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
- Next.js JSON-LD guide: https://nextjs.org/docs/app/guides/json-ld
- Google Search Central — Article structured data (Dec 2025): https://developers.google.com/search/docs/appearance/structured-data/article
- Google Search Central — News sitemap: https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap
- `schema-dts`: https://www.npmjs.com/package/schema-dts
- llms.txt spec: https://llmstxt.org
- AEO / GEO 2026 — Stackmatix: https://www.stackmatix.com/blog/aeo-seo-geo
- AI crawler split (ClaudeBot / Claude-User / Claude-SearchBot) — ALM Corp: https://almcorp.com/blog/anthropic-claude-bots-robots-txt-strategy/
- Schema markup in AI search — Search Engine Land: https://searchengineland.com/schema-markup-ai-search-no-hype-472339
- Core Web Vitals 2026 (INP-first): https://www.digitalapplied.com/blog/core-web-vitals-2026-inp-lcp-cls-optimization-guide
- Google News inclusion 2026 checklist — Pasquale Pillitteri: https://pasqualepillitteri.it/en/news/998/google-news-2026-how-to-get-site-included-checklist
- E-E-A-T March 2026 — DigitalApplied: https://www.digitalapplied.com/blog/e-e-a-t-march-2026-google-rewards-experience-content-guide
- AI Overview citation factors 2026 — Wellows: https://wellows.com/blog/google-ai-overviews-ranking-factors/
- Live audit captured 2026-06-05: rulz.co (Webflow, last published 2026-03-15). No robots.txt, sitemap.xml is 404, no llms.txt, zero JSON-LD blocks, Universal Analytics UA-122304290-1 still on page, typo "Webfflow" in `<title>`.
