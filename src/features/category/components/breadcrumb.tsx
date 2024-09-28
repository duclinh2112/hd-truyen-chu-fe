'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

import Card from '@/components/common/card'
import AppContainer from '@/components/layouts/container'
import { NAVIGATION } from '@/utils/constants'
import { CATEGORIES, CHILD_CATEGORIES } from '@/utils/data'

type PathArray = {
  breadcrumb: string
  href: string
}

type BreadcrumbsProps = {
  title: string
}

const Breadcrumbs = ({ title }: BreadcrumbsProps) => {
  const pathName = usePathname()

  const breadcrumbs: PathArray[] = React.useMemo(() => {
    const linkPath = pathName.split('/').filter((path) => path && path !== 'p')

    return linkPath.map((path, i) => {
      // Find the matching category or child category by slug
      const category =
        CATEGORIES.find((item) => item.slug === path) ||
        CHILD_CATEGORIES.find((item) => item.slug === path)

      return {
        breadcrumb: category ? category.title : path.replace('-', ' '),
        href: '/' + linkPath.slice(0, i + 1).join('/'),
      }
    })
  }, [pathName])

  return (
    <div className='py-4'>
      <AppContainer>
        <Card>
          <div>
            <ul className='m-0 block flex-row p-0 sm:flex'>
              <li className='m-0 inline-block w-auto p-0'>
                <a
                  href='/'
                  className='inline-block font-medium capitalize text-text-blue hover:underline'
                >
                  Trang Chủ
                </a>
                <span className='inline-block px-2 text-sm font-light text-text-blue'>
                  {'>'}
                </span>
              </li>
              {breadcrumbs?.length > 0 &&
                breadcrumbs.map((crumb, idx) => {
                  const isLast = idx + 1 >= breadcrumbs.length
                  const parent = NAVIGATION.find(
                    (item) => item.path == crumb.href,
                  )
                  return (
                    <li key={idx} className='m-0 inline-block w-auto p-0'>
                      {!isLast && (
                        <>
                          <a
                            href={crumb.href}
                            className={`inline-block font-medium capitalize text-text-blue ${
                              !isLast ? 'hover:underline' : ''
                            }`}
                          >
                            {parent ? parent.title : crumb.breadcrumb}
                          </a>
                          <span className='inline-block px-2 text-sm font-light text-text-blue'>
                            {'>'}
                          </span>
                        </>
                      )}
                    </li>
                  )
                })}
              <span className='inline-block font-medium capitalize text-text-blue'>
                {title}
              </span>
            </ul>
          </div>
        </Card>
      </AppContainer>
    </div>
  )
}

export default Breadcrumbs
