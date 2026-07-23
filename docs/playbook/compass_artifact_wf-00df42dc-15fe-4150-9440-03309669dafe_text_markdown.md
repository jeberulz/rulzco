# Repositioning Rulz&Co: The Interface Layer for Mid-Market AI

## TL;DR
- **The opening is real and specific.** The forward-deployed-engineering (FDE) giants — Microsoft Frontier Company, the OpenAI Deployment Company (DeployCo), Anthropic's ~$1.5B venture with Blackstone/Hellman & Friedman/Goldman Sachs, and AWS's $1B unit — all sell backend "outcomes at enterprise scale" to large enterprise and PE portfolios. None of them design the UI/interaction layer, and all target mid-sized-and-up firms with heavy embedded engineering. Rulz&Co should reposition from a generalist "AI Product Design & Strategy" studio into a design-**and**-build partner that ships the interface layer AI infrastructure needs, aimed at mid-market companies and startups who can't buy a seven-figure deployment.
- **Build a portfolio of small, clickable demos that each prove one hard interface problem the FDEs skip** — streaming, click-to-source citations, confidence display, human-in-the-loop approval, structured extraction with verification, natural-language-to-query, and agent step visibility. The five strongest first builds: a click-to-source RAG answer box, a document-extraction-with-verification tool, a human-in-the-loop approval queue, a natural-language-to-query/report interface, and a streaming multi-step agent console.
- **Price in three tiers**: a paid diagnostic/scoping engagement (~$3.5–7.5k), fixed-scope interface builds (~$8–25k), and a monthly iteration retainer (~$4–8k). Sell with the demos themselves — each demo is a case study that removes the buyer's risk before they commit.

## Key Findings

1. **The three deployment pages share one message and one blind spot.** All three sell *outcomes, not outputs*, delivered by *embedded engineers* who *rethink workflows* and connect models to *your data, tools, and processes*. None of them mention UX, interface, interaction, or design. "Outcome" is Microsoft's entire tagline; "deployment" is OpenAI's; "core operations" is Anthropic's. That gap — the model works in the backend, but the user still faces a blank chat box — is Rulz&Co's sentence.
2. **Mid-market is where the demand is and where the FDEs aren't well-fit.** Per the World Economic Forum (Jan 2026, "It's time for AI's mid-market business moment"), mid-market firms are the "missing middle" that "account for roughly one-third of private-sector GDP and employment in developed economies like the US" (from 2007–2010, US mid-market firms created 2.2M jobs while large businesses shed 3.8M), and WEF estimates mid-market could capture at least $2 trillion of generative AI's $6–8 trillion global potential. Yet MIT Project NANDA's July 2025 report *The GenAI Divide: State of AI in Business 2025* (Challapally, Pease, Raskar, Chari; 52 interviews, 153 leader surveys, 300 public deployments) found **95% of organizations get zero return despite an estimated $30–40B invested** — and that "this divide does not seem to be driven by model quality or regulation, but seems to be determined by approach." The failure is integration and the last mile, and interface/adoption is a large part of it.
3. **"Buy and partner" beats "build alone" — which is the reposition thesis.** MIT NANDA (via Fortune, Aug 18 2025) found buying AI tools from specialized vendors and forming partnerships "succeed about 67% of the time, while internal builds succeed only one-third as often." A mid-market team that bought AI access needs a partner to make it usable — not a bigger internal project.
4. **Every vertical has the same shape of problem:** the model can now read a document / answer a question / draft a reply, but the human still has to verify it, trust it, correct it, and act on it. That verification-and-trust layer is interface work, and it is exactly what the demos should prove.
5. **There is a mature, citable design vocabulary to stand on** — the Shape of AI pattern library, Nielsen Norman Group's paradigm framing, Anthropic's and OpenAI's own agent-building guides, IBM Carbon for AI, and Google's People + AI Guidebook. Naming these signals fluency in the discipline, not improvisation.

---

## (A) Messaging & Copy Extraction from the Three Deployment Pages

