'use client'

import signInFormAction from '@/app/actions/sign-in-form-action'
import { Logo } from '@/components/icons/logo-donatto'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Form from 'next/form'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useActionState, useEffect } from 'react'

export function SignInForm() {
  const [state, formAction, isPending] = useActionState(signInFormAction, null)

  const router = useRouter()

  useEffect(() => {
    if (state?.success) {
      router.push('/')
    }
  }, [state?.success, router])

  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full">
      {state?.success === false && (
        <div className="bg-red-200 w-full px-4 text-sm font-bold rounded-sm text-red-800 py-2.5 uppercase">
          <span>{state?.message}</span>
        </div>
      )}

      <Logo className='w-56 mb-6'/>

      <Form action={formAction} className="space-y-4 text-center w-full">
        <Input
          type="email"
          name="email"
          placeholder="Endereço de e-mail"
          autoFocus
        />
        <Input type="password" name="password" placeholder="*************" />
        <Button type="submit" className="w-full" disabled={isPending}>
          Realizar Login
        </Button>

        <span className="text-neutral-500 font-semibold text-sm">
          Ainda não possui cadastro?{' '}
          <Link href="/register" className="text-primary font-bold">
            Cadastre-se aqui!
          </Link>
        </span>
      </Form>

      <div className="flex gap-2 items-center w-full">
        <span className="h-[1px] bg-neutral-500 w-full" />
        <span className="text-xs font-medium text-neutral-500">OU</span>
        <span className="h-[1px] bg-neutral-500 w-full" />
      </div>
    </div>
  )
}
