import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policies/PolicyLayout";
import { buildMetadata } from "@/lib/seo/shared-metadata";
import { CONTACT_EMAIL } from "@/lib/seo/site-config";

const UPDATED = "5 June 2026";

export const metadata: Metadata = buildMetadata({
  title: "Corrections Policy",
  description:
    "How Rulz&Co handles corrections, clarifications, and updates to published editorial.",
  path: "/policies/corrections",
});

export default function CorrectionsPolicy() {
  return (
    <PolicyLayout title="Corrections Policy" updated={UPDATED}>
      <p>
        Rulz&amp;Co publishes editorial under The Dispatch. We aim to be accurate
        and fair. When we get something wrong, we fix it openly.
      </p>

      <h2>Reporting an error</h2>
      <p>
        If you believe an article contains a factual error, email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with the article
        title, the specific claim in question, and a source where available. We
        review every report.
      </p>

      <h2>How we correct</h2>
      <p>
        Substantive factual corrections are made in the article and noted with a
        dated correction line at the foot of the piece. Minor fixes — spelling,
        broken links, formatting — are made silently. Where a correction
        materially changes the meaning of a piece, we update the visible
        last-updated date.
      </p>

      <h2>Updates and clarifications</h2>
      <p>
        Articles that cover a developing topic may be updated as facts change.
        Significant updates carry a dated note so readers can see what changed
        and when.
      </p>
    </PolicyLayout>
  );
}
