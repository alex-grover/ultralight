import { categories, summary, formatWeight } from "@/lib/gear-data"

export function SummaryMicroBars() {
  const maxWeight = Math.max(...categories.map((c) => c.weight))
  const totalCategoryWeight = categories.reduce((sum, c) => sum + c.weight, 0)

  return (
    <section className="border-t border-border">
      <div className="py-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            Weight Distribution
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Micro-bar table */}
        <div className="space-y-1">
          {categories.map((category) => {
            const percentage = (category.weight / maxWeight) * 100
            const totalPercentage = (category.weight / totalCategoryWeight) * 100
            return (
              <div
                key={category.name}
                className="flex items-center gap-3 py-1.5 group hover:bg-secondary/50 -mx-2 px-2 transition-colors"
              >
                {/* Category name */}
                <span className="w-20 text-[11px] font-mono uppercase tracking-wide text-foreground shrink-0">
                  {category.name}
                </span>

                {/* Percentage */}
                <span className="w-10 text-[10px] font-mono tabular-nums text-muted-foreground text-right">
                  {totalPercentage.toFixed(0)}%
                </span>

                {/* Inline micro-bar */}
                <div className="flex-1 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-secondary overflow-hidden">
                    <div
                      className="h-full bg-foreground transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>

                {/* Weight */}
                <span className="w-16 text-right text-[11px] font-mono tabular-nums text-muted-foreground">
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
    </section>
  )
}
