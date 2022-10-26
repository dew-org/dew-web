import { faker } from '@faker-js/faker'
import { renderHook } from '@testing-library/react-hooks'
import axios from 'axios'

import { Analytics, Frequency } from '../types'
import { useAnalytics } from './use-analytics'

describe('use analytics hook', () => {
  beforeEach(() => {
    jest.spyOn(axios, 'get').mockImplementation(() =>
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

  it('should be return analytics', async () => {
    const date = faker.date.past().toISOString()
    const frequency = Frequency.DAILY

    const { result, waitForNextUpdate } = renderHook(() =>
      useAnalytics(date, frequency),
    )

    expect(result.current.analytics).toEqual(undefined)
    expect(result.current.isLoading).toEqual(true)

    await waitForNextUpdate()

    expect(result.current.analytics).toBeTruthy()
    expect(result.current.isLoading).toEqual(false)
    expect(result.current.analytics?.date).toBeTruthy()
    expect(result.current.analytics?.frequency).toBeTruthy()
    expect(result.current.analytics?.invoices).toBeTruthy()
    expect(result.current.analytics?.sales).toBeTruthy()
    expect(result.current.analytics?.customers).toBeTruthy()
    expect(result.current.analytics?.products).toBeTruthy()
    expect(result.current.analytics?.userId).toBeTruthy()
  })
})
