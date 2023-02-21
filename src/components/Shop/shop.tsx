import { FC } from 'react'
import { ProductType } from 'UwU/types/products.types'
import Card from '../Card'
import SidebarShop from '../SidebarShop'
import { BsSortDownAlt, BsSortDown } from 'react-icons/bs'
import { Sort } from '../OptionsShop'

const ShopBody: FC<{ products: ProductType[] }> = ({
  products: prod,
}) => {
  const products = prod.map((e, i) => {
    return <Card key={i} product={e} />
  })
  return (
    <main className="justify-start flex w-screen xs:w-full p-3 transition-all">
      <span className="flex mr-4 min-w-[250px] w-64 z-10">
        <span className="fixed">
          <SidebarShop />
        </span>
      </span>
      <section className="flex justify-center">
        <span>
          <Sort />
        </span>
        <div
          className="grid 2xl:grid-cols-4 gap-y-10 gap-x-5 w-fit
                        xl:grid-cols-3 lg:grid-cols-2"
        >
          {products}
        </div>
      </section>
    </main>
  )
}

export default ShopBody
