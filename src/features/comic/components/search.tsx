import React from 'react'

import Card from '@/components/common/card'
import type { IChildCategory } from '@/utils/types/interface/IChildCategory'

import ChildCategory from './search/child-category'
import Status from './search/status'

type SearchProps = {
  params?: { category: string; categoryChild?: string }
  dataChildCategories?: IChildCategory[]
}

const Search = ({ params, dataChildCategories }: SearchProps) => {
  return (
    <Card>
      <div className='flex flex-col gap-y-6'>
        {params?.category && (
          <ChildCategory
            params={params}
            dataChildCategories={dataChildCategories}
          />
        )}
        <Status />
      </div>
    </Card>
  )
}

export default Search
