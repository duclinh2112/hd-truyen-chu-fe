import type { HTMLAttributes } from 'react'
import React from 'react'

type TextWithIconProps = {
  icon: React.ReactNode
  content: React.ReactNode
  className?: HTMLAttributes<HTMLElement>['className']
}

const TextWithIcon = ({ icon, content, className }: TextWithIconProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className='inline-flex items-center'>{icon}</span>
      <div>{content}</div>
    </div>
  )
}

export default TextWithIcon
