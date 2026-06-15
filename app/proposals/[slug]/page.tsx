import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProposalView } from "@/components/proposals/ProposalView";
import { getProposal, proposals } from "@/lib/proposals";
import { buildMetadata } from "@/lib/seo/shared-metadata";

export function generateStaticParams() {
  return proposals.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProposal(slug);
  if (!p) return {};
  // Unlisted: never index a client proposal.
  return buildMetadata({
    title: `Proposal — ${p.client.name}`,
    description: p.hero.headline,
    path: `/proposals/${slug}`,
    noIndex: true,
  });
}

export default async function ProposalRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProposal(slug);
  if (!p) notFound();
  return <ProposalView p={p} />;
}
