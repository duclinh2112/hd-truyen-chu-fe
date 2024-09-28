import React from 'react'

import ListComicWrapper from '@/components/comic/list-comic-wrapper'
import IconFlash2 from '@/components/icons/flash'
import AppLayoutWithSidebar from '@/components/layouts/app-layout-with-sidebar'
import { COMICS } from '@/utils/data'

const HomeContent = () => {
  return (
    <AppLayoutWithSidebar>
      <ListComicWrapper
        icon={<IconFlash2 />}
        title='Truyện Đề Cử'
        data={COMICS.slice(0, 12)}
        seeMore='/'
      />
      <ListComicWrapper
        icon={<IconFlash2 />}
        title='Truyện BTV Đề xuất'
        data={COMICS.slice(-12)}
        seeMore='/'
      />
      <ListComicWrapper
        icon={<IconFlash2 />}
        title='Đề xuất truyện full'
        data={COMICS.slice(-12)}
        seeMore='/'
      />
    </AppLayoutWithSidebar>
  )
}

export default HomeContent
