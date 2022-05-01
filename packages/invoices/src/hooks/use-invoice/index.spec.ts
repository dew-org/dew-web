import { faker } from '@faker-js/faker'
import { renderHook } from '@testing-library/react-hooks'
import axios from 'axios'

import { Invoice } from '../../types'
import useInvoice from './index'

describe('use invoice hook', () => {
  beforeEach(() => {
    jest.spyOn(axios, 'get').mockResolvedValue({
      data: {
        id: faker.datatype.uuid(),
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
            discount: faker.datatype.number(),
            tax: faker.datatype.number(),
          },
        ],
      } as Invoice,
    })
  })

  it('should be return an invoice', async () => {
    const id = faker.datatype.uuid()
    const { result, waitForNextUpdate } = renderHook(() => useInvoice(id))

    expect(result.current.invoice).toBeUndefined()

    await waitForNextUpdate()

    expect(result.current.invoice).toBeTruthy()
  })
})
