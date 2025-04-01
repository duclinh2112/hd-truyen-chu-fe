export interface IPaginationRequest {
  page?: number
  limit?: number
  perPage?: number
  range?: string
  sort?: string[]
  filter?: string
  type?: string
}
