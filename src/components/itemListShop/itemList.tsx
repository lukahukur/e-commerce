import { FC, useEffect, useMemo } from 'react'
import { ProductType } from 'UwU/types/products.types'
import Card from '../Card'

const itemList: FC<{
  products: ProductType[]
}> = ({ products }) => {
  return (
    <>
      {products.map((e, i) => {
        return <Card key={i} product={e} />
      })}
    </>
  )
}

export default itemList
