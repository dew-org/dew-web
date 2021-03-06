import { HttpClient } from '@dew-org/shared'

import { Customer } from '../types'

export const CustomerService = {
  save: async (customer: Customer) => {
    const { data } = await HttpClient.post('/customers', customer)
    return data
  },
  findById: async (id: string) => {
    const { data } = await HttpClient.get<Customer>(`/customers/${id}`)
    return data
  },
}

export default CustomerService
