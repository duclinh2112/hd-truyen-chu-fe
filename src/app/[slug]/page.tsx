import type { Metadata, ResolvingMetadata } from 'next'
import React from 'react'

import Breadcrumbs from '@/components/common/breadcrumb'
import AppLayout from '@/components/layouts/app-layout'
import AppLayoutWithSidebar from '@/components/layouts/app-layout-with-sidebar'
import AppContainer from '@/components/layouts/container'
import ComicInfo from '@/features/comic-detail/info'
import TabComicDetail from '@/features/comic-detail/tab'
import { fetchFirstChapter } from '@/services/fetch/chapter'
import { fetchComicsBySlug } from '@/services/fetch/comic'
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
  const detail = await fetchComicsBySlug(params.slug, {
    next: { revalidate: 60 },
  })

  const firstChapter = await fetchFirstChapter(params.slug, {
    cache: 'no-store',
  })

  return (
    <AppLayout>
      <AppContainer>
        <Breadcrumbs title={detail?.name || ''} />
        <AppLayoutWithSidebar>
          <div className='py-4'>
            <ComicInfo detail={detail} chapterId={firstChapter?.id} />
            <TabComicDetail
              description={detail?.description || ''}
              slug={params.slug}
            />
          </div>
        </AppLayoutWithSidebar>
      </AppContainer>
    </AppLayout>
  )
}
