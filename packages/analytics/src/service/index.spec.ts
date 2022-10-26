import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { HttpClient } from '@dew-org/shared'
import { faker } from '@faker-js/faker'

import { Analytics, Frequency } from '../types'
import { AnalyticsService } from './index'

describe('analytics service', () => {
  beforeEach(() => {
    jest.spyOn(HttpClient, 'get').mockImplementation(() =>
      Promise.resolve({
        data: {
          date: faker.date.past().getMilliseconds(),
          frequency: Frequency.DAILY,
          invoices: faker.datatype.number(),
          sales: faker.datatype.number(),
          customers: faker.datatype.number(),
          products: faker.datatype.number(),
          userId: faker.datatype.uuid(),
        } as Analytics,
      }),
    )
  })

  it('should be fetch analytics', async () => {
    const analytics = await AnalyticsService.fetch(
      '2021-01-01',
      Frequency.DAILY,
      'userId',
    )

    checkAnalytics(analytics)

    expect(HttpClient.get).toHaveBeenCalledWith(
      '/analytics/2021-01-01/daily?userId=userId',
    )
  })

  function checkAnalytics<T>(analytics: T) {
    expect(analytics).toHaveProperty('date')
    expect(analytics).toHaveProperty('frequency')
    expect(analytics).toHaveProperty('invoices')
    expect(analytics).toHaveProperty('sales')
    expect(analytics).toHaveProperty('customers')
    expect(analytics).toHaveProperty('products')
    expect(analytics).toHaveProperty('userId')
  }

  it('should be fetch analytics now', async () => {
    const analytics = await AnalyticsService.fetchNow('userId')

    checkAnalytics(analytics)

    expect(HttpClient.get).toHaveBeenCalledWith('/analytics/now?userId=userId')
  })
})
