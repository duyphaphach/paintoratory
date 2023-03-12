import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    profile: {
      id: null,
      email: '',
      fullName: null
    }
  },
  reducers: {
    updateUser: (state, action) => {
      return action?.payload ?? {}
    }
  }
})

export const { updateUser } = slice.actions

export default slice.reducer
