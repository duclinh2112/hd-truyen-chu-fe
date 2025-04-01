import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { fetchChapters } from '@/services/fetch/chapter'
import type { IChapter } from '@/utils/types/interface/IChapter'
import type { ISetting } from '@/utils/types/interface/ISetting'

const ListChapter = ({ settings }: { settings: ISetting }) => {
  const params = useParams()
  const { slug, id } = params
  const [chapters, setChapters] = useState<IChapter[]>()

  useEffect(() => {
    const fetchChapter = async () => {
      if (slug) {
        const res = await fetchChapters({
          filter: JSON.stringify({ comic_slug: slug }),
        })

        setChapters(res?.content)
      }
    }

    fetchChapter()
  }, [slug])

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
          {chapters?.length
            ? chapters.map((item, idx) => {
                return (
                  <Link
                    key={`chapter-${item.id}-${idx}`}
                    href={`/watch/${slug}/${item.id}`}
                    className={`flex items-center gap-2 ${
                      String(id) == String(item.id)
                        ? 'font-bold'
                        : 'font-normal'
                    }`}
                  >
                    <span>{`[Chương - ${item.stt}]`}</span>
                    <span>{item.name}</span>
                  </Link>
                )
              })
            : null}
        </div>
      </div>
    </>
  )
}

export default ListChapter
