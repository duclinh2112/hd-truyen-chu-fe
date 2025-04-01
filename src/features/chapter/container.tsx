import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/common/button'
import Card from '@/components/common/card'
import TextWithIcon from '@/components/common/text-with-icon'
import IconFlash2 from '@/components/icons/flash'
import AppContainer from '@/components/layouts/container'

import ListChapters from './components/list'

const ChapterContainer = () => {
  return (
    <div className='py-8'>
      <AppContainer>
        <Card>
          <div className='mb-8 flex items-center justify-between'>
            <TextWithIcon
              icon={<IconFlash2 />}
              content={
                <h3 className='text-[24px] font-semibold leading-[32px] text-main'>
                  Danh sách chương của bạn
                </h3>
              }
            />
            <Link href={'/post/create'}>
              <Button>Viết chương mới</Button>
            </Link>
          </div>
          <ListChapters />
        </Card>
      </AppContainer>
    </div>
  )
}

export default ChapterContainer
