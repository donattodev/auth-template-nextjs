import { SectionBall } from '@/elements/section/section-ball'
import type { ReactNode } from 'react'

export default function PublicLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <main className="flex w-full min-h-dvh max-sm:grid max-sm:grid-cols-1">
      {children}
      <SectionBall />
    </main>
  )
}
