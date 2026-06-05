import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policies/PolicyLayout";
import { buildMetadata } from "@/lib/seo/shared-metadata";
import { CONTACT_EMAIL } from "@/lib/seo/site-config";

const UPDATED = "5 June 2026";

export const metadata: Metadata = buildMetadata({
  title: "AI Disclosure",
  description:
    "How Rulz&Co uses AI tools in its editorial and design work, and the human oversight behind everything we publish.",
  path: "/policies/ai-disclosure",
});

export default function AiDisclosurePolicy() {
  return (
    <PolicyLayout title="AI Disclosure" updated={UPDATED}>
      <p>
        Rulz&amp;Co works on AI products, and we use AI tools in our own process.
        This page explains how — and where the line sits between machine
        assistance and human judgement.
      </p>

      <h2>Editorial</h2>
      <p>
        Every article in The Dispatch is conceived, argued, and edited by a
        human. We may use AI tools for research, drafting support, and copy
        editing, but the thesis, the point of view, and the final words are
        ours. Nothing is published autonomously by a model.
      </p>

      <h2>Imagery</h2>
      <p>
        Editorial cover images are generated with AI image tools to a
        human-directed brief. They are illustrative, not photographic records of
        real events or people.
      </p>

      <h2>Accountability</h2>
      <p>
        A named human is responsible for everything we publish. If anything here
        appears inaccurate or misleading, tell us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and see our{" "}
        <a href="/policies/corrections">Corrections Policy</a>.
      </p>
    </PolicyLayout>
  );
}
