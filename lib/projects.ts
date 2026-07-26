export type Project = {
  id: string;
  num: string;
  title: string;
  tagline: string;
  year: string;
  tags: string[];
  description: string;
  outcome: string;
  interfaceProof: string;
  proofPoints: string[];
  projectType?: string;
  gallery?: {
    number: string;
    label: string;
    caption: string;
    lead?: boolean;
    image?: string;
    imageAlt?: string;
    imageFit?: "cover" | "contain";
  }[];
  builtWith?: string[];
  ctaLine?: string;
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
    id: "extract",
    num: "01",
    title: "Extract",
    tagline: "Turn a messy document into verified, structured data.",
    year: "2026",
    tags: ["AI", "Web"],
    description:
      "Turn a messy document into verified, structured data—with every field linked to the exact place it came from.",
    outcome: "Self-initiated click-to-source product demo",
    projectType: "Self-initiated product demo",
    interfaceProof:
      "Extract is direct proof of the interface layer Rulz&Co wants to own. It makes an AI system’s work visible, marks uncertainty before it becomes an error, and keeps the person in control from upload to verified output.",
    proofPoints: [
      "Every extracted field links back to its exact source",
      "Low-confidence output becomes a visible review queue",
      "The user corrects the draft before anything is exported",
    ],
    gallery: [
      {
        number: "01",
        label: "Upload",
        caption: "A single drop zone. No form and no fields to complete first.",
        image: "/images/work/extract/upload.png",
        imageAlt:
          "Extract upload screen with one invoice input and three document suggestions.",
      },
      {
        number: "02",
        label: "Working",
        caption:
          "A dedicated working state says what the system is doing instead of hiding the wait behind a generic spinner.",
        image: "/images/work/extract/working.png",
        imageAlt:
          "Extract processing screen showing that invoice fields are being extracted.",
      },
      {
        number: "03",
        label: "Extracted, side by side",
        caption:
          "The source document and structured fields remain in one verification view.",
        image: "/images/work/extract/side-by-side.png",
        imageAlt:
          "Extract verification screen with an invoice beside its structured fields.",
        imageFit: "contain",
      },
      {
        number: "04",
        label: "Click to verify",
        caption:
          "Select a field and the exact source passage highlights. This is the core interaction.",
        lead: true,
        image: "/images/work/extract/click-to-verify.png",
        imageAlt:
          "A citation trace connecting an extracted invoice date to the exact source line.",
      },
      {
        number: "05",
        label: "Low confidence, flagged",
        caption:
          "Uncertain fields are marked in amber with a plain-language label, not colour alone.",
        image: "/images/work/extract/low-confidence.png",
        imageAlt:
          "A low-confidence VAT field marked Check this and linked to its source value.",
        imageFit: "contain",
      },
      {
        number: "06",
        label: "Correct in place",
        caption:
          "A wrong value can be edited directly in the extraction grid before approval.",
        image: "/images/work/extract/correct-in-place.png",
        imageAlt:
          "The VAT amount being edited directly inside the extraction grid.",
        imageFit: "contain",
      },
      {
        number: "07",
        label: "Done",
        caption:
          "The approved extraction is saved with the supplier, amount, and invoice reference visible.",
        image: "/images/work/extract/done.png",
        imageAlt:
          "Extract completion screen confirming the invoice was approved and saved.",
        imageFit: "contain",
      },
    ],
    builtWith: [
      "AIInput",
      "Citation",
      "ConfidenceTag",
      "ExtractionGrid",
      "DraftReview",
      "ErrorState",
    ],
    ctaLine: "Have a document workflow like this? Let’s talk.",
    gradient:
      "linear-gradient(135deg, #0A0A0B 0%, #141416 55%, #2A251C 100%)",
    accent: "#C9A96A",
    size: "large",
    role: "Agentic Interface Design + Build",
    timeline: "Ongoing",
    deliverables: [
      "Interaction Model",
      "Source-linked Extraction",
      "Confidence States",
      "Review + Correction",
      "Working Prototype",
    ],
    challenge:
      "Most document AI hides its work. It reads a file and returns structured data, but the user cannot see where a value came from or which fields deserve a second look. In document-heavy workflows, an answer without a fast path to verification is not usable evidence.",
    approach:
      "Extract is designed around verification rather than generation. The interface makes each system state explicit, then brings the source and extracted fields together for review. Every field carries a citation and confidence state, low-confidence values move to the front of the queue, and nothing is saved until the person has checked or corrected the draft.",
    sections: [
      {
        label: "Citation",
        heading: "The source never leaves the answer.",
        body:
          "The core view keeps the document and the ExtractionGrid side by side. Selecting any field activates its Citation and highlights the exact passage that produced it. Verification becomes one click, not a manual search through pages.",
      },
      {
        label: "System state",
        heading: "Working is visible, not a spinner.",
        body:
          "Upload moves into a dedicated working state that acknowledges the file and says exactly what is happening: Extract is finding the key fields. The completion state reports how many fields were found and how many need a check, giving the wait a clear beginning and end.",
      },
      {
        label: "Human control",
        heading: "Uncertainty becomes the review queue.",
        body:
          "ConfidenceTag marks high and low certainty in words as well as colour. Low-confidence fields are surfaced before the user has to find the mistake, then DraftReview lets them correct the value in place and approve the structured output before export.",
      },
    ],
    stats: [],
  },
  {
    id: "rinkl",
    num: "02",
    title: "Margin",
    tagline:
      "A finance dashboard that names one thing to do, and shows its working.",
    year: "2026",
    tags: ["AI", "Fintech"],
    description:
      "A finance dashboard that names one thing to do, and shows its working.",
    outcome: "Self-initiated traceable data-action demo",
    projectType: "Self-initiated product demo",
    interfaceProof:
      "This is the pattern behind any product where AI reads data and a person has to act on it: sales reporting, ops dashboards, portfolio reviews, and clinical metrics. The chart is not the answer. The action is—and it has to be traceable.",
    proofPoints: [
      "Turn a dashboard into one traceable next action",
      "Tie every claim to exact months and figures",
      "Keep uncertainty and commitment under human control",
    ],
    gallery: [
      {
        number: "01",
        label: "Idle",
        caption:
          "The figures are laid out as a ledger. No AI commentary yet—just one ask bar.",
      },
      {
        number: "02",
        label: "Reading",
        caption:
          "The system works through the data pass by pass, making progress visible without a generic spinner.",
      },
      {
        number: "03",
        label: "The one action",
        caption:
          "One action sits at the top of the sheet in plain language, beside the number that drives it.",
      },
      {
        number: "04",
        label: "Margin note linked",
        caption:
          "A hairline connects the claim to the exact months in the chart that support it.",
        lead: true,
      },
      {
        number: "05",
        label: "Show the working",
        caption:
          "The recommendation expands into the calculation, comparisons, and figures behind it.",
      },
      {
        number: "06",
        label: "Not sure",
        caption:
          "Uncertainty is attached to the specific claim the system cannot confirm, with a reason.",
      },
      {
        number: "07",
        label: "Act or dismiss",
        caption:
          "The person decides whether to act or dismiss. Nothing commits on its own.",
      },
    ],
    builtWith: [
      "AskBar",
      "ActionCard",
      "MarginNote",
      "LinkedChart",
      "Certainty",
      "Trace",
      "ErrorState",
    ],
    ctaLine: "Have data your team looks at but doesn’t act on. Let’s talk.",
    gradient:
      "linear-gradient(135deg, #090b09 0%, #141914 55%, #252016 100%)",
    accent: "#A8C77A",
    size: "large",
    role: "Agentic Interface Design + Build",
    timeline: "Ongoing",
    deliverables: [
      "Action Model",
      "Linked Data Evidence",
      "Visible Reasoning",
      "Certainty States",
      "Working Prototype",
    ],
    challenge:
      "Dashboards show numbers. They rarely tell a person what those numbers mean or what to do next. Margin reads a small business’s monthly figures and states one action, with every claim tied to the exact part of the chart it came from.",
    approach:
      "Most AI added to data produces a paragraph beside a graph. Margin makes the recommendation part of the chart instead. The statement sits in its margin, a trace links it to the supporting months and figures, the working can be expanded, and uncertainty stays attached to the specific claim the system cannot confirm.",
    sections: [
      {
        label: "Trace",
        heading: "The claim and the chart share one surface.",
        body:
          "The hero interaction is a MarginNote connected to a LinkedChart by a single hairline. Reading the recommendation highlights the exact months behind it, removing the manual search that normally separates an AI statement from its evidence.",
      },
      {
        label: "Working",
        heading: "Revenue is rising. Margin is collapsing.",
        body:
          "Cobble Lane Coffee Roasters appears to be having a good year across January to June 2026. But green coffee cost per kilo rises from £6.80 to £8.05 while the wholesale bag price stays fixed. Show the working reveals the consequence: gross margin falls from 50.5% to 34.7%.",
      },
      {
        label: "Human control",
        heading: "Uncertainty is local. The decision stays human.",
        body:
          "Certainty flags the exact part of a recommendation the system cannot establish and explains why, rather than weakening the whole answer with a vague hedge. The final state offers act or dismiss. Margin can recommend; it cannot commit.",
      },
    ],
    stats: [],
  },
  {
    id: "deskscapes",
    num: "03",
    title: "DeskScapes",
    tagline: "Your setup deserves an audience.",
    year: "2024",
    tags: ["Web app", "eCommerce"],
    description:
      "An intent-led discovery system for a creator marketplace, connecting how people explore setups with how products are found.",
    outcome: "Discovery architecture + marketplace system",
    interfaceProof:
      "DeskScapes was not an AI product. The relevant proof is structural: turning ambiguous intent into a navigable system, giving people useful routes through complexity, and keeping discovery understandable as the catalogue grows.",
    proofPoints: [
      "Translate fuzzy intent into visible pathways",
      "Connect exploration with a concrete user goal",
      "Build one interface language across different modes",
    ],
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
          "DeskScapes had a founding team of two, so the system had to carry decisions the team could not revisit every week. Each component documented its states, properties, and purpose, giving new marketplace and community flows a shared interface logic.",
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
    num: "04",
    title: "Human Node Project",
    tagline: "Your identity. Unbreakable.",
    year: "2023",
    tags: ["Web", "Deep tech"],
    description:
      "A multi-step verification flow that turns dense identity security into a clear, low-drop onboarding experience.",
    outcome: "Trust-first onboarding + product interface",
    interfaceProof:
      "Human Node was not an agentic system. It demonstrates the same trust work agentic interfaces require: explain an unfamiliar process, ask for consequential input at the right moment, and show enough system state for a person to continue with confidence.",
    proofPoints: [
      "Explain consequential actions before asking for consent",
      "Make invisible system activity legible",
      "Design trust across a multi-step workflow",
    ],
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
          "The product logic also had to survive outside the product. We carried the same plain-language explanation, trust cues, and visual hierarchy into investor materials so the underlying system could be understood without falling back on technical shorthand.",
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
    num: "05",
    title: "Scan.com",
    tagline: "Healthcare, found faster.",
    year: "2023",
    tags: ["Brand", "Health"],
    description:
      "Search, intake, and routing for a medical scan platform—making a high-friction path from patient need to diagnostic centre feel clear.",
    outcome: "Search, intake + routing redesign",
    interfaceProof:
      "Scan.com was not an agentic product. It is evidence of the workflow design beneath good agentic experiences: gather the right information, route it through a complex system, expose progress, and help a person recover when the path changes.",
    proofPoints: [
      "Turn a complex service into a clear sequence",
      "Reduce uncertainty at high-stakes moments",
      "Connect user intent to the right operational route",
    ],
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
          "Booking a medical scan means understanding what you need, finding a centre, checking availability, reviewing costs, and confirming clinical details. We mapped that chain against moments of uncertainty and designed the interface to explain what was happening, what came next, and where the person still had a choice.",
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
    num: "06",
    title: "NovaMind AI",
    tagline: "Knowledge that connects itself.",
    year: "2024",
    tags: ["AI", "App"],
    description:
      "An agentic research workspace where every connection explains why it appeared, what supports it, and how confident the system is.",
    outcome: "Agentic interaction model + working prototype",
    interfaceProof:
      "NovaMind explores a direct agentic-interface problem: how an AI can work alongside a researcher without becoming an opaque stream of suggestions. The design makes contribution, evidence, confidence, and dismissal part of the interaction model.",
    proofPoints: [
      "Show why the agent surfaced a connection",
      "Keep evidence and confidence close to the output",
      "Let the person accept, dismiss, or investigate",
    ],
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
          "The deliverable was an interactive prototype rather than a static deck. Realistic responses demonstrated the critical moment: a useful connection appears, the interface explains why, and the researcher can inspect the evidence before deciding what to do with it.",
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
    num: "07",
    title: "Flux Protocol",
    tagline: "Data infrastructure, finally designed.",
    year: "2024",
    tags: ["Web", "Deep tech"],
    description:
      "A role-aware operating interface for complex AI data pipelines, translating system activity into usable controls.",
    outcome: "Role-aware product strategy + interface system",
    interfaceProof:
      "Flux shows how one technical system needs different interfaces for the people building, monitoring, and funding it. That same separation of roles is essential when agents act across tools, permissions, and operational boundaries.",
    proofPoints: [
      "Expose the right system state for each role",
      "Separate monitoring, control, and commercial views",
      "Design dense information for time-critical decisions",
    ],
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
          "Developer documentation is often treated as an afterthought. For Flux Protocol, we designed it as a first-class product surface: searchable, navigable by role, and connected to interactive examples. The same language linked system concepts in the interface, controls, and implementation guidance.",
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
    num: "08",
    title: "Meridian Health",
    tagline: "Your health data, working for you.",
    year: "2023",
    tags: ["Brand", "Health"],
    description:
      "A health interface that turns dense biomarker signals into a small number of clear, human decisions.",
    outcome: "Signal-to-action model + onboarding",
    interfaceProof:
      "Meridian was not an agentic product. Its relevance is in translation: compressing complex system output into a small number of actions while preserving the path to deeper evidence when a person needs it.",
    proofPoints: [
      "Prioritise action over a wall of system output",
      "Use progressive disclosure without hiding evidence",
      "Design a repeatable rhythm for human decisions",
    ],
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
          "The onboarding flow handles one of the highest-friction moments in health tech: interpreting a first set of results. We designed a staged reveal that turns raw biomarker values into three priorities, while keeping the supporting data available for anyone who wants to understand the recommendation.",
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
