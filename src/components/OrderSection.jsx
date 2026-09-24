import { useState } from "react";
import { BRAND_NAME, waLink } from "../lib/site";

const OUTFIT_TYPES = [
  "Aso Ebi", "Agbada", "Ankara", "Aso Oke", "Lace / Iro & Buba", "Senator",
  "Wedding Gown", "Evening Gown", "Corporate Suit", "Corset Dress", "Casual Wear", "Not sure yet"
];

const initial = {
  name: "", phone: "", type: "", date: "", bust: "", waist: "", hips: "", height: "", notes: ""
};

/* Custom order form → opens WhatsApp with details pre-filled */
export default function OrderSection() {
  const [form, setForm] = useState(initial);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = (k) => (form[k] || "").trim();
    const lines = [
      "Hello " + BRAND_NAME + ", I'd like to place a custom order.",
      "",
      "*Name:* " + v("name"),
      "*Phone:* " + v("phone"),
      "*Outfit type:* " + v("type"),
      v("date") ? "*Event date:* " + v("date") : "",
      (v("bust") || v("waist") || v("hips"))
        ? "*Measurements (inches):* Bust " + (v("bust") || "–") + " / Waist " + (v("waist") || "–") + " / Hips " + (v("hips") || "–")
        : "",
      v("height") ? "*Height:* " + v("height") : "",
      v("notes") ? "*Notes:* " + v("notes") : ""
    ].filter((l) => l !== "");
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
  };

  return (
    <section className="order section-pad" id="order">
      <div className="order-grid">
        <div className="order-copy">
          <span className="eyebrow">Custom Orders</span>
          <h2 className="display h-reveal" data-split>
            <span className="line"><span>Your outfit,</span></span>
            <span className="line"><span>your measurements.</span></span>
          </h2>
          <p>Fill in your details and we will continue the conversation on WhatsApp — fabric suggestions, pricing and your fitting date.</p>
          <hr className="gold-rule" />
          <p>Prefer to talk now? <a className="link-line" href={waLink("Hello " + BRAND_NAME + ", I'd like to make an enquiry.")} target="_blank" rel="noopener">Message the studio →</a></p>
        </div>
        <form className="order-form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="fName">Full name</label>
            <input id="fName" name="name" type="text" required autoComplete="name" placeholder="Adaeze Okafor" value={form.name} onChange={set("name")} />
          </div>
          <div className="field">
            <label htmlFor="fPhone">Phone</label>
            <input id="fPhone" name="phone" type="tel" required autoComplete="tel" placeholder="0803 000 0000" value={form.phone} onChange={set("phone")} />
          </div>
          <div className="field field--full">
            <label htmlFor="fType">Outfit type</label>
            <select id="fType" name="type" required value={form.type} onChange={set("type")}>
              <option value="" disabled>Choose a style…</option>
              {OUTFIT_TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="fDate">Event date</label>
            <input id="fDate" name="date" type="date" value={form.date} onChange={set("date")} />
          </div>
          <div className="field">
            <label htmlFor="fBust">Bust (inches)</label>
            <input id="fBust" name="bust" type="number" inputMode="decimal" placeholder="34" value={form.bust} onChange={set("bust")} />
          </div>
          <div className="field">
            <label htmlFor="fWaist">Waist (inches)</label>
            <input id="fWaist" name="waist" type="number" inputMode="decimal" placeholder="28" value={form.waist} onChange={set("waist")} />
          </div>
          <div className="field">
            <label htmlFor="fHips">Hips (inches)</label>
            <input id="fHips" name="hips" type="number" inputMode="decimal" placeholder="38" value={form.hips} onChange={set("hips")} />
          </div>
          <div className="field">
            <label htmlFor="fHeight">Height (ft/in or cm)</label>
            <input id="fHeight" name="height" type="text" placeholder={'5\'7" / 170cm'} value={form.height} onChange={set("height")} />
          </div>
          <div className="field field--full">
            <label htmlFor="fNotes">Notes</label>
            <textarea id="fNotes" name="notes" placeholder="Fabric ideas, colours, inspiration links…" value={form.notes} onChange={set("notes")}></textarea>
          </div>
          <p className="order-note">Submitting opens WhatsApp with your details pre-filled — nothing is sent without you.</p>
          <button type="submit" className="btn btn-gold magnetic field--full">Send via WhatsApp</button>
        </form>
      </div>
    </section>
  );
}
