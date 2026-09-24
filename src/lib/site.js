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

/* PRODUCTS — { id, name, category, origin, price, image }
   origin: "nigerian" or "foreign"
   price is in Naira (number). Shown as "From ₦X,000".
   Each line below: replace image URL with your photo, edit price. */
export const PRODUCTS = [
  // ----- NIGERIAN STYLES (15) — replace image URL with your photo, edit price -----
  { id: "n01", name: "Aso Ebi Royale",           category: "Aso Ebi",          origin: "nigerian", price: 85000,  image: "https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?q=80&w=800&auto=format&fit=crop" },
  { id: "n02", name: "Agbada Oba Prime",         category: "Agbada",           origin: "nigerian", price: 145000, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop" },
  { id: "n03", name: "Ankara Flare Gown",        category: "Ankara",           origin: "nigerian", price: 62000,  image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop" },
  { id: "n04", name: "Aso Oke Bridal Set",       category: "Aso Oke",          origin: "nigerian", price: 175000, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop" },
  { id: "n05", name: "Lace Iro & Buba",          category: "Lace/Iro & Buba",  origin: "nigerian", price: 98000,  image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop" },
  { id: "n06", name: "Senator Slim Kaftan",      category: "Senator",          origin: "nigerian", price: 70000,  image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop" },
  { id: "n07", name: "Aso Ebi Velvet Grace",     category: "Aso Ebi",          origin: "nigerian", price: 92000,  image: "https://picsum.photos/seed/shoge-velvet/800/1000" },
  { id: "n08", name: "Agbada Royal Indigo",      category: "Agbada",           origin: "nigerian", price: 158000, image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800&auto=format&fit=crop" },
  { id: "n09", name: "Ankara Off-Shoulder",      category: "Ankara",           origin: "nigerian", price: 55000,  image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=800&auto=format&fit=crop" },
  { id: "n10", name: "Aso Oke Groom Two-Piece",  category: "Aso Oke",          origin: "nigerian", price: 165000, image: "https://picsum.photos/seed/shoge-asooke/800/1000" },
  { id: "n11", name: "Cord Lace Boubou",         category: "Lace/Iro & Buba",  origin: "nigerian", price: 110000, image: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?q=80&w=800&auto=format&fit=crop" },
  { id: "n12", name: "Senator Double-Breasted",  category: "Senator",          origin: "nigerian", price: 82000,  image: "https://images.unsplash.com/photo-1608748010899-18f300247112?q=80&w=800&auto=format&fit=crop" },
  { id: "n13", name: "Ankara Jumpsuit",          category: "Ankara",           origin: "nigerian", price: 58000,  image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop" },
  { id: "n14", name: "Aso Ebi Sequin Set",       category: "Aso Ebi",          origin: "nigerian", price: 128000, image: "https://picsum.photos/seed/shoge-sequin/800/1000" },
  { id: "n15", name: "Agbada Mini-Me (Kids)",    category: "Agbada",           origin: "nigerian", price: 65000,  image: "https://picsum.photos/seed/shoge-mini/800/1000" },

  // ----- FOREIGN STYLES (15) — replace image URL with your photo, edit price -----
  { id: "f01", name: "Ivory Silk Wedding Gown",  category: "Wedding Gown",     origin: "foreign",  price: 450000, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800&auto=format&fit=crop" },
  { id: "f02", name: "Corset Ball Gown",         category: "Wedding Gown",     origin: "foreign",  price: 380000, image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=800&auto=format&fit=crop" },
  { id: "f03", name: "Black Tie Evening Gown",   category: "Evening Gown",     origin: "foreign",  price: 265000, image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800&auto=format&fit=crop" },
  { id: "f04", name: "Champagne Mermaid Gown",   category: "Evening Gown",     origin: "foreign",  price: 240000, image: "https://picsum.photos/seed/shoge-champagne/800/1000" },
  { id: "f05", name: "Peak-Lapel Tailored Suit", category: "Corporate Suit",   origin: "foreign",  price: 185000, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop" },
  { id: "f06", name: "Navy Three-Piece Suit",    category: "Corporate Suit",   origin: "foreign",  price: 205000, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop" },
  { id: "f07", name: "Satin Corset Dress",       category: "Corset Dress",     origin: "foreign",  price: 145000, image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop" },
  { id: "f08", name: "Mesh Corset Gown",         category: "Corset Dress",     origin: "foreign",  price: 160000, image: "https://picsum.photos/seed/shoge-mesh/800/1000" },
  { id: "f09", name: "Linen Casual Set",         category: "Casual Wear",      origin: "foreign",  price: 78000,  image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=800&auto=format&fit=crop" },
  { id: "f10", name: "Knit Co-ord Set",          category: "Casual Wear",      origin: "foreign",  price: 68000,  image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800&auto=format&fit=crop" },
  { id: "f11", name: "Tulle Cathedral Gown",     category: "Wedding Gown",     origin: "foreign",  price: 520000, image: "https://picsum.photos/seed/shoge-tulle/800/1000" },
  { id: "f12", name: "Velvet Opera Gown",        category: "Evening Gown",     origin: "foreign",  price: 295000, image: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=800&auto=format&fit=crop" },
  { id: "f13", name: "Pinstripe Power Suit",     category: "Corporate Suit",   origin: "foreign",  price: 198000, image: "https://images.unsplash.com/photo-1603189343302-e603f7add05a?q=80&w=800&auto=format&fit=crop" },
  { id: "f14", name: "Tulle Corset Mini",        category: "Corset Dress",     origin: "foreign",  price: 125000, image: "https://picsum.photos/seed/shoge-mini-gown/800/1000" },
  { id: "f15", name: "Weekend Trench & Slip",    category: "Casual Wear",      origin: "foreign",  price: 88000,  image: "https://picsum.photos/seed/shoge-trench/800/1000" }
];
/* =========================================== */

export const naira = (n) => "₦" + Number(n).toLocaleString("en-NG");

/* Every WhatsApp link on the page is built from WHATSAPP_NUMBER —
   change the number in ONE place (EDIT HERE block above). */
export function waLink(message) {
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}
