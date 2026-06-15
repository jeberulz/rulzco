import type { ReactNode } from "react";
import { BrandMark } from "@/components/BrandMark";
import type { Proposal } from "@/lib/proposals";

/**
 * Proposal microsite — focused, unlisted (noindex), no site nav/footer.
 * Data-driven: renders a Proposal; never contains lead logic.
 */
export function ProposalView({ p }: { p: Proposal }) {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#FFC703] selection:text-black">
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <header className="flex items-center justify-between border-b border-white/10 pb-7">
          <BrandMark variant="dark" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-gray-500">
            Proposal · {p.client.name}
          </span>
        </header>

        {/* Problem-led hero */}
        <section className="mt-16 mb-24">
          <h1 className="text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight">
            {p.hero.headline}
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 mt-6 max-w-xl">
            {p.hero.subline}
          </p>
        </section>

        <Section label="The real problem">
          <dl className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <Field k="Problem" v={p.problem.problem} />
            <Field k="User" v={p.problem.user} />
            <Field k="Need" v={p.problem.need} />
            <Field k="Success metric" v={p.problem.successMetric} />
            <Field k="Where AI creates leverage" v={p.problem.aiLeverage} />
          </dl>
        </Section>

        <Section label="The plan">
          <div className="grid md:grid-cols-2 gap-4">
            {p.plan.map((s, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-medium">{s.step}</h3>
                  <span className="text-[#FFC703] text-sm shrink-0">
                    {s.weeks}
                  </span>
                </div>
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  {s.summary}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section label="Timeline & investment">
          <div className="grid md:grid-cols-2 gap-4">
            <Stat k="Timeline" v={p.timeline} />
            <Stat k="Investment" v={p.investment.amount} note={p.investment.note} />
          </div>
        </Section>

        <Section label="Why Rulz&Co">
          <div className="border border-white/10 rounded-2xl p-6">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#FFC703]">
              {p.proof.sector}
            </p>
            <h3 className="text-2xl font-medium mt-2">{p.proof.project}</h3>
            <p className="text-gray-400 mt-3 leading-relaxed">
              {p.proof.outcome}
            </p>
          </div>
          <p className="text-gray-400 italic mt-6 max-w-2xl">
            Rulz&amp;Co is intentionally small — that&apos;s how I stay
            hands-on, move fast, and stay close to the work, from early ideas to
            shipped products.
          </p>
        </Section>

        <div className="mt-24 border-t border-white/10 pt-12">
          <a
            href={p.cta.href}
            className="inline-flex items-center gap-2 border border-[#FFC703] text-[#FFC703] rounded-full px-8 py-4 text-sm uppercase tracking-[0.25em] hover:bg-[#FFC703] hover:text-black transition-colors"
          >
            {p.cta.label} →
          </a>
        </div>

        <footer className="mt-16 pt-6 border-t border-white/10 flex flex-wrap justify-between gap-2 text-sm text-gray-500">
          <span>hello@rulz.co</span>
          <span>Manchester, UK — working worldwide</span>
        </footer>
      </div>
    </main>
  );
}

function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="mb-24">
      <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-6">
        {label}
      </p>
      {children}
    </section>
  );
}

function Field({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-[#FFC703] text-sm mb-1">{k}</dt>
      <dd className="text-gray-300">{v}</dd>
    </div>
  );
}

function Stat({ k, v, note }: { k: string; v: string; note?: string }) {
  return (
    <div className="border border-white/10 rounded-2xl p-6">
      <p className="text-[#FFC703] text-sm mb-2">{k}</p>
      <p className="text-3xl font-medium">{v}</p>
      {note && <p className="text-gray-500 mt-2 text-sm">{note}</p>}
    </div>
  );
}
