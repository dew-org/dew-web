import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { Customer } from '../../types'

const IdField = () => {
  const {
    register,
    formState: {
      errors: { id: idError },
    },
  } = useFormContext<Customer>()

  const intl = useIntl()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Id',
      })}
      helperText={idError?.message}
      helperColor="error"
      fullWidth
      bordered
      {...register('id', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Id is required',
          }),
        },
        pattern: {
          value: /^[0-9]*$/,
          message: intl.formatMessage({
            defaultMessage: 'Id must be a number',
          }),
        },
      })}
    />
  )
}

export default IdField
