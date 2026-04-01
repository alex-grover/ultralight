"use client"

import { useUnit, type WeightUnit } from "@/lib/unit-context"

const units: WeightUnit[] = ["g", "oz", "lb"]

export function UnitSelector() {
  const { unit, setUnit } = useUnit()

  return (
    <div className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest">
      {units.map((u, i) => (
        <span key={u} className="flex items-center">
          {i > 0 && <span className="text-muted-foreground/40 mx-1">/</span>}
          <button
            onClick={() => setUnit(u)}
            className={`transition-colors ${
              unit === u
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground/70"
            }`}
          >
            {u}
          </button>
        </span>
      ))}
    </div>
  )
}
