import type { Metadata } from 'next'

import AppLayout from '@/components/layouts/app-layout'
import Breadcrumbs from '@/features/comic/components/breadcrumb'
import ComicContainer from '@/features/comic/container'
import { fetchCategoryBySlug } from '@/services/fetch/category'
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
  const [dataCategory, dataComics] = await Promise.all([
    await fetchCategoryBySlug(params.category),
    await fetchComics(
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
    <AppLayout>
      <Breadcrumbs title={dataCategory?.name || ''} />
      <ComicContainer params={params} dataComics={dataComics} />
    </AppLayout>
  )
}
