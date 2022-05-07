import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { Product } from '../../types'

const SalePriceField = () => {
  const {
    register,
    watch,
    formState: {
      errors: { salePrice: salePriceError },
    },
  } = useFormContext<Product>()

  const intl = useIntl()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Sale price',
      })}
      type="number"
      helperText={salePriceError?.amount?.message}
      helperColor="error"
      labelLeft={watch('salePrice.currency')}
      fullWidth
      bordered
      {...register('salePrice.amount', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Sale price is required',
          }),
        },
        pattern: {
          value: /^\d+(\.\d{1,2})?$/,
          message: intl.formatMessage({
            defaultMessage: 'Sale price must be a number',
          }),
        },
      })}
    />
  )
}

export default SalePriceField
