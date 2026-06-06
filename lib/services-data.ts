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
    name: "Product Sprint",
    tagline: "Get unstuck. Get direction.",
    bestFor: "Early-stage founders, stuck teams, new ideas that need clarity before investment.",
    description:
      "A focused, high-intensity sprint to align on the real problem, define the product, and design the core experience. You leave with a clear direction and something tangible in your hands.",
    duration: "1 – 2 weeks",
    cadence: "Daily async + 2 live sessions",
    includes: [
      "Problem framing workshop",
      "User need definition",
      "Core product flows",
      "AI feature concepts",
      "Figma prototype",
      "Strategic brief document",
    ],
    outcome: "A clear product direction and a prototype you can move forward with confidently.",
    featured: false,
    cta: "Enquire about a sprint",
  },
  {
    id: "mvp",
    num: "02",
    name: "AI MVP Build",
    tagline: "From concept to something shippable.",
    bestFor: "Founders ready to build. Teams who need a design partner from zero to launch-ready.",
    description:
      "An end-to-end engagement to design and prototype a real MVP — with AI and system thinking at the core. Everything handed off engineer-ready, no translation required.",
    duration: "4 – 6 weeks",
    cadence: "Weekly syncs + async throughout",
    includes: [
      "End-to-end product design",
      "Agentic UX & AI interactions",
      "MVP-ready Figma prototype",
      "Design system foundations",
      "Component library",
      "Dev handoff & documentation",
      "Launch strategy input",
    ],
    outcome: "A testable, investor-ready MVP built to be shipped or handed off to engineering.",
    featured: true,
    cta: "Start an MVP Build",
  },
  {
    id: "partner",
    num: "03",
    name: "Product Partner",
    tagline: "A senior product mind in your team.",
    bestFor: "Startups iterating post-launch or scaling a product with ongoing design needs.",
    description:
      "A monthly partnership where I work alongside your team to shape direction, design new features, and evolve your AI product over time. No agency overhead.",
    duration: "Monthly retainer",
    cadence: "Weekly syncs + always-on async",
    includes: [
      "Ongoing product strategy",
      "UX & AI feature design",
      "Workflow & automation thinking",
      "Continuous iteration",
      "Design system maintenance",
      "Launch support",
    ],
    outcome: "A senior product partner embedded in your team — without the cost of a full-time hire.",
    featured: false,
    cta: "Discuss a partnership",
  },
];

export const faqs: ServiceFaq[] = [
  {
    q: "Do you share pricing upfront?",
    a: "Engagements are scoped and priced after the discovery call — because the right investment depends entirely on the problem. That said, we're direct: sprints start from £3,500, MVP builds from £12,000, and partnerships from £3,000/month. We'll always be clear before we start.",
  },
  {
    q: "How many projects do you take on at once?",
    a: "Two, sometimes three. Deliberately. The point of working with Rulz&Co is that you get genuine attention, not a revolving door of people who've skimmed your brief. If we're at capacity, we'll tell you — and we'll give you a realistic timeline.",
  },
  {
    q: "Do you do development as well?",
    a: "Design and strategy, yes. Code, no — though we design with engineers in mind and can recommend trusted development partners we've worked with. Everything we ship is annotated, component-structured, and built to hand off cleanly.",
  },
  {
    q: "What does a typical working week look like?",
    a: "Async by default. We'll establish a rhythm that works for your timezone and schedule — usually a weekly sync plus Loom updates and Figma comments throughout. You won't be chasing us for updates.",
  },
  {
    q: "Can we start with a sprint and move to an MVP Build?",
    a: "Yes, and that's often the best path. A sprint de-risks the investment before committing to a full build. Many of our longest partnerships started with a two-week sprint.",
  },
  {
    q: "How do you handle NDAs and confidentiality?",
    a: "We sign NDAs before any substantive conversation if you'd like one. Everything we work on stays strictly confidential. We only feature work publicly with explicit client sign-off.",
  },
];
