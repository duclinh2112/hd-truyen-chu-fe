// appSlice.ts
import { createSlice } from '@reduxjs/toolkit'

interface AppState {
  notification: null
}

const initialState: AppState = {
  notification: null,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
})

const appReducer = appSlice.reducer
export default appReducer
