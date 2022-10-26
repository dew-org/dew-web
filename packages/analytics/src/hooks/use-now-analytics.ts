import { fetcher } from '@dew-org/shared'
import useSWR from 'swr'

import { Analytics } from '../types'

type UseNowAnalytics = {
  analytics?: Analytics
  isLoading: boolean
  error?: Error
}

export const useNowAnalytics = (userId: string): UseNowAnalytics => {
  const { data, isValidating, error } = useSWR<Analytics>(
    `/api/analytics/now?userId=${userId}`,
    fetcher,
  )

  return {
    analytics: data,
    isLoading: isValidating,
    error,
  }
}
