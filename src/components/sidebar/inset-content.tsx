import type { PropsWithChildren } from 'react'
import styles from './inset-content.module.css'

export function SidebarInsetContent({ children }: PropsWithChildren) {
  return (
    <div className={styles['container']}>
      <div className={styles['content']}>{children}</div>
    </div>
  )
}
