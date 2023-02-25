import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { ProductType } from 'UwU/types/products.types'
import { BsStar } from 'react-icons/bs'
const Card: FC<{ product: ProductType }> = ({ product }) => (
  <div
    className="flex flex-col justify-between items-center w-80 h-96 
               overflow-hidden rouned-sm bg-white 
               rounded-xl font-OpenSans
               shadow-2xl shadow-slate-400 text-slate-800
               "
  >
    <div
      className="flex justify-center items-center
                 overflow-hidden h-full
                 w-full"
    >
      <Image
        width={110}
        height={150}
        src={product.image}
        priority={true}
        alt="product"
        className="w-auto h-auto max-h-48"
      />
    </div>
    <div className="bg-indigo-50 flex flex-col justify-between w-full p-3 text-sm">
      <Link href={'/products/' + product.id}>
        <h2 className="font-OpenSans  text-base hover:text-indigo-600">
          {product.title}
        </h2>
      </Link>
      <span className="text-lg mt-2  justify-between flex items-center font-OpenSansBold">
        <span>{product.price} $ </span>
        <span className="flex items-center w-12 justify-between ">
          {product.rating.rate}
          <BsStar />
        </span>
      </span>
    </div>
    <div
      style={{ minHeight: '4rem' }}
      className="bg-indigo-700 w-full font-Montserrat
                 text-slate-50  flex 
                   justify-center items-center"
    >
      BUY
    </div>
  </div>
)

export default Card
