import { Card, Row, Spacer, Text, Tooltip } from '@nextui-org/react'
import { FC } from 'react'
import { Bookmark, Chart, Discount } from 'react-iconly'
import { FormattedMessage, FormattedNumber } from 'react-intl'

import { InvoiceItem } from '../../../../types'

type Props = {
  item: InvoiceItem
}

const ItemCard: FC<Props> = ({ item }) => {
  return (
    <Card key={item.product.code} css={{ mt: 10 }}>
      <Row wrap="wrap" justify="space-between">
        <Text>{item.product.name}</Text>

        <Text css={{ color: '$accents4', fontWeight: '$semibold' }}>
          $<FormattedNumber value={item.price} />
        </Text>
      </Row>

      <Tooltip content={<FormattedMessage defaultMessage="Quantity" />}>
        <Chart />
        <Spacer x={0.2} />
        {item.quantity}
      </Tooltip>

      <Spacer y={0.5} />

      <Row wrap="wrap" justify="space-between">
        <Tooltip content={<FormattedMessage defaultMessage="Discount" />}>
          <Discount />
          <Spacer x={0.2} />
          {item.discount}
        </Tooltip>

        <Tooltip content={'Tax'}>
          <Bookmark />
          <Spacer x={0.2} />
          {item.tax}
        </Tooltip>
      </Row>

      <Spacer y={0.5} />

      <Text>
        <FormattedMessage
          defaultMessage="Subtotal: {subtotal}"
          values={{
            subtotal: <FormattedNumber value={item.quantity * item.price} />,
          }}
        />
      </Text>

      <Text>
        <FormattedMessage
          defaultMessage="Total: {total}"
          values={{
            total: (
              <FormattedNumber
                value={
                  item.quantity *
                  item.price *
                  (1 + item.tax / 100) *
                  (1 - item.discount / 100)
                }
              />
            ),
          }}
        />
      </Text>
    </Card>
  )
}

export default ItemCard
