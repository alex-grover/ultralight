import { cookies } from "next/headers"
import { UnitProvider } from "@/lib/unit-context"
import { ThemeProvider } from "@/lib/theme-context"
import { Header } from "@/components/header"
import { SummaryMicroBars } from "@/components/summary-micro-bars"
import { GearList } from "@/components/gear-list"
import { UNIT_COOKIE, THEME_COOKIE, isValidUnit, isValidTheme } from "@/lib/cookies"

export default async function Home() {
  const cookieStore = await cookies()
  
  const unitCookie = cookieStore.get(UNIT_COOKIE)?.value
  const themeCookie = cookieStore.get(THEME_COOKIE)?.value
  
  const initialUnit = isValidUnit(unitCookie) ? unitCookie : "g"
  const initialTheme = isValidTheme(themeCookie) ? themeCookie : "system"

  return (
    <ThemeProvider initialTheme={initialTheme}>
      <UnitProvider initialUnit={initialUnit}>
        <div className="min-h-screen bg-background">
          <Header initialTheme={initialTheme} />
          <main className="max-w-2xl mx-auto px-4 py-8">
            <SummaryMicroBars />
            <div className="mt-12">
              <GearList />
            </div>
          </main>
        </div>
      </UnitProvider>
    </ThemeProvider>
  )
}
