"use client"

import { categories, computeSummary } from "@/lib/gear-data"
import { useUnit } from "@/lib/unit-context"

export function SummaryMicroBars() {
  const { formatWeight } = useUnit()
  const summary = computeSummary(categories)
  const total = summary.total

  // Calculate percentages for each classification
  const basePercentage = (summary.baseWeight / total) * 100
  const wornPercentage = (summary.worn / total) * 100
  const consumablePercentage = (summary.consumables / total) * 100

  return (
    <div className="space-y-6">
      {/* Stacked bar chart by classification */}
      <div>
        <div className="flex h-8 bg-muted/20 rounded-sm overflow-hidden mb-3">
          {/* Base section */}
          <div
            className="bg-[color:var(--classification-base)] transition-all duration-300 relative group"
            style={{ width: `${basePercentage}%` }}
            title={`Base: ${formatWeight(summary.baseWeight)}`}
          />

          {/* Worn section */}
          <div
            className="bg-[color:var(--classification-worn)] transition-all duration-300 relative group"
            style={{ width: `${wornPercentage}%` }}
            title={`Worn: ${formatWeight(summary.worn)}`}
          />

          {/* Consumable section */}
          <div
            className="bg-[color:var(--classification-consumable)] transition-all duration-300 relative group"
            style={{ width: `${consumablePercentage}%` }}
            title={`Consumable: ${formatWeight(summary.consumables)}`}
          />
        </div>

        {/* Legend */}
        <div className="grid grid-cols-3 gap-4 text-[10px] font-mono uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[color:var(--classification-base)] rounded-sm" />
            <span className="text-muted-foreground">Base</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[color:var(--classification-worn)] rounded-sm" />
            <span className="text-muted-foreground">Worn</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[color:var(--classification-consumable)] rounded-sm" />
            <span className="text-muted-foreground">Cons</span>
          </div>
        </div>
      </div>

      {/* Totals - 2 column grid */}
      <div className="pt-4 border-t border-border">
        <div className="grid grid-cols-2 gap-x-12 gap-y-3">
          <div className="flex justify-between items-baseline">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Base Weight
            </span>
            <span className="text-sm font-mono tabular-nums">
              {formatWeight(summary.baseWeight)}
            </span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Consumables
            </span>
            <span className="text-sm font-mono tabular-nums">
              {formatWeight(summary.consumables)}
            </span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Worn
            </span>
            <span className="text-sm font-mono tabular-nums">
              {formatWeight(summary.worn)}
            </span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-xs font-mono uppercase tracking-widest text-foreground">
              Total
            </span>
            <span className="text-sm font-mono tabular-nums font-semibold">
              {formatWeight(summary.total)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
