import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateShop } from '../../types'

const PhoneField = () => {
  const {
    register,
    formState: {
      errors: { phone },
    },
  } = useFormContext<CreateShop>()

  const intl = useIntl()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Phone',
      })}
      helperText={phone?.message}
      helperColor="error"
      fullWidth
      bordered
      {...register('phone', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Phone is required',
          }),
        },
        pattern: {
          value: /^\+?[0-9]{10,15}$/,
          message: intl.formatMessage({
            defaultMessage: 'Phone is invalid',
          }),
        },
      })}
    />
  )
}

export default PhoneField
