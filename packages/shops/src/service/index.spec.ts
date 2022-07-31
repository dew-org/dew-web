import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { HttpClient } from '@dew-org/shared'
import { faker } from '@faker-js/faker'

import { CreateShop } from '../types'
import { ShopService } from './index'

describe('ShopService', () => {
  beforeEach(() => {
    jest.spyOn(HttpClient, 'post').mockImplementation(() => Promise.resolve({}))
  })

  it('should save a shop', async () => {
    const shop: CreateShop = {
      name: faker.name.firstName(),
      nit: faker.datatype.uuid(),
      address: faker.address.streetAddress(),
      phone: faker.datatype.string(),
      email: faker.internet.email(),
      userId: faker.datatype.uuid(),
    }

    await ShopService.save(shop)

    expect(HttpClient.post).toHaveBeenCalledWith('/shops', shop)
  })
})
