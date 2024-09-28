import type { IIconProps } from '../IIconProps'

const IconArrowRight = ({
  width = 16,
  color = '#292D32',
  className,
}: IIconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={width}
      color={color}
      className={className}
      viewBox='0 0 17 16'
      fill='none'
    >
      <path
        d='M6.44 13.28L10.7867 8.9333C11.3 8.41997 11.3 7.57997 10.7867 7.06664L6.44 2.71997'
        stroke='currentColor'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default IconArrowRight
