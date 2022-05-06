import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { Product } from '../../types'

const RegularPriceField = () => {
  const {
    register,
    watch,
    formState: {
      errors: { regularPrice: regularPriceError },
    },
  } = useFormContext<Product>()

  const intl = useIntl()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Regular price',
      })}
      type="number"
      helperText={regularPriceError?.amount?.message}
      helperColor="error"
      labelLeft={watch('regularPrice.currency')}
      fullWidth
      bordered
      {...register('regularPrice.amount', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Regular price is required',
          }),
        },
        pattern: {
          value: /^\d+(\.\d{1,2})?$/,
          message: intl.formatMessage({
            defaultMessage: 'Regular price must be a number',
          }),
        },
      })}
    />
  )
}

export default RegularPriceField
