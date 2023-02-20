import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { ProductType } from 'UwU/types/products.types'
import Card from '../Card'

const MainBody: FC<{ products: ProductType[] }> = ({
  products: prod,
}) => {
  const products = prod.map((e, i) => {
    return <Card product={e} />
  })
  return (
    <main className="border">
      <div className="border">{products}</div>
    </main>
  )
}

export default MainBody
