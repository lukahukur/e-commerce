import { FC, useEffect, useMemo } from 'react'
import { typedUseSelector } from 'UwU/store'
import { ProductType } from 'UwU/types/products.types'
import Card from '../Card'
import ListItem from '../ListItem'

const ItemList: FC<{
  products: ProductType[]
}> = ({ products }) => {
  const selectedCategores = typedUseSelector(
    (s) => s.shopSlice.categories,
  )
  const priceRange = typedUseSelector((s) => s.shopSlice.priceRange)
  const sortType = typedUseSelector((s) => s.shopSlice.sort)
  const renderType = typedUseSelector((s) => s.shopSlice.renderType)

  const sortFunctionFactory = () => {
    if (sortType === 'default') return

    if (sortType === 'asc')
      return (a: ProductType, b: ProductType) => +b.price - +a.price

    return (a: ProductType, b: ProductType) => +a.price - +b.price
  }

  let render = useMemo(
    () =>
      products
        .filter((e) => selectedCategores[e.category])
        .filter(
          (e) =>
            Number(e.price) >= priceRange[0] &&
            Number(e.price) <= priceRange[1],
        )
        .sort(sortFunctionFactory())
        .map((e, i) => {
          if (renderType === 'cards')
            return <Card key={i} product={e} />
          return <ListItem key={i} product={e} />
        }),
    [selectedCategores, priceRange, sortType, renderType],
  )
  if (renderType === 'cards')
    return (
      <div
        className="grid 2xl:grid-cols-4 gap-y-10 gap-x-5 w-fit 
              xl:grid-cols-3 lg:grid-cols-2"
      >
        {render}
      </div>
    )
  return (
    <div className="flex flex-col w-3/5 min-w-[800px]">{render}</div>
  )
}

export default ItemList
