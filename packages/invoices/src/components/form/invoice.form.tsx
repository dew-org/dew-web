import { motion } from 'framer-motion'
import { FC, useContext } from 'react'

import { Invoice } from '../../types'
import AddItemsStep from './add-items.step'
import InvoiceFormContext from './context/invoice-form.context'
import FindCustomerStep from './find-customer.step'
import GenerateInvoiceStep from './generate-invoice.step'

type Props = {
  onSubmit: (invoice: Invoice) => void
}

const InvoiceForm: FC<Props> = ({ onSubmit }) => {
  const { page, handleSubmit } = useContext(InvoiceFormContext)

  return (
    <>
      {page === 1 && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <FindCustomerStep />
        </motion.div>
      )}

      {page === 2 && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <AddItemsStep />
        </motion.div>
      )}

      <form onSubmit={handleSubmit && handleSubmit(onSubmit)}>
        {page === 3 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <GenerateInvoiceStep />
          </motion.div>
        )}
      </form>
    </>
  )
}

export default InvoiceForm
