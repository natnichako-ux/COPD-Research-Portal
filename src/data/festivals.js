// ============================================================
// FESTIVALS — เทศกาล
// ============================================================
// Each object is one festival shown on the Festivals page.
//
// Fields:
//   id          — unique string
//   nameTh      — festival name in Thai
//   nameEn      — festival name in English
//   image       — URL or local path
//   description — short summary (2–3 sentences)
//   month       — month number 1–12 (used for sorting)
//   dateLabel   — human-readable date string (e.g. "13–15 เมษายน")
// ============================================================

export const festivals = [
  {
    id: "festival-1",
    nameTh: "เทศกาลที่ 1",
    nameEn: "Festival Name 1",
    image: "https://placehold.co/600x400/6D28D9/ffffff?text=Festival+1",
    description: "Placeholder — describe this festival. What happens, how long it lasts, and why it matters to the community.",
    month: 1,
    dateLabel: "1–3 มกราคม",
  },
  {
    id: "festival-2",
    nameTh: "เทศกาลที่ 2",
    nameEn: "Festival Name 2",
    image: "https://placehold.co/600x400/7C3AED/ffffff?text=Festival+2",
    description: "Placeholder — describe this festival. What happens, how long it lasts, and why it matters to the community.",
    month: 4,
    dateLabel: "13–15 เมษายน",
  },
  {
    id: "festival-3",
    nameTh: "เทศกาลที่ 3",
    nameEn: "Festival Name 3",
    image: "https://placehold.co/600x400/5B21B6/ffffff?text=Festival+3",
    description: "Placeholder — describe this festival. What happens, how long it lasts, and why it matters to the community.",
    month: 11,
    dateLabel: "พฤศจิกายน",
  },
]
