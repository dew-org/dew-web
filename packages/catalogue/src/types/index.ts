export type Price = {
  amount: number
  currency: string
}

export type Product = {
  code: string
  sku: string
  name: string
  description?: string
  regularPrice: Price
  salePrice: Price
  discount: number
  tax: number

  createdAt?: number
  updatedAt?: number
}
