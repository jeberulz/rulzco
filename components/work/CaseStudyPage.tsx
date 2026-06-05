"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { NavMenu } from "@/components/NavMenu";
import { Footer } from "@/components/Footer";
import { type Project, getAdjacentProjects } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

// ─── Placeholder visual block ────────────────────────────────────────────────

function Visual({
  gradient,
  accent,
  className = "",
  aspectClass = "aspect-video",
}: {
  gradient: string;
  accent: string;
  className?: string;
  aspectClass?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl ${aspectClass} ${className}`}>
      <div className="absolute inset-0" style={{ background: gradient }} />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background: `radial-gradient(circle at 25% 75%, ${accent}55 0%, transparent 55%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />
      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(${accent}88 1px, transparent 1px), linear-gradient(90deg, ${accent}88 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.3em] font-medium opacity-30 text-white">
        Image placeholder
      </div>
    </div>
  );
}

// ─── Word-split hero title ───────────────────────────────────────────────────

function HeroTitle({ title }: { title: string }) {
  return (
    <h1 className="text-[clamp(56px,9vw,140px)] font-light leading-[0.88] tracking-[-0.03em] text-white">
      {title.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.18em] last:mr-0">
          <span className="hero-word inline-block">{word}</span>
        </span>
      ))}
    </h1>
  );
}

// ─── Stat card ───────────────────────────────────────────────────────────────

