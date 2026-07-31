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
  coverImage?: string;
  coverImageAlt?: string;
  coverImagePosition?: string;
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
    coverImage: "/images/work/extract/cover.png",
    coverImageAlt:
      "Extract interface fields lifted above an invoice verification workspace.",
    coverImagePosition: "center",
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
    id: "margin",
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
        image: "/images/work/margin/idle.jpg",
        imageAlt:
          "Margin idle state with an empty ask bar above the wholesale ledger.",
        imageFit: "contain",
      },
      {
        number: "02",
        label: "Reading",
        caption:
          "The system works through the data pass by pass, making progress visible without a generic spinner.",
        image: "/images/work/margin/reading.jpg",
        imageAlt:
          "Margin reading state highlighting one month across the chart and ledger.",
        imageFit: "contain",
      },
      {
        number: "03",
        label: "The one action",
        caption:
          "One action sits at the top of the sheet in plain language, beside the number that drives it.",
        image: "/images/work/margin/one-action.jpg",
        imageAlt:
          "Margin action state recommending a wholesale price change beside the gross-margin decline.",
        imageFit: "cover",
      },
      {
        number: "04",
        label: "Margin note linked",
        caption:
          "A hairline connects the claim to the exact months in the chart that support it.",
        lead: true,
        image: "/images/work/margin/margin-note-linked.jpg",
        imageAlt:
          "Margin note connected by a hairline to the supporting months in the chart.",
        imageFit: "cover",
      },
      {
        number: "05",
        label: "Show the working",
        caption:
          "The recommendation expands into the calculation, comparisons, and figures behind it.",
        image: "/images/work/margin/show-working.jpg",
        imageAlt:
          "Margin trace expanded to show the calculations behind the recommendation.",
        imageFit: "cover",
      },
      {
        number: "06",
        label: "Not sure",
        caption:
          "Uncertainty is attached to the specific claim the system cannot confirm, with a reason.",
        image: "/images/work/margin/not-sure.jpg",
        imageAlt:
          "Margin uncertainty state linking an unconfirmed June cost claim to the chart.",
        imageFit: "cover",
      },
      {
        number: "07",
        label: "Act or dismiss",
        caption:
          "The person decides whether to act or dismiss. Nothing commits on its own.",
        image: "/images/work/margin/act-or-dismiss.jpg",
        imageAlt:
          "Margin decision state with Accept and Dismiss controls beneath the recommended action.",
        imageFit: "cover",
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
    coverImage: "/images/work/margin/cover.png",
    coverImageAlt:
      "Descending forest-green steps beside a margin reduction marker.",
    coverImagePosition: "center",
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
    id: "draft",
    num: "03",
    title: "Draft",
    tagline: "An AI writes the reply. It cannot send what it cannot back up.",
    year: "2026",
    tags: ["AI", "Support"],
    description:
      "A self-initiated support interface that marks every claim in an AI-written reply and holds send until each one can be backed up.",
    outcome: "Self-initiated claim-level send-gate demo",
    projectType: "Self-initiated product demo",
    interfaceProof:
      "This pattern belongs anywhere AI writes something a person is accountable for: support replies, clinical letters, dispute responses, and outbound sales. The draft is easy. The gate is the product.",
    proofPoints: [
      "Move confidence from the whole reply to each individual claim",
      "Tie unsupported language to the irreversible action",
      "Record the person who clears and sends the reply",
    ],
    gallery: [
      {
        number: "01",
        label: "Queue",
        caption:
          "Tickets wait without AI commentary until a person opens the work.",
      },
      {
        number: "02",
        label: "The message",
        caption:
          "The customer’s words stay at reading size and in their own voice.",
      },
      {
        number: "03",
        label: "Drafting",
        caption:
          "The reply builds in the brand’s voice, visibly separate from the customer.",
      },
      {
        number: "04",
        label: "Marked",
        caption:
          "Every claim is underlined: solid where sourced, dashed where unsupported.",
      },
      {
        number: "05",
        label: "Gate closed",
        caption:
          "The send gate stays shut and names the single unsupported claim holding it.",
        lead: true,
      },
      {
        number: "06",
        label: "Resolving the claim",
        caption:
          "The agent rewrites the sentence or confirms it against an approved source.",
      },
      {
        number: "07",
        label: "Cleared",
        caption:
          "The gate gains solid weight, the agent sends, and the approval is logged.",
      },
    ],
    builtWith: [
      "Queue",
      "Thread",
      "Composer",
      "ClaimMark",
      "SourceCard",
      "SendGate",
      "ErrorState",
    ],
    ctaLine: "Sending AI-written messages to real customers. Let’s talk.",
    gradient:
      "linear-gradient(135deg, #0b0909 0%, #191313 55%, #2b1915 100%)",
    accent: "#D97A5E",
    size: "large",
    role: "Agentic Interface Design + Build",
    timeline: "Ongoing",
    deliverables: [
      "Claim-level Evidence",
      "Source-linked Drafting",
      "Send Gate",
      "Approval Log",
      "Working Prototype",
    ],
    challenge:
      "Support tools often score a whole AI draft with one confidence number. That tells an agent nothing about the plausible, unsupported sentence buried among claims that are safe to send. Draft marks every claim separately: solid where policy supports it, dashed where it does not.",
    approach:
      "Draft moves the signal down to the sentence and connects it to the irreversible action. The send bar is not a button that merely turns green. It stays deliberately closed, names the unsupported claim, and refuses the keystroke until a person rewrites or confirms it.",
    sections: [
      {
        label: "Claim-level proof",
        heading: "The risky sentence looks exactly like the safe ones.",
        body:
          "Ticket TC-19442 asks Thornbury Cycles to replace a Vantage 40 wheelset before the customer leaves on 2 August. The draft correctly cites 12-month bearing cover in policy section 4, the photo requirement in section 4.2, and a three-to-five-day dispatch window in section 6. But its promise that Thornbury—not the Bristol shipping partner—will handle the warranty directly has no source.",
      },
      {
        label: "Irreversible action",
        heading: "The gate is shut, not broken.",
        body:
          "Solid and dashed ClaimMarks make the difference visible inside the reply, then SendGate carries that evidence into the final action. It identifies the one sentence holding the message, explains what is missing, and will not accept the send shortcut while the unsupported promise remains.",
      },
      {
        label: "Human control",
        heading: "Resolution changes the state—and records who did it.",
        body:
          "The agent can rewrite the sentence or confirm it against an approved source. Only then does the gate settle into solid weight and allow the reply to leave. The final state logs who cleared the claim and sent the message, keeping accountability with the person making the decision.",
      },
    ],
    stats: [],
  },
  {
    id: "brief",
    num: "04",
    title: "Brief",
    tagline: "A research task that takes ninety seconds, and never once looks stuck.",
    year: "2026",
    tags: ["AI", "Research"],
    description:
      "A self-initiated research interface where sources arrive as they are read, aligned to the passages they support, so the wait becomes visible work.",
    outcome: "Self-initiated visible-research product demo",
    projectType: "Self-initiated product demo",
    interfaceProof:
      "This pattern belongs to any AI task long enough for a user to doubt it: deep research, batch analysis, document generation, and multi-step retrieval. The output is not the hard part. The ninety seconds before it are.",
    proofPoints: [
      "Turn a ninety-second wait into visible research activity",
      "Keep every source aligned with the passage it supports",
      "Name slow and failed sources where they change the answer",
    ],
    gallery: [
      {
        number: "01",
        label: "Ask",
        caption: "Bare ground and one question. There is no document yet.",
      },
      {
        number: "02",
        label: "Gathering",
        caption:
          "Sources arrive in the rail before a word of the brief is written.",
      },
      {
        number: "03",
        label: "Mid-flight",
        caption:
          "Prose streams onto the page while the source rail fills alongside it.",
        lead: true,
      },
      {
        number: "04",
        label: "Aligned",
        caption:
          "A finished section keeps its sources locked level with the sentences they support.",
      },
      {
        number: "05",
        label: "Slow source",
        caption:
          "A source running long is named and timed instead of hidden behind progress.",
      },
      {
        number: "06",
        label: "Gap marked",
        caption:
          "A failed source leaves a visible gap exactly where its evidence would have contributed.",
      },
      {
        number: "07",
        label: "Complete",
        caption:
          "The full brief retains its evidence apparatus and waits for human sign-off.",
      },
    ],
    builtWith: [
      "AskField",
      "Page",
      "SourceRail",
      "SourceEntry",
      "Alignment",
      "GapMark",
      "ErrorState",
    ],
    ctaLine: "Running AI tasks your users have to wait for. Let’s talk.",
    gradient:
      "linear-gradient(135deg, #090b10 0%, #131923 55%, #202b3a 100%)",
    accent: "#91A7D0",
    size: "large",
    role: "Agentic Interface Design + Build",
    timeline: "Ongoing",
    deliverables: [
      "Visible Research Pass",
      "Source Rail",
      "Evidence Alignment",
      "Gap Handling",
      "Human Sign-off",
    ],
    challenge:
      "AI research tools ask a question, show a spinner, and eventually return a finished document with its sources collapsed at the bottom. The user spends the longest part of the task staring at nothing, then has to reconstruct which source supports which claim.",
    approach:
      "Brief solves the wait with content instead of animation. Sources land in a rail the moment each one is read, before prose exists, then remain aligned with the passages they support. Slow and failed sources keep their names and timing, so incomplete evidence stays visible in the answer it changes.",
    sections: [
      {
        label: "Visible progress",
        heading: "The rail fills before the page does.",
        body:
          "Pennine Freight has fourteen vans and one question: “Should we switch the fleet to electric in 2027?” Brief gathers five sources in view. Each SourceEntry appears as it is read, so by the time the first sentence starts streaming the user has already seen what the recommendation will be built from.",
      },
      {
        label: "Honest waiting",
        heading: "A slow source has a name. A failed source leaves a mark.",
        body:
          "Four sources are read and one paywalled source cannot be opened. Three return in under four seconds; one takes twenty-two. The rail names and times the delay instead of smoothing it into a false progress bar. GapMark carries the unread source into the document at the point where route-level charging evidence is missing.",
      },
      {
        label: "Recommendation",
        heading: "Incomplete evidence changes the answer.",
        body:
          "Electric vans cost £8,000 to £12,000 more up front, less a grant of up to £2,500. Depot charging cuts running costs from 16–19p to 7–9p per mile—£25,000 to £30,000 a year across the fleet—but only covers routes under 140 miles. With four regular routes beyond that and a 3.4–4.8-year payback range, Brief recommends converting the ten depot-based vans in 2027 and holding the four long-route vans until charging is confirmed.",
      },
    ],
    stats: [],
  },
  {
    id: "watch",
    num: "05",
    title: "Watch",
    tagline: "An agent working, on a track you can stop.",
    year: "2026",
    tags: ["AI", "Agents"],
    description:
      "A self-initiated agent-control interface that lays a run out on a time axis and puts intervention controls on its live edge.",
    outcome: "Self-initiated live-edge intervention demo",
    projectType: "Self-initiated product demo",
    interfaceProof:
      "This pattern belongs to any agent that acts on a company’s behalf: procurement, ticket resolution, outbound sequences, data pipelines, and deployment. The agent working is not the product. The moment someone can stop it is.",
    proofPoints: [
      "Separate completed work from the agent’s remaining plan",
      "Put stop and redirect controls directly on the live edge",
      "Use colour only where a person changed the run",
    ],
    gallery: [
      {
        number: "01",
        label: "Planned",
        caption:
          "Before the run, every intended step is laid out to the right of the live edge.",
      },
      {
        number: "02",
        label: "Running",
        caption:
          "The edge advances with completed work behind it and the remaining plan ahead.",
      },
      {
        number: "03",
        label: "Long step",
        caption:
          "The supplier price fetch extends across the time axis as it runs.",
      },
      {
        number: "04",
        label: "Stopped",
        caption:
          "The edge holds, the reason is stated, and the intervention controls sit on the line.",
        lead: true,
      },
      {
        number: "05",
        label: "Redirected",
        caption:
          "The human change is applied and the planned steps ahead of the edge rewrite to match.",
      },
      {
        number: "06",
        label: "Step failed",
        caption:
          "A timed-out supplier stays marked on the track while the run continues.",
      },
      {
        number: "07",
        label: "Complete",
        caption:
          "The finished run shows two marks of human colour and an approval gate before submission.",
      },
    ],
    builtWith: [
      "Board",
      "Track",
      "Step",
      "LiveEdge",
      "Intervention",
      "GapMark",
      "ErrorState",
    ],
    ctaLine: "Running agents that act on your behalf. Let’s talk.",
    gradient:
      "linear-gradient(135deg, #090909 0%, #161616 55%, #2b211d 100%)",
    accent: "#F08A5D",
    size: "large",
    role: "Agentic Interface Design + Build",
    timeline: "Ongoing",
    deliverables: [
      "Run Plan",
      "Live Edge",
      "Intervention Controls",
      "Failure Recovery",
      "Approval Gate",
    ],
    challenge:
      "Agent tools usually show a scrolling log or a spinner, then a result. Neither tells a person what the agent is about to do or creates a place to stop it before it acts. By the time a log explains the problem, the consequential step has already happened.",
    approach:
      "Watch lays the run out on a time axis. Everything left of LiveEdge has happened; everything right remains a plan. Stop and redirect controls live on that edge, while colour appears only where a person touched the run. A finished board shows both autonomy and the exact moments oversight changed the outcome.",
    sections: [
      {
        label: "Plan ahead",
        heading: "The live edge separates fact from intent.",
        body:
          "Halstead Joinery runs a ten-step weekly materials reorder. The agent reads stock, checks open orders against forecast, finds four items below reorder point, fetches prices from three suppliers, compares them with last quarter, and drafts the purchase orders. Track makes that whole plan visible before each step runs.",
      },
      {
        label: "Intervention",
        heading: "The controls sit where the decision is.",
        body:
          "Oak veneer from Calder Timber rises from £34.20 to £41.75 a sheet—up 22%. The agent stops at the live edge and asks. A person redirects that line to Wexford Panels at £36.90, and the planned comparison and purchase-order steps to the right of the edge update before anything continues.",
      },
      {
        label: "Oversight",
        heading: "Human touch is the only colour on the board.",
        body:
          "One supplier’s price API times out. GapMark keeps the failed step on the track while the run continues with two suppliers instead of collapsing. The complete board remains monochrome except for that handled gap and the redirect, then ends at an approval gate. Nobody has to infer where oversight mattered, and nothing is submitted on the agent’s authority alone.",
      },
    ],
    stats: [],
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
