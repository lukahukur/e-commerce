import Link from 'next/link'
import { FaCartPlus } from 'react-icons/fa'
import useLocalStorage from 'UwU/hooks/useLocalStorage'
import { useEffect } from 'react'

export default function Header() {
  const { set: setItem, get: getItem } = useLocalStorage('cart', '0')

  return (
    <header className="py-3 px-4 h-20  rounded-lg flex justify-between items-center ">
      <div className="w-fit flex flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          role="img"
          className="fill-indigo-500 block sm:hidden"
        >
          <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
        </svg>
        <h1 className="text-lg font-Montserrat text-indigo-600">
          <div> e-commerce </div>
        </h1>
      </div>
      <div className={'w-20  flex'}>
        <div className={'fixed'}>
          <nav
            className=" font-OpenSans text-3xl flex items-center
                        w-14 h-14 rounded-full bg-white
                        justify-center text-indigo-500 shadow shadow-lg
                        "
          >
            <Link href={'/cart'}>
              <FaCartPlus />
            </Link>
          </nav>
          <div
            className={
              'rounded-full -top-4 text-neutral-800 font-OpenSansBold flex justify-center items-center bg-red-500 w-5 h-5 relative z-50'
            }
          >
            {getItem()}
          </div>
        </div>
      </div>
    </header>
  )
}
