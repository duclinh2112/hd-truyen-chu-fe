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
      className='mx-auto mt-[52px] flex w-full max-w-[720px] flex-col items-center border-b border-[#eee] pb-[40px] md:mt-[72px] md:pb-[72px]'
      style={{
        borderColor: settings.borderColor,
        color: settings.color,
      }}
    >
      <div className='mt-10 h-[160px] w-[120px] md:mt-[72px] md:h-[326px] md:w-[234px]'>
        <ImageWrap
          src={`/assets/images/${comic?.image.name}`}
          borderRadius='8px'
          paddingTop='140%'
        />
      </div>
      <p className='mx-[30px] mb-0 mt-12 text-center font-bold md:text-[30px]'>
        {comic?.title}
      </p>
    </div>
  )
}

export default WatchMainTop
