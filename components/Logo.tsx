"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import svgPaths from "@/lib/svg-paths";

export function Logo({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // DOM order: dot, o, C, &, z, l, u, R — reverse gives left-to-right: R u l z & C o dot
    const paths = Array.from(svg.querySelectorAll("path")).reverse();
    const letters = paths.slice(0, 7);
    const dot = paths[7];

    gsap.set(paths, { opacity: 0, y: 40 });

    const tl = gsap.timeline({ delay: 0.15 });

    // Letters slide up left-to-right
    tl.to(letters, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.07,
      ease: "power3.out",
    });

    // Gold dot pops in last
    tl.to(
      dot,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(2)",
      },
      "-=0.25"
    );

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
