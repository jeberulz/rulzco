import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExperimentDetail } from "@/components/labs/ExperimentDetail";
import { getExperiment, getVisibleExperiments } from "@/lib/experiments";
import { buildMetadata } from "@/lib/seo/shared-metadata";

export function generateStaticParams() {
  return getVisibleExperiments().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const e = getExperiment(slug);
  if (!e) return {};
  return buildMetadata({
    title: `${e.title} — Rulz Labs`,
    description: e.hypothesis,
    path: `/labs/${slug}`,
  });
}

export default async function ExperimentRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const e = getExperiment(slug);
  if (!e) notFound();
  return <ExperimentDetail e={e} />;
}
