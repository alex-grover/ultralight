"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type WeightUnit = "g" | "oz" | "lb"

type UnitContextType = {
  unit: WeightUnit
  setUnit: (unit: WeightUnit) => void
  formatWeight: (grams: number) => string
}

const UnitContext = createContext<UnitContextType | null>(null)

export function UnitProvider({ children }: { children: ReactNode }) {
  const [unit, setUnitState] = useState<WeightUnit>("g")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("weight-unit") as WeightUnit | null
    if (stored && ["g", "oz", "lb"].includes(stored)) {
      setUnitState(stored)
    }
    setMounted(true)
  }, [])

  const setUnit = (newUnit: WeightUnit) => {
    setUnitState(newUnit)
    localStorage.setItem("weight-unit", newUnit)
  }

  const formatWeight = (grams: number): string => {
    // Round to 0.1g precision to avoid floating point issues
    const rounded = Math.round(grams * 10) / 10

    if (!mounted) {
      return `${rounded} g`
    }

    switch (unit) {
      case "oz":
        return `${(rounded / 28.3495).toFixed(2)} oz`
      case "lb":
        return `${(rounded / 453.592).toFixed(2)} lb`
      default:
        return `${rounded} g`
    }
  }

  return (
    <UnitContext.Provider value={{ unit, setUnit, formatWeight }}>
      {children}
    </UnitContext.Provider>
  )
}

export function useUnit() {
  const context = useContext(UnitContext)
  if (!context) {
    throw new Error("useUnit must be used within a UnitProvider")
  }
  return context
}
