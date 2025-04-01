export interface IPaginationResponse<T> {
  content: T[]
  currentPage: number
  hasNext: boolean
  payloadSize: number
  skippedRecords: number
  totalPages: number
  totalRecords: number
}
