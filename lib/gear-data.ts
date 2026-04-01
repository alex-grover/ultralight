export type Classification = "base" | "worn" | "consumable"

export type Item = {
  item: string
  name: string
  description: string
  classification: Classification
  weight: number // in grams
}

export type Category = {
  name: string
  items: Item[]
}

export const categories: Category[] = [
  {
    name: "Backpack",
    items: [
      { item: "backpack", name: "MYOG 25L Prickly Gorse", description: "", classification: "base", weight: 316 },
      { item: "liner", name: "Nylofume", description: "cut down", classification: "base", weight: 21 },
    ],
  },
  {
    name: "Shelter",
    items: [
      { item: "tarp", name: "MYOG 6x9 1.1 silpoly", description: "", classification: "base", weight: 219 },
      { item: "bivy", name: "MYOG", description: "", classification: "base", weight: 154 },
      { item: "poles", name: "3F UL C1 trekking pole", description: "pair", classification: "base", weight: 364 },
      { item: "guylines", name: "8 + tensioners", description: "", classification: "base", weight: 58 },
      { item: "stakes", name: "carbon fiber", description: "", classification: "base", weight: 2 },
    ],
  },
  {
    name: "Sleep",
    items: [
      { item: "quilt", name: "MYOG Apex Quilt", description: "3.6osy, 45F", classification: "base", weight: 465 },
      { item: "pillow", name: "Big Sky", description: "", classification: "base", weight: 50 },
      { item: "pad", name: "Featherstone El Cordion", description: "6 panels", classification: "base", weight: 199 },
    ],
  },
  {
    name: "Cooking",
    items: [
      { item: "food bag", name: "MYOG", description: "", classification: "base", weight: 10 },
      { item: "jar", name: "Cold soak jar 20oz", description: "", classification: "base", weight: 69 },
      { item: "spoon", name: "Plastic", description: "", classification: "base", weight: 7 },
      { item: "filter", name: "Sawyer Mini w/ bag", description: "", classification: "base", weight: 59 },
      { item: "bottle", name: "Smartwater 1L", description: "", classification: "base", weight: 40 },
    ],
  },
  {
    name: "Clothing (Packed)",
    items: [
      { item: "hat", name: "Deus cordura", description: "", classification: "base", weight: 68 },
      { item: "midlayer", name: "MYOG Alpha Direct 90 hoody", description: "", classification: "base", weight: 152 },
      { item: "rain jacket", name: "Emergency poncho", description: "", classification: "base", weight: 36 },
      { item: "puffy", name: "Enlightened Equipment Torrid", description: "", classification: "base", weight: 235 },
    ],
  },
  {
    name: "Hygiene",
    items: [
      { item: "trowel", name: "Bogler", description: "", classification: "base", weight: 14 },
      { item: "tp", name: "Toilet paper", description: "1/2 roll + 2 ziplock bags", classification: "base", weight: 48 },
      { item: "soap", name: "Dr. Bronners", description: "", classification: "base", weight: 11 },
      { item: "toothbrush", name: "Bamboo", description: "", classification: "base", weight: 6 },
      { item: "toothpaste", name: "Travel size", description: "", classification: "base", weight: 8 },
      { item: "sunscreen", name: "SPF 50", description: "", classification: "base", weight: 30 },
      { item: "chapstick", name: "SPF 15", description: "", classification: "base", weight: 8 },
      { item: "bottles", name: "1oz flip top", description: "", classification: "base", weight: 8 },
    ],
  },
  {
    name: "Tech",
    items: [
      { item: "phone", name: "iPhone 15 Pro w/ case", description: "", classification: "worn", weight: 226 },
      { item: "cable", name: "Apple C-C w/ velcro tie", description: "", classification: "base", weight: 19 },
      { item: "battery", name: "Nitecore NB10000 gen 1", description: "", classification: "base", weight: 151 },
    ],
  },
  {
    name: "Misc",
    items: [
      { item: "first aid", name: "First Aid Kit", description: "Ibuprofen, cetirizine, band aids, etc.", classification: "base", weight: 16 },
      { item: "blister kit", name: "Athletic tape, scissors, pin", description: "", classification: "base", weight: 11 },
      { item: "lighter", name: "Mini bic", description: "", classification: "base", weight: 11 },
      { item: "flashlight", name: "RovyVon Aurora A5", description: "", classification: "base", weight: 22 },
      { item: "storage", name: "Gallon ziplock bag", description: "", classification: "base", weight: 9 },
      { item: "cards", name: "House key, ID, credit card, cash", description: "", classification: "worn", weight: 20 },
    ],
  },
  {
    name: "Clothing (Worn)",
    items: [
      { item: "shirt", name: "Vuori Strato Tech tee", description: "", classification: "worn", weight: 121 },
      { item: "pants", name: "Vuori Meta", description: "", classification: "worn", weight: 448 },
      { item: "underwear", name: "32 degrees synthetic", description: "", classification: "worn", weight: 77 },
      { item: "socks", name: "Darn tough", description: "", classification: "worn", weight: 38 },
      { item: "shoes", name: "Hoka Speedgoat", description: "", classification: "worn", weight: 598 },
      { item: "watch", name: "Automatic", description: "", classification: "worn", weight: 125 },
    ],
  },
  {
    name: "Food",
    items: [
      { item: "lunch", name: "Beans, rice, Fritos, sauce", description: "600 cals", classification: "consumable", weight: 165 },
      { item: "water", name: "Water 1L", description: "", classification: "consumable", weight: 1000 },
    ],
  },
]

export function computeSummary(cats: Category[]) {
  let baseWeight = 0
  let consumables = 0
  let worn = 0

  for (const cat of cats) {
    for (const item of cat.items) {
      switch (item.classification) {
        case "base":
          baseWeight += item.weight
          break
        case "consumable":
          consumables += item.weight
          break
        case "worn":
          worn += item.weight
          break
      }
    }
  }

  return {
    baseWeight,
    consumables,
    worn,
    total: baseWeight + consumables + worn,
  }
}

export function computeCategoryWeights(cats: Category[]) {
  return cats.map((cat) => ({
    name: cat.name,
    weight: cat.items.reduce((sum, item) => sum + item.weight, 0),
  }))
}

export function formatWeight(grams: number): string {
  if (grams >= 1000) {
    return `${(grams / 1000).toFixed(2)} kg`
  }
  return `${grams} g`
}
