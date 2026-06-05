import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import { CaseStudyPage } from "@/components/work/CaseStudyPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildCreativeWork, buildBreadcrumbList } from "@/lib/seo/jsonld";
import { breadcrumbsForProject } from "@/lib/seo/breadcrumbs";
import { buildMetadata } from "@/lib/seo/shared-metadata";

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
  return buildMetadata({
    title: project.title,
    description: project.description,
    path: `/work/${slug}`,
  });
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
      <JsonLd data={buildBreadcrumbList(breadcrumbsForProject(project))} />
      <CaseStudyPage project={project} />
    </>
  );
}
