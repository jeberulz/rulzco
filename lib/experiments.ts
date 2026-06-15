/**
 * Rulz Labs experiments — the public proof surface.
 *
 * Produced by the Rapid UX Experiment skill chain (idea → prototype → test →
 * signal → V2). Each entry is sanitised before it lands here: no client names,
 * no raw participant data, insights generalised.
 *
 * `visible` is the approval gate — nothing renders on /labs until it is `true`.
 * Mirrors the data-module pattern in lib/projects.ts.
 */

export type ExperimentStatus = "live" | "testing" | "archived";

export type Experiment = {
  slug: string;
  title: string;
  /** Optional tag, e.g. "Fintech". */
  sector?: string;
  status: ExperimentStatus;
  /** What we believed. */
  hypothesis: string;
  /** 1–2 lines on what we built. */
  whatWeBuilt: string;
  /** Optional embed/link containing no private data. */
  prototypeUrl?: string;
  /** 2–4 synthesized, sanitised insights. */
  whatWeLearned: string[];
  /** What changed next. */
  v2: string;
  /** ISO date, e.g. "2026-06-15". */
  date: string;
  /** Approval gate — false until John approves publishing. */
  visible: boolean;
};

export const experiments: Experiment[] = [
  {
    slug: "bank-first-onboarding",
    title: "Ask for the bank first",
    sector: "Fintech",
    status: "live",
    hypothesis:
      "Asking people to connect their bank before anything else raises activation, because the value — a real savings nudge — lands in the first session instead of after a long setup.",
    whatWeBuilt:
      "A two-path onboarding prototype — bank-first vs. profile-first — with every state designed: empty, connecting, error (bank unavailable), success, and the first live nudge.",
    whatWeLearned: [
      "Bank-first felt faster and more trustworthy when the 'why' was shown before the connect button.",
      "The error state was where trust broke; a clear retry plus 'skip for now' kept people moving.",
      "A few testers wanted to see one example nudge before connecting anything.",
    ],
    v2: "Lead with a one-line 'why we ask' and a sample-nudge preview before the connect step; redesign the bank-unavailable state with retry and a graceful skip.",
    date: "2026-06-15",
    // Sample experiment. Flip to `true` (or replace with a real one) before
    // linking /labs from the homepage. Fictional until then.
    visible: false,
  },
];

/** Approved experiments only, newest first — for the public /labs index. */
export function getVisibleExperiments(): Experiment[] {
  return experiments
    .filter((e) => e.visible)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** A single experiment by slug, only if approved (else undefined → 404). */
export function getExperiment(slug: string): Experiment | undefined {
  const exp = experiments.find((e) => e.slug === slug);
  return exp && exp.visible ? exp : undefined;
}
