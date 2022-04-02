import { Textarea } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { Product } from '../../types'

const DescriptionField = () => {
  const {
    register,
    formState: {
      errors: { description: descriptionError },
    },
  } = useFormContext<Product>()

  const intl = useIntl()

  return (
    <Textarea
      label={intl.formatMessage({
        defaultMessage: 'Description',
      })}
      helperText={descriptionError?.message}
      helperColor="error"
      width="100%"
      rows={5}
      {...register('description')}
    />
  )
}

export default DescriptionField
