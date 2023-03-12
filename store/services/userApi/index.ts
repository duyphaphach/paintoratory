import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type UserResponse } from './types'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    prepareHeaders: (headers, { getState }) => {
      const storeState = getState()
      const token = storeState?.auth?.accessToken ?? ''

      // If we have a token set in state, let's assume that we should be passing it.
      if (token?.length > 0) {
        headers.set('Authorization', `Token ${token}`)
      }
      return headers
    }
  }),
  endpoints: builder => ({
    getUser: builder.query<UserResponse, string>({
      query: (sessionId?: string) => ({
        url: 'https://jsonplaceholder.typicode.com/users/1',
        headers: { session_id: sessionId ?? '' }
      })
    })
  })
})

export const { useGetUserQuery } = userApi
