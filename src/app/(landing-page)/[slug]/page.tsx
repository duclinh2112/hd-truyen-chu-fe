import type { Metadata, ResolvingMetadata } from 'next'
import React from 'react'

import Breadcrumbs from '@/components/common/breadcrumb'
import AppContainer from '@/components/layouts/container'
import ComicInfo from '@/features/comic-detail/info'
import TabComicDetail from '@/features/comic-detail/tab'
import SidebarTop from '@/features/home/components/sidebar-top'
import { fetchFirstChapter } from '@/services/fetch/chapter'
import { fetchComics, fetchComicsBySlug } from '@/services/fetch/comic'
import { getImageByName } from '@/utils/helpers'

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const data = await fetchComicsBySlug(params.slug)
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${data?.name} | Truyen3s.vn`,
    description: data?.description,
    openGraph: {
      title: `${data?.name} | Truyen3s.vn`,
      description: data?.description,
      images: [getImageByName(data?.image.name), ...previousImages],
      siteName: `${data?.name} | Truyen3s.vn`,
    },
  }
}

export default async function ComicDetail({ params }: Props) {
  const [detail, firstChapter, dataTopComics] = await Promise.all([
    fetchComicsBySlug(params.slug, {
      next: { revalidate: 60 },
    }),
    fetchFirstChapter(params.slug, {
      cache: 'no-store',
    }),
    fetchComics({
      limit: 10,
      sort: ['["view", "DESC"]'],
    }),
  ])

  return (
    <AppContainer>
      <Breadcrumbs title={detail?.name || ''} />
      <div className='max-lg grid grid-cols-12 gap-x-4 pb-8'>
        <div className='col-span-12 lg:col-span-9'>
          <div className='py-4'>
            <ComicInfo detail={detail} chapterId={firstChapter?.id} />
            <TabComicDetail
              description={detail?.description || ''}
              slug={params.slug}
            />
          </div>
        </div>
      </div>
      <div className='col-span-12 lg:col-span-3'>
        <div className='sticky top-0'>
          <SidebarTop dataTopComics={dataTopComics?.content} />
        </div>
      </div>
    </AppContainer>
  )
}
