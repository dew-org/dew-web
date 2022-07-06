export type ProductPrice = {
  retailPrice: number
  salePrice: number
  currency: string
}

export type Product = {
  code: string
  sku: string
  name: string
  description?: string
  price: ProductPrice
  discount: number
  tax: number

  createdAt?: number
  updatedAt?: number

  userId: string
}
