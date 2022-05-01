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

    expect(result.current.products).toEqual(undefined)
    expect(result.current.isLoading).toEqual(true)

    await waitForNextUpdate()

    expect(result.current.products).toBeTruthy()
    expect(result.current.isLoading).toEqual(false)
    expect(result.current.products?.length).toEqual(1)
  })
})
