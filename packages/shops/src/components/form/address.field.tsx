import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateShop } from '../../types'

const AddressField = () => {
  const {
    register,
    formState: {
      errors: { address },
    },
  } = useFormContext<CreateShop>()

  const intl = useIntl()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Address',
      })}
      helperText={address?.message}
      helperColor="error"
      fullWidth
      bordered
      {...register('address', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Address is required',
          }),
        },
      })}
    />
  )
}

export default AddressField
