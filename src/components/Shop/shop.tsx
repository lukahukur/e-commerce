import { FC } from 'react'
import { ProductType } from 'UwU/types/products.types'
import Card from '../Card'

const ShopBody: FC<{ products: ProductType[] }> = ({
  products: prod,
}) => {
  const products = prod.map((e, i) => {
    return <Card product={e} />
  })
  return (
    <main>
      <section className="flex justify-center border border-red-400">
        <div className="p-3  grid grid-cols-4 gap-y-10 gap-x-5 w-fit">
          {products}
        </div>
      </section>
    </main>
  )
}

export default ShopBody
