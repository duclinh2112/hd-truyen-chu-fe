import React from 'react'

import IconList from '@/components/icons/list'
import IconSetting from '@/components/icons/setting'
import type { ISetting } from '@/utils/interface/ISetting'

type SidebarButtonProps = {
  settings: ISetting
  setIsShowSidebar: (value: boolean) => void
  setTab: (tab: 'chapter' | 'setting') => void
}

const SidebarButton = ({
  settings,
  setIsShowSidebar,
  setTab,
}: SidebarButtonProps) => {
  return (
    <div
      className='absolute left-0 top-[416px] border border-[#ccc] max-md:hidden'
      style={{
        backgroundColor: settings.background,
        borderColor: settings.borderColor,
        color: settings.color,
      }}
    >
      <div
        className='flex h-[65px] w-[49px] cursor-pointer items-center justify-center border-b border-[#ccc]'
        onClick={() => {
          setTab('chapter')
          setIsShowSidebar(true)
        }}
      >
        <IconList width={16} />
      </div>
      <div
        className='flex h-[65px] w-[49px] cursor-pointer items-center justify-center'
        onClick={() => {
          setTab('setting')
          setIsShowSidebar(true)
        }}
      >
        <IconSetting width={16} />
      </div>
    </div>
  )
}

export default SidebarButton
