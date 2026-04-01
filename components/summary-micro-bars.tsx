"use client"

import { useState } from "react"
import { categories, computeSummary, computeCategoryBreakdown } from "@/lib/gear-data"
import { useUnit } from "@/lib/unit-context"

export function SummaryMicroBars() {
  const { formatWeight } = useUnit()
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  
  const summary = computeSummary(categories)
  const categoryBreakdown = computeCategoryBreakdown(categories)
  
  const maxWeight = Math.max(...categoryBreakdown.map((c) => c.total))
  const totalCategoryWeight = categoryBreakdown.reduce((sum, c) => sum + c.total, 0)

  return (
    <div className="space-y-1">
      {/* Category bars */}
      <div className="space-y-2">
        {categoryBreakdown.map((category) => {
          const percentage = (category.total / maxWeight) * 100
          const totalPercentage = (category.total / totalCategoryWeight) * 100
          
          const basePercent = (category.base / category.total) * 100
          const wornPercent = (category.worn / category.total) * 100
          const consumablePercent = (category.consumable / category.total) * 100

          return (
            <div key={category.name} className="group grid grid-cols-[5rem_1fr_3rem_4rem] gap-3 items-center">
              {/* Category name */}
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                {category.name}
              </span>

              {/* Segmented bar container */}
              <div
                className="h-2 bg-muted/30 relative cursor-pointer transition-opacity hover:opacity-80"
                style={{ width: `${percentage}%` }}
                onMouseEnter={() => setHoveredCategory(category.name)}
                onMouseLeave={() => setHoveredCategory(null)}
                onTouchStart={() => setHoveredCategory(category.name)}
                onTouchEnd={() => setHoveredCategory(null)}
              >
                {/* Base segment - foreground (black) */}
                <div
                  className="absolute inset-y-0 left-0 bg-foreground/80"
                  style={{ width: `${basePercent}%` }}
                />
                
                {/* Worn segment - subtle blue */}
                <div
                  className="absolute inset-y-0 bg-blue-500/60"
                  style={{
                    left: `${basePercent}%`,
                    width: `${wornPercent}%`,
                  }}
                />
                
                {/* Consumable segment - subtle green */}
                <div
                  className="absolute inset-y-0 bg-emerald-600/60"
                  style={{
                    left: `${basePercent + wornPercent}%`,
                    width: `${consumablePercent}%`,
                  }}
                />

                {/* Tooltip */}
                {hoveredCategory === category.name && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-[9px] font-mono whitespace-nowrap rounded pointer-events-none z-10">
                    {category.base > 0 && <div>Base: {formatWeight(category.base)}</div>}
                    {category.worn > 0 && <div>Worn: {formatWeight(category.worn)}</div>}
                    {category.consumable > 0 && <div>Cons: {formatWeight(category.consumable)}</div>}
                  </div>
                )}
              </div>

              {/* Percentage */}
              <span className="text-[10px] font-mono tabular-nums text-muted-foreground text-right">
                {Math.round(totalPercentage)}%
              </span>

              {/* Weight */}
              <span className="text-xs font-mono tabular-nums text-foreground text-right">
                {formatWeight(category.total)}
              </span>
            </div>
          )
        })}
      </div>

      {/* Totals - 2 column grid */}
      <div className="mt-8 pt-4 border-t border-border">
        <div className="grid grid-cols-2 gap-x-4 md:gap-x-12 gap-y-3">
          <div className="flex justify-between items-baseline gap-2">
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-foreground">
              Base Weight
            </span>
            <span className="text-xs md:text-sm font-mono tabular-nums text-foreground shrink-0">
              {formatWeight(summary.baseWeight)}
            </span>
          </div>
          <div className="flex justify-between items-baseline gap-2">
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-emerald-600">
              Consumables
            </span>
            <span className="text-xs md:text-sm font-mono tabular-nums text-emerald-600 shrink-0">
              {formatWeight(summary.consumables)}
            </span>
          </div>
          <div className="flex justify-between items-baseline gap-2">
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-blue-500">
              Worn
            </span>
            <span className="text-xs md:text-sm font-mono tabular-nums text-blue-500 shrink-0">
              {formatWeight(summary.worn)}
            </span>
          </div>
          <div className="flex justify-between items-baseline gap-2">
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-foreground">
              Total
            </span>
            <span className="text-xs md:text-sm font-mono tabular-nums font-semibold text-foreground shrink-0">
              {formatWeight(summary.total)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
