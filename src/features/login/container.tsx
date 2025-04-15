'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import React from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/common/button'
import Card from '@/components/common/card'
import { Form, useForm } from '@/components/common/form'
import { Input } from '@/components/common/input'
import IconGoogle from '@/components/icons/google'
import { authenticate } from '@/utils/action'

const LoginContainer = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const form = useForm()

  const onSubmit = async (data: any) => {
    const res = await authenticate(data)

    if (res.error) return toast.error(res.error)

    const callbackUrl = new URL(res).searchParams.get('callbackUrl') || '/'

    toast.success('Đăng nhập thành công')
    router.push(callbackUrl)
  }

  const onLoginProvider = (provider: string) => {
    const callbackUrl = searchParams.get('callbackUrl') || '/'
    signIn(provider, { callbackUrl })
  }

  return (
    <div className='mx-auto my-10 max-w-[450px]'>
      <h3 className='mb-8 text-center text-2xl uppercase'>Đăng Nhập</h3>
      <Card>
        <div>
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
            <div className='flex justify-center'>
              <Button type='submit'>Đăng nhập</Button>
            </div>
          </Form>
          <div className='my-3 text-center text-xs'>Hoặc</div>
          <div className='flex justify-center'>
            <Button
              variant='outlined'
              onClick={() => onLoginProvider('google')}
            >
              <IconGoogle />
              Đăng nhập với google
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default LoginContainer
