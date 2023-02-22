import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type sortType = 'asc' | 'desc' | 'default'

export type initialStateType = {
    categories: {
        name:string,
        selected:boolean
    }[] | null,
    sort:sortType
}

export const shopSlice= createSlice({
    name:'shopSlice',
    initialState:{
        categories:null,
        sort:'default'
    } as initialStateType,
    reducers:{
        setCagories(state,{payload}:PayloadAction<{
            name:string,
            selected:boolean
        }[]>){
            state.categories = payload
        },
        sort(state,{payload}:PayloadAction<sortType>){
            state.sort = payload
        }
    }
})
export const {setCagories,sort} = shopSlice.actions