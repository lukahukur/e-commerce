import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { ProductType } from 'UwU/types/products.types'

const Card: FC<{ product: ProductType }> = ({ product }) => (
  <Link
    className="flex w-64 border rouned-md bg-white rounded-xl"
    href={'/products/' + product.id}
  >
    <div className="">
      <Image
        width={200}
        height={100}
        src={product.image}
        alt="product"
      ></Image>
    </div>
  </Link>
)

export default Card
