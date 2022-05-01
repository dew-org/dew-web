import { Product, ProductCard } from '@dew-org/catalogue'
import { Modal, Text } from '@nextui-org/react'
import { FC } from 'react'
import { FormattedMessage } from 'react-intl'

import { InvoiceItem } from '../../../../types'
import InvoiceItemForm from '../form'

type Props = {
  open: boolean
  product?: Product

  onSubmit: (item: InvoiceItem) => void
  onClose: () => void
}

const InvoiceItemModal: FC<Props> = ({ open, product, onSubmit, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} closeButton blur>
      <Modal.Header>
        <Text size={22}>
          <FormattedMessage defaultMessage="Invoice Item" />
        </Text>
      </Modal.Header>

      <Modal.Body>
        {product && (
          <>
            <ProductCard product={product} />

            <InvoiceItemForm product={product} onSubmit={onSubmit} />
          </>
        )}
      </Modal.Body>
    </Modal>
  )
}

export default InvoiceItemModal
