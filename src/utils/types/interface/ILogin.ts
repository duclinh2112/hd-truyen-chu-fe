import type { IRole, IToken } from './IAuth'

export interface ILogin {
  user: {
    id: number
    fullName: string
    email: string
    phone: boolean
    birthday?: string
    photoId?: number
    status: boolean
  }
  roles: IRole[]
  token: IToken
}
