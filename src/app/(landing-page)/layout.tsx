import React from 'react'

import { auth } from '@/auth'
import AppLayout from '@/components/layouts/app-layout'

interface LandingPageLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function LandingPageLayout({
  children,
}: LandingPageLayoutProps) {
  const session = await auth()
  return <AppLayout session={session}>{children}</AppLayout>
}
