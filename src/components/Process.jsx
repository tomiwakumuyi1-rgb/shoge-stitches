const STEPS = [
  {
    title: "Consultation",
    body: "We talk fabric, silhouette and occasion — in person at the studio or over a call — and sketch the direction together."
  },
  {
    title: "Measurements",
    body: "Over twenty precise measurements are taken, so every seam is cut for your body — never a standard size."
  },
  {
    title: "Fitting",
    body: "Two to three fittings refine the drape and shape until the outfit sits exactly the way you imagined it."
  },
  {
    title: "Delivery",
    body: "Finished, pressed and delivered — anywhere in Nigeria and beyond — in time for your event, guaranteed."
  }
];

/* How it works — numbered process steps with counting numbers */
export default function Process() {
  return (
    <section className="process section-pad" id="process">
      <div className="sec-head sec-head--onlight">
        <span className="eyebrow">How It Works</span>
        <h2 className="display h-reveal" data-split>
          <span className="line"><span>From first measure</span></span>
          <span className="line"><span>to final stitch.</span></span>
        </h2>
      </div>
      <ol className="process-list">
        {STEPS.map((step, i) => (
          <li className="process-step" key={step.title}>
            <span className="process-num" data-count={String(i + 1).padStart(2, "0")}>00</span>
            <div><h3>{step.title}</h3></div>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
