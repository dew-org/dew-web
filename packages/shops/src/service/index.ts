import { HttpClient } from '@dew-org/shared'

import { CreateShop, Shop } from '../types'

export const ShopService = {
  save: async (shop: CreateShop) => {
    const response = await HttpClient.post('/shops', shop)
    return response.data
  },
  findByUserId: async (userId: string) => {
    const response = await HttpClient.get<Shop>(`/shops?userId=${userId}`)
    return response.data
  },
}
