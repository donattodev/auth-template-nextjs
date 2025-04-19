import { GoogleLogo } from '@/components/icons/google-logo'
import { Button } from '@/components/ui/button'
import { signIn } from '../../../../auth'

type GoogleButtonProps = {
  title: string
}

export function GoogleButton({ title }: GoogleButtonProps) {
  return (
    <form
      className="w-full"
      action={async () => {
        'use server'
        await signIn('google')
      }}
    >
      <Button
        type="submit"
        variant={'destructive'}
        className="w-full cursor-pointer"
      >
        <GoogleLogo />
        <span>{title}</span>
      </Button>
    </form>
  )
}
