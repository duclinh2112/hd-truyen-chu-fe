'use client'

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import Loading from '@/app/loading'
import { fetchReadChapter } from '@/services/fetch/chapter'
import { colors } from '@/utils/constants/setting'
import type { IReadChapter } from '@/utils/types/interface/IChapter'
import type { ISetting } from '@/utils/types/interface/ISetting'

import BottomBar from './components/bottom-bar'
import WatchMain from './components/main'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'

const WatchContainer = () => {
  const params = useParams()
  const { slug, id } = params
  const [settings, setSettings] = useState({
    fontSize: 18,
    lineHeight: 38,
    fontFamily: 'var(--font-inter)',
    ...colors[3],
  })

  const [isShowSidebar, setIsShowSidebar] = useState<boolean>(false)
  const [tab, setTab] = useState<'chapter' | 'setting'>('chapter')
  const [dataChapter, setDataChapter] = useState<IReadChapter>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchChapter = async () => {
      const res = await fetchReadChapter(Number(id), String(slug))

      setDataChapter(res)
      setIsLoading(false)
    }

    if (id && slug) {
      fetchChapter()
    }
  }, [id])

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
    <>
      <div
        className='h-full'
        style={{
          backgroundColor: settings.background,
          borderColor: settings.borderColor,
          color: settings.color,
        }}
      >
        <Navbar comic={dataChapter?.data.comic} settings={settings} />
        <Sidebar
          tab={tab}
          isShowSidebar={isShowSidebar}
          settings={settings}
          onChangeSetting={handleChangeSetting}
          setIsShowSidebar={(value: boolean) => setIsShowSidebar(value)}
          setTab={(value) => setTab(value)}
        />
        <WatchMain dataChapter={dataChapter} settings={settings} />
        <BottomBar
          dataChapter={dataChapter}
          settings={settings}
          setIsShowSidebar={(value: boolean) => setIsShowSidebar(value)}
          setTab={(value) => setTab(value)}
        />
        {isShowSidebar && (
          <div className='fixed left-0 top-0 z-10 block h-screen w-full bg-[rgba(0,0,0,0.5)] md:hidden'></div>
        )}
      </div>
      {isLoading && <Loading />}
    </>
  )
}

export default WatchContainer
