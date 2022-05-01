import { HttpClient } from '@dew-org/shared'
import { faker } from '@faker-js/faker'

import { ProductInventory } from '../types'
import { InventoryService } from './index'

describe('inventory service', () => {
  beforeEach(() => {
    jest.spyOn(HttpClient, 'post').mockImplementation(() => Promise.resolve({}))

    jest.spyOn(HttpClient, 'get').mockImplementation(() =>
      Promise.resolve({
        data: {
          code: faker.datatype.uuid(),
          sku: faker.commerce.productName(),
          stock: faker.datatype.number(),
        } as ProductInventory,
      }),
    )
  })

  it('should be save a product in inventory', () => {
    const product: ProductInventory = {
      code: faker.datatype.uuid(),
      sku: faker.commerce.productName(),
      stock: faker.datatype.number(),
    }

    InventoryService.save(product)

    expect(HttpClient.post).toHaveBeenCalledWith('/inventory', product)
  })

  it('should be get product inventory', async () => {
    const productCode = faker.datatype.uuid()
    const product = await InventoryService.findByCodeOrSku(productCode)

    expect(HttpClient.get).toHaveBeenCalledWith(`/inventory/${productCode}`)
    expect(product).toBeTruthy()
  })
})
