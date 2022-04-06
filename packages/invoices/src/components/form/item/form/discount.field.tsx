import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { InvoiceItem } from '../../../../types'

const DiscountField = () => {
  const {
    register,
    formState: {
      errors: { discount: discountError },
    },
  } = useFormContext<InvoiceItem>()

  const intl = useIntl()

  return (
    <Input
      label={intl.formatMessage({ defaultMessage: 'Discount' })}
      helperText={discountError?.message}
      helperColor="error"
      type="number"
      color="primary"
      labelLeft="%"
      fullWidth
      bordered
      {...register('discount', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Discount is required',
          }),
        },
        min: {
          value: 0,
          message: intl.formatMessage({
            defaultMessage: 'Discount must be greater than 0',
          }),
        },
        max: {
          value: 100,
          message: intl.formatMessage({
            defaultMessage: 'Discount must be less than 100',
          }),
        },
      })}
    />
  )
}

export default DiscountField
