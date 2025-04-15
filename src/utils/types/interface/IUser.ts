import type { IRole } from './IAuth'

export interface IUser {
  id: number | string
  fullName: string
  email: string
  birthday?: string
  phone?: string
  photoId?: string | number
  status?: string
  isSuperUser?: boolean
  roles?: IRole[]
}
