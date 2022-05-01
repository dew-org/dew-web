import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { Customer } from '../../types'

const EmailField = () => {
  const {
    register,
    formState: {
      errors: { email: emailError },
    },
  } = useFormContext<Customer>()

  const intl = useIntl()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Email',
      })}
      helperText={emailError?.message}
      helperColor="error"
      fullWidth
      bordered
      {...register('email', {
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: intl.formatMessage({
            defaultMessage: 'Invalid email address',
          }),
        },
      })}
    />
  )
}

export default EmailField
