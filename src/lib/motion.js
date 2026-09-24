import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger, Lenis };

export const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
export const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

let lenis = null;

export function initLenis() {
  if (prefersReduced || lenis) return lenis;
  lenis = new Lenis({ duration: 1.15, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  return lenis;
}

export function getLenis() {
  return lenis;
}
