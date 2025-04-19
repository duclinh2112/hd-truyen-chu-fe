import React from 'react'

import { auth } from '@/auth'
import AppLayout from '@/components/layouts/app-layout'

interface PublicLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function PublicLayout({ children }: PublicLayoutProps) {
  const session = await auth()
  return <AppLayout session={session}>{children}</AppLayout>
}
