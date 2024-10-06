import React, { useEffect } from 'react'

import { COMIC_CONTENT } from '@/utils/data'
import type { ISetting } from '@/utils/interface/ISetting'

type WatchContentProps = {
  settings: ISetting
}

const WatchContent = ({ settings }: WatchContentProps) => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--background-color-watch',
      settings.background,
    )
    document.documentElement.style.setProperty(
      '--text-color-watch',
      settings.color,
    )
    document.documentElement.style.setProperty(
      '--font-size-watch',
      settings.fontSize + 'px',
    )
    document.documentElement.style.setProperty(
      '--line-height-watch',
      settings.lineHeight + 'px',
    )
    document.documentElement.style.setProperty(
      '--font-family-watch',
      settings.fontFamily,
    )
  }, [settings])

  return (
    <div
      className='watch-content'
      dangerouslySetInnerHTML={{ __html: COMIC_CONTENT }}
      style={{
        backgroundColor: settings.background,
        color: settings.color,
        fontSize: settings.fontSize + 'px',
        lineHeight: settings.lineHeight + 'px',
        fontFamily: settings.fontFamily,
      }}
    ></div>
  )
}

export default WatchContent
