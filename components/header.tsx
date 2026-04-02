"use client"

import { UnitSelector } from "./unit-selector"
import { ThemeToggle } from "./theme-toggle"
import type { Theme } from "@/lib/cookies"

export function Header({ initialTheme }: { initialTheme?: Theme }) {
  return (
    <header className="border-b border-border">
      <div className="px-4 py-6 md:px-6 md:py-8">
        <div className="flex items-center justify-between gap-4">
          {/* Main title block */}
          <div>
            <h1 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
              ULTRA
              <span className="font-semibold">LIGHT</span>
            </h1>
            <div className="h-px w-16 bg-foreground mt-1" />
          </div>
          
          {/* Controls - unit selector and theme toggle */}
          <div className="flex items-center gap-4">
            <UnitSelector />
            <ThemeToggle initialTheme={initialTheme} />
          </div>
        </div>
      </div>
    </header>
  )
}
