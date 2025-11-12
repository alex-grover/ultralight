import { cookies } from 'next/headers'
import type { PropsWithChildren } from 'react'
import { SidebarProviderClient } from './client'
import { SIDEBAR_COOKIE } from './constants'

async function getSidebarState() {
  const cookieStore = await cookies()
  const cookie = cookieStore.get(SIDEBAR_COOKIE)
  if (!cookie) return null
  return cookie.value === 'open'
}

export async function SidebarProvider({ children }: PropsWithChildren) {
  const sidebarOpen = await getSidebarState()

  return (
    <SidebarProviderClient defaultOpen={sidebarOpen}>
      {children}
    </SidebarProviderClient>
  )
}
