"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ArrowDown, Check, ArrowRight } from "lucide-react";
import { NavMenu } from "@/components/NavMenu";
import { Footer } from "@/components/Footer";
import LineReveal from "@/components/LineReveal";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────

const thesis = [
  { label: "AI-native products", desc: "Built around intelligence, not bolted on." },
  { label: "B2B SaaS with UX debt", desc: "Enterprise tools that nobody actually wants to use." },
  { label: "Consumer fintech", desc: "Making money feel less terrifying for real people." },
  { label: "Health & longevity tech", desc: "Products that treat users like intelligent adults." },
  { label: "Deep tech with a design gap", desc: "Powerful technology nobody can figure out." },
  { label: "Infrastructure with a product layer", desc: "Developer tools that need a human face." },
  { label: "Agentic & workflow automation", desc: "Making complex workflows feel like nothing." },
  { label: "Marketplace & community", desc: "Network effects that need a strong aesthetic foundation." },
];

const models = [
  {
    id: "equity",
    num: "01",
    name: "Equity Partner",
    commitment: "1 – 3% equity",
    timeline: "Project-scoped",
    tagline: "Skin in the game. Ours, not just yours.",
    description:
      "We take a small equity stake in exchange for deeply reduced rates on design and strategy work. You get a partner who's genuinely invested in the outcome — because we literally are. Best for pre-seed and seed companies building something we believe in.",
    includes: [
      "Full design & strategy engagement",
      "Equity-adjusted pricing (60–80% below standard rates)",
      "Seat at the table on product decisions",
      "Investor network introductions",
      "Post-engagement advisory relationship",
    ],
    good: "Pre-seed teams with strong founders and a clear thesis.",
    notGood: "Companies past Series A — equity partnerships work best early.",
  },
  {
    id: "cobuilder",
    num: "02",
    name: "Co-Builder",
    commitment: "4 – 8% equity",
    timeline: "6 – 12 months",
    tagline: "We come in at the founding stage.",
    description:
      "We join as a founding design and product partner — more equity, more involvement, longer commitment. We're in the room for fundraising conversations, user research, and the decisions that define the company's trajectory.",
    includes: [
      "Co-founder-level product & design ownership",
      "Full-time equivalent dedication",
      "Fundraising support & pitch materials",
      "Design system built to scale",
      "Investor & operator network access",
      "Long-term product advisory",
    ],
    good: "Zero-to-one founders who need a technical co-founder equivalent on the design/product side.",
    notGood: "Teams that already have strong in-house product design.",
    featured: true,
  },
  {
    id: "syndicate",
    num: "03",
    name: "Syndicate",
    commitment: "£5k – £25k cash",
    timeline: "Investment + project",
    tagline: "We write the cheque and do the work.",
    description:
      "We invest capital alongside design and strategy support. For founders raising their first round who want an investor who will actively help them build — not just sit on a cap table.",
    includes: [
      "Cash investment (SAFE or convertible note)",
      "Design & strategy sprint included",
      "Co-investor introductions",
      "Product positioning for the raise",
      "Pitch deck design & narrative",
    ],
    good: "Founders raising a first round who want aligned, active investors.",
    notGood: "Companies seeking passive capital only.",
  },
];

const criteria = [
  {
    heading: "You're building something genuinely new.",
    body: "Not a slightly-better version of something that already exists. A real insight, a real gap, a real bet.",
  },
  {
    heading: "AI is core, not decorative.",
    body: "We partner on AI-native products. We're not interested in adding a chatbot to a spreadsheet.",
  },
  {
    heading: "You have founder-market fit.",
    body: "You understand the problem in a way that's hard to replicate. The obsession is obvious when you talk about it.",
  },
  {
    heading: "You want a partner, not a vendor.",
    body: "You'll push back. You'll disagree. You'll include us in the conversations that matter.",
  },
  {
    heading: "You can move fast.",
    body: "We work at speed. If every decision takes three weeks, we're not the right fit.",
  },
];

