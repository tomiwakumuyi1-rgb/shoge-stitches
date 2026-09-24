export default function Logo({ hero = false, withNeedle = false }) {
  return (
    <span className={"logo" + (hero ? " logo-hero" : "")}>
      <span className="logo-top">SHOGE</span>
      <span className="logo-bottom">Stitches</span>
      <svg
        className="logo-stitch"
        viewBox={hero ? "0 0 600 16" : "0 0 120 10"}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="thread"
          d={hero
            ? "M3,8 C80,2 130,14 220,8 C310,2 380,14 470,8 C520,5 560,10 597,8"
            : "M1,5 C15,1 25,9 40,5 C55,1 65,9 80,5 C92,2 105,7 119,5"}
          pathLength="100"
        />
        {hero && <polygon className="needle" points="598,3 605,8 598,13" />}
      </svg>
    </span>
  );
}
