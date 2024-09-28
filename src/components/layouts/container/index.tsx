import type { HTMLAttributes, ReactNode } from 'react'
import React from 'react'

type AppContainerProps = {
  className?: HTMLAttributes<HTMLElement>['className']
  children: ReactNode
}

const AppContainer = ({ children, className = '' }: AppContainerProps) => {
  return (
    <div className={`mx-auto w-full max-w-container max-md:px-3 ${className}`}>
      {children}
    </div>
  )
}

export default AppContainer
