import type { IAssets } from './IAsset'
import type { ICategory } from './ICategory'
import type { IChildCategory } from './IChildCategory'

interface IAuthor {
  id: number
  fullName: string
  photoId?: number
  birthday: string
  phone: string
  email: string
}

export interface IComic {
  id: number
  name: string
  slug: string
  description: string
  price?: string
  view: number
  isHot: boolean
  isRecommend: boolean
  isFull: boolean
  image: IAssets
  author: IAuthor
  category: ICategory
  childCategories: IChildCategory[]
  createdAt: string
  updatedAt: string
}
