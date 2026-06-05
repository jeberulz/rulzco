import Link from "next/link";

interface BrandMarkProps {
  variant?: "dark" | "light";
  className?: string;
}

export function BrandMark({ variant = "dark", className = "" }: BrandMarkProps) {
  const colorClasses =
    variant === "dark"
      ? "text-white/80 hover:text-white focus-visible:text-white"
      : "text-black/80 hover:text-black focus-visible:text-black";

  return (
    <Link
      href="/"
      aria-label="Rulz and Co — Home"
      className={`inline-block text-[11px] uppercase tracking-[0.3em] font-medium transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC703] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${colorClasses} ${className}`}
    >
      Rulz&amp;Co
    </Link>
  );
}
