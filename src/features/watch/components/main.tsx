import React from 'react'

import type { IReadChapter } from '@/utils/types/interface/IChapter'
import type { ISetting } from '@/utils/types/interface/ISetting'

import WatchMainContent from './main/main-content'
import WatchMainTop from './main/main-top'

const WatchMain = ({
  dataChapter,
  settings,
}: {
  dataChapter?: IReadChapter
  settings: ISetting
}) => {
  return (
    <div
      className='bt-0 mx-auto mt-[52px] w-full max-w-[860px] border-t-0 border-[#eeeeee] pb-[60px] md:mt-[72px] md:border md:pb-[100px]'
      style={{
        backgroundColor: settings.background,
        borderColor: settings.borderColor,
        color: settings.color,
      }}
    >
      <WatchMainTop comic={dataChapter?.data.comic} settings={settings} />
      <WatchMainContent chapter={dataChapter?.data} settings={settings} />
    </div>
  )
}

export default WatchMain
