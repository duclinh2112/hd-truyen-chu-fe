import ItemComic from '@/components/comic/item-comic'
import Breadcrumbs from '@/components/common/breadcrumb'
import Card from '@/components/common/card'
import { Empty } from '@/components/common/empty'
import TextWithIcon from '@/components/common/text-with-icon'
import IconFlash from '@/components/icons/flash-icon'
import AppContainer from '@/components/layouts/container'
import PaginationComic from '@/features/comic/components/pagination'
import { fetchComics } from '@/services/fetch/comic'
import type { IComic } from '@/utils/types/interface/IComic'

type Props = {
  searchParams: { q: string }
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = searchParams
  const dataComics = await fetchComics({
    filter: JSON.stringify({ q }),
  })

  return (
    <AppContainer>
      <Breadcrumbs title='Tìm kiếm' />
      <div className='pb-4'>
        <Card>
          <div className='mb-6 flex items-center gap-1'>
            <TextWithIcon icon={<IconFlash />} content={`Kết quả tìm kiếm:`} />
            <span className='font-semibold'>{q}</span>
          </div>
          {dataComics?.content.length ? (
            <div className='grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5'>
              {dataComics?.content.map((item: IComic, idx: number) => (
                <div key={idx}>
                  <ItemComic item={item} />
                </div>
              ))}
            </div>
          ) : (
            <Empty description='Không có dữ liệu' />
          )}
          {dataComics?.totalPages && dataComics?.totalPages > 1 ? (
            <div className='mt-10 flex items-center justify-center'>
              <PaginationComic dataComics={dataComics} />
            </div>
          ) : null}
        </Card>
      </div>
    </AppContainer>
  )
}
