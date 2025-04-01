import { IMAGE_URL } from '../constants'
import type { ICategory } from '../types/interface/ICategory'
import type { IPaginationRequest } from '../types/interface/response/IPaginationRequest'

export const transitionCategoryOptions = (array: ICategory[]) => {
  return array.length
    ? array.map((item) => {
        return {
          value: String(item.id),
          label: item.name,
        }
      })
    : []
}

export function toURLSearchParams(
  request?: IPaginationRequest,
): URLSearchParams {
  const params = new URLSearchParams()

  request &&
    Object.entries(request).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (key === 'sort' && typeof value === 'string') {
          try {
            const parsedSort = JSON.parse(value)
            if (Array.isArray(parsedSort)) {
              parsedSort.forEach((v) => params.append(key, v))
            } else {
              params.append(key, value)
            }
          } catch {
            params.append(key, value)
          }
        } else if (Array.isArray(value)) {
          value.forEach((v) => params.append(key, v))
        } else {
          params.append(key, value)
        }
      }
    })

  return params
}

export const getImageByName = (name?: string) => {
  if (name) return `${IMAGE_URL}/${name}`
  return ''
}
