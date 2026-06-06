import { getProject, projects } from "@/lib/projects";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/seo/og";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export const alt = "Rulz&Co — Work";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  return renderOgImage({
    eyebrow: project?.tags?.join(" · ") ?? "Case Study",
    title: project?.title ?? "Work",
  });
}
