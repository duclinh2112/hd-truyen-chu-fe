import type { ReactNode } from 'react'
import React from 'react'

import Footer from '../footer'
import Header from '../header'

type AppLayoutProps = {
  children: ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className='size-full'>
      <Header />
      <div className='flex-1'>{children}</div>
      <Footer />
    </div>
  )
}

export default AppLayout
