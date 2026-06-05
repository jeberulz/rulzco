import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/news/ArticlePage";
import { articles, getArticle, getRelatedArticles } from "@/lib/articles";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildNewsArticle,
  buildBreadcrumbList,
  buildFAQPage,
} from "@/lib/seo/jsonld";
import { breadcrumbsForArticle } from "@/lib/seo/breadcrumbs";
import { getAuthor } from "@/lib/authors";
import { buildMetadata } from "@/lib/seo/shared-metadata";

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
  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/news/${slug}`,
    type: "article",
  });
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
  const author = article.authorSlug ? getAuthor(article.authorSlug) : undefined;
  const faqPage = buildFAQPage(article.faqs ?? []);
  return (
    <>
      <JsonLd
        data={buildNewsArticle(
          article,
          author
            ? { authorPath: `/studio/${author.slug}`, authorName: author.name }
            : {},
        )}
      />
      <JsonLd data={buildBreadcrumbList(breadcrumbsForArticle(article))} />
      {faqPage && <JsonLd data={faqPage} />}
      <ArticlePage article={article} related={related} />
    </>
  );
}
