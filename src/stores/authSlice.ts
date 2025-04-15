// authSlice.ts
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { IIuserSession } from '@/utils/types/interface/authentication/IUserSession'
import type { IUser } from '@/utils/types/interface/IUser'

interface AuthState {
  token: string | null
  user: IUser | null
}

const initialState: AuthState = {
  token: null,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<IIuserSession>) {
      const { token, ...user } = action.payload
      state.token = token.accessToken
      state.user = user
    },
    logout(state) {
      state.token = null
      state.user = null
      localStorage.clear()
    },
  },
})

const authReducer = authSlice.reducer
export const { setAuth, logout } = authSlice.actions
export default authReducer
