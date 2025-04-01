'use client'

import Link from 'next/link'
import React from 'react'

import { Table } from '@/components/common/table'
import type { ColumnProps } from '@/components/common/table/types'
import IconActionEdit from '@/components/icons/action-edit'
import IconEye from '@/components/icons/eye'
import { CHAPTER } from '@/utils/data'

const ListChapters = () => {
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
      title: 'Tên chương',
      dataIndex: 'title',
      key: 'title',
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

  const dataSource = CHAPTER?.map((item: any) => ({ ...item })) || []
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

export default ListChapters
