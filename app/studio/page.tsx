import type { Metadata } from "next";
import { StudioPage } from "@/components/studio/StudioPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildAboutPage } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/shared-metadata";

export const metadata: Metadata = buildMetadata({
  title: "Studio",
  description:
    "The deliberately small studio behind Rulz&Co's agentic interface strategy, interaction design, and working frontend builds.",
  path: "/studio",
});

export default function Studio() {
  return (
    <>
      <JsonLd
        data={buildAboutPage({
          name: "Studio — Rulz&Co",
          description:
            "The deliberately small studio behind Rulz&Co's agentic interface strategy, interaction design, and working frontend builds.",
          path: "/studio",
        })}
      />
      <StudioPage />
    </>
  );
}
