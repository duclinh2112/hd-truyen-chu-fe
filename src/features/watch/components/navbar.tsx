import LOGO from '@assets/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

import IconArrowLeft from '@/components/icons/arrow-left'
import { COMICS } from '@/utils/data'
import type { ISetting } from '@/utils/interface/ISetting'

const Navbar = ({ settings }: { settings: ISetting }) => {
  const params = useParams()
  const { slug } = params
  const title = COMICS.find((item) => item.slug == String(slug))?.title ?? ''

  return (
    <div
      className='fixed left-0 top-0 z-[999] flex h-[52px] w-full border-b border-[#ccc] bg-white max-md:px-3 md:h-[72px]'
      style={{
        backgroundColor: settings.background,
        borderColor: settings.borderColor,
        color: settings.color,
      }}
    >
      <div className='mx-auto flex size-full max-w-[860px] items-center justify-between gap-4'>
        <Link href={`/${slug}`} className='inline-flex items-center'>
          <span className='inline-flex size-5 md:size-[30px]'>
            <IconArrowLeft width={'100%'} />
          </span>
        </Link>
        <div className='line-clamp-1 text-[16px] font-medium md:text-[24px]'>
          {title}
        </div>
        <Link href='/' className='max-md:hidden'>
          <Image src={LOGO} alt='Động truyện' width={65} height={32} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
