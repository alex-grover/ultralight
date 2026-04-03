import { cookies } from 'next/headers'

import { GearList } from '@/components/gear-list'
import { Header } from '@/components/header'
import { SummaryMicroBars } from '@/components/summary-micro-bars'
import { UNIT_COOKIE, isValidUnit } from '@/lib/cookies'
import { UnitProvider } from '@/lib/unit-context'

export const runtime = 'edge'

export default async function Home() {
  const cookieStore = await cookies()

  const unitCookie = cookieStore.get(UNIT_COOKIE)?.value
  const initialUnit = isValidUnit(unitCookie) ? unitCookie : 'g'

  return (
    <UnitProvider initialUnit={initialUnit}>
      <div className="bg-background min-h-screen">
        <Header />
        <main className="mx-auto max-w-2xl px-4 py-8">
          <SummaryMicroBars />
          <div className="mt-12">
            <GearList />
          </div>
        </main>
      </div>
    </UnitProvider>
  )
}
