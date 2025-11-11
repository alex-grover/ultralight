import type { PropsWithChildren } from 'react'
import { getSidebarState } from '@/components/sidebar/cookie'
import { SidebarProviderClient } from './client'

export async function SidebarProvider({ children }: PropsWithChildren) {
  const sidebarOpen = await getSidebarState()

  return (
    <SidebarProviderClient defaultOpen={sidebarOpen}>
      {children}
    </SidebarProviderClient>
  )
}
