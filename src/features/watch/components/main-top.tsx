import { useParams } from 'next/navigation'
import React from 'react'

import ImageWrap from '@/components/common/img-wrap'
import { COMICS } from '@/utils/data'
import type { ISetting } from '@/utils/interface/ISetting'

type WatchMainTopProps = {
  settings: ISetting
}

const WatchMainTop = ({ settings }: WatchMainTopProps) => {
  const params = useParams()
  const { slug } = params
  const comic = COMICS.find((item) => item.slug == String(slug))

  return (
    <div
      className='mx-auto mt-[72px] flex w-full max-w-[720px] flex-col items-center border-b border-[#eee] pb-[72px]'
      style={{
        borderColor: settings.borderColor,
        color: settings.color,
      }}
    >
      <div className='h-[326px] w-[234px]'>
        <ImageWrap
          src={`/assets/images/${comic?.image.name}`}
          borderRadius='8px'
          paddingTop='140%'
        />
      </div>
      <p className='mx-[30px] mb-0 mt-12 text-center text-[30px] font-bold'>
        {comic?.title}
      </p>
    </div>
  )
}

export default WatchMainTop
