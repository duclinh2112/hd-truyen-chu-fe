import React from 'react'

import AppContainer from '@/components/layouts/container'
import type { IComic } from '@/utils/types/interface/IComic'
import type { IPaginationResponse } from '@/utils/types/interface/response/IPaginationResponse'

import List from './components/list'
import Search from './components/search'
import Sidebar from './components/sidebar'

type ComicContainerProps = {
  params?: { category: string; categoryChild?: string }
  dataComics?: IPaginationResponse<IComic>
}

const ComicContainer = ({ params, dataComics }: ComicContainerProps) => {
  return (
    <div>
      <AppContainer>
        <div className='max-lg grid grid-cols-12 gap-x-4 pb-8'>
          <div className='col-span-12 lg:col-span-3'>
            <Sidebar params={params} />
          </div>
          <div className='col-span-12 lg:col-span-9'>
            <div className='flex flex-col gap-y-4'>
              <Search params={params} />
              <List dataComics={dataComics} />
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  )
}

export default ComicContainer
