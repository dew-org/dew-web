import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateShop } from '../../types'

const validateNit = (nit: string) => {
  nit = nit.trim()

  if (!nit) {
    return 'NIT is required'
  }

  if (nit.length !== 10) {
    return 'NIT must be 10 characters long'
  }

  const multiplier = [41, 37, 29, 23, 19, 17, 13, 7, 3]
  const digits = nit.split('').map(Number)

  let sum = digits
    .slice(0, -1)
    .map((digit, index) => digit * multiplier[index])
    .reduce((a, b) => a + b)

  sum = sum % 11

  if (sum >= 2) {
    sum = 11 - sum
  }

  if (sum !== digits[9]) {
    return 'NIT is invalid'
  }

  return undefined
}

const NitField = () => {
  const {
    register,
    formState: {
      errors: { nit },
    },
  } = useFormContext<CreateShop>()

  const intl = useIntl()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'NIT',
      })}
      helperText={nit?.message}
      helperColor="error"
      fullWidth
      bordered
      {...register('nit', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'NIT is required',
          }),
        },
        validate: validateNit,
      })}
    />
  )
}

export default NitField
