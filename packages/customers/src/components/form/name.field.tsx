import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { Customer } from '../../types'

const NameField = () => {
  const {
    register,
    formState: {
      errors: { name: nameError },
    },
  } = useFormContext<Customer>()

  const intl = useIntl()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Name',
      })}
      helperText={nameError?.message}
      helperColor="error"
      fullWidth
      bordered
      {...register('name', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Name is required',
          }),
        },
      })}
    />
  )
}

export default NameField
