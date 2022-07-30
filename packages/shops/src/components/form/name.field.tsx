import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateShop } from '../../types'

const NameField = () => {
  const {
    register,
    formState: {
      errors: { name },
    },
  } = useFormContext<CreateShop>()

  const intl = useIntl()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Name',
      })}
      helperText={name?.message}
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
