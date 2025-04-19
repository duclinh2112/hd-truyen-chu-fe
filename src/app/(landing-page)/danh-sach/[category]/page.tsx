import type { Metadata } from 'next'

import Breadcrumbs from '@/features/comic/components/breadcrumb'
import ComicContainer from '@/features/comic/container'
import {
  fetchCategories,
  fetchCategoryBySlug,
  fetchChildCategories,
} from '@/services/fetch/category'
import { fetchComics } from '@/services/fetch/comic'

type Props = {
  params: { category: string }
  searchParams: any
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await fetchCategoryBySlug(params.category)

  return {
    title: `${data?.name} | Truyen3s.vn`,
    openGraph: {
      title: `${data?.name} | Truyen3s.vn`,
      description: data?.description,
      siteName: `${data?.name} | Truyen3s.vn`,
    },
  }
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const [dataCategory, dataCategories, dataChildCategories, dataComics] =
    await Promise.all([
      fetchCategoryBySlug(params.category),
      fetchCategories(),
      fetchChildCategories(
        {
          filter: JSON.stringify({ category_slug: params?.category }),
        },
        {
          cache: 'force-cache',
        },
      ),
      fetchComics(
        {
          page: searchParams.page ?? 1,
          perPage: 20,
          filter: JSON.stringify({
            category_slug: params.category,
            ...JSON.parse(decodeURIComponent(searchParams.filter || '{}')),
          }),
          sort: ['["createdAt", "DESC"]'],
        },
        {
          cache: 'force-cache',
        },
      ),
    ])

  return (
    <>
      <Breadcrumbs title={dataCategory?.name || ''} />
      <ComicContainer
        params={params}
        dataComics={dataComics}
        dataCategories={dataCategories?.content}
        dataChildCategories={dataChildCategories?.content}
      />
    </>
  )
}
