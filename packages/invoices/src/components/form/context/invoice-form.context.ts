import { createContext } from 'react'

import { InvoiceFormContextProps } from '../../../types/context'

const InvoiceFormContext = createContext<InvoiceFormContextProps>({
  page: 1,
  currency: '',

  handleSelectCustomer: () => {},
  handleAddItems: () => {},
})

export default InvoiceFormContext
