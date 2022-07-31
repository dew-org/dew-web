import { fetcher } from '@dew-org/shared'
import useSWR from 'swr'

import { Shop } from '../types'

type UseShopHook = {
  shop?: Shop
  isLoading: boolean
  error?: any
}

const useShop = (): UseShopHook => {
  const { data, isValidating, error } = useSWR<Shop>('api/shops', fetcher)

  return {
    shop: data,
    isLoading: isValidating,
    error,
  }
}

export default useShop
