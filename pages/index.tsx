import * as React from 'react'
import { skipToken } from '@reduxjs/toolkit/query/react'
import Layout from '@/components/layouts/base-1'
import { useGetUserQuery } from '@/store/services/userApi'

export default function Page (): JSX.Element {
  const { data } = useGetUserQuery(skipToken)

  return (
    <Layout>
      {JSON.stringify(data)}
    </Layout>
  )
}
