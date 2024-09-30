import Link from 'next/link'
import React from 'react'

import IconBook from '@/components/icons/book'
import { CHAPTER } from '@/utils/data'

const TabChapter = ({ slug }: { slug: string }) => {
  return (
    <div className='flex flex-col gap-1'>
      {CHAPTER.map((item, idx) => {
        return (
          <Link
            key={idx}
            href={`/watch/${slug}/${item.id}`}
            className='flex items-center gap-2 border-b border-solid border-[#F0F1F3] py-[10px]'
          >
            <span>
              <IconBook />
            </span>
            <span>{item.title}</span>
          </Link>
        )
      })}
    </div>
  )
}

export default TabChapter
