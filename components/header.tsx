import { UnitSelector } from "./unit-selector"

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="px-4 py-6 md:px-6 md:py-8">
        {/* Top row - technical details */}
        <div className="flex items-center justify-between text-[10px] tracking-[0.2em] text-muted-foreground uppercase font-mono mb-4">
          <span>Personal Gear System</span>
          <UnitSelector />
        </div>
        
        {/* Main title block */}
        <div className="flex items-end justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
              PACK
              <span className="font-semibold">WEIGHT</span>
            </h1>
            <div className="h-px w-16 bg-foreground" />
          </div>
          
          {/* Technical badge */}
          <div className="hidden sm:flex flex-col items-end gap-1 text-right">
            <div className="text-[10px] tracking-[0.15em] text-muted-foreground uppercase font-mono">
              Ultralight loadout
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground" />
              <span>Static build</span>
            </div>
          </div>
        </div>

        {/* Bottom divider with grid aesthetic */}
        <div className="mt-6 flex items-center gap-2">
          <div className="h-px flex-1 bg-border" />
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-muted-foreground/40" />
            <div className="w-1 h-1 bg-muted-foreground/40" />
            <div className="w-1 h-1 bg-muted-foreground/40" />
          </div>
          <div className="h-px flex-1 bg-border" />
        </div>
      </div>
    </header>
  )
}
