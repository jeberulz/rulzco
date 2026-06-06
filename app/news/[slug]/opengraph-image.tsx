import { articles, getArticle } from "@/lib/articles";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/seo/og";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.id }));
}

export const alt = "Rulz&Co — The Dispatch";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  return renderOgImage({
    eyebrow: article?.category ?? "The Dispatch",
    title: article?.title ?? "The Dispatch",
  });
}
