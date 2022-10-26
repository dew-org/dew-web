import { HttpClient } from '@dew-org/shared'

import { Analytics, Frequency } from '../types'

export const AnalyticsService = {
  fetch: async (date: string, frequency: Frequency, userId: string) => {
    const { data } = await HttpClient.get<Analytics>(
      `/analytics/${date}/${frequency}?userId=${userId}`,
    )

    return data
  },

  fetchNow: async (userId: string) => {
    const { data } = await HttpClient.get<Analytics>(
      `/analytics/now?userId=${userId}`,
    )

    return data
  },
}
