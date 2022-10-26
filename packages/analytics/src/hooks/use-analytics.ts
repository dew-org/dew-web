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
  userId: string,
): UseAnalytics => {
  const { data, isValidating, error } = useSWR<Analytics>(
    `/api/analytics/${date}/${frequency}?userId=${userId}`,
    fetcher,
  )

  return {
    analytics: data,
    isLoading: isValidating,
    error,
  }
}
