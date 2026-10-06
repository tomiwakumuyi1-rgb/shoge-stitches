/* ===========================================
   EDIT HERE - CHANGE YOUR DETAILS BELOW
   =========================================== */
export const BRAND_NAME = "SHOGE STITCHES";
export const WHATSAPP_NUMBER = "2348035900687"; // your number, international format, no + or spaces

// Optional studio details shown in the footer / menu (change freely)
export const STUDIO = {
  instagram: "https://instagram.com", // replace with your Instagram URL
  tiktok: "https://tiktok.com",       // replace with your TikTok URL
  address: "12 Adeola Odeku Street, Victoria Island, Lagos",
  hours: "Mon – Sat · 9:00am – 7:00pm"
};

/* PRODUCTS — { id, name, category, origin, price, image, video? }
   SHOGE STITCHES is a women's atelier — every style is for females.
   All styles are Nigerian. price is in Naira (number). Shown as "From ₦X,000".
   Prices researched from 2026 Lagos atelier rates (corset lace gowns ₦60k–₦180k,
   made-to-measure ankara/kaftan from ~₦30k, premium aso-ebi & bridal sets ₦95k–₦260k).
   Photos: Pexels free licence, each verified to show the named garment.
   video: optional. Put the clip in public/videos/ and set e.g. video: "./videos/my-clip.mp4"
   — it autoplays muted + looping in the product card and detail popup. */
