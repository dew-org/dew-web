import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { Product } from '../../types'

const SellPriceField = () => {
  const {
    register,
    formState: {
      errors: { sellPrice: sellPriceError },
    },
  } = useFormContext<Product>()

  const intl = useIntl()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Sell price',
      })}
      type="number"
      helperText={sellPriceError?.message}
      helperColor="error"
      width="100%"
      {...register('sellPrice', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Sell price is required',
          }),
        },
        pattern: {
          value: /^\d+(\.\d{1,2})?$/,
          message: intl.formatMessage({
            defaultMessage: 'Sell price must be a number',
          }),
        },
      })}
    />
  )
}

export default SellPriceField
