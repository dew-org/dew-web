import { fetcher } from '@dew-org/shared'
import useSWR from 'swr'

import { Invoice } from '../../types'

type UseInvoices = {
  invoices?: Invoice[]
  isLoading: boolean
  error?: Error
}

export const useInvoices = (): UseInvoices => {
  const { data, isValidating, error } = useSWR<Invoice[]>('/invoices', fetcher)

  return {
    invoices: data,
    isLoading: isValidating,
    error,
  }
}

export default useInvoices
