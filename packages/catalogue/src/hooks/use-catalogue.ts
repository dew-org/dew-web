import { fetcher } from '@dew-org/shared'
import useSWR from 'swr'

import { Product } from '../types'

type Products = Product[] | undefined

type UseCatalog = {
  products: Products
  isLoading: boolean
  error: Error | undefined
}

export const useCatalogue = (): UseCatalog => {
  const { data, isValidating, error } = useSWR<Products>(
    '/api/catalogue',
    fetcher,
  )

  return {
    products: data,
    isLoading: isValidating,
    error,
  }
}

export default useCatalogue
