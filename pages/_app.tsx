import type { AppContext, AppProps } from 'next/app'
import App from 'next/app'
import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, wrappedStore } from '@/store'
import './../styles/styles.scss'

function Application ({ Component, ...rest }: AppProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { store, props } = wrappedStore.useWrappedStore(rest)

  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
        <Component {...props.pageProps} />
      </PersistGate>
    </StoreProvider>
  )
}

Application.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default Application
