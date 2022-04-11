import { Product } from '@dew-org/products'
import { Modal, Row, Spacer, Text, Tooltip } from '@nextui-org/react'
import { FC } from 'react'
import { Chart } from 'react-iconly'
import { FormattedMessage, FormattedNumber } from 'react-intl'

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
            <Text size={18} b>
              Product
            </Text>
            <Row wrap="wrap" justify="space-between">
              <Text>{product.name}</Text>

              <Text css={{ color: '$accents4', fontWeight: '$semibold' }}>
                $<FormattedNumber value={product.salePrice} />
              </Text>

              <Tooltip content={'Stock'}>
                <Chart />
                <Spacer x={0.2} />
                {product.stock}
              </Tooltip>
            </Row>
          </>
        )}

        {product && <InvoiceItemForm product={product} onSubmit={onSubmit} />}
      </Modal.Body>
    </Modal>
  )
}

export default InvoiceItemModal
