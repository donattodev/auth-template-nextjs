import { Logo } from '@/components/icons/logo-donatto'
import Link from 'next/link'

export function NavLogo() {
  return (
    <Link href="/" className="pt-6 px-8 max-sm:hidden">
      <Logo className="w-32" />
    </Link>
  )
}
