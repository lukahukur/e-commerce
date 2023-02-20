import 'UwU/styles/globals.scss'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import type { AppProps } from 'next/app'
import { createContext, useState } from 'react'
import CartContext from 'UwU/context/cart.context'

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setProductCart] = useState()
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <CartContext.Provider value={{ cart, setProductCart }}>
          <Component {...pageProps} />
        </CartContext.Provider>
      </Hydrate>
    </QueryClientProvider>
  )
}
