import type { HTMLAttributes } from 'react'
import React from 'react'

import type { IComic } from '@/utils/interface/IComic'

import ComicWrapper from '../comic-wrapper'
import ItemComic from '../item-comic'

type ListComicWrapperProps = {
  icon: React.ReactNode
  title: string
  data: IComic[]
  seeMore?: string
  className?: HTMLAttributes<HTMLElement>['className']
}

const ListComicWrapper = ({
  icon,
  title,
  data,
  seeMore,
  className,
}: ListComicWrapperProps) => {
  return (
    <ComicWrapper
      icon={icon}
      title={
        <h3 className='text-[24px] font-semibold leading-[32px] text-main'>
          {title}
        </h3>
      }
      seeMore={seeMore}
      className={className}
    >
      <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:grid-cols-5 xl:grid-cols-6'>
        {data.map((item: IComic, idx: number) => (
          <div key={idx}>
            <ItemComic item={item} />
          </div>
        ))}
      </div>
    </ComicWrapper>
  )
}

export default ListComicWrapper
