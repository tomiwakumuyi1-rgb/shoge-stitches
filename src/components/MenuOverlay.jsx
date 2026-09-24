import { useEffect, useRef } from "react";
import { gsap, prefersReduced, getLenis } from "../lib/motion";
import { STUDIO, waLink } from "../lib/site";

const LINKS = [
  { href: "#collections", label: "Collections" },
  { href: "#lookbook", label: "Lookbook" },
  { href: "#process", label: "How It Works" },
  { href: "#about", label: "The Designer" },
  { href: "#order", label: "Custom Order" }
];

/* Full-screen navigation overlay */
export default function MenuOverlay({ open, onClose }) {
  const ref = useRef(null);
  const mounted = useRef(open);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (open) {
      if (!mounted.current) {
        // first open: place just below the closed state
        el.style.visibility = "visible";
      }
      mounted.current = true;
      gsap.to(el, { clipPath: "inset(0% 0 0% 0)", duration: prefersReduced ? 0 : 0.8, ease: "power4.inOut" });
      gsap.fromTo(
        el.querySelectorAll("nav a"),
        { y: "110%" },
        { y: "0%", duration: 0.8, stagger: 0.06, delay: 0.25, ease: "power3.out" }
      );
    } else if (mounted.current) {
      mounted.current = false;
      gsap.to(el, {
        clipPath: "inset(0 0 100% 0)",
        duration: prefersReduced ? 0 : 0.7,
        ease: "power4.inOut",
        onComplete: () => { el.style.visibility = "hidden"; }
      });
    }
  }, [open]);

  /* Lenis handles page scroll, so plain anchor jumps won't work —
     route through lenis.scrollTo with a small offset. */
  const handleNav = (e, href) => {
    e.preventDefault();
    onClose();
    const lenis = getLenis();
    const target = document.querySelector(href);
    if (!target) return;
    if (lenis) lenis.scrollTo(target, { offset: -10 });
    else target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={"menu-overlay" + (open ? " is-open" : "")}
      id="menuOverlay"
      ref={ref}
      aria-hidden={!open}
    >
      <nav aria-label="Main menu">
        <ul>
          {LINKS.map((l, i) => (
            <li key={l.href}>
              <a href={l.href} data-menu-link onClick={(e) => handleNav(e, l.href)}>
                <span className="idx">0{i + 1}</span>{l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="menu-meta">
        <a href={waLink("Hello SHOGE STITCHES, I'd like to make an enquiry.")} target="_blank" rel="noopener">WhatsApp</a>
        <a href={STUDIO.instagram} target="_blank" rel="noopener">Instagram</a>
        <a href={STUDIO.tiktok} target="_blank" rel="noopener">TikTok</a>
      </div>
    </div>
  );
}
