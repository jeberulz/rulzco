import type { Metadata } from "next";
import { WorkPage } from "@/components/work/WorkPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildCollectionPage } from "@/lib/seo/jsonld";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Rulz&Co",
  description:
    "Selected projects from Rulz&Co — AI product design, strategy, and brand work for startups building intelligent products.",
};

export default function Work() {
  return (
    <>
      <JsonLd
        data={buildCollectionPage({
          name: "Work — Rulz&Co",
          description:
            "Selected projects from Rulz&Co — AI product design, strategy, and brand work for startups building intelligent products.",
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
