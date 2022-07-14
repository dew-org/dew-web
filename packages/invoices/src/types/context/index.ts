import { UseFormHandleSubmit } from 'react-hook-form'

import { Customer, Invoice, InvoiceItem } from '../index'

export type InvoiceFormContextProps = {
  page: number
  currency: string

  handleSelectCustomer: (customer: Customer | null) => void
  handleAddItems: (items: InvoiceItem[]) => void

  handleSubmit?: UseFormHandleSubmit<Invoice>
}
