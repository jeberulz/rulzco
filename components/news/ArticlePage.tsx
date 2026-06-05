"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from "lucide-react";
import { NavMenu } from "@/components/NavMenu";
import { Footer } from "@/components/Footer";
import LineReveal from "@/components/LineReveal";
import type { Article, ContentBlock } from "@/lib/articles";
import { categoryToSlug } from "@/lib/articles";

gsap.registerPlugin(ScrollTrigger);

// ─── Content block renderer ───────────────────────────────────────────────────

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="article-block text-[17px] md:text-[18px] text-[#2a2a2a] font-light leading-[1.75] mb-7">
          {block.text}
        </p>
      );

    case "heading":
      return (
        <h2 className="article-block text-[26px] md:text-[32px] font-medium text-[#0f0f0f] mt-14 mb-5 tracking-tight leading-tight">
          {block.text}
        </h2>
      );

    case "quote":
      return (
        <figure className="article-block my-12 border-l-2 border-[#FFC703] pl-6 md:pl-8">
          <blockquote>
            <p className="text-[22px] md:text-[26px] font-light text-[#0f0f0f] leading-snug tracking-tight">
              &ldquo;{block.text}&rdquo;
            </p>
          </blockquote>
          {block.cite && (
            <figcaption className="mt-4 text-[11px] uppercase tracking-[0.25em] text-[#999]">
              — {block.cite}
            </figcaption>
          )}
        </figure>
      );

    case "list":
      return (
        <ul className="article-block my-8 space-y-3.5">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="text-[17px] md:text-[18px] text-[#2a2a2a] font-light leading-[1.7] flex gap-4"
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full mt-3 shrink-0"
                style={{ background: "#FFC703" }}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "callout":
      return (
        <aside
          className="article-block my-10 border-l-4 border-[#FFC703] p-6 md:p-7 rounded-r-lg"
          style={{ background: "#FFC70312" }}
        >
          <p className="text-[15px] md:text-[16px] text-[#0f0f0f] font-light leading-relaxed">
            {block.text}
          </p>
        </aside>
      );
  }
}

// ─── Related article card (matches news listing) ──────────────────────────────

function RelatedCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/news/${article.id}`}
      className="related-card group flex flex-col overflow-hidden rounded-xl border border-[#ece9e3] bg-white hover:border-[#d4cfca] transition-all duration-300 h-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.07)]"
    >
      <div className="relative overflow-hidden" style={{ paddingBottom: "52%" }}>
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

// ─── Main article page ────────────────────────────────────────────────────────

export function ArticlePage({
  article,
  related,
}: {
  article: Article;
  related: Article[];
}) {
  const progressRef = useRef<HTMLDivElement>(null);
  const categorySlug = categoryToSlug(article.category);

  // Scroll progress bar
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
      // Header reveal
      gsap.fromTo(
        ".article-meta-top",
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.1 }
      );
      gsap.fromTo(
        ".article-meta-row",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.25, stagger: 0.05 }
      );
      gsap.fromTo(
        ".article-excerpt",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.6 }
      );
      gsap.fromTo(
        ".article-author",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.75 }
      );

      // Hero image
      gsap.fromTo(
        ".article-hero-img",
        { opacity: 0, scale: 0.98, y: 24 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
      );

      // Body block stagger on scroll
      ScrollTrigger.batch(".article-block", {
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.05,
              ease: "power2.out",
            }
          ),
        start: "top 92%",
        once: true,
      });

      // Related cards
      ScrollTrigger.batch(".related-card", {
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: "power2.out",
            }
          ),
        start: "top 88%",
        once: true,
      });

      // Reveal-up sections
      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });
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

      {/* ── ARTICLE HEADER ──────────────────────────────────────── */}
      <header className="px-8 md:px-14 pt-20 pb-10 md:pb-14">
        <div className="max-w-3xl mx-auto">
          {/* Back to dispatch */}
          <Link
            href="/news"
            className="article-meta-top inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#999] hover:text-[#0f0f0f] transition-colors"
          >
            <ArrowLeft size={11} />
            The Dispatch
          </Link>

          {/* Category + date */}
          <div className="article-meta-row mt-10 flex items-center gap-3 flex-wrap">
            <Link
              href={`/news/category/${categorySlug}`}
              className="text-[10px] uppercase tracking-widest font-medium text-[#0f0f0f] border border-[#e0dbd0] px-3 py-1.5 rounded-full hover:border-[#FFC703] hover:bg-[#FFC703]/8 transition-all"
            >
              {article.category}
            </Link>
            <span className="text-[#bbb] text-[11px] flex items-center gap-1.5">
              <Calendar size={11} />
              {article.date}
            </span>
            <span className="text-[#ddd] text-[11px]">·</span>
            <span className="text-[#bbb] text-[11px] flex items-center gap-1.5">
              <Clock size={11} />
              {article.readTime} read
            </span>
          </div>

          {/* Title */}
          <h1 className="article-meta-row mt-6 text-[clamp(34px,5.2vw,68px)] font-light text-[#0f0f0f] leading-[1.05] tracking-[-0.015em]">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="article-excerpt mt-8 text-[19px] md:text-[21px] text-[#666] font-light leading-relaxed">
            {article.excerpt}
          </p>

          {/* Author */}
          <div className="article-author mt-10 pt-8 border-t border-[#e8e4dd] flex items-center gap-4">
            <div
              className="w-11 h-11 rounded-full shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, #FFC703 0%, #ffaa00 50%, #ff8800 100%)",
              }}
            />
            <div>
              <p className="text-[14px] font-medium text-[#0f0f0f] leading-tight">
                {article.author.name}
              </p>
              <p className="text-[11px] text-[#999] mt-0.5">
                {article.author.role}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ── HERO IMAGE ──────────────────────────────────────────── */}
      <section className="px-8 md:px-14 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto">
          <div
            className="article-hero-img relative overflow-hidden rounded-2xl"
            style={{ paddingBottom: "50%" }}
          >
            <div
              className="absolute inset-0"
              style={{ background: article.gradient }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at 20% 80%, ${article.accent}44 0%, transparent 55%)`,
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                backgroundSize: "180px 180px",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────── */}
      <article className="px-8 md:px-14 pb-16 md:pb-24">
        <div className="max-w-2xl mx-auto">
          {article.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </article>

      {/* ── AUTHOR BIO ──────────────────────────────────────────── */}
      <section className="px-8 md:px-14 pb-20 md:pb-24">
        <div className="max-w-2xl mx-auto reveal-up">
          <div className="flex gap-5 md:gap-6 p-6 md:p-7 rounded-2xl border border-[#ece9e3] bg-white">
            <div
              className="w-14 h-14 md:w-16 md:h-16 rounded-full shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, #FFC703 0%, #ffaa00 50%, #ff8800 100%)",
              }}
            />
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#aaa] mb-2">
                Written by
              </p>
              <p className="text-[16px] font-medium text-[#0f0f0f]">
                {article.author.name}
              </p>
              <p className="text-[12px] text-[#999] mb-3">
                {article.author.role}
              </p>
              <p className="text-[14px] text-[#666] font-light leading-relaxed">
                Rulz&amp;Co is a design and product partnership for AI-native
                companies. We work on strategy, design, and equity partnerships
                with founders building something worth betting on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED ─────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-[#f5f2eb] py-20 md:py-24 px-8 md:px-14">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex items-end justify-between gap-6 mb-10 reveal-up">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#999] mb-3">
                  Keep reading
                </p>
                <LineReveal stagger={0.07} start="top 85%">
                  <h2 className="text-[clamp(28px,4vw,52px)] font-light text-[#0f0f0f] leading-[0.95] tracking-tight">
                    More from The Dispatch
                  </h2>
                </LineReveal>
              </div>
              <Link
                href="/news"
                className="hidden md:inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#888] hover:text-[#0f0f0f] transition-colors"
              >
                All articles <ArrowUpRight size={11} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((a) => (
                <RelatedCard key={a.id} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── NEWSLETTER ───────────────────────────────────────────── */}
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
