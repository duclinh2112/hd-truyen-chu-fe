import HomeContainer from '@/features/home/container'
import { fetchCategories } from '@/services/fetch/category'
import { fetchComics } from '@/services/fetch/comic'

export default async function HomePage() {
  const fetchComicData = async ({
    filter,
    sort,
  }: {
    filter: any
    sort: string[]
  }) => {
    return await fetchComics(
      {
        limit: 12,
        filter: JSON.stringify(filter),
        sort,
      },
      {
        cache: 'force-cache',
      },
    )
  }

  const [
    dataComicRecommends,
    dataComicHots,
    dataComicFulls,
    dataCategories,
    dataTopComics,
  ] = await Promise.all([
    fetchComicData({
      filter: { isRecommend: true },
      sort: ['["createdAt", "DESC"]'],
    }),
    fetchComicData({
      filter: { isHot: true },
      sort: ['["createdAt", "DESC"]'],
    }),
    fetchComicData({
      filter: { isFull: true },
      sort: ['["createdAt", "DESC"]'],
    }),
    fetchCategories({
      limit: 10,
      sort: ['["createdAt", "DESC"]'],
    }),
    fetchComics({
      limit: 10,
      sort: ['["view", "DESC"]'],
    }),
  ])

  return (
    <HomeContainer
      dataComicRecommends={dataComicRecommends?.content}
      dataComicHots={dataComicHots?.content}
      dataComicFulls={dataComicFulls?.content}
      dataCategories={dataCategories?.content}
      dataTopComics={dataTopComics?.content}
    />
  )
}
