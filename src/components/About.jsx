import { BRAND_NAME } from "../lib/site";

const FACTS = [
  { value: 12, label: "Years of craft" },
  { value: 900, label: "Bespoke clients" },
  { value: 36, label: "States styled" }
];

/* About the designer, with counting stats */
export default function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="about-grid">
        <div className="about-media img-reveal" data-parallax="0.12">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop"
            alt={"Portrait of the designer at work in the " + BRAND_NAME + " studio"}
          />
        </div>
        <div className="about-copy">
          <span className="eyebrow">About the Designer</span>
          <h2 className="display h-reveal" data-split>
            <span className="line"><span>Couture with</span></span>
            <span className="line"><span>a Nigerian soul.</span></span>
          </h2>
          <p>I learned to sew at my grandmother's table in Lagos, where every celebration was measured in fabric. Today, SHOGE STITCHES carries that heritage forward — pairing hand-picked aso oke, lace and ankara with the precision of European couture.</p>
          <p>Whether it is an agbada for the groom's family or a corseted gown for the reception, one rule never changes: it must fit you, and only you.</p>
          <span className="about-sign">Shoge</span>
          <div className="about-facts">
            {FACTS.map((f) => (
              <div key={f.label}>
                <strong data-count-num={f.value}>0</strong>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
