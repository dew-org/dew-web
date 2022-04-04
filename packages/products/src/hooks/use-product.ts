import { fetcher } from '@dew-org/shared'
import useSWR from 'swr'

import { Product } from '../types'

export const useProduct = (
  code: string,
): [Product | undefined, boolean, Error | undefined] => {
  const { data, isValidating, error } = useSWR<Product>(
    `/api/products/${code}`,
    fetcher,
  )

  return [data, isValidating, error]
}

export default useProduct
