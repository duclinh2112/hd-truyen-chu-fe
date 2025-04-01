import React from 'react'

import AppLayout from '@/components/layouts/app-layout'

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
  return (
    <AppProvider>
      <AppLayout>{children}</AppLayout>
    </AppProvider>
  )
}
