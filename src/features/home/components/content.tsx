import React from 'react'

import ListComicWrapper from '@/components/comic/list-comic-wrapper'
import IconFlash2 from '@/components/icons/flash'
import SidebarTop from '@/features/home/components/sidebar-top'
import type { IComic } from '@/utils/types/interface/IComic'

type HomeContentProps = {
  dataComicRecommends?: IComic[]
  dataComicHots?: IComic[]
  dataComicFulls?: IComic[]
  dataTopComics?: IComic[]
}

const HomeContent = ({
  dataComicRecommends,
  dataComicHots,
  dataComicFulls,
  dataTopComics,
}: HomeContentProps) => {
  const searchParams = (param: string) => {
    const currentParams = new URLSearchParams()
    currentParams.set('filter', JSON.stringify({ [param]: true }))

    return currentParams.toString()
  }

  return (
    <div className='max-lg grid grid-cols-12 gap-x-4 pb-8'>
      <div className='col-span-12 lg:col-span-9'>
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
      </div>
      <div className='col-span-12 lg:col-span-3'>
        <div className='sticky top-0'>
          <SidebarTop dataTopComics={dataTopComics} />
        </div>
      </div>
    </div>
  )
}

export default HomeContent
