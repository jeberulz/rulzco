"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Clock } from "lucide-react";
import { NavMenu } from "@/components/NavMenu";
import { Footer } from "@/components/Footer";
import LineReveal from "@/components/LineReveal";
import { NewsletterSignup } from "@/components/news/NewsletterSignup";
import {
  articles,
  CATEGORIES,
  categoryToSlug,
  slugToCategory,
  type Article,
} from "@/lib/articles";
import { parseContentDate } from "@/lib/seo/dates";

gsap.registerPlugin(ScrollTrigger);

const ISSUE_LABEL = (() => {
  const d = parseContentDate(articles[0]?.date);
  return d
    ? d.toLocaleDateString("en-GB", { month: "long", year: "numeric" })
    : "";
})();

// ─── Featured card ─────────────────────────────────────────────────────────────

function FeaturedCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/news/${article.id}`}
      className="featured-card group relative flex overflow-hidden rounded-2xl h-full min-h-[400px] cursor-pointer"
    >
      {article.image ? (
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <>
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ background: article.gradient }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at 20% 80%, ${article.accent}44 0%, transparent 55%)`,
            }}
          />
        </>
      )}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

      {/* Featured badge */}
      <div className="absolute top-6 left-6">
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#FFC703] border border-[#FFC703]/30 bg-[#FFC703]/10 px-3 py-1.5 rounded-full">
          Featured
        </span>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
        <div className="mb-4 flex items-center gap-3 flex-wrap">
          <span
            className="text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full border"
            style={{
              color: article.accent,
              borderColor: article.accent + "44",
              background: article.accent + "11",
            }}
          >
            {article.category}
          </span>
          <span className="text-white/40 text-[10px] flex items-center gap-1.5">
            <Clock size={9} />
            {article.readTime} read
          </span>
        </div>
        <h2 className="text-white text-[clamp(22px,3vw,44px)] font-light leading-tight tracking-tight max-w-2xl">
          {article.title}
        </h2>
        <p className="text-white/50 mt-3 text-[13px] font-light leading-relaxed max-w-xl hidden md:block">
          {article.excerpt}
        </p>
        <div className="mt-6 inline-flex items-center gap-2 text-[#FFC703] text-[10px] uppercase tracking-widest group-hover:gap-3 transition-all duration-200">
          Read article
          <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

// ─── Article card ──────────────────────────────────────────────────────────────

