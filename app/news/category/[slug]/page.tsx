import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryPage } from "@/components/news/CategoryPage";
import {
  CATEGORIES,
  categoryToSlug,
  getArticlesByCategory,
  slugToCategory,
} from "@/lib/articles";

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
  return {
    title: `${category} — The Dispatch`,
    description: `All articles in ${category} from Rulz&Co.`,
  };
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
  return <CategoryPage category={category} articles={items} />;
}
