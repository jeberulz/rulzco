"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavMenu } from "@/components/NavMenu";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { breadcrumbsForProject } from "@/lib/seo/breadcrumbs";
import { getAdjacentProjects, type Project } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

type VisualPlaceholderProps = {
  project: Project;
  index: string;
  label: string;
  caption?: string;
  aspectClass?: string;
  className?: string;
};

function VisualPlaceholder({
  project,
  index,
  label,
  caption,
  aspectClass = "aspect-[16/10]",
  className = "",
}: VisualPlaceholderProps) {
  return (
    <figure
      className={`case-visual ${className}`}
      aria-label={`${label} image placeholder`}
    >
      <div
        className={`relative isolate overflow-hidden border border-black/10 bg-[#e9e6df] ${aspectClass}`}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 78% 22%, ${project.accent}35 0%, transparent 30%),
              radial-gradient(circle at 18% 82%, ${project.accent}1f 0%, transparent 28%),
              linear-gradient(135deg, #e4e1d9 0%, #f4f1e9 52%, #dedbd3 100%)
            `,
          }}
        />
        <div className="absolute inset-x-0 top-1/2 h-px bg-black/8" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-black/8" />
        <div className="absolute left-5 top-5 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-black/45 md:left-7 md:top-7">
          <span
            className="h-2.5 w-2.5"
            style={{ backgroundColor: project.accent }}
          />
          {project.title}
        </div>
        <span className="absolute right-4 top-2 font-mono text-[clamp(4rem,12vw,11rem)] font-light leading-none tracking-[-0.08em] text-black/[0.055] md:right-8">
          {index}
        </span>
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 border-t border-black/15 pt-3 text-[10px] uppercase tracking-[0.18em] text-black/45 md:bottom-7 md:left-7 md:right-7">
          <span>{label}</span>
          <span>Image placeholder</span>
        </div>
      </div>
      {caption && (
        <figcaption className="grid grid-cols-1 gap-2 border-b border-black/15 py-4 md:grid-cols-12 md:gap-6">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/50 md:col-span-3">
            {label}
          </span>
          <span className="max-w-[58ch] text-sm leading-relaxed text-black/65 md:col-span-7">
            {caption}
          </span>
        </figcaption>
      )}
    </figure>
  );
}

function ProjectMeta({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-t border-black/20 pt-3">
      <dt className="mb-2 text-[10px] uppercase tracking-[0.2em] text-black/45">
        {label}
      </dt>
      <dd className="max-w-[28ch] text-sm leading-relaxed text-black/80">
        {value}
      </dd>
    </div>
  );
}

export function CaseStudyPage({ project }: { project: Project }) {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const { next } = getAdjacentProjects(project.id);
  const gallery = project.gallery ?? [];
  const leadVisual = gallery.find((visual) => visual.lead);
  const supportingVisuals = gallery.filter((visual) => !visual.lead);

  useEffect(() => {
    const updateProgress = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? window.scrollY / total : 0;

      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".case-hero-line",
        { y: "105%" },
        {
          y: "0%",
          duration: 1.05,
          stagger: 0.08,
          ease: "power4.out",
        },
      );

      gsap.fromTo(
        ".case-hero-meta",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.08,
          delay: 0.35,
          ease: "power3.out",
        },
      );

      gsap.utils.toArray<HTMLElement>(".case-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".case-visual").forEach((element) => {
        gsap.fromTo(
          element,
          { clipPath: "inset(0 0 100% 0)", scale: 1.015 },
          {
            clipPath: "inset(0 0 0% 0)",
            scale: 1,
            duration: 1,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: element,
              start: "top 92%",
              once: true,
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f4f1e9] text-[#111] selection:bg-[#FFC703] selection:text-black">
      <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-black/10">
        <div
          ref={progressBarRef}
          className="h-full origin-left scale-x-0 bg-[#FFC703]"
        />
      </div>

      <div className="fixed right-5 top-5 z-50 rounded-full bg-black px-5 py-3 md:right-8 md:top-8">
        <NavMenu />
      </div>

      <main>
        <header className="flex min-h-[82dvh] flex-col px-6 pb-10 pt-8 md:px-10 md:pb-14 lg:px-14">
          <div className="case-hero-meta flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-black/45">
            <Link
              href="/work"
              className="transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              Rulz&amp;Co / Work
            </Link>
            <span className="h-px w-8 bg-black/20" />
            <span>{project.num}</span>
          </div>

          <div className="mt-auto max-w-[1600px]">
            <Breadcrumbs
              items={breadcrumbsForProject(project)}
              tone="light"
              className="case-hero-meta mb-8"
            />

            <h1 className="text-[clamp(4.5rem,15vw,13rem)] font-normal leading-[0.78] tracking-[-0.065em] text-black">
              {project.title.split(" ").map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  className="mr-[0.16em] inline-block overflow-hidden last:mr-0"
                >
                  <span className="case-hero-line inline-block">{word}</span>
                </span>
              ))}
            </h1>

            <div className="mt-10 grid grid-cols-1 gap-10 border-t border-black/20 pt-6 md:grid-cols-12 md:gap-6">
              <p className="case-hero-meta text-2xl font-normal leading-[1.15] tracking-[-0.025em] text-black md:col-span-7 md:text-4xl lg:text-5xl">
                {project.description}
              </p>

              <div className="case-hero-meta flex flex-wrap content-start gap-x-4 gap-y-2 md:col-span-3 md:col-start-10 md:justify-end">
                {project.projectType && (
                  <span className="border-b border-black/20 pb-1 text-[10px] uppercase tracking-[0.2em] text-black/55">
                    {project.projectType}
                  </span>
                )}
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border-b border-black/20 pb-1 text-[10px] uppercase tracking-[0.2em] text-black/55"
                  >
                    {tag}
                  </span>
                ))}
                <span className="border-b border-black/20 pb-1 text-[10px] uppercase tracking-[0.2em] text-black/55">
                  {project.year}
                </span>
              </div>
            </div>
          </div>
        </header>

        <section className="px-3 md:px-5">
          <VisualPlaceholder
            project={project}
            index={leadVisual?.number ?? "01"}
            label={leadVisual?.label ?? "Lead project image"}
            caption={leadVisual?.caption}
            aspectClass="aspect-[4/3] md:aspect-[16/8]"
          />
        </section>

        <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
          <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 md:grid-cols-12 md:gap-6">
            <p className="case-reveal text-[10px] uppercase tracking-[0.22em] text-black/45 md:col-span-2">
              Overview
            </p>

            <div className="md:col-span-7">
              <p className="case-reveal text-2xl leading-[1.25] tracking-[-0.02em] text-black md:text-4xl">
                {project.challenge}
              </p>
            </div>

            <dl className="case-reveal grid grid-cols-2 gap-x-5 gap-y-7 md:col-span-3 md:grid-cols-1">
              <ProjectMeta label="Role" value={project.role} />
              <ProjectMeta label="Timeline" value={project.timeline} />
              {project.projectType && (
                <ProjectMeta label="Type" value={project.projectType} />
              )}
              <ProjectMeta
                label="Output"
                value={project.deliverables.slice(0, 3).join(", ")}
              />
            </dl>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-3 px-3 md:grid-cols-2 md:gap-5 md:px-5">
          <VisualPlaceholder
            project={project}
            index={supportingVisuals[0]?.number ?? "02"}
            label={supportingVisuals[0]?.label ?? "Interface detail"}
            caption={supportingVisuals[0]?.caption}
            aspectClass="aspect-[4/5]"
          />
          <VisualPlaceholder
            project={project}
            index={supportingVisuals[1]?.number ?? "03"}
            label={supportingVisuals[1]?.label ?? "Product in context"}
            caption={supportingVisuals[1]?.caption}
            aspectClass="aspect-[4/5]"
          />
        </section>

        <section className="my-24 bg-[#111] px-6 py-24 text-white md:my-32 md:px-10 md:py-36 lg:px-14">
          <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 md:grid-cols-12 md:gap-6">
            <p className="case-reveal text-[10px] uppercase tracking-[0.22em] text-white/40 md:col-span-2">
              The interaction
            </p>
            <div className="md:col-span-7">
              <h2 className="case-reveal mb-8 text-4xl font-normal leading-[0.98] tracking-[-0.04em] md:text-6xl lg:text-7xl">
                Designing how the system meets the person.
              </h2>
              <p className="case-reveal max-w-[65ch] text-lg leading-relaxed text-white/65 md:text-xl">
                {project.approach}
              </p>
            </div>
            <div className="case-reveal md:col-span-3">
              <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-white/35">
                Areas of focus
              </p>
              <ul className="border-t border-white/20">
                {project.deliverables.map((deliverable) => (
                  <li
                    key={deliverable}
                    className="border-b border-white/20 py-3 text-sm text-white/70"
                  >
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="px-3 md:px-5">
          <VisualPlaceholder
            project={project}
            index={supportingVisuals[2]?.number ?? "04"}
            label={supportingVisuals[2]?.label ?? "Core interaction sequence"}
            caption={supportingVisuals[2]?.caption}
            aspectClass="aspect-[5/4] md:aspect-[16/7]"
          />
        </section>

        <div className="px-6 md:px-10 lg:px-14">
          {project.sections.map((section, index) => (
            <section
              key={section.heading}
              className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 border-b border-black/15 py-24 md:grid-cols-12 md:gap-6 md:py-36"
            >
              <div className="md:col-span-4">
                <p
                  className="case-reveal mb-4 text-[10px] uppercase tracking-[0.22em]"
                  style={{ color: project.accent }}
                >
                  {String(index + 1).padStart(2, "0")} / {section.label}
                </p>
                <h2 className="case-reveal max-w-[14ch] text-3xl font-normal leading-[1.05] tracking-[-0.035em] md:text-5xl">
                  {section.heading}
                </h2>
              </div>

              <div className="md:col-span-7 md:col-start-6">
                <p className="case-reveal mb-12 max-w-[65ch] text-lg leading-relaxed text-black/70 md:text-xl">
                  {section.body}
                </p>
                <VisualPlaceholder
                  project={project}
                  index={
                    supportingVisuals[index + 3]?.number ??
                    String(index + 5).padStart(2, "0")
                  }
                  label={
                    supportingVisuals[index + 3]?.label ??
                    `${section.label} detail`
                  }
                  caption={supportingVisuals[index + 3]?.caption}
                  aspectClass={
                    index % 2 === 0 ? "aspect-[4/3]" : "aspect-[5/4]"
                  }
                />
              </div>
            </section>
          ))}
        </div>

        {gallery.length === 0 && (
          <section className="px-3 py-3 md:px-5 md:py-5">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-5">
              {["State detail", "Workflow view", "System response"].map(
                (label, index) => (
                  <VisualPlaceholder
                    key={label}
                    project={project}
                    index={String(index + 8).padStart(2, "0")}
                    label={label}
                    aspectClass={index === 1 ? "aspect-[3/4]" : "aspect-[4/3]"}
                  />
                ),
              )}
            </div>
          </section>
        )}

        <section className="bg-[#FFC703] px-6 py-24 text-black md:px-10 md:py-36 lg:px-14">
          <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-4">
              <p className="case-reveal mb-5 text-[10px] uppercase tracking-[0.22em] text-black/50">
                What this work proves
              </p>
              <h2 className="case-reveal max-w-[10ch] text-4xl font-normal leading-[0.95] tracking-[-0.04em] md:text-6xl">
                Evidence for better human–AI interfaces.
              </h2>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <p className="case-reveal mb-12 text-2xl leading-[1.2] tracking-[-0.02em] md:text-4xl">
                {project.interfaceProof}
              </p>
              <ul className="case-reveal grid grid-cols-1 border-t border-black/30 md:grid-cols-3">
                {project.proofPoints.map((point, index) => (
                  <li
                    key={point}
                    className="border-b border-black/30 py-5 text-sm leading-relaxed md:border-r md:px-5 md:first:pl-0 md:last:border-r-0"
                  >
                    <span className="mb-4 block font-mono text-[10px] text-black/45">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              {project.builtWith && (
                <p className="case-reveal mt-10 border-t border-black/30 pt-5 text-sm leading-relaxed text-black/65">
                  <span className="font-medium text-black">Built with:</span>{" "}
                  {project.builtWith.join(", ")}.
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="bg-[#f4f1e9] px-6 py-24 md:px-10 md:py-32 lg:px-14">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid grid-cols-1 gap-10 border-t border-black/20 pt-6 md:grid-cols-12 md:gap-6">
              <p className="case-reveal text-[10px] uppercase tracking-[0.22em] text-black/45 md:col-span-3">
                {project.ctaLine ??
                  "Your AI can work. Can people work with it?"}
              </p>
              <div className="md:col-span-8 md:col-start-5">
                <h2 className="case-reveal max-w-[13ch] text-4xl font-normal leading-[0.96] tracking-[-0.04em] md:text-6xl lg:text-7xl">
                  We design and build the interface between people and AI.
                </h2>
                <a
                  href="mailto:hello@rulz.co?subject=Agentic%20interface%20project"
                  className="case-reveal mt-10 inline-flex items-center gap-3 border-b border-black pb-2 text-sm font-medium uppercase tracking-[0.16em] transition-opacity hover:opacity-55 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                >
                  Start a project
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {next && (
          <section className="border-t border-black/15 bg-[#f4f1e9] px-3 pb-3 md:px-5 md:pb-5">
            <Link
              href={`/work/${next.id}`}
              className="group block bg-black px-6 py-16 text-white md:px-10 md:py-20"
            >
              <div className="mx-auto flex max-w-[1500px] items-end justify-between gap-8">
                <div>
                  <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-white/40">
                    Next project / {next.num}
                  </p>
                  <h2 className="text-[clamp(3.5rem,10vw,9rem)] font-normal leading-[0.82] tracking-[-0.06em] text-white/70 transition-colors duration-300 group-hover:text-white">
                    {next.title}
                  </h2>
                </div>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/25 transition-colors group-hover:bg-white group-hover:text-black md:h-20 md:w-20">
                  <ArrowRight size={20} />
                </span>
              </div>
            </Link>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
