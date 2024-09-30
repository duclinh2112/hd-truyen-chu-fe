'use client'

import React from 'react'

import Card from '@/components/common/card'
import Tabs from '@/components/common/tabs'
import type { ITabItem } from '@/utils/interface/ITabItem'

import TabChapter from './tab/tab-chapter'
import TabDescription from './tab/tab-description'

const TabComicDetail = ({ slug }: { slug: string }) => {
  const TAB_COMIC: ITabItem[] = [
    {
      key: 'description',
      title: 'Giới thiệu',
      content: <TabDescription />,
    },
    {
      key: 'chapter',
      title: 'Chương',
      content: <TabChapter slug={slug} />,
    },
  ]
  return (
    <div className='py-4'>
      <Card>
        <Tabs
          tabItems={TAB_COMIC}
          classNames={{
            tabList: 'border border-[#F0F1F3]',
            tab: 'w-[175px] data-[selected=true]:bg-[#F0F1F3]',
            tabContent:
              'text-main group-data-[selected=true]:text-main font-medium',
          }}
          variant='bordered'
        />
      </Card>
    </div>
  )
}

export default TabComicDetail
