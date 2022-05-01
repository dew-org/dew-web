import { Button, Grid, Loading, Spacer } from '@nextui-org/react'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { Customer } from '../../types'
import EmailField from './email.field'
import IdField from './id.field'
import LastNameField from './last-name.field'
import NameField from './name.field'
import PhoneNumberField from './phone-number.field'

type Props = {
  onSubmit: (customer: Customer) => void

  id?: string
}

const CustomerForm: FC<Props> = ({ onSubmit, id }) => {
  const customerForm = useForm<Customer>({
    defaultValues: {
      id,
    },
  })

  return (
    <FormProvider {...customerForm}>
      <form onSubmit={customerForm.handleSubmit(onSubmit)}>
        <Grid.Container gap={2}>
          <Grid xs={12}>
            <IdField />
          </Grid>

          <Grid xs={12} md={6}>
            <NameField />
          </Grid>

          <Grid xs={12} md={6}>
            <LastNameField />
          </Grid>

          <Grid xs={12} md={6}>
            <PhoneNumberField />
          </Grid>

          <Grid xs={12} md={6}>
            <EmailField />
          </Grid>
        </Grid.Container>

        <Spacer y={1} />

        <Button
          disabled={customerForm.formState.isSubmitting}
          type="submit"
          color="primary"
          shadow
          css={{ width: '100%' }}
        >
          {customerForm.formState.isSubmitting ? (
            <Loading color="currentColor" size="sm" />
          ) : (
            <FormattedMessage defaultMessage="Save" />
          )}
        </Button>
      </form>
    </FormProvider>
  )
}

export default CustomerForm
