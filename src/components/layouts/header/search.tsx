import React from 'react'

import IconSearch from '@/components/icons/search'

const Search = () => {
  return (
    <form action='/search' method='GET'>
      <div className='hidden h-10 w-[350px] items-center rounded-lg bg-white px-3 lg:flex'>
        <span>
          <IconSearch className='text-main' />
        </span>
        <input
          name='q'
          placeholder='Tìm kiếm'
          className='size-full truncate px-3 text-sm text-main'
          autoComplete='off'
        />
      </div>
    </form>
  )
}

export default Search
