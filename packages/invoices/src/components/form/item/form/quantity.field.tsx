import { Input } from '@nextui-org/react'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { InvoiceItem } from '../../../../types'

type Props = {
  max: number
}

const QuantityField: FC<Props> = ({ max }) => {
  const {
    register,
    formState: {
      errors: { quantity: quantityError },
    },
  } = useFormContext<InvoiceItem>()

  const intl = useIntl()

  return (
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
          value: /^[0-9]*$/,
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
          value: max,
          message: intl.formatMessage(
            { defaultMessage: 'Quantity must be less than {max}' },
            { max },
          ),
        },
      })}
    />
  )
}

export default QuantityField
