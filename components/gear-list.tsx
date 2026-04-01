import { categories, formatWeight } from "@/lib/gear-data"

export function GearList() {
  return (
    <div className="space-y-8">
      {categories.map((category) => {
        const categoryWeight = category.items.reduce((sum, item) => sum + item.weight, 0)
        
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
                  className="group flex items-start gap-4 py-2 border-b border-border/50 last:border-0"
                >
                  {/* Item type badge */}
                  <div className="w-16 shrink-0">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                      {item.item}
                    </span>
                  </div>
                  
                  {/* Name and description */}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-foreground">{item.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
                  </div>
                  
                  {/* Classification and weight */}
                  <div className="flex items-center gap-4 shrink-0">
                    <span className={`text-[10px] font-mono uppercase tracking-wider ${
                      item.classification === 'base' 
                        ? 'text-muted-foreground' 
                        : item.classification === 'worn' 
                          ? 'text-foreground/70' 
                          : 'text-muted-foreground/60'
                    }`}>
                      {item.classification === 'consumable' ? 'cons' : item.classification}
                    </span>
                    <span className="text-xs font-mono tabular-nums text-foreground w-14 text-right">
                      {formatWeight(item.weight)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
