import { Button, Grid, Loading, Spacer } from '@nextui-org/react'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import type { CreateShop } from '../../types'
import AddressField from './address.field'
import EmailField from './email.field'
import NameField from './name.field'
import NitField from './nit.field'
import PhoneField from './phone.field'

type Props = {
  onSubmit: (shop: CreateShop) => void
}

const ShopForm: FC<Props> = ({ onSubmit }) => {
  const form = useForm<CreateShop>()

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Grid.Container gap={2}>
          <Grid xs={12}>
            <NitField />
          </Grid>

          <Grid xs={12}>
            <NameField />
          </Grid>

          <Grid xs={12} md={6}>
            <PhoneField />
          </Grid>

          <Grid xs={12} md={6}>
            <EmailField />
          </Grid>

          <Grid xs={12}>
            <AddressField />
          </Grid>
        </Grid.Container>

        <Spacer y={1} />

        <Button
          disabled={form.formState.isSubmitting}
          type="submit"
          color="primary"
          shadow
          css={{ width: '100%' }}
        >
          {form.formState.isSubmitting ? (
            <Loading color="currentColor" size="sm" />
          ) : (
            <FormattedMessage defaultMessage="Save" />
          )}
        </Button>
      </form>
    </FormProvider>
  )
}

export default ShopForm
