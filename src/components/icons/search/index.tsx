import React from 'react'

import type { IIconProps } from '../IIconProps'

const IconSearch = ({
  width = '17',
  height = '16',
  color = 'currentColor',
  className,
}: IIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 17 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      color={color}
      className={className}
    >
      <path
        d='M7.98399 14C11.4818 14 14.3173 11.1645 14.3173 7.66668C14.3173 4.16887 11.4818 1.33334 7.98399 1.33334C4.48619 1.33334 1.65066 4.16887 1.65066 7.66668C1.65066 11.1645 4.48619 14 7.98399 14Z'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.984 14.6667L13.6507 13.3333'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default IconSearch
