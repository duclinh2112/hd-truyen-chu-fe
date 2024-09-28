import React from 'react'

type TagProps = {
  content: string
}
const Tag = ({ content }: TagProps) => {
  return (
    <div className='w-fit cursor-pointer rounded-[8px] bg-white px-[12px] py-[2px] text-left text-[14px] leading-[24px] text-black'>
      {content}
    </div>
  )
}

export default Tag
