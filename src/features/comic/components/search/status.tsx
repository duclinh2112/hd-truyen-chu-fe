'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const Status = () => {
  const router = useRouter()
  const path = usePathname()
  const searchParams = useSearchParams()

  const handleFilterClick = (param?: string) => {
    const currentParams = new URLSearchParams()
    if (param) {
      currentParams.set('filter', JSON.stringify({ [param]: true }))
    }

    router.push(`${path}?${currentParams.toString()}`)
  }

  const isActive = (filterKey: string) => {
    const filter = searchParams.get('filter')
    if (!filter) return false
    const parsedFilter = JSON.parse(filter)
    return parsedFilter[filterKey] === true
  }

  const isAnyActive = () => {
    return !searchParams.has('filter')
  }

  return (
    <div className='flex max-lg:flex-col max-lg:gap-4'>
      <div className='w-[150px] font-semibold'>Trạng thái</div>
      <div className='flex flex-wrap items-center gap-3 lg:gap-x-8'>
        <div
          className={`group flex h-6 cursor-pointer items-center justify-center rounded-[18px] px-3 ${
            isAnyActive() ? 'bg-header' : ''
          } hover:bg-header`}
          onClick={() => handleFilterClick()}
        >
          <span
            className={`text-[14px] ${
              isAnyActive() ? 'text-primary' : 'text-main'
            } leading-[24px] hover:text-primary group-hover:text-primary`}
          >
            Toàn bộ
          </span>
        </div>
        <div
          className={`group flex h-6 cursor-pointer items-center justify-center rounded-[18px] px-3 ${
            isActive('isHot') ? 'bg-header' : ''
          } hover:bg-header`}
          onClick={() => handleFilterClick('isHot')}
        >
          <span
            className={`text-[14px] ${
              isActive('isHot') ? 'text-primary' : 'text-main'
            } leading-[24px] hover:text-primary group-hover:text-primary`}
          >
            Truyện hot
          </span>
        </div>
        <div
          className={`group flex h-6 cursor-pointer items-center justify-center rounded-[18px] px-3 ${
            isActive('isRecommend') ? 'bg-header' : ''
          } hover:bg-header`}
          onClick={() => handleFilterClick('isRecommend')}
        >
          <span
            className={`text-[14px] ${
              isActive('isRecommend') ? 'text-primary' : 'text-main'
            } leading-[24px] hover:text-primary group-hover:text-primary`}
          >
            Truyện đề xuất
          </span>
        </div>
        <div
          className={`group flex h-6 cursor-pointer items-center justify-center rounded-[18px] px-3 ${
            isActive('isFull') ? 'bg-header' : ''
          } hover:bg-header`}
          onClick={() => handleFilterClick('isFull')}
        >
          <span
            className={`text-[14px] ${
              isActive('isFull') ? 'text-primary' : 'text-main'
            } leading-[24px] hover:text-primary group-hover:text-primary`}
          >
            Truyện full
          </span>
        </div>
      </div>
    </div>
  )
}

export default Status
