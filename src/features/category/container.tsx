import React from 'react'

import Card from '@/components/common/card'
import AppContainer from '@/components/layouts/container'
import { CATEGORIES, CHILD_CATEGORIES, COMICS } from '@/utils/data'

import Breadcrumbs from './components/breadcrumb'
import CategoryList from './components/category'
import Comic from './components/comic'

type CategoryContainerProps = {
  params: { slug: string; slugChild?: string }
}

const CategoryContainer = ({ params }: CategoryContainerProps) => {
  const title = params.slugChild
    ? CHILD_CATEGORIES.find((item) => item.slug == params.slugChild)?.title
    : CATEGORIES.find((item) => item.slug == params.slug)?.title
  return (
    <>
      <Breadcrumbs title={title || ''} />
      <div className='pb-8'>
        <AppContainer>
          <Card>
            <CategoryList
              slug={params.slug}
              slugChild={params.slugChild || ''}
            />
            <Comic data={COMICS} />
          </Card>
        </AppContainer>
      </div>
    </>
  )
}

export default CategoryContainer
