import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Categories = { name: string; selected: boolean }
export type Sort = 'asc' | 'desc' | 'default'

type initialStateType = {
  sort: Sort
  categories: Categories[]
}

export const shopSlice = createSlice({
  name: 'shopSlice',
  initialState: {
    categories: [],
    sort: 'default',
  } as initialStateType,
  reducers: {
    setCategories(store, { payload }: PayloadAction<Categories[]>) {
      store.categories = payload
    },
    sort(store, { payload }: PayloadAction<Sort>) {
      store.sort = payload
    },
  },
})

export const { setCategories, sort } = shopSlice.actions
