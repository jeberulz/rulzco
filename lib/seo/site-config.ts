/**
 * Single source of truth for site identity, canonical URL, and entity data.
 *
 * Everything SEO/AEO-related (metadata, JSON-LD, sitemaps, robots, OG images)
 * resolves through here so a brand or URL change propagates from one place.
 */

/**
 * Resolve the canonical site origin.
 *
 * Order of precedence:
 *  1. `NEXT_PUBLIC_SITE_URL` when set to a valid absolute URL.
 *  2. The known production domain (`https://rulz.co`) as a safe default so
 *     `next build` never has to emit the literal string `"undefined"` into a
 *     canonical or `metadataBase` (the failure mode the plan calls out).
 *
 * A *malformed* env value throws with a clear message rather than silently
 * producing a broken base URL.
 */
function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const candidate = raw && raw.length > 0 ? raw : "https://rulz.co";

  let parsed: URL;
  try {
    parsed = new URL(candidate);
  } catch {
    throw new Error(
      `[seo/site-config] NEXT_PUBLIC_SITE_URL is set to an invalid URL: "${raw}". ` +
        `Expected an absolute URL like "https://rulz.co".`,
    );
  }

  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new Error(
      `[seo/site-config] NEXT_PUBLIC_SITE_URL must use http(s); got "${candidate}".`,
    );
  }

  // Normalise: origin only, no trailing slash.
  return parsed.origin;
}

export const SITE_URL = resolveSiteUrl();

export const SITE_NAME = "Rulz&Co";
export const SITE_SHORT_NAME = "Rulz&Co";
/** The editorial publication brand (the /news section). */
export const PUBLICATION_NAME = "The Dispatch";
export const SITE_LOCALE = "en-GB";
/** BCP-47 → Open Graph locale (underscore form). */
export const SITE_OG_LOCALE = "en_GB";

export const SITE_DESCRIPTION =
  "AI Product Design & Strategy partner for startups shipping intelligent products. From idea to MVP to launch, with AI at the core.";

export const SITE_TAGLINE = "AI Product Design & Strategy";

/** Square wordmark used for Organization/Publisher logo in JSON-LD. */
export const LOGO_PATH = "/logo.svg";

/** Default Open Graph / Twitter share image (generated route, see app/opengraph-image). */
export const DEFAULT_OG_PATH = "/opengraph-image";

export const TWITTER_HANDLE = "@rulzandco";

export const CONTACT_EMAIL = "hello@rulz.co";

/** External profiles that establish the brand entity (Organization.sameAs). */
export const ORG_SAME_AS: string[] = [
  "https://www.linkedin.com/company/rulzandco",
  "https://x.com/rulzandco",
];

export const STUDIO_ADDRESS = {
  locality: "Manchester",
  region: "England",
  country: "GB",
} as const;

/** Stable @id anchors so cross-schema references resolve. */
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Build an absolute URL from a site-relative path.
 *
 * `urlFor('/')` → `https://rulz.co/`
 * `urlFor('news/foo')` → `https://rulz.co/news/foo`
 */
export function urlFor(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean}`;
}
