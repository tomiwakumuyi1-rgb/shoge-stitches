import { gsap, prefersReduced, ScrollTrigger } from "./motion";

/* Generic scroll-driven effects (split headings, image reveals,
   parallax, counters). Returns a cleanup function. */
export function initReveals(root = document) {
  const $$ = (s, c = root) => Array.from(c.querySelectorAll(s));
  const cleanups = [];

  // a) Line-by-line heading reveal
  $$("[data-split]").forEach((h) => {
    const tween = gsap.to($$(".line > span", h), {
      y: "0%",
      duration: prefersReduced ? 0 : 1,
      stagger: 0.12,
      ease: "power4.out",
      scrollTrigger: { trigger: h, start: "top 85%", once: true }
    });
    cleanups.push(() => {
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
      tween.kill();
    });
  });

  // b) Clip-path image reveal
  $$(".img-reveal").forEach((el) => {
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => el.classList.add("is-revealed")
    });
    cleanups.push(() => st.kill());
  });

  // c) Subtle parallax on tagged media
  if (!prefersReduced) {
    $$("[data-parallax]").forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0.15;
      const tween = gsap.fromTo(el, { yPercent: -speed * 50 }, {
        yPercent: speed * 50,
        ease: "none",
        scrollTrigger: {
          trigger: el.closest("section, figure"),
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
      cleanups.push(() => {
        if (tween.scrollTrigger) tween.scrollTrigger.kill();
        tween.kill();
      });
    });
  }

  // d) Process numbers counting in
  $$(".process-num").forEach((el) => {
    const target = parseInt(el.dataset.count, 10);
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.4,
          ease: "power2.out",
          onUpdate: () => { el.textContent = "0" + Math.round(obj.v); }
        });
      }
    });
    cleanups.push(() => st.kill());
  });

  // e) About stats counting
  $$("[data-count-num]").forEach((el) => {
    const target = parseInt(el.dataset.countNum, 10);
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () => {
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => { el.textContent = Math.round(obj.v) + (target >= 900 ? "+" : ""); }
        });
      }
    });
    cleanups.push(() => st.kill());
  });

  return () => cleanups.forEach((fn) => fn());
}
