import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'

import { Logo } from '@/components/icons/logo-donatto'
import { BellIcon, DoorClosed, IdCard, User2Icon } from 'lucide-react'
import { Logout } from '../profile/logout'
import { ProfileCard } from '../profile/profile-card'
import { NavResponsive } from './responsive'

export function Navbar() {
  return (
    <nav className="flex justify-between px-6 items-center w-full h-[90px] bg-[#F3F5F9]">
      <Link href="/" className="col-span-2 flex items-center justify-center">
        <Logo className="w-36" />
      </Link>

      <ul className="flex items-center font-medium  dark:text-neutral-400 text-neutral-800 transition-all duration-300 justify-center gap-5 max-sm:hidden">
        <li>
          <Link href="/">Dashboard</Link>
        </li>

        <li>
          <Link href="/">Produtos</Link>
        </li>

        <li>
          <Link href="/">Estoque</Link>
        </li>

        <li>
          <Link href="/">Contas</Link>
        </li>

        <li className="size-10 bg-white/40 flex justify-center items-center cursor-pointer rounded-lg">
          <BellIcon className="h-[1.2rem] w-[1.2rem] dark:text-neutral-400 text-neutral-800" />
        </li>

        <li>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <ProfileCard />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="mt-10">
              <DropdownMenuLabel className="flex items-center gap-2">
                <User2Icon className="h-[1rem] w-[1rem]" />
                <span>Meu perfil</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center gap-2">
                <IdCard />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <DoorClosed />
                <Logout />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>

      <ul className="sm:hidden col-span-2">
        <li>
          <NavResponsive />
        </li>
      </ul>
    </nav>
  )
}
