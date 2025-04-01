import React from 'react'

import ImageWrap from '@/components/common/img-wrap'
import { getImageByName } from '@/utils/helpers'
import type { IComic } from '@/utils/types/interface/IComic'
import type { ISetting } from '@/utils/types/interface/ISetting'

type WatchMainTopProps = {
  comic?: IComic
  settings: ISetting
}

const WatchMainTop = ({ comic, settings }: WatchMainTopProps) => {
  return (
    <div
      className='mx-auto mt-[52px] flex w-full max-w-[720px] flex-col items-center border-b border-[#eee] pb-[40px] md:mt-[72px] md:pb-[72px]'
      style={{
        borderColor: settings.borderColor,
        color: settings.color,
      }}
    >
      <div className='mt-10 h-[160px] w-[120px] md:mt-[72px] md:h-[326px] md:w-[234px]'>
        {comic?.image?.name && (
          <ImageWrap
            src={getImageByName(comic?.image.name)}
            borderRadius='8px'
            paddingTop='140%'
          />
        )}
      </div>
      <p className='mx-[30px] mb-0 mt-12 text-center font-bold md:text-[30px]'>
        {comic?.name}
      </p>
    </div>
  )
}

export default WatchMainTop
