import type { ReactNode } from 'react'
import React from 'react'

import IconLoading from '@/components/icons/loading'

import { buttonStyles } from './style'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outlined' | 'text'
  color?: 'primary' | 'secondary' | 'danger' | 'success'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  /**
   * @deprecated Use className instead.
   */
  classes?: React.ComponentProps<'button'>['className']
  href?: string
  fullWidth?: boolean
  disabled?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
  children: ReactNode
  onClick?: () => void
  borderRadius?: 'none' | 'md' | 'lg' | 'full' | number
  loading?: boolean
}
/**
 * To trigger an operation.
 * ### When To Use
 * A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.
 *
 * ### Example
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  color = 'primary',
  size = 'md',
  type = 'button',
  classes = '',
  className = '',
  href = '',
  fullWidth = false,
  disabled = false,
  startIcon = null,
  endIcon = null,
  children,
  onClick,
  borderRadius = 'md',
  loading = false,
  style,
  ...rest
}) => {
  const isBorderInclude = ['none', 'md', 'lg', 'full'].includes(
    borderRadius.toString(),
  )

  const loadingSize = {
    sm: 12,
    md: 16,
    lg: 20,
  }

  const renderButton = (
    <button
      className={buttonStyles.button({
        variant,
        color,
        size,
        fullWidth,
        disabled,
        borderRadius: typeof borderRadius === 'number' ? 'none' : borderRadius,
        className: className + classes,
      })}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      style={{
        borderRadius: isBorderInclude ? undefined : +borderRadius,
        ...style,
      }}
      {...rest}
    >
      {loading ? (
        <IconLoading width={loadingSize[size]} className='mr-1' />
      ) : (
        startIcon && <span className=''>{startIcon}</span>
      )}
      {children}
      {!loading && endIcon && <span>{endIcon}</span>}
    </button>
  )

  if (href) {
    return <a href={href}>{renderButton}</a>
  }
  return renderButton
}
