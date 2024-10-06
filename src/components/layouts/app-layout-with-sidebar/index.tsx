import React from 'react'

import Sidebar from '@/components/sidebar'

type AppLayoutWithSidebarProps = {
  children: React.ReactNode
}

const AppLayoutWithSidebar = ({ children }: AppLayoutWithSidebarProps) => {
  return (
    <div className='max-lg grid grid-cols-12 gap-x-4 pb-8'>
      <div className='col-span-12 lg:col-span-9'>{children}</div>
      <div className='col-span-12 lg:col-span-3'>
        <Sidebar />
      </div>
    </div>
  )
}

export default AppLayoutWithSidebar
