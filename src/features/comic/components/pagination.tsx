'use client'

import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

import { Pagination } from '@/components/common/pagination'
import type { IComic } from '@/utils/types/interface/IComic'
import type { IPaginationResponse } from '@/utils/types/interface/response/IPaginationResponse'

type PaginationComicProps = {
  dataComics?: IPaginationResponse<IComic>
}

const PaginationComic = ({ dataComics }: PaginationComicProps) => {
  const router = useRouter()
  const path = usePathname()

  const handleChangePage = (page: number) => {
    const currentParams = new URLSearchParams(window.location.search)
    currentParams.set('page', String(page))

    router.push(`${path}?${currentParams.toString()}`)
  }

  return (
    <Pagination
      total={dataComics?.totalRecords}
      current={dataComics?.currentPage}
      pageSize={dataComics?.payloadSize}
      onChange={(page) => handleChangePage(page)}
    />
  )
}

export default PaginationComic
