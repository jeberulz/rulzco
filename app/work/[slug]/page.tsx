import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import { CaseStudyPage } from "@/components/work/CaseStudyPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildCreativeWork } from "@/lib/seo/jsonld";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Rulz&Co`,
    description: project.description,
  };
}

export default async function WorkCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return (
    <>
      <JsonLd data={buildCreativeWork(project)} />
      <CaseStudyPage project={project} />
    </>
  );
}
