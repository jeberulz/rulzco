import type { MetadataRoute } from "next";
import { articles, CATEGORIES, categoryToSlug } from "@/lib/articles";
import { projects } from "@/lib/projects";
import { SITE_LOCALE, urlFor } from "@/lib/seo/site-config";
import { parseContentDate } from "@/lib/seo/dates";

type ChangeFreq = MetadataRoute.Sitemap[number]["changeFrequency"];

/**
 * Standard sitemap for all evergreen URLs.
 *
 * URLs are absolute (sitemaps ignore metadataBase). Each entry carries
 * hreflang alternates (en-GB + x-default) so the structure is i18n-ready, and
 * editorial entries include their cover image for Google Image discovery.
 */
function entry(
  path: string,
  opts: {
    priority: number;
    changeFrequency?: ChangeFreq;
    lastModified?: Date;
    images?: string[];
  },
): MetadataRoute.Sitemap[number] {
  const url = urlFor(path);
  return {
    url,
    priority: opts.priority,
    changeFrequency: opts.changeFrequency ?? "monthly",
    ...(opts.lastModified ? { lastModified: opts.lastModified } : {}),
    ...(opts.images && opts.images.length ? { images: opts.images } : {}),
    alternates: {
      languages: {
        [SITE_LOCALE]: url,
        "x-default": url,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    entry("/", { priority: 1.0, changeFrequency: "weekly" }),
    entry("/services", { priority: 0.8, changeFrequency: "monthly" }),
    entry("/work", { priority: 0.8, changeFrequency: "weekly" }),
    entry("/news", { priority: 0.8, changeFrequency: "daily" }),
    entry("/partnership", { priority: 0.8, changeFrequency: "monthly" }),
    entry("/studio", { priority: 0.8, changeFrequency: "monthly" }),
    entry("/policies/corrections", { priority: 0.2, changeFrequency: "yearly" }),
    entry("/policies/ai-disclosure", { priority: 0.2, changeFrequency: "yearly" }),
  ];

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.filter(
    (c) => c !== "All",
  ).map((c) =>
    entry(`/news/category/${categoryToSlug(c)}`, {
      priority: 0.5,
      changeFrequency: "weekly",
    }),
  );

  const articlePages: MetadataRoute.Sitemap = articles.map((a) =>
    entry(`/news/${a.id}`, {
      priority: a.featured ? 0.7 : 0.6,
      changeFrequency: "monthly",
      lastModified: parseContentDate(a.date) ?? undefined,
      images: a.image ? [urlFor(a.image)] : undefined,
    }),
  );

  const projectPages: MetadataRoute.Sitemap = projects.map((p) =>
    entry(`/work/${p.id}`, {
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: parseContentDate(p.year) ?? undefined,
    }),
  );

  return [
    ...staticPages,
    ...categoryPages,
    ...articlePages,
    ...projectPages,
  ];
}
