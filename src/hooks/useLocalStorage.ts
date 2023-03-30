import { useEffect, useState } from 'react'

const useLocalStorage = <T extends string | number>(
  name: string,
  _value?: T extends string ? string : number,
) => {
  const [_get, _set] = useState<T>()

  useEffect(() => {
    if (window.localStorage.getItem(name))
      _set(window.localStorage.getItem(name) as T)

    if (!window.localStorage.getItem(name) && _value) {
      window.localStorage.setItem(name, _value as any)
      _set(window.localStorage.getItem(name) as T)
    }
  }, [])

  const get = () => _get
  const set = (value: T) => {
    window.localStorage.setItem(name, value as any)
    _set(window.localStorage.getItem(name) as T)
  }
  return { set, get }
}

export default useLocalStorage
