import Link from 'next/link'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Logo } from '@/components/icons/logo-donatto'
import { ModeToggle } from '@/components/themes/mode-toggle'
import { BellIcon, DoorClosed, IdCard, User2Icon } from 'lucide-react'
import { Logout } from '../profile/logout'
import { ProfileCard } from '../profile/profile-card'
import { NavResponsive } from './responsive'

export function Navbar() {
  return (
    <nav className="grid grid-cols-10 items-center w-full h-[90px] dark:bg-neutral-800 bg-neutral-200">
      <Link href="/" className="col-span-2 flex items-center justify-center">
        <Logo className='w-36'/>
      </Link>

      <ul className="col-span-6 flex items-center font-semibold dark:text-neutral-400 text-neutral-800 transition-all duration-300 justify-center gap-8 max-sm:hidden">
        <li>
          <Link href="/">Dashboard</Link>
        </li>

        <li>
          <Link href="/">Protdutos</Link>
        </li>

        <li>
          <Link href="/">Estoque</Link>
        </li>

        <li>
          <Link href="/">Contas</Link>
        </li>
      </ul>

      <ul className="col-span-2 flex items-center gap-4">
        <li>
          <BellIcon className="h-[1.2rem] w-[1.2rem] dark:text-neutral-400 text-neutral-800" />
        </li>

        <li>
          <ModeToggle />
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
                <Link href="/profile">Profile</Link>
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
