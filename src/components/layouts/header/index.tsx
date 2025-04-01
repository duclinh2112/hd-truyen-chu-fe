import IMG_AVATAR from '@assets/images/img-avatar.png'
import LOGO from '@assets/images/logo.png'
import Image from 'next/image'
import type { Session } from 'next-auth'
import React from 'react'

import IconSearch from '@/components/icons/search'

import AppContainer from '../container'
import Menu from './menu'
import Search from './search'

type HeaderProps = {
  session: Session | null
}

const Header = ({ session }: HeaderProps) => {
  return (
    <div className='flex h-header items-center bg-header text-header'>
      <AppContainer>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-10'>
            <a href='/'>
              <Image src={LOGO} alt='Động truyện' width={65} height={32} />
            </a>
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
              <span className='text-header max-lg:hidden'>
                {session?.user?.fullName}
              </span>
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  )
}

export default Header
