import React from 'react'

import type { IChapter } from '@/utils/types/interface/IChapter'
import type { ISetting } from '@/utils/types/interface/ISetting'

import WatchContent from './content'

type WatchMainContentProps = {
  chapter?: IChapter
  settings: ISetting
}

const WatchMainContent = ({ chapter, settings }: WatchMainContentProps) => {
  return (
    <div className='mx-3 mb-10 mt-12 md:mx-[70px]'>
      <h1
        className='mb-8 text-[18px] font-bold md:text-2xl'
        style={{ color: settings.color }}
      >
        {chapter?.name}
      </h1>
      <WatchContent content={chapter?.content} settings={settings} />
    </div>
  )
}

export default WatchMainContent