### Microsoft Frontier Company (microsoft.com/frontier-company, ~July 2, 2026)
- **Problem framing:** "Most AI companies deliver outputs. We deliver outcomes." / "We don't start with what AI can do. We start with what success looks like for you." The named enemy is the stalled pilot: "No pilots. Scale from day one."
- **Engagement model:** Built on "the Forward Deployed Engineering (FDE) model — embedding engineering experts directly into your environment to co-design, deploy, and continuously improve AI systems at scale." A loop: Identify → Build → Secure → Operate & Optimize → Scale, around "Your IQ."
- **Outcomes promised:** "measurable business results," "real return on your AI investment," AI "across your entire stack."
- **Verticals named:** Pharma/life sciences (Novo Nordisk testimonial). Otherwise horizontal, enterprise-wide.
- **What they do NOT do:** No mention of interface, UX, front-end, or the experience of the person using the AI. Everything is platform, data, IP, stack. Tools referenced are Microsoft's own (Copilot, Azure, Agent 365).

### OpenAI Deployment Company / DeployCo (openai.com, May 11, 2026)
- **Problem framing:** "the next stage of enterprise AI will be defined by how effectively businesses can deploy this technology into real-world use cases." "Real impact comes from helping people and organizations use those systems safely, effectively, and at scale."
- **Engagement model:** "A typical OpenAI Deployment Company engagement will begin with a focused diagnostic of where AI can create the most value, followed by a small number of priority workflows selected with the customer's leadership… FDEs will then work inside the organization to design, build, test, and deploy production systems, connecting OpenAI models to the customer's data, tools, controls, and business processes." Acquired Tomoro (~150 FDEs); launched with $4B+ and 19 investment/consulting partners (TPG lead).
- **Outcomes promised:** "durable systems," "measurable results," "turn AI capability into real operational impact."
- **Verticals named:** Via Tomoro's client base — retail/grocery (Tesco), airlines (Virgin Atlantic), gaming (Supercell). Sponsors "more than 2,000 businesses."
- **What they do NOT do:** "design, build, test, and deploy" refers to backend production systems and workflow redesign. No interface/interaction/UX layer; the user-facing experience is assumed, not designed.

### Anthropic Enterprise AI Services Company (anthropic.com, May 4, 2026)
- **Problem framing:** "Putting Claude to work in an organization's core operations takes hands-on engineering and deep familiarity with how each business runs." Target: "Companies from community banks to mid-sized manufacturers and regional health systems… lack the in-house resources to build and run frontier deployments." Per the announcement and FT/CNBC reporting, this is a standalone ~$1.5B venture (Anthropic, Blackstone and H&F ~$300M each; Goldman and General Atlantic ~$150M each; also backed by Apollo, Leonard Green, GIC, Sequoia), with named target sectors of healthcare, manufacturing, financial services, retail, real estate, and infrastructure.
- **Engagement model:** "A typical engagement starts with a small team working closely with the customer to understand where Claude can have the biggest impact. From there, the company's engineers — alongside Anthropic Applied AI staff — will develop Claude-powered systems tailored to each organization's operations." Concrete example: a multi-site physician practice where engineers "sit down with clinicians and IT staff to build tools that fit into the workflows that staff already use."
- **Outcomes promised:** more time for core work (clinicians "devote more time to patient care"), tools that fit existing workflows.
- **What they do NOT do:** "build tools that fit into workflows" is the nearest any of them gets to UX — but it's still engineer-led backend integration, aimed at PE-backed mid-sized firms via a $1.5B venture. No mention of interaction design, trust/verification affordances, or the design craft of the tool itself.

