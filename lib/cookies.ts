export const UNIT_COOKIE = 'weight-unit'

export type WeightUnit = 'g' | 'oz' | 'lb'

export function isValidUnit(value: string | undefined): value is WeightUnit {
  return value === 'g' || value === 'oz' || value === 'lb'
}