export const PRODUCTS = [
  // ----- NEW ARRIVALS / TRENDING (2026) -----
  { id: "n01", name: "Elegant Lilac Peplum Top & Palazzo Trouser Set",            category: "Trending", origin: "nigerian", price: 25000,  image: "./images/lilac-peplum-palazzo.jpg" },
  { id: "n02", name: "Royal Blue Corset Lace Gown with Gold Belt",               category: "Trending", origin: "nigerian", price: 115000, image: "https://images.pexels.com/photos/30872400/pexels-photo-30872400.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n03", name: "Navy Velvet Boubu Gown with Floral Embroidery",            category: "Trending", origin: "nigerian", price: 95000,  image: "https://images.pexels.com/photos/32985706/pexels-photo-32985706.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n04", name: "Burgundy Isiagu Top & Gold Wrapper with Coral Beads",      category: "Trending", origin: "nigerian", price: 85000,  image: "https://images.pexels.com/photos/38477375/pexels-photo-38477375.jpeg?auto=compress&cs=tinysrgb&w=800" },

  // ----- ASO EBI / OWAMBE PARTY -----
  { id: "n05", name: "Burgundy Cord-Lace Gown with Gele",                         category: "Aso Ebi",  origin: "nigerian", price: 95000,  image: "https://images.pexels.com/photos/38030861/pexels-photo-38030861.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n06", name: "Emerald Green Embellished Gown with Blue Gele",            category: "Aso Ebi",  origin: "nigerian", price: 105000, image: "https://images.pexels.com/photos/33420839/pexels-photo-33420839.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n07", name: "Deep Red Embroidered Lace Gown with Gele",                  category: "Aso Ebi",  origin: "nigerian", price: 98000,  image: "https://images.pexels.com/photos/33606115/pexels-photo-33606115.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n08", name: "Royal Blue Backless Mermaid Lace Gown with Gold Embroidery", category: "Aso Ebi", origin: "nigerian", price: 125000, image: "https://images.pexels.com/photos/30872403/pexels-photo-30872403.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n09", name: "Royal Blue Lace Buba & Wrapper Set with Red Gele",         category: "Aso Ebi",  origin: "nigerian", price: 88000,  image: "https://images.pexels.com/photos/30465510/pexels-photo-30465510.jpeg?auto=compress&cs=tinysrgb&w=800" },

  // ----- LACE / CORSET GOWNS -----
  { id: "n10", name: "Sky Blue Beaded Corset Lace Gown",                          category: "Lace",     origin: "nigerian", price: 120000, image: "https://images.pexels.com/photos/32873419/pexels-photo-32873419.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n11", name: "Ice Blue Mermaid Lace Gown with Ruffle Shoulder",           category: "Lace",     origin: "nigerian", price: 110000, image: "https://images.pexels.com/photos/30695815/pexels-photo-30695815.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n12", name: "Wine Purple Mermaid Lace Gown with Sheer Lace Panels",     category: "Lace",     origin: "nigerian", price: 118000, image: "https://images.pexels.com/photos/36242799/pexels-photo-36242799.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n13", name: "Red Sequin Bodycon Lace Dress",                             category: "Lace",     origin: "nigerian", price: 85000,  image: "https://images.pexels.com/photos/31620451/pexels-photo-31620451.jpeg?auto=compress&cs=tinysrgb&w=800" },

  // ----- ANKARA / READY-TO-WEAR -----
  { id: "n14", name: "Blue Ankara Peplum Top & Skirt Set with Statement Sleeves", category: "Ankara",  origin: "nigerian", price: 42000,  image: "https://images.pexels.com/photos/37550053/pexels-photo-37550053.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n15", name: "Earth-Tone Ankara Maxi Dress with Waist Tie",               category: "Ankara",   origin: "nigerian", price: 45000,  image: "https://images.pexels.com/photos/35549951/pexels-photo-35549951.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n16", name: "Off-Shoulder Ankara Flutter Gown",                          category: "Ankara",   origin: "nigerian", price: 48000,  image: "https://images.pexels.com/photos/31871810/pexels-photo-31871810.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n17", name: "Rust & Gold Ankara Kaftan Dress",                           category: "Ankara",   origin: "nigerian", price: 40000,  image: "https://images.pexels.com/photos/32730564/pexels-photo-32730564.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n18", name: "Aso Ebi Squad — Custom Group Orders (3+ Outfits)",          category: "Aso Ebi",  origin: "nigerian", price: 40000,  image: "https://images.pexels.com/photos/13038776/pexels-photo-13038776.jpeg?auto=compress&cs=tinysrgb&w=800" },

  // ----- GEORGE & BOUBOU -----
  { id: "n19", name: "Emerald Green George Wrapper Two-Piece with Gold Accents",  category: "Boubou",   origin: "nigerian", price: 135000, image: "https://images.pexels.com/photos/35168806/pexels-photo-35168806.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n20", name: "African Print Boubu Kaftan Gown",                          category: "Boubou",   origin: "nigerian", price: 72000,  image: "https://images.pexels.com/photos/33363210/pexels-photo-33363210.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n21", name: "Classic Orange Boubu with Statement Sleeves",               category: "Boubou",   origin: "nigerian", price: 72000,  image: "https://images.pexels.com/photos/34363124/pexels-photo-34363124.jpeg?auto=compress&cs=tinysrgb&w=800" },

  // ----- BRIDAL / TRADITIONAL WEDDING -----
  { id: "n22", name: "Bridal White Corset Lace Gown with Gele",                   category: "Bridal",   origin: "nigerian", price: 185000, image: "https://images.pexels.com/photos/34618263/pexels-photo-34618263.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n23", name: "Traditional Bride Aso Oke Iro & Buba with Gele",            category: "Bridal",   origin: "nigerian", price: 260000, image: "https://images.pexels.com/photos/30297186/pexels-photo-30297186.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n24", name: "White Bridal Lace Gown with Full Veil",                     category: "Bridal",   origin: "nigerian", price: 210000, image: "https://images.pexels.com/photos/29723869/pexels-photo-29723869.jpeg?auto=compress&cs=tinysrgb&w=800" }
];
/* =========================================== */

export const naira = (n) => "₦" + Number(n).toLocaleString("en-NG");

/* Every WhatsApp link on the page is built from WHATSAPP_NUMBER —
   change the number in ONE place (EDIT HERE block above). */
export function waLink(message) {
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}
