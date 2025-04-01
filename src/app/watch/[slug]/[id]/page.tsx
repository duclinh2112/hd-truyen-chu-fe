import type { Metadata, ResolvingMetadata } from 'next'
import React from 'react'

import WatchContainer from '@/features/watch/container'
import { fetchChapterById } from '@/services/fetch/chapter'
import { getImageByName } from '@/utils/helpers'

type Props = {
  params: { slug: string; id: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const data = await fetchChapterById(params.id)
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: `[Chương - ${data?.stt}] ${data?.name} | Truyen3s.vn`,
    description: data?.comic.description,
    openGraph: {
      title: `[Chương - ${data?.stt}] ${data?.name} | Truyen3s.vn`,
      description: data?.comic.description,
      images: [getImageByName(data?.comic?.image?.name), ...previousImages],
      siteName: `[Chương - ${data?.stt}] ${data?.name} | Truyen3s.vn`,
    },
  }
}

const WatchPage = () => {
  return <WatchContainer />
}

export default WatchPage
