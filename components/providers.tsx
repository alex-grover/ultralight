"use client"

import { UnitProvider } from "@/lib/unit-context"
import type { ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
  return <UnitProvider>{children}</UnitProvider>
}
