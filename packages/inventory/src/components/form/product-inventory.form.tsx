import { Product } from '@dew-org/catalogue'
import { Button, Grid, Loading, Spacer } from '@nextui-org/react'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { ProductInventory } from '../../types'
import StockField from './stock.field'

type Props = {
  product: Product

  onSubmit: (productInventory: ProductInventory) => void
}

const ProductInventoryForm: FC<Props> = ({ product, onSubmit }) => {
  const productInventoryForm = useForm<ProductInventory>({
    defaultValues: {
      code: product.code,
      sku: product.sku,
      stock: 1,
    },
  })

  return (
    <FormProvider {...productInventoryForm}>
      <form onSubmit={productInventoryForm.handleSubmit(onSubmit)}>
        <Grid.Container gap={2}>
          <Grid xs={12}>
            <StockField />
          </Grid>
        </Grid.Container>

        <Spacer y={1} x={0} />

        <Button
          disabled={productInventoryForm.formState.isSubmitting}
          type="submit"
          color="primary"
          shadow
          css={{ width: '100%' }}
        >
          {productInventoryForm.formState.isSubmitting ? (
            <Loading color="currentColor" size="sm" />
          ) : (
            <FormattedMessage defaultMessage="Save" />
          )}
        </Button>
      </form>
    </FormProvider>
  )
}

export default ProductInventoryForm
