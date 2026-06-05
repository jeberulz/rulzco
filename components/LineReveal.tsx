"use client";

import React, { useRef, useLayoutEffect, ReactNode } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onAnimationReady } from "@/lib/animation-ready";

gsap.registerPlugin(SplitText, ScrollTrigger);

const TEXT_SELECTOR = "h1,h2,h3,h4,h5,h6,p,a,li,span";

function getAnimatableElements(root: Element): Element[] {
  const candidates = Array.from(root.querySelectorAll(TEXT_SELECTOR)).filter(
    (el) => root.contains(el) && el.textContent?.trim()
  );
  const leaves = candidates.filter(
    (el) => !candidates.some((other) => other !== el && el.contains(other))
  );
  return leaves.length > 0 ? leaves : [root];
}

interface LineRevealProps {
  children: ReactNode;
  /** Play immediately on mount; if false, triggers on scroll */
  animateOnScroll?: boolean;
  /** Wait for the preloader signal before playing (use with animateOnScroll=false) */
  waitForReady?: boolean;
  /** Seconds before reveal starts (offset from signal when waitForReady=true) */
  delay?: number;
  /** Seconds between each line/word */
  stagger?: number;
  /** Split by lines (default) or words */
  type?: "lines" | "words";
  /** ScrollTrigger start string, e.g. "top 85%" */
  start?: string;
}

export default function LineReveal({
  children,
  animateOnScroll = true,
  waitForReady = false,
  delay = 0,
  stagger = 0.05,
  type = "lines",
  start = "top 85%",
}: LineRevealProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    let isActive = true;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const splitInstances: any[] = [];
    const scrollTriggerList: ScrollTrigger[] = [];
    let tween: gsap.core.Tween | null = null;
    let rebuildTimer: ReturnType<typeof setTimeout> | null = null;

    const cleanup = () => {
      if (rebuildTimer) clearTimeout(rebuildTimer);
      tween?.kill();
      scrollTriggerList.forEach((st) => st.kill());
      scrollTriggerList.length = 0;
      splitInstances.forEach((s) => s?.revert());
      root.classList.remove("line-reveal-ready");
    };

    const scheduleRebuild = (run: () => void) => {
      if (rebuildTimer) clearTimeout(rebuildTimer);
      rebuildTimer = setTimeout(() => {
        rebuildTimer = null;
        if (isActive) run();
      }, 50);
    };

    const runAnimation = () => {
      tween?.kill();
      scrollTriggerList.forEach((st) => st.kill());
      scrollTriggerList.length = 0;

      const allUnits: Element[] = [];
      const targets = getAnimatableElements(root);

      targets.forEach((el, i) => {
        const split = splitInstances[i];
        if (!split) return;
        const units: Element[] = type === "words" ? split.words : split.lines;
        allUnits.push(...units);
      });

      if (allUnits.length === 0) {
        root.classList.add("line-reveal-ready");
        return;
      }

      gsap.set(allUnits, { yPercent: 110 });
      root.classList.add("line-reveal-ready");

      const shouldPause = animateOnScroll || waitForReady;
      tween = gsap.to(allUnits, {
        yPercent: 0,
        duration: 0.75,
        ease: "power3.out",
        delay: waitForReady ? 0 : delay,
        stagger,
        paused: shouldPause,
      });

      if (animateOnScroll) {
        const st = ScrollTrigger.create({
          trigger: root,
          start,
          once: true,
          animation: tween,
          toggleActions: "play none none none",
        });
        scrollTriggerList.push(st);
      } else if (waitForReady) {
        onAnimationReady(() => {
          if (delay > 0) {
            gsap.delayedCall(delay, () => tween?.play());
          } else {
            tween?.play();
          }
        });
      }
    };

    const buildAnimation = () => {
      cleanup();
      const targets = getAnimatableElements(root);
      splitInstances.length = 0;

      targets.forEach((el) => {
        const split = SplitText.create(el, {
          type: type === "words" ? "words" : "lines",
          mask: type === "words" ? "words" : "lines",
          autoSplit: true,
          lineThreshold: 0.1,
          linesClass: "gsap-line",
          wordsClass: "gsap-word",
          onSplit: () => scheduleRebuild(runAnimation),
        });
        splitInstances.push(split);
      });
    };

    buildAnimation();

    return () => {
      isActive = false;
      cleanup();
    };
  }, [animateOnScroll, waitForReady, delay, stagger, type, start]);

  const isSingleElement =
    React.Children.count(children) === 1 && React.isValidElement(children);

  if (isSingleElement) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return React.cloneElement(children as React.ReactElement<any>, {
      ref: containerRef,
      "data-line-reveal": "",
    });
  }

  return (
    <div
      ref={containerRef as React.Ref<HTMLDivElement>}
      data-line-reveal=""
    >
      {children}
    </div>
  );
}
