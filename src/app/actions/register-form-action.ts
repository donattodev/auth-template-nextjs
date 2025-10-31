'use server'

import db from '@/lib/prisma'
import { hashSync } from 'bcrypt-ts'

type RegisterFormState = {
  success: boolean
  message?: string
}

export default async function registerFormAction(
  _prevState: RegisterFormState | null,
  formdata: FormData
): Promise<RegisterFormState> {
  const entries = Array.from(formdata.entries())
  const data = Object.fromEntries(entries) as {
    name: string
    surname: string
    email: string
    password: string
  }

  if (!data.name || !data.email || !data.password) {
    return {
      message: 'Todos os campos precisam ser preenchidos!',
      success: false,
    }
  }

  const userExists = await db.user.findUnique({
    where: { email: data.email },
  })

  if (userExists) {
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

  return {
    success: true,
    message: 'Usuário cadastrado com sucesso!',
  }
}
