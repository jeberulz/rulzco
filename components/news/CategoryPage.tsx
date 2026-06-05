"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import { NavMenu } from "@/components/NavMenu";
import { Footer } from "@/components/Footer";
import LineReveal from "@/components/LineReveal";
import type { Article } from "@/lib/articles";
import { CATEGORIES, categoryToSlug } from "@/lib/articles";

gsap.registerPlugin(ScrollTrigger);

// ─── Article card (matches news listing styling) ──────────────────────────────

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/news/${article.id}`}
      className="article-card group flex flex-col overflow-hidden rounded-xl border border-[#ece9e3] bg-white hover:border-[#d4cfca] transition-all duration-300 h-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.07)]"
    >
      <div className="relative overflow-hidden" style={{ paddingBottom: "52%" }}>
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

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[9px] uppercase tracking-widest font-medium text-[#0f0f0f]">
            {article.category}
          </span>
          <span className="text-[#ddd]">·</span>
          <span className="text-[#bbb] text-[10px]">{article.date}</span>
        </div>
        <h3 className="font-medium text-[#0f0f0f] leading-snug flex-1 text-[16px] md:text-[17px] group-hover:text-black transition-colors">
          {article.title}
        </h3>
        <p className="text-[#999] text-[13px] font-light leading-relaxed mt-2 line-clamp-2">
          {article.excerpt}
        </p>
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

// ─── Main category page ───────────────────────────────────────────────────────

export function CategoryPage({
  category,
  articles,
}: {
  category: string;
  articles: Article[];
}) {
  const progressRef = useRef<HTMLDivElement>(null);

  // Scroll progress
  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current)
        progressRef.current.style.height = `${(window.scrollY / total) * 100}%`;
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Mount animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".category-meta",
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.1 }
      );
      gsap.fromTo(
        ".category-char",
        { y: "108%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.75,
          stagger: 0.02,
          ease: "power3.out",
          delay: 0.2,
        }
      );
      gsap.fromTo(
        ".category-sub",
        { opacity: 0 },
        { opacity: 1, duration: 0.7, delay: 0.6, ease: "power2.out" }
      );

      ScrollTrigger.batch(".article-card", {
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: "power2.out" }
          ),
        start: "top 92%",
        once: true,
      });

      // Initial cards (above the fold) — animate in immediately
      gsap.fromTo(
        ".article-card",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.06,
          delay: 0.7,
          ease: "power2.out",
        }
      );
    });
    return () => ctx.revert();
  }, []);

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

      {/* ── HEADER ──────────────────────────────────────────────── */}
      <header className="border-b border-[#e8e4dd] px-8 md:px-14 pt-20">
        <div className="max-w-[1600px] mx-auto">
          {/* Back link */}
          <Link
            href="/news"
            className="category-meta inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#999] hover:text-[#0f0f0f] transition-colors mb-8"
          >
            <ArrowLeft size={11} />
            The Dispatch
          </Link>

          {/* Meta top row */}
          <div className="category-meta flex items-center justify-between pb-4 border-b border-[#e8e4dd] text-[10px] uppercase tracking-[0.3em] text-[#c0bab0]">
            <span>Category Archive</span>
            <span>
              {articles.length} article{articles.length === 1 ? "" : "s"}
            </span>
          </div>

          {/* Big category title */}
          <div className="py-7 md:py-9">
            <div className="overflow-hidden">
              <h1 className="text-[clamp(48px,8.5vw,128px)] font-black tracking-[-0.04em] text-[#0f0f0f] leading-[0.88] uppercase">
                {category.split("").map((ch, i) =>
                  ch === " " ? (
                    <span key={i} className="inline-block w-[0.3em]" />
                  ) : (
                    <span key={i} className="inline-block overflow-hidden">
                      <span className="category-char inline-block">{ch}</span>
                    </span>
                  )
                )}
              </h1>
            </div>
          </div>

          {/* Bottom meta */}
          <div className="category-sub pb-5 flex items-center justify-between gap-4">
            <p className="text-[11px] text-[#aaa] font-light tracking-wide">
              Everything we&apos;ve published in {category.toLowerCase()}
            </p>
          </div>
        </div>
      </header>

      {/* ── CATEGORY NAVIGATION ─────────────────────────────────── */}
      <div
        className="sticky top-0 z-40 border-b border-[#e8e4dd]"
        style={{ background: "rgba(250,249,246,0.96)", backdropFilter: "blur(8px)" }}
      >
        <div
          className="max-w-[1600px] mx-auto px-8 md:px-14 py-3 flex items-center gap-2 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = cat === category;
            const href = cat === "All" ? "/news" : `/news/category/${categoryToSlug(cat)}`;
            return (
              <Link
                key={cat}
                href={href}
                className="whitespace-nowrap text-[10px] uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-200 shrink-0"
                style={{
                  background: isActive ? "#FFC703" : "transparent",
                  color: isActive ? "#000" : "#999",
                  borderColor: isActive ? "#FFC703" : "#e0dbd0",
                }}
              >
                {cat}
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── ARTICLES GRID ───────────────────────────────────────── */}
      <main className="max-w-[1600px] mx-auto px-8 md:px-14 py-12 md:py-16">
        {articles.length === 0 ? (
          <div className="py-40 text-center">
            <p className="text-[#bbb] text-lg font-light">
              No articles in this category yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        )}
      </main>

      {/* ── NEWSLETTER ───────────────────────────────────────────── */}
      <section className="bg-[#0f0f0f] py-24 md:py-32 px-8 md:px-14">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#444] mb-4">
              Stay in the loop
            </p>
            <LineReveal stagger={0.07} start="top 82%">
              <h2 className="text-[clamp(32px,5vw,72px)] font-light text-white leading-[0.95] tracking-tight">
                The Dispatch,<br />in your inbox.
              </h2>
            </LineReveal>
            <p className="text-[#555] font-light leading-relaxed mt-6 max-w-md">
              Ideas on design, AI, and building things that matter. Published
              when we have something worth saying — not on a schedule.
            </p>
          </div>

          <div>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full px-6 py-3.5 text-sm text-white placeholder:text-[#444] focus:outline-none focus:border-[#FFC703] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#FFC703] text-black rounded-full px-7 py-3.5 text-[10px] font-bold uppercase tracking-widest hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[#2e2e2e] text-[10px] uppercase tracking-widest mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
