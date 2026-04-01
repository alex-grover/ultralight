import { Backpack } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4 flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground">
          <Backpack className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-foreground">Pack Weight</h1>
          <p className="text-sm text-muted-foreground">My backpacking gear list</p>
        </div>
      </div>
    </header>
  )
}
