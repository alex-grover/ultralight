'use client'

import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { THEME_COOKIE, type Theme } from '@/lib/cookies'

const themes = ['light', 'dark', 'system'] as const

export function ThemeToggle({ initialTheme = 'system' }: { initialTheme?: Theme }) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Before mount: use initialTheme from server to match SSR
  // After mount: use theme from next-themes
  const currentTheme = mounted ? (theme ?? initialTheme) : initialTheme

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(currentTheme as (typeof themes)[number])
    const nextIndex = (currentIndex + 1) % themes.length
    const newTheme = themes[nextIndex]
    setTheme(newTheme)
    // Set cookie with 1 year expiry
    document.cookie = `${THEME_COOKIE}=${newTheme}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`
  }

  // Determine which icon to show
  const getIcon = () => {
    // Before mount: use initialTheme directly to match server render exactly
    // After mount: use resolvedTheme for actual light/dark
    if (currentTheme === 'system') {
      return <Monitor className="h-4 w-4" strokeWidth={1.5} />
    }

    const isDark = mounted ? resolvedTheme === 'dark' : initialTheme === 'dark'

    if (isDark) {
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
    >
      {getIcon()}
    </button>
  )
}
