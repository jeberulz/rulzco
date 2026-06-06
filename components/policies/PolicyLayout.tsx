import Link from "next/link";
import { Footer } from "@/components/Footer";

/** Shared shell for short policy/standards pages. */
export function PolicyLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#faf8f4] text-[#0f0f0f]">
      <div className="max-w-2xl mx-auto px-6 md:px-10 pt-24 pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#999] hover:text-[#0f0f0f] transition-colors"
        >
          ← Rulz&amp;Co
        </Link>

        <h1 className="mt-10 text-[32px] md:text-[40px] font-light tracking-tight leading-tight">
          {title}
        </h1>
        <p className="mt-3 text-[12px] uppercase tracking-[0.2em] text-[#999]">
          Last updated: {updated}
        </p>

        <div className="mt-10 space-y-6 text-[16px] md:text-[17px] text-[#2a2a2a] font-light leading-[1.75] [&_h2]:text-[20px] [&_h2]:font-medium [&_h2]:text-[#0f0f0f] [&_h2]:mt-10 [&_h2]:mb-2 [&_a]:underline [&_a]:decoration-[#FFC703] [&_a]:underline-offset-4">
          {children}
        </div>
      </div>
      <Footer />
    </main>
  );
}
