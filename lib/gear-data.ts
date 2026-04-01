export type GearCategory = {
  name: string
  weight: number // in grams
  color: string
}

export type GearSummary = {
  baseWeight: number
  consumables: number
  worn: number
  total: number
}

// Sample data - will be replaced with real data later
export const categories: GearCategory[] = [
  { name: "Shelter", weight: 680, color: "var(--foreground)" },
  { name: "Sleep", weight: 540, color: "var(--muted-foreground)" },
  { name: "Pack", weight: 450, color: "var(--foreground)" },
  { name: "Cook", weight: 280, color: "var(--muted-foreground)" },
  { name: "Clothing", weight: 320, color: "var(--foreground)" },
  { name: "Electronics", weight: 180, color: "var(--muted-foreground)" },
  { name: "Misc", weight: 150, color: "var(--foreground)" },
]

export const summary: GearSummary = {
  baseWeight: 2600,
  consumables: 1200,
  worn: 400,
  total: 4200,
}

export function formatWeight(grams: number): string {
  if (grams >= 1000) {
    return `${(grams / 1000).toFixed(2)} kg`
  }
  return `${grams} g`
}
