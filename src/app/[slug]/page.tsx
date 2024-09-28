import React from 'react'

import Breadcrumbs from '@/components/common/breadcrumb'
import AppLayout from '@/components/layouts/app-layout'
import AppLayoutWithSidebar from '@/components/layouts/app-layout-with-sidebar'
import AppContainer from '@/components/layouts/container'
import ComicInfo from '@/features/comic-detail/info'
import TabComicDetail from '@/features/comic-detail/tab'
import { COMICS } from '@/utils/data'

type Props = {
  params: { slug: string }
}

const ComicDetail = ({ params }: Props) => {
  const detail = COMICS.find((item) => item.slug == params.slug)
  return (
    <AppLayout>
      <Breadcrumbs title={detail?.title || ''} />
      <AppContainer>
        <AppLayoutWithSidebar>
          <div className='py-4'>
            <ComicInfo detail={detail} />
            <TabComicDetail />
          </div>
        </AppLayoutWithSidebar>
      </AppContainer>
    </AppLayout>
  )
}

export default ComicDetail
