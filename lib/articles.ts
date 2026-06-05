export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string };

export type Article = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  gradient: string;
  accent: string;
  featured?: boolean;
  author: { name: string; role: string };
  content: ContentBlock[];
};

export const CATEGORIES = [
  "All",
  "AI & Design",
  "Founders",
  "Design",
  "Industry",
  "Studio Notes",
] as const;

const DEFAULT_AUTHOR = { name: "Rulz&Co Editorial", role: "Studio Team" };

export const articles: Article[] = [
  {
    id: "ai-design-convergence",
    category: "AI & Design",
    title: "The Convergence Nobody Is Talking About",
    excerpt:
      "AI isn't replacing designers. It's revealing which designers were never really designing. The tools are a mirror — and not everyone likes what they see.",
    date: "5 Jun 2025",
    readTime: "5 min",
    featured: true,
    gradient: "linear-gradient(135deg, #0f0c29 0%, #302070 50%, #24243e 100%)",
    accent: "#8b7cf8",
    author: DEFAULT_AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "For the last eighteen months, we've watched the design world stage an elaborate panic about generative AI. The fear has a shape that's now familiar: AI will replace designers, design will become a commodity, taste will lose its premium. The fear is wrong — but only because the reality is more uncomfortable.",
      },
      {
        type: "paragraph",
        text: "AI isn't replacing designers. It's revealing the difference between people who were doing design and people who were producing deliverables. The tools have always been a mirror. The mirror just got sharper.",
      },
      {
        type: "heading",
        text: "What design actually is",
      },
      {
        type: "paragraph",
        text: "If your job is to translate a brief into a Figma file, you're in trouble. If your job is to figure out what the brief should have been, you're not. The distance between those two roles has always existed; AI has simply collapsed the time it takes to discover which one you're in.",
      },
      {
        type: "quote",
        text: "The model can interpolate between every design pattern that has ever existed. It cannot extrapolate to the one that should exist next.",
      },
      {
        type: "paragraph",
        text: "What's left for designers isn't a smaller scope of work. It's a different one. Define the problem the model can't see. Hold the line on the brief. Catch the second-order consequences. Disagree with the obvious answer when the obvious answer is wrong.",
      },
      {
        type: "heading",
        text: "Where this goes",
      },
      {
        type: "paragraph",
        text: "The studios that thrive over the next two years will not be the ones using AI the most aggressively. They'll be the ones whose judgment is most worth multiplying. AI raises the floor, but it also raises the bar on what the floor is supposed to enable.",
      },
      {
        type: "callout",
        text: "If you can be replaced by a prompt, you were always going to be replaced. The question isn't whether the tools are coming for you — it's whether you were doing the work that's actually hard.",
      },
    ],
  },
  {
    id: "founder-market-fit",
    category: "Founders",
    title: "Founder–Market Fit Comes Before Product–Market Fit",
    excerpt:
      "Most startups fail not because the product was wrong — but because the founder never truly understood the problem they were solving.",
    date: "28 May 2025",
    readTime: "7 min",
    gradient: "linear-gradient(135deg, #1a0f00 0%, #4a2800 50%, #2d1800 100%)",
    accent: "#FFA500",
    author: DEFAULT_AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "There's a particular kind of pitch we've stopped taking. The founder is articulate. The deck is clean. The TAM is enormous. The product sounds reasonable. And by the end of the meeting, we can't shake the feeling that they're describing a problem they read about, not one they've lived in.",
      },
      {
        type: "paragraph",
        text: "Product–market fit is what everyone obsesses about. But it sits downstream of something more important, and harder to fake: founder–market fit. The unfair connection between the person building the thing and the problem they're trying to solve.",
      },
      {
        type: "heading",
        text: "The tells",
      },
      {
        type: "paragraph",
        text: "Founder–market fit isn't credentialism. It's not about having worked at the right company or holding the right degree. It shows up in how someone talks about edge cases, which constraints they take seriously, and what makes them irrationally angry about the current state of the market.",
      },
      {
        type: "list",
        items: [
          "They have opinions about the problem that sound personal, not strategic.",
          "They know which customer segments to ignore — and they're right.",
          "They've already had the most painful version of the problem and survived it.",
          "Their first product instinct is unfashionable, and they refuse to change it.",
        ],
      },
      {
        type: "heading",
        text: "Why this matters more than the product",
      },
      {
        type: "paragraph",
        text: "Early-stage products are wrong. They're supposed to be. The first iteration is a wager, not a verdict. What determines whether the team gets to the second, third, and fifth iterations is whether the founder can read the signal in the noise. That's not a product question. It's a fit question.",
      },
      {
        type: "quote",
        text: "The market doesn't reward the team with the best initial idea. It rewards the team that can survive being wrong long enough to be right.",
      },
      {
        type: "paragraph",
        text: "If you're early in a company, the most honest exercise you can do isn't refining your roadmap. It's asking whether you would still be working on this problem if no one ever invested. If the answer is no, your roadmap is the least of your concerns.",
      },
    ],
  },
  {
    id: "design-systems",
    category: "Design",
    title: "Design Systems Are Eating Themselves",
    excerpt:
      "When everyone ships with the same component library, the only differentiator left is the judgment to know when to break the rules.",
    date: "20 May 2025",
    readTime: "4 min",
    gradient: "linear-gradient(135deg, #0d1f14 0%, #193d28 50%, #0f2b1c 100%)",
    accent: "#69DB7C",
    author: DEFAULT_AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "Design systems were supposed to be liberating. The promise was that we'd stop reinventing buttons, stop arguing over spacing tokens, stop shipping the same modal twice. We'd codify the boring stuff once, then spend our time on the work that actually mattered.",
      },
      {
        type: "paragraph",
        text: "What actually happened is that the system became the work. Whole teams now exist to maintain the system that was supposed to free them. And every consumer-facing product that uses one looks suspiciously like every other consumer-facing product that uses one.",
      },
      {
        type: "heading",
        text: "The flattening",
      },
      {
        type: "paragraph",
        text: "Walk through any B2B SaaS dashboard built in the last three years. Same sidebar. Same data table component. Same empty state illustration. Same modal stack. The system did its job — it made shipping fast and consistent. It also made the products indistinguishable from each other.",
      },
      {
        type: "quote",
        text: "When the cost of consistency drops to zero, the value of consistency drops with it. What's left is the willingness to be inconsistent on purpose.",
      },
      {
        type: "heading",
        text: "The path back",
      },
      {
        type: "paragraph",
        text: "The answer isn't abandoning systems. It's remembering what they were for. A design system is a tool for compounding judgment, not for outsourcing it. The hard work — knowing when to break the rules, when the pattern stops serving the product, when the brand needs to assert itself over the system — never went anywhere.",
      },
      {
        type: "callout",
        text: "Your design system should make 80% of decisions trivial so that you can spend disproportionate effort on the 20% that define the product. If it's making all decisions for you, you've built a cage, not a system.",
      },
    ],
  },
  {
    id: "enterprise-ux-debt",
    category: "Industry",
    title: "The $400 Billion UX Debt in Enterprise Software",
    excerpt:
      "Enterprise software is broken by design — and that's the opportunity. The founders who fix it will build the next Salesforce.",
    date: "12 May 2025",
    readTime: "6 min",
    gradient: "linear-gradient(135deg, #050510 0%, #0d0d2b 50%, #080820 100%)",
    accent: "#4DABF7",
    author: DEFAULT_AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "Spend a day shadowing a procurement officer at a Fortune 500 company. Watch them switch between seventeen different SaaS tools, each requiring its own login, its own mental model, its own workarounds for the things it should do but doesn't. Now extrapolate that across forty million knowledge workers globally. That's the scale of the UX debt sitting on enterprise software's books.",
      },
      {
        type: "paragraph",
        text: "The industry's analysts have started attaching real numbers to the problem. Conservative estimates put global productivity losses from poor enterprise UX at over $400 billion annually. The conservative version. The actual cost — when you factor in the workflows that simply never happen because the tools are too painful — is almost certainly higher.",
      },
      {
        type: "heading",
        text: "Why this happened",
      },
      {
        type: "paragraph",
        text: "Enterprise software wasn't designed for the end user. It was designed for the procurement committee, the IT department, the security auditor, and the compliance officer — in that order. The end user was a third-tier consideration if they were considered at all.",
      },
      {
        type: "list",
        items: [
          "Buyers and users are different people, so the product optimizes for the buyer.",
          "Feature checklists win RFPs; usability doesn't show up on a procurement comparison sheet.",
          "Once a contract is signed, switching costs are enormous — there's no market pressure to improve.",
          "The people who use the tool every day have no leverage over the people who chose it.",
        ],
      },
      {
        type: "heading",
        text: "Where the opportunity is",
      },
      {
        type: "paragraph",
        text: "The companies eating the most lunch right now are the ones that found a way to bypass procurement entirely. Bottom-up adoption — get the user to love it, then get them to bring it to work — has turned out to be the most reliable way to break the cycle. Figma did it. Notion did it. Linear did it. The next wave is just getting started.",
      },
      {
        type: "quote",
        text: "Salesforce wasn't displaced by a better Salesforce. It was displaced by tools the people who actually use the software actually like.",
        cite: "Industry investor, off the record",
      },
      {
        type: "paragraph",
        text: "If you're building in enterprise, the most contrarian thing you can do is make the product genuinely good. Most of your competitors won't. That's the moat.",
      },
    ],
  },
  {
    id: "studio-notes-q1",
    category: "Studio Notes",
    title: "What We Shipped in Q1 2025",
    excerpt:
      "Six projects, two partnerships, one rebrand, and a lesson about moving too fast on the wrong brief.",
    date: "2 May 2025",
    readTime: "8 min",
    gradient: "linear-gradient(135deg, #1a0a0a 0%, #3d1212 50%, #2b0f0f 100%)",
    accent: "#FF6B6B",
    author: DEFAULT_AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "Every quarter we write one of these — not because anyone asks, but because the act of writing it forces us to be honest about what worked, what didn't, and what we'd do differently. Q1 was busier than expected and harder than we wanted to admit.",
      },
      {
        type: "heading",
        text: "The numbers",
      },
      {
        type: "list",
        items: [
          "Six projects shipped to production across three industries.",
          "Two new equity partnerships signed (one announced, one still under wraps).",
          "One complete brand and identity system delivered for a Series A fintech.",
          "Eleven workshops run with founding teams across our partner portfolio.",
          "Four projects we said no to. Of those, two we regret declining.",
        ],
      },
      {
        type: "heading",
        text: "What worked",
      },
      {
        type: "paragraph",
        text: "Tighter scoping at the front of every engagement. We started insisting on a one-page brief co-written with the founder before any work begins — and the projects with that document up front shipped on time, every time. The projects without it slipped, every time.",
      },
      {
        type: "heading",
        text: "What didn't",
      },
      {
        type: "paragraph",
        text: "We took on a project in February that, in hindsight, we should have turned down. The founder was great. The idea was real. The brief was wrong, and we knew it within the first week. We tried to make it work because we'd already signed the contract. The right move was to stop, renegotiate, and reset. The actual move was to keep going. The output was fine. The output should have been remarkable.",
      },
      {
        type: "callout",
        text: "The lesson we keep relearning: when the brief is wrong, the fix is upstream of the work. No amount of execution will salvage a project pointed at the wrong outcome.",
      },
      {
        type: "heading",
        text: "What's next",
      },
      {
        type: "paragraph",
        text: "Q2 is intentionally lighter. We're taking on two new partnerships and one project — and we're closing the door after that until July. The shape of the studio we want to be requires saying no to more than we say yes to. We're trying to remember that.",
      },
    ],
  },
  {
    id: "betting-on-taste",
    category: "AI & Design",
    title: "Betting on Taste in the Age of Infinite Generation",
    excerpt:
      "When anyone can generate anything, curation becomes the rarest skill. The teams that invest in genuine taste will win.",
    date: "24 Apr 2025",
    readTime: "5 min",
    gradient: "linear-gradient(135deg, #0f1a0a 0%, #1f3d14 50%, #152b0e 100%)",
    accent: "#A9E34B",
    author: DEFAULT_AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "Generation used to be expensive. You hired a photographer. You commissioned an illustrator. You wrote, redrafted, rewrote. The artifact was costly enough that the decision to produce it carried weight. That gravitational pull is gone. Generation is now free.",
      },
      {
        type: "paragraph",
        text: "What's not free is knowing which thing to generate, and what to keep, and what to throw away. The bottleneck used to be production. The bottleneck now is judgment.",
      },
      {
        type: "heading",
        text: "Taste isn't a vibe",
      },
      {
        type: "paragraph",
        text: "We talk about taste as if it's vibes — an aesthetic preference, a personal style. That undersells it. Taste is the trained ability to recognize quality without being able to fully articulate why. It's pattern-matching against thousands of well-considered examples. It compounds slowly and decays fast.",
      },
      {
        type: "quote",
        text: "In a world where everyone has access to every reference, the people who've actually looked closely at the references win.",
      },
      {
        type: "heading",
        text: "How to invest in it",
      },
      {
        type: "list",
        items: [
          "Hire for taste explicitly. Make portfolio review the most rigorous part of the interview.",
          "Build the canon at your studio — books, films, products people are expected to know.",
          "Make critique non-optional. Public, regular, and unsoftened.",
          "Stop generating quickly. The first three options are almost never the right one.",
        ],
      },
      {
        type: "callout",
        text: "The teams that will produce memorable work in 2026 aren't the ones with the best AI tooling. They're the ones whose internal standard for 'good enough' has been protected from the slop.",
      },
    ],
  },
  {
    id: "designing-agents",
    category: "AI & Design",
    title: "Designing Products That Think",
    excerpt:
      "The UX patterns we borrowed from chatbots are fundamentally wrong for what agents actually do. We need new primitives.",
    date: "15 Apr 2025",
    readTime: "6 min",
    gradient: "linear-gradient(135deg, #09090f 0%, #12122b 50%, #0a0a1f 100%)",
    accent: "#74C0FC",
    author: DEFAULT_AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "We've been designing AI products as if they're chat. They're not. Chat was an interface metaphor borrowed from a different era — useful for the first six months of LLM products, increasingly wrong for what comes next.",
      },
      {
        type: "paragraph",
        text: "Agents take time. They do work in the background. They produce intermediate state. They sometimes fail and recover. They occasionally need approval. None of this fits comfortably into a chat thread, and the contortions we make to force it in are getting harder to ignore.",
      },
      {
        type: "heading",
        text: "What chat got wrong",
      },
      {
        type: "list",
        items: [
          "Synchronous turn-taking, when agents work asynchronously across minutes or hours.",
          "Linear thread, when the work is often branching and parallel.",
          "Output as text, when the actual artifact is a file, a deploy, a database write.",
          "Authorship ambiguity, when the user needs to know what the agent did vs. what they asked for.",
        ],
      },
      {
        type: "heading",
        text: "Primitives we actually need",
      },
      {
        type: "paragraph",
        text: "Progress over time. Visible plans the agent commits to before acting. Checkpoints the user can intervene at. Diff-style review of agent-produced changes. Memory the user can edit. Roles and permissions that match how teams actually delegate work to each other.",
      },
      {
        type: "quote",
        text: "Agents are not better chatbots. They are coworkers with weird affordances, and they need an interface designed for that — not one designed for replying to a text message.",
      },
      {
        type: "paragraph",
        text: "The products that will define this category are the ones brave enough to leave chat behind. Some of the most important work in product design right now is figuring out what comes next.",
      },
    ],
  },
  {
    id: "pitch-deck-design",
    category: "Founders",
    title: "What Your Deck Says About Your Product Thinking",
    excerpt:
      "The design of your pitch deck is the first demonstration of your product taste. Most founders get this catastrophically wrong.",
    date: "5 Apr 2025",
    readTime: "4 min",
    gradient: "linear-gradient(135deg, #0f0a00 0%, #2b2000 50%, #1f1700 100%)",
    accent: "#FCC419",
    author: DEFAULT_AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "Every founder we've ever met has a pitch deck. Almost none of them realize that the deck is doing more work than the words on it. Before an investor reads a single bullet point, they've already formed a thesis about your product taste — based entirely on how the slides look.",
      },
      {
        type: "heading",
        text: "What investors are actually reading",
      },
      {
        type: "paragraph",
        text: "Investors read decks the same way designers read landing pages. They take in the whole thing in under three seconds before any conscious analysis happens. The unconscious analysis is asking one question: does this person have the taste to build something good?",
      },
      {
        type: "list",
        items: [
          "Typography choices say what you've paid attention to.",
          "Layout discipline says how you'll treat product decisions.",
          "Information density says whether you can edit yourself.",
          "Visual hierarchy says whether you can prioritize.",
        ],
      },
      {
        type: "heading",
        text: "What to do about it",
      },
      {
        type: "paragraph",
        text: "Stop using slide templates. Stop using Canva. Stop using PowerPoint defaults. The two hours you'd save by using a template will cost you the meeting. Either hire a designer for the deck, or take it as seriously as you'd take your product UI. There is no third option that works.",
      },
      {
        type: "quote",
        text: "The pitch deck is your first product. The investor is your first user. If the experience is bad, no amount of TAM math will fix it.",
      },
      {
        type: "callout",
        text: "If you can't make a deck that demonstrates product taste, the polite read on you is that you'll outsource design for the actual product too. That's not the founder anyone wants to back.",
      },
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getArticle(id: string): Article | undefined {
  return articles.find((a) => a.id === id);
}

export function categoryToSlug(category: string): string {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function slugToCategory(slug: string): string | undefined {
  return CATEGORIES.find((c) => c !== "All" && categoryToSlug(c) === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getRelatedArticles(id: string, limit = 3): Article[] {
  const current = getArticle(id);
  if (!current) return [];
  const sameCategory = articles.filter(
    (a) => a.id !== id && a.category === current.category
  );
  const others = articles.filter(
    (a) => a.id !== id && a.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function getAdjacentArticle(id: string): Article | undefined {
  const idx = articles.findIndex((a) => a.id === id);
  if (idx === -1) return undefined;
  return articles[(idx + 1) % articles.length];
}
