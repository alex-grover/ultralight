import { categories, summary, formatWeight } from "@/lib/gear-data"

export function SummaryBarChart() {
  const maxWeight = Math.max(...categories.map((c) => c.weight))

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

        {/* Bar chart */}
        <div className="space-y-3">
          {categories.map((category) => {
            const percentage = (category.weight / maxWeight) * 100
            return (
              <div key={category.name} className="group">
                <div className="flex items-center gap-4">
                  {/* Category name */}
                  <span className="w-24 text-xs font-mono uppercase tracking-wide text-foreground shrink-0">
                    {category.name}
                  </span>
                  
                  {/* Bar container */}
                  <div className="flex-1 h-6 bg-secondary relative">
                    <div
                      className="h-full bg-foreground transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  
                  {/* Weight */}
                  <span className="w-20 text-right text-xs font-mono tabular-nums text-muted-foreground">
                    {formatWeight(category.weight)}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Totals */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 max-w-sm">
            <div className="flex justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                Base
              </span>
              <span className="text-xs font-mono tabular-nums">
                {formatWeight(summary.baseWeight)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                Consumable
              </span>
              <span className="text-xs font-mono tabular-nums">
                {formatWeight(summary.consumables)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                Worn
              </span>
              <span className="text-xs font-mono tabular-nums">
                {formatWeight(summary.worn)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-foreground font-medium">
                Total
              </span>
              <span className="text-xs font-mono tabular-nums font-semibold">
                {formatWeight(summary.total)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
