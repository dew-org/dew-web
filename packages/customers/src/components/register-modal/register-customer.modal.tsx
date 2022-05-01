import { Modal, Text } from '@nextui-org/react'
import { FC } from 'react'
import { FormattedMessage } from 'react-intl'

import { Customer } from '../../types'
import CustomerForm from '../form'

type Props = {
  open: boolean
  id?: string

  onSubmit: (customer: Customer) => void
  onClose: () => void
}

const RegisterCustomerModal: FC<Props> = ({ open, id, onSubmit, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} closeButton blur>
      <Modal.Header>
        <Text size={22}>
          <FormattedMessage defaultMessage="Register Customer" />
        </Text>
      </Modal.Header>

      <Modal.Body>
        <CustomerForm id={id} onSubmit={onSubmit} />
      </Modal.Body>
    </Modal>
  )
}

export default RegisterCustomerModal
