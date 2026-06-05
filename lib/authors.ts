/**
 * Author entity records powering /studio/[author] Person pages, article
 * bylines, and Person JSON-LD (E-E-A-T + AI citation entity graph).
 *
 * ⚠️ IDENTITY TODO: the record below is a PLACEHOLDER awaiting real founder
 * details (name, role, bio, LinkedIn, X). Until those are filled, no article
 * sets `authorSlug` and author pages are excluded from the sitemap, so nothing
 * unverified is published. Replace the TODO fields, then:
 *   1. set `authorSlug` on the relevant articles in lib/articles.ts
 *   2. add author pages to app/sitemap.ts
 */

import { articles, type Article } from "./articles";

export type Author = {
  slug: string;
  name: string;
  role: string;
  /** 150–300 word first-person-credible bio. */
  bio: string;
  headshotUrl?: string;
  credentials: string[];
  /** External profiles establishing the person entity (Person.sameAs). */
  sameAs: string[];
  /** Topical authority signals (Person.knowsAbout). */
  knowsAbout: string[];
};

/** Shared expertise taxonomy derived from the studio's core topics. */
export const STUDIO_KNOWS_ABOUT = [
  "AI Product Design",
  "Product Strategy",
  "Agentic UX",
  "MVP Design",
  "Design Systems",
  "UX Research",
];

export const authors = {
  founder: {
    slug: "founder",
    name: "TODO: Founder name",
    role: "TODO: Founder & Principal",
    bio: "TODO: 150–300 word bio establishing experience designing AI products for startups, the studio's point of view, and why the author is qualified to write on these topics.",
    headshotUrl: undefined,
    credentials: [],
    sameAs: [
      // TODO: "https://www.linkedin.com/in/...",
      // TODO: "https://x.com/...",
    ],
    knowsAbout: STUDIO_KNOWS_ABOUT,
  },
} satisfies Record<string, Author>;

export type AuthorSlug = keyof typeof authors;

export function getAuthor(slug: string): Author | undefined {
  return (authors as Record<string, Author>)[slug];
}

/**
 * True while a record still holds placeholder identity data. Used to keep the
 * author page out of the index until real founder details are filled in.
 */
export function isPlaceholderAuthor(author: Author): boolean {
  return author.name.startsWith("TODO");
}

export const authorSlugs = Object.keys(authors) as AuthorSlug[];

/** Articles attributed to a given author, newest first by source order. */
export function getArticlesByAuthor(slug: string): Article[] {
  return articles.filter((a) => a.authorSlug === slug);
}
