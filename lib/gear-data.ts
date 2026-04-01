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
    name: "Shelter",
    items: [
      { item: "tent", name: "Zpacks Duplex", description: "DCF two-person tent", classification: "base", weight: 539 },
      { item: "stakes", name: "Zpacks Sonic Stakes", description: "6x titanium stakes", classification: "base", weight: 51 },
      { item: "groundsheet", name: "Polycryo", description: "Window insulation film as groundsheet", classification: "base", weight: 45 },
    ],
  },
  {
    name: "Sleep",
    items: [
      { item: "quilt", name: "Nunatak Arc UL 20", description: "20F down quilt, 900fp", classification: "base", weight: 540 },
      { item: "pad", name: "Therm-a-Rest NeoAir UberLite", description: "Regular size, 3-season pad", classification: "base", weight: 250 },
      { item: "pillow", name: "Sea to Summit Aeros UL", description: "Inflatable pillow", classification: "base", weight: 60 },
    ],
  },
  {
    name: "Pack",
    items: [
      { item: "backpack", name: "Pa'lante V2", description: "UL frameless pack, 36L", classification: "base", weight: 450 },
      { item: "liner", name: "Nylofume Pack Liner", description: "Waterproof pack liner", classification: "base", weight: 45 },
    ],
  },
  {
    name: "Cook",
    items: [
      { item: "stove", name: "BRS-3000T", description: "Titanium canister stove", classification: "base", weight: 25 },
      { item: "pot", name: "Toaks 650ml", description: "Titanium pot", classification: "base", weight: 86 },
      { item: "spoon", name: "Toaks Long Spoon", description: "Titanium spoon", classification: "base", weight: 18 },
      { item: "fuel", name: "Fuel Canister", description: "100g isobutane", classification: "consumable", weight: 200 },
    ],
  },
  {
    name: "Clothing",
    items: [
      { item: "rain jacket", name: "Frogg Toggs UL2", description: "Emergency rain jacket", classification: "base", weight: 156 },
      { item: "puffy", name: "Cumulus Primelite", description: "850fp down jacket", classification: "base", weight: 210 },
      { item: "hiking shirt", name: "Patagonia Cap Cool", description: "Sun hoody, worn", classification: "worn", weight: 150 },
      { item: "shorts", name: "Patagonia Strider Pro", description: "Running shorts, worn", classification: "worn", weight: 140 },
      { item: "shoes", name: "Altra Lone Peak", description: "Trail runners, worn", classification: "worn", weight: 620 },
    ],
  },
  {
    name: "Electronics",
    items: [
      { item: "headlamp", name: "Nitecore NU25", description: "USB-C rechargeable", classification: "base", weight: 28 },
      { item: "battery", name: "Nitecore NB10000", description: "10000mAh power bank", classification: "consumable", weight: 150 },
      { item: "phone", name: "iPhone", description: "Phone, carried in pocket", classification: "worn", weight: 180 },
    ],
  },
  {
    name: "Misc",
    items: [
      { item: "first aid", name: "DIY First Aid Kit", description: "Minimal kit", classification: "base", weight: 80 },
      { item: "knife", name: "Swiss Army Classic", description: "Small pocket knife", classification: "base", weight: 22 },
      { item: "water", name: "Smart Water Bottles", description: "2x 1L bottles", classification: "consumable", weight: 62 },
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
