import type { Metadata } from "next";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_OG_LOCALE,
  TWITTER_HANDLE,
} from "./site-config";

/**
 * Open Graph fields shared by every page.
 *
 * Next.js merges metadata across layout → page segments, but object-valued
 * fields like `openGraph` are replaced *shallowly*: the moment a page sets its
 * own `openGraph`, the parent's `siteName`/`locale`/`type` vanish unless the
 * page re-supplies them. `buildMetadata()` spreads these so that never happens.
 */
export const sharedOpenGraph = {
  siteName: SITE_NAME,
  locale: SITE_OG_LOCALE,
  type: "website",
} satisfies NonNullable<Metadata["openGraph"]>;

export const sharedTwitter = {
  card: "summary_large_image",
  site: TWITTER_HANDLE,
  creator: TWITTER_HANDLE,
} satisfies NonNullable<Metadata["twitter"]>;

export type BuildMetadataOptions = {
  /** Page <title>. Pass the full title; the root template is not applied here. */
  title: string;
  description?: string;
  /** Site-relative path, e.g. "/services". Drives canonical + hreflang. */
  path?: string;
  /** Open Graph type override (e.g. "article" for editorial pages). */
  type?: "website" | "article" | "profile";
  /**
   * Explicit OG/Twitter images. Omit to let Next.js inject the route's
   * file-convention `opengraph-image.tsx` automatically.
   */
  images?: NonNullable<Metadata["openGraph"]>["images"];
  /** When true, emit robots noindex/nofollow. */
  noIndex?: boolean;
  /** Extra Open Graph fields merged on top of the shared base. */
  openGraph?: Partial<NonNullable<Metadata["openGraph"]>>;
};

/**
 * Build a complete `Metadata` object with canonical, hreflang, Open Graph and
 * Twitter cards, guaranteeing the shared fields survive.
 *
 * `metadataBase` (set once in the root layout) resolves the relative
 * `canonical`/`languages` paths to absolute URLs.
 */
export function buildMetadata(opts: BuildMetadataOptions): Metadata {
  const {
    title,
    description = SITE_DESCRIPTION,
    path = "/",
    type = "website",
    images,
    noIndex = false,
    openGraph,
  } = opts;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        "en-GB": path,
        "x-default": path,
      },
    },
    openGraph: {
      ...sharedOpenGraph,
      type,
      title,
      description,
      url: path,
      ...(images ? { images } : {}),
      ...openGraph,
    },
    twitter: {
      ...sharedTwitter,
      title,
      description,
      ...(images ? { images } : {}),
    },
    ...(noIndex
      ? { robots: { index: false, follow: false } }
      : {}),
  };
}
