import '@alex-grover/styles/reset.css'
import { clsx } from 'clsx'
import { Geist } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import { SWRConfig } from 'swr'
import { fetcher } from '@/lib/api/fetcher'
import styles from './layout.module.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={clsx(styles['html'], geist.className)}>
      <body className={styles['body']}>
        <SWRConfig value={{ fetcher }}>{children}</SWRConfig>
      </body>
    </html>
  )
}
