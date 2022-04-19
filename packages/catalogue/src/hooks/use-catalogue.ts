import { fetcher } from '@dew-org/shared'
import useSWR from 'swr'

import { Product } from '../types'

type Products = Product[] | undefined
type UseCatalog = [Products, boolean, Error | undefined]

export const useCatalogue = (): UseCatalog => {
  const { data, isValidating, error } = useSWR<Products>(
    '/api/catalogue',
    fetcher,
  )

  return [data, isValidating, error]
}

export default useCatalogue
