import { cookies } from 'next/headers'
import { SIDEBAR_COOKIE } from './constants'

export async function getSidebarState() {
  const cookieStore = await cookies()
  const cookie = cookieStore.get(SIDEBAR_COOKIE)
  if (!cookie) return null
  return cookie.value === 'open'
}
