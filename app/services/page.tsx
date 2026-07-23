import type { Metadata } from "next";
import { ServicesPage } from "@/components/services/ServicesPage";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildServiceItemList,
  buildFAQPage,
  buildBreadcrumbList,
} from "@/lib/seo/jsonld";
import { breadcrumbsForService } from "@/lib/seo/breadcrumbs";
import { tiers, faqs } from "@/lib/services-data";
import { buildMetadata } from "@/lib/seo/shared-metadata";

export const metadata: Metadata = buildMetadata({
  title: "Agentic Interface Services",
  description:
    "Agentic interface strategy, design, and React builds for teams turning models and automated workflows into clear, trustworthy products.",
  path: "/services",
});

export default function Services() {
  const faqPage = buildFAQPage(faqs);
  return (
    <>
      <JsonLd data={buildServiceItemList(tiers)} />
      {faqPage && <JsonLd data={faqPage} />}
      <JsonLd data={buildBreadcrumbList(breadcrumbsForService())} />
      <ServicesPage />
    </>
  );
}
