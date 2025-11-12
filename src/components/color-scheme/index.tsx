import { cookies } from 'next/headers'
import type { ColorScheme } from './client'
import { ColorSchemePickerClient } from './client'
import { COLOR_SCHEME_COOKIE } from './constants'
import './index.css'

async function getColorScheme() {
  const cookieStore = await cookies()
  const cookie = cookieStore.get(COLOR_SCHEME_COOKIE)
  if (!cookie || !['light', 'dark'].includes(cookie.value)) return 'system'
  return cookie.value as ColorScheme
}

export async function ColorSchemePicker() {
  const colorScheme = await getColorScheme()
  return <ColorSchemePickerClient defaultColorScheme={colorScheme} />
}
