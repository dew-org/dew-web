import { Spacer } from '@nextui-org/react'
import { useState } from 'react'

import AddItemsStep from './add-items.step'
import FindCustomerStep from './find-customer.step'

const InvoiceForm = () => {
  const [currentPage, setCurrentPage] = useState(2)

  const handleSelectCustomer = (customer: any) => {
    console.log(customer)
    setCurrentPage(prevState => prevState + 1)
  }

  const handleAddItems = (items: any) => {
    console.log(items)
    setCurrentPage(prevState => prevState + 1)
  }

  return (
    <>
      <Spacer y={1} />
      {currentPage === 1 && (
        <FindCustomerStep onSelect={handleSelectCustomer} />
      )}

      {currentPage === 2 && <AddItemsStep onFinish={handleAddItems} />}
    </>
  )
}

export default InvoiceForm
