import IMG_AVATAR from '@assets/images/img-avatar.png'
import LOGO from '@assets/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import IconSearch from '@/components/icons/search'

import AppContainer from '../container'
import Menu from './menu'
import Search from './search'

const Header = () => {
  return (
    <div className='flex h-header items-center bg-header text-header'>
      <AppContainer>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-10'>
            <Link href='/'>
              <Image src={LOGO} alt='Động truyện' width={65} height={32} />
            </Link>
            <Menu />
          </div>
          <div className='flex items-center gap-4 lg:gap-8'>
            <Search />
            <div className='flex size-[24px] cursor-pointer select-none items-center justify-center lg:hidden'>
              <IconSearch width={20} className='text-header' />
            </div>
            <div className='flex size-[24px] cursor-pointer select-none items-center justify-center lg:hidden'>
              <IconSearch width={20} className='text-header' />
            </div>
            <div className='flex cursor-pointer items-center gap-2'>
              <span>
                <Image
                  width={40}
                  height={40}
                  src={IMG_AVATAR}
                  alt='avatar'
                  className='rounded-full'
                />
              </span>
              <span className='text-header max-lg:hidden'>User</span>
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  )
}

export default Header
