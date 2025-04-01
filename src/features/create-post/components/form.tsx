'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useRef, useState } from 'react'

import { Button } from '@/components/common/button'
import EditorComic from '@/components/common/editor-comic'
import { Form, useForm } from '@/components/common/form'
import { Image } from '@/components/common/image'
import { Input } from '@/components/common/input'
import { Select } from '@/components/common/select'
import IconUpload from '@/components/icons/upload'
import { CATEGORIES, CHILD_CATEGORIES } from '@/utils/data'
import { transitionCategoryOptions } from '@/utils/helpers'
import useImageUpload from '@/utils/hooks/useImageUpload'
import type { ICategory } from '@/utils/types/interface/ICategory'
import { createPostSchema } from '@/utils/validations/createPostSchema'

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB (tính theo byte)
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/jpg', 'image/png']

const FormCreatePost = () => {
  const { url, handleChangeFile, handleChooseImage } = useImageUpload('')
  const [selectedCategory, setSelectedCategory] = useState<number>()
  const [childCategories, setChildCategories] = useState<ICategory[]>()
  const inputFileRef = useRef<HTMLInputElement>(null)
  const form = useForm({
    resolver: yupResolver(createPostSchema),
    mode: 'all',
  })

  const { setValue, setError, handleSubmit } = form

  useEffect(() => {
    if (selectedCategory) {
      setChildCategories(
        CHILD_CATEGORIES.filter((item) => item.parent?.id == selectedCategory),
      )
    }
  }, [selectedCategory])

  const onSubmit = (data: any) => {
    console.log(data)
  }

  const validateFile = (file: File) => {
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return `Chỉ chấp nhận các định dạng: jpg, jpeg, png`
    }

    if (file.size > MAX_FILE_SIZE) {
      return `Dung lượng tối đa cho phép là 5MB`
    }

    return null
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files[0]) {
      const file = files[0]

      const validationError = validateFile(file)
      if (validationError) {
        console.log(validationError)

        setError('image', {
          message: validationError,
        })
        return
      }
      handleChangeFile(event)
      setValue('image', file)
    }
  }

  return (
    <Form
      form={form}
      className='grid grid-cols-1 gap-x-4 md:grid-cols-2'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Form.Item label='Tên truyện' name='name' className='col-span-2'>
        <Input placeholder='Tên truyện' fullWidth />
      </Form.Item>
      <Form.Item label='Danh mục' name='category' className='col-span-1'>
        <Select
          options={transitionCategoryOptions(CATEGORIES)}
          placeholder='Danh mục'
          width={'100%'}
          onChange={(value) => setSelectedCategory(Number(value))}
        />
      </Form.Item>
      <Form.Item label='Thể loại' name='child_category' className='col-span-1'>
        <Select
          options={transitionCategoryOptions(childCategories || [])}
          placeholder='Thể loại'
          width={'100%'}
        />
      </Form.Item>
      <Form.Item label='Mô tả' name='description' className='col-span-2'>
        <EditorComic />
      </Form.Item>
      <Form.Item name='image' label='Hình ảnh'>
        <div className='flex flex-col'>
          {url ? (
            <div className='flex flex-row items-center gap-4'>
              <div className='w-[150px]'>
                <Image
                  src={url}
                  alt={'Thumbnail'}
                  objectFit='cover'
                  width={'100%'}
                  height={'150px'}
                />
              </div>
            </div>
          ) : (
            <div
              className='flex w-[150px] cursor-pointer items-center justify-center border border-dashed border-[#ccc] p-[30px]'
              onClick={() => handleChooseImage(inputFileRef)}
            >
              <IconUpload width={50} />
            </div>
          )}
          <div className='mt-6'>
            <Button onClick={() => handleChooseImage(inputFileRef)}>
              Chọn ảnh
            </Button>
            <input
              ref={inputFileRef}
              type='file'
              id='file'
              // accept='image/png, image/jpeg, image/jpg'
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </div>
        </div>
      </Form.Item>
      <div className='col-span-2 flex justify-end'>
        <Button type='submit' onClick={handleSubmit(onSubmit)}>
          Lưu
        </Button>
      </div>
    </Form>
  )
}

export default FormCreatePost
