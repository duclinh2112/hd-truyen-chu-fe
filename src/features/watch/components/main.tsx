import React from 'react'

import useSettings from '@/utils/hooks/useSettings'

import WatchMainContent from './main-content'
import WatchMainTop from './main-top'

const WatchMain = () => {
  const { settings } = useSettings()
  return (
    <div
      className='mx-auto mt-[72px] w-full max-w-[860px] border border-[#eeeeee] pb-[100px]'
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
