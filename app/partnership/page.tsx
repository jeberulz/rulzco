import type { Metadata } from "next";
import { PartnershipPage } from "@/components/partnership/PartnershipPage";

export const metadata: Metadata = {
  title: "Partnership — Rulz&Co",
  description:
    "We don't just work for companies — sometimes we build them. Equity partnerships, co-builds, and syndicate investments for founders worth betting on.",
};

export default function Partnership() {
  return <PartnershipPage />;
}
