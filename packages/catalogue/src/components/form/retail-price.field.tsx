import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { Product } from '../../types'

const RetailPriceField = () => {
  const {
    register,
    watch,
    formState: {
      errors: { price },
    },
  } = useFormContext<Product>()

  const intl = useIntl()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Retail price',
      })}
      type="number"
      helperText={price?.retailPrice?.message}
      helperColor="error"
      labelLeft={watch('price.currency')}
      fullWidth
      bordered
      {...register('price.retailPrice', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Retail price is required',
          }),
        },
        pattern: {
          value: /^\d+(\.\d{1,2})?$/,
          message: intl.formatMessage({
            defaultMessage: 'Retail price must be a number',
          }),
        },
      })}
    />
  )
}

export default RetailPriceField
