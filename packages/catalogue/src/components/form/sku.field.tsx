import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { Product } from '../../types'

const SkuField = () => {
  const {
    register,
    formState: {
      errors: { sku: skuError },
    },
  } = useFormContext<Product>()

  const intl = useIntl()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Sku',
      })}
      helperText={skuError?.message}
      helperColor="error"
      fullWidth
      bordered
      {...register('sku', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Sku is required',
          }),
        },
      })}
    />
  )
}

export default SkuField
