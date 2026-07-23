"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Plus, Minus, ArrowRight, Check } from "lucide-react";
import { NavMenu } from "@/components/NavMenu";
import { BrandMark } from "@/components/BrandMark";
import { Footer } from "@/components/Footer";
import LineReveal from "@/components/LineReveal";
import { tiers, faqs } from "@/lib/services-data";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { breadcrumbsForService } from "@/lib/seo/breadcrumbs";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────

const tickerItems = [
  "Agentic Interface Design", "Human-Agent Workflows", "Interface Strategy",
  "Source & Confidence UI", "Approval Flows", "Agent Activity",
  "Streaming States", "Failure & Recovery", "React Frontends",
  "Live Model Integrations", "AI Design Systems", "Adoption Signals",
];

const serviceAreas = [
  {
    num: "01",
    category: "Design",
    headline: "Make AI behaviour legible and controllable.",
    description:
      "We design how people direct an agent, see its progress, verify its output, and intervene when the work needs judgment. Every state matters, not only the successful one.",
    items: [
      "Agentic interaction models",
      "Multi-step workflow design",
      "Source and confidence display",
      "Approval and intervention flows",
      "Failure, recovery, and handoff",
      "AI interface design systems",
    ],
    accent: "#6C63FF",
  },
  {
    num: "02",
    category: "Strategy",
    headline: "Choose the workflow before the interface.",
    description:
      "We define where the agent should act, where a person must stay in control, and which outcome makes the interface worth building. The goal is a sharper product, not a longer deck.",
    items: [
      "Interface opportunity audit",
      "Workflow and user mapping",
      "Agent responsibility definition",
      "Product scope and PRDs",
      "Trust and risk review",
      "Adoption metrics",
    ],
    accent: "#D4845A",
  },
  {
    num: "03",
    category: "Build",
    headline: "Turn the interaction model into a working product.",
    description:
      "We build the frontend on your existing AI stack: live model responses, tool states, streaming, approvals, errors, and recovery. The interface is ready for real behaviour, not a static demo path.",
    items: [
      "Production-ready React interfaces",
      "Model and tool integrations",
      "Streaming and long-running states",
      "Agent activity and controls",
      "Analytics and instrumentation",
      "MVP and pilot interfaces",
    ],
    accent: "#FFA500",
  },
];


const processSteps = [
  {
    num: "01",
    heading: "Diagnose",
    body: "We map the workflow, the people involved, the technical boundary, and where trust or control currently breaks.",
  },
  {
    num: "02",
    heading: "Design",
    body: "We define the interaction model, system states, evidence, approvals, and recovery before polishing the interface.",
  },
  {
    num: "03",
    heading: "Build",
    body: "We turn the model into a working frontend connected to your real AI, tools, and data services.",
  },
  {
    num: "04",
    heading: "Refine",
    body: "We ship, observe where people hesitate or intervene, and improve the interface around real use.",
  },
];


// ─── Ticker ───────────────────────────────────────────────────────────────────

function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="overflow-hidden border-t border-b border-[#1c1c1c] py-3 bg-[#0a0a0a]">
      <div className="animate-ticker flex gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10 shrink-0">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#444]">{item}</span>
            <span className="text-[#FFC703] opacity-50 text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Service row ──────────────────────────────────────────────────────────────

