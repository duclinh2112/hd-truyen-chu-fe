import './globals.css'

import { NextUIProvider } from '@nextui-org/react'
import type { Metadata, Viewport } from 'next'
import { Inter, Roboto } from 'next/font/google'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['vietnamese'], variable: '--font-inter' })
const roboto = Roboto({
  subsets: ['vietnamese'],
  variable: '--font-roboto',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Truyen3s.vn | Tuyển tập truyện chữ hay',
  description:
    'Khám phá thế giới truyện chữ hấp dẫn, phong phú với các thể loại kiếm hiệp, tiên hiệp, ngôn tình và nhiều hơn nữa.',
  metadataBase: new URL('https://hd-truyen-chu-hay.vercel.app/'),
  keywords: [
    'truyện chữ',
    'truyện online',
    'đọc truyện chữ',
    'kiếm hiệp',
    'tiên hiệp',
    'ngôn tình',
    'truyện hay',
    'The Light',
    'truyen3s',
    'truyen3s.vn',
    'comic',
    'nền tảng đọc truyện',
  ].join(', '),
  openGraph: {
    title: 'Truyen3s.vn | Tuyển tập truyện chữ hay',
    description:
      'Khám phá thế giới truyện chữ hấp dẫn, phong phú với các thể loại kiếm hiệp, tiên hiệp, ngôn tình và nhiều hơn nữa.',
    url: '/',
    type: 'website',
    images: [
      {
        url: '/assets/images/img-comic-1.png',
        width: 1200,
        height: 630,
        alt: 'Truyen3s.vn | Tuyển tập truyện chữ hay',
      },
    ],
    siteName: 'Truyen3s.vn - Tuyển tập truyện chữ hay',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  interactiveWidget: 'resizes-content',
}

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}
export default async function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html
      lang='vi'
      data-theme='light'
      className={`${inter.variable} ${roboto.variable}`}
    >
      <body className={inter.className}>
        <NextUIProvider>{children}</NextUIProvider>
        <Toaster
          toastOptions={{
            duration: 4000,
            style: {
              fontSize: '14px',
            },
          }}
        />
      </body>
    </html>
  )
}
