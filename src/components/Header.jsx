export default function Header({ menuOpen, onToggleMenu, headerRef }) {
  return (
    <header className="site-header" id="siteHeader" ref={headerRef}>
      <a href="#top" className="logo link-home" aria-label="SHOGE STITCHES — home">
        <span className="logo-top">SHOGE</span>
        <span className="logo-bottom">Stitches</span>
        <svg className="logo-stitch" viewBox="0 0 120 10" preserveAspectRatio="none" aria-hidden="true">
          <path className="thread" d="M1,5 C15,1 25,9 40,5 C55,1 65,9 80,5 C92,2 105,7 119,5" pathLength="100" />
        </svg>
      </a>
      <button
        className="menu-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="menuOverlay"
        onClick={onToggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
}
