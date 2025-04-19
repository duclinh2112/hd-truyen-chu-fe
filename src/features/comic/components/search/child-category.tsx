import Link from 'next/link'
import React from 'react'

import type { IChildCategory } from '@/utils/types/interface/IChildCategory'

type ChildCategoryProps = {
  params?: { category: string; categoryChild?: string }
  dataChildCategories?: IChildCategory[]
}

const ChildCategory = ({ params, dataChildCategories }: ChildCategoryProps) => {
  return (
    <div className='flex max-lg:flex-col max-lg:gap-4'>
      <div className='w-[150px] font-semibold'>Thể loại</div>
      <div className='flex flex-wrap items-center gap-3 lg:gap-x-8'>
        <div
          className={`group flex h-6 items-center justify-center rounded-[18px] px-3 ${
            !params?.categoryChild ? 'bg-header' : ''
          } hover:bg-header`}
        >
          <Link
            href={`/danh-sach/${params?.category}`}
            className={`text-[14px] ${
              !params?.categoryChild ? 'text-primary' : 'text-main'
            } leading-[24px] hover:text-primary group-hover:text-primary`}
          >
            Tất cả
          </Link>
        </div>
        {dataChildCategories?.map((item, idx) => {
          const isActive = item.slug == params?.categoryChild
          return (
            <div
              key={idx}
              className={`group flex h-6 items-center justify-center rounded-[18px] px-3 ${
                isActive ? 'bg-header' : ''
              } hover:bg-header`}
            >
              <Link
                href={`/danh-sach/${params?.category}/${item.slug}`}
                className={`text-[14px] ${
                  isActive ? 'text-primary' : 'text-main'
                } leading-[24px] hover:text-primary group-hover:text-primary`}
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
