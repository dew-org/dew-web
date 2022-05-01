import { faker } from '@faker-js/faker'
import { renderHook } from '@testing-library/react-hooks'
import axios from 'axios'

import { Product } from '../types'
import useProduct from './use-product'

describe('use product hook', () => {
  beforeEach(() => {
    jest.spyOn(axios, 'get').mockResolvedValue({
      data: {
        code: faker.datatype.uuid(),
        sku: faker.commerce.productName(),
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        salePrice: faker.datatype.number(),
        regularPrice: faker.datatype.number(),
        discount: faker.datatype.number(),
        tax: faker.datatype.number(),
      } as Product,
    })
  })

  it('should be return product', async () => {
    const productCode = faker.datatype.uuid()
    const { result, waitForNextUpdate } = renderHook(() =>
      useProduct(productCode),
    )

    expect(result.current.product).toBeUndefined()

    await waitForNextUpdate()

    expect(result.current.product).toBeTruthy()
  })
})
