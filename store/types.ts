import { type Slice } from '@reduxjs/toolkit/src/createSlice'
import { type Api } from '@reduxjs/toolkit/query'
import { type BaseQueryFn } from '@reduxjs/toolkit/src/query/baseQueryTypes'
import { type EndpointDefinitions } from '@reduxjs/toolkit/src/query/endpointDefinitions'

export type Features = Record<string, Slice>

export type Services = Array<Api<BaseQueryFn, EndpointDefinitions, string, string>>