### How Rulz&Co should use this raw material
**Echo (to signal you understand the same market):**
- "Outcomes, not outputs" / "measurable results" — adopt the outcome language, but attach it to *interface* metrics (task completion, time-to-trust, adoption, error-catching).
- "Fits the workflows your team already uses" (Anthropic's phrasing) — this is squarely a design promise; take it.
- "Start with a focused diagnostic, then a small number of priority workflows" (OpenAI's model) — mirror this exact shape as your paid scoping engagement.

**Contrast (to differentiate):**
- Their sentence: *the model works, the pipeline runs.* Your sentence: *the user still faces a blank box — I design and build what sits between them.*
- They embed engineers for six-to-eighteen-month backend transformations at PE-portfolio scale. You ship a working, clickable interface in weeks, at a price a 40-person company can approve.
- They are model-locked (Microsoft→Copilot/Azure, OpenAI→GPT, Anthropic→Claude). You are model-agnostic and buyer-side — you build the layer on top of whichever infrastructure they've already bought.
- Suggested positioning line: **"The big deployment firms make the model work. I make it usable. I design and build the interface layer between your AI infrastructure and the people who have to trust it — for mid-market teams and startups who need it shipped in weeks, not a seven-figure transformation."**

**Note on the current site:** the live copy ("AI Product Design & Strategy partner for startups shipping intelligent products… idea → MVP → launch") reads as a generalist product-design studio and buries the build capability. The reposition should foreground "design **and build**," name the interface-layer wedge, and add "mid-market" beside "startups." The existing "good fit / not a good fit" list, the intentionally-small framing, and the Manchester/worldwide base are all assets to keep.

---

## (B) Vertical-by-Vertical Breakdown with Categorised Project Ideas

For each vertical: the real workflows and pain, then demo ideas as **Problem → Outcome → Solution (AI technique demonstrated)**. Each demo proves a *different* hard interface problem.

### 1. Legal / LegalTech
Workflows: contract review, redlining, clause extraction, NDA/DPA/MSA triage, matter intake. Pain: lawyers won't trust output without character-level citation to source; general chatbots "need heavy rework" without citation discipline. Verification is the whole game.
- **Contract clause risk reviewer.** Problem: reviewing an NDA/MSA takes an hour and juniors miss playbook deviations. Outcome: first-pass review in minutes, every flag traceable. Solution: paste/upload → streamed clause-by-clause flags, each with **click-to-source grounding** highlighting the exact span + a confidence chip. Proves: **citation/grounding UI + confidence display**.
- **Redline explainer.** Problem: a counterparty's redline is hard to assess fast. Outcome: plain-English "what changed and why it matters" + risk rating. Solution: diff view + AI margin notes with **human accept/reject per note**. Proves: **inline suggestion + approval affordances**.
- **Intake triage.** Problem: legal ops can't route inbound fast. Outcome: auto-classified, routed matters. Solution: NL intake box → structured matter card with editable fields. Proves: **structured extraction with verification**.

### 2. Healthcare / Health Tech
Workflows: clinical documentation, medical coding, prior authorization, appeals. Pain: clinicians lose hours to documentation and PA forms; adoption "collapses" if staff must leave the EHR; regulators require human review and audit trails.
- **Prior-auth packet builder.** Problem: assembling a PA request means pulling data from multiple systems and matching payer rules. Outcome: a complete, correct draft in minutes, nothing auto-submitted. Solution: pull clinical facts → auto-fill payer form → clinician reviews each field with **source-linked evidence** and a required **human approve step** before "ready to submit." Proves: **form auto-fill + human-in-the-loop + click-to-source**.
- **Denial appeal drafter.** Problem: appeals are slow and templated badly. Outcome: an evidence-grounded appeal letter. Solution: denial reason + record → draft citing guidelines, editable, with a "needs confirmation" flag on any unsupported claim. Proves: **grounded generation + uncertainty flagging**.
- **Ambient note structurer.** Problem: free-text visit notes need coding. Outcome: structured, coded summary. Solution: paste note → structured SOAP + suggested codes with confidence, one-tap correction. Proves: **structured extraction + confidence + fast correction loop**.

### 3. Insurance / Insurtech
Workflows: FNOL claims intake, document extraction (ACORD forms, loss runs, invoices, handwriting), underwriting submission triage. Pain: adjusters/underwriters spend 30–40% of time re-keying and reading documents; regulators demand explainability and click-to-verify over opaque scores; edge cases need human judgment.
- **Claims intake extractor.** Problem: FNOL arrives as messy emails, PDFs, photos. Outcome: a clean, verified claim record in seconds. Solution: drop a document → extracted fields shown **side-by-side with the source image**, each with a confidence indicator and click-to-verify; low-confidence fields routed to a review queue. Proves: **document extraction + field-level citations + confidence + exception routing**.
- **Submission appetite checker.** Problem: underwriters read whole submissions to find declinations. Outcome: instant appetite flags with reasons. Solution: submission → pre-populated risk card with plain-language rationale ("3 water claims in 2 years"). Proves: **structured summarization with readable rationale (explainability)**.
- **Policy Q&A with citations.** Problem: "is this covered?" requires reading the policy. Outcome: a grounded answer. Solution: NL question → answer with clickable policy-clause references and an explicit "not addressed in policy" fallback. Proves: **RAG citation UI + safe "I don't know" fallback**.

### 4. Financial Services / Fintech
Workflows: regulated support (disputes, transfers, KYC), internal analyst Q&A, transaction explanations. Pain: every action needs an audit trail and a compliance-approvable answer; hallucination is unacceptable; EU AI Act / CFPB require traceability and human oversight.
- **Natural-language-to-query analyst tool.** Problem: non-technical staff can't query financial data. Outcome: self-serve answers without SQL. Solution: NL question → generated query shown for review → result table + chart, query visible and editable. Proves: **natural-language-to-query with transparency (show the query, not just the answer)**.
- **Dispute assistant.** Problem: card-dispute handling is slow and error-prone. Outcome: consistent, auditable resolution. Solution: guided flow that pulls transaction detail, drafts the response, and logs every step in a visible **audit trail**. Proves: **tool-call feedback + audit/trace visibility**.
- **Statement explainer.** Problem: customers don't understand fees. Outcome: fewer inbound tickets. Solution: upload statement → line-by-line plain-English explanation with source-line highlighting. Proves: **grounding + latency masking (progressive reveal)**.

### 5. Real Estate / Proptech
Workflows: lead capture and qualification, listing content, transaction-doc coordination. Pain: static contact forms convert in low single digits and abandonment exceeds ~67% past five fields; agents waste 60–80% of time on unqualified leads; the bar is "a qualifying interview the buyer doesn't notice is automated."
- **Conversational intake that replaces the form.** Problem: the 8–12-field IDX form leaks leads. Outcome: higher capture, pre-qualified leads. Solution: one open question → adaptive follow-ups → structured lead profile at the end. Proves: **conversational input design + streaming + structured capture**.
- **Listing description generator with controls.** Problem: writing listings is a chore and tone varies. Outcome: on-brand copy in seconds. Solution: property facts → draft with **tuner controls** (tone, length, feature emphasis) + regenerate/variations. Proves: **tuners + variations pattern**.
- **Doc checklist reviewer.** Problem: missing signatures/initials surface on closing day. Outcome: issues caught early. Solution: upload contract → flagged missing items with page references. Proves: **document QA + click-to-source**.

### 6. HR / Recruiting
Workflows: resume screening, candidate matching, JD writing, scheduling. Pain: ~250 applications per role, ~30 hours to screen; bias and legal exposure demand explainable scoring, confidence bands, and human override; silent auto-reject is dangerous.
- **Explainable candidate screener.** Problem: keyword filters reject good people and can't be defended. Outcome: ranked shortlist with reasons. Solution: JD + resumes → ranked list where each score expands to **the features that drove it**; low-confidence parses flagged for human review; no silent auto-reject. Proves: **explainability (feature attribution) + confidence bands + human-in-the-loop**.
- **JD ↔ resume gap view.** Problem: fit is hard to eyeball. Outcome: fast, structured comparison. Solution: side-by-side requirement-by-requirement match/miss. Proves: **structured comparison UI**.
- **Structured interview note-taker.** Problem: interview notes are inconsistent. Outcome: rubric-scored summaries. Solution: paste notes → rubric scores + evidence quotes. Proves: **structured extraction + grounding to quotes**.

### 7. Customer Support / Service (horizontal — applies across all above)
Workflows: ticket deflection, agent-assist, escalation/handoff. Pain: real tier-1 deflection is 35–75% and "a 90% deflection rate can hide a 40% resolution rate"; the classic failure is a **handoff that loses all context**; hallucination scales with knowledge-base size.
- **Grounded help widget with clean escalation.** Problem: bots dead-end users and hallucinate. Outcome: real resolution or a warm handoff. Solution: answer with citations to help articles → thumbs feedback → **"talk to a human" as a first-class action that passes full conversation context**. Proves: **RAG citations + graceful human handoff + feedback capture**.
- **Agent-assist side panel.** Problem: human agents retype and hunt for answers. Outcome: faster handle time. Solution: live suggested reply with source cards the agent edits before sending. Proves: **human-in-the-loop drafting + source display**.

### 8. Professional Services — Accounting
Workflows: invoice/receipt extraction, AP coding, bank reconciliation, month-end. Pain: manual-entry error rates of 1–5% per field; hallucinated totals are a real risk; the fix is confidence scores and side-by-side (PDF next to extracted table) verification.
- **Invoice extraction with side-by-side verify.** Problem: keying invoices is slow and error-prone. Outcome: structured data with a fast audit. Solution: upload → extracted table beside the source PDF, low-confidence cells highlighted, one-click correct-and-confirm. Proves: **document extraction + side-by-side verification + confidence**.
- **Reconciliation exception review.** Problem: matching transactions is tedious. Outcome: only exceptions need eyes. Solution: auto-matched view + a queue of unmatched items with suggested matches to approve. Proves: **human-in-the-loop exception handling**.

### 9. Construction / Field Services
Workflows: RFIs, submittals, daily reports, spec/drawing search. Pain: a commercial project generates 10,000+ documents; teams lose hours hunting specs; a miscount has a dollar cost, so "a qualified person verifies every number before it leaves the office."
- **Cited spec search.** Problem: answers are buried in 200–400-page specs. Outcome: instant, verifiable answers. Solution: NL question → answer with exact spec-section citations you can open. Proves: **RAG citation UI over long documents**.
- **Voice-to-daily-report.** Problem: superintendents lose 1–2 hours/day on reports. Outcome: a formatted report from spoken notes. Solution: dictate → structured daily report draft to review and edit. Proves: **structured generation + review-before-send**.
- **RFI drafter with verification.** Problem: drafting RFIs is repetitive. Outcome: faster, spec-grounded RFIs. Solution: issue description → draft citing the relevant spec, human confirms before issuing. Proves: **grounded drafting + human approval**.

### 10. Ecommerce / Retail
Workflows: product discovery, support, post-purchase. Pain: keyword search misses intent; conversational discovery and support automation are the fastest-ROI entry points.
- **Natural-language product finder.** Problem: shoppers can't find items with keywords. Outcome: higher conversion, fewer zero-result searches. Solution: "waterproof hiking boot under $200 for wide feet" → grounded results from the catalog with reasons. Proves: **NL search + grounded results (no hallucinated products)**.
- **Returns / why-this-fee assistant.** Problem: repetitive tickets. Outcome: deflection with satisfaction. Solution: grounded answers + order-aware actions. Proves: **tool-call feedback + grounding**.

### Other strong-fit verticals (briefly)
- **Education / EdTech:** grounded tutoring with "show your source"; rubric-based grading with confidence and teacher override. Proves grounding + human-in-the-loop.
- **Marketing / Agencies:** brief-to-draft with tuners and brand-voice presets; the buyer is design-literate and an easy first customer. Proves tuners/variations.
- **Logistics / Supply chain:** exception dashboards that explain *why* a shipment is flagged. Proves explainability + alerting UI.
- **Manufacturing/Operations & Hospitality:** NL-to-query over ops data; guest-request handling with handoff.

---

## (C) The Recommended Strongest First Builds

Chosen for the best combination of: striking as a clickable demo, broadly applicable, buildable solo in days-to-weeks with one real API call, and each proving a *distinct, defensible* interface skill the FDEs skip.

1. **Click-to-source RAG answer box (grounding + citations).** The single most transferable demo — legal, insurance, finance, construction, support, and education all need it. Striking because clicking a claim and watching it highlight the exact source is instantly legible as "trustworthy AI." Proves the #1 trust pattern. Build: one document set + retrieval + streamed answer with inline citation chips. **Lead with this one.**
2. **Document extraction with side-by-side verification (structured extraction + confidence).** Applies to insurance, accounting, healthcare, legal, logistics. Striking because the source-beside-data layout makes correctness visible and shows you understand regulated, audit-driven work. Proves extraction + verification + confidence display.
3. **Human-in-the-loop approval queue (review-before-action).** Applies anywhere AI drafts something consequential — appeals, RFIs, disputes, outreach, reconciliation. Striking because it demonstrates the maturity the FDEs assume but never design: nothing ships without a human. Proves approval affordances + exception routing + audit trail.
4. **Natural-language-to-query / report interface (NL→query with transparency).** Applies to fintech, ops, ecommerce, HR — any data-rich team. Striking because "ask in English, see the query, get a chart" feels like magic while showing the query builds trust. Proves NL-to-query + transparency (show the work).
5. **Streaming multi-step agent console (agent visibility + tool-call feedback).** The most technically impressive; applies to support, ops, research workflows. Striking because visible steps ("searching… reading… drafting…") with a stop control turn an opaque wait into a legible process. Proves streaming, latency masking, tool-call/step visibility, and graceful error/retry states.

**Ordering logic:** #1 and #2 are fastest to build, easiest to explain to a non-technical buyer, and most reused across verticals — they de-risk the pitch fastest. #3 is the clearest differentiator against the "just deploy the model" crowd. #4 has the strongest "wow." #5 is the credibility showpiece for technical buyers but the heaviest build, so it comes last.

**Build notes:** keep each demo single-purpose and pre-seeded with realistic sample data (no login, no setup — a cold click must work); instrument each with a visible metric ("caught 3 errors," "12 fields verified in 8 seconds"); ship each as its own URL that doubles as a case study.

---

## (D) AI Interface Design Patterns to Apply (and cite for credibility)

Naming established frameworks signals fluency. The key sources and what to draw from each:

- **The Shape of AI (Emily Campbell, shapeof.ai)** — a pattern language for AI UX in six categories: **Wayfinders** (help users start — example galleries, suggestions, templates), **Inputs/Prompt actions** (auto-fill, regenerate, summarize, transform), **Tuners** (adjust context/constraints — filters, modes, presets, voice & tone), **Governors** (human-in-the-loop oversight — Citations, References, Action plan, Verification, Stream of Thought), **Trust builders** (Caveat, Consent, Disclosure, Footprints, Watermark), and **Identifiers** (AI's brand-level distinct qualities). Map each demo to the specific patterns it uses — e.g. the RAG box demonstrates Governors (Citations, References) and Trust builders (Caveat). (Note: the category is "Trust builders," not "trust indicators.")
- **Nielsen Norman Group** — Jakob Nielsen's "AI: First New UI Paradigm in 60 Years" (June 18, 2023) frames generative AI as the third UI paradigm, "intent-based outcome specification": "the user tells the computer what outcome they want." Use this to justify why the interface layer is now the differentiator — when users specify intent, the design of how intent is captured, shown, verified, and corrected *is* the product. NN/G has also reported that site AI chatbots get little use, which backs the "don't just bolt on a chat box" argument.
- **Anthropic "Building Effective Agents" (Schluntz & Zhang, Dec 2024)** — "find the simplest solution possible, and only increase complexity when needed." Their three principles — simplicity, **transparency by explicitly showing the agent's planning steps**, and a well-crafted agent-computer interface — directly justify the agent-console demo's visible steps.
- **OpenAI "A Practical Guide to Building Agents" (April 2025)** — agents = Model + Tools + Instructions, plus **Guardrails including human-in-the-loop**; "maximize a single agent's capabilities first." Supports keeping demos scoped and single-purpose.
- **IBM Carbon for AI** — "mark where AI is present while providing explainability whenever available," via the **AI label** and **explainability popover**. Use for the "this was AI-generated + here's why" affordance in every demo.
- **Google People + AI Guidebook (PAIR)** — chapters on Explainability + Trust, Feedback + Control, Errors + Graceful Failure; named guidance: **"Explain for understanding, not completeness,"** "help users calibrate their trust," "how to show model confidence," and progressive disclosure. Use for confidence display and graceful-failure states.

**Cross-cutting patterns every demo should demonstrate at least one of:** streaming with a stop control; inline numbered citations that expand to source cards; confidence cues (chips / hedged language, not fake precision); clarifying questions when intent is ambiguous; graceful failure ("I don't know" / escalate rather than fabricate); human-in-the-loop approval for consequential actions; progressive disclosure (short answer first, evidence on expand); latency masking (steps/skeletons during waits); and feedback capture (thumbs, correction loops). React implementation is well-supported (Vercel AI SDK streaming primitives, ARIA live regions for accessibility, buffering incomplete markdown during streaming) — worth naming to show build fluency.

---

## (E) Pricing, Packaging, and Selling with the Demos

### Market context for a solo senior designer-builder
Boutique AI practitioners bill roughly **$125–250/hour**; independent freelancers **$75–150/hour**; enterprise firms **$250–500/hour**. Discovery/diagnostic engagements are commonly sold as paid entry points (one boutique publishes discovery "starting at $3,500"). Single-workflow automation builds run **~$5–15k** as fixed fee; scoped single-purpose agents **~$1.5–5k** to build. Senior UK/US product/design day rates cluster around **$700–1,200/day**. AI-specific skills command a **40–60% premium** over generalist work, and rates rose ~12–18% year-over-year on production-ready-AI demand. Rulz&Co sits in the **senior boutique** band and should price there — not freelancer-cheap.

### Recommended three-tier packaging
1. **Interface Diagnostic (paid scoping) — ~$3,500–7,500, 1–2 weeks.** Mirror the FDEs' "focused diagnostic → few priority workflows," but for the interface layer. Deliverable: an audit of where the AI stalls at the user, 2–3 mapped interface opportunities, and a build recommendation with mockups. It qualifies the buyer, is a low-risk yes, converts to a build, and protects you from scoping for free.
2. **Interface Build (fixed scope) — ~$8,000–25,000, 2–6 weeks.** One deployed, clickable interface layer on top of the client's existing AI infrastructure (their model/pipeline, your React + Claude/OpenAI front end). Price by number of distinct interface problems solved, not hours — this rewards your speed. Small single-purpose build at the low end; multi-state, multi-role interface with approval/audit at the high end. Include a ~30-day stabilization window.
3. **Iteration Retainer — ~$4,000–8,000/month.** Ongoing refinement, new interface surfaces, adoption instrumentation (heatmaps, task-completion, time-to-trust). Positions you as the standing interface partner as their AI footprint grows.

Avoid pure hourly (it punishes your speed); use day rates only for embedded collaboration or advisory. Consider a modest value-based uplift when the interface demonstrably moves a countable metric (deflection, error-catch rate, conversion).

### How to sell with the demos / case studies
- **Each demo is the sales asset.** A cold, clickable demo that proves one hard problem removes the buyer's risk before any contract — it answers "can this person actually build the thing?" in ten seconds. This is the boutique's edge over both the FDEs (who can't show you a $10k thing) and generalist agencies (who show decks). It also aligns with MIT NANDA's finding that buying/partnering beats internal builds ~3:1.
- **Frame every demo as a case study:** the vertical problem, the interface built, the technique proven, and a visible metric. Even self-initiated demos read as proof of capability.
- **Sequence the sale:** lead with the demo closest to the prospect's vertical → offer the paid Diagnostic → convert to a fixed Build → move to Retainer. Use the FDE news as the opener: "the big vendors are embedding engineers to make the model work — but they hand your team a blank box; I build the part your people actually touch."
- **Target design-literate, fast-moving buyers first** (marketing/agencies, fintech, proptech, health-tech startups) where the decision-maker is clear and interface pain is obvious — matching the "good fit" profile already on the site.

---

## Caveats
- **Source quality.** Much vertical and pricing detail comes from vendor blogs and marketing pages (tool roundups, agency guides) that have an incentive to overstate ROI. Treat specific figures (deflection %, hours saved, "$X per bid," rate bands) as directional, not guaranteed. The three deployment-page quotes, the MIT NANDA report, the WEF piece, and the design-framework sources are first-party/primary and reliable.
- **The "95% of pilots fail" statistic** is from MIT Project NANDA's *The GenAI Divide* (July 2025) and is repeated across many secondary sources here. The core claim — integration/last-mile, not model quality, is the failure point — is well supported; the exact percentage is an oft-repeated headline number, so present it as such.
- **Regulated verticals carry real constraints.** Healthcare (HIPAA), finance (audit trails, EU AI Act/CFPB), and insurance (NAIC model rules) demos should be framed as *prototypes on synthetic data* — do not imply production-readiness or compliance you haven't built. This is also a selling point: designing for auditability and human oversight is exactly the interface craft you offer.
- **Demos ≠ production.** A clickable demo proves interface skill; scaling it into a client's real data, auth, and systems is a larger build. Be explicit about that boundary in the sale so the Diagnostic → Build path is honest.
- **Competition will notice the gap too.** The interface-layer opening is attractive; other studios (and eventually the FDEs) may move into it. Defensibility is speed, a visible portfolio of proof, and mid-market/startup pricing the giants can't match.