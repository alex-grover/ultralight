"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

import { THEME_COOKIE, type Theme } from "@/lib/cookies"

const themes = ["light", "dark", "system"] as const

export function ThemeToggle({ initialTheme = "system" }: { initialTheme?: Theme }) {
  const { theme, setTheme, resolvedTheme } = useTheme()

  // Use theme from hook if available, otherwise use initialTheme from server
  const currentTheme = theme ?? initialTheme

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(currentTheme as (typeof themes)[number])
    const nextIndex = (currentIndex + 1) % themes.length
    const newTheme = themes[nextIndex]
    setTheme(newTheme)
    // Set cookie with 1 year expiry
    document.cookie = `${THEME_COOKIE}=${newTheme}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`
  }

  // Use resolvedTheme for the icon display (actual light/dark), but show Monitor for system
  const getIcon = () => {
    if (currentTheme === "system") {
      return <Monitor className="h-4 w-4" strokeWidth={1.5} />
    }
    if (resolvedTheme === "dark") {
      return <Moon className="h-4 w-4" strokeWidth={1.5} />
    }
    return <Sun className="h-4 w-4" strokeWidth={1.5} />
  }

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className="text-foreground hover:text-muted-foreground flex h-8 w-8 items-center justify-center transition-colors"
      aria-label={`Current theme: ${currentTheme}. Click to cycle.`}
      suppressHydrationWarning
    >
      {getIcon()}
    </button>
  )
}