function ArticleCard({
  article,
  compact = false,
}: {
  article: Article;
  compact?: boolean;
}) {
  return (
    <Link
      href={`/news/${article.id}`}
      className="article-card group flex flex-col overflow-hidden rounded-xl border border-[#ece9e3] bg-white hover:border-[#d4cfca] transition-all duration-300 h-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.07)]"
    >
      {/* Thumbnail strip */}
      <div
        className="relative overflow-hidden"
        style={{ paddingBottom: compact ? "46%" : "52%" }}
      >
          {article.image ? (
            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <>
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]"
                style={{ background: article.gradient }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 30% 60%, ${article.accent}33 0%, transparent 60%)`,
                }}
              />
            </>
          )}
        </div>

      {/* Text body */}
      <div className={`flex flex-col flex-1 relative ${compact ? "p-5 pt-4" : "p-6"}`}>
        {/* Colored dot for compact cards without a thumbnail */}
        {compact && !article.image && (
          <div
            className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full opacity-80"
            style={{ background: article.accent }}
          />
        )}

        <div className="flex items-center gap-2 mb-3 pr-6">
          <span className="text-[9px] uppercase tracking-widest font-medium text-[#0f0f0f]">
            {article.category}
          </span>
          <span className="text-[#ddd]">·</span>
          <span className="text-[#bbb] text-[10px]">{article.date}</span>
        </div>

        <h3
          className={`font-medium text-[#0f0f0f] leading-snug group-hover:text-black transition-colors flex-1 ${
            compact ? "text-[14px]" : "text-[16px] md:text-[17px]"
          }`}
        >
          {article.title}
        </h3>

        {!compact && (
          <p className="text-[#999] text-[13px] font-light leading-relaxed mt-2 line-clamp-2">
            {article.excerpt}
          </p>
        )}

        <div className="mt-4 pt-4 border-t border-[#f0ece6] flex items-center justify-between">
          <span className="text-[#bbb] text-[10px] flex items-center gap-1.5">
            <Clock size={9} />
            {article.readTime} read
          </span>
          <ArrowUpRight
            size={12}
            className="text-[#ddd] group-hover:text-[#FFC703] transition-colors"
          />
        </div>
      </div>
    </Link>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────────

export function NewsPage() {
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const hasMounted = useRef(false);

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const featured = filtered.find((a) => a.featured) ?? filtered[0];
  const rest = filtered.filter((a) => a.id !== featured?.id);
  const sideArticles = rest.slice(0, 2);
  const gridArticles = rest.slice(2);

  // Sync the active category from / to the URL so a filtered view is
  // shareable and survives reload, without leaving the client-filtered page.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("category");
    if (!slug) return;
    const cat = slugToCategory(slug);
    if (cat) setActiveCategory(cat);
  }, []);

  const selectCategory = (cat: string) => {
    if (cat === activeCategory) return;
    setActiveCategory(cat);
    const url = new URL(window.location.href);
    if (cat === "All") url.searchParams.delete("category");
    else url.searchParams.set("category", categoryToSlug(cat));
    window.history.replaceState(null, "", url);
  };

  // Scroll progress
  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current && total > 0)
        progressRef.current.style.height = `${(window.scrollY / total) * 100}%`;
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Initial mount animations — skipped entirely for reduced-motion users
  // (content is visible by default, so nothing is gated behind the timeline).
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Masthead char reveal
      gsap.fromTo(
        ".masthead-char",
        { y: "108%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.75,
          stagger: 0.018,
          ease: "power3.out",
          delay: 0.15,
        }
      );
      gsap.fromTo(
        ".masthead-meta",
        { opacity: 0 },
        { opacity: 1, duration: 0.7, delay: 0.5, ease: "power2.out" }
      );

      // Cards
      gsap.fromTo(
        ".featured-card",
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.65, ease: "power3.out" }
      );
      gsap.fromTo(
        ".side-card",
        { opacity: 0, x: 22 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.13,
          delay: 0.75,
          ease: "power3.out",
        }
      );

      // Grid — scroll triggered
      ScrollTrigger.batch(".article-card", {
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.55, stagger: 0.07, ease: "power2.out" }
          ),
        start: "top 90%",
        once: true,
      });

      // Newsletter
      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 86%", once: true },
          }
        );
      });
    });
    return () => mm.revert();
  }, []);

  // Filter transition
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        ".featured-card, .side-card, .article-card",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.045, ease: "power2.out" }
      );
    });
    return () => mm.revert();
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#faf9f6] selection:bg-[#FFC703] selection:text-black">
      {/* Scroll progress */}
      <div className="fixed left-0 top-0 w-[3px] h-full z-50 bg-[#FFC703]/10">
        <div
          ref={progressRef}
          className="w-full bg-[#FFC703] transition-none"
          style={{ height: "0%" }}
        />
      </div>

      {/* Nav */}
      <div className="fixed top-8 right-8 z-50">
        <NavMenu />
      </div>

      {/* ── MASTHEAD ───────────────────────────────────────────── */}
      <header className="border-b border-[#e8e4dd] px-8 md:px-14 pt-20">
        <div className="max-w-[1600px] mx-auto">
          {/* Meta top row */}
          <div className="masthead-meta flex items-center justify-between pb-4 border-b border-[#e8e4dd] text-[10px] uppercase tracking-[0.3em] text-[#c0bab0]">
            <span>Rulz&amp;Co</span>
            {ISSUE_LABEL && <span>{ISSUE_LABEL}</span>}
          </div>

          {/* Big title */}
          <div className="py-7 md:py-9">
            <div className="flex items-baseline gap-[0.18em] flex-wrap">
              {/* THE — dark */}
              <span className="text-[clamp(52px,9.5vw,148px)] font-black tracking-[-0.04em] text-[#0f0f0f] leading-[0.86] uppercase">
                {"THE".split("").map((ch, i) => (
                  <span key={i} className="inline-block overflow-hidden">
                    <span className="masthead-char inline-block">{ch}</span>
                  </span>
                ))}
              </span>
              {/* DISPATCH — gold */}
              <span
                className="text-[clamp(52px,9.5vw,148px)] font-black tracking-[-0.04em] leading-[0.86] uppercase"
                style={{ color: "#FFC703" }}
              >
                {"DISPATCH".split("").map((ch, i) => (
                  <span key={i} className="inline-block overflow-hidden">
                    <span className="masthead-char inline-block">{ch}</span>
                  </span>
                ))}
              </span>
            </div>
          </div>

          {/* Meta bottom row */}
          <div className="masthead-meta pb-5 flex items-center justify-between gap-4">
            <p className="text-[11px] text-[#aaa] font-light tracking-wide">
              Perspectives on design, AI, and building products that matter
            </p>
            <span className="hidden md:block text-[10px] uppercase tracking-[0.25em] text-[#ccc] shrink-0">
              {articles.length}&nbsp;articles
            </span>
          </div>
        </div>
      </header>

      {/* ── CATEGORY BAR ─────────────────────────────────────── */}
      <div
        className="sticky top-0 z-40 border-b border-[#e8e4dd]"
        style={{ background: "rgba(250,249,246,0.96)", backdropFilter: "blur(8px)" }}
      >
        <div
          className="max-w-[1600px] mx-auto px-8 md:px-14 py-3 flex items-center gap-2 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => selectCategory(cat)}
              aria-pressed={activeCategory === cat}
              className="whitespace-nowrap text-[10px] uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-200 shrink-0 cursor-pointer"
              style={{
                background: activeCategory === cat ? "#FFC703" : "transparent",
                color: activeCategory === cat ? "#000" : "#999",
                borderColor: activeCategory === cat ? "#FFC703" : "#e0dbd0",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── CONTENT ──────────────────────────────────────────── */}
      <main className="max-w-[1600px] mx-auto px-8 md:px-14 py-12 md:py-16">
        {filtered.length === 0 ? (
          <div className="py-40 text-center">
            <p className="text-[#bbb] text-lg font-light">Nothing published here yet.</p>
          </div>
        ) : (
          <>
            {/* Hero row: featured + side column */}
            {featured && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                <div className="lg:col-span-2 flex flex-col">
                  <FeaturedCard article={featured} />
                </div>

                {sideArticles.length > 0 && (
                  <div className="flex flex-col gap-4">
                    {sideArticles.map((a) => (
                      <div key={a.id} className="side-card flex-1 flex flex-col">
                        <ArticleCard article={a} compact />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Article grid */}
            {gridArticles.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {gridArticles.map((a) => (
                  <ArticleCard key={a.id} article={a} />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      {/* ── NEWSLETTER ───────────────────────────────────────── */}
      <section className="bg-[#0f0f0f] py-24 md:py-32 px-8 md:px-14">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#444] mb-4 reveal-up">
              Stay in the loop
            </p>
            <LineReveal stagger={0.07} start="top 82%">
              <h2 className="text-[clamp(32px,5vw,72px)] font-light text-white leading-[0.95] tracking-tight">
                The Dispatch,<br />in your inbox.
              </h2>
            </LineReveal>
            <p className="text-[#555] font-light leading-relaxed mt-6 max-w-md reveal-up">
              Ideas on design, AI, and building things that matter. Published
              when we have something worth saying — not on a schedule.
            </p>
          </div>

          <div className="reveal-up">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
