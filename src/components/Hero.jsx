import { useEffect, useRef } from "react";
import { gsap, prefersReduced } from "../lib/motion";

/* Hero with loader-choreographed entrance */
export default function Hero({ introDone }) {
  const logoRef = useRef(null);

  useEffect(() => {
    const thread = logoRef.current?.querySelector(".thread");
    if (!thread) return;
    const len = thread.getTotalLength();
    gsap.set(thread, { strokeDasharray: len, strokeDashoffset: introDone && prefersReduced ? 0 : len });
  }, [introDone]);

  /* Runs after the loader lifts — mirrors the original entrance */
  useEffect(() => {
    if (!introDone) return;

    if (prefersReduced) {
      gsap.set("#heroLogo .logo-top, #heroLogo .logo-bottom, .hero-tagline, .hero-cta, .hero-scroll", { clearProps: "all" });
      return;
    }

    const thread = logoRef.current?.querySelector(".thread");
    const tl = gsap.timeline();
    tl.from("#heroLogo .logo-top", { y: 80, opacity: 0, duration: 1, ease: "power4.out" })
      .from("#heroLogo .logo-bottom", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=.7")
      .to(thread, { strokeDashoffset: 0, duration: 1.1, ease: "power2.inOut" }, "-=.5")
      .from(".hero-tagline", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=.6")
      .from(".hero-cta", { y: 24, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=.55")
      .from(".hero-scroll", { opacity: 0, duration: 0.6 }, "-=.3");
    return () => tl.kill();
  }, [introDone]);

  return (
    <section className="hero" aria-label="Welcome">
      <div className="hero-bg" data-parallax="0.25">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1800&auto=format&fit=crop"
          alt="Elegant model in a flowing designer outfit against a warm studio backdrop"
          fetchpriority="high"
        />
      </div>
      <div className="hero-inner">
        <div className="logo logo-hero" id="heroLogo" ref={logoRef}>
          <div className="logo-top">SHOGE</div>
          <div className="logo-bottom">Stitches</div>
          <svg className="logo-stitch" viewBox="0 0 600 16" preserveAspectRatio="none" aria-hidden="true">
            <path className="thread" d="M3,8 C80,2 130,14 220,8 C310,2 380,14 470,8 C520,5 560,10 597,8" pathLength="100" />
            <polygon className="needle" points="598,3 605,8 598,13" />
          </svg>
        </div>
        <p className="hero-tagline">Stitched to fit. <em>Made to stand out.</em></p>
        <div className="hero-cta">
          <a href="#order" className="btn btn-gold magnetic">Book a Fitting</a>
        </div>
      </div>
      <p className="hero-scroll" aria-hidden="true">Scroll</p>
    </section>
  );
}
