export interface ICategory {
  id: string | number
  title: string
  slug: string
  parent?: ICategory
}
