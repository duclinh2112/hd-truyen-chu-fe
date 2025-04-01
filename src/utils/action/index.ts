'use server'

import { signIn } from '@/auth'

export async function authenticate(payload: any) {
  try {
    const res = await signIn('credentials', {
      email: payload.email,
      password: payload.password,
      redirect: false,
    })

    return res
  } catch (error: any) {
    return {
      error: error.type,
    }
  }
}
