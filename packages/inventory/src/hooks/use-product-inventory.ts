import { fetcher } from '@dew-org/shared'
import useSWR from 'swr'

import { ProductInventory } from '../types'

type UseProductInventory = {
  product?: ProductInventory
  isLoading: boolean
  error?: Error
}

export const useProductInventory = (codeOrSku: string): UseProductInventory => {
  const { data, isValidating, error } = useSWR<ProductInventory>(
    `/api/inventory/${codeOrSku}`,
    fetcher,
  )

  return {
    product: data,
    isLoading: isValidating,
    error,
  }
}

export default useProductInventory
