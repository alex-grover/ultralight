"use client"

import { useEffect, useState } from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

const themes = ["light", "dark", "system"] as const

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme as typeof themes[number])
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  // Show skeleton until mounted to avoid flash of wrong icon
  if (!mounted) {
    return (
      <div className="w-8 h-8 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-muted animate-pulse" />
      </div>
    )
  }

  // Use resolvedTheme for the icon display (actual light/dark), but show Monitor for system
  const getIcon = () => {
    if (theme === "system") {
      return <Monitor className="w-4 h-4" strokeWidth={1.5} />
    }
    if (resolvedTheme === "dark") {
      return <Moon className="w-4 h-4" strokeWidth={1.5} />
    }
    return <Sun className="w-4 h-4" strokeWidth={1.5} />
  }

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className="w-8 h-8 flex items-center justify-center text-foreground hover:text-muted-foreground transition-colors"
      aria-label={`Current theme: ${theme}. Click to cycle.`}
    >
      {getIcon()}
    </button>
  )
}
