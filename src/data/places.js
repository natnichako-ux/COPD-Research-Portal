// ============================================================
// PLACES — สถานที่แนะนำ
// ============================================================
// Each object is one place card shown on the Home and Explore pages.
// To add a place: copy one object below, paste it, fill in the fields.
//
// Fields:
//   id        — unique string, no spaces (e.g. "wat-sila")
//   nameTh    — name in Thai
//   nameEn    — name in English
//   category  — one of: "temple" | "museum" | "park" | "gallery" | "market"
//   image     — URL or local path (e.g. "/images/wat-sila.jpg")
//   description — 1–2 sentence summary shown on the card
//   featured  — true = show on the Home page hero grid (keep to ~4 items)
// ============================================================

export const places = [
  {
    id: "place-1",
    nameTh: "ชื่อสถานที่ 1",
    nameEn: "Place Name 1",
    category: "temple",
    image: "https://placehold.co/600x400/6D28D9/ffffff?text=Place+1",
    description: "Placeholder description for this place. Replace with real content.",
    featured: true,
  },
  {
    id: "place-2",
    nameTh: "ชื่อสถานที่ 2",
    nameEn: "Place Name 2",
    category: "museum",
    image: "https://placehold.co/600x400/5B21B6/ffffff?text=Place+2",
    description: "Placeholder description for this place. Replace with real content.",
    featured: true,
  },
  {
    id: "place-3",
    nameTh: "ชื่อสถานที่ 3",
    nameEn: "Place Name 3",
    category: "park",
    image: "https://placehold.co/600x400/7C3AED/ffffff?text=Place+3",
    description: "Placeholder description for this place. Replace with real content.",
    featured: true,
  },
  {
    id: "place-4",
    nameTh: "ชื่อสถานที่ 4",
    nameEn: "Place Name 4",
    category: "gallery",
    image: "https://placehold.co/600x400/4C1D95/ffffff?text=Place+4",
    description: "Placeholder description for this place. Replace with real content.",
    featured: true,
  },
  {
    id: "place-5",
    nameTh: "ชื่อสถานที่ 5",
    nameEn: "Place Name 5",
    category: "temple",
    image: "https://placehold.co/600x400/6D28D9/ffffff?text=Place+5",
    description: "Placeholder description for this place. Replace with real content.",
    featured: false,
  },
  {
    id: "place-6",
    nameTh: "ชื่อสถานที่ 6",
    nameEn: "Place Name 6",
    category: "market",
    image: "https://placehold.co/600x400/5B21B6/ffffff?text=Place+6",
    description: "Placeholder description for this place. Replace with real content.",
    featured: false,
  },
]

// Category labels shown on filter tabs
export const categories = [
  { key: "all",     labelTh: "ทั้งหมด",    labelEn: "All Sights" },
  { key: "temple",  labelTh: "วัด",         labelEn: "Temples" },
  { key: "museum",  labelTh: "พิพิธภัณฑ์", labelEn: "Museums" },
  { key: "park",    labelTh: "สวนสาธารณะ", labelEn: "Parks" },
  { key: "gallery", labelTh: "แกลเลอรี",   labelEn: "Galleries" },
  { key: "market",  labelTh: "ตลาด",        labelEn: "Markets" },
]
