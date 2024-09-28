import Link from 'next/link'
import React from 'react'

import { CATEGORIES, CHILD_CATEGORIES } from '@/utils/data'

const CategoryList = ({
  slug,
  slugChild,
}: {
  slug: string
  slugChild: string
}) => {
  const childCategories = CHILD_CATEGORIES.filter(
    (item) => item.parent?.slug == slug,
  )
  return (
    <div className='pb-4'>
      <div className='flex items-center'>
        {CATEGORIES.map((item, idx) => {
          const isActive = slug == item.slug
          return (
            <div key={idx} className='flex items-center'>
              <Link
                href={`/danh-muc/${item.slug}`}
                className={`text-[18px] ${
                  isActive ? 'font-bold text-black' : 'font-normal text-main'
                }`}
              >
                {item.title}
              </Link>
              {idx + 1 < CATEGORIES.length && (
                <div className='mx-6 h-[14px] w-px bg-[#eee]'></div>
              )}
            </div>
          )
        })}
      </div>
      <div className='mt-6 flex'>
        <div className='w-[150px] font-semibold'>Danh mục</div>
        <div className='flex items-center gap-x-8 gap-y-3'>
          <div
            className={`flex h-6 items-center justify-center rounded-[18px] px-3 ${
              !slugChild ? 'bg-header' : ''
            }`}
          >
            <Link
              href={`/danh-muc/${slug}`}
              className={`text-[14px] ${
                !slugChild ? 'text-primary' : 'text-main'
              } leading-[24px]`}
            >
              Toàn bộ
            </Link>
          </div>
          {childCategories.map((item, idx) => {
            const isActive = item.slug == slugChild
            return (
              <div
                key={idx}
                className={`flex h-6 items-center justify-center rounded-[18px] px-3 ${
                  isActive ? 'bg-header' : ''
                }`}
              >
                <Link
                  href={`/danh-muc/${slug}/${item.slug}`}
                  className={`text-[14px] ${
                    isActive ? 'text-primary' : 'text-main'
                  } leading-[24px]`}
                >
                  {item.title}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CategoryList
