import type { ReactNode } from 'react'
import React from 'react'

import { auth } from '@/auth'

import Footer from '../footer'
import Header from '../header'

type AppLayoutProps = {
  children: ReactNode
}

const AppLayout = async ({ children }: AppLayoutProps) => {
  const session = await auth()
  return (
    <div className='size-full'>
      <Header session={session} />
      <div className='flex-1'>{children}</div>
      <Footer />
    </div>
  )
}

export default AppLayout
