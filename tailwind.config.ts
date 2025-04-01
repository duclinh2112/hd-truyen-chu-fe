import type { Config } from 'tailwindcss'
const { nextui } = require('@nextui-org/react')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        header: '84px',
        footer: '256px',
      },
      minHeight: {
        main: 'calc(100% - 84px - 256px)',
      },
      maxWidth: {
        container: '1440px',
      },
      backgroundColor: {
        header: 'var(--background-header)',
        main: 'var(--background)',
        footer: 'var(--background-footer)',
        card: 'var(--background-card)',
      },
      colors: {
        primary: 'var(--background)',
        header: 'var(--text-header)',
        main: 'var(--text-primary)',
        footer: 'var(--text-header)',
        title: 'var(--text-title)',
        'text-blue': 'var(--text-blue)',
        'text-success': 'var(--color-success)',
        'text-warning': 'var(--color-warning)',
        'text-in-progress': 'var(--color-in-progress)',
        'bg-success': 'var(--bg-success)',
        'bg-warning': 'var(--bg-warning)',
        'bg-in-progress': 'var(--bg-in-progress)',
        'bg-100': 'var(--bg-100)',
        'border-200': 'var(--border-200)',
        'text-900': 'var(--text-900)',
        'text-700': 'var(--text-700)',
        'text-600': 'var(--text-600)',
        'text-500': 'var(--text-500)',
      },
    },
    container: {
      center: true,
      padding: '15px',
    },
    animation: {
      opacity: 'opacity 0.3s ease-out',
      'fade-down': 'fade-down 0.2s ease-out',
      'fade-up': 'fade-up 0.2s ease-in',
      expand: 'expand 0.1s ease-out',
      'floating-down': 'floating-down 0.4s ease-out',
      'floating-up': 'floating-up 0.4s ease-in',
      modal: 'modal 0.2s ease-out',
      'notify-left': 'notify-left 0.1s ease-out',
      'notify-right': 'notify-right 0.1s ease-out',
      'pop-top': 'pop-top 0.2s ease-out',
      'pop-top-left': 'pop-top-left 0.2s ease-out',
      'pop-top-right': 'pop-top-right 0.2s ease-out',
      'pop-bottom': 'pop-bottom 0.2s ease-out',
      'pop-bottom-left': 'pop-bottom-left 0.2s ease-out',
      'pop-bottom-right': 'pop-bottom-right 0.2s ease-out',
      bounce: 'bounce 1s infinite',
    },
    keyframes: {
      opacity: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      'floating-down': {
        '0%': {
          transform: 'translateY(-10%)',
          opacity: '0',
        },
        '20%': {
          opacity: '0',
        },
        '100%': {
          transform: 'translateY(0%)',
          opacity: '1',
        },
      },
      'floating-up': {
        '0%': {
          transform: 'translateY(0%)',
          opacity: '1',
        },
        '20%': {
          opacity: '1',
        },
        '100%': {
          transform: 'translateY(-10%)',
          opacity: '0',
        },
      },
      'fade-down': {
        '0%': {
          transform: 'scaleY(1)',
          opacity: '0',
        },
        '20%': {
          transform: 'scaleY(0.8)',
          opacity: '0',
        },
        '100%': {
          transform: 'scaleY(1)',
          opacity: '1',
        },
      },
      'fade-up': {
        '0%': {
          transform: 'scaleY(1)',
          opacity: '1',
        },
        '100%': {
          transform: 'scaleY(0.8)',
          opacity: '0',
        },
      },
      modal: {
        '0%': {
          transform: 'scale(0.2)',
          opacity: '0',
        },
        '100%': {
          transform: 'scale(1)',
          opacity: '1',
        },
      },
      'pop-bottom': {
        '0%': {
          transform: 'translateX(-50%) scaleY(0.8)',
          opacity: '0',
        },
        '100%': {
          transform: 'translateX(-50%) scaleY(1)',
          opacity: '1',
        },
      },
      'pop-top': {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
      'pop-top-right': {
        '0%': {
          transform:
            'translateX(-100%) translateY(calc(-100% - 12px)) scaleY(0.8)',
          opacity: '0',
        },
        '100%': {
          transform:
            'translateX(-100%) translateY(calc(-100% - 12px)) scaleY(1)',
          opacity: '1',
        },
      },
      'pop-top-left': {
        '0%': {
          transform: 'translateY(calc(-100% - 12px)) scaleY(0.8)',
          opacity: '0',
        },
        '100%': {
          transform: 'translateY(calc(-100% - 12px)) scaleY(1)',
          opacity: '1',
        },
      },
      'pop-bottom-left': {
        '0%': {
          transform: 'scaleY(0.8)',
          opacity: '0',
        },
        '100%': {
          transform: 'scaleY(1)',
          opacity: '1',
        },
      },
      'pop-bottom-right': {
        '0%': {
          transform: 'translateX(-100%) scaleY(0.8)',
          opacity: '0',
        },
        '100%': {
          transform: 'translateX(-100%) scaleY(1)',
          opacity: '1',
        },
      },
      'notify-right': {
        '0%': {
          transform: 'translate3d(100%, 0, 0)',
          opacity: '0',
        },
        '100%': {
          transform: 'translate3d(0, 0, 0)',
          opacity: '1',
        },
      },
      'notify-left': {
        '0%': {
          transform: 'translate3d(-100%, 0, 0)',
          opacity: '0',
        },
        '100%': {
          transform: 'translate3d(0, 0, 0)',
          opacity: '1',
        },
      },
      bounce: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-15px)' },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {},
        dark: {
          layout: {},
          colors: {},
        },
      },
    }),
  ],
}
export default config
