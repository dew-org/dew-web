import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { ProductInventory } from '../../types'

const StockField = () => {
  const {
    register,
    formState: {
      errors: { stock: stockError },
    },
  } = useFormContext<ProductInventory>()

  const intl = useIntl()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Stock',
      })}
      type="number"
      helperText={stockError?.message}
      helperColor="error"
      width="100%"
      {...register('stock', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Stock is required',
          }),
        },
        pattern: {
          value: /^\d*$/,
          message: intl.formatMessage({
            defaultMessage: 'Stock must be a number',
          }),
        },
      })}
    />
  )
}

export default StockField
