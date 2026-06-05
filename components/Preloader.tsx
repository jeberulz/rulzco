"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { signalAnimationReady } from "@/lib/animation-ready";

// persists across remounts; resets only on hard refresh
let hasLoaded = false;

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const revealerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // skip if already played this session
    if (hasLoaded) {
      setVisible(false);
      signalAnimationReady();
      return;
    }

    document.body.style.overflow = "hidden";

    const counter = counterRef.current;
    const root = rootRef.current;
    const revealer = revealerRef.current;
    if (!counter || !root || !revealer) return;

    // --- counter: 00 → 100 with randomised jumps ---
    let value = 0;
    const COUNTER_DURATION = 2400;
    const startTime = Date.now();
    let counterTimer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed >= COUNTER_DURATION || value >= 100) {
        counter.textContent = "100";
        return;
      }
      const target = Math.floor((elapsed / COUNTER_DURATION) * 100);
      const jump = Math.floor(Math.random() * 18) + 3;
      value = Math.min(value + jump, target, 100);
      counter.textContent = String(value).padStart(2, "0");
      counterTimer = setTimeout(tick, 140 + Math.random() * 80);
    };
    counterTimer = setTimeout(tick, 200);

    // --- circle revealer + clip-path wipe ---
    gsap.set(revealer, { scale: 0 });

    const tl = gsap.timeline({
      onComplete: () => {
        clearTimeout(counterTimer);
        hasLoaded = true;
        document.body.style.overflow = "";
        signalAnimationReady();
        setTimeout(() => setVisible(false), 50);
      },
    });

    tl.to(revealer, { scale: 0.06, duration: 0.55, ease: "power2.out", delay: 1.3 })
      .to(revealer, { scale: 0.25, duration: 0.65, ease: "power3.out" })
      .to(revealer, { scale: 0.6,  duration: 0.45, ease: "power2.out" })
      .to(revealer, { scale: 1,    duration: 0.45, ease: "power2.in"  })
      .to(root, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.65,
        ease: "power3.out",
      }, "-=0.05");

    return () => {
      clearTimeout(counterTimer);
      tl.kill();
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[200] bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
    >
      {/* white circle that expands to fill the screen */}
      <div
        ref={revealerRef}
        className="absolute rounded-full bg-white pointer-events-none"
        style={{
          width: "200vmax",
          height: "200vmax",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(0)",
        }}
      />

      {/* counter — mix-blend-difference auto-inverts as the white circle passes over */}
      <span
        ref={counterRef}
        className="relative z-10 font-light tabular-nums select-none text-white"
        style={{
          fontSize: "clamp(5rem, 14vw, 12rem)",
          mixBlendMode: "difference",
        }}
      >
        00
      </span>
    </div>
  );
}
