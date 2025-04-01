import { toURLSearchParams } from '@/utils/helpers'
import type { ICategory } from '@/utils/types/interface/ICategory'
import type { IChildCategory } from '@/utils/types/interface/IChildCategory'
import type { IApiResponse } from '@/utils/types/interface/response/IApiResponse'
import type { IDefaultResponse } from '@/utils/types/interface/response/IDefaultReponse'
import type { IPaginationRequest } from '@/utils/types/interface/response/IPaginationRequest'
import type { IPaginationResponse } from '@/utils/types/interface/response/IPaginationResponse'

import fetchApi from '.'

const fetchCategories = async (params?: IPaginationRequest) => {
  const query = toURLSearchParams(params)

  try {
    const res = await fetchApi<IApiResponse<IPaginationResponse<ICategory>>>(
      `categories?${query.toString()}`,
    )
    return res.payload
  } catch (error) {
    console.log(error)
  }
}

const fetchCategoryBySlug = async (slug: string, options?: RequestInit) => {
  try {
    const res = await fetchApi<IDefaultResponse<ICategory>>(
      `categories/${slug}`,
      options,
    )

    return res.payload
  } catch (error) {
    console.log(error)
  }
}

const fetchChildCategories = async (
  params?: IPaginationRequest,
  options?: RequestInit,
) => {
  const query = toURLSearchParams(params)

  try {
    const res = await fetchApi<
      IApiResponse<IPaginationResponse<IChildCategory>>
    >(`child-categories?${query.toString()}`, options)
    return res.payload
  } catch (error) {
    console.log(error)
  }
}

const fetchChildCategoryBySlug = async (
  slug: string,
  options?: RequestInit,
) => {
  try {
    const res = await fetchApi<IDefaultResponse<IChildCategory>>(
      `child-categories/${slug}`,
      options,
    )

    return res.payload
  } catch (error) {
    console.log(error)
  }
}

export {
  fetchCategories,
  fetchCategoryBySlug,
  fetchChildCategories,
  fetchChildCategoryBySlug,
}
