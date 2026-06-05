"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { onAnimationReady } from "@/lib/animation-ready";
import svgPaths from "@/lib/svg-paths";

export function Logo({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  // Hide before paint so paths are never visible at their displaced position
  useLayoutEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    gsap.set(svg.querySelectorAll("path"), { opacity: 0, y: 30 });
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // DOM order: dot, o, C, &, z, l, u, R — reverse = left-to-right: R u l z & C o dot
    const paths = Array.from(svg.querySelectorAll("path")).reverse();
    const letters = paths.slice(0, 7);
    const dot = paths[7];

    const tl = gsap.timeline({ paused: true });

    tl.to(letters, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.07,
      ease: "power3.out",
    });

    // Gold dot pops in with a slight bounce as the last letter lands
    tl.to(dot, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "back.out(2)",
    }, "-=0.25");

    onAnimationReady(() => tl.play());

    return () => { tl.kill(); };
  }, []);

  return (
    <svg
      ref={svgRef}
      className={className}
      viewBox="0 0 1367 258"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={svgPaths.p3efabd80} fill="#FFC703" />
      <path d={svgPaths.p87bf700} fill="currentColor" />
      <path d={svgPaths.p2b16b800} fill="currentColor" />
      <path d={svgPaths.p242ffe00} fill="currentColor" />
      <path d={svgPaths.p2cc8d700} fill="currentColor" />
      <path d={svgPaths.p17f71e90} fill="currentColor" />
      <path d={svgPaths.p16436b0} fill="currentColor" />
      <path d={svgPaths.p9679c00} fill="currentColor" />
    </svg>
  );
}
