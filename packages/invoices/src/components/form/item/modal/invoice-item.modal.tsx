import { Product } from '@dew-org/products'
import { Modal, Row, Spacer, Text, Tooltip } from '@nextui-org/react'
import { FC } from 'react'
import { Bookmark, Chart, Discount } from 'react-iconly'
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

              <div style={{ display: 'flex' }}>
                <Text
                  del={product.discount > 0}
                  css={{ color: '$accents4', fontWeight: '$semibold' }}
                >
                  $<FormattedNumber value={product.salePrice} />
                </Text>
                {product.discount > 0 && (
                  <>
                    <Spacer x={0.5} />

                    <Text css={{ color: '$accents4', fontWeight: '$semibold' }}>
                      $
                      <FormattedNumber
                        value={product.salePrice * (1 - product.discount)}
                      />
                    </Text>
                  </>
                )}
              </div>
            </Row>

            <Tooltip
              css={{ zIndex: '$max' }}
              content={<FormattedMessage defaultMessage="Stock" />}
            >
              <Chart />
              <Spacer x={0.2} />
              {product.stock}
            </Tooltip>

            <Row wrap="wrap" justify="space-between">
              <Tooltip
                css={{ zIndex: '$max' }}
                content={<FormattedMessage defaultMessage="Discount" />}
              >
                <Discount />
                <Spacer x={0.2} />
                {product.discount * 100}%
              </Tooltip>

              <Tooltip
                css={{ zIndex: '$max' }}
                content={<FormattedMessage defaultMessage="Tax" />}
              >
                <Bookmark />
                <Spacer x={0.2} />
                {product.tax * 100}%
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
