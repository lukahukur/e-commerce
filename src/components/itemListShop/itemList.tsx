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

  let render = useMemo(
    () =>
      products
        .filter((e) => selectedCategores[e.category])
        .map((e, i) => {
          return <Card key={i} product={e} />
        }),
    [selectedCategores],
  )
  return <>{render}</>
}

export default ItemList
