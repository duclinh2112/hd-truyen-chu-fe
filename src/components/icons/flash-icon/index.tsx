import React from 'react'

import type { IIconProps } from '../IIconProps'

const IconFlash = ({
  width = '30',
  className,
  color = '#E34141',
}: IIconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={width}
      color={color}
      className={className}
      viewBox='0 0 30 30'
      fill='none'
    >
      <path
        d='M14.9625 2.5C8.06246 2.5 2.46246 8.1 2.46246 15C2.46246 21.9 8.06246 27.5 14.9625 27.5C21.8625 27.5 27.4625 21.9 27.4625 15C27.4625 8.1 21.875 2.5 14.9625 2.5ZM19.65 15.4375L15 20.725L14.45 21.35C13.6875 22.2125 13.0625 21.9875 13.0625 20.825V15.875H10.9375C9.97496 15.875 9.71246 15.2875 10.35 14.5625L15 9.275L15.55 8.65C16.3125 7.7875 16.9375 8.0125 16.9375 9.175V14.125H19.0625C20.025 14.125 20.2875 14.7125 19.65 15.4375Z'
        fill='currentColor'
      />
    </svg>
  )
}

export default IconFlash
