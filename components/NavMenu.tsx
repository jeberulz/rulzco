"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { X, ArrowUpRight } from "lucide-react";

interface NavMenuProps {
  className?: string;
}

const menuItems = [
  { number: "00", label: "Home", sub: "Where the creative heart is.", href: "#" },
  { number: "00", label: "News", sub: "Our updates, thoughts, resources, and more.", href: "#" },
  { number: "08", label: "Work", sub: "Projects we have worked on.", href: "#" },
  { number: "04", label: "Partnership", sub: "We partner & invest in companies & ideas.", href: "#" },
  { number: "", label: "Studio", sub: "About the Studio, principles & values.", href: "#" },
  { number: "", label: "Services", sub: "What we do and how we do it.", href: "#" },
];

export function NavMenu({ className }: NavMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLAnchorElement[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  const openMenu = () => {
    setIsOpen(true);
    requestAnimationFrame(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        overlayRef.current,
        { y: "-100%" },
        { y: "0%", duration: 0.6, ease: "power3.out" }
      ).fromTo(
        itemsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: "power2.out" },
        "-=0.2"
      ).fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        "-=0.35"
      );
    });
  };

  const closeMenu = () => {
    gsap.to(overlayRef.current, {
      y: "-100%",
      duration: 0.5,
      ease: "power3.in",
      onComplete: () => setIsOpen(false),
    });
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
                  <a
                    key={idx}
                    href={item.href}
                    ref={(el) => {
                      if (el) itemsRef.current[idx] = el;
                    }}
                    className="group block"
                  >
                    <div className="relative inline-block">
                      <span className="text-5xl md:text-7xl font-light group-hover:text-gray-300 transition-colors block">
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
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
