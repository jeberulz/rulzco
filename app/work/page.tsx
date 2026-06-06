import type { Metadata } from "next";
import { WorkPage } from "@/components/work/WorkPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildCollectionPage } from "@/lib/seo/jsonld";
import { projects } from "@/lib/projects";
import { buildMetadata } from "@/lib/seo/shared-metadata";
import { SITE_NAME } from "@/lib/seo/site-config";

const DESCRIPTION =
  "Selected projects from Rulz&Co — AI product design, strategy, and brand work for startups building intelligent products.";

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
