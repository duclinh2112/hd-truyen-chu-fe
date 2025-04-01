import Link from 'next/link'
import React from 'react'

import Card from '@/components/common/card'
import IconArrowRight from '@/components/icons/arrow-right'
import IconList from '@/components/icons/list'
import { fetchCategories } from '@/services/fetch/category'

type SidebarProps = {
  params?: { category: string; categoryChild?: string }
}

const Sidebar = async ({ params }: SidebarProps) => {
  const dataCategories = await fetchCategories()

  return (
    <Card>
      <div className='mb-4 flex items-center gap-2'>
        <span>
          <IconList width={20} />
        </span>
        <h4 className='text-2xl font-semibold'>Danh mục</h4>
      </div>
      <div className='flex flex-col gap-y-4'>
        <Link href='/danh-sach' className='flex items-center justify-between'>
          <span
            className={`${
              !params?.category ? 'font-semibold' : ''
            } hover:font-semibold`}
          >
            Tất cả
          </span>
          <span className='flex w-[14px] cursor-pointer items-start'>
            <IconArrowRight width={14} height={8} />
          </span>
        </Link>
        {dataCategories?.content.map((cat, idx) => {
          const isActive = cat.slug === params?.category
          return (
            <Link
              key={idx}
              href={`/danh-sach/${cat.slug}`}
              className='flex items-center justify-between'
            >
              <span
                className={`${
                  isActive ? 'font-semibold' : ''
                } hover:font-semibold`}
              >
                {cat.name}
              </span>
              <span className='flex w-[14px] cursor-pointer items-start'>
                <IconArrowRight width={14} height={8} />
              </span>
            </Link>
          )
        })}
      </div>
    </Card>
  )
}

export default Sidebar
