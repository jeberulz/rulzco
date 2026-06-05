import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryPage } from "@/components/news/CategoryPage";
import {
  CATEGORIES,
  categoryToSlug,
  getArticlesByCategory,
  slugToCategory,
} from "@/lib/articles";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildCollectionPage } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/shared-metadata";

export async function generateStaticParams() {
  return CATEGORIES.filter((c) => c !== "All").map((c) => ({
    slug: categoryToSlug(c),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = slugToCategory(slug);
  if (!category) return { title: "Not found — The Dispatch" };
  return buildMetadata({
    title: `${category} — The Dispatch`,
    description: `All articles in ${category} from Rulz&Co.`,
    path: `/news/category/${slug}`,
  });
}

export default async function CategoryRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = slugToCategory(slug);
  if (!category) notFound();
  const items = getArticlesByCategory(category);
  return (
    <>
      <JsonLd
        data={buildCollectionPage({
          name: `${category} — The Dispatch`,
          description: `All articles in ${category} from Rulz&Co.`,
          path: `/news/category/${slug}`,
          items: items.map((a) => ({
            name: a.title,
            path: `/news/${a.id}`,
          })),
        })}
      />
      <CategoryPage category={category} articles={items} />
    </>
  );
}
