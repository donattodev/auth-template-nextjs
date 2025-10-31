import { Analytics } from '@vercel/analytics/next'
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
  title: 'Auth Template Next Js - V15',
  description:
    'Template moderno e funcional para autenticação com **Next.js**, oferecendo suporte a login com credenciais (email/senha) e login social com **Google**. Ideal para projetos que precisam começar rápido com uma base sólida de autenticação e tecnologias modernas.',
  category: 'Dev Fullstack',
  creator: 'Felippe Donatto',
  keywords: [
    'nextjs',
    'tailwind',
    'prisma',
    'neon',
    'shadcnUi',
    'next',
    'react',
    'next js v15',
  ],
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
        <Analytics />
      </body>
    </html>
  )
}