const currentBets = [
  {
    id: "rinkl",
    name: "Rinkl",
    stage: "Pre-seed",
    vertical: "Fintech",
    status: "Active",
    gradient: "linear-gradient(135deg, #0f0c29 0%, #1a1a6e 50%, #24243e 100%)",
    accent: "#6C63FF",
  },
  {
    id: "novamind",
    name: "NovaMind AI",
    stage: "Seed",
    vertical: "AI / Productivity",
    status: "Active",
    gradient: "linear-gradient(135deg, #1a0f00 0%, #4a2800 50%, #2d1800 100%)",
    accent: "#FFA500",
  },
  {
    id: "placeholder-1",
    name: "Stealth",
    stage: "Pre-seed",
    vertical: "Health tech",
    status: "NDA",
    gradient: "linear-gradient(135deg, #0d1f14 0%, #193d28 50%, #0f2b1c 100%)",
    accent: "#69DB7C",
  },
  {
    id: "placeholder-2",
    name: "Stealth",
    stage: "Pre-seed",
    vertical: "B2B SaaS",
    status: "NDA",
    gradient: "linear-gradient(135deg, #050510 0%, #0d0d2b 50%, #080820 100%)",
    accent: "#4DABF7",
  },
];

// ─── Thesis pill ──────────────────────────────────────────────────────────────

