import { faker } from '@faker-js/faker'
import { renderHook } from '@testing-library/react-hooks'
import axios from 'axios'

import { ProductInventory } from '../types'
import useProductInventory from './use-product-inventory'

describe('use product inventory hook', () => {
  beforeEach(() => {
    jest.spyOn(axios, 'get').mockResolvedValue({
      data: {
        code: faker.datatype.uuid(),
        sku: faker.datatype.uuid(),
        stock: faker.datatype.number(),
      } as ProductInventory,
    })
  })

  it('should be return product inventory', async () => {
    const productCode = faker.datatype.uuid()
    const { result, waitForNextUpdate } = renderHook(() =>
      useProductInventory(productCode),
    )

    expect(result.current.product).toBeUndefined()

    await waitForNextUpdate()

    expect(result.current.product).toBeTruthy()
  })
})
