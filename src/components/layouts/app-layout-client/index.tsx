'use client'

import type { ReactNode } from 'react'
import React, { useEffect } from 'react'

import { setAuth } from '@/stores/authSlice'
import { useAppDispatch } from '@/stores/configureStore'

import Footer from '../footer'
import Header from '../header'

type AppLayoutClientProps = {
  session: any
  children: ReactNode
}

const AppLayoutClient = ({ session, children }: AppLayoutClientProps) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setAuth(session.user))
  }, [JSON.stringify(session)])

  return (
    <div className='size-full'>
      <Header session={session} />
      <div className='flex-1'>{children}</div>
      <Footer />
    </div>
  )
}

export default AppLayoutClient
