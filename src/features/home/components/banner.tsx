'use client'

import 'swiper/css'

import React from 'react'
import { A11y, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import ImageWrap from '@/components/common/img-wrap'
import AppContainer from '@/components/layouts/container'
import { SLIDER_BANNER } from '@/utils/data'

const Banner = () => {
  return (
    <div className='w-full md:py-4'>
      <AppContainer className='max-md:px-0'>
        <div className='relative'>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            pagination={{
              el: `#pagination`,
              clickable: true,
              bulletActiveClass: 'bullet-active',
            }}
            modules={[Scrollbar, A11y, Pagination]}
          >
            {SLIDER_BANNER.map((item) => (
              <SwiperSlide key={item.id}>
                <ImageWrap
                  src={item.image}
                  paddingTop='44.25%'
                  borderRadius='8px'
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div id='pagination'></div>
        </div>
      </AppContainer>
    </div>
  )
}

export default Banner
