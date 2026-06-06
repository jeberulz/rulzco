import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Crumb } from "@/lib/seo/jsonld";

/**
 * Visible breadcrumb trail. The matching BreadcrumbList JSON-LD is emitted
 * separately from the route template (where dynamic data is resolved), so this
 * component is UI-only and renders no schema.
 *
 * The last crumb is the current page (not a link). `tone` adapts the colours to
 * light or dark page headers.
 */
export function Breadcrumbs({
  items,
  tone = "light",
  className = "",
}: {
  items: Crumb[];
  tone?: "light" | "dark";
  className?: string;
}) {
  if (items.length < 2) return null;

  const base =
    tone === "dark"
      ? { link: "text-white/55 hover:text-white", current: "text-white/90", sep: "text-white/30" }
      : { link: "text-[#999] hover:text-[#0f0f0f]", current: "text-[#0f0f0f]", sep: "text-[#ccc]" };

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center flex-wrap gap-1.5 text-[11px] uppercase tracking-[0.18em]">
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1.5 min-w-0">
              {isLast ? (
                <span
                  aria-current="page"
                  className={`${base.current} truncate max-w-[42ch]`}
                >
                  {c.name}
                </span>
              ) : (
                <Link href={c.path} className={`${base.link} transition-colors`}>
                  {c.name}
                </Link>
              )}
              {!isLast && (
                <ChevronRight size={12} className={base.sep} aria-hidden="true" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
