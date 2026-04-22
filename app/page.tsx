import { cookies } from 'next/headers'

import { GearListSwitcher } from '@/components/gear-list-switcher'
import { Header } from '@/components/header'
import { UNIT_COOKIE, isValidUnit } from '@/lib/cookies'
import { UnitProvider } from '@/lib/unit-context'

export default async function Home() {
  const cookieStore = await cookies()

  const unitCookie = cookieStore.get(UNIT_COOKIE)?.value
  const initialUnit = isValidUnit(unitCookie) ? unitCookie : 'g'

  return (
    <UnitProvider initialUnit={initialUnit}>
      <div className="bg-background min-h-screen">
        <Header />
        <main className="mx-auto max-w-2xl px-4 py-8">
          <GearListSwitcher />
        </main>
      </div>
    </UnitProvider>
  )
}
