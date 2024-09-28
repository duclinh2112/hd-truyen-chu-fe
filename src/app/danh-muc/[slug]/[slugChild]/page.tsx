import React from 'react'

import AppLayoutCategory from '@/components/layouts/app-layout-category'
import CategoryContainer from '@/features/category/container'

type Props = {
  params: { slug: string; slugChild: string }
}

const ChildCategoryPage = ({ params }: Props) => {
  return (
    <AppLayoutCategory>
      <CategoryContainer params={params} />
    </AppLayoutCategory>
  )
}

export default ChildCategoryPage
