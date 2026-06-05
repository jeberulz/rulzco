import type { Metadata } from "next";
import { WorkPage } from "@/components/work/WorkPage";

export const metadata: Metadata = {
  title: "Work — Rulz&Co",
  description:
    "Selected projects from Rulz&Co — AI product design, strategy, and brand work for startups building intelligent products.",
};

export default function Work() {
  return <WorkPage />;
}
