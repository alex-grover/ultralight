'use client'

import type { ReactNode } from 'react'

import { UnitProvider } from '@/lib/unit-context'

export function Providers({ children }: { children: ReactNode }) {
  return <UnitProvider>{children}</UnitProvider>
}
