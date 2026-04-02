"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { THEME_COOKIE, type Theme } from "./cookies"

export function ThemeProvider({ 
  children,
  initialTheme = "system"
}: { 
  children: React.ReactNode
  initialTheme?: Theme
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={initialTheme}
      enableSystem
      disableTransitionOnChange
      storageKey={THEME_COOKIE}
    >
      {children}
    </NextThemesProvider>
  )
}
