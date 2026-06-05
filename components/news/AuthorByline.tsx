import Link from "next/link";
import Image from "next/image";

export type BylineAuthor = {
  name: string;
  role: string;
  /** Links the byline to /studio/[slug] when present (E-E-A-T author page). */
  slug?: string;
  /** Optional headshot; falls back to the brand gradient avatar. */
  headshotUrl?: string;
};

/**
 * Article byline with a linked author name (to the author's /studio page when a
 * slug is set), surfacing the human behind the piece for E-E-A-T and AI
 * citation models.
 */
export function AuthorByline({
  author,
  className = "",
}: {
  author: BylineAuthor;
  className?: string;
}) {
  const avatar = author.headshotUrl ? (
    <Image
      src={author.headshotUrl}
      alt={author.name}
      width={44}
      height={44}
      className="w-11 h-11 rounded-full shrink-0 object-cover"
    />
  ) : (
    <div
      className="w-11 h-11 rounded-full shrink-0"
      style={{
        background:
          "linear-gradient(135deg, #FFC703 0%, #ffaa00 50%, #ff8800 100%)",
      }}
      aria-hidden="true"
    />
  );

  const nameEl = (
    <p className="text-[14px] font-medium text-[#0f0f0f] leading-tight">
      {author.name}
    </p>
  );

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {author.slug ? (
        <Link
          href={`/studio/${author.slug}`}
          className="shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC703]"
          aria-label={`${author.name} — author profile`}
        >
          {avatar}
        </Link>
      ) : (
        avatar
      )}
      <div>
        {author.slug ? (
          <Link
            href={`/studio/${author.slug}`}
            className="hover:text-[#0f0f0f] hover:underline decoration-[#FFC703] underline-offset-4 transition-colors"
          >
            {nameEl}
          </Link>
        ) : (
          nameEl
        )}
        <p className="text-[11px] text-[#999] mt-0.5">{author.role}</p>
      </div>
    </div>
  );
}
