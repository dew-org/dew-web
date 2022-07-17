import { Modal, Text } from '@nextui-org/react'
import { FC } from 'react'
import { FormattedMessage } from 'react-intl'

import { InvoiceItem } from '../../../../types'
import InvoiceItemForm from '../form'

type Props = {
  open: boolean

  onSubmit: (item: InvoiceItem) => void
  onClose: () => void
}

const InvoiceItemModal: FC<Props> = ({ open, onSubmit, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} closeButton blur fullScreen>
      <Modal.Header>
        <Text size={22}>
          <FormattedMessage defaultMessage="Invoice Item" />
        </Text>
      </Modal.Header>

      <Modal.Body>
        <InvoiceItemForm onSubmit={onSubmit} onClose={onClose} />
      </Modal.Body>
    </Modal>
  )
}

export default InvoiceItemModal
