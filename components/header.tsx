"use client"

import { UnitSelector } from "./unit-selector"

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="px-4 py-6 md:px-6 md:py-8">
        <div className="flex items-end justify-between gap-4">
          {/* Main title block */}
          <div>
            <h1 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
              PACK
              <span className="font-semibold">WEIGHT</span>
            </h1>
            <div className="h-px w-16 bg-foreground mt-1" />
          </div>
          
          {/* Unit selector */}
          <UnitSelector />
        </div>
      </div>
    </header>
  )
}
