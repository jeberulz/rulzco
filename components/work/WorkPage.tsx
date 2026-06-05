"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { NavMenu } from "@/components/NavMenu";
import { BrandMark } from "@/components/BrandMark";
import { Footer } from "@/components/Footer";
import { projects } from "@/lib/projects";
import type { Project } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

const ALL_TAGS = ["All", "App", "Web", "Brand", "AI", "Fintech", "Health", "Deep tech", "eCommerce"];

// ─── Project Card ────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(overlayRef.current, {
      opacity: 1,
      duration: 0.35,
      ease: "power2.out",
    });
    gsap.to(contentRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });
    gsap.to(contentRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
    });
  };

  return (
    <Link
      href={`/work/${project.id}`}
      className={`work-card group relative overflow-hidden rounded-xl cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Placeholder image — gradient bg */}
      <div
        className="w-full h-full absolute inset-0"
        style={{ background: project.gradient }}
      />

      {/* Accent glow */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 30% 70%, ${project.accent}44 0%, transparent 60%)`,
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Permanent bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Project number — top right */}
      <span
        className="absolute top-5 right-5 text-[11px] tracking-[0.25em] font-medium z-10"
        style={{ color: project.accent }}
      >
        {project.num}
      </span>

      {/* Tags — top left */}
      <div className="absolute top-5 left-5 flex gap-2 z-10">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] uppercase tracking-widest text-white/60 border border-white/15 px-2.5 py-1 rounded-full backdrop-blur-sm bg-black/20"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Always-visible bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-white text-xl md:text-2xl font-medium tracking-tight leading-tight">
              {project.title}
            </h3>
            <span className="text-white/40 text-xs tracking-widest uppercase mt-1 block">
              {project.year}
            </span>
          </div>
          <div
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: project.accent + "22" }}
          >
            <ArrowUpRight size={14} className="text-white" />
          </div>
        </div>
      </div>

      {/* Hover overlay — description */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-20 flex flex-col justify-end p-6"
        style={{
          opacity: 0,
          background: `linear-gradient(to top, ${project.accent}18 0%, rgba(0,0,0,0.75) 100%)`,
        }}
      >
        <div
          ref={contentRef}
          style={{ transform: "translateY(20px)", opacity: 0 }}
          className="space-y-3"
        >
          <p className="text-white/80 text-sm leading-relaxed max-w-xs">
            {project.description}
          </p>
          <div className="flex items-center gap-1.5">
            <div
              className="w-1 h-1 rounded-full"
              style={{ background: project.accent }}
            />
            <span
              className="text-xs font-medium tracking-wide"
              style={{ color: project.accent }}
            >
              {project.outcome}
            </span>
          </div>
          <span className="text-xs uppercase tracking-widest text-white/60 hover:text-white flex items-center gap-1.5 mt-2 transition-colors">
            View case study <ArrowUpRight size={11} />
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export function WorkPage() {
  const [activeTag, setActiveTag] = useState("All");
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  // Entry animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.1 }
      );
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 1, ease: "power3.out", delay: 0.4 }
      );
      gsap.fromTo(
        ".work-meta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.5, ease: "power2.out" }
      );
      gsap.fromTo(
        ".filter-pill",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, delay: 0.7, ease: "power2.out" }
      );

      // Cards scroll-triggered
      ScrollTrigger.batch(".work-card", {
        onEnter: (els) => {
          gsap.fromTo(
            els,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: "power3.out",
            }
          );
        },
        start: "top 88%",
        once: true,
      });
    });

    return () => ctx.revert();
  }, []);

  // Re-animate cards on filter change
  useEffect(() => {
    gsap.fromTo(
      ".work-card",
      { opacity: 0, y: 30, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.07,
        ease: "power2.out",
      }
    );
  }, [activeTag]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Nav */}
      <div className="fixed top-8 right-8 z-50">
        <NavMenu />
      </div>

      {/* Header */}
      <header ref={headerRef} className="px-6 md:px-12 pt-20 md:pt-28 pb-16 max-w-[1920px] mx-auto">
        <div className="mb-10 work-meta">
          <BrandMark variant="dark" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-6 work-meta">
              <div className="w-1.5 h-5 bg-[#FFC703]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#4A4A4A]">
                Selected projects
              </span>
            </div>
            <h1
              ref={titleRef}
              className="text-[clamp(64px,10vw,160px)] font-light leading-[0.9] tracking-[-0.03em] text-white"
            >
              Work
            </h1>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 pb-3 work-meta">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#4A4A4A]">
              2023 — 2025
            </span>
            <span className="text-5xl md:text-7xl font-light text-[#222] leading-none tabular-nums">
              {String(filtered.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div ref={lineRef} className="w-full h-px bg-[#1e1e1e]" />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mt-8">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`filter-pill text-[11px] uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-200 ${
                activeTag === tag
                  ? "bg-[#FFC703] border-[#FFC703] text-black font-semibold"
                  : "border-[#2a2a2a] text-[#666] hover:border-[#444] hover:text-[#999]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </header>

      {/* Grid */}
      <main ref={gridRef} className="px-6 md:px-12 pb-32 max-w-[1920px] mx-auto">
        {filtered.length === 0 ? (
          <div className="flex items-center justify-center py-40 text-[#333] text-sm tracking-widest uppercase">
            No projects in this category yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5 auto-rows-[340px]">
            {filtered.map((project, i) => {
              // Editorial layout: first two projects span differently
              if (i === 0) {
                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    className="lg:col-span-8 row-span-2"
                  />
                );
              }
              if (i === 1) {
                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    className="lg:col-span-4"
                  />
                );
              }
              if (i === 2) {
                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    className="lg:col-span-4"
                  />
                );
              }
              // Remaining: 3-col grid
              if (i === 3 || i === 4 || i === 5) {
                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    className="lg:col-span-4"
                  />
                );
              }
              // Any extras: 2-col split
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  className="lg:col-span-6"
                />
              );
            })}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-24 pt-12 border-t border-[#1a1a1a] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-[#555] text-xs uppercase tracking-widest mb-2">
              Have a project in mind?
            </p>
            <p className="text-white text-2xl md:text-3xl font-light">
              Let&apos;s build something worth remembering.
            </p>
          </div>
          <a
            href="mailto:hello@rulz.co"
            className="flex-shrink-0 border border-[#FFC703] text-[#FFC703] rounded-full px-8 py-3 text-[13px] font-medium tracking-[0.05em] uppercase flex items-center gap-2 hover:bg-[#FFC703] hover:text-black transition-all duration-300 group"
          >
            Start a project
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
