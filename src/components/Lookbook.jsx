import { useEffect, useRef } from "react";
import { gsap, prefersReduced } from "../lib/motion";
import { PRODUCTS, BRAND_NAME } from "../lib/site";

/* Horizontal pinned lookbook (desktop) / stacked cards (mobile) */
export default function Lookbook({ onOpenProduct }) {
  const trackRef = useRef(null);
  const pinRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const pin = pinRef.current;
    if (!track || !pin || prefersReduced) return;
    if (!window.matchMedia("(min-width: 900px)").matches) return;

    const getDist = () => track.scrollWidth - pin.clientWidth;
    const tween = gsap.to(track, {
      x: () => -getDist(),
      ease: "none",
      scrollTrigger: {
        trigger: "#lookbook",
        start: "top top",
        end: () => "+=" + getDist(),
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true
      }
    });
    return () => {
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
      tween.kill();
      gsap.set(track, { x: 0 });
    };
  }, []);

  const picks = [PRODUCTS[1], PRODUCTS[15], PRODUCTS[3], PRODUCTS[6], PRODUCTS[12], PRODUCTS[11]];
  const originLabel = (o) => (o === "nigerian" ? "Nigerian" : "Foreign");

  return (
    <section className="lookbook" id="lookbook" aria-label="Lookbook">
      <div className="lookbook-pin" ref={pinRef}>
        <div className="lookbook-head">
          <span className="eyebrow">Lookbook — Volume I</span>
          <h2 className="display h-reveal" data-split>
            <span className="line"><span>Six pieces,</span></span>
            <span className="line"><span>one signature.</span></span>
          </h2>
        </div>
        <div className="lookbook-track" ref={trackRef}>
          {picks.map((p) => (
            <article className="look-card" key={p.id}>
              <figure onClick={() => onOpenProduct(p)}>
                <img loading="lazy" src={p.image} alt={p.name + " — " + p.category + ", featured look by " + BRAND_NAME} />
              </figure>
              <div className="look-cap">
                <h3>{p.name}</h3>
                <span>{originLabel(p.origin)} · {p.category}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
