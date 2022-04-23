import { HttpClient } from '@dew-org/shared'

import { Invoice } from '../types'

export const InvoiceService = {
  save: async (invoice: Invoice) => {
    const { data } = await HttpClient.post('/invoices', invoice)
    return data
  },
  fetchAll: async () => {
    const { data } = await HttpClient.get<Invoice[]>('/invoices')
    return data
  },
}
