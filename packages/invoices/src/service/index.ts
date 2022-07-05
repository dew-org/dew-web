import { HttpClient } from '@dew-org/shared'

import { Invoice } from '../types'

export const InvoiceService = {
  save: async (invoice: Invoice) => {
    const { data } = await HttpClient.post('/invoices', invoice)
    return data
  },
  fetchAll: async (userId: string) => {
    const { data } = await HttpClient.get<Invoice[]>(
      `/invoices?userId=${userId}`,
    )
    return data
  },
  find: async (id: string) => {
    const { data } = await HttpClient.get<Invoice>(`/invoices/${id}`)
    return data
  },
}
