import { useParams } from 'next/navigation'
import React from 'react'

import { CHAPTER } from '@/utils/data'
import type { ISetting } from '@/utils/interface/ISetting'

import WatchContent from './content'

type WatchMainContentProps = {
  settings: ISetting
}

const WatchMainContent = ({ settings }: WatchMainContentProps) => {
  const params = useParams()
  const { id } = params
  const chapter = CHAPTER.find((item) => item.id == Number(id))
  return (
    <div className='mx-3 mb-10 mt-12 md:mx-[70px]'>
      <h1
        className='mb-8 text-[18px] font-bold md:text-2xl'
        style={{ color: settings.color }}
      >
        {chapter?.title}
      </h1>
      <WatchContent settings={settings} />
    </div>
  )
}

export default WatchMainContent
