import type { Metadata } from "next";
import { ServicesPage } from "@/components/services/ServicesPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildServiceItemList, buildFAQPage } from "@/lib/seo/jsonld";
import { tiers, faqs } from "@/lib/services-data";
import { buildMetadata } from "@/lib/seo/shared-metadata";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "AI product design, strategy, and MVP builds for startups. Three engagement models — from a focused sprint to an ongoing product partnership.",
  path: "/services",
});

export default function Services() {
  const faqPage = buildFAQPage(faqs);
  return (
    <>
      <JsonLd data={buildServiceItemList(tiers)} />
      {faqPage && <JsonLd data={faqPage} />}
      <ServicesPage />
    </>
  );
}
