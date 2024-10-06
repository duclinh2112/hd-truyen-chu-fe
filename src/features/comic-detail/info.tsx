import React from 'react'

import Card from '@/components/common/card'
import ImageWrap from '@/components/common/img-wrap'
import IconBook from '@/components/icons/book'
import IconEye from '@/components/icons/eye'
import type { IComic } from '@/utils/interface/IComic'

const ComicInfo = ({ detail }: { detail?: IComic }) => {
  const { title, image, view } = detail || {}
  return (
    <Card>
      <div className='flex gap-4 max-lg:flex-col'>
        <div className='relative w-[174px]'>
          <ImageWrap
            src={`/assets/images/${image?.name}`}
            alt={title}
            borderRadius='12px'
            paddingTop='144%'
          />
          <div className='absolute right-[6px] top-[6px] flex h-5 w-[46px] items-center gap-1 rounded-lg border-[0.5px] border-solid border-[#CFD4DB] bg-[#F0F1F3] px-1'>
            <span className='text-[12px] leading-[20px]'>{view}</span>
            <span>
              <IconEye width={10} />
            </span>
          </div>
        </div>
        <div className='flex-1'>
          <h2 className='text-[20px] font-semibold'>{title}</h2>
          <div className='mt-4 grid gap-2 lg:grid-cols-2'>
            <div className='flex items-center gap-2 text-[14px] font-medium'>
              <span>Tác giả:</span>
              <span className='text-text-blue'>Nguyễn Cao Nam</span>
            </div>
            <div className='flex items-center gap-2 text-[14px] font-medium'>
              <span>Lượt xem:</span>
              <span className='text-text-blue'>{view}</span>
            </div>
            <div className='flex items-center gap-2 text-[14px] font-medium'>
              <span>Đánh giá:</span>
              <span className='text-text-blue'>4.5/5</span>
            </div>
            <div className='flex items-center gap-2 text-[14px] font-medium'>
              <span>Cập nhật:</span>
              <span className='text-text-blue'>21:34:49 07/03/2024</span>
            </div>
            <div className='flex items-center gap-2 text-[14px] font-medium'>
              <span>Trạng thái:</span>
              <span className='text-text-blue'>Full</span>
            </div>
          </div>
          <a
            href=''
            className='mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-[#5B6A7E] px-4 py-2 text-white'
          >
            Đọc Ngay
            <span>
              <IconBook />
            </span>
          </a>
        </div>
      </div>
    </Card>
  )
}

export default ComicInfo
