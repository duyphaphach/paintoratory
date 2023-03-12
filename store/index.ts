import { combineReducers, configureStore, type EnhancedStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import { type Context, createWrapper } from 'next-redux-wrapper'
import { type Features, type Services } from '@/store/types'

import customMiddlewares from './middlewares'
import features from './features'
import apis from './services'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
}

const mergeReducers = (slices: Features, apis: Services = []) => {
  const services = apis.reduce((services, service) => {
    // @ts-ignore
    services[service.reducerPath] = service.reducer
    return services
  }, {})

  return combineReducers({
    ...slices,
    ...services
  })
}

// @ts-ignore
const persistedReducer = persistReducer(persistConfig, mergeReducers(features, apis))

const store: EnhancedStore = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
    const serviceMiddlewares = apis.map((service) => service.middleware)
    return middlewares
      .concat(customMiddlewares)
      .concat(serviceMiddlewares)
  }
})

const wrappedStore = createWrapper((context: Context) => store, { debug: true })

const persistor = persistStore(store)

setupListeners(store.dispatch)

export { wrappedStore, persistor }
