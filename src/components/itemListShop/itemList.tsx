import { FC, useEffect, useMemo } from 'react'
import { typedUseSelector } from 'UwU/store'
import { ProductType } from 'UwU/types/products.types'
import Card from '../Card'

const ItemList: FC<{
  products: ProductType[]
}> = ({ products }) => {
  const selectedCategores = typedUseSelector(
    (s) => s.shopSlice.categories,
  )

  const priceRange = typedUseSelector((s) => s.shopSlice.priceRange)
  console.log(priceRange)
  let render = useMemo(
    () =>
      products
        .filter((e) => selectedCategores[e.category])
        .filter(
          (e) =>
            Number(e.price) >= priceRange[0] &&
            Number(e.price) <= priceRange[1],
        )
        .map((e, i) => {
          return <Card key={i} product={e} />
        }),
    [selectedCategores, priceRange],
  )
  return <>{render}</>
}

export default ItemList
