import { STUDIO, BRAND_NAME, waLink } from "../lib/site";
import Logo from "./Logo";

/* Footer with studio details and socials */
export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-grid">
        <div className="footer-col">
          <Logo />
          <p style={{ marginTop: "1.2rem", color: "var(--ivory-60)", fontSize: ".9rem", maxWidth: "32ch" }}>
            Bespoke Nigerian &amp; foreign outfits, cut for one body at a time.
          </p>
        </div>
        <div className="footer-col">
          <h4>Follow</h4>
          <ul>
            <li><a className="link-line" href={STUDIO.instagram} target="_blank" rel="noopener">Instagram</a></li>
            <li><a className="link-line" href={waLink("Hello " + BRAND_NAME + ", I'd like to make an enquiry.")} target="_blank" rel="noopener">WhatsApp</a></li>
            <li><a className="link-line" href={STUDIO.tiktok} target="_blank" rel="noopener">TikTok</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Studio</h4>
          <ul>
            <li>{STUDIO.address}</li>
            <li>{STUDIO.hours}</li>
            <li>Sunday · Closed</li>
          </ul>
        </div>
      </div>
      <div className="footer-note">
        <span>© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</span>
        <span>Stitched to fit. Made to stand out.</span>
      </div>
    </footer>
  );
}
