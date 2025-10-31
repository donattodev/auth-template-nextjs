import { Logo } from '@/components/icons/logo-donatto'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import {
  HomeIcon,
  Images,
  LibraryBig,
  Menu,
  Settings2,
} from 'lucide-react'
import Link from 'next/link'

export function NavResponsive() {
  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="pt-4">
            <Logo className="w-32" />
          </SheetTitle>
        </SheetHeader>
        <div className="px-4 w-full">
          <ul className="flex flex-col gap-6">
            <li>
              <SheetClose asChild>
                <Link
                  href="/"
                  className="flex items-center gap-2 transition-all duration-300 hover:text-primary"
                >
                  <HomeIcon className="w-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  Dashboard
                </Link>
              </SheetClose>
            </li>

            <li>
              <SheetClose asChild>
                <Link
                  href="/"
                  className="flex items-center gap-2 transition-all duration-300 hover:text-primary"
                >
                  <LibraryBig className="w-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  Produtos
                </Link>
              </SheetClose>
            </li>

            <li>
              <SheetClose asChild>
                <Link
                  href="/"
                  className="flex items-center gap-2 transition-all duration-300 hover:text-primary"
                >
                  <Images className="w-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  Estoque
                </Link>
              </SheetClose>
            </li>

            <li>
              <SheetClose asChild>
                <Link
                  href="/"
                  className="flex items-center gap-2 transition-all duration-300 hover:text-primary"
                >
                  <Settings2 className="w-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  Contas
                </Link>
              </SheetClose>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  )
}
