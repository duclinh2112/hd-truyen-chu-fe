import React from 'react'

import type { IIconProps } from '../IIconProps'

const IconFlash2 = ({
  width = '32',
  className,
  color = '#64748B',
}: IIconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={width}
      color={color}
      className={className}
      viewBox='0 0 33 32'
      fill='none'
    >
      <path
        d='M16.5 4.89334V27.1067L15.4333 28.32C13.9533 30 12.74 29.5467 12.74 27.3067V17.7067H8.62002C6.75335 17.7067 6.23335 16.56 7.47335 15.16L16.5 4.89334Z'
        fill='currentColor'
      />
      <path
        opacity='0.4'
        d='M25.5267 16.84L16.5 27.1067V4.89333L17.5667 3.68C19.0467 2 20.26 2.45333 20.26 4.69333V14.2933H24.38C26.2467 14.2933 26.7667 15.44 25.5267 16.84Z'
        fill='currentColor'
      />
    </svg>
  )
}

export default IconFlash2
