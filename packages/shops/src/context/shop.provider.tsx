import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect } from 'react'

import useShop from '../hooks/use-shop'
import { ShopContext } from './index'

type Props = {}

const ShopProvider: FC<PropsWithChildren<Props>> = ({ children }) => {
  const { shop, error } = useShop()
  const router = useRouter()

  useEffect(() => {
    if (error) {
      if (error?.response?.status === 404) {
        router.push('/shops/register')
      }
    }
  }, [error, router])

  return (
    <ShopContext.Provider value={{ shop }}>{children}</ShopContext.Provider>
  )
}

export default ShopProvider
