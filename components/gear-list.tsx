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
                  className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-2 border-b border-border/50 last:border-0"
                >
                  {/* Row 1: Item type + Name */}
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    {item.item}
                  </span>
                  <span className="text-sm text-foreground">
                    {item.name}
                  </span>
                  
                  {/* Spacer to push classification and weight to the right */}
                  <span className="flex-1" />
                  
                  {/* Classification */}
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${
                    item.classification === 'base' 
                      ? 'text-muted-foreground' 
                      : item.classification === 'worn' 
                        ? 'text-foreground/70' 
                        : 'text-muted-foreground/60'
                  }`}>
                    {item.classification === 'consumable' ? 'cons' : item.classification}
                  </span>
                  
                  {/* Weight */}
                  <span className="text-xs font-mono tabular-nums text-foreground w-12 text-right">
                    {formatWeight(item.weight)}
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
