'use client'

import React from 'react'

import { Input } from '@/components/common/input'
import IconSearch from '@/components/icons/search'

const Search = () => {
  return (
    <div className='hidden h-10 w-[350px] items-center rounded-lg bg-white px-3 lg:flex'>
      <span>
        <IconSearch className='text-main' />
      </span>
      <Input
        placeholder='Tìm kiếm'
        className='rounded-none border-none bg-transparent'
        fullWidth
      />
    </div>
  )
}

export default Search
