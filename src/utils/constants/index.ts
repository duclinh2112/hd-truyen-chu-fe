import type { IMenu } from '../types/interface/IMenu'

export const COOKIE_NAME = 'NEXT_LOCALE'
export const BASE_URL_API = 'http://localhost:3001/api/v1'
export const IMAGE_URL = `${BASE_URL_API}/assets`

export const NAVIGATION: IMenu[] = [
  {
    title: 'Trang chủ',
    path: '/',
  },
  // {
  //   title: 'Danh mục',
  //   path: '/danh-muc',
  // },
  {
    title: 'Danh sách truyện',
    path: '/danh-sach',
  },
]
