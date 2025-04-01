'use client'

import Link from 'next/link'
import React from 'react'

import ImageWrap from '@/components/common/img-wrap'
import { Table } from '@/components/common/table'
import type { ColumnProps } from '@/components/common/table/types'
import IconActionEdit from '@/components/icons/action-edit'
import IconEye from '@/components/icons/eye'
import { CATEGORIES, CHILD_CATEGORIES, COMICS } from '@/utils/data'

const ListPosts = () => {
  const categories = CATEGORIES[1]
  const childCategories = CHILD_CATEGORIES.filter(
    (item) => item.parent?.id == categories.id,
  )

  const columns: ColumnProps[] = [
    {
      title: 'STT',
      dataIndex: 'index',
      key: 'index',
      width: '80px',
      render: (_text, _record, index) => {
        return index + 1
      },
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'image',
      key: 'image',
      width: '150px',
      render: (image, record) => {
        return (
          <div className='w-[150px]'>
            <ImageWrap
              src={`/assets/images/${image.name}`}
              alt={record.title}
              borderRadius='12px'
              paddingTop='113%'
            />
          </div>
        )
      },
    },
    {
      title: 'Tên truyện',
      dataIndex: 'title',
      key: 'title',
      width: '250px',
    },
    {
      title: 'Danh mục',
      dataIndex: 'category',
      key: 'category',
      width: '150px',
      render: () => {
        return categories.title
      },
    },
    {
      title: 'Thể loại',
      dataIndex: 'childCategory',
      key: 'childCategory',
      width: '200px',
      render: () => {
        return childCategories.map((item, idx) => {
          return item.title + (idx < childCategories.length - 1 ? ', ' : '')
        })
      },
    },
    {
      title: 'Số lượt xem',
      dataIndex: 'view',
      key: 'view',
      width: '120px',
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      headerAlign: 'center',
      width: '180px',
      render: (_data, record) => {
        const actionItemStyle =
          'flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#F7F7FA] text-[#52536D] hover:bg-primary'
        return (
          <>
            <div className='flex items-center justify-center gap-3'>
              <Link className={actionItemStyle} href={''}>
                <span>
                  <IconActionEdit />
                </span>
              </Link>
              <Link
                className={actionItemStyle}
                href={`post/${record.id}/chapter`}
              >
                <span>
                  <IconEye width={18} />
                </span>
              </Link>
            </div>
          </>
        )
      },
    },
  ]

  const dataSource = COMICS?.map((item: any) => ({ ...item })) || []

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      layoutBorder
      showPagination
      // pagination={{
      //   position: PAGINATION_POSITION.BOTTOM_RIGHT,
      //   current: pagination.page,
      //   pageSize: pagination.perPage,
      //   total: totalRecords,
      //   onChange: onPageChange,
      // }}
      showHeader
      // loading={loading}
      rowKey={'id'}
      scroll={{ x: '70vw' }}
    />
  )
}

export default ListPosts
