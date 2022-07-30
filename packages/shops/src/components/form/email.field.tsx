import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateShop } from '../../types'

const EmailField = () => {
  const {
    register,
    formState: {
      errors: { email },
    },
  } = useFormContext<CreateShop>()

  const intl = useIntl()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Email',
      })}
      helperText={email?.message}
      helperColor="error"
      fullWidth
      bordered
      {...register('email', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Email is required',
          }),
        },
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: intl.formatMessage({
            defaultMessage: 'Email is invalid',
          }),
        },
      })}
    />
  )
}

export default EmailField
