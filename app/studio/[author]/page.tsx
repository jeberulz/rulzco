import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  authorSlugs,
  getAuthor,
  getArticlesByAuthor,
  isPlaceholderAuthor,
} from "@/lib/authors";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPerson } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/shared-metadata";
import { AVATAR_GRADIENT } from "@/components/news/AuthorByline";

export function generateStaticParams() {
  return authorSlugs.map((author) => ({ author }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ author: string }>;
}): Promise<Metadata> {
  const { author } = await params;
  const record = getAuthor(author);
  if (!record) return { title: "Author not found" };
  return buildMetadata({
    title: record.name,
    description: record.bio.slice(0, 160),
    path: `/studio/${record.slug}`,
    type: "profile",
    noIndex: isPlaceholderAuthor(record),
  });
}

export default async function AuthorRoute({
  params,
}: {
  params: Promise<{ author: string }>;
}) {
  const { author } = await params;
  const record = getAuthor(author);
  if (!record) notFound();

  const written = getArticlesByAuthor(record.slug);

  return (
    <>
      <JsonLd
        data={buildPerson({
          slug: record.slug,
          name: record.name,
          role: record.role,
          bio: record.bio,
          headshotUrl: record.headshotUrl,
          sameAs: record.sameAs,
          knowsAbout: record.knowsAbout,
        })}
      />

      <main className="min-h-screen bg-[#faf8f4] text-[#0f0f0f]">
        <div className="max-w-3xl mx-auto px-6 md:px-10 pt-24 pb-20">
          <Link
            href="/studio"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#999] hover:text-[#0f0f0f] transition-colors"
          >
            ← Studio
          </Link>

          <header className="mt-10 flex items-center gap-5">
            {record.headshotUrl ? (
              <Image
                src={record.headshotUrl}
                alt={record.name}
                width={72}
                height={72}
                className="w-18 h-18 rounded-full object-cover"
              />
            ) : (
              <div
                className="w-[72px] h-[72px] rounded-full shrink-0"
                style={{ background: AVATAR_GRADIENT }}
                aria-hidden="true"
              />
            )}
            <div>
              <h1 className="text-[28px] md:text-[34px] font-light tracking-tight leading-tight">
                {record.name}
              </h1>
              <p className="text-[13px] text-[#777] mt-1">{record.role}</p>
            </div>
          </header>

          <p className="mt-10 text-[17px] md:text-[18px] text-[#2a2a2a] font-light leading-[1.75]">
            {record.bio}
          </p>

          {record.credentials.length > 0 && (
            <ul className="mt-8 space-y-2">
              {record.credentials.map((c) => (
                <li
                  key={c}
                  className="text-[14px] text-[#444] font-light flex gap-3"
                >
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ background: "#FFC703" }}
                  />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          )}

          {record.sameAs.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-4">
              {record.sameAs.map((url) => (
                <a
                  key={url}
                  href={url}
                  rel="me noopener noreferrer"
                  target="_blank"
                  className="text-[12px] uppercase tracking-[0.2em] text-[#777] hover:text-[#0f0f0f] underline decoration-[#FFC703] underline-offset-4 transition-colors"
                >
                  {new URL(url).hostname.replace(/^www\./, "")}
                </a>
              ))}
            </div>
          )}

          {written.length > 0 && (
            <section className="mt-16 border-t border-[#e8e4dd] pt-10">
              <h2 className="text-[12px] uppercase tracking-[0.3em] text-[#999]">
                Recent writing
              </h2>
              <ul className="mt-6 space-y-5">
                {written.map((a) => (
                  <li key={a.id}>
                    <Link
                      href={`/news/${a.id}`}
                      className="group block"
                    >
                      <p className="text-[18px] font-light leading-snug group-hover:underline decoration-[#FFC703] underline-offset-4">
                        {a.title}
                      </p>
                      <p className="text-[12px] text-[#999] mt-1">
                        {a.category} · {a.date}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>
    </>
  );
}
