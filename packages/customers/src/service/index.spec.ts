import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { HttpClient } from '@dew-org/shared'
import { faker } from '@faker-js/faker'

import { Customer } from '../types'
import { CustomerService } from './index'

describe('customer service', () => {
  beforeEach(() => {
    jest.spyOn(HttpClient, 'post').mockImplementation(() => Promise.resolve({}))
  })

  it('should be save a customer', function () {
    const customer: Customer = {
      id: faker.datatype.uuid(),
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phoneNumber: faker.phone.phoneNumber(),
      email: faker.internet.email(),
    }

    CustomerService.save(customer)
    expect(HttpClient.post).toHaveBeenCalledWith('/customers', customer)
  })
})
