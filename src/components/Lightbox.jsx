import { useEffect, useRef } from "react";
import { naira, BRAND_NAME, waLink } from "../lib/site";

/* Accessible product detail dialog with focus trap */
export default function Lightbox({ product, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const panel = panelRef.current;
        if (!panel) return;
        const focusables = Array.from(panel.querySelectorAll("a[href], button")).filter(
          (el) => el.offsetParent !== null
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
        else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const p = product;
  const isNg = p.origin === "nigerian";

  return (
    <div className="lightbox is-open" role="dialog" aria-modal="true" aria-labelledby="lbTitle">
      <div className="lightbox-backdrop" onClick={onClose}></div>
      <div className="lightbox-panel" ref={panelRef}>
        <button className="lightbox-close" ref={closeRef} onClick={onClose} aria-label="Close details">✕</button>
        <div className="lightbox-media">
          <img src={p.image} alt={p.name + " — " + p.category + " by " + BRAND_NAME} />
        </div>
        <div className="lightbox-body">
          <p className="eyebrow">{isNg ? "Nigerian Styles" : "Foreign Styles"}</p>
          <h3 id="lbTitle">{p.name}</h3>
          <p className="lightbox-desc">
            A bespoke {p.category.toLowerCase()} piece, cut to your exact measurements{" "}
            {isNg ? "with hand-finished traditional detailing." : "with couture-grade construction."}
          </p>
          <dl className="lightbox-rows">
            <div className="lightbox-row"><dt>Category</dt><dd>{p.category}</dd></div>
            <div className="lightbox-row"><dt>Origin</dt><dd>{isNg ? "Nigerian" : "Foreign"}</dd></div>
            <div className="lightbox-row"><dt>Price</dt><dd><span className="cur">From</span> {naira(p.price)}</dd></div>
            <div className="lightbox-row"><dt>Lead time</dt><dd>2 – 4 weeks</dd></div>
          </dl>
          <div className="lightbox-order">
            <a
              className="btn btn-gold"
              href={waLink("Hello " + BRAND_NAME + ", I'm interested in " + p.name + ".")}
              target="_blank"
              rel="noopener"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
