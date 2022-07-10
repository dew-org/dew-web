import { useCurrency } from '@dew-org/shared'
import { FC, PropsWithChildren, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Customer, Invoice, InvoiceItem } from '../../../types'
import InvoiceFormContext from './invoice-form.context'

type Props = {}

const InvoiceFormProvider: FC<PropsWithChildren<Props>> = ({ children }) => {
  const currency = useCurrency()
  const form = useForm<Invoice>({
    defaultValues: {
      currency,
    },
  })
  const [page, setPage] = useState(1)

  const handleSelectCustomer = (customer: Customer | null) => {
    if (customer) {
      form.setValue('customer', customer)
      setPage(prevState => prevState + 1)
    }
  }

  const handleAddItems = (items: InvoiceItem[]) => {
    form.setValue('items', items)
    setPage(prevState => prevState + 1)
  }

  return (
    <InvoiceFormContext.Provider
      value={{
        page,
        currency,

        handleSelectCustomer,
        handleAddItems,
        handleSubmit: form.handleSubmit,
      }}
    >
      <FormProvider {...form}>{children}</FormProvider>
    </InvoiceFormContext.Provider>
  )
}

export default InvoiceFormProvider
