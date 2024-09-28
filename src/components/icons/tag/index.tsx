import React from 'react'

import type { IIconProps } from '../IIconProps'

const IconTag = ({
  width = '24',
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
      viewBox='0 0 25 24'
      fill='none'
    >
      <path
        opacity='0.4'
        d='M4.67 15.3L9.2 19.83C11.06 21.69 14.08 21.69 15.95 19.83L20.34 15.44C22.2 13.58 22.2 10.56 20.34 8.68999L15.8 4.16999C14.85 3.21999 13.54 2.70999 12.2 2.77999L7.2 3.01999C5.2 3.10999 3.61 4.69999 3.51 6.68999L3.27 11.69C3.21 13.04 3.72 14.35 4.67 15.3Z'
        fill='currentColor'
      />
      <path
        d='M10 12.38C11.5906 12.38 12.88 11.0906 12.88 9.5C12.88 7.90942 11.5906 6.62 10 6.62C8.40942 6.62 7.12 7.90942 7.12 9.5C7.12 11.0906 8.40942 12.38 10 12.38Z'
        fill='currentColor'
      />
      <path
        d='M13.5 17.75C13.31 17.75 13.12 17.68 12.97 17.53C12.68 17.24 12.68 16.76 12.97 16.47L16.97 12.47C17.26 12.18 17.74 12.18 18.03 12.47C18.32 12.76 18.32 13.24 18.03 13.53L14.03 17.53C13.88 17.68 13.69 17.75 13.5 17.75Z'
        fill='currentColor'
      />
    </svg>
  )
}

export default IconTag
