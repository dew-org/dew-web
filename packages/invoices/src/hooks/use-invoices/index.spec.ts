import { renderHook } from '@testing-library/react-hooks'
import axios from 'axios'

import useInvoices from './index'

describe('use invoices hook', () => {
  beforeEach(() => {
    jest.spyOn(axios, 'get').mockResolvedValue({
      data: [],
    })
  })

  it('should be return all invoices', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useInvoices())

    expect(result.current.invoices).toBeUndefined()

    await waitForNextUpdate()

    expect(result.current.invoices).toEqual([])
  })
})
