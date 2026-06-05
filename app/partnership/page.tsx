import type { Metadata } from "next";
import { PartnershipPage } from "@/components/partnership/PartnershipPage";
import { buildMetadata } from "@/lib/seo/shared-metadata";

export const metadata: Metadata = buildMetadata({
  title: "Partnership",
  description:
    "We don't just work for companies — sometimes we build them. Equity partnerships, co-builds, and syndicate investments for founders worth betting on.",
  path: "/partnership",
});

export default function Partnership() {
  return <PartnershipPage />;
}
