import type { Metadata } from "next";
import { StudioPage } from "@/components/studio/StudioPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildAboutPage } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/shared-metadata";

export const metadata: Metadata = buildMetadata({
  title: "Studio",
  description:
    "Intentionally small. Obsessively good. The principles, people, and working style behind Rulz&Co.",
  path: "/studio",
});

export default function Studio() {
  return (
    <>
      <JsonLd
        data={buildAboutPage({
          name: "Studio — Rulz&Co",
          description:
            "Intentionally small. Obsessively good. The principles, people, and working style behind Rulz&Co.",
          path: "/studio",
        })}
      />
      <StudioPage />
    </>
  );
}
