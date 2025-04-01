import type { ChangeEvent } from 'react'
import React from 'react'

interface TextAreaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  rows?: number
  placeholder?: string
  className?: string
  defaultValue?: string
  register?: object
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const TextArea = ({
  rows = 4,
  placeholder = 'Enter description',
  className = '',
  defaultValue,
  disabled = false,
  register = {},
  onChange,
  ...rest
}: TextAreaProps) => {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className={`w-full rounded-lg border border-border-200 p-2 text-sm text-main hover:border-primary disabled:cursor-pointer ${
        disabled ? 'bg-bg-100' : 'bg-bg-secondary'
      } ${className}`}
      onChange={onChange}
      style={{
        cursor: disabled ? 'not-allowed' : 'text',
      }}
      disabled={disabled}
      {...register}
      {...rest}
    />
  )
}
