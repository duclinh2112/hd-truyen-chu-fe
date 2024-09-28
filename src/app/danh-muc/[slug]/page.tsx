import React from 'react'

import AppLayoutCategory from '@/components/layouts/app-layout-category'
import CategoryContainer from '@/features/category/container'

type Props = {
  params: { slug: string }
  searchParams: { page: string }
}

const CategoryPage = ({ params }: Props) => {
  return (
    <AppLayoutCategory>
      <CategoryContainer params={params} />
    </AppLayoutCategory>
  )
}

export default CategoryPage
