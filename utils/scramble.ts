import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
const SCRAMBLE_DURATION = 0.25;
const SCRAMBLE_STAGGER = 50;

export interface ScrambleSplit {
  wordSplit: { chars?: HTMLElement[]; words?: HTMLElement[]; lines?: HTMLElement[]; revert: () => void };
  charSplits: Array<{ chars: HTMLElement[]; revert: () => void }>;
  allChars: HTMLElement[];
  playTimeout: ReturnType<typeof setTimeout> | null;
}

type ScrambleCharEl = HTMLElement & {
  scrambleInterval?: ReturnType<typeof setInterval> | null;
  scrambleTimeout?: ReturnType<typeof setTimeout> | null;
  staggerTimeout?: ReturnType<typeof setTimeout> | null;
};

function scrambleChar(
  el: ScrambleCharEl,
  showAfter = true,
  duration = SCRAMBLE_DURATION,
  charDelay = 50,
  maxIterations: number | null = null,
) {
  if (!el.dataset.originalText) {
    el.dataset.originalText = el.textContent ?? "";
  }
  const original = el.dataset.originalText;
  let iterations = 0;
  const iterationsCount = maxIterations ?? Math.floor(Math.random() * 6) + 3;

  if (showAfter) gsap.set(el, { opacity: 1 });

  if (el.scrambleInterval) clearInterval(el.scrambleInterval);
  if (el.scrambleTimeout) clearTimeout(el.scrambleTimeout);

  const interval = setInterval(() => {
    el.textContent =
      original === " "
        ? " "
        : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
    iterations++;

    if (iterations >= iterationsCount) {
      clearInterval(interval);
      el.scrambleInterval = null;
      el.textContent = original;
      if (!showAfter) gsap.set(el, { opacity: 0 });
    }
  }, charDelay);

  el.scrambleInterval = interval;

  const timeout = setTimeout(() => {
    clearInterval(interval);
    el.scrambleInterval = null;
    el.scrambleTimeout = null;
    el.textContent = original;
    if (!showAfter) gsap.set(el, { opacity: 0 });
  }, duration * 1000);

  el.scrambleTimeout = timeout;
}

function scrambleText(
  elements: ScrambleCharEl[],
  showAfter = true,
  duration = SCRAMBLE_DURATION,
  charDelay = 50,
  stagger = SCRAMBLE_STAGGER,
  maxIterations: number | null = null,
) {
  elements.forEach((el, index) => {
    if (el.staggerTimeout) clearTimeout(el.staggerTimeout);

    const t = setTimeout(() => {
      scrambleChar(el, showAfter, duration, charDelay, maxIterations);
      el.staggerTimeout = null;
    }, index * stagger);

    el.staggerTimeout = t;
  });
}

export function createScrambleSplit(element: HTMLElement): ScrambleSplit | null {
  if (!element || !element.textContent?.trim()) return null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wordSplit = new (SplitText as any)(element, { type: "words" });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const charSplits = wordSplit.words.map((word: HTMLElement) => new (SplitText as any)(word, { type: "chars" }));

  const allChars: HTMLElement[] = [];
  charSplits.forEach((split: { chars: HTMLElement[] }) => allChars.push(...split.chars));

  gsap.set(allChars, { opacity: 0 });

  return { wordSplit, charSplits, allChars, playTimeout: null };
}

export interface ScrambleOptions {
  duration?: number;
  charDelay?: number;
  stagger?: number;
  maxIterations?: number | null;
}

export function playScrambleIn(instance: ScrambleSplit, delay = 0, options: ScrambleOptions = {}) {
  if (!instance?.allChars?.length) return;

  const {
    duration = SCRAMBLE_DURATION,
    charDelay = 50,
    stagger = SCRAMBLE_STAGGER,
    maxIterations = null,
  } = options;

  instance.allChars.forEach(clearScrambleCharTimers);

  if (instance.playTimeout) {
    clearTimeout(instance.playTimeout);
    instance.playTimeout = null;
  }

  gsap.set(instance.allChars, { opacity: 0 });

  instance.playTimeout = setTimeout(() => {
    instance.playTimeout = null;
    scrambleText(instance.allChars as ScrambleCharEl[], true, duration, charDelay, stagger, maxIterations);
  }, delay * 1000);
}

export function scrambleIn(element: HTMLElement, delay = 0, options: ScrambleOptions = {}): ScrambleSplit | null {
  const instance = createScrambleSplit(element);
  if (!instance) return null;
  playScrambleIn(instance, delay, options);
  return instance;
}

export function clearScrambleCharTimers(el: HTMLElement) {
  const charEl = el as ScrambleCharEl;
  if (charEl.scrambleInterval) { clearInterval(charEl.scrambleInterval); charEl.scrambleInterval = null; }
  if (charEl.scrambleTimeout) { clearTimeout(charEl.scrambleTimeout); charEl.scrambleTimeout = null; }
  if (charEl.staggerTimeout) { clearTimeout(charEl.staggerTimeout); charEl.staggerTimeout = null; }
}

export function revertScrambleInstance(instance: ScrambleSplit | null) {
  if (!instance) return;
  if (instance.playTimeout) { clearTimeout(instance.playTimeout); instance.playTimeout = null; }
  instance.allChars?.forEach(clearScrambleCharTimers);
  instance.charSplits?.forEach((s) => s?.revert());
  instance.wordSplit?.revert();
}

export function scrambleVisible(element: HTMLElement, delay = 0, options: ScrambleOptions = {}): ScrambleSplit {
  const {
    duration = SCRAMBLE_DURATION,
    charDelay = 50,
    stagger = SCRAMBLE_STAGGER,
    maxIterations = null,
  } = options;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wordSplit = new (SplitText as any)(element, { type: "words" });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const charSplits = wordSplit.words.map((word: HTMLElement) => new (SplitText as any)(word, { type: "chars" }));

  const allChars: HTMLElement[] = [];
  charSplits.forEach((split: { chars: HTMLElement[] }) => allChars.push(...split.chars));

  gsap.set(allChars, { opacity: 1 });

  setTimeout(() => {
    scrambleText(allChars as ScrambleCharEl[], true, duration, charDelay, stagger, maxIterations);
  }, delay * 1000);

  return { wordSplit, charSplits, allChars, playTimeout: null };
}
