import { toURLSearchParams } from '@/utils/helpers'
import type { IChapter, IReadChapter } from '@/utils/types/interface/IChapter'
import type { IApiResponse } from '@/utils/types/interface/response/IApiResponse'
import type { IDefaultResponse } from '@/utils/types/interface/response/IDefaultReponse'
import type { IPaginationRequest } from '@/utils/types/interface/response/IPaginationRequest'
import type { IPaginationResponse } from '@/utils/types/interface/response/IPaginationResponse'

import fetchApi from '.'

const fetchChapters = async (
  params: IPaginationRequest,
  options?: RequestInit,
) => {
  const query = toURLSearchParams(params)

  try {
    const res = await fetchApi<IApiResponse<IPaginationResponse<IChapter>>>(
      `chapters?${query.toString()}`,
      options,
    )

    return res.payload
  } catch (error) {
    console.log(error)
  }
}

const fetchFirstChapter = async (slug: string, options?: RequestInit) => {
  try {
    const res = await fetchApi<IDefaultResponse<IChapter>>(
      `chapters/first/${slug}`,
      options,
    )

    return res.payload
  } catch (error) {
    console.log(error)
  }
}

const fetchReadChapter = async (
  id: number,
  slug: string,
  options?: RequestInit,
) => {
  try {
    const res = await fetchApi<IDefaultResponse<IReadChapter>>(
      `chapters/read/${id}?slug=${slug}`,
      options,
    )

    return res.payload
  } catch (error) {
    console.log(error)
  }
}

const fetchChapterById = async (id: string, options?: RequestInit) => {
  try {
    const res = await fetchApi<IDefaultResponse<IChapter>>(
      `chapters/${id}`,
      options,
    )

    return res.payload
  } catch (error) {
    console.log(error)
  }
}

export { fetchChapterById, fetchChapters, fetchFirstChapter, fetchReadChapter }
