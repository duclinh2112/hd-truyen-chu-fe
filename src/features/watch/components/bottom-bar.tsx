import Link from 'next/link'
import React from 'react'

import IconArrowLeft from '@/components/icons/arrow-left'
import IconList from '@/components/icons/list'
import IconSetting from '@/components/icons/setting'
import type { ISetting } from '@/utils/interface/ISetting'

type BottomBarProps = {
  settings: ISetting
  setIsShowSidebar: (value: boolean) => void
  setTab: (tab: 'chapter' | 'setting') => void
}

const BottomBar = ({ settings, setIsShowSidebar, setTab }: BottomBarProps) => {
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
        <Link href='' className='flex flex-col items-center'>
          <span className='inline-flex size-[22px] md:size-9'>
            <IconArrowLeft width={'100%'} />
          </span>
          <span className='max-md:hidden'>Chương trước</span>
        </Link>
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
        <Link href='' className='flex flex-col items-center'>
          <span className='inline-flex size-[22px] md:size-9'>
            <IconArrowLeft width={'100%'} className='rotate-180' />
          </span>
          <span className='max-md:hidden'>Chương sau</span>
        </Link>
      </div>
    </div>
  )
}

export default BottomBar
