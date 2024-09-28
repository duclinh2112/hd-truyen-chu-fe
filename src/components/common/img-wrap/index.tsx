import Image from 'next/image'
import React from 'react'

type ImageWrapProps = {
  src: string
  alt?: string
  paddingTop?: string
  borderRadius?: string
}

const ImageWrap = ({
  src,
  alt,
  paddingTop = '56.25%',
  borderRadius,
}: ImageWrapProps) => {
  return (
    <div
      className={`relative h-auto overflow-hidden bg-cover`}
      style={{ backgroundPosition: '50% 50%', paddingTop: paddingTop }}
    >
      <Image
        fill
        src={src}
        alt={alt || ''}
        style={{ borderRadius, objectFit: 'cover' }}
      />
    </div>
  )
}

export default ImageWrap
