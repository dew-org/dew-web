import { fetcher } from '@dew-org/shared'
import useSWR from 'swr'

import { Analytics } from '../types'

type UseNowAnalytics = {
  analytics?: Analytics
  isLoading: boolean
  error?: Error
}

export const useNowAnalytics = (): UseNowAnalytics => {
  const { data, isValidating, error } = useSWR<Analytics>(
    `/api/analytics/now`,
    fetcher,
  )

  return {
    analytics: data,
    isLoading: isValidating,
    error,
  }
}
