import Link from 'next/link'
import React from 'react'

import { COMICS } from '@/utils/data'

import Card from '../common/card'
import IconArrowRight from '../icons/arrow-right'

const SidebarTop = () => {
  const renderStyleTop = (idx: number) => {
    switch (idx) {
      case 1:
        return 'bg-bg-success text-text-success'
      case 2:
        return 'bg-bg-warning text-text-warning'
      case 3:
        return 'bg-bg-in-progress text-text-in-progress'

      default:
        return 'bg-[#F0F1F3] text-[#64748B]'
    }
  }

  return (
    <div className='py-4'>
      <Card>
        <div className='mb-6 flex items-center justify-between'>
          <h3 className='text-[24px] font-semibold leading-8'>
            Top Truyện Hay
          </h3>
          <Link
            href='/'
            className='flex items-center text-[14px] font-medium hover:underline'
          >
            Xem thêm
            <span className='inline-flex items-center'>
              <IconArrowRight />
            </span>
          </Link>
        </div>
        <div className='flex flex-col items-start gap-2'>
          {COMICS.slice(-10).map((item, idx) => {
            return (
              <div key={idx} className='flex gap-2'>
                <div
                  className={`flex size-[36px] items-center justify-center rounded-lg p-1 text-[20px] font-semibold leading-7 ${renderStyleTop(
                    idx + 1,
                  )}`}
                >
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
                <div>
                  <Link href={item.slug} className='hover:underline'>
                    {item.title}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}

export default SidebarTop
