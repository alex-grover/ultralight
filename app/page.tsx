import { cookies } from 'next/headers'

import { GearList } from '@/components/gear-list'
import { Header } from '@/components/header'
import { SummaryMicroBars } from '@/components/summary-micro-bars'
import { UNIT_COOKIE, THEME_COOKIE, isValidUnit, isValidTheme } from '@/lib/cookies'
import { ThemeProvider } from '@/lib/theme-context'
import { UnitProvider } from '@/lib/unit-context'

export default async function Home() {
  const cookieStore = await cookies()

  const unitCookie = cookieStore.get(UNIT_COOKIE)?.value
  const themeCookie = cookieStore.get(THEME_COOKIE)?.value

  const initialUnit = isValidUnit(unitCookie) ? unitCookie : 'g'
  const initialTheme = isValidTheme(themeCookie) ? themeCookie : 'system'

  return (
    <ThemeProvider initialTheme={initialTheme}>
      <UnitProvider initialUnit={initialUnit}>
        <div className="bg-background min-h-screen">
          <Header initialTheme={initialTheme} />
          <main className="mx-auto max-w-2xl px-4 py-8">
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
