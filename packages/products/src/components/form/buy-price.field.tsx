import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { Product } from '../../types'

const BuyPriceField = () => {
  const {
    register,
    formState: {
      errors: { buyPrice: buyPriceError },
    },
  } = useFormContext<Product>()

  const intl = useIntl()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Buy price',
      })}
      type="number"
      helperText={buyPriceError?.message}
      helperColor="error"
      width="100%"
      {...register('buyPrice', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Buy price is required',
          }),
        },
        pattern: {
          value: /^\d+(\.\d{1,2})?$/,
          message: intl.formatMessage({
            defaultMessage: 'Buy price must be a number',
          }),
        },
      })}
    />
  )
}

export default BuyPriceField
