import type { ICategory } from './ICategory'

export interface IChildCategory extends ICategory {
  category: ICategory
}
