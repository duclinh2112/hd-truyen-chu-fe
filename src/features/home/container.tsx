import React from 'react'

import AppContainer from '@/components/layouts/container'
import type { ICategory } from '@/utils/types/interface/ICategory'
import type { IComic } from '@/utils/types/interface/IComic'

import Banner from './components/banner'
import Category from './components/category'
import HomeContent from './components/content'

type HomeContainerProps = {
  dataComicRecommends?: IComic[]
  dataComicHots?: IComic[]
  dataComicFulls?: IComic[]
  dataTopComics?: IComic[]
  dataCategories?: ICategory[]
}

const HomeContainer = ({
  dataComicRecommends,
  dataComicHots,
  dataComicFulls,
  dataTopComics,
  dataCategories,
}: HomeContainerProps) => {
  return (
    <>
      <Banner />
      <AppContainer>
        <Category dataCategories={dataCategories} />
        <HomeContent
          dataComicRecommends={dataComicRecommends}
          dataComicHots={dataComicHots}
          dataComicFulls={dataComicFulls}
          dataTopComics={dataTopComics}
        />
      </AppContainer>
    </>
  )
}

export default HomeContainer
