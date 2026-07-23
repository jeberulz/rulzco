/**
 * Canonical services data — single source of truth shared by the visible
 * Services page UI and the JSON-LD (Service ItemList + FAQPage) emitted on
 * the route. Keeping these here prevents the structured data from drifting
 * out of sync with on-page content (a Google manual-action risk for FAQPage).
 */

import type { Faq } from "@/lib/seo/jsonld";

export type ServiceTier = {
  id: string;
  num: string;
  name: string;
  tagline: string;
  bestFor: string;
  description: string;
  duration: string;
  cadence: string;
  includes: string[];
  outcome: string;
  featured: boolean;
  cta: string;
};

/** Alias of the canonical Faq shape (see lib/seo/jsonld.ts). */
export type ServiceFaq = Faq;

export const tiers: ServiceTier[] = [
  {
    id: "sprint",
    num: "01",
    name: "Interface Diagnostic",
    tagline: "Find the workflow worth fixing.",
    bestFor: "Teams with working AI, but no clear interface direction or adoption path.",
    description:
      "A focused audit of where people lose clarity, control, or trust in your AI workflow. We identify the highest-leverage interface problem and define what to build next.",
    duration: "1 – 2 weeks",
    cadence: "Daily async + 2 live sessions",
    includes: [
      "Workflow and user audit",
      "Agent responsibility map",
      "Trust and risk review",
      "Priority interaction flow",
      "Interface concept",
      "Build recommendation",
    ],
    outcome: "A prioritised interface direction and a build brief your team can act on with confidence.",
    featured: false,
    cta: "Book a diagnostic",
  },
  {
    id: "mvp",
    num: "02",
    name: "Agentic Interface Build",
    tagline: "From working AI to a product people can use.",
    bestFor: "Startups and mid-market teams ready to ship one clear, working interface on their AI stack.",
    description:
      "We design and build the product layer around your models, tools, and workflows. The result is a real frontend with the states, evidence, controls, and recovery paths agentic products need.",
    duration: "2 – 6 weeks",
    cadence: "Weekly syncs + async throughout",
    includes: [
      "Agentic interaction model",
      "End-to-end interface design",
      "Working React frontend",
      "Live model and tool states",
      "Human approval and recovery",
      "Interface system foundations",
      "Launch instrumentation",
    ],
    outcome: "A deployed, testable interface people can use with your real AI capability.",
    featured: true,
    cta: "Start an interface build",
  },
  {
    id: "partner",
    num: "03",
    name: "Interface Partner",
    tagline: "Keep the human experience coherent as the AI evolves.",
    bestFor: "Teams expanding an agentic product across more workflows, roles, and levels of autonomy.",
    description:
      "Ongoing product direction, interaction design, and frontend delivery as your agents take on more work and responsibility. Senior attention, without agency layers.",
    duration: "Monthly retainer",
    cadence: "Weekly syncs + always-on async",
    includes: [
      "Agentic product direction",
      "New workflow design",
      "Frontend implementation",
      "Trust and adoption signals",
      "Interface system evolution",
      "Continuous delivery",
    ],
    outcome: "A senior interface partner embedded in your team as the product and AI system evolve.",
    featured: false,
    cta: "Discuss an interface partnership",
  },
];

export const faqs: ServiceFaq[] = [
  {
    q: "Do you share pricing upfront?",
    a: "Engagements are scoped after the discovery call because the right investment depends on the workflow and technical boundary. That said, we're direct: diagnostics start from £3,500, interface builds from £12,000, and partnerships from £3,000/month. We'll always be clear before we start.",
  },
  {
    q: "How many projects do you take on at once?",
    a: "Two, sometimes three. Deliberately. The point of working with Rulz&Co is that you get genuine attention, not a revolving door of people who've skimmed your brief. If we're at capacity, we'll tell you — and we'll give you a realistic timeline.",
  },
  {
    q: "Do you do development as well?",
    a: "Yes, for scoped agentic interface builds. We design and build React frontends, then connect them to your existing models, APIs, tools, and data services. If the work needs a large backend, infrastructure programme, or deep systems integration, we'll define that boundary early and work with your engineering team or a trusted specialist.",
  },
  {
    q: "What does a typical working week look like?",
    a: "Async by default. We'll establish a rhythm that works for your timezone and schedule — usually a weekly sync plus Loom updates and Figma comments throughout. You won't be chasing us for updates.",
  },
  {
    q: "Can we start with a diagnostic and move to a build?",
    a: "Yes, and that's often the strongest path. The diagnostic identifies the workflow, human controls, technical boundary, and success measure before you commit to a full interface build.",
  },
  {
    q: "How do you handle NDAs and confidentiality?",
    a: "We sign NDAs before any substantive conversation if you'd like one. Everything we work on stays strictly confidential. We only feature work publicly with explicit client sign-off.",
  },
];
