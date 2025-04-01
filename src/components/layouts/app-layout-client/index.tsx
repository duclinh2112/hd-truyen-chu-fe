import type { ReactNode } from 'react'
import React from 'react'

import AppProvider from '@/app/app-provider'

import AppLayout from '../app-layout'

type AppLayoutClientProps = {
  children: ReactNode
}

const AppLayoutClient = ({ children }: AppLayoutClientProps) => {
  return (
    <AppProvider>
      <AppLayout>{children}</AppLayout>
    </AppProvider>
  )
}

export default AppLayoutClient
