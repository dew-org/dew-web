import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { HttpClient } from '@dew-org/shared'
import { faker } from '@faker-js/faker'

import { Invoice } from '../types'
import { InvoiceService } from './index'

describe('invoice service', () => {
  beforeEach(() => {
    jest.spyOn(HttpClient, 'post').mockImplementation(() => Promise.resolve({}))
  })

  it('should be save an invoice', () => {
    const invoice: Invoice = {
      customer: {
        id: faker.datatype.uuid(),
        fullName: faker.name.findName(),
      },
      items: [
        {
          product: {
            code: faker.datatype.uuid(),
            name: faker.commerce.productName(),
          },
          price: faker.datatype.number(),
          quantity: faker.datatype.number(),
          tax: faker.datatype.number(),
          discount: faker.datatype.number(),
        },
      ],
    }

    InvoiceService.save(invoice)
    expect(HttpClient.post).toHaveBeenCalledWith('/invoices', invoice)
  })
})
