'use client'

import { useState } from 'react'

import { categories, computeSummary, computeCategoryBreakdown } from '@/lib/gear-data'
import { useUnit } from '@/lib/unit-context'

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
            <div
              key={category.name}
              className="group grid grid-cols-[5rem_1fr_3rem_4rem] items-center gap-3"
            >
              {/* Category name */}
              <span className="text-muted-foreground font-mono text-[10px] tracking-widest uppercase">
                {category.name}
              </span>

              {/* Segmented bar container */}
              <div
                className="bg-muted/30 relative h-2 cursor-pointer transition-opacity hover:opacity-80"
                style={{ width: `${percentage}%` }}
                onMouseEnter={() => setHoveredCategory(category.name)}
                onMouseLeave={() => setHoveredCategory(null)}
                onTouchStart={() => setHoveredCategory(category.name)}
                onTouchEnd={() => setHoveredCategory(null)}
              >
                {/* Base segment - foreground (black) */}
                <div
                  className="bg-foreground/80 absolute inset-y-0 left-0"
                  style={{ width: `${basePercent}%` }}
                />

                {/* Worn segment - subtle blue */}
                <div
                  className="absolute inset-y-0 bg-worn-bar"
                  style={{
                    left: `${basePercent}%`,
                    width: `${wornPercent}%`,
                  }}
                />

                {/* Consumable segment - subtle green */}
                <div
                  className="absolute inset-y-0 bg-consumable-bar"
                  style={{
                    left: `${basePercent + wornPercent}%`,
                    width: `${consumablePercent}%`,
                  }}
                />

                {/* Tooltip */}
                {hoveredCategory === category.name && (
                  <div className="bg-foreground text-background pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 rounded px-2 py-1 font-mono text-[9px] whitespace-nowrap">
                    {category.base > 0 && <div>Base: {formatWeight(category.base)}</div>}
                    {category.worn > 0 && <div>Worn: {formatWeight(category.worn)}</div>}
                    {category.consumable > 0 && (
                      <div>Cons: {formatWeight(category.consumable)}</div>
                    )}
                  </div>
                )}
              </div>

              {/* Percentage */}
              <span className="text-muted-foreground text-right font-mono text-[10px] tabular-nums">
                {Math.round(totalPercentage)}%
              </span>

              {/* Weight */}
              <span className="text-foreground text-right font-mono text-xs tabular-nums">
                {formatWeight(category.total)}
              </span>
            </div>
          )
        })}
      </div>

      {/* Totals - 2 column grid */}
      <div className="border-border mt-8 border-t pt-4">
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 md:gap-x-12">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-foreground font-mono text-[10px] tracking-widest uppercase md:text-xs">
              Base Weight
            </span>
            <span className="text-foreground shrink-0 font-mono text-xs tabular-nums md:text-sm">
              {formatWeight(summary.baseWeight)}
            </span>
          </div>
          <div className="flex items-baseline justify-between gap-2">
            <span className="font-mono text-[10px] tracking-widest text-consumable uppercase md:text-xs">
              Consumables
            </span>
            <span className="shrink-0 font-mono text-xs text-consumable tabular-nums md:text-sm">
              {formatWeight(summary.consumables)}
            </span>
          </div>
          <div className="flex items-baseline justify-between gap-2">
            <span className="font-mono text-[10px] tracking-widest text-worn uppercase md:text-xs">
              Worn
            </span>
            <span className="shrink-0 font-mono text-xs text-worn tabular-nums md:text-sm">
              {formatWeight(summary.worn)}
            </span>
          </div>
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-foreground font-mono text-[10px] tracking-widest uppercase md:text-xs">
              Pack Weight
            </span>
            <span className="text-foreground shrink-0 font-mono text-xs font-semibold tabular-nums md:text-sm">
              {formatWeight(summary.baseWeight + summary.consumables)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
