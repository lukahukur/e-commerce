export type ProductType = {
  id: number
  title: string
  price: string
  category: string
  description: string
  image: string
  rating: {
    rate: number
    count: number
  }
}
export enum Categories {
  'electronics',
  'jewelery',
  "men's clothing",
  "women's clothing",
}

export type InitialStateType = {
  sort: 'lowToHigh' | 'highToLow' | 'none'
  categories: { [key: string]: boolean }
}
