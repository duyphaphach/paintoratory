import { type Middleware } from '@reduxjs/toolkit'
import humps from 'humps'

const middleware: Middleware = store => next => action => {
  const payload = action?.payload ?? undefined
  if (typeof payload === 'undefined') {
    next(action)
  }
  next({ ...action, payload: humps.camelizeKeys(payload) })
}

export default middleware
