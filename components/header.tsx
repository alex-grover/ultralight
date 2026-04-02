import type { Theme } from "@/lib/cookies"

import { ThemeToggle } from "./theme-toggle"
import { UnitSelector } from "./unit-selector"

export function Header({ initialTheme }: { initialTheme?: Theme }) {
  return (
    <header className="border-border border-b">
      <div className="px-4 py-6 md:px-6 md:py-8">
        <div className="flex items-center justify-between gap-4">
          {/* Main title block */}
          <div>
            <h1 className="text-foreground text-3xl font-light tracking-tight md:text-4xl">
              ULTRA
              <span className="font-semibold">LIGHT</span>
            </h1>
            <div className="bg-foreground mt-1 h-px w-16" />
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
