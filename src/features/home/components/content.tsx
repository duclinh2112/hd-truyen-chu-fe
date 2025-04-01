import React from 'react'

import ListComicWrapper from '@/components/comic/list-comic-wrapper'
import IconFlash2 from '@/components/icons/flash'
import AppLayoutWithSidebar from '@/components/layouts/app-layout-with-sidebar'
import type { IComic } from '@/utils/types/interface/IComic'

type HomeContentProps = {
  dataComicRecommends?: IComic[]
  dataComicHots?: IComic[]
  dataComicFulls?: IComic[]
}

const HomeContent = ({
  dataComicRecommends,
  dataComicHots,
  dataComicFulls,
}: HomeContentProps) => {
  const searchParams = (param: string) => {
    const currentParams = new URLSearchParams()
    currentParams.set('filter', JSON.stringify({ [param]: true }))

    return currentParams.toString()
  }

  return (
    <AppLayoutWithSidebar>
      <ListComicWrapper
        icon={<IconFlash2 />}
        title='Truyện Đề Cử'
        data={dataComicRecommends?.slice(0, 12) || []}
        seeMore={`danh-sach?${searchParams('isRecommend')}`}
      />
      <ListComicWrapper
        icon={<IconFlash2 />}
        title='Truyện Hot'
        data={dataComicHots?.slice(0, 12) || []}
        seeMore={`danh-sach?${searchParams('isHot')}`}
      />
      <ListComicWrapper
        icon={<IconFlash2 />}
        title='Truyện full'
        data={dataComicFulls?.slice(0, 12) || []}
        seeMore={`danh-sach?${searchParams('isFull')}`}
      />
    </AppLayoutWithSidebar>
  )
}

export default HomeContent
