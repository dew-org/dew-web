import { fetcher } from '@dew-org/shared'
import useSWR from 'swr'

import { Analytics, Frequency } from '../types'

type UseAnalytics = {
  analytics?: Analytics
  isLoading: boolean
  error?: Error
}

export const useAnalytics = (
  date: string,
  frequency: Frequency,
): UseAnalytics => {
  const { data, isValidating, error } = useSWR<Analytics>(
    `/api/analytics/${date}/${frequency}`,
    fetcher,
  )

  return {
    analytics: data,
    isLoading: isValidating,
    error,
  }
}
