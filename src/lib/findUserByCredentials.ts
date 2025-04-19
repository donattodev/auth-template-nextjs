import type { userTypes } from '@/@types/userTypes'
import { compareSync } from 'bcrypt-ts'
import db from './prisma'

export async function findUserByCredentials(
  email: string,
  password: string,
): Promise<userTypes | null> {

  const user = await db.user.findFirst({
    where: { email },
  })

  if (!user) return null

  const passwordMatch = compareSync(password, user.passwordHash)

  if (passwordMatch) {
    return {
      email: user.email,
      name: user.name,
      surname: user.surname,
      image: user.image ?? undefined
    }
  }

  return null
}
