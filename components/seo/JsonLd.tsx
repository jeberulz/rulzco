import type { Thing, WithContext } from "schema-dts";

/**
 * Renders a JSON-LD <script> block.
 *
 * Uses a native <script> tag (NOT next/script) so the structured data is in
 * the server-rendered HTML for crawlers. The payload is serialised with `<`
 * escaped to `<` to prevent a `</script>` sequence in any string field
 * from breaking out of the script context (XSS guard).
 */
export function JsonLd<T extends Thing>({ data }: { data: WithContext<T> }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
