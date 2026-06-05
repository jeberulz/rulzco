"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { X, ArrowUpRight } from "lucide-react";
import {
  type ScrambleSplit,
  scrambleIn,
  scrambleVisible,
  revertScrambleInstance,
} from "@/utils/scramble";

interface NavMenuProps {
  className?: string;
}

const menuItems = [
  { number: "01", label: "Home", sub: "Where the creative heart is.", href: "/" },
  { number: "02", label: "Work", sub: "Projects we have worked on.", href: "/work" },
  { number: "03", label: "Services", sub: "What we do and how we do it.", href: "/services" },
  { number: "04", label: "Studio", sub: "About the Studio, principles & values.", href: "/studio" },
  { number: "05", label: "Partnership", sub: "We partner & invest in companies & ideas.", href: "/partnership" },
  { number: "06", label: "News", sub: "Our updates, thoughts, resources, and more.", href: "/news" },
];

const SCRAMBLE_OPTS = { duration: 0.18, charDelay: 45, stagger: 30, maxIterations: 5 };
const HOVER_OPTS = { duration: 0.2, charDelay: 40, stagger: 25, maxIterations: 8 };

export function NavMenu({ className }: NavMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const openSplits = useRef<(ScrambleSplit | null)[]>([]);
  const hoverSplits = useRef<(ScrambleSplit | null)[]>([]);

  const openMenu = () => {
    setIsOpen(true);
    requestAnimationFrame(() => {
      const tl = gsap.timeline();

      // slide overlay in + fade content
      tl.fromTo(
        overlayRef.current,
        { y: "-100%" },
        { y: "0%", duration: 0.55, ease: "power3.out" }
      ).fromTo(
        contentRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        "-=0.2"
      );

      // scramble in each nav label with stagger
      openSplits.current.forEach((s) => revertScrambleInstance(s));
      openSplits.current = [];

      labelRefs.current.forEach((el, i) => {
        if (!el) return;
        const delay = 0.2 + i * 0.07;
        const instance = scrambleIn(el, delay, SCRAMBLE_OPTS);
        openSplits.current[i] = instance;
      });
    });
  };

  const closeMenu = () => {
    // revert scramble splits before the overlay leaves
    openSplits.current.forEach((s) => revertScrambleInstance(s));
    openSplits.current = [];
    hoverSplits.current.forEach((s) => revertScrambleInstance(s));
    hoverSplits.current = [];

    gsap.to(overlayRef.current, {
      y: "-100%",
      duration: 0.5,
      ease: "power3.in",
      onComplete: () => setIsOpen(false),
    });
  };

  const handleLabelHover = (idx: number) => {
    const el = labelRefs.current[idx];
    if (!el) return;

    // revert any in-progress hover split for this slot then scramble
    revertScrambleInstance(hoverSplits.current[idx] ?? null);
    hoverSplits.current[idx] = scrambleVisible(el, 0, HOVER_OPTS);
  };

  return (
    <>
      <div
        onClick={openMenu}
        className={`flex items-center gap-1 cursor-pointer text-[#9CA3AF] hover:text-white transition-colors ${className}`}
      >
        <span className="text-sm tracking-[0.2em] font-medium">MENU</span>
        <span className="text-lg leading-none font-light ml-1">+</span>
      </div>

      {isOpen && (
        <div
          ref={overlayRef}
          style={{ transform: "translateY(-100%)" }}
          className="fixed inset-0 bg-black z-[100] text-white overflow-y-auto"
        >
          <div className="max-w-[1600px] mx-auto p-6 md:p-12 h-full flex flex-col">
            <div className="flex justify-between items-start mb-16 md:mb-24">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-10 bg-white" />
                <div className="w-2.5 h-10 bg-white/50" />
              </div>
              <button
                onClick={closeMenu}
                className="flex items-center gap-2 text-sm tracking-widest hover:text-gray-300 transition-colors"
              >
                CLOSE <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 flex-grow">
              <div ref={contentRef} className="flex flex-col justify-between h-full pb-12">
                <div className="max-w-2xl">
                  <p className="text-3xl md:text-5xl lg:text-[56px] leading-[1.1] font-normal tracking-tight mb-16">
                    Rulz&amp;Co is an AI product design and strategy studio
                    that combines clarity, craft, and AI-native thinking to
                    ship products people actually use.
                  </p>
                  <div className="mb-12">
                    <p className="text-xl md:text-2xl mb-2">
                      Want to discuss a new project?
                    </p>
                    <a
                      href="mailto:hello@rulz.co"
                      className="text-xl md:text-2xl text-gray-400 hover:text-white transition-colors"
                    >
                      hello@rulz.co
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 text-xs uppercase tracking-widest text-gray-400 mt-auto">
                  <div className="flex flex-col gap-2">
                    <a href="#" className="flex items-center gap-1 hover:text-white">
                      Twitter <ArrowUpRight size={12} />
                    </a>
                    <a href="#" className="flex items-center gap-1 hover:text-white">
                      LinkedIn <ArrowUpRight size={12} />
                    </a>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a href="mailto:hello@rulz.co" className="hover:text-white">
                      HELLO@RULZ.CO
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8 pb-12 content-start">
                {menuItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="group block"
                    onClick={closeMenu}
                    onMouseEnter={() => handleLabelHover(idx)}
                  >
                    <div className="relative inline-block">
                      <span
                        ref={(el) => { labelRefs.current[idx] = el; }}
                        className="text-5xl md:text-7xl font-light block"
                      >
                        {item.label}
                      </span>
                      {item.number && (
                        <span className="absolute -top-2 -right-6 text-sm md:text-base tracking-widest text-gray-500 font-normal">
                          {item.number}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mt-2 max-w-[200px]">
                      {item.sub}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
