import { faker } from '@faker-js/faker'
import { renderHook } from '@testing-library/react-hooks'
import axios from 'axios'

import { Analytics, Frequency } from '../types'
import { useNowAnalytics } from './use-now-analytics'

describe('use now analytics hook', () => {
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
    const { result, waitForNextUpdate } = renderHook(() => useNowAnalytics())

    expect(result.current.analytics).toEqual(undefined)
    expect(result.current.isLoading).toEqual(true)

    await waitForNextUpdate()

    expect(result.current.analytics).toBeTruthy()
    expect(result.current.isLoading).toEqual(false)
  })
})
