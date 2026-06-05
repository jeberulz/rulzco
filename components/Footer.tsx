"use client";

import { ArrowUp, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#111] text-white pt-8 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-12">
        <div className="flex justify-end mb-12">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
          >
            <span className="w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center">
              <ArrowUp size={10} />
            </span>
            Back to Top
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-gray-800/50 pt-8 mb-24 gap-6">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <div className="flex gap-1.5">
              <div className="w-1.5 h-4 bg-white" />
              <div className="w-1.5 h-4 bg-white/50" />
            </div>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500">
              Based in Manchester, UK, working worldwide
            </span>
          </div>
          <div className="flex gap-8 text-[10px] md:text-xs uppercase tracking-widest text-gray-500">
            <span>Manchester, UK</span>
            <span>53.4808° N | 2.2426° W</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-20 md:mb-32">
          <div className="flex flex-col justify-between h-full gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight">
                CRAFTING MEMORABLE
                <br />
                DIGITAL EXPERIENCES
              </h2>
              <a
                href="mailto:hello@rulz.co"
                className="block text-3xl md:text-5xl lg:text-6xl text-gray-500 hover:text-white transition-colors"
              >
                hello@rulz.co
              </a>
            </div>

            <div className="flex flex-wrap gap-8 text-xs uppercase tracking-widest text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Work</a>
              <a href="#" className="hover:text-white transition-colors">Studio</a>
              <a href="#" className="hover:text-white transition-colors">Services</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full gap-16">
            <div className="pt-2">
              <div className="relative group max-w-md">
                <label className="text-gray-500 text-sm block mb-2">
                  Your Email
                </label>
                <div className="relative border-b border-gray-700 group-focus-within:border-white transition-colors pb-4">
                  <input
                    type="email"
                    className="w-full bg-transparent border-none outline-none text-white placeholder-transparent focus:ring-0 p-0 text-lg"
                  />
                  <button className="absolute right-0 top-0 text-gray-500 group-focus-within:text-white hover:text-[#FFC703] transition-colors">
                    <ArrowRight size={18} className="-rotate-45" />
                  </button>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mt-4 max-w-sm">
                  Join our newsletter to stay informed about new tips, tutorials,
                  projects, products, investments, and more.
                </p>
              </div>
            </div>

            <div className="flex justify-start lg:justify-end gap-12 text-xs uppercase tracking-widest text-gray-400">
              <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">
                Twitter <ArrowUp size={12} className="rotate-45" />
              </a>
              <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">
                LinkedIn <ArrowUp size={12} className="rotate-45" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full text-center leading-none px-4 md:px-0 pointer-events-none">
        <Logo className="w-full h-auto text-white opacity-100 -mb-[1vw]" />
      </div>
    </div>
  );
}
