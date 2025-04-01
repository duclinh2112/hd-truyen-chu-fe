import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/common/button'
import Card from '@/components/common/card'
import TextWithIcon from '@/components/common/text-with-icon'
import AppContainer from '@/components/layouts/container'

import FormCreatePost from './components/form'

const CreatePostContainer = () => {
  return (
    <div className='py-8'>
      <AppContainer>
        <Card>
          <div className='mb-8 flex items-center justify-between'>
            <TextWithIcon
              content={
                <h3 className='text-[24px] font-semibold leading-[32px] text-main'>
                  Viết truyện mới
                </h3>
              }
            />
            <Link href={'/post'}>
              <Button>Quay lại danh sách</Button>
            </Link>
          </div>
          <FormCreatePost />
        </Card>
      </AppContainer>
    </div>
  )
}

export default CreatePostContainer
