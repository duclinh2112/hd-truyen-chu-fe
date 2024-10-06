import Link from 'next/link'
import React from 'react'

import Card from '@/components/common/card'
import TextWithIcon from '@/components/common/text-with-icon'
import IconFlash from '@/components/icons/flash-icon'
import { CATEGORIES } from '@/utils/data'

const Category = () => {
  return (
    <div className='py-4'>
      <Card>
        <div className='mb-2'>
          <TextWithIcon
            icon={<IconFlash />}
            content={
              <h4 className='text-[20px] font-semibold text-title'>
                Danh mục truyện
              </h4>
            }
          />
        </div>
        <div className='flex flex-wrap gap-x-4 gap-y-2'>
          {CATEGORIES.slice(-10).map((item, idx) => (
            <Link
              href={`/danh-muc/${item.slug}`}
              key={idx}
              className='text-text-blue hover:underline'
            >
              {item.title}
            </Link>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default Category
