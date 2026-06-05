import type {
  AboutPage,
  BreadcrumbList,
  CollectionPage,
  CreativeWork,
  FAQPage,
  ItemList,
  NewsArticle,
  Organization,
  Person,
  Service,
  WebSite,
  WithContext,
} from "schema-dts";
import {
  CONTACT_EMAIL,
  LOGO_PATH,
  ORG_ID,
  ORG_SAME_AS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  STUDIO_ADDRESS,
  urlFor,
  WEBSITE_ID,
} from "./site-config";
import { toIsoDate } from "./dates";
import type { Article } from "@/lib/articles";
import type { Project } from "@/lib/projects";
import type { ServiceTier, ServiceFaq } from "@/lib/services-data";

const CONTEXT = "https://schema.org" as const;

export type Crumb = { name: string; path: string };

/** The publishing/brand entity. Referenced everywhere via ORG_ID. */
export function buildOrganization(): WithContext<Organization> {
  return {
    "@context": CONTEXT,
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    email: CONTACT_EMAIL,
    logo: {
      "@type": "ImageObject",
      url: urlFor(LOGO_PATH),
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: STUDIO_ADDRESS.locality,
      addressRegion: STUDIO_ADDRESS.region,
      addressCountry: STUDIO_ADDRESS.country,
    },
    sameAs: ORG_SAME_AS,
  };
}

/** The site entity. No SearchAction — the site has no on-site search endpoint. */
export function buildWebSite(): WithContext<WebSite> {
  return {
    "@context": CONTEXT,
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: "en-GB",
    publisher: { "@id": ORG_ID },
  };
}

export function buildBreadcrumbList(
  crumbs: Crumb[],
): WithContext<BreadcrumbList> {
  return {
    "@context": CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: urlFor(c.path),
    })),
  };
}

/**
 * NewsArticle for editorial pieces. `author` references the Person @id when a
 * slug is provided (set up in the author-entity unit), otherwise inlines the
 * author's name. `image` accepts multiple aspect-ratio URLs; falls back to the
 * single cover image.
 */
export function buildNewsArticle(
  article: Article,
  opts: { authorPath?: string; images?: string[] } = {},
): WithContext<NewsArticle> {
  const published = toIsoDate(article.date) ?? undefined;
  const modified =
    toIsoDate((article as { dateModified?: string }).dateModified) ??
    published;
  const pageUrl = urlFor(`/news/${article.id}`);
  const images = (
    opts.images && opts.images.length
      ? opts.images
      : article.image
        ? [article.image]
        : []
  ).map((src) => (src.startsWith("http") ? src : urlFor(src)));

  const author: NewsArticle["author"] = opts.authorPath
    ? { "@type": "Person", "@id": urlFor(opts.authorPath), name: article.author.name }
    : { "@type": "Person", name: article.author.name };

  return {
    "@context": CONTEXT,
    "@type": "NewsArticle",
    "@id": `${pageUrl}#article`,
    isPartOf: { "@id": WEBSITE_ID },
    headline: article.title,
    description: article.excerpt,
    articleSection: article.category,
    ...(images.length ? { image: images } : {}),
    ...(published ? { datePublished: published } : {}),
    ...(modified ? { dateModified: modified } : {}),
    author,
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    url: pageUrl,
    inLanguage: "en-GB",
  };
}

/** Case study → CreativeWork. */
export function buildCreativeWork(
  project: Project,
): WithContext<CreativeWork> {
  const pageUrl = urlFor(`/work/${project.id}`);
  return {
    "@context": CONTEXT,
    "@type": "CreativeWork",
    "@id": `${pageUrl}#work`,
    name: project.title,
    headline: project.tagline,
    description: project.description,
    url: pageUrl,
    creator: { "@id": ORG_ID },
    keywords: project.tags.join(", "),
    inLanguage: "en-GB",
    ...(project.year ? { dateCreated: project.year } : {}),
  };
}

/** A single engagement model → Service. */
export function buildService(tier: ServiceTier): Service {
  return {
    "@type": "Service",
    name: tier.name,
    description: tier.description,
    serviceType: tier.name,
    provider: { "@id": ORG_ID },
    areaServed: "Worldwide",
  };
}

/** ItemList of Service offerings for the /services hub. */
export function buildServiceItemList(
  tiers: ServiceTier[],
): WithContext<ItemList> {
  return {
    "@context": CONTEXT,
    "@type": "ItemList",
    name: "Rulz&Co Services",
    itemListElement: tiers.map((tier, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: buildService(tier),
    })),
  };
}

export function buildFAQPage(faqs: ServiceFaq[]): WithContext<FAQPage> | null {
  if (!faqs.length) return null;
  return {
    "@context": CONTEXT,
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Collection / archive pages (/news, /work, category) → CollectionPage. */
export function buildCollectionPage(opts: {
  name: string;
  description: string;
  path: string;
  items: { name: string; path: string }[];
}): WithContext<CollectionPage> {
  return {
    "@context": CONTEXT,
    "@type": "CollectionPage",
    name: opts.name,
    description: opts.description,
    url: urlFor(opts.path),
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: "en-GB",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: opts.items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: urlFor(it.path),
        name: it.name,
      })),
    },
  };
}

export function buildAboutPage(opts: {
  name: string;
  description: string;
  path: string;
}): WithContext<AboutPage> {
  return {
    "@context": CONTEXT,
    "@type": "AboutPage",
    name: opts.name,
    description: opts.description,
    url: urlFor(opts.path),
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-GB",
  };
}

/** Person entity for author pages (consumed by the author-entity unit). */
export function buildPerson(person: {
  slug: string;
  name: string;
  role?: string;
  bio?: string;
  headshotUrl?: string;
  sameAs?: string[];
  knowsAbout?: string[];
}): WithContext<Person> {
  const pageUrl = urlFor(`/studio/${person.slug}`);
  return {
    "@context": CONTEXT,
    "@type": "Person",
    "@id": `${pageUrl}#person`,
    name: person.name,
    url: pageUrl,
    ...(person.role ? { jobTitle: person.role } : {}),
    ...(person.bio ? { description: person.bio } : {}),
    ...(person.headshotUrl
      ? { image: person.headshotUrl.startsWith("http") ? person.headshotUrl : urlFor(person.headshotUrl) }
      : {}),
    worksFor: { "@id": ORG_ID },
    affiliation: { "@id": ORG_ID },
    ...(person.sameAs && person.sameAs.length ? { sameAs: person.sameAs } : {}),
    ...(person.knowsAbout && person.knowsAbout.length
      ? { knowsAbout: person.knowsAbout }
      : {}),
  };
}
