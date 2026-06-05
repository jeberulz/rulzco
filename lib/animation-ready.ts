type Fn = () => void;

let ready = false;
const queue: Fn[] = [];

/** Register a callback to run when the preloader exits. Fires immediately if already ready. */
export function onAnimationReady(fn: Fn): void {
  if (ready) { fn(); return; }
  queue.push(fn);
}

/** Called by the Preloader when its exit animation completes. One-shot — safe to call multiple times. */
export function signalAnimationReady(): void {
  if (ready) return;
  ready = true;
  queue.splice(0).forEach((fn) => fn());
}
