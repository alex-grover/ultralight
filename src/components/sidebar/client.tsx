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
    const next = open === null ? isMobile() : !open

    setOpen(next)

    if (!isMobile() || !next)
      setCookie(SIDEBAR_COOKIE, next ? 'open' : 'closed', cookieOptions)
  }, [open])

  useEventListener('keypress', (event) => {
    if (event.key !== 'b' || !(event.metaKey || event.ctrlKey)) return
    event.preventDefault()
    toggleSidebar()
  })

  useEventListener('resize', () => {
    if (isMobile() && open) {
      setOpen(false)
      setCookie(SIDEBAR_COOKIE, 'closed', cookieOptions)
    }

    if (!isMobile() && !open) {
      setOpen(true)
      setCookie(SIDEBAR_COOKIE, 'open', cookieOptions)
    }
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

function isMobile() {
  // --tablet-portrait-up
  return window.innerWidth < 600
}
