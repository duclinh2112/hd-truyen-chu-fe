import React from 'react'

const Loading = () => {
  return (
    <div className='fixed left-0 top-0 z-[9999] flex h-screen w-screen items-center justify-center bg-[#ccc]'>
      <div className='flex space-x-2'>
        <span className='loading-dot size-4 animate-bounce rounded-full bg-header'></span>
        <span className='loading-dot size-4 animate-bounce rounded-full bg-header [animation-delay:0.2s]'></span>
        <span className='loading-dot size-4 animate-bounce rounded-full bg-header [animation-delay:0.4s]'></span>
      </div>
    </div>
  )
}

export default Loading
