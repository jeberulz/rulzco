import type { Metadata } from "next";
import { ServicesPage } from "@/components/services/ServicesPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildServiceItemList, buildFAQPage } from "@/lib/seo/jsonld";
import { tiers, faqs } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services — Rulz&Co",
  description:
    "AI product design, strategy, and MVP builds for startups. Three engagement models — from a focused sprint to an ongoing product partnership.",
};

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
