import { useCurrency } from '@dew-org/shared'
import { Button, Grid, Loading, Spacer } from '@nextui-org/react'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { Product } from '../../types'
import CodeField from './code.field'
import DescriptionField from './description.field'
import DiscountField from './discount.field'
import NameField from './name.field'
import RegularPriceField from './regular-price.field'
import SalePriceField from './sale-price.field'
import SkuField from './sku.field'
import TaxField from './tax.field'

type Props = {
  onSubmit: (values: Product) => void
}

const ProductForm: FC<Props> = ({ onSubmit }) => {
  const currency = useCurrency()

  const productForm = useForm<Product>({
    defaultValues: {
      discount: 0,
      tax: 0,
      regularPrice: {
        currency,
      },
      salePrice: {
        currency,
      },
    },
  })

  return (
    <FormProvider {...productForm}>
      <form onSubmit={productForm.handleSubmit(onSubmit)}>
        <Grid.Container gap={2}>
          <Grid xs={12} md={6}>
            <CodeField />
          </Grid>
          <Grid xs={12} md={6}>
            <SkuField />
          </Grid>

          <Grid xs={12}>
            <NameField />
          </Grid>

          <Grid xs={12} md={6}>
            <RegularPriceField />
          </Grid>
          <Grid xs={12} md={6}>
            <SalePriceField />
          </Grid>

          <Grid xs={6}>
            <DiscountField />
          </Grid>
          <Grid xs={6}>
            <TaxField />
          </Grid>

          <Grid xs={12}>
            <DescriptionField />
          </Grid>
        </Grid.Container>

        <Spacer y={1} x={0} />

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
