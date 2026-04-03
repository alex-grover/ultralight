import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ultralight',
  description: "Don't pack your fears.",
  generator: 'v0.app',
  metadataBase: new URL('https://ultralight.alexgrover.me'),
  keywords: ['ultralight', 'backpacking', 'hiking', 'gear list', 'pack weight', 'lighterpack'],
  authors: [{ name: 'Alex Grover' }],
  openGraph: {
    title: 'Ultralight',
    description: "Don't pack your fears. A minimalist gear list app for ultralight backpackers.",
    siteName: 'Ultralight',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ultralight',
    description: "Don't pack your fears. A minimalist gear list app for ultralight backpackers.",
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
