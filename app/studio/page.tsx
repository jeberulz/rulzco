import type { Metadata } from "next";
import { StudioPage } from "@/components/studio/StudioPage";

export const metadata: Metadata = {
  title: "Studio — Rulz&Co",
  description:
    "Intentionally small. Obsessively good. The principles, people, and working style behind Rulz&Co.",
};

export default function Studio() {
  return <StudioPage />;
}
