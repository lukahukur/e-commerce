import { FC, useRef, useEffect, useCallback, useMemo } from 'react'
import { typedDispatch } from 'UwU/store'
import {
  setCategories,
  setPriceRange,
  showSortPopup,
} from 'UwU/store/shop.slice'

let fired = false
let selectedCategories: { [key: string]: boolean } = {}
let priceRange: [number, number] = [0, Infinity]

const SidebarShop: FC<{ categories: string[] }> = ({
  categories,
}) => {
  const dispatch = typedDispatch()

  useEffect(() => {
    if (!fired)
      categories.forEach((e) => (selectedCategories[e] = true))

    dispatch(setCategories({ ...selectedCategories }))

    return () => {
      fired = true
    }
  }, [categories])

  let mapCategories = useMemo(
    () =>
      categories.map((elem, i) => (
        <li className="items-center ml-2" key={i}>
          <input
            type="checkbox"
            name={'category'}
            defaultChecked
            onChange={(e) => {
              if (!e.target.checked)
                selectedCategories = {
                  ...selectedCategories,
                  [elem]: false,
                }
              else
                selectedCategories = {
                  ...selectedCategories,
                  [elem]: true,
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
            {elem}
          </label>
        </li>
      )),
    [],
  )

  return (
    <aside
      className="bg-white w-64 p-3 h-fit 
                   rounded-xl font-OpenSans
                   shadow-2xl shadow-slate-400 text-slate-700 z-50"
    >
      <span>
        <h2 className="font-OpenSansBold text-xl">Categories:</h2>
        <nav className="">
          <ul>{mapCategories}</ul>
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
            onChange={(e) =>
              (priceRange[0] = Number(e.target.value) || 0)
            }
          />
          <input
            type="number"
            placeholder="To"
            className="border border-indigo-200 w-1/2 mr-2 p-1
                     focus:outline-indigo-500 focus:outline-1 rounded-md"
            onChange={(e) =>
              (priceRange[1] = Number(e.target.value) || Infinity)
            }
          />
        </div>
      </span>
      <span className="mt-5 flex items-center justify-center mb-1">
        <button
          className="font-Montserrat border 
                     w-1/2 py-1 rounded-lg bg-indigo-100 text-indigo-500 "
          onClick={() => {
            dispatch(setCategories(selectedCategories))
            dispatch(setPriceRange([...priceRange]))
            dispatch(showSortPopup(false))
          }}
        >
          Apply
        </button>
      </span>
    </aside>
  )
}

export default SidebarShop
