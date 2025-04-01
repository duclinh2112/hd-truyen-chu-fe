'use client'

import React from 'react'

import ItemComic from '@/components/comic/item-comic'
import Card from '@/components/common/card'
import { Empty } from '@/components/common/empty'
import type { IComic } from '@/utils/types/interface/IComic'
import type { IPaginationResponse } from '@/utils/types/interface/response/IPaginationResponse'

import PaginationComic from './pagination'

type ListProps = {
  dataComics?: IPaginationResponse<IComic>
}

const List = ({ dataComics }: ListProps) => {
  return (
    <Card>
      {dataComics?.content.length ? (
        <div className='grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5'>
          {dataComics?.content.map((item: IComic, idx: number) => (
            <div key={idx}>
              <ItemComic item={item} />
            </div>
          ))}
        </div>
      ) : (
        <Empty description='Không có dữ liệu' />
      )}

      {dataComics?.totalPages && dataComics?.totalPages > 1 ? (
        <div className='mt-10 flex items-center justify-center'>
          <PaginationComic dataComics={dataComics} />
        </div>
      ) : null}
    </Card>
  )
}

export default List
