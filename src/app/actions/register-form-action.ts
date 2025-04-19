'use server'

import db from '@/lib/prisma'
import { hashSync } from 'bcrypt-ts'
import { redirect } from 'next/navigation'

type SignInFormState = {
  success: boolean
  message?: string
}

export default async function registerFormAction(
  _prevState: SignInFormState | null,
  formdata: FormData
) {
  const entries = Array.from(formdata.entries())
  const data = Object.fromEntries(entries) as {
    name: string
    surname: string
    email: string
    password: string
  }

  if (!data.name || !data.email || !data.password) {
    return {
      message: 'Todos os dados precisam ser preenchidos!',
      success: false,
    }
  }

  const user = await db.user.findUnique({
    where: {
      email: data.email,
    },
  })

  if (user) {
    return {
      message: 'Este usuário já existe!',
      success: false,
    }
  }

  await db.user.create({
    data: {
      name: data.name,
      surname: data.surname,
      email: data.email,
      passwordHash: hashSync(data.password),
    },
  })

  return redirect('/sign-in')
}
