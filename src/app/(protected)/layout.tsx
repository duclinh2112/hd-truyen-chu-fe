import React from 'react'

import { auth } from '@/auth'
import AppLayoutClient from '@/components/layouts/app-layout-client'

import AppProvider from '../app-provider'

interface ProtectedLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  const session = await auth()

  return (
    <AppProvider>
      <AppLayoutClient session={session}>{children}</AppLayoutClient>
    </AppProvider>
  )
}
