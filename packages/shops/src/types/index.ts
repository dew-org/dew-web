export type Shop = {
  id: string

  name: string
  nit: string
  address: string
  phone: string
  email?: string

  userId: string

  createdAt: number
}

export type CreateShop = Omit<Shop, 'id' | 'createdAt'>
