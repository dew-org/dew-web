export type Product = {
  code: string
  sku: string
  name: string
  description?: string
  regularPrice: number
  salePrice: number
  stock: number
  discount: number
  tax: number

  createdAt?: number
  updatedAt?: number
}
