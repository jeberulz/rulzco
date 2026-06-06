import { Plus } from "lucide-react";
import type { Faq } from "@/lib/seo/jsonld";

export type FaqItem = Faq;

/**
 * Visible FAQ accordion using native <details>/<summary> — accessible,
 * SSR-rendered, and zero client JS. The matching FAQPage JSON-LD is emitted
 * from the route template so the structured data mirrors what's on the page.
 *
 * Renders nothing when there are no items (so we never ship an empty section
 * or an empty FAQPage block).
 */
export function FAQ({
  items,
  className = "",
}: {
  items?: FaqItem[];
  className?: string;
}) {
  if (!items || items.length === 0) return null;

  return (
    <section className={`max-w-3xl mx-auto px-8 md:px-14 ${className}`}>
      <h2 className="text-[12px] uppercase tracking-[0.3em] text-[#999] mb-8">
        Frequently asked
      </h2>
      <div className="divide-y divide-[#e8e4dd] border-t border-b border-[#e8e4dd]">
        {items.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
              <span className="text-[17px] md:text-[18px] font-medium text-[#0f0f0f] leading-snug">
                {item.q}
              </span>
              <Plus
                size={18}
                className="shrink-0 text-[#999] transition-transform duration-200 group-open:rotate-45"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-4 text-[16px] text-[#2a2a2a] font-light leading-[1.7]">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
