# Playbook Stress Test: Ideas Mapped to Components

Every researched idea, mapped to the design system. The point is to check coverage and find what the component library is missing.

Current library: AIInput, StreamOutput, Citation, ConfidenceTag, ActionPlan, AgentSteps, DraftReview, ErrorState, AIBadge, plus primitives Button, Input, Tag, Card.

---

## The master map

| Idea | Vertical | Lead pattern | Components used | New component needed |
|---|---|---|---|---|
| Contract clause reviewer | Legal | Citation | AIInput, Citation, ConfidenceTag, DraftReview, ErrorState | none |
| Discovery document sorter | Legal | Citation, structured extraction | AIInput, Citation, ConfidenceTag | FlaggedList |
| Clinical note cleaner | Healthcare | Draft review, human approval | AIInput, DraftReview, Citation, ConfidenceTag | none |
| Patient intake router | Healthcare | Follow-up, guided input | AIInput, ConfidenceTag | GuidedFlow |
| Claim intake with source check | Insurance | Citation, extraction | AIInput, Citation, ConfidenceTag, DraftReview | ExtractionGrid |
| AI finance copilot | Fintech | Grounded explanation on data | AIInput, StreamOutput, Citation, ConfidenceTag, AIBadge | ChartLink |
| Statement anomaly explainer | Fintech | Grounded flag on data | Citation, ConfidenceTag | FlaggedTable |
| Listing description generator | Proptech | Variations, edit before commit | AIInput, DraftReview | VariationPicker |
| Lease clause checker | Proptech | Citation | AIInput, Citation, ConfidenceTag | none |
| Resume-to-role matcher | HR | Ranked output with reasons | AIInput, Citation, ConfidenceTag | RankedList |
| Interview note structurer | HR | Structured extraction, review | AIInput, DraftReview, ConfidenceTag | none |
| Support reply console | Support | Confidence, draft review | AIInput, DraftReview, ConfidenceTag, Citation, ErrorState | none |
| Ticket triage board | Support | Human override on AI decisions | ConfidenceTag, ErrorState | DecisionBoard |
| Invoice extractor | Accounting | Citation, correction loop | AIInput, Citation, ConfidenceTag, DraftReview | ExtractionGrid |
| Research report generator | Accounting | Streaming, latency masking | AIInput, StreamOutput, Citation | none |
| Site report from photos | Construction | Multimodal input to structure | AIInput, DraftReview, ConfidenceTag | MediaInput |
| Product data enricher | Ecommerce | Auto-fill with edit control | AIInput, DraftReview | ExtractionGrid |
| Agent run monitor | Ecommerce | Multi-step agent visibility | ActionPlan, AgentSteps, StreamOutput, ErrorState | none |

---

## What the test found

Nine components cover most of the work. Six ideas need nothing new. But the mapping surfaced seven components worth adding. Three of them repeat across many ideas, so build those first.

### Build these next, high reuse

ExtractionGrid
- Used by: claim intake, invoice extractor, product data enricher, discovery sorter.
- What it is: a grid of extracted fields, each linked to its source, each with a confidence tag, each editable in place.
- Why it matters: this is the workhorse of document AI. It combines Citation, ConfidenceTag, and DraftReview into one repeatable layout. Four of your strongest ideas need it.

FlaggedTable
- Used by: statement anomaly explainer, discovery sorter, ticket triage.
- What it is: a data table where AI marks rows, explains each mark in plain language, and links to the reason.
- Why it matters: any idea that runs AI across rows of data needs this.

RankedList
- Used by: resume matcher, and any idea that scores and orders items.
- What it is: an ordered list of results, each with a score, a plain-language reason, and a link to the source that drove the score.
- Why it matters: ranking without a visible reason is a black box. This makes the ranking trustable.

### Build these later, narrower use

GuidedFlow
- Used by: patient intake router.
- What it is: a step-by-step conversational input, one question at a time, that routes based on answers. Different from the open AIInput box.

VariationPicker
- Used by: listing generator, and any idea offering several AI options.
- What it is: two to four AI outputs shown side by side, pick one, regenerate any.

ChartLink
- Used by: finance copilot.
- What it is: a link between an AI statement and a chart, so the chart highlights what the AI refers to.

MediaInput
- Used by: site report from photos.
- What it is: an image or file gallery input with per-item notes, feeding a structured output.

DecisionBoard
- Used by: ticket triage board.
- What it is: a board of AI-sorted items where a human can override any placement. Overlaps with FlaggedTable, so consider merging.

---

## Verdict

The playbook holds up. The eight-state model and the Governor-first thinking apply to every idea without exception. That part is solid.

But nine components is not a full library. It covers single-output tasks well. It is thin on three common shapes:
- Many fields at once, the extraction grid.
- Many rows of data, the flagged table.
- Many ranked results, the ranked list.

Add those three and you cover roughly fifteen of the eighteen ideas cleanly. Add the four narrow ones and you cover all eighteen.

One thing to notice. DecisionBoard and FlaggedTable overlap. So do ExtractionGrid and the invoice or claim layouts. Before you build, decide whether these are separate components or one flexible component with variants. Fewer, more flexible components are easier to maintain than many rigid ones.

Which do you want first. The ExtractionGrid, since it unlocks four ideas including your lead demo. Or the full coded set of the original four core components before adding any of these.
