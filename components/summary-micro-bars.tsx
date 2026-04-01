import { categories, computeSummary, computeCategoryWeights, formatWeight } from "@/lib/gear-data"

export function SummaryMicroBars() {
  // Compute weight distribution from categories
  const categoryWeights = computeCategoryWeights(categories)
  const summary = computeSummary(categories)
  const maxWeight = Math.max(...categoryWeights.map((c) => c.weight))
  const totalCategoryWeight = categoryWeights.reduce((sum, c) => sum + c.weight, 0)

  return (
    <div className="space-y-1">
      {/* Category bars */}
      <div className="space-y-2">
        {categoryWeights.map((category) => {
          const percentage = (category.weight / maxWeight) * 100
          const totalPercentage = (category.weight / totalCategoryWeight) * 100

          return (
            <div key={category.name} className="group flex items-center gap-3">
              {/* Category name */}
              <span className="w-20 shrink-0 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                {category.name}
              </span>

              {/* Bar container */}
              <div className="flex-1 h-2 bg-muted/30 relative">
                <div
                  className="absolute inset-y-0 left-0 bg-foreground/80 transition-all duration-300"
                  style={{ width: `${percentage}%` }}
                />
              </div>

              {/* Percentage */}
              <span className="w-8 text-[10px] font-mono tabular-nums text-muted-foreground text-right">
                {Math.round(totalPercentage)}%
              </span>

              {/* Weight */}
              <span className="w-16 text-xs font-mono tabular-nums text-foreground text-right">
                {formatWeight(category.weight)}
              </span>
            </div>
          )
        })}
      </div>

      {/* Totals - 2 column grid */}
      <div className="mt-8 pt-4 border-t border-border">
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
