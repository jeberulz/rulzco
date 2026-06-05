import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/news/ArticlePage";
import { articles, getArticle, getRelatedArticles } from "@/lib/articles";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildNewsArticle } from "@/lib/seo/jsonld";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Not found — The Dispatch" };
  return {
    title: `${article.title} — The Dispatch`,
    description: article.excerpt,
  };
}

export default async function ArticleRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const related = getRelatedArticles(slug, 3);
  return (
    <>
      <JsonLd data={buildNewsArticle(article)} />
      <ArticlePage article={article} related={related} />
    </>
  );
}
