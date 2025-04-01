import Link from 'next/link'
import React from 'react'

import IconArrowLeft from '@/components/icons/arrow-left'
import IconList from '@/components/icons/list'
import IconSetting from '@/components/icons/setting'
import type { IReadChapter } from '@/utils/types/interface/IChapter'
import type { ISetting } from '@/utils/types/interface/ISetting'

type BottomBarProps = {
  dataChapter?: IReadChapter
  settings: ISetting
  setIsShowSidebar: (value: boolean) => void
  setTab: (tab: 'chapter' | 'setting') => void
}

const BottomBar = ({
  dataChapter,
  settings,
  setIsShowSidebar,
  setTab,
}: BottomBarProps) => {
  return (
    <div
      className='fixed bottom-0 left-0 z-[15] h-[60px] w-full border-t border-[#ccc] bg-white max-md:px-6 md:h-[100px]'
      style={{
        backgroundColor: settings.background,
        borderColor: settings.borderColor,
        color: settings.color,
      }}
    >
      <div className='flex h-full flex-row items-center justify-around md:justify-evenly'>
        {dataChapter?.prevChapter?.id ? (
          <Link
            href={`${dataChapter.prevChapter.id}`}
            className='flex flex-col items-center'
            rel='preload'
          >
            <span className='inline-flex size-[22px] md:size-9'>
              <IconArrowLeft width='100%' />
            </span>
            <span className='max-md:hidden'>Chương trước</span>
          </Link>
        ) : (
          <div className='flex cursor-not-allowed flex-col items-center text-gray-400'>
            <span className='inline-flex size-[22px] md:size-9'>
              <IconArrowLeft width='100%' />
            </span>
            <span className='max-md:hidden'>Chương trước</span>
          </div>
        )}
        <div
          className='flex items-center md:hidden'
          onClick={() => {
            setIsShowSidebar(true)
            setTab('chapter')
          }}
        >
          <span className='inline-flex size-[22px]'>
            <IconList width={'100%'} />
          </span>
        </div>
        <div
          className='flex items-center md:hidden'
          onClick={() => {
            setIsShowSidebar(true)
            setTab('setting')
          }}
        >
          <span className='inline-flex size-[22px]'>
            <IconSetting width={'100%'} />
          </span>
        </div>
        {dataChapter?.nextChapter?.id ? (
          <Link
            href={`${dataChapter.nextChapter.id}`}
            className='flex flex-col items-center'
            rel='preload'
          >
            <span className='inline-flex size-[22px] md:size-9'>
              <IconArrowLeft width='100%' className='rotate-180' />
            </span>
            <span className='max-md:hidden'>Chương sau</span>
          </Link>
        ) : (
          <div className='flex cursor-not-allowed flex-col items-center text-gray-400'>
            <span className='inline-flex size-[22px] md:size-9'>
              <IconArrowLeft width='100%' className='rotate-180' />
            </span>
            <span className='max-md:hidden'>Chương sau</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default BottomBar
