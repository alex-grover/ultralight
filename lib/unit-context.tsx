'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

import { UNIT_COOKIE, type WeightUnit } from './cookies'

export type { WeightUnit }

type UnitContextType = {
  unit: WeightUnit
  setUnit: (unit: WeightUnit) => void
  formatWeight: (grams: number) => string
}

const UnitContext = createContext<UnitContextType | null>(null)

export function UnitProvider({
  children,
  initialUnit = 'g',
}: {
  children: ReactNode
  initialUnit?: WeightUnit
}) {
  const [unit, setUnitState] = useState<WeightUnit>(initialUnit)

  const setUnit = (newUnit: WeightUnit) => {
    setUnitState(newUnit)
    // Set cookie with 1 year expiry
    document.cookie = `${UNIT_COOKIE}=${newUnit}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`
  }

  const formatWeight = (grams: number): string => {
    // Round to 0.1g precision to avoid floating point issues
    const rounded = Math.round(grams * 10) / 10

    switch (unit) {
      case 'oz':
        return `${(rounded / 28.3495).toFixed(2)} oz`
      case 'lb':
        return `${(rounded / 453.592).toFixed(2)} lb`
      default:
        return `${rounded} g`
    }
  }

  return (
    <UnitContext.Provider value={{ unit, setUnit, formatWeight }}>{children}</UnitContext.Provider>
  )
}

export function useUnit() {
  const context = useContext(UnitContext)
  if (!context) {
    throw new Error('useUnit must be used within a UnitProvider')
  }
  return context
}
