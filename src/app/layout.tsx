import '@alex-grover/styles/reset.css'
import type { PropsWithChildren } from 'react'
import styles from './layout.module.css'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={styles['body']}>{children}</body>
    </html>
  )
}
