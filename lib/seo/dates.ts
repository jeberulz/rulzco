/**
 * Date helpers shared by sitemaps, JSON-LD and on-page date components.
 *
 * Editorial content stores human dates like `"5 Jun 2026"`. These parse
 * reliably via the Date constructor; anything unparseable returns null so
 * callers can omit the field rather than emit an Invalid Date / 1970 value.
 */

export function parseContentDate(input?: string | null): Date | null {
  if (!input) return null;
  const d = new Date(input);
  return Number.isNaN(d.getTime()) ? null : d;
}

/** ISO 8601 string for a content date, or null when unparseable. */
export function toIsoDate(input?: string | null): string | null {
  return parseContentDate(input)?.toISOString() ?? null;
}

/** Whether a content date falls within the last `hours` (and is not in the future). */
export function isWithinHours(
  input: string | undefined | null,
  hours: number,
  now: number = Date.now(),
): boolean {
  const d = parseContentDate(input);
  if (!d) return false;
  const t = d.getTime();
  return t <= now && now - t < hours * 3600 * 1000;
}
