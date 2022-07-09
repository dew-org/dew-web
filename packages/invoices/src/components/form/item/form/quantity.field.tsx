import { useProductInventory } from '@dew-org/inventory'
import { Container, Input, Row, Spacer, Text } from '@nextui-org/react'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'

import { InvoiceItem } from '../../../../types'

const QuantityField: FC = () => {
  const {
    register,
    watch,
    formState: {
      errors: { quantity: quantityError },
    },
  } = useFormContext<InvoiceItem>()

  const intl = useIntl()

  const { product } = useProductInventory(watch('product.code'))

  return (
    <Container gap={0}>
      <Row>
        <Input
          label={intl.formatMessage({ defaultMessage: 'Quantity' })}
          helperText={quantityError?.message}
          helperColor="error"
          type="number"
          color="primary"
          fullWidth
          bordered
          {...register('quantity', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Quantity is required',
              }),
            },
            pattern: {
              value: /^\d*$/,
              message: intl.formatMessage({
                defaultMessage: 'Quantity must be a number',
              }),
            },
            min: {
              value: 1,
              message: intl.formatMessage({
                defaultMessage: 'Quantity must be greater than 0',
              }),
            },
            max: {
              value: product?.stock || 0,
              message: intl.formatMessage(
                { defaultMessage: 'Quantity must be less than {max}' },
                { max: product?.stock || 0 },
              ),
            },
          })}
        />
      </Row>

      <Spacer y={1.2} />

      <Row align="flex-end" justify="flex-end">
        <Text small css={{ color: '$accents8' }}>
          <FormattedMessage
            defaultMessage="In stock: {stock}"
            values={{ stock: product?.stock || 0 }}
          />
        </Text>
      </Row>
    </Container>
  )
}

export default QuantityField
