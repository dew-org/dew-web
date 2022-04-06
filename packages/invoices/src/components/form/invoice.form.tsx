import { Customer } from '@dew-org/customers'
import { Spacer } from '@nextui-org/react'
import { FC, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Invoice, InvoiceItem } from '../../types'
import AddItemsStep from './add-items.step'
import FindCustomerStep from './find-customer.step'
import GenerateInvoiceStep from './generate-invoice.step'

type Props = {
  onSubmit: (invoice: Invoice) => void
}

const InvoiceForm: FC<Props> = ({ onSubmit }) => {
  const invoiceForm = useForm<Invoice>()

  const [currentPage, setCurrentPage] = useState(1)

  const handleSelectCustomer = (customer: Customer | null) => {
    if (customer) {
      invoiceForm.setValue('customer', {
        id: customer.id,
        fullName: `${customer.name} ${customer.lastName}`,
      })

      setCurrentPage(prevState => prevState + 1)
    }
  }

  const handleAddItems = (items: InvoiceItem[]) => {
    invoiceForm.setValue('items', items)
    setCurrentPage(prevState => prevState + 1)
  }

  return (
    <>
      <Spacer y={1} />
      <FormProvider {...invoiceForm}>
        {currentPage === 1 && (
          <FindCustomerStep onSelect={handleSelectCustomer} />
        )}

        {currentPage === 2 && <AddItemsStep onFinish={handleAddItems} />}

        <form onSubmit={invoiceForm.handleSubmit(onSubmit)}>
          {currentPage === 3 && <GenerateInvoiceStep />}
        </form>
      </FormProvider>
    </>
  )
}

export default InvoiceForm
