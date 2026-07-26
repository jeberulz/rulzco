import type { Metadata } from "next";
import { WorkforcePrototype } from "@/components/ai-workforce/WorkforcePrototype";

export const metadata: Metadata = {
  title: "Algolia AI Workforce",
  description:
    "A prototype for orchestrating a personal team of specialised AI employees.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AIWorkforcePage() {
  return <WorkforcePrototype />;
}
