import { Header } from "@/components/header"
import { SummaryBarChart } from "@/components/summary-bar-chart"
import { SummaryMicroBars } from "@/components/summary-micro-bars"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Option A: Full horizontal bars */}
        <div className="mb-12">
          <h2 className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
            Option A: Bar Chart
          </h2>
          <SummaryBarChart />
        </div>

        {/* Option B: Inline micro-bars */}
        <div>
          <h2 className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
            Option B: Micro Bars
          </h2>
          <SummaryMicroBars />
        </div>
      </main>
    </div>
  )
}
