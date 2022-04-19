import { fetcher } from '@dew-org/shared'
import useSWR from 'swr'

import { Product } from '../types'

type UseProduct = {
  product?: Product
  isLoading: boolean
  error?: Error
}

export const useProduct = (codeOrSku: string): UseProduct => {
  const { data, isValidating, error } = useSWR<Product>(
    `/api/catalogue/${codeOrSku}`,
    fetcher,
  )

  return {
    product: data,
    isLoading: isValidating,
    error,
  }
}

export default useProduct
