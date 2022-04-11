import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { HttpClient } from '@dew-org/shared'
import { faker } from '@faker-js/faker'

import { Product } from '../types'
import ProductService from './index'

describe('products service', () => {
  beforeEach(() => {
    jest.spyOn(HttpClient, 'post').mockImplementation(() => Promise.resolve({}))

    jest.spyOn(HttpClient, 'get').mockImplementation(() =>
      Promise.resolve({
        data: {
          code: faker.datatype.uuid(),
          sku: faker.commerce.productName(),
          name: faker.commerce.productName(),
          description: faker.lorem.paragraph(),
          regularPrice: faker.datatype.number(),
          salePrice: faker.datatype.number(),
          stock: faker.datatype.number(),
          discount: faker.datatype.number(),
          tax: faker.datatype.number(),
          createdAt: faker.date.past().getMilliseconds(),
        } as Product,
      }),
    )
  })

  it('should be save a product', () => {
    const product: Product = {
      code: faker.datatype.uuid(),
      sku: faker.commerce.productName(),
      name: faker.commerce.productName(),
      description: faker.lorem.paragraph(),
      regularPrice: faker.datatype.number(),
      salePrice: faker.datatype.number(),
      stock: faker.datatype.number(),
      discount: faker.datatype.number(),
      tax: faker.datatype.number(),
      createdAt: faker.date.past().getMilliseconds(),
    }
    ProductService.save(product)
    expect(HttpClient.post).toHaveBeenCalledWith('/products', product)
  })

  it('should be get a product by code', async () => {
    const productCode = faker.datatype.uuid()
    const product = await ProductService.findByCode(productCode)

    expect(HttpClient.get).toHaveBeenCalledWith(`/products/${productCode}`)
    expect(product).toBeTruthy()
  })

  it('should be get all products', function () {
    ProductService.fetchAll()
    expect(HttpClient.get).toHaveBeenCalledWith('/products')
  })
})
