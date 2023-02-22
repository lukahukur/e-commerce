import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import {
  useDispatch,
  useSelector,
  TypedUseSelectorHook,
} from 'react-redux'
import { shopSlice } from './shop.slice'

export const store = () =>
  configureStore({
    reducer: {
      [shopSlice.name]:shopSlice.reducer
    }
  })

export type AppStore = ReturnType<typeof store>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const typedDispatch = useDispatch<AppDispatch>
export const typedUseSelector: TypedUseSelectorHook<AppState> =
  useSelector

export const wrapper = createWrapper<AppStore>(store)