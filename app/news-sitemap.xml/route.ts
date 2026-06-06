import { articles } from "@/lib/articles";
import { SITE_NAME, urlFor } from "@/lib/seo/site-config";
import { isWithinHours, toIsoDate } from "@/lib/seo/dates";

/**
 * Google News sitemap.
 *
 * `MetadataRoute.Sitemap` can't emit the `news:` XML namespace, so this is a
 * hand-built route handler. Only articles published in the last 48h are
 * eligible (Google News requirement); when none qualify it still returns a
 * valid empty <urlset> rather than erroring.
 *
 * Rebuilt at most hourly via ISR.
 */
export const revalidate = 3600;

const NEWS_WINDOW_HOURS = 48;

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET(): Response {
  const publisherName = escapeXml(SITE_NAME);

  const items = articles
    .filter((a) => isWithinHours(a.date, NEWS_WINDOW_HOURS))
    .map((a) => {
      const published = toIsoDate(a.date);
      if (!published) return "";
      return `  <url>
    <loc>${escapeXml(urlFor(`/news/${a.id}`))}</loc>
    <news:news>
      <news:publication>
        <news:name>${publisherName}</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${published}</news:publication_date>
      <news:title>${escapeXml(a.title)}</news:title>
    </news:news>
  </url>`;
    })
    .filter(Boolean)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${items}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
