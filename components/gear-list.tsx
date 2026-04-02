'use client'

import { Shirt, Droplet } from 'lucide-react'

import { categories } from '@/lib/gear-data'
import { useUnit } from '@/lib/unit-context'

export function GearList() {
  const { formatWeight } = useUnit()

  const getClassificationIcon = (classification: string) => {
    switch (classification) {
      case 'worn':
        return <Shirt className="h-3 w-3" strokeWidth={1.5} />
      case 'consumable':
        return <Droplet className="h-3 w-3" strokeWidth={1.5} />
      default:
        return null
    }
  }

  const getClassificationColor = (classification: string) => {
    switch (classification) {
      case 'base':
        return 'text-foreground'
      case 'worn':
        return 'text-blue-500 dark:text-blue-400'
      case 'consumable':
        return 'text-emerald-600 dark:text-emerald-400'
      default:
        return 'text-muted-foreground'
    }
  }
  return (
    <div className="space-y-8">
      {categories.map((category) => {
        const categoryWeight = category.items.reduce(
          (sum, item) => sum + item.weight * item.quantity,
          0
        )

        return (
          <section key={category.name}>
            {/* Category header */}
            <div className="border-border mb-3 flex items-baseline justify-between border-b pb-2">
              <h2 className="text-foreground font-mono text-xs tracking-[0.15em] uppercase">
                {category.name}
              </h2>
              <span className="text-muted-foreground font-mono text-xs tabular-nums">
                {formatWeight(categoryWeight)}
              </span>
            </div>

            {/* Items */}
            <div className="space-y-2">
              {category.items.map((item, index) => (
                <div
                  key={`${category.name}-${index}`}
                  className="border-border/50 flex items-center gap-3 border-b py-2 last:border-0"
                >
                  {/* Item type (label) */}
                  <span className="text-muted-foreground w-20 shrink-0 font-mono text-[10px] tracking-widest uppercase">
                    {item.item}
                  </span>

                  {/* Name */}
                  <span className="text-foreground min-w-0 flex-1 truncate text-sm">
                    {item.name}
                  </span>

                  {/* Classification Icon - only show for worn/consumable */}
                  {item.classification !== 'base' && (
                    <div
                      className={`flex h-4 w-4 shrink-0 items-center justify-center ${getClassificationColor(item.classification)}`}
                    >
                      {getClassificationIcon(item.classification)}
                    </div>
                  )}
                  {item.classification === 'base' && <div className="w-4 shrink-0" />}

                  {/* Quantity */}
                  <span className="text-muted-foreground w-6 shrink-0 text-center font-mono text-xs">
                    {item.quantity}
                  </span>

                  {/* Weight */}
                  <span className="text-foreground w-16 shrink-0 text-right font-mono text-xs tabular-nums">
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
