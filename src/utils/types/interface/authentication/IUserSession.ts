import type { IToken } from '../IAuth'

export interface IIuserSession {
  id: string
  fullName: string
  email: string
  phone: string
  birthday: string
  image: string
  photoId: number
  status: string
  token: IToken
}
