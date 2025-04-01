import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { Empty } from '@/components/common/empty'
import { Pagination } from '@/components/common/pagination'
import IconBook from '@/components/icons/book'
import { fetchChapters } from '@/services/fetch/chapter'
import type { IChapter } from '@/utils/types/interface/IChapter'

const TabChapter = ({ slug }: { slug: string }) => {
  const [chapters, setChapters] = useState<IChapter[]>([])
  const [pagination, setPagination] = useState({
    page: 1,
    totalRecords: 0,
    payloadSize: 10,
    totalPage: 0,
  })

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchChapters(
        {
          page: pagination.page,
          perPage: pagination.payloadSize,
          filter: JSON.stringify({ comic_slug: slug }),
        },
        {
          cache: 'no-cache',
        },
      )

      setChapters(res?.content || [])
      setPagination({
        ...pagination,
        totalRecords: res?.totalRecords || 0,
        totalPage: res?.totalPages || 0,
      })
    }

    fetchData()
  }, [slug, pagination.page])

  return (
    <div>
      {chapters.length > 0 ? (
        <div className='flex flex-col gap-1'>
          {chapters.map((item, idx) => {
            return (
              <Link
                key={idx}
                href={`/watch/${slug}/${item.id}`}
                className='flex items-center gap-2 border-b border-solid border-[#F0F1F3] py-[10px]'
              >
                <span>
                  <IconBook />
                </span>
                <span>{item.name}</span>
              </Link>
            )
          })}
        </div>
      ) : (
        <Empty description='Hiện chưa có chương nào' />
      )}
      {pagination.totalPage > 1 && (
        <div className='mt-6 flex items-center justify-center'>
          <Pagination
            current={pagination.page}
            pageSize={pagination.payloadSize}
            total={pagination.totalRecords}
            onChange={(page) => {
              setPagination({
                ...pagination,
                page,
              })
            }}
          />
        </div>
      )}
    </div>
  )
}

export default TabChapter
