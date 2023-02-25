import {
  BsSortDownAlt,
  BsSortDown,
  BsListUl,
  BsGrid,
} from 'react-icons/bs'
import { typedDispatch, typedUseSelector } from 'UwU/store'
import { setRenderType, sort } from 'UwU/store/shop.slice'
export const Sort = () => {
  const dispatch = typedDispatch()
  const renderType = typedUseSelector((s) => s.shopSlice.renderType)
  return (
    <>
      <span className="flex justify-start items-center">
        <span className="flex">
          <button
            onClick={() => dispatch(sort('desc'))}
            className="w-14 h-6 flex bg-white items-center justify-center z-50 shadow-sm mr-2 rounded-lg"
          >
            <BsSortDownAlt height={'2em'} display="block" />
          </button>
          <button
            onClick={() => dispatch(sort('asc'))}
            className="w-14 h-6 flex bg-white items-center justify-center z-50 shadow-sm rounded-lg mr-2"
          >
            <BsSortDown />
          </button>
        </span>
        <span>
          <button
            onClick={() =>
              dispatch(
                setRenderType(
                  renderType === 'list' ? 'cards' : 'list',
                ),
              )
            }
            className="w-14 h-6 flex bg-white items-center justify-center z-50 shadow-sm mr-2 rounded-lg"
          >
            {renderType === 'cards' ? <BsListUl /> : <BsGrid />}
          </button>
        </span>
      </span>
    </>
  )
}
export const ListType = () => {}
