import type { Metadata } from "next";
import { LabsIndex } from "@/components/labs/LabsIndex";
import { buildMetadata } from "@/lib/seo/shared-metadata";

const DESCRIPTION =
  "Rulz Labs — focused agentic interface experiments for sources, confidence, approvals, agent activity, failure, and recovery.";

export const metadata: Metadata = buildMetadata({
  title: "Rulz Labs",
  description: DESCRIPTION,
  path: "/labs",
});

export default function Labs() {
  return <LabsIndex />;
}
