import { HttpClient } from '@dew-org/shared'

import { Product } from '../types'

export const CatalogueService = {
  save: async (product: Product) => {
    const response = await HttpClient.post('/catalogue', product)
    return response.data
  },
  findByCodeOrSku: async (codeOrSku: string) => {
    const { data } = await HttpClient.get<Product>(`/catalogue/${codeOrSku}`)
    return data
  },
  fetchAll: async (userId: string) => {
    const { data } = await HttpClient.get<Product[]>(
      `/catalogue?userId=${userId}`,
    )
    return data
  },
}
