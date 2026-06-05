import type { Metadata } from "next";
import { NewsPage } from "@/components/news/NewsPage";

export const metadata: Metadata = {
  title: "The Dispatch — Rulz&Co",
  description:
    "Perspectives on design, AI, and building products that matter. Published when we have something worth saying.",
};

export default function News() {
  return <NewsPage />;
}
