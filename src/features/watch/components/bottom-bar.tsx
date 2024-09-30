import Link from 'next/link'
import React from 'react'

import IconArrowLeft from '@/components/icons/arrow-left'
import useSettings from '@/utils/hooks/useSettings'

const BottomBar = () => {
  const { settings } = useSettings()
  return (
    <div
      className='fixed bottom-0 left-0 z-[15] h-[100px] w-full border-t border-[#ccc] bg-white'
      style={{
        backgroundColor: settings.background,
        borderColor: settings.borderColor,
        color: settings.color,
      }}
    >
      <div className='flex h-full flex-row items-center justify-evenly'>
        <Link href='' className='flex flex-col items-center'>
          <IconArrowLeft width={36} />
          <span>Chương trước</span>
        </Link>
        <Link href='' className='flex flex-col items-center'>
          <IconArrowLeft width={36} className='rotate-180' />
          <span>Chương sau</span>
        </Link>
      </div>
    </div>
  )
}

export default BottomBar
