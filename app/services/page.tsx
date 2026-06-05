import type { Metadata } from "next";
import { ServicesPage } from "@/components/services/ServicesPage";

export const metadata: Metadata = {
  title: "Services — Rulz&Co",
  description:
    "AI product design, strategy, and MVP builds for startups. Three engagement models — from a focused sprint to an ongoing product partnership.",
};

export default function Services() {
  return <ServicesPage />;
}
