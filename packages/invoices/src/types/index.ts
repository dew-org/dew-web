export type Customer = {
  id: string
  fullName: string
}

export type Product = {
  code: string
  name: string
  description?: string
}

export type InvoiceItem = {
  product: Product
  price: number
  quantity: number
  tax: number
  discount: number
}

export type Invoice = {
  id?: string
  customer: Customer
  items: InvoiceItem[]
  currency: string

  subtotal?: number
  tax?: number
  discount?: number
  total?: number
  createdAt?: number
}
