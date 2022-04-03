import { HttpClient } from '@dew-org/shared'

import { Product } from '../types'

export const ProductService = {
  save: async (product: Product) => {
    const { data } = await HttpClient.post('/products', product)
    return data
  },
  findByCode: async (code: string) => {
    const { data } = await HttpClient.get<Product>(`/products/${code}`)
    return data
  },
}

export default ProductService
