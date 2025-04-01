import { BASE_URL_API } from '@/utils/constants'

const fetchApi = async <T>(url: string, options?: RequestInit) => {
  const response = await fetch(`${BASE_URL_API}/${url}`, options)
  return response.json() as T
}

export default fetchApi
