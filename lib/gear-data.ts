export type Classification = "base" | "worn" | "consumable"

export type Item = {
  item: string
  name: string
  description: string
  classification: Classification
  weight: number // in grams
  quantity: number
}

export type Category = {
  name: string
  items: Item[]
}

export const categories: Category[] = [
  {
    name: "Backpack",
    items: [
      { item: "backpack", name: "MYOG 25L Prickly Gorse", description: "", classification: "base", weight: 316, quantity: 1 },
      { item: "liner", name: "Nylofume", description: "cut down", classification: "base", weight: 21, quantity: 1 },
    ],
  },
  {
    name: "Shelter",
    items: [
      { item: "tarp", name: "MYOG 6x9 1.1 silpoly", description: "", classification: "base", weight: 219, quantity: 1 },
      { item: "bivy", name: "MYOG", description: "", classification: "base", weight: 154, quantity: 1 },
      { item: "poles", name: "3F UL C1 trekking pole", description: "pair", classification: "worn", weight: 364, quantity: 1 },
      { item: "guylines", name: "8 + tensioners", description: "", classification: "base", weight: 58, quantity: 1 },
      { item: "stakes", name: "carbon fiber", description: "", classification: "base", weight: 2, quantity: 6 },
    ],
  },
  {
    name: "Sleep",
    items: [
      { item: "quilt", name: "MYOG Apex Quilt", description: "3.6osy, 45F", classification: "base", weight: 465, quantity: 1 },
      { item: "pillow", name: "Big Sky", description: "", classification: "base", weight: 50, quantity: 1 },
      { item: "pad", name: "Featherstone El Cordion", description: "6 panels", classification: "base", weight: 199, quantity: 1 },
    ],
  },
  {
    name: "Cooking",
    items: [
      { item: "food bag", name: "MYOG", description: "", classification: "base", weight: 10, quantity: 1 },
      { item: "jar", name: "Cold soak jar 20oz", description: "", classification: "base", weight: 69, quantity: 1 },
      { item: "spoon", name: "Plastic", description: "", classification: "base", weight: 7, quantity: 1 },
      { item: "filter", name: "Sawyer Mini w/ bag", description: "", classification: "base", weight: 59, quantity: 1 },
      { item: "bottle", name: "Smartwater 1L", description: "", classification: "base", weight: 40, quantity: 2 },
    ],
  },
  {
    name: "Clothing (Packed)",
    items: [
      { item: "hat", name: "Deus cordura", description: "", classification: "base", weight: 68, quantity: 1 },
      { item: "midlayer", name: "MYOG Alpha Direct 90 hoody", description: "", classification: "base", weight: 152, quantity: 1 },
      { item: "rain jacket", name: "Emergency poncho", description: "", classification: "base", weight: 36, quantity: 1 },
      { item: "puffy", name: "Enlightened Equipment Torrid", description: "", classification: "base", weight: 235, quantity: 1 },
    ],
  },
  {
    name: "Hygiene",
    items: [
      { item: "trowel", name: "Bogler", description: "", classification: "base", weight: 14, quantity: 1 },
      { item: "tp", name: "Toilet paper", description: "1/2 roll + 2 ziplock bags", classification: "consumable", weight: 48, quantity: 1 },
      { item: "soap", name: "Dr. Bronners", description: "", classification: "consumable", weight: 11, quantity: 1 },
      { item: "toothbrush", name: "Bamboo", description: "", classification: "base", weight: 6, quantity: 1 },
      { item: "toothpaste", name: "Travel size", description: "", classification: "consumable", weight: 8, quantity: 1 },
      { item: "sunscreen", name: "SPF 50", description: "", classification: "consumable", weight: 30, quantity: 1 },
      { item: "chapstick", name: "SPF 15", description: "", classification: "consumable", weight: 8, quantity: 1 },
      { item: "bottles", name: "1oz flip top", description: "", classification: "base", weight: 8, quantity: 3 },
    ],
  },
  {
    name: "Tech",
    items: [
      { item: "phone", name: "iPhone 15 Pro w/ case", description: "", classification: "base", weight: 226, quantity: 1 },
      { item: "cable", name: "Apple C-C w/ velcro tie", description: "", classification: "base", weight: 19, quantity: 1 },
      { item: "battery", name: "Nitecore NB10000 gen 1", description: "", classification: "base", weight: 151, quantity: 1 },
    ],
  },
  {
    name: "Misc",
    items: [
      { item: "first aid", name: "First Aid Kit", description: "Ibuprofen, cetirizine, band aids, etc.", classification: "base", weight: 16, quantity: 1 },
      { item: "blister kit", name: "Athletic tape, scissors, pin", description: "", classification: "base", weight: 11, quantity: 1 },
      { item: "lighter", name: "Mini bic", description: "", classification: "base", weight: 11, quantity: 1 },
      { item: "flashlight", name: "RovyVon Aurora A5", description: "", classification: "base", weight: 22, quantity: 1 },
      { item: "storage", name: "Gallon ziplock bag", description: "", classification: "base", weight: 9, quantity: 1 },
      { item: "cards", name: "House key, ID, credit card, cash", description: "", classification: "base", weight: 20, quantity: 1 },
    ],
  },
  {
    name: "Clothing (Worn)",
    items: [
      { item: "shirt", name: "Vuori Strato Tech tee", description: "", classification: "worn", weight: 121, quantity: 1 },
      { item: "pants", name: "Vuori Meta", description: "", classification: "worn", weight: 448, quantity: 1 },
      { item: "underwear", name: "32 degrees synthetic", description: "", classification: "worn", weight: 77, quantity: 1 },
      { item: "socks", name: "Darn tough", description: "", classification: "worn", weight: 38, quantity: 2 },
      { item: "shoes", name: "Hoka Speedgoat", description: "", classification: "worn", weight: 598, quantity: 1 },
      { item: "watch", name: "Automatic", description: "", classification: "worn", weight: 125, quantity: 1 },
    ],
  },
  {
    name: "Food",
    items: [
      { item: "lunch", name: "Beans, rice, Fritos, sauce", description: "600 cals", classification: "consumable", weight: 165, quantity: 2 },
      { item: "water", name: "Water 1L", description: "", classification: "consumable", weight: 1000, quantity: 1 },
      { item: "caffeine", name: "Caffeine pills", description: "", classification: "consumable", weight: 0.6, quantity: 12 },
      { item: "pill bag", name: "Pill bag", description: "", classification: "consumable", weight: 0.7, quantity: 1 },
      { item: "bars", name: "Clif builders", description: "280 cals", classification: "consumable", weight: 68, quantity: 1 },
      { item: "oatmeal", name: "Oatmeal packets", description: "150 cals each", classification: "consumable", weight: 43, quantity: 2 },
      { item: "dinner", name: "Ramen + instant potatoes", description: "535 cals", classification: "consumable", weight: 155, quantity: 1 },
      { item: "hot sauce", name: "Taco Bell diablo", description: "", classification: "consumable", weight: 28, quantity: 1 },
      { item: "electrolytes", name: "Gatorade Zero pouch", description: "", classification: "consumable", weight: 3.6, quantity: 2 },
    ],
  },
]

export function computeSummary(cats: Category[]) {
  let baseWeight = 0
  let consumables = 0
  let worn = 0

  for (const cat of cats) {
    for (const item of cat.items) {
      const itemTotalWeight = item.weight * item.quantity
      
      if (item.classification === "base") {
        baseWeight += itemTotalWeight
      } else if (item.classification === "consumable") {
        consumables += itemTotalWeight
      } else if (item.classification === "worn") {
        // For worn items with quantity > 1, only 1 counts as worn, rest as base
        worn += item.weight
        if (item.quantity > 1) {
          baseWeight += item.weight * (item.quantity - 1)
        }
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
    weight: cat.items.reduce((sum, item) => sum + item.weight * item.quantity, 0),
  }))
}

export function formatWeight(grams: number): string {
  if (grams >= 1000) {
    return `${(grams / 1000).toFixed(2)} kg`
  }
  return `${grams} g`
}
