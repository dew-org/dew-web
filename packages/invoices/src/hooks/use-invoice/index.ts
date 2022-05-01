import { fetcher } from '@dew-org/shared'
import useSWR from 'swr'

import { Invoice } from '../../types'

type UseInvoice = {
  invoice?: Invoice
  isLoading: boolean
  error?: Error
}

export const useInvoice = (id: string): UseInvoice => {
  const { data, isValidating, error } = useSWR<Invoice>(
    `/api/invoices/${id}`,
    fetcher,
  )

  return {
    invoice: data,
    isLoading: isValidating,
    error,
  }
}

export default useInvoice
