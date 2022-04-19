import { faker } from '@faker-js/faker'
import { renderHook } from '@testing-library/react-hooks'
import axios from 'axios'

import { Product } from '../types'
import useCatalogue from './use-catalogue'

describe('use catalog hook', () => {
  beforeEach(() => {
    jest.spyOn(axios, 'get').mockImplementation(() =>
      Promise.resolve({
        data: [
          {
            code: faker.datatype.uuid(),
            sku: faker.commerce.productName(),
            name: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            salePrice: faker.datatype.number(),
            regularPrice: faker.datatype.number(),
            discount: faker.datatype.number(),
            tax: faker.datatype.number(),
          } as Product,
        ],
      }),
    )
  })

  it('should be return catalog', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCatalogue())

    expect(result.current[0]).toEqual(undefined)
    expect(result.current[1]).toEqual(true)

    await waitForNextUpdate()

    expect(result.current[0]).toBeTruthy()
    expect(result.current[1]).toEqual(false)
    expect(result.current[0]?.length).toEqual(1)
  })
})
