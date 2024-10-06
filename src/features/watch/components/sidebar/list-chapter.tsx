import { useParams } from 'next/navigation'
import React from 'react'

import { CHAPTER } from '@/utils/data'
import type { ISetting } from '@/utils/interface/ISetting'

const ListChapter = ({ settings }: { settings: ISetting }) => {
  const params = useParams()
  const { slug } = params
  return (
    <>
      <div
        className='flex h-[52px] w-full items-center border-b px-4 font-semibold'
        style={{
          borderColor: settings.borderColor,
        }}
      >
        Danh sách chương
      </div>
      <div className='h-full overflow-y-auto px-6'>
        <div className='flex flex-col gap-4 py-4'>
          {CHAPTER.map((item, idx) => {
            return (
              <a
                key={idx}
                href={`/watch/${slug}/${item.id}`}
                className='flex items-center gap-2'
              >
                <span>{item.title}</span>
              </a>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ListChapter
