import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type C = { name: string; selected: boolean }[]
type S = 'asc' | 'desc' | 'default'
type initialStateType = {
  sort: S
  categories: C
}

export const shopSlice = createSlice({
  name: 'shopSlice',
  initialState: {
    categories: [],
    sort: 'default',
  } as initialStateType,
  reducers: {
    setCategories(store, { payload }: PayloadAction<C>) {
      store.categories = payload
    },
    sort(store, { payload }: PayloadAction<S>) {
      store.sort = payload
    },
  },
})
