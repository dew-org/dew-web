import { Spacer } from '@nextui-org/react'
import { useState } from 'react'

import FindCustomerStep from './find-customer.step'

const InvoiceForm = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const handleSelectCustomer = (customer: any) => {
    console.log(customer)
    setCurrentPage(prevState => prevState + 1)
  }

  return (
    <>
      <Spacer y={1} />
      {currentPage === 1 && (
        <FindCustomerStep onSelect={handleSelectCustomer} />
      )}
    </>
  )
}

export default InvoiceForm
