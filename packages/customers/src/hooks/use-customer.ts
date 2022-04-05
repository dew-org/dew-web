import { fetcher } from '@dew-org/shared'
import useSWR from 'swr'

import { Customer } from '../types'

export const useCustomer = (
  id?: string,
): [Customer | undefined, boolean, Error | undefined] => {
  const { data, isValidating, error } = useSWR<Customer | undefined>(
    id !== undefined ? `/api/customers/${id}` : undefined,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  return [data, isValidating, error]
}

export default useCustomer
