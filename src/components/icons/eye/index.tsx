import React from 'react'

import type { IIconProps } from '../IIconProps'

const IconEye = ({ width = 16, color = '#292D32', className }: IIconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={width}
      color={color}
      className={className}
      viewBox='0 0 11 10'
      fill='none'
    >
      <path
        d='M6.99166 5C6.99166 5.825 6.325 6.49166 5.5 6.49166C4.675 6.49166 4.00833 5.825 4.00833 5C4.00833 4.175 4.675 3.50833 5.5 3.50833C6.325 3.50833 6.99166 4.175 6.99166 5Z'
        stroke='currentColor'
        strokeWidth='0.625'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.5 8.44582C6.97083 8.44582 8.34166 7.57915 9.29583 6.07915C9.67083 5.49165 9.67083 4.50415 9.29583 3.91665C8.34166 2.41665 6.97083 1.54999 5.5 1.54999C4.02916 1.54999 2.65833 2.41665 1.70416 3.91665C1.32916 4.50415 1.32916 5.49165 1.70416 6.07915C2.65833 7.57915 4.02916 8.44582 5.5 8.44582Z'
        stroke='currentColor'
        strokeWidth='0.625'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default IconEye