function ThesisPill({
  label,
  desc,
  index,
}: {
  label: string;
  desc: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      className="thesis-pill text-left border rounded-xl px-5 py-4 transition-all duration-200 group"
      style={{
        borderColor: hovered ? "#FFC703" : "#e0dbd0",
        background: hovered ? "#FFC70308" : "transparent",
        transitionDelay: `${index * 30}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p
        className="text-sm font-medium leading-snug mb-1 transition-colors duration-200"
        style={{ color: hovered ? "#000" : "#222" }}
      >
        {label}
      </p>
      <p className="text-xs text-[#999] leading-snug">{desc}</p>
    </button>
  );
}

// ─── Model card ───────────────────────────────────────────────────────────────

function ModelCard({ model }: { model: (typeof models)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const featured = "featured" in model && model.featured;

  useEffect(() => {
    const el = cardRef.current;
    if (!el || featured) return;
    const enter = () =>
      gsap.to(el, { borderColor: "#ffffff1a", duration: 0.25, ease: "power2.out" });
    const leave = () =>
      gsap.to(el, { borderColor: "#1e1e1e", duration: 0.25, ease: "power2.in" });
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    };
  }, [featured]);

  return (
    <div
      ref={cardRef}
      className="model-card flex flex-col rounded-2xl p-8 md:p-10 transition-transform duration-300 hover:-translate-y-1"
      style={{
        border: `1px solid ${featured ? "#FFC703" : "#1e1e1e"}`,
        background: featured ? "#0d0d00" : "#080808",
      }}
    >
      {featured && (
        <div className="mb-6">
          <span className="bg-[#FFC703] text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
            Most involved
          </span>
        </div>
      )}

      {/* Header */}
      <div
        className="pb-7 mb-7 border-b"
        style={{ borderColor: featured ? "#FFC70318" : "#181818" }}
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <span className="text-[11px] tracking-[0.3em] text-[#444]">{model.num}</span>
          <span
            className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border"
            style={{
              color: featured ? "#FFC703" : "#555",
              borderColor: featured ? "#FFC70330" : "#222",
            }}
          >
            {model.commitment}
          </span>
        </div>
        <h3
          className="text-2xl md:text-3xl font-light leading-tight tracking-tight mb-2"
          style={{ color: featured ? "#fff" : "#ccc" }}
        >
          {model.name}
        </h3>
        <p
          className="text-sm font-light"
          style={{ color: featured ? "#FFC703bb" : "#555" }}
        >
          {model.tagline}
        </p>
      </div>

      <p className="text-[#666] text-sm font-light leading-relaxed mb-7">
        {model.description}
      </p>

      {/* Includes */}
      <div className="mb-7 flex-1">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#444] mb-4">
          What we bring
        </p>
        <ul className="space-y-2.5">
          {model.includes.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-[13px] font-light"
              style={{ color: featured ? "#aaa" : "#666" }}
            >
              <Check
                size={11}
                strokeWidth={2.5}
                className="shrink-0 mt-0.5"
                style={{ color: featured ? "#FFC703" : "#444" }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Good / not good */}
      <div
        className="space-y-3 p-4 rounded-xl mb-7 text-[12px] font-light leading-relaxed"
        style={{ background: featured ? "#FFC70306" : "#ffffff03" }}
      >
        <div className="flex gap-2" style={{ color: featured ? "#888" : "#555" }}>
          <span style={{ color: featured ? "#FFC703" : "#444" }}>✓</span>
          {model.good}
        </div>
        <div className="flex gap-2 text-[#333]">
          <span>✕</span>
          {model.notGood}
        </div>
      </div>

      {/* CTA */}
      <Link
        href="mailto:hello@rulz.co"
        className="w-full text-center py-3.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group"
        style={
          featured
            ? { background: "#FFC703", color: "#000" }
            : { border: "1px solid #2a2a2a", color: "#555" }
        }
      >
        Pitch us
        <ArrowUpRight
          size={12}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />
      </Link>
    </div>
  );
}

// ─── Current bet card ─────────────────────────────────────────────────────────

function BetCard({ bet }: { bet: (typeof currentBets)[0] }) {
  return (
    <div className="bet-card relative overflow-hidden rounded-xl aspect-[4/3] group cursor-default">
      <div className="absolute inset-0" style={{ background: bet.gradient }} />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 30% 70%, ${bet.accent}55 0%, transparent 60%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* Status badge */}
      <div className="absolute top-4 right-4">
        <span
          className="text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full border"
          style={{
            color: bet.status === "NDA" ? "#666" : bet.accent,
            borderColor: bet.status === "NDA" ? "#333" : bet.accent + "44",
            background: bet.status === "NDA" ? "#ffffff05" : bet.accent + "11",
          }}
        >
          {bet.status}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p
          className="text-[10px] uppercase tracking-widest mb-1"
          style={{ color: bet.accent + "aa" }}
        >
          {bet.vertical} · {bet.stage}
        </p>
        <h3 className="text-white text-lg font-light tracking-tight">{bet.name}</h3>
      </div>
    </div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────────

export function PartnershipPage() {
  const heroRef = useRef<HTMLElement>(null);
  const bigTextRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Scroll progress — dark bar on yellow hero, yellow bar elsewhere
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
      // Hero big text — word curtain
      gsap.fromTo(
        ".hero-word",
        { y: "105%", skewY: 2 },
        {
          y: "0%",
          skewY: 0,
          duration: 1.0,
          stagger: 0.08,
          ease: "power4.out",
          delay: 0.2,
        }
      );
      gsap.fromTo(
        ".hero-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: "power2.out" }
      );
      gsap.fromTo(
        scrollHintRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, delay: 1.3, ease: "power2.out" }
      );
      // Scroll hint bob
      gsap.to(scrollHintRef.current, {
        y: 6,
        duration: 1.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.8,
      });

      // Section reveals
      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 86%", once: true },
          }
        );
      });

      // Thesis pills scatter in
      ScrollTrigger.batch(".thesis-pill", {
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { opacity: 0, scale: 0.92, y: 16 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.05,
              ease: "back.out(1.4)",
            }
          ),
        start: "top 88%",
        once: true,
      });

      // Model cards
      ScrollTrigger.batch(".model-card", {
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { opacity: 0, y: 40, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              stagger: 0.12,
              ease: "power3.out",
            }
          ),
        start: "top 85%",
        once: true,
      });

      // Criteria rows
      ScrollTrigger.batch(".criteria-row", {
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { opacity: 0, x: -24 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power3.out",
            }
          ),
        start: "top 85%",
        once: true,
      });

      // Bet cards
      ScrollTrigger.batch(".bet-card", {
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { opacity: 0, y: 30 },
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
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen selection:bg-black selection:text-[#FFC703]">
      {/* Scroll progress */}
      <div className="fixed left-0 top-0 w-[3px] h-full z-50 bg-[#FFC703]/20">
        <div
          ref={progressRef}
          className="w-full bg-black transition-none"
          style={{ height: "0%" }}
        />
      </div>

      {/* Nav — black on yellow hero */}
      <div className="fixed top-8 right-8 z-50">
        <NavMenu />
      </div>

      {/* ── HERO — yellow ─────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-between bg-[#FFC703] px-8 md:px-14 pt-24 pb-12 overflow-hidden"
      >
        {/* Noise overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* Top label */}
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-1.5 h-5 bg-black/40" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-black/50">
            Partnership & Investment
          </span>
        </div>

        {/* Big statement */}
        <div ref={bigTextRef} className="relative z-10 max-w-[1600px] mx-auto w-full">
          <h1 className="text-[clamp(72px,12vw,180px)] font-black leading-[0.85] tracking-[-0.04em] text-black uppercase">
            {["Bet", "on", "ideas."].map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.12em] last:mr-0">
                <span className="hero-word inline-block">{word}</span>
              </span>
            ))}
          </h1>

          <div className="mt-10 max-w-2xl hero-sub">
            <p className="text-lg md:text-xl text-black/60 font-light leading-relaxed">
              Rulz&amp;Co partners with early-stage founders building something
              worth betting on — with equity, co-creation, and incentives that
              put us on the same side of the table.
            </p>
            <div className="mt-8 flex items-center gap-5 flex-wrap">
              <Link
                href="mailto:hello@rulz.co"
                className="inline-flex items-center gap-2 bg-black text-[#FFC703] rounded-full px-7 py-3 text-[11px] font-bold tracking-widest uppercase hover:bg-black/80 transition-colors group"
              >
                Pitch your idea
                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
              <span className="text-[11px] uppercase tracking-widest text-black/40">
                15-minute intro · No deck required
              </span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          ref={scrollHintRef}
          className="flex items-center gap-3 text-black/40 relative z-10"
        >
          <ArrowDown size={14} />
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Learn more
          </span>
        </div>
      </section>

      {/* ── WHAT THIS MEANS — dark ─────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white py-24 md:py-32 px-8 md:px-14">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 reveal-up">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#444] mb-4">
              Not a client relationship
            </p>
            <LineReveal stagger={0.07} start="top 82%">
              <h2 className="text-[clamp(28px,3.5vw,52px)] font-light text-white leading-[0.95] tracking-tight">
                We have skin in the game.
              </h2>
            </LineReveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6">
            <LineReveal stagger={0.04} start="top 82%">
              <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                Client work is transactional by design. You pay, we deliver, we
                part ways. Partnership is the opposite — our upside is tied to
                yours, we&apos;re in the room for the decisions that matter, and
                we care about what happens after the handoff.
              </p>
            </LineReveal>
            <LineReveal stagger={0.04} start="top 80%">
              <p className="text-lg text-[#555] font-light leading-relaxed">
                We take a small number of partnerships at a time — deliberately.
                When we say we&apos;re invested, we mean it literally and
                figuratively. This isn&apos;t a service. It&apos;s a bet we
                make together.
              </p>
            </LineReveal>

            {/* Stat row */}
            <div className="pt-8 border-t border-[#1a1a1a] grid grid-cols-3 gap-8 reveal-up">
              {[
                { v: "4", s: "", l: "Active partnerships" },
                { v: "£", s: "2M+", l: "Raised by partners" },
                { v: "100", s: "%", l: "Founders we'd back again" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl md:text-4xl font-light text-[#FFC703] leading-none tabular-nums">
                    {s.v}<span className="text-2xl">{s.s}</span>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-[#444] mt-2">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INVESTMENT THESIS — cream ──────────────────────────── */}
      <section className="bg-[#f5f2eb] text-black py-24 md:py-32 px-8 md:px-14">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5 reveal-up">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#999] mb-4">
                Investment thesis
              </p>
              <LineReveal stagger={0.07} start="top 82%">
                <h2 className="text-[clamp(28px,4vw,56px)] font-light text-black leading-[0.95] tracking-tight">
                  What we get excited about.
                </h2>
              </LineReveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end reveal-up">
              <p className="text-[#888] font-light leading-relaxed">
                We don&apos;t back categories — we back founders with a clear
                insight and an unfair advantage. But these are the spaces where
                we have the deepest conviction.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {thesis.map((t, i) => (
              <ThesisPill key={t.label} label={t.label} desc={t.desc} index={i} />
            ))}
          </div>

          {/* Not interested in */}
          <div className="mt-16 pt-12 border-t border-[#e0dbd0] reveal-up">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#bbb] mb-5">
              Not a good fit
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Non-tech businesses",
                "Crypto / NFT projects",
                "Content or media plays",
                "Anything needing physical inventory",
                "Projects without a clear founder",
              ].map((item) => (
                <span
                  key={item}
                  className="text-[11px] uppercase tracking-widest text-[#ccc] border border-[#e8e4dd] px-4 py-2 rounded-full line-through decoration-[#ccc]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP MODELS — dark ──────────────────────────── */}
      <section className="bg-[#080808] text-white py-24 md:py-32 px-8 md:px-14 border-t border-[#111]">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-6 reveal-up">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#444] mb-4">
                How we structure it
              </p>
              <LineReveal stagger={0.07} start="top 82%">
                <h2 className="text-[clamp(28px,4vw,56px)] font-light text-white leading-[0.95] tracking-tight">
                  Three ways to partner.
                </h2>
              </LineReveal>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end reveal-up">
              <p className="text-[#555] font-light leading-relaxed">
                Every deal is different. These are starting points — not rigid
                templates. If none of these fit exactly, get in touch and
                we&apos;ll figure something out.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {models.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRENT BETS — yellow-tinted ──────────────────────── */}
      <section className="bg-[#fffbee] text-black py-24 md:py-28 px-8 md:px-14">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-end justify-between gap-8 mb-12 flex-wrap">
            <div className="reveal-up">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#bbb] mb-3">
                Current partnerships
              </p>
              <LineReveal stagger={0.07} start="top 82%">
                <h2 className="text-[clamp(24px,3.5vw,48px)] font-light text-black leading-[0.95] tracking-tight">
                  Companies we&apos;re building with.
                </h2>
              </LineReveal>
            </div>
            <p className="text-[#aaa] text-xs uppercase tracking-widest reveal-up">
              {currentBets.length} active
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {currentBets.map((bet) => (
              <BetCard key={bet.id} bet={bet} />
            ))}
          </div>

          <p className="text-center text-[#ccc] text-[11px] uppercase tracking-widest mt-10 reveal-up">
            Two companies under NDA — details shared on request.
          </p>
        </div>
      </section>

      {/* ── CRITERIA — dark ────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white py-24 md:py-32 px-8 md:px-14 border-t border-[#111]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 reveal-up">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#444] mb-4">
              What we look for
            </p>
            <LineReveal stagger={0.07} start="top 82%">
              <h2 className="text-[clamp(24px,3vw,44px)] font-light text-white leading-[0.95] tracking-tight">
                Five things that make a good partnership.
              </h2>
            </LineReveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {criteria.map((item, i) => (
              <div
                key={i}
                className="criteria-row flex gap-8 border-b border-[#151515] last:border-0 py-8"
              >
                <span className="text-[11px] tracking-[0.25em] text-[#FFC703] tabular-nums pt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2 leading-snug">
                    {item.heading}
                  </h3>
                  <p className="text-[#555] text-sm font-light leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — yellow ───────────────────────────────────────── */}
      <section className="bg-[#FFC703] text-black py-32 md:py-40 px-8 md:px-14">
        <div className="max-w-[1600px] mx-auto">
          <LineReveal stagger={0.07} start="top 82%">
            <h2 className="text-[clamp(40px,7vw,110px)] font-black leading-[0.88] tracking-[-0.03em] uppercase text-black max-w-5xl">
              Got something worth betting on?
            </h2>
          </LineReveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end reveal-up">
            <div>
              <p className="text-black/60 text-lg font-light leading-relaxed max-w-xl">
                Send us a short message about what you&apos;re building — no
                deck required. We&apos;ll respond within 48 hours with either a
                yes to a call or an honest reason why it&apos;s not right for
                us right now.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href="mailto:hello@rulz.co?subject=Partnership enquiry"
                  className="inline-flex items-center gap-2 bg-black text-[#FFC703] rounded-full px-8 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-black/80 transition-colors group"
                >
                  hello@rulz.co
                  <ArrowRight
                    size={13}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </a>
                <Link
                  href="/work"
                  className="text-[11px] uppercase tracking-widest text-black/40 hover:text-black transition-colors flex items-center gap-1.5"
                >
                  See how we work <ArrowUpRight size={11} />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              {[
                "No deck required",
                "Response within 48 hours",
                "We'll be honest if it's not right",
                "NDA available on request",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-[12px] text-black/50"
                >
                  <Check size={12} strokeWidth={2.5} className="text-black/40" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
