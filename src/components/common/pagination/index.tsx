import type { PaginationProps } from '@nextui-org/react'
import { Pagination as NextPagination } from '@nextui-org/react'

const Pagination = ({ ...props }: PaginationProps) => {
  return <NextPagination initialPage={1} {...props} />
}

export default Pagination
