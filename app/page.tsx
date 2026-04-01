"use client"

import { UnitProvider } from "@/lib/unit-context"
import { Header } from "@/components/header"
import { SummaryMicroBars } from "@/components/summary-micro-bars"
import { GearList } from "@/components/gear-list"

export default function Home() {
  return (
    <UnitProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-2xl mx-auto px-4 py-8">
          <SummaryMicroBars />
          <div className="mt-12">
            <GearList />
          </div>
        </main>
      </div>
    </UnitProvider>
  )
}
