import 'UwU/styles/globals.scss'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Provider } from 'react-redux'
import { wrapper } from 'UwU/store'

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
