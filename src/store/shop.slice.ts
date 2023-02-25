import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Sort = 'asc' | 'desc' | 'default'
export type RenderType = 'list' | 'cards'

type initialStateType = {
  sort: Sort
  categories: { [key: string]: boolean }
  renderType: RenderType
  priceRange: [number, number]
  showSortPopup: boolean
}

export const shopSlice = createSlice({
  name: 'shopSlice',
  initialState: {
    categories: {},
    sort: 'default',
    renderType: 'cards',
    priceRange: [0, Infinity],
    showSortPopup: false,
  } as initialStateType,
  reducers: {
    setCategories(
      store,
      { payload }: PayloadAction<{ [key: string]: boolean }>,
    ) {
      store.categories = payload
    },
    sort(store, { payload }: PayloadAction<Sort>) {
      store.sort = payload
    },
    setRenderType(store, { payload }: PayloadAction<RenderType>) {
      store.renderType = payload
    },
    setPriceRange(
      store,
      { payload }: PayloadAction<[number, number]>,
    ) {
      store.priceRange = payload
    },
    showSortPopup(store, { payload }: PayloadAction<boolean>) {
      store.showSortPopup = payload
    },
  },
})

export const {
  setCategories,
  sort,
  setPriceRange,
  setRenderType,
  showSortPopup,
} = shopSlice.actions
