'use client'

import { set as setCookie } from 'es-cookie'
import type { PropsWithChildren } from 'react'
import { useCallback, useState } from 'react'
import { useEventListener } from 'usehooks-ts'
import styles from './client.module.css'
import { cookieOptions, SIDEBAR_COOKIE } from './constants'

type SidebarProviderProps = PropsWithChildren<{
  defaultOpen: boolean | null
}>

export function SidebarProviderClient({
  children,
  defaultOpen,
}: SidebarProviderProps) {
  const [open, setOpen] = useState(defaultOpen)

  const toggleSidebar = useCallback(() => {
    // --tablet-portrait-up
    const isMobile = window.innerWidth < 600
    const next = open === null ? isMobile : !open

    setOpen(next)

    if (!isMobile)
      setCookie(SIDEBAR_COOKIE, next ? 'open' : 'closed', cookieOptions)
  }, [open])

  useEventListener('keypress', (event) => {
    if (event.key !== 'b' || !(event.metaKey || event.ctrlKey)) return
    event.preventDefault()
    toggleSidebar()
  })

  return (
    <div className={styles['container']}>
      <input
        type="checkbox"
        id="sidebar-trigger"
        checked={open ?? true}
        onChange={toggleSidebar}
        className={styles['input']}
        data-set={open !== null}
      />
      {children}
    </div>
  )
}
