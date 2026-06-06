/**
 * Author entity records powering /studio/[author] Person pages, article
 * bylines, and Person JSON-LD (E-E-A-T + AI citation entity graph).
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
  "john-iseghohi": {
    slug: "john-iseghohi",
    name: "John Iseghohi",
    role: "Principal Designer",
    // NOTE: draft bio — refine in your own voice. Facts here are role-level and
    // intentionally non-specific to avoid overclaiming.
    bio: "John Iseghohi is the Principal Designer at Rulz&Co, where he partners with founders to take AI products from first idea to shipped MVP. His work sits at the intersection of product strategy, interface design, and the messy reality of building with AI — agentic flows, model-shaped UX, and the judgement calls that don't fit on a canvas. He writes The Dispatch on what's actually changing in design and AI, and what isn't. Rulz&Co stays deliberately small so the people doing the thinking are the people doing the work.",
    headshotUrl: undefined,
    credentials: [],
    sameAs: [
      "https://www.linkedin.com/in/johniseghohi/",
      "https://twitter.com/MrJeberulz",
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
