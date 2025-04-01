import type { EErrorType } from '../../enum/EErrorType'

export interface IApiResponse<T> {
  payload: T
  errorType?: EErrorType
  message?: string[]
  timestamp: string
}
