import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { auth } from '../../../auth'

export async function ProfileCard() {
  const session = await auth()
  const name = session?.user?.name
  const avatar = session?.user?.image

  return (
    <Avatar className="border-2 border-primary cursor-pointer">
      <AvatarImage src={avatar ?? ''} alt={name ?? ''} />
      <AvatarFallback>
        {name
          ?.split(' ')
          .map(n => n[0])
          .join('')
          .toUpperCase() ?? 'CN'}
      </AvatarFallback>
    </Avatar>
  )
}
