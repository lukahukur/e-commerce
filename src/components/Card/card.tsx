import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { ProductType } from 'UwU/types/products.types'
import { BsStar } from 'react-icons/bs'
const Card: FC<{ product: ProductType }> = ({ product }) => (
  <Link
    className="flex flex-col justify-between items-center w-80 h-96 
               overflow-hidden rouned-sm bg-white 
               rounded-xl font-OpenSans
               shadow-2xl shadow-slate-400 text-slate-800
               "
    href={'/products/' + product.id}
  >
    <div
      className="flex justify-center items-center
                 overflow-hidden h-full
                 w-full"
    >
      <Image
        width={120}
        height={150}
        src={product.image}
        alt="product"
      />
    </div>
    <div className="bg-indigo-50 flex flex-col justify-between w-full p-3 text-sm">
      <h2 className="font-OpenSansBold  text-base">
        {product.title}
      </h2>
      <span className="text-lg mt-2  justify-between flex items-center">
        <span>{product.price} $ </span>
        <span className="flex items-center w-12 justify-between font-OpenSansBold ">
          {product.rating.rate}
          <BsStar />
        </span>
      </span>
    </div>
    <div
      className="bg-indigo-700 w-full font-Montserrat
                     text-slate-50 h-28 flex 
                     justify-center items-center"
    >
      BUY
    </div>
  </Link>
)

export default Card
