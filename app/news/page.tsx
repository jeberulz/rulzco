import type { Metadata } from "next";
import { NewsPage } from "@/components/news/NewsPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildCollectionPage } from "@/lib/seo/jsonld";
import { articles } from "@/lib/articles";
import { buildMetadata } from "@/lib/seo/shared-metadata";
import { PUBLICATION_NAME, SITE_NAME } from "@/lib/seo/site-config";

const DESCRIPTION =
  "Perspectives on design, AI, and building products that matter. Published when we have something worth saying.";

export const metadata: Metadata = buildMetadata({
  title: PUBLICATION_NAME,
  description: DESCRIPTION,
  path: "/news",
});

export default function News() {
  return (
    <>
      <JsonLd
        data={buildCollectionPage({
          name: `${PUBLICATION_NAME} — ${SITE_NAME}`,
          description: DESCRIPTION,
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
