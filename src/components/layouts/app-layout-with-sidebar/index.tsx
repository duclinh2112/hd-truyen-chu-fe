import React from 'react'

import Sidebar from '@/components/sidebar'

type AppLayoutWithSidebarProps = {
  children: React.ReactNode
}

const AppLayoutWithSidebar = ({ children }: AppLayoutWithSidebarProps) => {
  return (
    <div className='grid grid-cols-12 gap-4'>
      <div className='col-span-12 lg:col-span-9'>{children}</div>
      <div className='col-span-12 lg:col-span-3'>
        <Sidebar />
      </div>
    </div>
  )
}

export default AppLayoutWithSidebar
