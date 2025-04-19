import { findUserByCredentials } from '@/lib/findUserByCredentials'
import db from '@/lib/prisma'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google'

export const { auth, handlers, signIn, signOut } = NextAuth({

  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async credentials => {
        const user = await findUserByCredentials(
          credentials.email as string,
          credentials.password as string
        )
        return user
      },
    }),
    Google({
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      clientId: process.env.GOOGLE_CLIENT_ID!,
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        const existingUser = await db.user.findFirst({
          where: {
            OR: [
              // biome-ignore lint/style/noNonNullAssertion: <explanation>
              { email: user.email! },
              { googleId: account.providerAccountId },
            ],
          },
        })

        if (!existingUser) {
          const [firstName, ...rest] = (user.name ?? '').split(' ')
          const surname = rest.join(' ')

          await db.user.create({
            data: {
              name: firstName || '',
              surname: surname || '',
              // biome-ignore lint/style/noNonNullAssertion: <explanation>
              email: user.email!,
              googleId: account.providerAccountId,
              image: user.image,
              passwordHash: '',
            },
          })
        } else if (!existingUser.googleId) {
          await db.user.update({
            where: { id: existingUser.id },
            data: {
              googleId: account.providerAccountId,
            },
          })
        }
      }

      return true
    },
  },
  session: {
    strategy: 'jwt', // ou 'database' se preferir
  },
  pages: {
    signIn: '/sign-in',
    error: '/sign-in?error=OAuthError',
  },
})
