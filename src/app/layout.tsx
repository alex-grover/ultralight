import '@alex-grover/styles/reset.css'
import type { PropsWithChildren } from 'react'
import { SWRConfig } from 'swr'
import { fetcher } from '@/lib/api'
import styles from './layout.module.css'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={styles['html']}>
      <body className={styles['body']}>
        <SWRConfig value={{ fetcher, revalidateOnMount: false }}>
          {children}
        </SWRConfig>
      </body>
    </html>
  )
}
