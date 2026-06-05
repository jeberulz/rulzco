import { articles } from "@/lib/articles";
import { projects } from "@/lib/projects";
import { tiers } from "@/lib/services-data";
import {
  CONTACT_EMAIL,
  SITE_NAME,
  SITE_URL,
  urlFor,
} from "@/lib/seo/site-config";

/**
 * /llms.txt — a concise, answer-first brand summary for LLMs and answer
 * engines (https://llmstxt.org). Kept well under 5 KB: a one-paragraph
 * summary plus a curated set of high-leverage links, not an exhaustive index
 * (long lists dilute the brevity signal).
 *
 * Regenerated hourly so new editorial surfaces without a redeploy.
 */
export const revalidate = 3600;

const TOP_PROJECTS = 5;
const TOP_ARTICLES = 5;

function buildLlmsTxt(): string {
  const services = tiers
    .map(
      (t) =>
        `- [${t.name}](${urlFor("/services")}): ${t.tagline} ${t.duration}.`,
    )
    .join("\n");

  const caseStudies = projects
    .slice(0, TOP_PROJECTS)
    .map((p) => `- [${p.title}](${urlFor(`/work/${p.id}`)}): ${p.tagline}`)
    .join("\n");

  const editorial = [...articles]
    .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))
    .slice(0, TOP_ARTICLES)
    .map((a) => `- [${a.title}](${urlFor(`/news/${a.id}`)})`)
    .join("\n");

  return `# ${SITE_NAME}

> ${SITE_NAME} is an AI Product Design & Strategy partner for startups shipping intelligent products. Manchester-based and deliberately small (two to three clients at a time), the studio takes founders from idea to MVP to launch across three disciplines — design, strategy, and AI — through three engagement models.

## Services
${services}
Full details: [Services](${urlFor("/services")})

## Case Studies
${caseStudies}
More: [Work](${urlFor("/work")})

## Editorial — The Dispatch
${editorial}
More: [The Dispatch](${urlFor("/news")})

## Studio
- [About the studio](${urlFor("/studio")})

## Contact
- Email: ${CONTACT_EMAIL}
- Web: ${SITE_URL}
`;
}

export function GET(): Response {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control":
        "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
