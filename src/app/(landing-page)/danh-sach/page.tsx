import type { Metadata } from 'next'
import React from 'react'

import Breadcrumbs from '@/features/comic/components/breadcrumb'
import ComicContainer from '@/features/comic/container'
import { fetchCategories } from '@/services/fetch/category'
import { fetchComics } from '@/services/fetch/comic'

type Props = {
  searchParams: any
}

export const metadata: Metadata = {
  title: 'Danh sách truyện | Truyen3s.vn',
  openGraph: {
    title: 'Danh sách truyện | Truyen3s.vn',
    siteName: 'Danh sách truyện | Truyen3s.vn',
  },
}

export default async function ListPage({ searchParams }: Props) {
  const [dataComics, dataCategories] = await Promise.all([
    fetchComics(
      {
        page: searchParams.page ?? 1,
        perPage: 20,
        filter: searchParams.filter,
        sort: ['["createdAt", "DESC"]'],
      },
      {
        cache: 'force-cache',
      },
    ),
    fetchCategories(),
  ])

  return (
    <>
      <Breadcrumbs title='Danh sách truyện' />
      <ComicContainer
        dataComics={dataComics}
        dataCategories={dataCategories?.content}
      />
    </>
  )
}
