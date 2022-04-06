import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { InvoiceItem } from '../../../../types'

const TaxField = () => {
  const {
    register,
    formState: {
      errors: { tax: taxError },
    },
  } = useFormContext<InvoiceItem>()

  const intl = useIntl()

  return (
    <Input
      label={intl.formatMessage({ defaultMessage: 'Tax' })}
      helperText={taxError?.message}
      helperColor="error"
      type="number"
      color="primary"
      labelLeft="%"
      fullWidth
      bordered
      {...register('tax', {
        required: {
          value: true,
          message: intl.formatMessage({ defaultMessage: 'Tax is required' }),
        },
        min: {
          value: 0,
          message: intl.formatMessage({
            defaultMessage: 'Tax must be greater than 0',
          }),
        },
        max: {
          value: 100,
          message: intl.formatMessage({
            defaultMessage: 'Tax must be less than 100',
          }),
        },
      })}
    />
  )
}

export default TaxField
