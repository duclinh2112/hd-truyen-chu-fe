import { tv } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center justify-center gap-2 font-medium',
  variants: {
    color: {
      primary: '',
      secondary: '',
      success: '',
      danger: '',
    },
    variant: {
      outlined: `border bg-transparent hover:bg-transparent`,
      text: `bg-transparent hover:bg-transparent`,
      default: 'text-white shadow',
    },
    size: {
      sm: 'h-[32px] px-3 text-xs',
      md: 'h-[40px] px-4 text-sm',
      lg: 'h-[48px] px-5 text-base',
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-fit',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
    },
    borderRadius: {
      none: 'rounded-none',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: 'default',
      className: 'bg-primary hover:bg-primary',
    },
    {
      color: 'primary',
      variant: 'outlined',
      className: 'bg-bg-secondary border-primary text-main',
    },
    {
      color: 'primary',
      variant: 'text',
      className: 'text-main',
    },
    {
      color: 'secondary',
      variant: 'default',
      className: 'bg-gray-500 hover:bg-gray-600',
    },
    {
      color: 'secondary',
      variant: 'outlined',
      className: 'text-gray-500 hover:bg-gray-600',
    },
    {
      color: 'secondary',
      variant: 'text',
      className: 'text-gray-500',
    },
    {
      color: 'danger',
      variant: 'default',
      className: 'bg-red-500 text-white hover:bg-red-700',
    },
    {
      color: 'danger',
      variant: 'outlined',
      className: 'border-red-500 text-red-500',
    },
    {
      color: 'danger',
      variant: 'text',
      className: 'text-red-500',
    },
    {
      color: 'success',
      variant: 'default',
      className: 'hover:bg-success-700 bg-success-500 text-white',
    },
    {
      color: 'success',
      variant: 'outlined',
      className: 'border-success-500 text-success-500',
    },
    {
      color: 'success',
      variant: 'text',
      className: 'text-success-500',
    },
  ],
})

export const buttonStyles = { button }
