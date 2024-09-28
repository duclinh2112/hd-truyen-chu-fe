import Link from 'next/link'
import type { HTMLAttributes } from 'react'
import React from 'react'

import IconArrowRight from '@/components/icons/arrow-right'

import Card from '../../common/card'
import TextWithIcon from '../../common/text-with-icon'

type ComicWrapperProps = {
  icon: React.ReactNode
  title: React.ReactNode
  children: React.ReactNode
  seeMore?: string
  className?: HTMLAttributes<HTMLElement>['className']
}

const ComicWrapper = ({
  icon,
  title,
  children,
  seeMore,
  className,
}: ComicWrapperProps) => {
  return (
    <div className={`py-4 ${className}`}>
      <Card>
        <div className='mb-6 flex items-center justify-between'>
          <TextWithIcon icon={icon} content={title} />
          {seeMore && (
            <Link
              href={seeMore}
              className='flex items-center text-[14px] font-medium hover:underline'
            >
              Xem thêm
              <span className='inline-flex items-center'>
                <IconArrowRight />
              </span>
            </Link>
          )}
        </div>
        {children}
      </Card>
    </div>
  )
}

export default ComicWrapper
