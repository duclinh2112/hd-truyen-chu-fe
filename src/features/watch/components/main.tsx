import React from 'react'

import type { ISetting } from '@/utils/interface/ISetting'

import WatchMainContent from './main/main-content'
import WatchMainTop from './main/main-top'

const WatchMain = ({ settings }: { settings: ISetting }) => {
  return (
    <div
      className='bt-0 mx-auto mt-[52px] w-full max-w-[860px] border-t-0 border-[#eeeeee] pb-[60px] md:mt-[72px] md:border md:pb-[100px]'
      style={{
        backgroundColor: settings.background,
        borderColor: settings.borderColor,
        color: settings.color,
      }}
    >
      <WatchMainTop settings={settings} />
      <WatchMainContent settings={settings} />
    </div>
  )
}

export default WatchMain
