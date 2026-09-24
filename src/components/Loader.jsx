import { useEffect, useRef } from "react";
import { gsap, prefersReduced } from "../lib/motion";
import { BRAND_NAME } from "../lib/site";

/* Loader intro — logo + stitch line draw, then slide up */
export default function Loader({ onDone }) {
  const ref = useRef(null);
  const done = useRef(onDone);
  done.current = onDone;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReduced) {
      done.current();
      return;
    }

    const threads = Array.from(el.querySelectorAll(".loader .thread"));
    threads.forEach((t) => {
      const len = t.getTotalLength();
      t.style.strokeDasharray = len + " " + len;
      t.style.strokeDashoffset = len;
    });

    // React unmounts this component once introDone flips — never remove the
    // DOM node directly from inside the timeline.
    const tl = gsap.timeline({ onComplete: () => done.current() });

    tl.from(".loader .logo-top", { y: 60, opacity: 0, duration: 0.9, ease: "power4.out" })
      .from(".loader .logo-bottom", { y: 30, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=.45")
      .to(threads, { strokeDashoffset: 0, duration: 1.1, ease: "power2.inOut" }, "-=.3")
      .from(".loader .needle", { opacity: 0, x: -10, duration: 0.4 }, "<")
      .from(".loader-hint", { opacity: 0, duration: 0.6 }, "<")
      .to(el, { yPercent: -100, duration: 0.9, ease: "power4.inOut", delay: 0.35 });

    // Safety net: never get stuck on the loader (hidden tab / unusual webview)
    const safety = setTimeout(() => {
      if (document.body.contains(el)) {
        tl.kill();
        done.current();
      }
    }, 7000);

    return () => clearTimeout(safety);
  }, []);

  return (
    <div className="loader" ref={ref} aria-hidden="true">
      <div className="loader-inner">
        <div className="logo">
          <div className="logo-top">SHOGE</div>
          <div className="logo-bottom">Stitches</div>
          <svg className="logo-stitch" viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true">
            <path className="thread" d="M2,7 C40,1 70,13 110,7 C150,1 190,13 230,7 C255,4 275,9 292,7" pathLength="100"></path>
            <polygon className="needle" points="293,2.5 300,7 293,11.5"></polygon>
          </svg>
        </div>
        <p className="loader-hint">Threading the needle…</p>
      </div>
    </div>
  );
}
