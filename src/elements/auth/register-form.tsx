'use client'

import registerFormAction from '@/app/actions/register-form-action'
import { Logo } from '@/components/icons/logo-donatto'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Form from 'next/form'
import Link from 'next/link'
import { useActionState } from 'react'

export function RegisterForm() {
  const [state, formAction, isPending] = useActionState(
    registerFormAction,
    null
  )

  return (
    <div className="flex flex-col justify-center items-center gap-4  w-full">
      {state?.success === false && (
        <div className="bg-red-200 w-full px-4 text-sm font-bold rounded-sm text-red-800 py-2.5 uppercase">
          <span>{state?.message}</span>
        </div>
      )}

       <Logo className='w-56 mb-6'/>

      <Form action={formAction} className="space-y-4 text-center">
        <div className="flex items-center gap-4">
          <Input
            type="text"
            name="name"
            placeholder="Primeiro nome"
            autoFocus
          />
          <Input type="text" name="surname" placeholder="Sobrenome" />
        </div>
        <Input type="email" name="email" placeholder="Endereço de e-mail" />
        <Input type="password" name="password" placeholder="*************" />
        <Button type="submit" className="w-full" disabled={isPending}>
          Cadastrar
        </Button>

        <span className="text-neutral-500 font-medium text-sm">
          Não possui registro?{' '}
          <Link href="/sign-in" className="text-primary font-semibold">
            Faça o login aqui!
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
