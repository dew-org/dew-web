import { fetcher } from '@dew-org/shared'
import useSWR from 'swr'

import { Product } from '../types'

export const useProducts = (): [
  Product[] | undefined,
  boolean,
  Error | undefined,
] => {
  const { data, isValidating, error } = useSWR<Product[]>(
    '/api/products',
    fetcher,
  )

  return [data, isValidating, error]
}

export default useProducts
