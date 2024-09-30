'use client'

import React from 'react'

import useSettings from '@/utils/hooks/useSettings'

import BottomBar from './components/bottom-bar'
import WatchMain from './components/main'
import Navbar from './components/navbar'

const WatchContainer = () => {
  const { settings } = useSettings()
  return (
    <div
      className='h-full'
      style={{
        backgroundColor: settings.background,
        borderColor: settings.borderColor,
        color: settings.color,
      }}
    >
      <Navbar />
      <WatchMain />
      <BottomBar />
    </div>
  )
}

export default WatchContainer
