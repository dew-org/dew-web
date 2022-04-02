import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { Customer } from '../../types'

const PhoneNumberField = () => {
  const {
    register,
    formState: {
      errors: { phoneNumber: phoneNumberError },
    },
  } = useFormContext<Customer>()

  const intl = useIntl()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Phone number',
      })}
      helperText={phoneNumberError?.message}
      helperColor="error"
      width="100%"
      {...register('phoneNumber', {
        pattern: {
          value: /^\+?[0-9]{10,15}$/,
          message: intl.formatMessage({
            defaultMessage: 'Phone number is invalid',
          }),
        },
      })}
    />
  )
}

export default PhoneNumberField
