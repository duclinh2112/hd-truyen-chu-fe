import LOGO from '@assets/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

import IconArrowLeft from '@/components/icons/arrow-left'
import { COMICS } from '@/utils/data'
import useSettings from '@/utils/hooks/useSettings'

const Navbar = () => {
  const params = useParams()
  const { slug } = params
  const title = COMICS.find((item) => item.slug == String(slug))?.title ?? ''
  const { settings } = useSettings()

  return (
    <div
      className='fixed left-0 top-0 z-[999] flex h-[72px] w-full border-b border-[#ccc] bg-white'
      style={{
        backgroundColor: settings.background,
        borderColor: settings.borderColor,
        color: settings.color,
      }}
    >
      <div className='mx-auto flex size-full max-w-[860px] items-center justify-between gap-4'>
        <Link href={`/${slug}`}>
          <IconArrowLeft width={30} />
        </Link>
        <div className='line-clamp-1 text-[24px] font-medium'>{title}</div>
        <Link href='/'>
          <Image src={LOGO} alt='Động truyện' width={65} height={32} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
