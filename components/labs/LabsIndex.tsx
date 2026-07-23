import Link from "next/link";
import { NavMenu } from "@/components/NavMenu";
import { BrandMark } from "@/components/BrandMark";
import { Footer } from "@/components/Footer";
import { getVisibleExperiments, type ExperimentStatus } from "@/lib/experiments";

const STATUS_CLASS: Record<ExperimentStatus, string> = {
  live: "text-[#FFC703] border-[#FFC703]",
  testing: "text-gray-300 border-gray-600",
  archived: "text-gray-500 border-gray-700",
};

/** Public Rulz Labs index — proof page + top-of-funnel asset. */
export function LabsIndex() {
  const experiments = getVisibleExperiments();

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#FFC703] selection:text-black">
      <div className="fixed top-8 right-8 z-50">
        <NavMenu />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-24">
        <header className="mb-16">
          <BrandMark variant="dark" />
          <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500 mt-3">
            Rulz Labs
          </p>
        </header>

        <section className="max-w-4xl mb-20">
          <h1 className="text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight">
            Agentic interface experiments,{" "}
            <span className="text-[#FFC703]">shipped in public.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 mt-6 max-w-2xl">
            Focused prototypes for the hard parts of working with AI: sources,
            confidence, approvals, agent activity, failure, and recovery.
          </p>
        </section>

        {experiments.length === 0 ? (
          <p className="text-gray-500 border border-white/10 rounded-2xl p-8">
            First experiment lands soon.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {experiments.map((e) => (
              <Link
                key={e.slug}
                href={`/labs/${e.slug}`}
                className="group border border-white/10 rounded-2xl p-6 hover:border-[#FFC703] transition-colors"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-gray-500">
                    {e.sector ?? "Experiment"}
                  </span>
                  <span
                    className={`text-[10px] uppercase tracking-[0.2em] border rounded-full px-3 py-1 ${STATUS_CLASS[e.status]}`}
                  >
                    {e.status}
                  </span>
                </div>
                <h2 className="text-2xl font-medium group-hover:text-[#FFC703] transition-colors">
                  {e.title}
                </h2>
                <p className="text-gray-400 mt-3 line-clamp-2">{e.hypothesis}</p>
                <p className="text-gray-600 text-sm mt-6">{e.date}</p>
              </Link>
            ))}
          </div>
        )}

        <section className="mt-24 border-t border-white/10 pt-12">
          <p className="text-2xl md:text-3xl font-medium mb-6">
            Want this for your product?
          </p>
          <a
            href="mailto:hello@rulz.co?subject=Start%20a%20project"
            className="inline-flex items-center gap-2 border border-[#FFC703] text-[#FFC703] rounded-full px-8 py-4 text-sm uppercase tracking-[0.25em] hover:bg-[#FFC703] hover:text-black transition-colors"
          >
            Start a project →
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
}
