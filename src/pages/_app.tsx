import 'UwU/styles/globals.scss'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { wrapper } from "../store"
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  const { store, props } = wrapper.useWrappedStore(Component)

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </Provider>
    </QueryClientProvider>
  )
}
