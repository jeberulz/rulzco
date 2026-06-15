import type { Metadata } from "next";
import { LabsIndex } from "@/components/labs/LabsIndex";
import { buildMetadata } from "@/lib/seo/shared-metadata";

const DESCRIPTION =
  "Rulz Labs — AI-native UX experiments, shipped fast. Ideas to live prototypes to real user signal to V2.";

export const metadata: Metadata = buildMetadata({
  title: "Rulz Labs",
  description: DESCRIPTION,
  path: "/labs",
});

export default function Labs() {
  return <LabsIndex />;
}
