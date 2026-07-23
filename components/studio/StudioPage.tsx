"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { NavMenu } from "@/components/NavMenu";
import { Footer } from "@/components/Footer";
import LineReveal from "@/components/LineReveal";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ────────────────────────────────────────────────────────────────────

const principles = [
  {
    num: "01",
    headline: "Clarity before beauty.",
    body: "If someone has to think twice about what your product does, the design has already failed. We start with information hierarchy, language, and flow. Visual polish comes after the logic is tight.",
  },
  {
    num: "02",
    headline: "Small is a feature.",
    body: "Rulz&Co is intentionally small. You don't get account managers and a revolving door of junior designers. You get me — in every meeting, on every file, thinking about your product between sessions.",
  },
  {
    num: "03",
    headline: "The brief is always wrong.",
    body: "Not maliciously. Just inevitably. The real problem worth solving almost never matches the initial brief. Discovery is the most important design work we do, and we protect it fiercely.",
  },
  {
    num: "04",
    headline: "AI is a collaborator, not a cheat code.",
    body: "We don't use AI to skip the thinking. We use it to extend what we can think. Every AI feature we design is rooted in a genuine user need — not a technical capability looking for a home.",
  },
  {
    num: "05",
    headline: "Speed is a design decision.",
    body: "The rate at which a product reaches users is itself a form of quality. We design for momentum — flows that don't stall, decisions that don't block, MVPs that ship without embarrassment.",
  },
  {
    num: "06",
    headline: "Ship it.",
    body: "Beautiful work that doesn't ship is interior decorating. Every file we deliver is built to move, not admire. We design for engineers, not awards panels.",
  },
];

const workingStyle = [
  {
    label: "Pace",
    heading: "We move at your speed.",
    body: "Fast. Async by default. Weekly check-ins. Decisions in hours, not weeks. If something is blocking you, it's blocking me — and I'll say so.",
  },
  {
    label: "Honesty",
    heading: "Hard conversations early.",
    body: "If the brief is wrong, I'll say so. If the design isn't ready, it doesn't ship. A difficult conversation in week one is always cheaper than an expensive problem in week eight.",
  },
  {
    label: "Depth",
    heading: "I go into your business.",
    body: "I read your PRDs, talk to your users when possible, and understand your constraints before I draw a single box. Good design is a by-product of genuine understanding.",
  },
];

const tools = [
  { category: "Design", items: ["Figma", "Framer", "Protopie", "Loom"] },
  { category: "Strategy", items: ["Notion", "Linear", "Miro", "Arc"] },
  { category: "AI", items: ["Claude", "ChatGPT", "Midjourney", "Runway"] },
  { category: "Build", items: ["Next.js", "Tailwind CSS", "Vercel", "Supabase"] },
];

const stats = [
  { value: "25", suffix: "+", label: "Projects shipped" },
  { value: "3", suffix: " yrs", label: "Studio running" },
  { value: "7", suffix: "", label: "Countries worked in" },
  { value: "£2M", suffix: "+", label: "Raised by clients post-engagement" },
];

// ─── Portrait placeholder ─────────────────────────────────────────────────────

