import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { HttpClient } from '@dew-org/shared'
import { faker } from '@faker-js/faker'

import { Customer } from '../types'
import { CustomerService } from './index'

describe('customer service', () => {
  beforeEach(() => {
    jest.spyOn(HttpClient, 'post').mockImplementation(() => Promise.resolve({}))

    jest.spyOn(HttpClient, 'get').mockImplementation(() =>
      Promise.resolve({
        data: {
          id: faker.datatype.uuid(),
          name: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          phoneNumber: faker.phone.phoneNumber(),
        } as Customer,
      }),
    )
  })

  it('should be save a customer', () => {
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

  it('should be a get a customer by id', async () => {
    const id = faker.datatype.uuid()
    const customer = await CustomerService.findById(id)

    expect(HttpClient.get).toHaveBeenCalledWith(`/customers/${id}`)
    expect(customer).toBeTruthy()
  })
})
