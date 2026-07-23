import type { Metadata } from "next";
import { WorkPage } from "@/components/work/WorkPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildCollectionPage } from "@/lib/seo/jsonld";
import { projects } from "@/lib/projects";
import { buildMetadata } from "@/lib/seo/shared-metadata";
import { SITE_NAME } from "@/lib/seo/site-config";

const DESCRIPTION =
  "Selected Rulz&Co work and self-initiated agentic interface demos across source verification, human control, complex workflows, and trust-sensitive product systems.";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description: DESCRIPTION,
  path: "/work",
});

export default function Work() {
  return (
    <>
      <JsonLd
        data={buildCollectionPage({
          name: `Work — ${SITE_NAME}`,
          description: DESCRIPTION,
          path: "/work",
          items: projects.map((p) => ({
            name: p.title,
            path: `/work/${p.id}`,
          })),
        })}
      />
      <WorkPage />
    </>
  );
}
