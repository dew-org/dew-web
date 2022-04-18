import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { Product } from '../../types'

const CodeField = () => {
  const {
    register,
    formState: {
      errors: { code: codeError },
    },
  } = useFormContext<Product>()

  const intl = useIntl()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Code',
      })}
      helperText={codeError?.message}
      helperColor="error"
      width="100%"
      {...register('code', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Code is required',
          }),
        },
      })}
    />
  )
}

export default CodeField
