import { Button, Grid, Loading, Spacer } from '@nextui-org/react'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { Product } from '../../types'
import BuyPriceField from './buy-price.field'
import CodeField from './code.field'
import DescriptionField from './description.field'
import NameField from './name.field'
import SellPriceField from './sell-price.field'
import StockField from './stock.field'

type Props = {
  onSubmit: (product: Product) => void
}

const ProductForm: FC<Props> = ({ onSubmit }) => {
  const productForm = useForm<Product>()

  return (
    <FormProvider {...productForm}>
      <form onSubmit={productForm.handleSubmit(onSubmit)}>
        <Grid.Container gap={2}>
          <Grid xs={12}>
            <CodeField />
          </Grid>

          <Grid xs={12}>
            <NameField />
          </Grid>

          <Grid xs={12} md={6}>
            <BuyPriceField />
          </Grid>
          <Grid xs={12} md={6}>
            <SellPriceField />
          </Grid>

          <Grid xs={12}>
            <StockField />
          </Grid>

          <Grid xs={12}>
            <DescriptionField />
          </Grid>
        </Grid.Container>

        <Spacer y={1} />

        <Button
          disabled={productForm.formState.isSubmitting}
          type="submit"
          color="primary"
          shadow
          css={{ width: '100%' }}
        >
          {productForm.formState.isSubmitting ? (
            <Loading color="currentColor" size="sm" />
          ) : (
            <FormattedMessage defaultMessage="Save" />
          )}
        </Button>
      </form>
    </FormProvider>
  )
}

export default ProductForm
