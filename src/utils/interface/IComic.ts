import type { IAsset } from './IAsset'

export interface IComic {
  id: string | number
  title: string
  slug: string
  view: string
  image: IAsset
}
