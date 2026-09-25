import { useMemo, useState } from "react";
import { PRODUCTS, naira, BRAND_NAME } from "../lib/site";
import { useVideoAutoplay } from "../lib/useVideoAutoplay";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "nigerian", label: "Nigerian Styles" },
  { key: "foreign", label: "Foreign Styles" }
];

function ProductMedia({ product }) {
  const videoRef = useVideoAutoplay();
  if (product.video) {
    return (
      <video
        ref={videoRef}
        src={product.video}
        poster={product.image}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={product.name + " — video by " + BRAND_NAME}
      />
    );
  }
  return <img loading="lazy" src={product.image} alt={product.name + " — " + product.category + " by " + BRAND_NAME} />;
}

function ProductCard({ product, index, onOpen }) {
  const isNg = product.origin === "nigerian";
  return (
    <li
      className="product-card is-in"
      data-origin={product.origin}
      style={{ transitionDelay: (index % 8) * 60 + "ms" }}
    >
      <button
        className="product-card-btn"
        aria-haspopup="dialog"
        aria-label={"View details for " + product.name}
        onClick={() => onOpen(product)}
      >
        <figure className="product-media">
          <span className={"origin-tag" + (isNg ? " ng" : "")}>{isNg ? "Nigerian" : "Foreign"}</span>
          <ProductMedia product={product} />
        </figure>
        <div className="product-info">
          <div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-cat">{product.category}</p>
          </div>
          <p className="product-price"><span className="cur">From</span> {naira(product.price)}</p>
        </div>
      </button>
    </li>
  );
}

/* Filterable product grid */
export default function Collections({ onOpenProduct }) {
  const [filter, setFilter] = useState("all");
  const visible = useMemo(
    () => PRODUCTS.filter((p) => filter === "all" || p.origin === filter),
    [filter]
  );

  return (
    <section className="collections section-pad" id="collections">
      <div className="sec-head sec-head--center">
        <span className="eyebrow">The Atelier</span>
        <h2 className="display h-reveal" data-split>
          <span className="line"><span>Nigerian heritage,</span></span>
          <span className="line"><span>global couture.</span></span>
        </h2>
      </div>

      <div className="filters" role="group" aria-label="Filter collections">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={"filter-btn" + (filter === f.key ? " is-active" : "")}
            data-filter={f.key}
            aria-pressed={filter === f.key}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="product-grid" id="productGrid">
        {visible.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} onOpen={onOpenProduct} />
        ))}
      </ul>
    </section>
  );
}