function ServiceRow({ service, index }: { service: typeof serviceAreas[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    gsap.to(el, {
      height: open ? "auto" : 0,
      duration: 0.5,
      ease: open ? "power3.out" : "power2.in",
    });
  }, [open]);

  // Initialise collapsed
  useEffect(() => {
    if (bodyRef.current && !open) {
      gsap.set(bodyRef.current, { height: 0 });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="border-b border-[#e8e4dd] last:border-0 reveal-service">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-8 py-10 text-left group"
      >
        <div className="flex items-start gap-8 flex-1 min-w-0">
          <span
            className="text-[11px] tracking-[0.3em] font-medium mt-1 shrink-0 transition-colors"
            style={{ color: open ? service.accent : "#999" }}
          >
            {service.num}
          </span>
          <div className="min-w-0">
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-light text-black tracking-tight leading-tight group-hover:opacity-70 transition-opacity">
              {service.category}
            </h3>
            {open && (
              <p className="text-[#888] text-base font-light mt-1 leading-snug">
                {service.headline}
              </p>
            )}
          </div>
        </div>
        <div
          className="w-9 h-9 rounded-full border flex items-center justify-center shrink-0 mt-1 transition-all duration-300"
          style={{
            borderColor: open ? service.accent : "#ccc",
            background: open ? service.accent + "15" : "transparent",
            color: open ? service.accent : "#999",
          }}
        >
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <div ref={bodyRef} className="overflow-hidden">
        <div className="pb-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 lg:col-start-2">
            <p className="text-[#444] text-lg font-light leading-relaxed">
              {service.description}
            </p>
            <Link
              href="mailto:hello@rulz.co"
              className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-medium hover:opacity-70 transition-opacity"
              style={{ color: service.accent }}
            >
              Enquire <ArrowUpRight size={12} />
            </Link>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#bbb] mb-5">
              What&apos;s included
            </p>
            <ul className="space-y-3">
              {service.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#333] text-sm font-light">
                  <Check size={12} strokeWidth={2.5} style={{ color: service.accent }} className="shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Tier card ────────────────────────────────────────────────────────────────

function TierCard({ tier }: { tier: typeof tiers[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    if (tier.featured) return;
    gsap.to(cardRef.current, {
      borderColor: "#ffffff22",
      duration: 0.3,
      ease: "power2.out",
    });
  };
  const handleLeave = () => {
    if (tier.featured) return;
    gsap.to(cardRef.current, {
      borderColor: "#1e1e1e",
      duration: 0.3,
      ease: "power2.in",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative flex flex-col rounded-2xl p-8 md:p-10 transition-transform duration-300 hover:-translate-y-1"
      style={{
        border: `1px solid ${tier.featured ? "#FFC703" : "#1e1e1e"}`,
        background: tier.featured ? "#0f0f00" : "#0a0a0a",
      }}
    >
      {tier.featured && (
        <div className="absolute -top-3.5 left-8">
          <span className="bg-[#FFC703] text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Most popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-8 pb-8 border-b" style={{ borderColor: tier.featured ? "#FFC70320" : "#1a1a1a" }}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] tracking-[0.3em] text-[#444]">{tier.num}</span>
          <span
            className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border"
            style={{
              color: tier.featured ? "#FFC703" : "#555",
              borderColor: tier.featured ? "#FFC70330" : "#222",
            }}
          >
            {tier.duration}
          </span>
        </div>
        <h3
          className="text-2xl md:text-3xl font-light leading-tight tracking-tight mb-2"
          style={{ color: tier.featured ? "#fff" : "#ccc" }}
        >
          {tier.name}
        </h3>
        <p className="text-sm font-light" style={{ color: tier.featured ? "#FFC703cc" : "#555" }}>
          {tier.tagline}
        </p>
      </div>

      {/* Best for */}
      <div className="mb-6">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#444] mb-2">Best for</p>
        <p className="text-sm text-[#666] font-light leading-relaxed">{tier.bestFor}</p>
      </div>

      {/* Description */}
      <p className="text-[#777] text-sm font-light leading-relaxed mb-8">{tier.description}</p>

      {/* Includes */}
      <div className="mb-8 flex-1">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#444] mb-4">Includes</p>
        <ul className="space-y-2.5">
          {tier.includes.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm font-light" style={{ color: tier.featured ? "#bbb" : "#666" }}>
              <Check
                size={12}
                strokeWidth={2.5}
                className="shrink-0 mt-0.5"
                style={{ color: tier.featured ? "#FFC703" : "#444" }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Outcome */}
      <div
        className="mb-8 p-4 rounded-xl text-[13px] font-light leading-relaxed"
        style={{
          background: tier.featured ? "#FFC70308" : "#ffffff04",
          borderLeft: `2px solid ${tier.featured ? "#FFC70360" : "#2a2a2a"}`,
          color: tier.featured ? "#999" : "#555",
        }}
      >
        <span className="text-[10px] uppercase tracking-widest block mb-1" style={{ color: tier.featured ? "#FFC70380" : "#444" }}>
          Outcome
        </span>
        {tier.outcome}
      </div>

      {/* CTA */}
      <Link
        href="mailto:hello@rulz.co"
        className="w-full text-center py-3.5 rounded-full text-[12px] font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group"
        style={
          tier.featured
            ? { background: "#FFC703", color: "#000" }
            : { border: "1px solid #2a2a2a", color: "#555", background: "transparent" }
        }
        onMouseEnter={(e) => {
          if (!tier.featured) {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "#444";
            (e.currentTarget as HTMLAnchorElement).style.color = "#999";
          }
        }}
        onMouseLeave={(e) => {
          if (!tier.featured) {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2a2a2a";
            (e.currentTarget as HTMLAnchorElement).style.color = "#555";
          }
        }}
      >
        {tier.cta}
        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
}

// ─── FAQ accordion ────────────────────────────────────────────────────────────

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = answerRef.current;
    if (!el) return;
    gsap.to(el, {
      height: open ? "auto" : 0,
      opacity: open ? 1 : 0,
      duration: 0.4,
      ease: open ? "power2.out" : "power2.in",
    });
  }, [open]);

  useEffect(() => {
    if (answerRef.current) gsap.set(answerRef.current, { height: 0, opacity: 0 });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="border-b border-[#1e1e1e] last:border-0 faq-item">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-8 py-6 text-left group"
      >
        <div className="flex items-center gap-6">
          <span className="text-[11px] tracking-[0.25em] text-[#333] shrink-0 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-base md:text-lg text-[#ccc] font-light group-hover:text-white transition-colors">
            {q}
          </span>
        </div>
        <div
          className="w-7 h-7 rounded-full border border-[#2a2a2a] flex items-center justify-center shrink-0 transition-all duration-300"
          style={open ? { borderColor: "#FFC703", background: "#FFC70315", color: "#FFC703" } : { color: "#555" }}
        >
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </div>
      </button>
      <div ref={answerRef} className="overflow-hidden">
        <p className="text-[#666] text-base font-light leading-relaxed pb-6 pl-14">{a}</p>
      </div>
    </div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────────

export function ServicesPage() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current)
        progressRef.current.style.height = `${(window.scrollY / total) * 100}%`;
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 86%", once: true } }
        );
      });
      ScrollTrigger.batch(".reveal-service", {
        onEnter: (els) =>
          gsap.fromTo(els, { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }),
        start: "top 85%", once: true,
      });
      ScrollTrigger.batch(".tier-card", {
        onEnter: (els) =>
          gsap.fromTo(els, { opacity: 0, y: 40, scale: 0.97 },
            { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12, ease: "power3.out" }),
        start: "top 85%", once: true,
      });
      ScrollTrigger.batch(".step-item", {
        onEnter: (els) =>
          gsap.fromTo(els, { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }),
        start: "top 85%", once: true,
      });
      ScrollTrigger.batch(".faq-item", {
        onEnter: (els) =>
          gsap.fromTo(els, { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" }),
        start: "top 88%", once: true,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#FFC703] selection:text-black">
      {/* Progress bar */}
      <div className="fixed left-0 top-0 w-[3px] h-full z-50 bg-[#0d0d0d]">
        <div ref={progressRef} className="w-full bg-[#FFC703] transition-none" style={{ height: "0%" }} />
      </div>

      {/* Nav */}
      <div className="fixed top-8 right-8 z-50"><NavMenu /></div>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white pt-28 pb-20 px-8 md:px-14">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-10 flex items-center justify-between gap-4">
            <BrandMark variant="dark" />
            <Breadcrumbs items={breadcrumbsForService()} tone="dark" />
          </div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-5 bg-[#FFC703]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#444]">
              What we offer
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16">
            <div className="lg:col-span-7">
              <LineReveal animateOnScroll={false} delay={0.1} stagger={0.07}>
                <h1 className="text-[clamp(44px,7vw,112px)] font-light leading-[0.9] tracking-[-0.03em] text-white">
                  Agentic interfaces. Designed and built.
                </h1>
              </LineReveal>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-end pb-2">
              <LineReveal animateOnScroll={false} delay={0.6} stagger={0.04}>
                <p className="text-lg text-[#555] font-light leading-relaxed">
                  We turn models, tools, and automated workflows into clear
                  products people can understand, steer, verify, and trust.
                </p>
              </LineReveal>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="mailto:hello@rulz.co"
                  className="inline-flex items-center gap-2 border border-[#FFC703] text-[#FFC703] rounded-full px-6 py-2.5 text-[11px] font-semibold tracking-widest uppercase hover:bg-[#FFC703] hover:text-black transition-all duration-300 group"
                >
                  Start a conversation
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Ticker />
      </section>

      {/* ── SERVICE AREAS — white ─────────────────────────────────── */}
      <section className="bg-[#f5f2eb] text-black py-24 md:py-32 px-8 md:px-14">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-5 reveal-up">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#999] mb-4">
                Service areas
              </p>
              <LineReveal stagger={0.07} start="top 82%">
                <h2 className="text-[clamp(28px,4vw,56px)] font-light text-black leading-[0.95] tracking-tight">
                  Three parts of one interface practice.
                </h2>
              </LineReveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end reveal-up">
              <p className="text-[#888] font-light leading-relaxed">
                Direction decides where the agent belongs. Design makes its
                behaviour understandable. Build proves the interaction against
                the real system.
              </p>
            </div>
          </div>

          <div>
            {serviceAreas.map((service, i) => (
              <ServiceRow key={service.category} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT TIERS — dark ───────────────────────────────── */}
      <section className="bg-[#080808] text-white py-24 md:py-32 px-8 md:px-14 border-t border-[#111]">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-6 reveal-up">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#444] mb-4">
                Engagement models
              </p>
              <LineReveal stagger={0.07} start="top 82%">
                <h2 className="text-[clamp(28px,4vw,56px)] font-light text-white leading-[0.95] tracking-tight">
                  Three ways to work together.
                </h2>
              </LineReveal>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end reveal-up">
              <p className="text-[#555] font-light leading-relaxed">
                Start with the uncertainty you need to remove: what to build,
                how it should work, or how to evolve an interface already in
                use. We&apos;ll tell you honestly which fits.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {tiers.map((tier) => (
              <div key={tier.id} className="tier-card">
                <TierCard tier={tier} />
              </div>
            ))}
          </div>

          <p className="text-center text-[#333] text-xs uppercase tracking-widest mt-10 reveal-up">
            Every engagement begins with a focused 30-minute fit call.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS — white ─────────────────────────────────── */}
      <section className="bg-white text-black py-24 md:py-28 px-8 md:px-14">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-16 reveal-up">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#999] mb-4">Process</p>
            <LineReveal stagger={0.07} start="top 82%">
              <h2 className="text-[clamp(28px,4vw,52px)] font-light text-black leading-[0.95] tracking-tight max-w-2xl">
                From opaque capability to usable product.
              </h2>
            </LineReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#eee]">
            {processSteps.map((step) => (
              <div key={step.num} className="step-item bg-white p-8 md:p-10 flex flex-col gap-5">
                <span className="text-[clamp(48px,5vw,80px)] font-light leading-none text-[#eee] tabular-nums tracking-tighter">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-black mb-2">{step.heading}</h3>
                  <p className="text-[#888] text-sm font-light leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ — dark ───────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white py-24 md:py-32 px-8 md:px-14 border-t border-[#111]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 reveal-up">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#444] mb-4">FAQ</p>
            <LineReveal stagger={0.07} start="top 82%">
              <h2 className="text-[clamp(28px,3.5vw,48px)] font-light text-white leading-[0.95] tracking-tight">
                Questions we get asked a lot.
              </h2>
            </LineReveal>
            <p className="text-[#555] text-sm font-light leading-relaxed mt-6 reveal-up">
              Something not covered here?{" "}
              <a href="mailto:hello@rulz.co" className="text-[#FFC703] hover:underline">
                Just ask.
              </a>
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-[#050505] text-white py-32 md:py-40 px-8 md:px-14 border-t border-[#111]">
        <div className="max-w-[1600px] mx-auto">
          <LineReveal stagger={0.07} start="top 82%">
            <h2 className="text-[clamp(36px,6vw,96px)] font-light leading-[0.9] tracking-[-0.02em] max-w-5xl">
              Ready to make your AI usable?
            </h2>
          </LineReveal>
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 reveal-up">
            <a
              href="mailto:hello@rulz.co"
              className="inline-flex items-center gap-2 bg-[#FFC703] text-black rounded-full px-8 py-4 text-[12px] font-bold tracking-widest uppercase hover:opacity-90 transition-opacity group"
            >
              hello@rulz.co
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <Link
              href="/work"
              className="text-[12px] uppercase tracking-widest text-[#444] hover:text-white transition-colors flex items-center gap-1.5"
            >
              See the work first <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
