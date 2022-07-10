import { UseFormReturn } from 'react-hook-form'

import { Customer, Invoice } from '../../../types'

type InvoiceFormAction = { type: 'SET_CUSTOMER'; payload: Customer }

const InvoiceFormReducer = (
  state: UseFormReturn<Invoice, object>,
  action: InvoiceFormAction,
) => {
  switch (action.type) {
    case 'SET_CUSTOMER': {
      const newState = { ...state }
      newState.setValue('customer', action.payload)
      return newState
    }
    default:
      return state
  }
}

export default InvoiceFormReducer
