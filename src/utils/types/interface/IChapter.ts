import type { IComic } from './IComic'

export interface IChapter {
  id: number
  stt: number
  name: string
  slug: string
  content: string
  comic: IComic
}

export interface IReadChapter {
  data: IChapter
  prevChapter?: {
    id: number
  }
  nextChapter?: {
    id: number
  }
}