function Portrait() {
  return (
    <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#111] via-[#1a1a1a] to-[#0a0a0a]" />
      {/* Accent glow */}
      <div className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(ellipse at 40% 60%, #FFC70322 0%, transparent 65%)" }} />
      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "linear-gradient(#FFC70333 1px, transparent 1px), linear-gradient(90deg, #FFC70333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }} />
      {/* Placeholder label */}
      <div className="absolute bottom-6 left-6 right-6">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 mb-1">Portrait</p>
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/10">placeholder</p>
      </div>
      {/* Decorative corner mark */}
      <div className="absolute top-6 right-6 flex flex-col gap-1">
        <div className="w-8 h-[2px] bg-[#FFC703] opacity-60" />
        <div className="w-4 h-[2px] bg-[#FFC703] opacity-30" />
      </div>
    </div>
  );
}

// ─── Manifesto principle ──────────────────────────────────────────────────────

function Principle({ num, headline, body, index }: {
  num: string; headline: string; body: string; index: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = rowRef.current;
    const numEl = numRef.current;
    if (!el || !numEl) return;

    const ctx = gsap.context(() => {
      // Ghost number parallax
      gsap.fromTo(numEl,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        }
      );
      // Row slide in
      gsap.fromTo(el.querySelector(".principle-content"),
        { x: -20, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 78%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rowRef}
      className="relative border-b border-[#1e1e1e] last:border-0 py-14 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start overflow-hidden"
    >
      {/* Ghost number — pure decoration */}
      <span
        ref={numRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[clamp(120px,14vw,200px)] font-black leading-none select-none pointer-events-none tabular-nums"
        style={{ color: "#FFC703", opacity: 0.06 }}
        aria-hidden
      >
        {num}
      </span>

      <div className="principle-content lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 relative z-10">
        {/* Number + headline */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <span className="text-[11px] tracking-[0.3em] font-medium text-[#FFC703]">{num}</span>
          <h3 className="text-2xl md:text-3xl lg:text-[28px] font-medium text-white leading-snug tracking-tight">
            {headline}
          </h3>
        </div>
        {/* Body */}
        <div className="lg:col-span-7">
          <p className="text-[#666] text-base md:text-lg leading-relaxed font-light">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export function StudioPage() {
  const progressRef = useRef<HTMLDivElement>(null);

  // Scroll progress
  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.height = `${(window.scrollY / total) * 100}%`;
      }
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Scroll-triggered reveals
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 28 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        );
      });

      ScrollTrigger.batch(".tool-item", {
        onEnter: (els) =>
          gsap.fromTo(els,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power2.out" }
          ),
        start: "top 88%",
        once: true,
      });

      ScrollTrigger.batch(".stat-item", {
        onEnter: (els) =>
          gsap.fromTo(els,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
          ),
        start: "top 85%",
        once: true,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#FFC703] selection:text-black">
      {/* Scroll progress */}
      <div className="fixed left-0 top-0 w-[3px] h-full z-50 bg-[#f0ece4]">
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

      {/* ── HERO — white ──────────────────────────────────────────── */}
      <section className="bg-[#f5f2eb] text-black min-h-[90vh] flex flex-col justify-end px-8 md:px-14 pt-32 pb-16 relative overflow-hidden">
        {/* Massive watermark */}
        <span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(140px,20vw,320px)] font-black leading-none whitespace-nowrap select-none pointer-events-none tracking-tighter"
          style={{ color: "rgba(0,0,0,0.04)" }}
          aria-hidden
        >
          STUDIO
        </span>

        <div className="max-w-[1600px] mx-auto w-full relative z-10">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-5 bg-[#FFC703]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-black/40">
              Est. 2022 · Manchester, UK · Working worldwide
            </span>
          </div>

          <LineReveal animateOnScroll={false} delay={0.1} stagger={0.08}>
            <h1 className="text-[clamp(48px,8vw,130px)] font-light leading-[0.9] tracking-[-0.03em] text-black max-w-5xl">
              Intentionally small.{" "}
              <em className="not-italic" style={{ WebkitTextStroke: "1.5px black", color: "transparent" }}>
                Obsessively good.
              </em>
            </h1>
          </LineReveal>

          <div className="mt-12 max-w-xl">
            <LineReveal animateOnScroll={false} delay={0.6} stagger={0.05}>
              <p className="text-lg md:text-xl text-black/50 font-light leading-relaxed">
                Agentic interface design and build for teams turning working AI
                into products people can understand, steer, and trust—without
                a 40-person agency between them and the work.
              </p>
            </LineReveal>
          </div>

          <div className="mt-12 flex items-center gap-6 flex-wrap">
            <Link
              href="mailto:hello@rulz.co"
              className="inline-flex items-center gap-2 bg-black text-[#FFC703] rounded-full px-7 py-3 text-[12px] font-semibold tracking-widest uppercase hover:bg-[#FFC703] hover:text-black transition-all duration-300 group"
            >
              Start a conversation
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="text-[12px] uppercase tracking-widest text-black/40 hover:text-black transition-colors flex items-center gap-1.5"
            >
              See the work <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="max-w-[1600px] mx-auto w-full mt-20 border-t border-black/10" />
      </section>

      {/* ── THE FOUNDER — white ───────────────────────────────────── */}
      <section className="bg-[#f5f2eb] text-black py-24 md:py-32 px-8 md:px-14">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Portrait */}
          <div className="lg:col-span-4 reveal-up">
            <Portrait />
            <div className="mt-5 flex flex-col gap-1">
              <p className="text-base font-medium text-black">Rulz</p>
              <p className="text-[11px] uppercase tracking-widest text-black/40">
                Founder · Designer · Strategist
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-8 flex flex-col justify-center pt-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-black/30 mb-6 reveal-up">
              The person behind the work
            </p>

            <div className="space-y-6">
              <LineReveal stagger={0.05} start="top 82%">
                <p className="text-2xl md:text-3xl lg:text-[28px] font-light text-black leading-snug tracking-tight">
                  I started Rulz&amp;Co because I kept seeing the same problem:
                  great technical teams building products that didn&apos;t land.
                  Not because the technology was wrong — because the product
                  thinking wasn&apos;t there.
                </p>
              </LineReveal>

              <LineReveal stagger={0.04} start="top 80%">
                <p className="text-lg text-black/60 font-light leading-relaxed">
                  I&apos;ve spent a decade at the intersection of design,
                  strategy, and AI — working with startups from pre-seed to
                  Series B across fintech, health, deep tech, and consumer. I&apos;ve
                  designed products that raised money, shipped to millions, and
                  fundamentally changed how teams thought about their work.
                </p>
              </LineReveal>

              <LineReveal stagger={0.04} start="top 78%">
                <p className="text-lg text-black/60 font-light leading-relaxed">
                  Rulz&amp;Co is built around one belief: the best product
                  thinking is deeply personal. Not scalable in the traditional
                  sense. When you work with me, you&apos;re not buying a
                  process. You&apos;re getting judgment.
                </p>
              </LineReveal>
            </div>

            <div className="mt-10 pt-10 border-t border-black/10 grid grid-cols-2 md:grid-cols-4 gap-6 reveal-up">
              {stats.map((s) => (
                <div key={s.label} className="stat-item flex flex-col gap-1">
                  <span className="text-3xl md:text-4xl font-light text-black tabular-nums">
                    {s.value}<span className="text-[#FFC703]">{s.suffix}</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-black/40">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MANIFESTO — dark ─────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white py-24 md:py-32 px-8 md:px-14">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center gap-4 mb-16 reveal-up">
            <div className="w-1.5 h-5 bg-[#FFC703]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#444]">
              What we believe
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16">
            <div className="lg:col-span-5">
              <LineReveal stagger={0.07} start="top 82%">
                <h2 className="text-[clamp(36px,5vw,72px)] font-light text-white leading-[0.95] tracking-tight">
                  Six things we hold true.
                </h2>
              </LineReveal>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <LineReveal stagger={0.04} start="top 82%">
                <p className="text-[#555] text-lg font-light leading-relaxed">
                  These aren&apos;t values written for a wall plaque. They&apos;re
                  the convictions that shape every engagement, every decision,
                  every file we deliver.
                </p>
              </LineReveal>
            </div>
          </div>

          <div className="border-t border-[#1a1a1a]">
            {principles.map((p, i) => (
              <Principle key={p.num} {...p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKING STYLE — white ────────────────────────────────── */}
      <section className="bg-white text-black py-24 md:py-32 px-8 md:px-14">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-16 reveal-up">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#999] mb-3">
              How we work together
            </p>
            <LineReveal stagger={0.07} start="top 82%">
              <h2 className="text-[clamp(32px,4.5vw,64px)] font-light text-black leading-[0.95] tracking-tight max-w-2xl">
                No surprises. No handoffs to people you&apos;ve never met.
              </h2>
            </LineReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#eee]">
            {workingStyle.map((item, i) => (
              <div
                key={item.label}
                className="bg-white p-10 md:p-12 flex flex-col gap-5 reveal-up"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#FFC703] font-medium">
                  {item.label}
                </span>
                <h3 className="text-xl md:text-2xl font-medium text-black leading-snug tracking-tight">
                  {item.heading}
                </h3>
                <p className="text-[#666] text-base leading-relaxed font-light">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE STACK — dark ─────────────────────────────────────── */}
      <section className="bg-[#0d0d0d] text-white py-24 md:py-28 px-8 md:px-14 border-t border-[#151515]">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4 reveal-up">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#444] mb-4">The toolkit</p>
              <h2 className="text-2xl md:text-3xl font-light text-white leading-snug tracking-tight">
                What we use to get the work done.
              </h2>
              <p className="text-[#555] text-sm leading-relaxed mt-4 font-light">
                No black boxes. We work with tools that keep files portable,
                decisions legible, and handoffs clean.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {tools.map((group) => (
                <div key={group.category} className="flex flex-col gap-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#444]">
                    {group.category}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="tool-item flex items-center gap-2 text-[#888] text-sm font-light"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#333] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSE / CTA — dark ───────────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white py-32 md:py-40 px-8 md:px-14 border-t border-[#111]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
          <div className="lg:col-span-8">
            <LineReveal stagger={0.07} start="top 82%">
              <h2 className="text-[clamp(36px,5.5vw,88px)] font-light text-white leading-[0.92] tracking-[-0.02em]">
                If this feels like the right fit — let&apos;s talk.
              </h2>
            </LineReveal>

            <div className="mt-10 reveal-up">
              <p className="text-[#555] text-lg font-light leading-relaxed max-w-xl">
                I take on a small number of engagements at a time. If you&apos;re
                building something ambitious and need a partner who will be as
                invested in it as you are — I&apos;d like to hear about it.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6 flex-wrap reveal-up">
              <a
                href="mailto:hello@rulz.co"
                className="inline-flex items-center gap-2 border border-[#FFC703] text-[#FFC703] rounded-full px-8 py-3.5 text-[12px] font-semibold tracking-widest uppercase hover:bg-[#FFC703] hover:text-black transition-all duration-300 group"
              >
                hello@rulz.co
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <Link
                href="/work"
                className="text-[12px] uppercase tracking-widest text-[#444] hover:text-white transition-colors flex items-center gap-1.5"
              >
                View the work <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>

          {/* Decorative right column */}
          <div className="lg:col-span-4 hidden lg:flex flex-col items-end gap-3 pb-2 reveal-up">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#333]">Based in</span>
            <span className="text-[#444] text-sm">Manchester, UK</span>
            <div className="mt-4 w-full border-t border-[#1a1a1a]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#333] mt-4">Available for</span>
            {["Interface diagnostics", "Agentic interface builds", "Ongoing partnerships"].map((s) => (
              <span key={s} className="text-[#444] text-sm">{s}</span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
