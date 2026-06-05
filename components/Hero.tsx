"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";
import LineReveal from "./LineReveal";
import { onAnimationReady } from "@/lib/animation-ready";

const services = [
  {
    category: "Design",
    items: [
      "Product UI/UX design",
      "Rapid prototyping",
      "Design systems",
      "UX for complex workflows",
      "Lightweight user research",
      "Vibe-coded products",
    ],
  },
  {
    category: "Strategy",
    items: [
      "MVP definition & roadmap",
      "Product strategy & prioritisation",
      "PRDs & feature specs",
      "Competitive analysis",
      "Go-To-Market strategy",
      "Launch planning",
    ],
  },
  {
    category: "AI",
    items: [
      "AI-first product concepts",
      "Agentic UX design",
      "Workflow automation design",
      "AI feature discovery",
      "Prompt & interaction design",
      "AI MVP prototyping",
    ],
  },
];

export function Hero() {
  const navRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  // Set initial hidden state before paint — prevents flash of unstyled content
  // Nav gets opacity-only (no y transform) — a CSS transform on the wrapper would
  // create a new containing block for the fixed-position overlay inside NavMenu.
  useLayoutEffect(() => {
    const serviceColumns = servicesRef.current
      ? Array.from(servicesRef.current.children)
      : [];
    gsap.set(navRef.current, { opacity: 0 });
    gsap.set(
      [...serviceColumns, ctaRef.current].filter(Boolean),
      { opacity: 0, y: 16 }
    );
  }, []);

  useEffect(() => {
    onAnimationReady(() => {
      const serviceColumns = servicesRef.current
        ? Array.from(servicesRef.current.children)
        : [];

      // Nav trigger — opacity only. Any transform here (even y:0) creates a
      // containing block for the fixed-position overlay inside NavMenu.
      gsap.to(navRef.current, {
        opacity: 1,
        duration: 0.5,
        delay: 0.1,
        ease: "power2.out",
      });

      // CTA button — after H1 and paragraph finish
      gsap.to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.95,
        ease: "power2.out",
      });

      // Service columns — last to arrive, staggered
      gsap.to(serviceColumns, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 1.1,
        stagger: 0.1,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <div className="w-full bg-[#0a0a0a] text-white pt-8 pb-20 px-6 md:px-12 relative overflow-hidden">
      <div ref={navRef} className="absolute top-8 right-8 z-50">
        <NavMenu />
      </div>

      <div className="w-full max-w-[1920px] mx-auto flex flex-col">
        <div className="w-full mb-20 mt-8 md:mt-12">
          <Logo className="w-full h-auto block" />
        </div>

        <div className="flex flex-col xl:flex-row gap-16 xl:gap-8 justify-between items-start w-full">
          <div
            ref={servicesRef}
            className="flex flex-wrap gap-x-16 gap-y-12 md:gap-x-24"
          >
            {services.map((service) => (
              <div key={service.category} className="flex flex-col gap-4">
                <h3 className="text-[#4A4A4A] uppercase text-sm tracking-widest font-medium">
                  {service.category}
                </h3>
                <ul className="flex flex-col gap-2 text-[#A1A1AA] text-[15px] font-light leading-normal">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="order-first xl:order-none xl:max-w-[560px] flex flex-col items-start gap-8 pt-2">
            <LineReveal animateOnScroll={false} waitForReady delay={0.35}>
              <h1 className="text-3xl md:text-[32px] leading-[1.3] font-medium text-[#F3F5F3]">
                AI Product Design & Strategy partner for startups shipping
                intelligent products.
              </h1>
            </LineReveal>
            <LineReveal
              animateOnScroll={false}
              waitForReady
              delay={0.65}
              type="words"
              stagger={0.04}
            >
              <p className="text-[24px] text-[#797A7A] leading-tight font-light">
                From idea → MVP → launch, with AI at the core.
              </p>
            </LineReveal>
            <button
              ref={ctaRef}
              className="mt-2 border border-[#FFC703] text-[#FFC703] rounded-full px-8 py-3 text-[13px] font-medium tracking-[0.05em] uppercase flex items-center gap-2 hover:bg-[#FFC703] hover:text-black transition-all duration-300 group"
            >
              Start a project
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
