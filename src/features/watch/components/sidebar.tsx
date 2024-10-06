import React, { useRef } from 'react'

import { useClickOutside } from '@/utils/hooks/useClickOutside'
import type { ISetting } from '@/utils/interface/ISetting'

import ListChapter from './sidebar/list-chapter'
import Setting from './sidebar/setting'
import SidebarButton from './sidebar/sidebar-button'

type SidebarProps = {
  tab: 'chapter' | 'setting'
  isShowSidebar: boolean
  settings: ISetting
  onChangeSetting: (setting: ISetting) => void
  setIsShowSidebar: (value: boolean) => void
  setTab: (tab: 'chapter' | 'setting') => void
}

const Sidebar = ({
  tab,
  isShowSidebar,
  settings,
  onChangeSetting,
  setIsShowSidebar,
  setTab,
}: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null)

  useClickOutside({
    ref: sidebarRef,
    handler: () => setIsShowSidebar(false),
  })

  return (
    <div
      ref={sidebarRef}
      className='fixed right-0 z-[998] size-full max-md:bottom-[60px] max-md:max-h-[65%] md:top-0 md:w-[530px]'
      style={!isShowSidebar ? { right: '-480px' } : {}}
    >
      <SidebarButton
        settings={settings}
        setTab={(value) => setTab(value)}
        setIsShowSidebar={(value: boolean) => setIsShowSidebar(value)}
      />
      <div
        className='absolute right-0 top-0 flex size-full flex-col border-[#ccc] md:w-[480px] md:border-l md:pt-[72px]'
        style={{
          backgroundColor: settings.background,
          borderColor: settings.borderColor,
          color: settings.color,
        }}
      >
        {tab == 'chapter' ? (
          <ListChapter settings={settings} />
        ) : (
          <Setting settings={settings} onChangeSetting={onChangeSetting} />
        )}
      </div>
    </div>
  )
}

export default Sidebar
