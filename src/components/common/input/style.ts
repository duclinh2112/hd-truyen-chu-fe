import { tv } from 'tailwind-variants'

const wrapper = tv({
  base: 'text-sm text-main',
  variants: {
    fullWidth: {
      true: 'w-full',
      false: 'w-fit',
    },
  },
})

const container = tv({
  base: 'group relative flex items-center gap-2 border border-border-200 px-3 hover:border-primary',
  variants: {
    size: {
      sm: 'h-[32px]',
      md: 'h-[40px]',
      lg: 'h-[48px]',
    },
    disabled: {
      true: 'cursor-not-allowed bg-bg-100',
    },
    loading: {
      true: 'cursor-not-allowed bg-bg-100',
    },
    addonBefore: {
      true: 'rounded-l-none',
      false: 'rounded-l-lg',
    },
    addonAfter: {
      true: 'rounded-r-none',
      false: 'rounded-r-lg',
    },
  },
})

const sizeContainer = tv({
  base: 'flex items-center rounded-lg bg-white',
  variants: {
    size: {
      sm: 'h-[32px]',
      md: 'h-[40px]',
      lg: 'h-[48px]',
    },
    disabled: {
      true: 'opacity-70',
      false: 'opacity-100',
    },
  },
})

const input = tv({
  base: 'size-full truncate text-main',
  variants: {
    disabled: {
      true: 'cursor-not-allowed bg-bg-100',
      false: 'bg-white',
    },
    loading: {
      true: '',
    },
  },
})
const tvAddonBefore = tv({
  base: 'flex h-full items-center justify-center rounded-lg rounded-r-none border',
  variants: {
    string: {
      true: 'px-2',
      false: 'border-0',
    },
    disabled: {
      true: 'cursor-not-allowed bg-bg-100',
    },
    loading: {
      true: 'cursor-not-allowed bg-bg-100',
    },
  },
})
const tvAddonAfter = tv({
  base: 'flex h-full items-center justify-center rounded-l-none',
  variants: {
    string: {
      true: 'px-2',
      false: 'border-0',
    },
    disabled: {
      true: 'cursor-not-allowed bg-bg-100',
    },
    loading: {
      true: 'cursor-not-allowed bg-bg-100',
    },
  },
})

const iconClear = tv({
  base: 'invisible cursor-pointer',
  variants: {
    show: {
      true: 'pl-1 group-hover:visible',
    },
  },
})

export const inputStyles = {
  wrapper,
  container,
  sizeContainer,
  input,
  tvAddonBefore,
  tvAddonAfter,
  iconClear,
}
