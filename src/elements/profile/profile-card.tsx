import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { auth } from '../../../auth'

export async function ProfileCard() {
  const session = await auth()
  const name = session?.user?.name
  const avatar = session?.user?.image

  return (
    <div className="flex items-center gap-3 bg-primary/50 cursor-pointer px-3 py-1.5 w-full rounded-md">
      <Avatar>
        <AvatarImage src={avatar ?? ''} alt={name ?? ''} />
        <AvatarFallback>
          {name
            ?.split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase() ?? 'CN'}
        </AvatarFallback>
      </Avatar>

      <h2 className="truncate w-36 text-left">{name}</h2>
    </div>
  )
}
