"use client";

import { useEffect, useRef } from "react";

interface TrailContainerProps {
  images: string[];
  /** Image width in px (default 200) */
  imageWidth?: number;
  /** Image height in px (default 250) */
  imageHeight?: number;
}

const LERP = (a: number, b: number, n: number) => (1 - n) * a + n * b;
const DIST = (x1: number, y1: number, x2: number, y2: number) =>
  Math.hypot(x2 - x1, y2 - y1);

const CONFIG = {
  imageLifespan: 1000,
  mouseThreshold: 140,
  inDuration: 750,
  outDuration: 900,
  staggerIn: 95,
  staggerOut: 22,
  slideDuration: 950,
  slideEasing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  easing: "cubic-bezier(0.87, 0, 0.13, 1)",
};

interface TrailItem {
  element: HTMLDivElement;
  maskLayers: HTMLDivElement[];
  imageLayers: HTMLDivElement[];
  removeTime: number;
}

export default function TrailContainer({
  images,
  imageWidth = 200,
  imageHeight = 250,
}: TrailContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const trailRef = useRef<TrailItem[]>([]);
  const imgIndexRef = useRef(0);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const lastSpawnPosRef = useRef({ x: 0, y: 0 });
  const interpPosRef = useRef({ x: 0, y: 0 });
  const isDesktopRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    isDesktopRef.current = window.innerWidth > 1000;

    const halfW = imageWidth / 2;
    const halfH = imageHeight / 2;

    const isInContainer = (x: number, y: number) => {
      const r = container.getBoundingClientRect();
      return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
    };

    const spawnImage = () => {
      const imgSrc = images[imgIndexRef.current % images.length];
      imgIndexRef.current = (imgIndexRef.current + 1) % images.length;

      const rect = container.getBoundingClientRect();
      const startX = interpPosRef.current.x - rect.left - halfW;
      const startY = interpPosRef.current.y - rect.top - halfH;
      const targetX = mousePosRef.current.x - rect.left - halfW;
      const targetY = mousePosRef.current.y - rect.top - halfH;

      const imgEl = document.createElement("div");
      imgEl.style.cssText = `
        position: absolute;
        width: ${imageWidth}px;
        height: ${imageHeight}px;
        left: ${startX}px;
        top: ${startY}px;
        pointer-events: none;
        border-radius: 6px;
        overflow: hidden;
        transition: left ${CONFIG.slideDuration}ms ${CONFIG.slideEasing},
                    top  ${CONFIG.slideDuration}ms ${CONFIG.slideEasing};
      `;

      const maskLayers: HTMLDivElement[] = [];
      const imageLayers: HTMLDivElement[] = [];

      for (let i = 0; i < 10; i++) {
        const rowStart = i * 10;
        const rowEnd = (i + 1) * 10;

        const mask = document.createElement("div");
        mask.style.cssText = `
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          will-change: clip-path;
          clip-path: polygon(50% ${rowStart}%, 50% ${rowStart}%, 50% ${rowEnd}%, 50% ${rowEnd}%);
          transition: clip-path ${CONFIG.inDuration}ms ${CONFIG.easing};
          transform: translateZ(0);
          backface-visibility: hidden;
        `;

        const img = document.createElement("div");
        img.style.cssText = `
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background-image: url(${imgSrc});
          background-size: cover;
          background-position: center;
        `;

        mask.appendChild(img);
        imgEl.appendChild(mask);
        maskLayers.push(mask);
        imageLayers.push(img);
      }

      container.appendChild(imgEl);

      // reveal strips outward from the middle row
      requestAnimationFrame(() => {
        imgEl.style.left = `${targetX}px`;
        imgEl.style.top = `${targetY}px`;

        maskLayers.forEach((mask, i) => {
          const rowStart = i * 10;
          const rowEnd = (i + 1) * 10;
          const distFromMiddle = Math.abs(i - 4.5);
          setTimeout(() => {
            mask.style.clipPath = `polygon(0% ${rowStart}%, 100% ${rowStart}%, 100% ${rowEnd}%, 0% ${rowEnd}%)`;
          }, distFromMiddle * CONFIG.staggerIn);
        });
      });

      trailRef.current.push({
        element: imgEl,
        maskLayers,
        imageLayers,
        removeTime: Date.now() + CONFIG.imageLifespan,
      });
    };

    const pruneOldImages = () => {
      if (trailRef.current.length === 0) return;
      const oldest = trailRef.current[0];
      if (Date.now() < oldest.removeTime) return;

      const item = trailRef.current.shift()!;

      // collapse strips inward toward the middle
      item.maskLayers.forEach((mask, i) => {
        const rowStart = i * 10;
        const rowEnd = (i + 1) * 10;
        const distFromEdge = 4.5 - Math.abs(i - 4.5);
        mask.style.transition = `clip-path ${CONFIG.outDuration}ms ${CONFIG.easing}`;
        setTimeout(() => {
          mask.style.clipPath = `polygon(50% ${rowStart}%, 50% ${rowStart}%, 50% ${rowEnd}%, 50% ${rowEnd}%)`;
        }, distFromEdge * CONFIG.staggerOut);
      });

      item.imageLayers.forEach((img) => {
        img.style.transition = `opacity ${CONFIG.outDuration}ms ${CONFIG.easing}`;
        img.style.opacity = "0.2";
      });

      setTimeout(() => {
        item.element.parentNode?.removeChild(item.element);
      }, CONFIG.outDuration + 120);
    };

    const render = () => {
      if (!isDesktopRef.current) return;

      interpPosRef.current.x = LERP(
        interpPosRef.current.x || mousePosRef.current.x,
        mousePosRef.current.x,
        0.1,
      );
      interpPosRef.current.y = LERP(
        interpPosRef.current.y || mousePosRef.current.y,
        mousePosRef.current.y,
        0.1,
      );

      const dist = DIST(
        mousePosRef.current.x,
        mousePosRef.current.y,
        lastSpawnPosRef.current.x,
        lastSpawnPosRef.current.y,
      );

      if (dist > CONFIG.mouseThreshold && isInContainer(mousePosRef.current.x, mousePosRef.current.y)) {
        spawnImage();
        lastSpawnPosRef.current = { ...mousePosRef.current };
      }

      pruneOldImages();
      rafRef.current = requestAnimationFrame(render);
    };

    const onMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const onResize = () => {
      const wasDesktop = isDesktopRef.current;
      isDesktopRef.current = window.innerWidth > 1000;

      if (isDesktopRef.current && !wasDesktop) {
        document.addEventListener("mousemove", onMouseMove);
        rafRef.current = requestAnimationFrame(render);
      } else if (!isDesktopRef.current && wasDesktop) {
        document.removeEventListener("mousemove", onMouseMove);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        trailRef.current.forEach((item) => item.element.parentNode?.removeChild(item.element));
        trailRef.current = [];
      }
    };

    window.addEventListener("resize", onResize);

    if (isDesktopRef.current) {
      document.addEventListener("mousemove", onMouseMove);
      rafRef.current = requestAnimationFrame(render);
    }

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      trailRef.current.forEach((item) => item.element.parentNode?.removeChild(item.element));
      trailRef.current = [];
    };
  }, [images, imageWidth, imageHeight]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 10,
        pointerEvents: "none",
      }}
      aria-hidden
    />
  );
}
