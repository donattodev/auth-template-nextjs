import type { Metadata } from 'next'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import { Toaster } from 'sonner'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Template Auth',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang="pt-br"
      className={`${inter.variable} font-sans`}
      suppressHydrationWarning
    >
      <body>
        {children}

        <Toaster richColors closeButton theme="system" />
      </body>
    </html>
  )
}
