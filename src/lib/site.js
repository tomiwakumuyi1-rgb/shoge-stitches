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
   All styles are Nigerian. price is in Naira (number). Shown as "From ₦X,000".
   Prices researched from 2026 Lagos atelier rates (agbada workmanship ₦25k–₦80k+,
   made-to-measure from ~₦50k, premium aso-ebi sets ₦35k–₦360k).
   Photos: Pexels free licence, each verified to show the named garment.
   video: optional. Put the clip in public/videos/ and set e.g. video: "./videos/my-clip.mp4"
   — it autoplays muted + looping in the product card and detail popup. */
export const PRODUCTS = [
  // ----- ASO EBI / PARTY -----
  { id: "n01", name: "Elegant Lilac Peplum Top & Palazzo Trouser Set", category: "Aso Ebi",    origin: "nigerian", price: 25000,  image: "./images/lilac-peplum-palazzo.jpg" },
  { id: "n02", name: "Burgundy Cord-Lace Gown with Gele",             category: "Aso Ebi",    origin: "nigerian", price: 95000,  image: "https://images.pexels.com/photos/38030861/pexels-photo-38030861.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n03", name: "Royal Blue Lace Set with Gold Embroidery",      category: "Aso Ebi",    origin: "nigerian", price: 105000, image: "https://images.pexels.com/photos/30872401/pexels-photo-30872401.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n04", name: "Champagne Lace Buba & Wrapper Set",             category: "Lace",       origin: "nigerian", price: 98000,  image: "https://images.pexels.com/photos/38030864/pexels-photo-38030864.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n05", name: "Sequin-Embellished Party Gown with Gele",       category: "Aso Ebi",    origin: "nigerian", price: 125000, image: "https://images.pexels.com/photos/32069089/pexels-photo-32069089.jpeg?auto=compress&cs=tinysrgb&w=800" },

  // ----- AGBADA (MEN) -----
  { id: "n06", name: "Olive Green Luxury Embroidered Native Two-Piece Set", category: "Agbada", origin: "nigerian", price: 85000,  image: "./images/olive-green-native-two-piece.jpg" },
  { id: "n07", name: "Royal Blue Embroidered Agbada with Beads",       category: "Agbada",     origin: "nigerian", price: 95000,  image: "https://images.pexels.com/photos/37320670/pexels-photo-37320670.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n08", name: "Classic White Agbada (3-Piece)",                 category: "Agbada",     origin: "nigerian", price: 88000,  image: "https://images.pexels.com/photos/35405978/pexels-photo-35405978.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n09", name: "Black Agbada with Gold Embroidery",              category: "Agbada",     origin: "nigerian", price: 110000, image: "https://images.pexels.com/photos/38141341/pexels-photo-38141341.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n10", name: "Groom's Teal Embroidered Agbada",                category: "Agbada",     origin: "nigerian", price: 120000, image: "https://images.pexels.com/photos/38140938/pexels-photo-38140938.jpeg?auto=compress&cs=tinysrgb&w=800" },

  // ----- SENATOR / KAFTAN (MEN) -----
  { id: "n11", name: "Slim-Fit Senator Kaftan",                        category: "Senator",    origin: "nigerian", price: 55000,  image: "https://images.pexels.com/photos/38188493/pexels-photo-38188493.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n12", name: "Kaftan with Traditional Cap Set",                category: "Senator",    origin: "nigerian", price: 62000,  image: "https://images.pexels.com/photos/37766348/pexels-photo-37766348.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n13", name: "Embroidered Native Set with Fila Cap",           category: "Senator",    origin: "nigerian", price: 68000,  image: "https://images.pexels.com/photos/35277319/pexels-photo-35277319.jpeg?auto=compress&cs=tinysrgb&w=800" },

  // ----- ANKARA -----
  { id: "n14", name: "Ankara Flare Gown",                              category: "Ankara",     origin: "nigerian", price: 45000,  image: "https://images.pexels.com/photos/37106118/pexels-photo-37106118.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n15", name: "Ankara Off-Shoulder Dress",                      category: "Ankara",     origin: "nigerian", price: 40000,  image: "https://images.pexels.com/photos/39394052/pexels-photo-39394052.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n16", name: "Ankara Dress with Matching Headwrap",            category: "Ankara",     origin: "nigerian", price: 48000,  image: "https://images.pexels.com/photos/38171942/pexels-photo-38171942.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n17", name: "Pink Ankara Two-Piece Set",                      category: "Ankara",     origin: "nigerian", price: 52000,  image: "https://images.pexels.com/photos/33939066/pexels-photo-33939066.jpeg?auto=compress&cs=tinysrgb&w=800" },

  // ----- ASO OKE & BRIDAL -----
  { id: "n18", name: "Aso Oke Iro & Buba with Gele",                   category: "Aso Oke",    origin: "nigerian", price: 145000, image: "https://images.pexels.com/photos/31848944/pexels-photo-31848944.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n19", name: "Bridal Lace Gown & Gele Set",                    category: "Aso Oke",    origin: "nigerian", price: 185000, image: "https://images.pexels.com/photos/37954666/pexels-photo-37954666.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: "n20", name: "Couple's Matching Traditional Wedding Set",      category: "Aso Oke",    origin: "nigerian", price: 260000, image: "https://images.pexels.com/photos/38140941/pexels-photo-38140941.jpeg?auto=compress&cs=tinysrgb&w=800" },

  // ----- KIDS -----
  { id: "n21", name: "Agbada Mini-Me with Hausa Cap (Kids)",          category: "Agbada",     origin: "nigerian", price: 40000,  image: "https://images.pexels.com/photos/28375909/pexels-photo-28375909.jpeg?auto=compress&cs=tinysrgb&w=800" }
];
/* =========================================== */

export const naira = (n) => "₦" + Number(n).toLocaleString("en-NG");

/* Every WhatsApp link on the page is built from WHATSAPP_NUMBER —
   change the number in ONE place (EDIT HERE block above). */
export function waLink(message) {
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}
