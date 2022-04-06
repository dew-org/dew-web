import { Product } from '@dew-org/products'
import { Button, Grid, Loading, Spacer } from '@nextui-org/react'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { InvoiceItem } from '../../../../types'
import DiscountField from './discount.field'
import QuantityField from './quantity.field'
import TaxField from './tax.field'

type Props = {
  product: Product

  onSubmit: (item: InvoiceItem) => void
}

const InvoiceItemForm: FC<Props> = ({ onSubmit, product }) => {
  const itemForm = useForm<InvoiceItem>({
    defaultValues: {
      product: {
        code: product.code,
        name: product.name,
      },
      price: product.sellPrice,
      quantity: 1,
      discount: 0,
      tax: 0,
    },
  })

  return (
    <FormProvider {...itemForm}>
      <form onSubmit={itemForm.handleSubmit(onSubmit)}>
        <Grid.Container gap={1.7}>
          <Grid xs={12}>
            <QuantityField max={product.stock} />
          </Grid>

          <Grid xs={12} md={6}>
            <TaxField />
          </Grid>

          <Grid xs={12} md={6}>
            <DiscountField />
          </Grid>
        </Grid.Container>

        <Spacer y={1} />

        <Button
          disabled={itemForm.formState.isSubmitting}
          type="submit"
          color="primary"
          shadow
          css={{ width: '100%' }}
        >
          {itemForm.formState.isSubmitting ? (
            <Loading color="currentColor" size="sm" />
          ) : (
            <FormattedMessage defaultMessage="Add" />
          )}
        </Button>
      </form>
    </FormProvider>
  )
}

export default InvoiceItemForm
