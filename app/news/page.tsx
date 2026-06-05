import type { Metadata } from "next";
import { NewsPage } from "@/components/news/NewsPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildCollectionPage } from "@/lib/seo/jsonld";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "The Dispatch — Rulz&Co",
  description:
    "Perspectives on design, AI, and building products that matter. Published when we have something worth saying.",
};

export default function News() {
  return (
    <>
      <JsonLd
        data={buildCollectionPage({
          name: "The Dispatch — Rulz&Co",
          description:
            "Perspectives on design, AI, and building products that matter. Published when we have something worth saying.",
          path: "/news",
          items: articles.map((a) => ({
            name: a.title,
            path: `/news/${a.id}`,
          })),
        })}
      />
      <NewsPage />
    </>
  );
}
