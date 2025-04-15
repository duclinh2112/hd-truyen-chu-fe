/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable prettier/prettier */
import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"

import type { IRole, IToken } from "./utils/types/interface/IAuth"


interface IUser {
  id: string
  fullName: string
  email: string
  phone: boolean
  birthday?: string
  photoId?: number
  status: boolean
  roles: IRole[]
  emailVerified?: boolean
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    user: IUser
    token: IToken
    error: string
  }
}

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: IUser
    token: IToken
    error: string
  }
}
