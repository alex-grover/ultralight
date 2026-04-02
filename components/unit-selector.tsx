'use client'

import type { WeightUnit } from '@/lib/cookies'
import { useUnit } from '@/lib/unit-context'

const units: WeightUnit[] = ['g', 'oz', 'lb']

export function UnitSelector() {
  const { unit, setUnit } = useUnit()

  return (
    <div className="flex items-center gap-1 font-mono text-[10px] tracking-widest uppercase">
      {units.map((u, i) => (
        <span key={u} className="flex items-center">
          {i > 0 && <span className="text-muted-foreground/40 mx-1">/</span>}
          <button
            onClick={() => setUnit(u)}
            className={`transition-colors ${
              unit === u ? 'text-foreground' : 'text-muted-foreground hover:text-foreground/70'
            }`}
          >
            {u}
          </button>
        </span>
      ))}
    </div>
  )
}
