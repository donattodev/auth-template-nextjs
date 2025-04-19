import type { ReactNode } from 'react'

export default function PublicLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return <main className="max-sm:px-6 ">{children}</main>
}
