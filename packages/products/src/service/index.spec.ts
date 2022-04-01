import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { HttpClient } from '@dew-org/shared'
import { faker } from '@faker-js/faker'

import { Product } from '../types'
import ProductService from './index'

describe('products service', () => {
  beforeEach(() => {
    jest.spyOn(HttpClient, 'post').mockImplementation(() => Promise.resolve({}))
  })

  it('should be save a product', function () {
    const product: Product = {
      code: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      buyPrice: faker.datatype.number(),
      sellPrice: faker.datatype.number(),
      stock: faker.datatype.number(),
      description: faker.lorem.paragraph(),
    }
    ProductService.save(product)
    expect(HttpClient.post).toHaveBeenCalledWith('/products', product)
  })
})
