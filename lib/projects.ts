export type Project = {
  id: string;
  num: string;
  title: string;
  tagline: string;
  year: string;
  tags: string[];
  description: string;
  outcome: string;
  gradient: string;
  accent: string;
  size: string;
  // Case study
  role: string;
  timeline: string;
  deliverables: string[];
  challenge: string;
  approach: string;
  sections: {
    label: string;
    heading: string;
    body: string;
  }[];
  stats: {
    value: string;
    suffix: string;
    label: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
};

export const projects: Project[] = [
  {
    id: "rinkl",
    num: "01",
    title: "Rinkl",
    tagline: "Owning your money starts with understanding it.",
    year: "2024",
    tags: ["App", "Fintech"],
    description:
      "Next-gen student finance tracker that helps you officially own your bank account. Real-time insights and AI-powered nudges for better financial health.",
    outcome: "MVP shipped in 6 weeks. Seed round secured.",
    gradient: "linear-gradient(135deg, #0f0c29 0%, #1a1a6e 50%, #24243e 100%)",
    accent: "#6C63FF",
    size: "large",
    role: "Product Design + Strategy",
    timeline: "6 weeks",
    deliverables: ["Product Strategy", "UX Flows", "UI Design", "Design System", "Prototype"],
    challenge:
      "Students were haemorrhaging money because their banking apps were built for adults — not for people juggling rent, student loans, subscriptions, and a £3 coffee habit. Rinkl came in with a sharp insight: students don't need more data, they need a financial friend who actually pays attention.",
    approach:
      "We ran a rapid discovery sprint with 14 university students across three cities. The recurring theme: shame. People felt judged by their own bank. From there, we designed around three principles — be honest without being brutal, surface insights before they become problems, and make the act of checking your money feel good.",
    sections: [
      {
        label: "Discovery",
        heading: "The research that changed the brief.",
        body:
          "What started as 'build a budgeting app' became something more nuanced. Through contextual interviews and diary studies, we discovered that students weren't failing at budgets — they were avoiding their finances entirely because existing tools made them feel judged. We reframed the product from 'budget tracker' to 'financial companion'. That shift changed everything downstream.",
      },
      {
        label: "Design",
        heading: "A system built around emotion, not spreadsheets.",
        body:
          "We designed a dashboard that leads with feeling before figures. The opening state shows a 'financial health score' — a single, honest number — rather than a wall of transactions. AI nudges are written in plain English, with warmth: 'You've spent £48 on coffee this month. That's fine — just so you know.' Every interaction was stress-tested against one question: does this make the user feel more in control, or less?",
      },
      {
        label: "Delivery",
        heading: "MVP-ready in six weeks.",
        body:
          "Designs were handed to engineering with zero ambiguity — annotated Figma files, a working component library, and a logic spec for every AI nudge trigger. The team shipped the MVP three weeks after handoff. Rinkl went on to secure a pre-seed round within two months of launch.",
      },
    ],
    stats: [
      { value: "6", suffix: " weeks", label: "Concept to MVP" },
      { value: "14", suffix: "", label: "User interviews" },
      { value: "3", suffix: "x", label: "Increase in DAU post-redesign" },
      { value: "300", suffix: "k", label: "Pre-seed secured (£)" },
    ],
    testimonial: {
      quote:
        "Rulz&Co didn't just design an app — they helped us understand what product we were actually building. The clarity they brought in week one saved us months of wrong turns.",
      author: "Founder, Rinkl",
      title: "Pre-seed stage, 2024",
    },
  },
  {
    id: "deskscapes",
    num: "02",
    title: "DeskScapes",
    tagline: "Your setup deserves an audience.",
    year: "2024",
    tags: ["Web app", "eCommerce"],
    description:
      "Turning your desk into a runway. A community-led marketplace for desk accessories and setups, helping creators show off and monetise their aesthetic.",
    outcome: "Design system + marketplace MVP delivered.",
    gradient: "linear-gradient(135deg, #2d1b0e 0%, #6b3a1f 50%, #3d2b1f 100%)",
    accent: "#D4845A",
    size: "small",
    role: "Product Design + Brand",
    timeline: "8 weeks",
    deliverables: ["Brand Identity", "Design System", "Marketplace UX", "Mobile-responsive UI"],
    challenge:
      "The desk setup community was thriving on Reddit and Instagram, but had no true home. Creators were building incredible spaces but had nowhere to properly showcase them, sell their finds, or connect with others who cared. DeskScapes needed to become that platform — part gallery, part marketplace, part community.",
    approach:
      "We anchored the brand in the intersection of craft and commerce. Think MR PORTER meets Etsy for desk culture — elevated, editorial, but deeply community-first. The design system needed to scale across a marketplace (transactional, utility-focused) and a community feed (visual, expressive) without feeling fractured.",
    sections: [
      {
        label: "Brand",
        heading: "Editorial without the ego.",
        body:
          "The brand identity was built around the idea of 'considered setups' — the opposite of maximalist tech bro energy. Warm, earthy tones. A wordmark with intentional texture. Photography guidelines that favoured natural light and honest environments over studio perfection. The goal: feel like a magazine you'd actually want to live in.",
      },
      {
        label: "Product",
        heading: "Two products, one design language.",
        body:
          "The marketplace needed ruthless UX — low friction from browse to buy. The community feed needed space and expression. We bridged them with a shared component library: card patterns that flex from product listing to inspiration post, a colour system that shifts from warm neutrals (community) to sharp contrast (checkout). One language, two registers.",
      },
      {
        label: "System",
        heading: "Built for a small team to move fast.",
        body:
          "DeskScapes launched with a founding team of two. The design system was documented with this in mind — every component annotated with props, states, and 'when to use'. They needed to build fast without breaking the aesthetic. Six months post-launch, the brand is still coherent.",
      },
    ],
    stats: [
      { value: "2400", suffix: "+", label: "Waitlist sign-ups" },
      { value: "80", suffix: "+", label: "Components in design system" },
      { value: "8", suffix: " weeks", label: "Brand to launch-ready" },
      { value: "4.8", suffix: "/5", label: "Avg user satisfaction score" },
    ],
  },
  {
    id: "human-node",
    num: "03",
    title: "Human Node Project",
    tagline: "Your identity. Unbreakable.",
    year: "2023",
    tags: ["Web", "Deep tech"],
    description:
      "Bio-authentication technology securing digital identities in the Web3 ecosystem. Complex system design made accessible.",
    outcome: "Full brand identity + product UI shipped.",
    gradient: "linear-gradient(135deg, #0a1628 0%, #0d3b4f 50%, #0a2233 100%)",
    accent: "#00C9B1",
    size: "medium",
    role: "Brand + Product UX",
    timeline: "10 weeks",
    deliverables: ["Brand Strategy", "Visual Identity", "Product UI", "Onboarding Flows", "Pitch Deck Design"],
    challenge:
      "Bio-authentication for Web3 is a genuinely hard concept to communicate — let alone make feel safe and trustworthy. Human Node had powerful underlying technology but was presenting it in a way that felt academic, opaque, and cold. They needed a brand and product experience that made the invisible feel tangible.",
    approach:
      "We started by stripping the language back to first principles. Not 'decentralised biometric verification' — 'your face, your key'. From that clarity came a visual direction: organic forms meeting precision geometry, teal accents on deep navy, an identity that felt alive and intelligent rather than corporate and static.",
    sections: [
      {
        label: "Identity",
        heading: "Making the invisible feel real.",
        body:
          "The logomark is derived from a node in a network — but rendered with organic, irregular forms that reference biometric data. It sits at the intersection of human and machine. The colour palette (deep navy, electric teal, bone white) was chosen to feel trustworthy but not institutional. Tech without the sterility.",
      },
      {
        label: "UX",
        heading: "Onboarding the hardest concept in crypto.",
        body:
          "The hardest moment in the product is step one: asking someone to scan their face for the first time. We designed an onboarding flow built around progressive disclosure and clear consent — every screen answers 'what is this doing?' before it asks you to do anything. Biometric capture was treated as a moment of ritual, not a hurdle.",
      },
      {
        label: "Communication",
        heading: "A pitch deck that did the heavy lifting.",
        body:
          "The rebrand fed directly into investor materials. We redesigned the pitch deck alongside the product, ensuring the visual language was consistent and the narrative was tight. Human Node went on to raise their first institutional round three months after the rebrand shipped.",
      },
    ],
    stats: [
      { value: "10", suffix: " weeks", label: "Full rebrand + product UI" },
      { value: "3", suffix: "mo", label: "Time to institutional raise" },
      { value: "40", suffix: "%", label: "Increase in demo-to-meeting conversion" },
      { value: "1", suffix: "", label: "Coherent identity across brand + product" },
    ],
  },
  {
    id: "scan-com",
    num: "04",
    title: "Scan.com",
    tagline: "Healthcare, found faster.",
    year: "2023",
    tags: ["Brand", "Health"],
    description:
      "The world's largest search for medical scans. Connecting patients with diagnostic centres and streamlining the booking process at scale.",
    outcome: "Brand refresh across web + product touchpoints.",
    gradient: "linear-gradient(135deg, #0f1f0f 0%, #1a3a1a 50%, #0d2a1a 100%)",
    accent: "#4CAF7D",
    size: "medium",
    role: "Brand Design + Product Strategy",
    timeline: "12 weeks",
    deliverables: ["Brand Refresh", "Design System", "Web UI", "Patient Booking Flow", "Provider Portal UX"],
    challenge:
      "Scan.com had built genuine scale — thousands of diagnostic centres, millions in bookings — but the brand and product had grown organically and felt fragmented. The booking experience was confusing at exactly the moment patients needed clarity the most: when they were anxious about their health.",
    approach:
      "Healthcare design has a history of defaulting to clinical coldness or patronising warmth. We chose neither. Scan.com needed to feel like a trusted, capable friend in the system — reassuringly clear, never scary. The refresh prioritised cognitive load reduction at every step of the booking journey.",
    sections: [
      {
        label: "Brand",
        heading: "Trust through clarity.",
        body:
          "The brand refresh retained Scan.com's green equity but made it work harder. Darker, richer tones that felt serious without being alarming. Typography cleaned up into a clear hierarchy. A new photography direction that showed real people — not stock model patients — in real environments.",
      },
      {
        label: "Patient Experience",
        heading: "Reducing friction at the hardest moment.",
        body:
          "Booking a medical scan involves: understanding what you need, finding a centre near you, checking availability, understanding costs, and confirming details. We mapped every step against patient anxiety levels and redesigned the flow to surface reassurance at each peak. Drop-off rate fell 34% after launch.",
      },
      {
        label: "Provider Portal",
        heading: "The other side of the marketplace.",
        body:
          "Diagnostic centre operators were managing bookings through an interface that hadn't been touched in years. We rebuilt the provider portal around their actual workflow — bulk availability management, patient communication templates, and a dashboard that surfaced actionable information rather than raw data.",
      },
    ],
    stats: [
      { value: "34", suffix: "%", label: "Reduction in booking drop-off" },
      { value: "12", suffix: " weeks", label: "Full brand + product refresh" },
      { value: "200", suffix: "+", label: "Diagnostic centre partners" },
      { value: "1", suffix: "st", label: "Redesign in company history" },
    ],
    testimonial: {
      quote:
        "The Rulz&Co team understood that this wasn't just a visual exercise — our patients are often anxious. They designed with that empathy from the very first sketch.",
      author: "Head of Product, Scan.com",
      title: "Series B stage, 2023",
    },
  },
  {
    id: "novamind",
    num: "05",
    title: "NovaMind AI",
    tagline: "Knowledge that connects itself.",
    year: "2024",
    tags: ["AI", "App"],
    description:
      "AI-native knowledge management for research teams. Surfaces connections across documents, transcripts, and notes in real time.",
    outcome: "Agentic interface concept + investor prototype.",
    gradient: "linear-gradient(135deg, #1a0f00 0%, #4a2800 50%, #2d1800 100%)",
    accent: "#FFA500",
    size: "small",
    role: "AI Product Design + UX Strategy",
    timeline: "4 weeks",
    deliverables: ["Agentic Interface Design", "Interaction Model", "Investor Prototype", "Design Principles"],
    challenge:
      "Research teams were drowning in information they couldn't connect. NovaMind's underlying AI was genuinely powerful at surfacing relationships between documents — but the interface treated it like a search engine. The product needed a UX that reflected what the AI was actually doing: thinking alongside you.",
    approach:
      "We designed what we called 'ambient intelligence' — an interface where the AI's contributions appear as a collaborator in the workspace, not a result list. Connections surface as you work, not after you've asked. The interaction model was built around trust and legibility: every AI action is explainable, every suggestion is dismissible.",
    sections: [
      {
        label: "Model",
        heading: "Designing for a new interaction paradigm.",
        body:
          "Most AI tools present intelligence as output. NovaMind needed intelligence as presence — always working, surfacing relevant context as you navigate your workspace. We designed a 'knowledge thread' sidebar that updates in real time, connecting what you're reading to everything you've ever stored. Not search. Resonance.",
      },
      {
        label: "Trust",
        heading: "Explainability as a design principle.",
        body:
          "Every AI suggestion comes with a visible 'why' — a one-line explanation of the connection it found. This wasn't just good design practice; it was essential for research teams who need to validate what they're seeing. We also designed explicit confidence indicators — the AI shows you when it's certain and when it's speculating.",
      },
      {
        label: "Prototype",
        heading: "Built to raise.",
        body:
          "The deliverable was an investor-ready interactive prototype, not a static deck. We built it in Framer with realistic AI responses scripted to show the 'magic moment' — the point where a user sees an unexpected but instantly valuable connection surface. That prototype became the centrepiece of NovaMind's seed round presentations.",
      },
    ],
    stats: [
      { value: "4", suffix: " weeks", label: "Strategy to prototype" },
      { value: "1", suffix: "", label: "Core magic moment designed" },
      { value: "12", suffix: "+", label: "Investor demos run" },
      { value: "3", suffix: "", label: "Design principles that guide everything" },
    ],
  },
  {
    id: "flux",
    num: "06",
    title: "Flux Protocol",
    tagline: "Data infrastructure, finally designed.",
    year: "2024",
    tags: ["Web", "Deep tech"],
    description:
      "Decentralised data exchange layer for enterprise AI pipelines. Designed for the operators who move data at scale.",
    outcome: "Product strategy + full design system.",
    gradient: "linear-gradient(135deg, #050510 0%, #0d0d2b 50%, #080820 100%)",
    accent: "#4DABF7",
    size: "large",
    role: "Product Strategy + Design System",
    timeline: "14 weeks",
    deliverables: ["Product Strategy", "Information Architecture", "Design System", "Dashboard UI", "Developer Docs UX"],
    challenge:
      "Enterprise data infrastructure products are consistently one of the worst-designed categories in software. Flux Protocol had built genuinely powerful technology for AI data pipelines — but the interface was inaccessible to everyone except the engineers who built it. They needed to expand to operations teams without alienating developers.",
    approach:
      "We started with a stakeholder audit across three user types: data engineers (builders), ops managers (monitors), and finance leads (budget holders). Each had completely different success metrics. The product strategy defined a layered architecture — same underlying data, three distinct surfaces — with a shared design system that maintained coherence.",
    sections: [
      {
        label: "Strategy",
        heading: "Three users. One product.",
        body:
          "The core strategic insight was that Flux Protocol was trying to serve three incompatible mental models with one interface. Engineers wanted raw control. Ops wanted status and alerts. Finance wanted cost and usage. We designed a permission-based view system where each role gets an interface calibrated to their actual job, pulling from the same data layer.",
      },
      {
        label: "System",
        heading: "A design system for extreme density.",
        body:
          "Infrastructure dashboards live at the high-density end of the spectrum — lots of data, small screens, time-critical decisions. The design system was built around 8px grid precision, a monospaced secondary typeface for data values, and a status colour system that works under the pressure of a 2am incident. Every component stress-tested at 80% data density.",
      },
      {
        label: "Developer Experience",
        heading: "Docs as product.",
        body:
          "Developer documentation is often treated as an afterthought. For Flux Protocol, we designed the docs UX as a first-class product surface — searchable, navigable by role, with embedded interactive examples. The docs site became one of the primary acquisition channels within three months of launch.",
      },
    ],
    stats: [
      { value: "14", suffix: " weeks", label: "Strategy to shipped system" },
      { value: "3", suffix: "", label: "User types, one coherent product" },
      { value: "120", suffix: "+", label: "Design system components" },
      { value: "60", suffix: "%", label: "Reduction in onboarding time" },
    ],
  },
  {
    id: "meridian",
    num: "07",
    title: "Meridian Health",
    tagline: "Your health data, working for you.",
    year: "2023",
    tags: ["Brand", "Health"],
    description:
      "Preventative health platform for busy professionals. Transforms complex biomarker data into clear, actionable daily guidance.",
    outcome: "Brand identity + onboarding UX.",
    gradient: "linear-gradient(135deg, #0d1f14 0%, #193d28 50%, #0f2b1c 100%)",
    accent: "#69DB7C",
    size: "medium",
    role: "Brand Identity + Product UX",
    timeline: "7 weeks",
    deliverables: ["Brand Identity", "Onboarding UX", "Dashboard Design", "Marketing Site"],
    challenge:
      "Preventative health startups face a brutal challenge: the people who need them most are the least likely to engage. Meridian's audience — high-performing professionals — had the means but not the bandwidth. The product needed to demand almost nothing and deliver immediate, undeniable value within the first session.",
    approach:
      "We designed around the concept of 'effortless insight' — a product that does the cognitive work so the user doesn't have to. The onboarding flow took biomarker complexity (HRV, cortisol, sleep staging) and translated it into three plain-English priorities per day. The brand was built to feel premium, calm, and earned — not clinical, not wellness-woo.",
    sections: [
      {
        label: "Brand",
        heading: "The anti-wellness wellness brand.",
        body:
          "Most health brands sit in one of two camps: cold clinical white or warm pastel optimism. Meridian needed to occupy a third space: intelligent, grounded, serious. Deep forest greens. Clean sans-serif with tight spacing. Photography that showed people in flow states, not posed wellness moments. A brand that respected its audience's intelligence.",
      },
      {
        label: "Onboarding",
        heading: "From blood test to breakthrough in 90 seconds.",
        body:
          "The onboarding flow handles one of the highest-friction moments in health tech: interpreting your first results. We designed a 'welcome reveal' — an animated sequence that takes raw biomarker values and transforms them, in real time, into your three personal priorities. It's theatrical in the best way. Users report it as the moment they understood the product.",
      },
      {
        label: "Dashboard",
        heading: "A daily check-in, not a data dump.",
        body:
          "The main dashboard was designed to be the first thing users look at each morning — deliberately light-touch, deliberately actionable. One score. Three actions. One trend. Everything else is secondary. We designed progressive disclosure patterns that let users go deeper when they want to, but never forces them to.",
      },
    ],
    stats: [
      { value: "7", suffix: " weeks", label: "Brand to launch-ready" },
      { value: "90", suffix: "s", label: "Onboarding completion time" },
      { value: "78", suffix: "%", label: "Day-7 retention (vs 31% industry avg)" },
      { value: "4.9", suffix: "/5", label: "App store rating at launch" },
    ],
    testimonial: {
      quote:
        "We came in thinking we needed a visual refresh. We left with a product philosophy. That's the level Rulz&Co operates at.",
      author: "Co-founder, Meridian Health",
      title: "Seed stage, 2023",
    },
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getAdjacentProjects(id: string): {
  prev: Project | null;
  next: Project | null;
} {
  const idx = projects.findIndex((p) => p.id === id);
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
  };
}
