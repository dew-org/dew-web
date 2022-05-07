import { Button, Divider, Grid, Row, Spacer, Text } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { FormattedMessage, FormattedNumber } from 'react-intl'

import { Invoice } from '../../types'
import ItemCard from './item/card'

const GenerateInvoiceStep = () => {
  const { watch } = useFormContext<Invoice>()

  const customer = watch('customer')
  const items = watch('items')

  return (
    <>
      <Text b h4>
        <FormattedMessage defaultMessage="Customer" />
      </Text>
      <Text>{`${customer.id}, ${customer.fullName}`}</Text>

      <Spacer y={0.5} />

      <Text b h4>
        <FormattedMessage defaultMessage="Items" />
      </Text>
      <Grid.Container gap={2}>
        {items.map(item => (
          <Grid xs={12} md={4} key={item.product.code}>
            <ItemCard item={item} currency={watch('currency')} />
          </Grid>
        ))}
      </Grid.Container>

      <Divider y={1.5} />

      <Row wrap="wrap" justify="space-between">
        <Text b>
          <FormattedMessage
            defaultMessage="Subtotal: {subTotal}"
            values={{
              subTotal: (
                <FormattedNumber
                  value={items.reduce(
                    (acc, item) => acc + item.quantity * item.price,
                    0,
                  )}
                  style="currency"
                  currency={watch('currency')}
                />
              ),
            }}
          />
        </Text>

        <Text b>
          <FormattedMessage
            defaultMessage="Total: {total}"
            values={{
              total: (
                <FormattedNumber
                  value={items.reduce(
                    (acc, item) =>
                      acc +
                      item.quantity *
                        item.price *
                        (1 + item.tax / 100) *
                        (1 - item.discount / 100),
                    0,
                  )}
                  style="currency"
                  currency={watch('currency')}
                />
              ),
            }}
          />
        </Text>
      </Row>

      <Divider y={1.5} />

      <Button type="submit" css={{ w: '100%' }}>
        <FormattedMessage defaultMessage="Generate" />
      </Button>
    </>
  )
}

export default GenerateInvoiceStep
