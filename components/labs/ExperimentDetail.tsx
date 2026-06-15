import type { ReactNode } from "react";
import Link from "next/link";
import { NavMenu } from "@/components/NavMenu";
import { BrandMark } from "@/components/BrandMark";
import { Footer } from "@/components/Footer";
import type { Experiment } from "@/lib/experiments";

/** Public experiment detail — the story behind one Rulz Labs experiment. */
export function ExperimentDetail({ e }: { e: Experiment }) {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#FFC703] selection:text-black">
      <div className="fixed top-8 right-8 z-50">
        <NavMenu />
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-24">
        <header className="mb-12">
          <BrandMark variant="dark" />
          <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500 mt-3">
            Rulz Labs · {e.sector ?? "Experiment"}
          </p>
        </header>

        <section className="mb-16">
          <h1 className="text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight">
            {e.title}
          </h1>
          <p className="text-gray-600 text-sm mt-6">{e.date}</p>
        </section>

        <Section label="The hypothesis">
          <p className="text-gray-300 text-lg leading-relaxed">{e.hypothesis}</p>
        </Section>

        <Section label="What we built">
          <p className="text-gray-300 leading-relaxed">{e.whatWeBuilt}</p>
          {e.prototypeUrl && (
            <div className="mt-6 border border-white/10 rounded-2xl overflow-hidden">
              <iframe
                src={e.prototypeUrl}
                title={`${e.title} prototype`}
                className="w-full h-[480px] bg-white"
                loading="lazy"
              />
            </div>
          )}
        </Section>

        <Section label="What we learned">
          <ul className="space-y-4">
            {e.whatWeLearned.map((insight, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-[#FFC703] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-gray-300">{insight}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="What changed (V2)">
          <p className="text-gray-300 leading-relaxed">{e.v2}</p>
        </Section>

        <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/10 pt-12">
          <a
            href="mailto:hello@rulz.co?subject=Start%20a%20project"
            className="inline-flex items-center gap-2 border border-[#FFC703] text-[#FFC703] rounded-full px-8 py-4 text-sm uppercase tracking-[0.25em] hover:bg-[#FFC703] hover:text-black transition-colors"
          >
            Start a project →
          </a>
          <Link
            href="/labs"
            className="text-sm text-gray-500 hover:text-white transition-colors"
          >
            ← All experiments
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="mb-16">
      <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-6">
        {label}
      </p>
      {children}
    </section>
  );
}
