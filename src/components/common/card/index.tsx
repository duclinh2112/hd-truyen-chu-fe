import React from 'react'

type CardProps = {
  children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
  return <div className='size-full rounded-2xl bg-card p-4'>{children}</div>
}

export default Card
