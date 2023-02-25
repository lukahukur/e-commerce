import 'UwU/styles/globals.scss'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import type { AppProps } from 'next/app'
import { useState, useLayoutEffect } from 'react'
import { Provider } from 'react-redux'
import { typedDispatch, wrapper } from 'UwU/store'
import { setRenderType } from 'UwU/store/shop.slice'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  const { store, props } = wrapper.useWrappedStore(Component)

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  )
}
