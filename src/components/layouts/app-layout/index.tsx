import type { Session } from 'next-auth'
import type { ReactNode } from 'react'
import React from 'react'

import Footer from '../footer'
import Header from '../header'

type AppLayoutProps = {
  session: Session | null
  children: ReactNode
}

const AppLayout = ({ session, children }: AppLayoutProps) => {
  return (
    <div className='size-full'>
      <Header session={session} />
      <div className='flex-1'>{children}</div>
      <Footer />
    </div>
  )
}

export default AppLayout
