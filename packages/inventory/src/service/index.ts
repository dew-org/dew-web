import { HttpClient } from '@dew-org/shared'

import { ProductInventory } from '../types'

export const InventoryService = {
  save: async (product: ProductInventory) => {
    const { data } = await HttpClient.post('/inventory', product)
    return data
  },
  findByCodeOrSku: async (codeOrSku: string) => {
    const { data } = await HttpClient.get<ProductInventory>(
      `/inventory/${codeOrSku}`,
    )
    return data
  },
}
