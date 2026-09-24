import { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    quote: "The agbada fit like it was grown on him. Guests asked who made it before the first dance even started.",
    name: "Tunde A.",
    role: "Groom, Lagos"
  },
  {
    quote: "I sent a Pinterest photo and got something better. The corset gown was the highlight of my whole wedding.",
    name: "Amara O.",
    role: "Bride, Abuja"
  },
  {
    quote: "Five suits in one week for our team — every measurement perfect, delivered a day early. Rare professionalism.",
    name: "David E.",
    role: "Corporate Client, Port Harcourt"
  }
];

/* Auto-advancing testimonial slider with dots */
export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const timer = useRef(null);

  const restartAuto = () => {
    clearInterval(timer.current);
    timer.current = setInterval(() => setIdx((v) => (v + 1) % SLIDES.length), 6000);
  };

  useEffect(() => {
    restartAuto();
    return () => clearInterval(timer.current);
  }, []);

  const go = (i) => {
    setIdx((i + SLIDES.length) % SLIDES.length);
    restartAuto();
  };

  return (
    <section className="testimonials section-pad" id="testimonials">
      <div className="sec-head sec-head--center">
        <span className="eyebrow">Kind Words</span>
        <h2 className="display h-reveal" data-split>
          <span className="line"><span>Clients who</span></span>
          <span className="line"><span>stood out.</span></span>
        </h2>
      </div>
      <div className="testi-wrap">
        <div className="testi-slides" aria-live="polite">
          {SLIDES.map((s, n) => (
            <figure className={"testi-slide" + (n === idx ? " is-active" : "")} key={s.name}>
              <blockquote>{s.quote}</blockquote>
              <figcaption><b>{s.name}</b> — {s.role}</figcaption>
            </figure>
          ))}
        </div>
        <div className="testi-nav" role="tablist" aria-label="Testimonials">
          {SLIDES.map((s, n) => (
            <button
              key={s.name}
              className={"testi-dot" + (n === idx ? " is-active" : "")}
              role="tab"
              aria-label={"Testimonial " + (n + 1)}
              aria-selected={n === idx}
              onClick={() => go(n)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
