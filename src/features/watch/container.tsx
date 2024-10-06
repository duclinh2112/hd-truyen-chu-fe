'use client'

import React, { useEffect, useState } from 'react'

import { colors } from '@/utils/constants/setting'
import type { ISetting } from '@/utils/interface/ISetting'

import BottomBar from './components/bottom-bar'
import WatchMain from './components/main'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'

const WatchContainer = () => {
  const [settings, setSettings] = useState({
    fontSize: 18,
    lineHeight: 38,
    fontFamily: 'var(--font-inter)',
    ...colors[3],
  })

  const [isShowSidebar, setIsShowSidebar] = useState<boolean>(false)
  const [tab, setTab] = useState<'chapter' | 'setting'>('chapter')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedSettings = localStorage.getItem('watch_settings')
      if (storedSettings) {
        setSettings(JSON.parse(storedSettings))
      }
    }
  }, [])

  const handleChangeSetting = (value: ISetting) => {
    localStorage.setItem('watch_settings', JSON.stringify(value))
    setSettings(value)
  }

  return (
    <div
      className='h-full'
      style={{
        backgroundColor: settings.background,
        borderColor: settings.borderColor,
        color: settings.color,
      }}
    >
      <Navbar settings={settings} />
      <Sidebar
        tab={tab}
        isShowSidebar={isShowSidebar}
        settings={settings}
        onChangeSetting={handleChangeSetting}
        setIsShowSidebar={(value: boolean) => setIsShowSidebar(value)}
        setTab={(value) => setTab(value)}
      />
      <WatchMain settings={settings} />
      <BottomBar
        settings={settings}
        setIsShowSidebar={(value: boolean) => setIsShowSidebar(value)}
        setTab={(value) => setTab(value)}
      />
      {isShowSidebar && (
        <div className='fixed left-0 top-0 z-10 h-screen w-full bg-[rgba(0,0,0,0.5)]'></div>
      )}
    </div>
  )
}

export default WatchContainer
