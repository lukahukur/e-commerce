import Link from 'next/link'
import { BsList } from 'react-icons/bs'

export default function Header() {
  return (
    <header className="py-3 px-4 rounded-lg flex justify-between items-center ">
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
          <Link href={'/'}> e-commerce </Link>
        </h1>
      </div>
      <nav className="hidden font-OpenSans w-96 justify-between items-center text-indigo-500 sm:flex">
        <Link href={'/cart'}>Cart</Link>
        <Link href={'/shop'}>Products</Link>
        <Link href={'/'}>Main</Link>
      </nav>
    </header>
  )
}
