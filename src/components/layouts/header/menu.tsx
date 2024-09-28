'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

import { NAVIGATION } from '@/utils/constants'

const Menu = () => {
  const pathname = usePathname()
  return (
    <ul className='flex items-center gap-10'>
      {NAVIGATION.map((item, key) => {
        const active = pathname.split('/', 2).join('/') === item.path
        return (
          <li key={key}>
            <a
              href={item.path}
              className={`text-header ${
                active ? 'opacity-100' : 'opacity-80'
              } hover:opacity-100`}
            >
              {item.title}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
