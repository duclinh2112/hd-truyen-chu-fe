import Link from 'next/link'
import React from 'react'

import IconEye from '@/components/icons/eye'
import type { IComic } from '@/utils/interface/IComic'

import ImageWrap from '../../common/img-wrap'

type ItemComicProps = {
  item: IComic
}

const ItemComic = ({ item }: ItemComicProps) => {
  const { title, slug, image, view } = item
  return (
    <div>
      <Link href={`/${slug}`} className='relative'>
        <ImageWrap
          src={`/assets/images/${image.name}`}
          alt={title}
          borderRadius='12px'
          paddingTop='113%'
        />
        <div className='absolute right-[6px] top-[6px] flex h-5 w-[46px] items-center gap-1 rounded-lg border-[0.5px] border-solid border-[#CFD4DB] bg-[#F0F1F3] px-1'>
          <span className='text-[12px] leading-[20px]'>{view}</span>
          <span>
            <IconEye width={10} />
          </span>
        </div>
      </Link>
      <div className='mt-2'>
        <Link href={`/${slug}`}>
          <span className='line-clamp-2 text-[14px] font-medium leading-[24px] text-main'>
            {title}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default ItemComic
