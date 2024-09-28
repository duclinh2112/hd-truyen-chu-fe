import React from 'react'

import ItemComic from '@/components/comic/item-comic'
import type { IComic } from '@/utils/interface/IComic'

const Comic = ({ data }: { data: IComic[] }) => {
  return (
    <div className='mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:grid-cols-5 xl:grid-cols-6'>
      {data.map((item: IComic, idx: number) => (
        <div key={idx}>
          <ItemComic item={item} />
        </div>
      ))}
    </div>
  )
}

export default Comic
