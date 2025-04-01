import { toURLSearchParams } from '@/utils/helpers'
import type { IComic } from '@/utils/types/interface/IComic'
import type { IApiResponse } from '@/utils/types/interface/response/IApiResponse'
import type { IDefaultResponse } from '@/utils/types/interface/response/IDefaultReponse'
import type { IPaginationRequest } from '@/utils/types/interface/response/IPaginationRequest'
import type { IPaginationResponse } from '@/utils/types/interface/response/IPaginationResponse'

import fetchApi from '.'

const fetchComics = async (
  params?: IPaginationRequest,
  options?: RequestInit,
) => {
  const query = toURLSearchParams(params)

  try {
    const res = await fetchApi<IApiResponse<IPaginationResponse<IComic>>>(
      `comics?${query.toString()}`,
      options,
    )
    return res.payload
  } catch (error) {
    console.log(error)
  }
}

const fetchComicsBySlug = async (slug: string, options?: RequestInit) => {
  try {
    const res = await fetchApi<IDefaultResponse<IComic>>(
      `comics/${slug}`,
      options,
    )

    return res.payload
  } catch (error) {
    console.log(error)
  }
}

export { fetchComics, fetchComicsBySlug }
