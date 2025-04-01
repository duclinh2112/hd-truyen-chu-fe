interface IRole {
  id: number
  name: string
  active: boolean
}

interface IToken {
  tokenType: string
  accessToken: string
  accessTokenExpires: string
  refreshToken: string
}

export type { IRole, IToken }
