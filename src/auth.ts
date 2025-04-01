import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import type { IUser } from './next-auth'
import fetchApi from './services/fetch'
import { CustomAuthError } from './utils/constants/error'
import type { ILogin } from './utils/types/interface/ILogin'
import type { IDefaultResponse } from './utils/types/interface/response/IDefaultReponse'

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth
    },
    jwt: ({ token, user }) => {
      if (user) {
        token.user = user as unknown as IUser
      }

      return token
    },
    session: ({ session, token }) => {
      ;(session.user as IUser) = token.user

      return session
    },
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const res = await fetchApi<IDefaultResponse<ILogin>>('auth/login', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if ('errorType' in res) {
          throw new CustomAuthError(res.message)
        }

        return {
          id: res.payload?.user?.id.toString(),
          fullName: res.payload?.user?.fullName,
          email: res.payload?.user?.email,
          birthday: res.payload?.user?.birthday,
          phone: res.payload?.user?.phone,
          photoId: res.payload?.user?.photoId,
          status: res.payload?.user?.status,
          roles: res.payload?.roles,
          token: res.payload?.token,
        }
      },
    }),
  ],
})
