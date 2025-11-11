import { clsx } from 'clsx'
import type { HTMLProps } from 'react'
import styles from './trigger.module.css'

type SidebarTriggerProps = Pick<
  HTMLProps<HTMLLabelElement>,
  'children' | 'className'
>

export function SidebarTrigger({ children, className }: SidebarTriggerProps) {
  return (
    <label
      htmlFor="sidebar-trigger"
      className={clsx(styles['label'], className)}
    >
      {children}
    </label>
  )
}
