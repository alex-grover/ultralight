import { Header } from "@/components/header"
import { SummaryMicroBars } from "@/components/summary-micro-bars"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-8">
        <SummaryMicroBars />
      </main>
    </div>
  )
}
