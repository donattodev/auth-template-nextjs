import type { ReactNode } from 'react'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return <main className="w-full min-h-dvh">{children}</main>
}
