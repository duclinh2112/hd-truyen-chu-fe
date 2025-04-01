'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/common/button'
import Card from '@/components/common/card'
import { Form, useForm } from '@/components/common/form'
import { Input } from '@/components/common/input'
import { authenticate } from '@/utils/action'

const LoginContainer = () => {
  const router = useRouter()
  const form = useForm()

  const onSubmit = async (data: any) => {
    const res = await authenticate(data)

    if (res.error) return toast.error(res.error)

    const callbackUrl = new URL(res).searchParams.get('callbackUrl') || '/'

    toast.success('Đăng nhập thành công')
    router.push(callbackUrl)
  }

  return (
    <div className='mx-auto my-10 max-w-[450px]'>
      <h3 className='mb-8 text-center text-2xl uppercase'>Đăng Nhập</h3>
      <Card>
        <Form form={form} onFinish={(value) => onSubmit(value)}>
          <Form.Item name='email'>
            <Input label='Email' placeholder='Email' fullWidth />
          </Form.Item>
          <Form.Item name='password'>
            <Input
              type='password'
              label='Mật khẩu'
              placeholder='Mật khẩu'
              fullWidth
            />
          </Form.Item>
          <Button type='submit'>Đăng nhập</Button>
        </Form>
      </Card>
    </div>
  )
}

export default LoginContainer