function StatCard({
  value,
  suffix,
  label,
  accent,
}: {
  value: string;
  suffix: string;
  label: string;
  accent: string;
}) {
  const numRef = useRef<HTMLSpanElement>(null);
  const isNumeric = !isNaN(parseFloat(value));

  useEffect(() => {
    if (!isNumeric || !numRef.current) return;
    const el = numRef.current;
    const target = parseFloat(value);
    const isDecimal = value.includes(".");
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to({ val: 0 }, {
            val: target,
            duration: 1.6,
            ease: "power2.out",
            onUpdate: function () {
              const v = (this.targets()[0] as { val: number }).val;
              el.textContent = isDecimal ? v.toFixed(1) : Math.round(v).toString();
            },
          });
        },
      });
    });
    return () => ctx.revert();
  }, [value, isNumeric]);

  return (
    <div className="stat-card flex flex-col gap-2 border-t border-[#2a2a2a] pt-6">
      <div className="flex items-end gap-0.5 leading-none">
        <span
          ref={numRef}
          className="text-[clamp(40px,5vw,72px)] font-light tabular-nums"
          style={{ color: accent }}
        >
          {isNumeric ? "0" : value}
        </span>
        <span
          className="text-[clamp(22px,2.5vw,38px)] font-light mb-1"
          style={{ color: accent }}
        >
          {suffix}
        </span>
      </div>
      <p className="text-[#666] text-sm tracking-wide">{label}</p>
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

export function CaseStudyPage({ project }: { project: Project }) {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const { next } = getAdjacentProjects(project.id);

  // Scroll progress bar
  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (progressBarRef.current) {
        progressBarRef.current.style.height = `${(scrolled / total) * 100}%`;
      }
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title word curtain
      gsap.fromTo(
        ".hero-word",
        { y: "110%", skewY: 3 },
        {
          y: "0%",
          skewY: 0,
          duration: 1.1,
          stagger: 0.07,
          ease: "power4.out",
          delay: 0.15,
        }
      );
      // Hero meta fade
      gsap.fromTo(
        ".hero-meta",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, delay: 0.7, ease: "power2.out" }
      );
      // Tagline
      gsap.fromTo(
        ".hero-tagline",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.9, ease: "power2.out" }
      );

      // Section headings
      gsap.utils.toArray<HTMLElement>(".reveal-heading").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 82%", once: true },
          }
        );
      });

      // Body text paragraphs
      gsap.utils.toArray<HTMLElement>(".reveal-body").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        );
      });

      // Visuals
      gsap.utils.toArray<HTMLElement>(".reveal-visual").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.97, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });

      // Stat cards
      ScrollTrigger.batch(".stat-card", {
        onEnter: (els) =>
          gsap.fromTo(els, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }),
        start: "top 85%",
        once: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#FFC703] selection:text-black">
      {/* Scroll progress — left edge */}
      <div className="fixed left-0 top-0 w-[3px] h-full z-50 bg-[#111]">
        <div
          ref={progressBarRef}
          className="w-full transition-none"
          style={{
            background: `linear-gradient(to bottom, ${project.accent}, #FFC703)`,
            height: "0%",
          }}
        />
      </div>

      {/* Nav */}
      <div className="fixed top-8 right-8 z-50">
        <NavMenu />
      </div>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0" style={{ background: project.gradient }} />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(ellipse at 20% 80%, ${project.accent}44 0%, transparent 60%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        {/* Bottom fade to page bg */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

        <div className="relative z-10 px-8 md:px-14 pb-14 pt-32 max-w-[1600px] mx-auto w-full">
          {/* Back link */}
          <Link
            href="/work"
            className="hero-meta inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/50 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
            All Work
          </Link>

          {/* Tags + number */}
          <div className="flex items-center gap-4 mb-8 hero-meta">
            <span className="text-[11px] tracking-[0.25em] font-medium" style={{ color: project.accent }}>
              {project.num}
            </span>
            <span className="w-px h-3 bg-white/20" />
            {project.tags.map((tag) => (
              <span key={tag} className="text-[11px] uppercase tracking-widest text-white/50">
                {tag}
              </span>
            ))}
            <span className="w-px h-3 bg-white/20" />
            <span className="text-[11px] uppercase tracking-widest text-white/50">{project.year}</span>
          </div>

          <HeroTitle title={project.title} />

          <p className="hero-tagline mt-6 text-xl md:text-2xl text-white/50 font-light italic max-w-xl">
            &ldquo;{project.tagline}&rdquo;
          </p>
        </div>
      </section>

      {/* ── META STRIP ──────────────────────────────────────────── */}
      <section className="border-t border-b border-[#1c1c1c] bg-[#0d0d0d]">
        <div className="max-w-[1600px] mx-auto px-8 md:px-14">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1c1c1c]">
            {[
              { label: "Role", value: project.role },
              { label: "Timeline", value: project.timeline },
              { label: "Year", value: project.year },
              { label: "Deliverables", value: project.deliverables.join(", ") },
            ].map((item) => (
              <div key={item.label} className="px-6 py-8 hero-meta">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#444] mb-2">{item.label}</p>
                <p className="text-white/80 text-sm leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ────────────────────────────────────────────── */}
      <section className="bg-white text-black py-24 md:py-32 px-8 md:px-14">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#999] mb-4 reveal-heading">
              Overview
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-black leading-tight tracking-tight reveal-heading">
              The challenge.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-xl md:text-2xl text-[#1a1a1a] font-light leading-relaxed reveal-body">
              {project.challenge}
            </p>
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-20 pt-16 border-t border-[#eee]">
          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#999] mb-4 reveal-heading">
              Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-black leading-tight tracking-tight reveal-heading">
              How we worked.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-xl md:text-2xl text-[#1a1a1a] font-light leading-relaxed reveal-body">
              {project.approach}
            </p>
          </div>
        </div>
      </section>

      {/* ── HERO VISUAL ─────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] px-8 md:px-14 py-16">
        <div className="max-w-[1600px] mx-auto reveal-visual">
          <Visual
            gradient={project.gradient}
            accent={project.accent}
            aspectClass="aspect-[16/7]"
          />
        </div>
      </section>

      {/* ── PROCESS SECTIONS ────────────────────────────────────── */}
      {project.sections.map((section, i) => {
        const isDark = i % 2 === 0;
        return (
          <section
            key={i}
            className={`py-24 md:py-32 px-8 md:px-14 ${isDark ? "bg-[#0d0d0d]" : "bg-white"}`}
          >
            <div className="max-w-[1600px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                {/* Left */}
                <div className="lg:col-span-4 lg:sticky lg:top-32">
                  <p
                    className={`text-[10px] uppercase tracking-[0.3em] mb-3 reveal-heading ${
                      isDark ? "text-[#444]" : "text-[#999]"
                    }`}
                    style={{ color: i === 0 ? project.accent : undefined }}
                  >
                    {section.label}
                  </p>
                  <h3
                    className={`text-2xl md:text-3xl font-light leading-snug tracking-tight reveal-heading ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    {section.heading}
                  </h3>
                </div>
                {/* Right */}
                <div className="lg:col-span-8 flex flex-col gap-10">
                  <p
                    className={`text-lg md:text-xl font-light leading-relaxed reveal-body ${
                      isDark ? "text-white/70" : "text-[#333]"
                    }`}
                  >
                    {section.body}
                  </p>
                  {/* Visual for every other section */}
                  {i < 2 && (
                    <Visual
                      gradient={project.gradient}
                      accent={project.accent}
                      aspectClass="aspect-[4/3]"
                      className="reveal-visual"
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── GALLERY ─────────────────────────────────────────────── */}
      <section className="bg-[#080808] py-16 px-8 md:px-14">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[0, 1, 2].map((i) => (
              <Visual
                key={i}
                gradient={project.gradient}
                accent={project.accent}
                aspectClass={i === 1 ? "aspect-[3/4]" : "aspect-[4/3]"}
                className="reveal-visual"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-24 md:py-32 px-8 md:px-14 border-t border-[#151515]">
        <div className="max-w-[1600px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#444] mb-16 reveal-heading">
            Results
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {project.stats.map((stat, i) => (
              <StatCard
                key={i}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                accent={project.accent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ─────────────────────────────────────────── */}
      {project.testimonial && (
        <section className="bg-white text-black py-24 md:py-32 px-8 md:px-14">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-1">
              <div className="w-1 h-12 mt-2" style={{ background: project.accent }} />
            </div>
            <div className="lg:col-span-10">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1a1a1a] leading-snug tracking-tight reveal-body mb-8">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>
              <div className="reveal-body">
                <p className="text-sm font-medium text-black">{project.testimonial.author}</p>
                <p className="text-sm text-[#999]">{project.testimonial.title}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── NEXT PROJECT ────────────────────────────────────────── */}
      {next && (
        <section className="bg-[#0a0a0a] py-16 px-8 md:px-14 border-t border-[#151515]">
          <div className="max-w-[1600px] mx-auto">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#444] mb-8">Next project</p>
            <Link
              href={`/work/${next.id}`}
              className="group flex items-end justify-between gap-8 py-8 border-t border-[#1c1c1c] hover:border-[#333] transition-colors"
            >
              <div>
                <div className="flex gap-3 mb-3">
                  {next.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest text-[#444]">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white/60 group-hover:text-white transition-colors duration-300">
                  {next.title}
                </h3>
              </div>
              <div
                className="flex-shrink-0 w-14 h-14 rounded-full border border-[#2a2a2a] group-hover:border-white flex items-center justify-center transition-all duration-300 mb-2"
                style={{ background: next.accent + "11" }}
              >
                <ArrowRight size={18} className="text-white/40 group-hover:text-white transition-colors" />
              </div>
            </Link>

            {/* Mini preview card */}
            <Link href={`/work/${next.id}`} className="block mt-4 reveal-visual">
              <div
                className="w-full rounded-xl overflow-hidden relative"
                style={{ aspectRatio: "21/6" }}
              >
                <div className="absolute inset-0" style={{ background: next.gradient }} />
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ background: `radial-gradient(circle at 30% 60%, ${next.accent}44 0%, transparent 55%)` }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-8 flex items-center gap-4">
                  <span className="text-white text-xl font-light">{next.title}</span>
                  <ArrowUpRight size={16} className="text-white/50" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Logo watermark */}
      <div className="overflow-hidden border-t border-[#111]">
        <Logo className="w-full h-auto text-[#141414] -mb-[1.5vw]" />
      </div>

      <Footer />
    </div>
  );
}
