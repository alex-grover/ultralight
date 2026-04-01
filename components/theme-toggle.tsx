"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-8 h-8 flex items-center justify-center text-foreground hover:text-muted-foreground transition-colors"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4" strokeWidth={1.5} />
      ) : (
        <Sun className="w-4 h-4" strokeWidth={1.5} />
      )}
    </button>
  )
}
