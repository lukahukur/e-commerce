import { FC, useRef, useEffect } from 'react'
import { typedDispatch } from 'UwU/store'
import { setCategories } from 'UwU/store/shop.slice'
import styles from './styles.module.scss'


const SidebarShop: FC<{ categories: string[] }> = ({
  categories,
}) => {
  const dispatch = typedDispatch()
  const selectedCategories = useRef<string[]>([])


  useEffect(() => {
    selectedCategories.current = categories
  }, [categories])

  return (
    <aside
      className="bg-white w-64 p-3 h-fit
                   rounded-xl font-OpenSans
                   shadow-2xl shadow-slate-400 text-slate-700"
    >
      <span>
        <h2 className="font-OpenSansBold text-xl">Categories:</h2>
        <nav className="">
          <ul>
            {categories.map((e, i) => (
              <li className="flex items-center ml-2" key={i}>
                <input
                  type="checkbox"
                  name={'category'}
                  defaultChecked
                  onChange={(ev) => {
                    if (ev.target.checked) {
                    }
                  }}
                  className="peer relative appearance-none w-5 h-5
                             border rounded-sm focus:outline-none
                             checked:bg-indigo-100 hover:border-slate-400
                             
                             after:w-full after:h-full after:absolute
                             after:left-0 after:top-[1px] after:bg-no-repeat
                             after:bg-center after:bg-[length:15px]
                             checked:after:bg-[url('../../public/check.svg')]
                             "
                />
                <label htmlFor="category" className="ml-2">
                  {e}
                </label>
              </li>
            ))}
          </ul>
        </nav>
      </span>
      <span className="mt-4 flex flex-col">
        <h2 className="font-OpenSansBold text-xl">Price:</h2>
        <div className="flex w-full ml-2">
          <input
            type="number"
            placeholder="From"
            className="border border-indigo-200 w-1/2 mr-4 p-1
                     focus:outline-indigo-500 focus:outline-1 rounded-md"
          />
          <input
            type="number"
            placeholder="To"
            className="border border-indigo-200 w-1/2 mr-2 p-1
                     focus:outline-indigo-500 focus:outline-1 rounded-md"
          />
        </div>
      </span>
      <span className="mt-5 flex items-center justify-center mb-1">
        <button
          className="font-Montserrat border 
                     w-1/2 py-1 rounded-lg bg-indigo-100 text-indigo-500 "
        >
          Apply
        </button>
      </span>
    </aside>
  )
}

export default SidebarShop
