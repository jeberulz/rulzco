import { parseContentDate } from "@/lib/seo/dates";
import { SITE_LOCALE } from "@/lib/seo/site-config";

const FMT = new Intl.DateTimeFormat(SITE_LOCALE, {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function format(input?: string | null): string | null {
  const d = parseContentDate(input);
  return d ? FMT.format(d) : null;
}

/**
 * Visible freshness signal. Google's Quality Raters (and AI citation models)
 * look for an on-page last-updated date, not just one buried in schema.
 *
 * Renders "Updated: 5 June 2026" only when a `dateModified` exists and differs
 * from the published date — otherwise nothing, so we never show a redundant
 * "Updated" that just repeats the publish date.
 */
export function UpdatedDate({
  published,
  dateModified,
  className,
}: {
  published?: string | null;
  dateModified?: string | null;
  className?: string;
}) {
  if (!dateModified || dateModified === published) return null;
  const formatted = format(dateModified);
  if (!formatted) return null;

  const iso = parseContentDate(dateModified)?.toISOString();
  return (
    <span className={className}>
      Updated:{" "}
      <time dateTime={iso}>{formatted}</time>
    </span>
  );
}
