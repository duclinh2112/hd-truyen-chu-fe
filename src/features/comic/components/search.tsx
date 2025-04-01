import React from 'react'

import Card from '@/components/common/card'

import ChildCategory from './search/child-category'
import Status from './search/status'

type SearchProps = {
  params?: { category: string; categoryChild?: string }
}

const Search = ({ params }: SearchProps) => {
  return (
    <Card>
      <div className='flex flex-col gap-y-6'>
        {params?.category && <ChildCategory params={params} />}
        <Status />
      </div>
    </Card>
  )
}

export default Search
