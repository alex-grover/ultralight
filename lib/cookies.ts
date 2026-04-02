export const UNIT_COOKIE = "weight-unit"
export const THEME_COOKIE = "theme"

export type WeightUnit = "g" | "oz" | "lb"
export type Theme = "light" | "dark" | "system"

export function isValidUnit(value: string | undefined): value is WeightUnit {
  return value === "g" || value === "oz" || value === "lb"
}

export function isValidTheme(value: string | undefined): value is Theme {
  return value === "light" || value === "dark" || value === "system"
}
