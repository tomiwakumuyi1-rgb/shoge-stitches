import { useEffect, useRef } from "react";
import { gsap, prefersReduced } from "../lib/motion";

const ITEMS = ["Bridal", "Aso Ebi", "Agbada", "Corporate", "Evening Gowns", "Custom Orders"];

/* Seamless infinite marquee, speed reacts to scroll direction */
export default function Marquee() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || prefersReduced) return;
    const chunk = track.firstElementChild;
    const clones = [];
    for (let i = 0; i < 3; i++) {
      const c = chunk.cloneNode(true);
      track.appendChild(c);
      clones.push(c);
    }
    const w = chunk.getBoundingClientRect().width;
    const tween = gsap.to(track, { x: -w, duration: 18, ease: "none", repeat: -1 });
    return () => {
      tween.kill();
      clones.forEach((c) => c.remove());
      gsap.set(track, { x: 0 });
    };
  }, []);

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" ref={trackRef}>
        <div className="marquee-chunk">
          {ITEMS.map((item) => (
            <span key={item}>
              <span>{item}</span>
              <span className="dot">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
