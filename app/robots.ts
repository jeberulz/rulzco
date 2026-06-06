import type { MetadataRoute } from "next";
import { SITE_URL, urlFor } from "@/lib/seo/site-config";

/**
 * Crawler policy: allow AI *retrieval/search* bots to read and cite the site
 * while blocking AI *training* scrapers.
 *
 * Blocked (training corpora):
 *   ClaudeBot, GPTBot, Google-Extended, CCBot, Bytespider
 *
 * Allowed by omission (retrieval / live answer engines that can cite us):
 *   Claude-User, Claude-SearchBot, ChatGPT-User, OAI-SearchBot,
 *   PerplexityBot, Applebot-Extended — plus all classic search engines.
 *
 * These intentionally do NOT appear in any Disallow block; they fall through
 * to the `*` rule which allows the public site.
 */

const TRAINING_CRAWLERS = [
  "ClaudeBot",
  "GPTBot",
  "Google-Extended",
  "CCBot",
  "Bytespider",
];

const PRIVATE_PATHS = ["/api/", "/_next/", "/admin"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Block training scrapers entirely.
      ...TRAINING_CRAWLERS.map((userAgent) => ({
        userAgent,
        disallow: "/",
      })),
      // Everyone else (search engines + retrieval bots) may crawl the public site.
      {
        userAgent: "*",
        allow: "/",
        disallow: PRIVATE_PATHS,
      },
    ],
    sitemap: [urlFor("/sitemap.xml"), urlFor("/news-sitemap.xml")],
    host: SITE_URL,
  };
}
