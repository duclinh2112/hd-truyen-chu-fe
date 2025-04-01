import Link from 'next/link'
import React from 'react'

import { fetchChildCategories } from '@/services/fetch/category'

type ChildCategoryProps = {
  params?: { category: string; categoryChild?: string }
}

const ChildCategory = async ({ params }: ChildCategoryProps) => {
  const dataChildCategories = await fetchChildCategories(
    {
      filter: JSON.stringify({ category_slug: params?.category }),
    },
    {
      cache: 'force-cache',
    },
  )

  return (
    <div className='flex max-lg:flex-col max-lg:gap-4'>
      <div className='w-[150px] font-semibold'>Thể loại</div>
      <div className='flex flex-wrap items-center gap-3 lg:gap-x-8'>
        <div
          className={`flex h-6 items-center justify-center rounded-[18px] px-3 ${
            !params?.categoryChild ? 'bg-header' : ''
          } hover:bg-header`}
        >
          <Link
            href={`/danh-sach/${params?.category}`}
            className={`text-[14px] ${
              !params?.categoryChild ? 'text-primary' : 'text-main'
            } leading-[24px] hover:text-primary`}
          >
            Tất cả
          </Link>
        </div>
        {dataChildCategories?.content.map((item, idx) => {
          const isActive = item.slug == params?.categoryChild
          return (
            <div
              key={idx}
              className={`flex h-6 items-center justify-center rounded-[18px] px-3 ${
                isActive ? 'bg-header' : ''
              } hover:bg-header`}
            >
              <Link
                href={`/danh-sach/${params?.category}/${item.slug}`}
                className={`text-[14px] ${
                  isActive ? 'text-primary' : 'text-main'
                } leading-[24px] hover:text-primary`}
              >
                {item.name}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ChildCategory
