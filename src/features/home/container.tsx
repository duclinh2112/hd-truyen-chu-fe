import React from 'react'

import AppContainer from '@/components/layouts/container'

import Banner from './components/banner'
import Category from './components/category'
import HomeContent from './components/content'

const HomeContainer = () => {
  return (
    <>
      <Banner />
      <AppContainer>
        <Category />
        <HomeContent />
      </AppContainer>
    </>
  )
}

export default HomeContainer
