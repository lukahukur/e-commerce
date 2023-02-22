import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Sort = 'asc' | 'desc' | 'default'

type initialStateType = {
  sort: Sort
  categories: string[]
}

export const shopSlice = createSlice({
  name: 'shopSlice',
  initialState: {
    categories: [],
    sort: 'default',
  } as initialStateType,
  reducers: {
    setCategories(store, { payload }: PayloadAction<string[]>) {
      store.categories = payload
    },
    sort(store, { payload }: PayloadAction<Sort>) {
      store.sort = payload
    },
  },
})

export const { setCategories, sort } = shopSlice.actions
