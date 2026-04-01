"use client"

import { Shirt, Droplet } from "lucide-react"
import { categories } from "@/lib/gear-data"
import { useUnit } from "@/lib/unit-context"

export function GearList() {
  const { formatWeight } = useUnit()
  
  const getClassificationIcon = (classification: string) => {
    switch (classification) {
      case "worn":
        return <Shirt className="w-3 h-3" strokeWidth={1.5} />
      case "consumable":
        return <Droplet className="w-3 h-3" strokeWidth={1.5} />
      default:
        return null
    }
  }
  
  const getClassificationColor = (classification: string) => {
    switch (classification) {
      case "base":
        return "text-foreground"
      case "worn":
        return "text-blue-500"
      case "consumable":
        return "text-emerald-600"
      default:
        return "text-muted-foreground"
    }
  }
  return (
    <div className="space-y-8">
      {categories.map((category) => {
        const categoryWeight = category.items.reduce((sum, item) => sum + item.weight * item.quantity, 0)
        
        return (
          <section key={category.name}>
            {/* Category header */}
            <div className="flex items-baseline justify-between border-b border-border pb-2 mb-3">
              <h2 className="text-xs font-mono uppercase tracking-[0.15em] text-foreground">
                {category.name}
              </h2>
              <span className="text-xs font-mono tabular-nums text-muted-foreground">
                {formatWeight(categoryWeight)}
              </span>
            </div>
            
            {/* Items */}
            <div className="space-y-2">
              {category.items.map((item, index) => (
                <div
                  key={`${category.name}-${index}`}
                  className="flex items-center gap-3 py-2 border-b border-border/50 last:border-0"
                >
                  {/* Item type (label) */}
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground w-20 shrink-0">
                    {item.item}
                  </span>
                  
                  {/* Name */}
                  <span className="text-sm text-foreground flex-1 min-w-0 truncate">
                    {item.name}
                  </span>
                  
                  {/* Classification Icon - only show for worn/consumable */}
                  {item.classification !== "base" && (
                    <div className={`w-4 h-4 shrink-0 flex items-center justify-center ${getClassificationColor(item.classification)}`}>
                      {getClassificationIcon(item.classification)}
                    </div>
                  )}
                  {item.classification === "base" && <div className="w-4 shrink-0" />}
                  
                  {/* Quantity */}
                  <span className="text-xs font-mono text-muted-foreground w-6 text-center shrink-0">
                    {item.quantity}
                  </span>
                  
                  {/* Weight */}
                  <span className="text-xs font-mono tabular-nums text-foreground w-16 text-right shrink-0">
                    {formatWeight(item.weight * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
