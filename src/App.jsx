import { useEffect, useRef, useState, useCallback } from "react";
import { gsap, ScrollTrigger, prefersReduced, isFinePointer, initLenis, getLenis } from "./lib/motion";
import { initReveals } from "./lib/reveals";
import { BRAND_NAME } from "./lib/site";
import Loader from "./components/Loader";
import Header from "./components/Header";
import MenuOverlay from "./components/MenuOverlay";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Collections from "./components/Collections";
import Lookbook from "./components/Lookbook";
import Process from "./components/Process";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import OrderSection from "./components/OrderSection";
import Footer from "./components/Footer";
import Lightbox from "./components/Lightbox";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  const [lightboxProduct, setLightboxProduct] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [introDone, setIntroDone] = useState(prefersReduced); // hero waits for the loader
  const lastFocused = useRef(null);
  const headerRef = useRef(null);
  const rootRef = useRef(null);

  const openLightbox = useCallback((product) => {
    lastFocused.current = document.activeElement;
    setLightboxProduct(product);
  }, []);
  const closeLightbox = useCallback(() => {
    setLightboxProduct(null);
    if (lastFocused.current) lastFocused.current.focus();
  }, []);

  /* Lenis smooth scroll, header solidify, scroll reveals, document title */
  useEffect(() => {
    const lenis = initLenis();

    const headerSt = ScrollTrigger.create({
      start: "top -80",
      onUpdate: (self) => headerRef.current?.classList.toggle("is-solid", self.scroll() > 80),
      onToggle: (self) => headerRef.current?.classList.toggle("is-solid", self.scroll() > 80)
    });

    document.title = BRAND_NAME + " — Luxury Nigerian & Foreign Fashion";
    const cleanupReveals = initReveals(rootRef.current);
    window.addEventListener("load", ScrollTrigger.refresh);
    return () => {
      window.removeEventListener("load", ScrollTrigger.refresh);
      headerSt.kill();
      cleanupReveals();
      lenis?.destroy();
    };
  }, []);

  /* Custom cursor (desktop only) */
  useEffect(() => {
    if (!isFinePointer || prefersReduced) return;
    const c = document.createElement("div");
    c.className = "cursor";
    c.innerHTML = "<span>View</span>";
    document.body.appendChild(c);
    let cx = -50, cy = -50, tx = cx, ty = cy;
    const move = (e) => { tx = e.clientX; ty = e.clientY; };
    const tick = () => {
      cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18;
      c.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
    };
    const over = (e) => {
      const overImg = e.target.closest(".product-media, .look-card figure, .about-media, .hero-bg, .lightbox-media");
      c.classList.toggle("is-active", !!overImg);
    };
    window.addEventListener("pointermove", move, { passive: true });
    gsap.ticker.add(tick);
    gsap.to(c, { opacity: 1, duration: 0.4, delay: 0.5 });
    document.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseover", over);
      gsap.ticker.remove(tick);
      c.remove();
    };
  }, []);

  /* Magnetic buttons */
  useEffect(() => {
    if (!isFinePointer || prefersReduced) return;
    const els = Array.from(document.querySelectorAll(".magnetic"));
    const movers = new Map();
    els.forEach((el) => {
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        gsap.to(el, {
          x: (e.clientX - r.left - r.width / 2) * 0.3,
          y: (e.clientY - r.top - r.height / 2) * 0.35,
          duration: 0.4, ease: "power3.out"
        });
      };
      const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1,.4)" });
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      movers.set(el, [onMove, onLeave]);
    });
    return () => {
      movers.forEach(([onMove, onLeave], el) => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
      });
    };
  }, []);

  /* Lock body scroll while the menu or lightbox is open */
  useEffect(() => {
    const locked = menuOpen || !!lightboxProduct;
    document.body.style.overflow = locked ? "hidden" : "";
    const lenis = getLenis();
    if (!lenis) return;
    if (locked) lenis.stop();
    else lenis.start();
  }, [menuOpen, lightboxProduct]);

  return (
    <>
      <a className="skip-link" href="#collections">Skip to collections</a>
      {!introDone && <Loader onDone={() => setIntroDone(true)} />}
      <Header menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((v) => !v)} headerRef={headerRef} />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main id="top" ref={rootRef}>
        <Hero introDone={introDone} />
        <Marquee />
        <Collections onOpenProduct={openLightbox} />
        <Lookbook onOpenProduct={openLightbox} />
        <Process />
        <About />
        <Testimonials />
        <OrderSection />
      </main>
      <Footer />
      {lightboxProduct && <Lightbox product={lightboxProduct} onClose={closeLightbox} />}
      <WhatsAppFloat />
    </>
  );
}
