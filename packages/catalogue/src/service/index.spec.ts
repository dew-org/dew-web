import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { HttpClient } from '@dew-org/shared'
import { faker } from '@faker-js/faker'

import { Product } from '../types'
import { CatalogueService } from './index'

describe('catalogue service', () => {
  beforeEach(() => {
    jest.spyOn(HttpClient, 'post').mockImplementation(() => Promise.resolve({}))

    jest.spyOn(HttpClient, 'get').mockImplementation(() =>
      Promise.resolve({
        data: [
          {
            code: faker.datatype.uuid(),
            sku: faker.commerce.productName(),
            name: faker.commerce.productName(),
            description: faker.lorem.paragraph(),
            regularPrice: faker.datatype.number(),
            salePrice: faker.datatype.number(),
            discount: faker.datatype.number(),
            tax: faker.datatype.number(),
            createdAt: faker.date.past().getMilliseconds(),
          },
        ],
      }),
    )
  })

  it('should be save a product in catalogue', () => {
    const product: Product = {
      code: faker.datatype.uuid(),
      sku: faker.commerce.productName(),
      name: faker.commerce.productName(),
      description: faker.lorem.paragraph(),
      regularPrice: faker.datatype.number(),
      salePrice: faker.datatype.number(),
      discount: faker.datatype.number(),
      tax: faker.datatype.number(),
    }

    CatalogueService.save(product)

    expect(HttpClient.post).toHaveBeenCalledWith('/catalogue', product)
  })

  it('should be fetch all product in catalogue', async () => {
    const products = await CatalogueService.fetchAll()
    expect(products).toHaveLength(1)
  })
})
