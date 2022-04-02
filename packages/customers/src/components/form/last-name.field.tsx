import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { Customer } from '../../types'

const LastNameField = () => {
  const {
    register,
    formState: {
      errors: { lastName: lastNameError },
    },
  } = useFormContext<Customer>()

  const intl = useIntl()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Last name',
      })}
      helperText={lastNameError?.message}
      helperColor="error"
      width="100%"
      {...register('lastName', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Last name is required',
          }),
        },
      })}
    />
  )
}

export default LastNameField
