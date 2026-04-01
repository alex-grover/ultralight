"use client"

import { categories } from "@/lib/gear-data"
import { useUnit } from "@/lib/unit-context"

export function GearList() {
  const { formatWeight } = useUnit()
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
                  className="grid grid-cols-[5rem_md:6rem_1fr_2rem_3rem_3.5rem] gap-3 items-baseline py-2 border-b border-border/50 last:border-0"
                >
                  {/* Item type */}
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    {item.item}
                  </span>
                  
                  {/* Name */}
                  <span className="text-sm text-foreground min-w-0 truncate col-span-1 md:col-span-1">
                    {item.name}
                  </span>
                  
                  {/* Quantity */}
                  <span className="text-xs font-mono text-muted-foreground text-center">
                    {item.quantity}
                  </span>
                  
                  {/* Classification */}
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${
                    item.classification === 'base' 
                      ? 'text-foreground' 
                      : item.classification === 'worn' 
                        ? 'text-blue-500' 
                        : 'text-emerald-600'
                  }`}>
                    {item.classification === 'consumable' ? 'cons' : item.classification}
                  </span>
                  
                  {/* Weight */}
                  <span className="text-xs font-mono tabular-nums text-foreground text-right">
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
