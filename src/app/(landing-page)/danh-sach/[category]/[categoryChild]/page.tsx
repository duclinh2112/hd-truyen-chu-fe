import type { Metadata } from 'next'
import React from 'react'

import Breadcrumbs from '@/features/comic/components/breadcrumb'
import ComicContainer from '@/features/comic/container'
import {
  fetchCategories,
  fetchCategoryBySlug,
  fetchChildCategories,
  fetchChildCategoryBySlug,
} from '@/services/fetch/category'
import { fetchComics } from '@/services/fetch/comic'

type Props = {
  params: { category: string; categoryChild: string }
  searchParams: any
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await fetchChildCategoryBySlug(params.categoryChild)

  return {
    title: `${data?.name} | Truyen3s.vn`,
    openGraph: {
      title: `${data?.name} | Truyen3s.vn`,
      description: data?.description,
      siteName: `${data?.name} | Truyen3s.vn`,
    },
  }
}

export default async function ChildCategoryPage({
  params,
  searchParams,
}: Props) {
  const [
    dataCategory,
    dataCategories,
    dataComics,
    dataChildCategory,
    dataChildCategories,
  ] = await Promise.all([
    await fetchCategoryBySlug(params.category),
    fetchCategories(),
    await fetchComics(
      {
        page: searchParams.page ?? 1,
        perPage: 20,
        filter: JSON.stringify({
          category_slug: params.category,
          child_category_slug: params.categoryChild,
          ...JSON.parse(decodeURIComponent(searchParams.filter || '{}')),
        }),
        sort: ['["createdAt", "DESC"]'],
      },
      {
        cache: 'force-cache',
      },
    ),
    await fetchChildCategoryBySlug(params.categoryChild),

    fetchChildCategories(
      {
        filter: JSON.stringify({ category_slug: params?.category }),
      },
      {
        cache: 'force-cache',
      },
    ),
  ])

  return (
    <>
      <Breadcrumbs
        title={dataChildCategory?.name || ''}
        category={dataCategory}
      />
      <ComicContainer
        params={params}
        dataComics={dataComics}
        dataCategories={dataCategories?.content}
        dataChildCategories={dataChildCategories?.content}
      />
    </>
  )
}
