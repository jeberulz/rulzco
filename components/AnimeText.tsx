"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimeTextProps {
  /** Array of paragraph strings to animate word by word */
  paragraphs: string[];
  /** Words that receive a coloured pill highlight (lowercase, no punctuation) */
  keywords?: string[];
  /** Per-keyword background colour override */
  keywordColors?: Record<string, string>;
  /**
   * RGB triplet for the reveal flash background, e.g. "255, 199, 3"
   * Defaults to the brand yellow.
   */
  highlightBg?: string;
  /** How many viewport-heights the section stays pinned (default 3) */
  pinDuration?: number;
}

const normalise = (w: string) => w.toLowerCase().replace(/[.,!?;:"']/g, "");

export default function AnimeText({
  paragraphs,
  keywords = [],
  keywordColors = {},
  highlightBg = "255, 199, 3",
  pinDuration = 3,
}: AnimeTextProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = Array.from(container.querySelectorAll<HTMLElement>(".at-word"));
    const totalWords = words.length;

    triggerRef.current = ScrollTrigger.create({
      trigger: container,
      pin: container,
      start: "top top",
      end: `+=${window.innerHeight * pinDuration}`,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress;

        words.forEach((word, index) => {
          const wordText = word.querySelector<HTMLElement>("span");
          if (!wordText) return;

          if (progress <= 0.7) {
            // forward reveal — words fade in with highlight flash
            const revealProgress = Math.min(1, progress / 0.7);
            const overlapWords = 15;
            const wordStart = index / totalWords;
            const wordEnd = wordStart + overlapWords / totalWords;
            const timelineScale =
              1 /
              Math.min(
                1 + overlapWords / totalWords,
                1 + (totalWords - 1) / totalWords + overlapWords / totalWords,
              );
            const adjStart = wordStart * timelineScale;
            const adjEnd = wordEnd * timelineScale;
            const duration = adjEnd - adjStart;
            const wordProgress =
              revealProgress <= adjStart
                ? 0
                : revealProgress >= adjEnd
                  ? 1
                  : (revealProgress - adjStart) / duration;

            word.style.opacity = String(wordProgress);

            const bgFade = wordProgress >= 0.9 ? (wordProgress - 0.9) / 0.1 : 0;
            word.style.backgroundColor = `rgba(${highlightBg}, ${Math.max(0, 1 - bgFade)})`;

            const textReveal = wordProgress >= 0.9 ? (wordProgress - 0.9) / 0.1 : 0;
            wordText.style.opacity = String(Math.pow(textReveal, 0.5));
          } else {
            // reverse fade — highlight returns as text hides
            const reverseProgress = (progress - 0.7) / 0.3;
            word.style.opacity = "1";

            const reverseOverlap = 5;
            const rStart = index / totalWords;
            const rEnd = rStart + reverseOverlap / totalWords;
            const rScale =
              1 /
              Math.max(
                1,
                (totalWords - 1) / totalWords + reverseOverlap / totalWords,
              );
            const rAdjStart = rStart * rScale;
            const rAdjEnd = rEnd * rScale;
            const rDur = rAdjEnd - rAdjStart;
            const rProgress =
              reverseProgress <= rAdjStart
                ? 0
                : reverseProgress >= rAdjEnd
                  ? 1
                  : (reverseProgress - rAdjStart) / rDur;

            if (rProgress > 0) {
              wordText.style.opacity = String(1 - rProgress);
              word.style.backgroundColor = `rgba(${highlightBg}, ${rProgress})`;
            } else {
              wordText.style.opacity = "1";
              word.style.backgroundColor = `rgba(${highlightBg}, 0)`;
            }
          }
        });
      },
    });

    return () => {
      triggerRef.current?.kill();
      triggerRef.current = null;
    };
  }, [paragraphs, keywords, highlightBg, pinDuration]);

  // ensure kill on unmount even if effect already cleaned up
  useLayoutEffect(() => {
    return () => {
      triggerRef.current?.kill();
      triggerRef.current = null;
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-svh bg-[#111] overflow-hidden flex items-center justify-center px-6 md:px-12"
    >
      <div className="w-full max-w-4xl text-center">
        {paragraphs.map((para, pi) => (
          <p
            key={pi}
            className="text-[clamp(1.4rem,2.4vw,4rem)] font-medium leading-[1.5] tracking-tight mb-8 last:mb-0"
          >
            {para
              .split(/\s+/)
              .filter(Boolean)
              .map((word, wi) => {
                const norm = normalise(word);
                const isKeyword = keywords.includes(norm);
                const kwColor = keywordColors[norm];
                return (
                  <span
                    key={wi}
                    className="at-word inline-block relative mx-[0.15rem] my-[0.1rem] px-[0.2rem] rounded-lg will-change-[background-color,opacity]"
                    style={{ opacity: 0 }}
                  >
                    <span
                      className={
                        isKeyword
                          ? "relative inline-block rounded-lg px-[0.1rem] text-[#111]"
                          : "text-gray-300"
                      }
                      style={{
                        opacity: 0,
                        ...(isKeyword
                          ? ({ "--kw-color": kwColor ?? `rgb(${highlightBg})` } as React.CSSProperties)
                          : {}),
                      }}
                    >
                      {isKeyword && (
                        <span
                          aria-hidden
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+1rem)] h-[calc(100%+0.4rem)] rounded-lg -z-10"
                          style={{ backgroundColor: kwColor ?? `rgb(${highlightBg})` }}
                        />
                      )}
                      {word}
                    </span>
                  </span>
                );
              })}
          </p>
        ))}
      </div>
    </section>
  );
}
