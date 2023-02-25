import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { ProductType } from 'UwU/types/products.types'
import { BsStar } from 'react-icons/bs'
const ListItem: FC<{ product: ProductType }> = ({ product }) => (
  <div
    className="flex justify-between items-center w-full
               overflow-hidden rouned-sm bg-white pl-2
               rounded-xl font-OpenSans my-2 h-48
               shadow-2xl shadow-slate-400 text-slate-800
               "
  >
    <div className="min-w-[300px] flex items-center justify-center">
      <Image
        width={110}
        height={150}
        src={product.image}
        priority={true}
        alt="product"
        className="w-auto h-40  max-h-48"
      />
    </div>

    <span className="flex flex-col w-full h-full  pl-10 pt-5 pr-2">
      <span className="h-1/2 flex">
        <Link href={'/products/' + product.id}>
          <h2 className="font-OpenSans w-fit h-fit text-xl m-0 p-0 hover:text-indigo-600">
            {product.title}
          </h2>
        </Link>
      </span>
      <span className="flex items-start justify-between pr-3">
        <span className="flex flex-col">
          <h2 className="font-OpenSansBold text-lg">
            {product.price}$
          </h2>
          <span className="flex items-center">
            <h2 className="text-lg">{product.rating.rate}</h2>
            <BsStar className="ml-2" />
          </span>
        </span>
        <button className="bg-indigo-500 font-Montserrat text-indigo-50 w-20 h-8 rounded-md mt-1">
          BUY
        </button>
      </span>
    </span>
  </div>
)

export default ListItem
