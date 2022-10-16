import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect } from 'react'

import useShop from '../hooks/use-shop'
import { ShopContext } from './index'

type Props = {}

const ShopProvider: FC<PropsWithChildren<Props>> = ({ children }) => {
  const { shop, error } = useShop()
  const router = useRouter()

  useEffect(() => {
    const redirectToRegisterShop =
      error &&
      error?.response?.status === 404 &&
      router.pathname !== '/shops/register' &&
      process.env.NEXT_REDIRECT_SHOPS

    if (redirectToRegisterShop) {
      router.push('/shops/register').then()
    }
  }, [error, router])

  return (
    <ShopContext.Provider value={{ shop }}>{children}</ShopContext.Provider>
  )
}

export default ShopProvider
